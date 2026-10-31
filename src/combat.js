import * as THREE from 'three'
import { ITEMS } from './items.js'
import { clamp, damp, lerp, mulberry32 } from './utils.js'

const MAX_AMMO = { pistol: 8, shotgun: 6, rifle: 30 }

export class Combat {
  constructor(game) {
    this.game = game
    this.camera = game.camera
    this.player = game.player
    this.zombies = game.zombies
    this.world = game.world
    this.audio = game.audio
    this.ui = game.ui
    this.inventory = game.inventory

    this.enabled = false
    this.cooldown = 0
    this.attackT = -1
    this.attackKind = null
    this.attackDone = false
    this.reloadT = 0
    this.reloadWeapon = null
    this.aiming = false
    this.recoil = 0
    this.recoilPitch = 0
    this.recoilYaw = 0
    this.swayX = 0
    this.swayY = 0
    this.muzzleT = 0
    this.lastFire = -99
    this.mags = { ...MAX_AMMO }
    this.condition = {}
    this.rng = mulberry32(808)
    this._dir = new THREE.Vector3()
    this._right = new THREE.Vector3()
    this._up = new THREE.Vector3()
    this._ray = new THREE.Raycaster()
    this._tmp = new THREE.Vector3()
    this._impacts = []

    this.buildView()
    this.bind()
  }

  // ------------------------------------------------------------- viewmodel
  buildView() {
    this.viewScene = new THREE.Scene()
    this.viewCamera = new THREE.PerspectiveCamera(58, 16 / 9, 0.01, 6)
    this.viewScene.add(this.viewCamera)
    this.root = new THREE.Group()
    this.root.position.set(0.26, -0.23, -0.48)
    this.viewScene.add(this.root)

    const amb = new THREE.AmbientLight(0xd8cfc0, 0.62)
    const key = new THREE.DirectionalLight(0xffe2bd, 1.25)
    key.position.set(-1.2, 1.8, 0.9)
    const rim = new THREE.DirectionalLight(0x8ea2b8, 0.55)
    rim.position.set(1.6, -0.4, -0.8)
    this.viewScene.add(amb, key, rim)
    this.viewLights = { amb, key, rim }

    this.models = {}
    this.models.machete = this.buildMachete()
    this.models.pipe = this.buildPipe()
    this.models.axe = this.buildAxe()
    this.models.knife = this.buildKnife()
    this.models.pistol = this.buildPistol()
    this.models.shotgun = this.buildShotgun()
    this.models.rifle = this.buildRifle()
    for (const m of Object.values(this.models)) {
      m.visible = false
      this.root.add(m)
    }

    // muzzle flash
    const flashCanvas = document.createElement('canvas')
    flashCanvas.width = flashCanvas.height = 128
    const ctx = flashCanvas.getContext('2d')
    const grad = ctx.createRadialGradient(64, 64, 2, 64, 64, 62)
    grad.addColorStop(0, 'rgba(255,244,208,1)')
    grad.addColorStop(0.28, 'rgba(255,204,110,0.95)')
    grad.addColorStop(0.62, 'rgba(255,124,38,0.42)')
    grad.addColorStop(1, 'rgba(255,90,20,0)')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, 128, 128)
    ctx.strokeStyle = 'rgba(255,226,166,0.85)'
    ctx.lineWidth = 3
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2 + 0.2
      ctx.beginPath()
      ctx.moveTo(64 + Math.cos(a) * 14, 64 + Math.sin(a) * 14)
      ctx.lineTo(64 + Math.cos(a) * (34 + (i % 3) * 8), 64 + Math.sin(a) * (34 + (i % 3) * 8))
      ctx.stroke()
    }
    const tex = new THREE.CanvasTexture(flashCanvas)
    this.flashSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, color: 0xffd9a0, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false }))
    this.flashSprite.scale.set(0.34, 0.34, 1)
    this.flashSprite.visible = false
    this.flashSprite.renderOrder = 999
    this.viewScene.add(this.flashSprite)
    this.flashLight = new THREE.PointLight(0xffb867, 0, 3.4, 2)
    this.viewScene.add(this.flashLight)

    this.current = null
    this.setWeapon(this.inventory.equipped || 'machete', true)
  }

  mat(color, opts = {}) {
    return new THREE.MeshStandardMaterial({ color, roughness: opts.roughness ?? 0.55, metalness: opts.metalness ?? 0.25, emissive: new THREE.Color(color).multiplyScalar(opts.emissive ?? 0.12), envMapIntensity: 1.2 })
  }

  addBox(parent, mat, w, h, d, x, y, z, rx = 0, ry = 0, rz = 0) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
    m.position.set(x, y, z)
    m.rotation.set(rx, ry, rz)
    parent.add(m)
    return m
  }

  addCyl(parent, mat, r1, r2, h, x, y, z, rx = 0, ry = 0, rz = 0, seg = 12) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, h, seg), mat)
    m.position.set(x, y, z)
    m.rotation.set(rx, ry, rz)
    parent.add(m)
    return m
  }

  buildHand(parent, x, y, z, ry = 0) {
    const skin = this.mat('#a88468', { roughness: 0.8, metalness: 0, emissive: 0.1 })
    const sleeve = this.mat('#4a5146', { roughness: 0.95, metalness: 0, emissive: 0.08 })
    const hand = new THREE.Group()
    hand.position.set(x, y, z)
    hand.rotation.y = ry
    parent.add(hand)
    this.addBox(hand, skin, 0.072, 0.085, 0.11, 0, 0, 0)
    this.addBox(hand, skin, 0.06, 0.06, 0.05, -0.045, -0.01, 0.03)
    this.addBox(hand, sleeve, 0.085, 0.1, 0.2, 0.01, -0.01, 0.16, 0.18)
    return hand
  }

  buildMachete() {
    const g = new THREE.Group()
    const steel = this.mat('#a7a795', { roughness: 0.34, metalness: 0.85, emissive: 0.06 })
    const edge = this.mat('#c9c6b0', { roughness: 0.22, metalness: 0.9, emissive: 0.08 })
    const grip = this.mat('#3d3428', { roughness: 0.85, metalness: 0.05, emissive: 0.05 })
    const tape = this.mat('#6f6350', { roughness: 1, metalness: 0, emissive: 0.04 })
    this.addBox(g, grip, 0.052, 0.058, 0.24, 0, 0, 0.02, 0, 0, -0.1)
    this.addBox(g, tape, 0.058, 0.062, 0.07, 0, 0, 0.055, 0, 0, -0.1)
    this.addBox(g, tape, 0.058, 0.062, 0.045, 0, 0, 0.13, 0, 0, -0.1)
    this.addBox(g, this.mat('#7b7768', { metalness: 0.6 }), 0.13, 0.03, 0.045, 0, 0.012, -0.115, 0, 0, -0.1)
    this.addBox(g, steel, 0.075, 0.018, 0.56, 0.005, 0.03, -0.39, -0.045, 0, -0.1)
    this.addBox(g, edge, 0.018, 0.02, 0.53, 0.032, 0.04, -0.39, -0.045, 0, -0.1)
    g.rotation.set(0.14, -0.12, -0.12)
    g.position.set(0, 0.02, -0.05)
    const hand = this.buildHand(g, 0, -0.02, 0.06, 0.1)
    hand.rotation.z = 0.2
    return g
  }

  buildKnife() {
    const g = new THREE.Group()
    const steel = this.mat('#b6b6a6', { roughness: 0.28, metalness: 0.9, emissive: 0.08 })
    const grip = this.mat('#2f2a22', { roughness: 0.9, metalness: 0.05 })
    this.addBox(g, grip, 0.04, 0.045, 0.17, 0, 0, 0.03, 0, 0, -0.08)
    this.addBox(g, this.mat('#747163', { metalness: 0.7 }), 0.06, 0.025, 0.03, 0, 0.005, -0.065, 0, 0, -0.08)
    this.addBox(g, steel, 0.028, 0.012, 0.3, 0, 0.012, -0.23, 0, 0, -0.08)
    this.buildHand(g, 0, -0.015, 0.06, 0.1)
    g.rotation.set(0.12, -0.1, -0.08)
    return g
  }

  buildPipe() {
    const g = new THREE.Group()
    const metal = this.mat('#8f9185', { roughness: 0.48, metalness: 0.8, emissive: 0.07 })
    const rust = this.mat('#6a5641', { roughness: 0.92, metalness: 0.35 })
    this.addCyl(g, metal, 0.028, 0.031, 0.72, 0, 0.02, -0.28, Math.PI / 2, 0, 0, 10)
    this.addCyl(g, rust, 0.034, 0.034, 0.09, 0, 0.02, 0.03, Math.PI / 2, 0, 0, 10)
    this.addCyl(g, rust, 0.034, 0.034, 0.06, 0, 0.02, -0.52, Math.PI / 2, 0, 0, 10)
    this.addBox(g, rust, 0.06, 0.012, 0.1, 0, 0.045, -0.3, 0, 0, 0.2)
    this.buildHand(g, 0, -0.01, 0.08, 0.1)
    g.rotation.set(0.1, -0.18, -0.06)
    return g
  }

  buildAxe() {
    const g = new THREE.Group()
    const wood = this.mat('#6c553b', { roughness: 0.9, metalness: 0.02 })
    const steel = this.mat('#9a9b8e', { roughness: 0.38, metalness: 0.8, emissive: 0.06 })
    const red = this.mat('#7d3427', { roughness: 0.7, metalness: 0.3 })
    this.addCyl(g, wood, 0.024, 0.03, 0.72, 0, 0.015, -0.24, Math.PI / 2 + 0.06, 0, 0, 8)
    this.addBox(g, steel, 0.055, 0.19, 0.2, 0, 0.075, -0.56, 0.05, 0, 0)
    this.addBox(g, steel, 0.02, 0.24, 0.17, 0.045, 0.075, -0.57, 0.05, 0, 0)
    this.addBox(g, red, 0.058, 0.05, 0.07, 0, 0.07, -0.51, 0.05, 0, 0)
    this.buildHand(g, 0, -0.005, 0.09, 0.1)
    g.rotation.set(0.12, -0.15, -0.1)
    return g
  }

  buildPistol() {
    const g = new THREE.Group()
    const metal = this.mat('#3c3f3c', { roughness: 0.42, metalness: 0.75, emissive: 0.06 })
    const dark = this.mat('#22241f', { roughness: 0.8, metalness: 0.3 })
    const grip = this.mat('#2b2c27', { roughness: 0.95, metalness: 0.05 })
    this.addBox(g, metal, 0.045, 0.05, 0.24, 0, 0.012, -0.1)
    this.addBox(g, metal, 0.036, 0.036, 0.1, 0, 0.005, -0.26)
    this.addBox(g, grip, 0.046, 0.13, 0.062, 0, -0.072, 0.005, 0.22, 0, 0)
    this.addBox(g, dark, 0.05, 0.02, 0.12, 0, 0.043, -0.06)
    this.addBox(g, dark, 0.03, 0.024, 0.03, 0, 0.052, -0.19)
    this.addBox(g, this.mat('#8d8d7c', { metalness: 0.8 }), 0.012, 0.012, 0.02, 0, 0.052, -0.275)
    this.buildHand(g, 0, -0.06, 0.03, 0.05)
    this.buildHand(g, -0.035, -0.065, 0.05, -0.25)
    g.rotation.set(0.02, -0.04, 0)
    return g
  }

  buildShotgun() {
    const g = new THREE.Group()
    const metal = this.mat('#4a4c46', { roughness: 0.4, metalness: 0.72, emissive: 0.06 })
    const wood = this.mat('#6b4f34', { roughness: 0.82, metalness: 0.03 })
    const dark = this.mat('#262823', { roughness: 0.85, metalness: 0.2 })
    this.addCyl(g, metal, 0.022, 0.022, 0.62, 0, 0.03, -0.36, Math.PI / 2, 0, 0, 10)
    this.addCyl(g, metal, 0.028, 0.028, 0.44, 0, -0.012, -0.27, Math.PI / 2, 0, 0, 10)
    this.addBox(g, dark, 0.05, 0.08, 0.18, 0, 0.0, -0.02)
    this.addBox(g, wood, 0.055, 0.09, 0.22, 0, -0.035, 0.16, -0.1, 0, 0)
    this.addBox(g, wood, 0.062, 0.075, 0.26, 0, -0.02, -0.2, 0, 0, 0)
    this.addBox(g, dark, 0.014, 0.014, 0.04, 0, 0.066, -0.62)
    this.buildHand(g, 0, -0.05, 0.06, 0.08)
    this.buildHand(g, -0.02, -0.055, -0.18, -0.15)
    g.rotation.set(0.03, -0.05, 0)
    return g
  }

  buildRifle() {
    const g = new THREE.Group()
    const metal = this.mat('#3f423d', { roughness: 0.38, metalness: 0.7, emissive: 0.05 })
    const plastic = this.mat('#2c2e28', { roughness: 0.7, metalness: 0.1 })
    const dark = this.mat('#20221d', { roughness: 0.8, metalness: 0.2 })
    const glass = this.mat('#5b7a74', { roughness: 0.1, metalness: 0.5, emissive: 0.2 })
    this.addBox(g, metal, 0.05, 0.07, 0.42, 0, 0.01, -0.12)
    this.addCyl(g, metal, 0.016, 0.016, 0.4, 0, 0.024, -0.47, Math.PI / 2, 0, 0, 8)
    this.addBox(g, plastic, 0.045, 0.1, 0.22, 0, -0.02, 0.18, 0.06, 0, 0)
    this.addBox(g, dark, 0.04, 0.14, 0.065, 0, -0.09, -0.06, 0.16, 0, 0)
    this.addBox(g, dark, 0.055, 0.05, 0.16, 0, 0.062, -0.08)
    this.addCyl(g, glass, 0.026, 0.026, 0.16, 0, 0.085, -0.09, Math.PI / 2, 0, 0, 10)
    this.addBox(g, dark, 0.04, 0.04, 0.05, 0, 0.085, -0.17)
    this.addBox(g, plastic, 0.04, 0.05, 0.1, 0, -0.01, 0.31, 0.05, 0, 0)
    this.buildHand(g, 0, -0.045, 0.07, 0.08)
    this.buildHand(g, -0.015, -0.06, -0.24, -0.1)
    g.rotation.set(0.02, -0.04, 0)
    return g
  }

  setWeapon(id, force = false) {
    if (!id || !this.models[id]) id = 'machete'
    if (!force && this.current === id) return
    if (this.current && this.models[this.current]) this.models[this.current].visible = false
    this.current = id
    this.models[id].visible = true
    this.attackT = -1
    this.reloadT = 0
    this.reloadWeapon = null
    this.aiming = false
    if (ITEMS[id]?.weapon?.mag && this.mags[id] == null) this.mags[id] = ITEMS[id].weapon.mag
    this.ui?.refreshWeapon?.()
  }

  currentStats() {
    return ITEMS[this.current]?.weapon || null
  }

  ammoInfo() {
    const w = this.currentStats()
    if (!w || !w.mag) return { clip: null, reserve: 0 }
    return { clip: this.mags[this.current] ?? w.mag, reserve: this.inventory.count(w.ammo) }
  }

  // ------------------------------------------------------------- input
  bind() {
    this._onDown = (e) => {
      if (!this.enabled || !this.player.locked) return
      if (e.button === 0) { this.attack(); e.preventDefault() }
      if (e.button === 2) { this.aiming = true; e.preventDefault() }
    }
    this._onUp = (e) => { if (e.button === 2) this.aiming = false }
    this._onKey = (e) => {
      if (!this.enabled) return
      if (e.code === 'KeyR') this.startReload()
      if (e.code === 'KeyF') this.toggleFireMode?.()
      const n = ['Digit1', 'Digit2', 'Digit3', 'Digit4'].indexOf(e.code)
      if (n >= 0) {
        const list = this.inventory.weapons
        if (list[n]) { this.inventory.equip(list[n].id); this.setWeapon(list[n].id) }
      }
      if (e.code === 'KeyQ') {
        const list = this.inventory.weapons
        if (list.length > 1) {
          const i = list.findIndex(s => s.id === this.current)
          const next = list[(i + 1) % list.length]
          this.inventory.equip(next.id); this.setWeapon(next.id)
        }
      }
    }
    this._onContext = (e) => e.preventDefault()
    this._onWheel = (e) => {
      if (!this.enabled || !this.player.locked) return
      const list = this.inventory.weapons
      if (list.length < 2) return
      const i = list.findIndex(s => s.id === this.current)
      const next = list[(i + (e.deltaY > 0 ? 1 : -1) + list.length) % list.length]
      this.inventory.equip(next.id); this.setWeapon(next.id)
    }
    window.addEventListener('mousedown', this._onDown)
    window.addEventListener('mouseup', this._onUp)
    window.addEventListener('keydown', this._onKey)
    window.addEventListener('contextmenu', this._onContext)
    window.addEventListener('wheel', this._onWheel, { passive: true })
  }

  attack() {
    if (this.cooldown > 0 || this.attackT >= 0 || this.reloadT > 0) return false
    if (!this.game.playing || this.game.paused) return false
    const w = this.currentStats()
    if (!w) return false
    if (w.mag) {
      if ((this.mags[this.current] ?? 0) <= 0) {
        this.audio?.play('dryfire')
        this.startReload()
        return false
      }
      this.fireGun(w)
    } else {
      this.startMelee(w)
    }
    return true
  }

  startMelee(w) {
    const can = this.player.useStamina(w.stamina)
    this.attackT = 0
    this.attackKind = 'melee'
    this.attackDone = false
    this.cooldown = w.rate
    this.weak = !can
    this.audio?.play('swing', { heavy: w.sound === 'axe' })
    this.player.noise = Math.max(this.player.noise, w.sound === 'axe' ? 0.7 : 0.5)
  }

  fireGun(w) {
    this.mags[this.current]--
    this.cooldown = w.rate
    this.attackT = 0
    this.attackKind = 'fire'
    this.attackDone = true
    this.recoil = Math.min(1.4, (this.recoil || 0) + (w.recoil || 0.04) * 15)
    this.recoilPitch = (w.recoil || 0.03) * (0.8 + this.rng() * 0.5)
    this.recoilYaw = (this.rng() - 0.5) * (w.recoil || 0.03) * 1.2
    this.muzzleT = 0.055
    this.lastFire = performance.now()
    this.player.noise = 1
    this.audio?.play(w.sound, { distance: 0 })
    this.game.zombies.alertAt(this.player.pos.x, this.player.pos.z, 34)
    this.game.addTrauma?.(w.recoil ? w.recoil * 2.4 : 0.2)

    const origin = this.camera.position.clone()
    const forward = this.camera.getWorldDirection(new THREE.Vector3())
    const right = new THREE.Vector3().crossVectors(forward, this.camera.up).normalize()
    const up = new THREE.Vector3().crossVectors(right, forward).normalize()
    const pellets = w.pellets || 1
    let anyHit = false
    let killed = 0
    for (let i = 0; i < pellets; i++) {
      const spread = w.spread * (this.aiming ? 0.42 : 1) * (pellets > 1 ? 1.9 : 1)
      const rx = (this.rng() * 2 - 1) * spread
      const ry = (this.rng() * 2 - 1) * spread
      this._dir.copy(forward).addScaledVector(right, rx).addScaledVector(up, ry).normalize()
      const hit = this.zombies.raycast(origin, this._dir, w.range)
      if (hit) {
        anyHit = true
        const fall = clamp(1 - hit.distance / w.range * 0.42, 0.5, 1)
        const res = this.zombies.damage(hit.zombie, w.damage * fall, {
          headshot: hit.headshot, point: hit.point, dir: this._dir, force: w.damage * 0.4, source: 'gun'
        })
        if (res?.killed) killed++
        this.spawnImpact(hit.point, this._dir, '#5f1813', true)
      } else {
        this.worldImpact(origin, this._dir, w.range)
      }
    }
    if (anyHit) this.ui?.hitmarker?.(killed > 0)
    this.muzzleFlash(forward)
    this.ui?.refreshWeapon?.()
  }

  startReload() {
    const w = this.currentStats()
    if (!w || !w.mag || this.reloadT > 0) return
    const clip = this.mags[this.current] ?? 0
    if (clip >= w.mag) return
    if (this.inventory.count(w.ammo) <= 0) { this.audio?.play('dryfire'); return }
    this.reloadWeapon = this.current
    this.reloadT = w.reload
    this.attackT = -1
    this.reloadingTotal = w.reload
    this.audio?.play('reload', { duration: w.reload })
  }

  completeReload() {
    const id = this.reloadWeapon || this.current
    const w = ITEMS[id]?.weapon
    if (!w || !w.mag) return
    const need = w.mag - (this.mags[id] ?? 0)
    const have = this.inventory.count(w.ammo)
    const take = Math.min(need, have)
    if (take > 0) {
      this.inventory.remove(w.ammo, take)
      this.mags[id] = (this.mags[id] ?? 0) + take
    }
    this.reloadT = 0
    this.reloadWeapon = null
    this.ui?.refreshWeapon?.()
  }

  muzzleFlash(forward) {
    const id = this.current
    const muzzlePos = {
      pistol: new THREE.Vector3(0.0, 0.052, -0.29),
      shotgun: new THREE.Vector3(0.0, 0.066, -0.66),
      rifle: new THREE.Vector3(0.0, 0.024, -0.68)
    }[id] || new THREE.Vector3(0, 0.05, -0.4)
    this.root.updateMatrixWorld(true)
    const p = muzzlePos.clone()
    this.root.localToWorld(p)
    // approximate: place flash at weapon local muzzle in view space
    this.flashSprite.position.copy(p)
    this.flashSprite.material.rotation = this.rng() * Math.PI * 2
    this.flashSprite.scale.setScalar(id === 'shotgun' ? 0.5 : id === 'rifle' ? 0.42 : 0.3)
    this.flashSprite.visible = true
    this.flashLight.position.copy(p)
    this.flashLight.intensity = 5
  }

  worldImpact(origin, dir, range) {
    this._ray.set(origin, dir)
    this._ray.far = range
    let hits = []
    try { hits = this._ray.intersectObject(this.world.root, true) } catch (e) { hits = [] }
    if (!hits.length) return
    const h = hits[0]
    const n = h.face ? h.face.normal.clone().transformDirection(h.object.matrixWorld) : dir.clone().negate()
    this.spawnImpact(h.point, n, '#9a9182', false)
    this.audio?.play('impact', { surface: hitSurface(n) })
  }

  spawnImpact(point, dir, color, blood) {
    const canvas = this.game.impactTexture
    const mat = new THREE.SpriteMaterial({ map: canvas, color: new THREE.Color(color), transparent: true, opacity: 0.9, depthWrite: false, blending: blood ? THREE.NormalBlending : THREE.AdditiveBlending })
    const sp = new THREE.Sprite(mat)
    sp.position.copy(point)
    sp.scale.setScalar(blood ? 0.22 : 0.17)
    this.game.scene.add(sp)
    this._impacts.push({ sprite: sp, vel: dir.clone().multiplyScalar(0.6), life: 0.38 + this.rng() * 0.2, max: 0.6, blood })
    if (this._impacts.length > 26) {
      const old = this._impacts.shift()
      old.sprite.parent?.remove(old.sprite)
      old.sprite.material.dispose()
    }
  }

  // ------------------------------------------------------------- update
  update(dt, elapsed) {
    this.cooldown = Math.max(0, this.cooldown - dt)
    this.muzzleT = Math.max(0, this.muzzleT - dt)
    if (this.muzzleT <= 0) {
      this.flashSprite.visible = false
      this.flashLight.intensity = 0
    } else {
      this.flashLight.intensity = 4 + this.rng() * 4
    }

    // reload
    if (this.reloadT > 0) {
      this.reloadT -= dt
      if (this.reloadT <= 0) this.completeReload()
    }

    // viewmodel pose
    const p = this.game.player
    const speed = p.speed
    const sprint = p.sprinting
    const bob = p.bobAxis || 0
    const t = elapsed
    const swayTargetX = Math.sin(t * 1.2) * 0.004 + Math.cos(p.bobTime) * 0.014 * Math.min(1, speed / 4.2)
    const swayTargetY = Math.sin(t * 1.7) * 0.003 + Math.abs(Math.sin(p.bobTime)) * 0.012 * Math.min(1, speed / 4.2)
    this.swayX = damp(this.swayX, swayTargetX, 8, dt)
    this.swayY = damp(this.swayY, swayTargetY, 8, dt)
    const aiming = this.aiming && this.currentStats()?.mag && this.reloadT <= 0
    const aimBlend = damp(this.aimBlend || 0, aiming ? 1 : 0, 14, dt)
    this.aimBlend = aimBlend

    this.recoil = damp(this.recoil || 0, 0, 9, dt)
    this.recoilPitch = damp(this.recoilPitch || 0, 0, 8, dt)
    this.recoilYaw = damp(this.recoilYaw || 0, 0, 9, dt)

    let px = 0.255 + this.swayX
    let py = -0.225 + this.swayY
    let pz = -0.47
    let rx = 0.015
    let ry = -0.035
    let rz = 0.005

    if (aiming) {
      px = lerp(px, 0.0, aimBlend)
      py = lerp(py, -0.115, aimBlend)
      pz = lerp(pz, -0.38, aimBlend)
      ry = lerp(ry, 0, aimBlend)
      rx = lerp(rx, 0, aimBlend)
    }
    if (sprint) {
      px += 0.045
      py -= 0.055
      rx -= 0.22
      rz += 0.2
      ry += 0.15
    }
    if (this.reloadT > 0) {
      const prog = 1 - this.reloadT / this.reloadingTotal
      const dip = Math.sin(Math.min(1, prog) * Math.PI)
      py -= dip * 0.14
      rx -= dip * 0.5
      rz += dip * 0.35
    }

    // recoil kick
    pz += this.recoil * 0.055
    rx -= this.recoil * 0.09
    px += this.recoilYaw * 0.4

    // melee swing
    if (this.attackT >= 0) {
      this.attackT += dt
      const w = this.currentStats()
      const dur = this.attackKind === 'melee' ? 0.42 : 0.12
      const tt = Math.min(1, this.attackT / dur)
      if (this.attackKind === 'melee') {
        const arc = Math.sin(tt * Math.PI)
        const swing = Math.sin(tt * Math.PI * 0.9)
        ry -= swing * 1.25
        rx += arc * 0.45
        rz -= arc * 0.75
        px -= arc * 0.08
        py += arc * 0.06
        if (!this.attackDone && tt > 0.34) {
          this.attackDone = true
          this.meleeHit(w)
        }
        if (tt >= 1) { this.attackT = -1; this.attackKind = null }
      } else {
        if (tt >= 1) this.attackT = -1
      }
    }

    this.root.position.set(px, py, pz)
    this.root.rotation.set(rx, ry, rz)

    // weapon condition / light adaptation
    const night = this.game.sky?.night || 0
    this.viewLights.amb.intensity = 0.62 - night * 0.3
    this.viewLights.key.intensity = 1.25 - night * 0.65
    this.viewLights.rim.intensity = 0.55 - night * 0.25
    this.flashSprite.visible = this.muzzleT > 0

    // impact particles
    for (let i = this._impacts.length - 1; i >= 0; i--) {
      const im = this._impacts[i]
      im.life -= dt
      im.sprite.position.addScaledVector(im.vel, dt)
      im.vel.multiplyScalar(0.92)
      im.sprite.material.opacity = Math.max(0, im.life / im.max) * 0.9
      im.sprite.scale.setScalar((im.blood ? 0.16 : 0.13) * (1.6 - im.life / im.max))
      if (im.life <= 0) {
        im.sprite.parent?.remove(im.sprite)
        im.sprite.material.dispose()
        this._impacts.splice(i, 1)
      }
    }

    // camera aim FOV
    const targetFov = aiming ? 52 : 74
    this.game.camera.fov = damp(this.game.camera.fov, targetFov, 10, dt)
    this.game.camera.updateProjectionMatrix()
    this.aimingForUi = aiming
  }

  meleeHit(w) {
    const origin = this.camera.position.clone()
    const forward = this.camera.getWorldDirection(new THREE.Vector3())
    const range = w.range
    let target = null
    const rayHit = this.zombies.raycast(origin, forward, range + 0.25)
    if (rayHit) target = rayHit
    if (!target) {
      // forgiving arc fallback
      let best = null
      for (const z of this.zombies.zombies) {
        if (z.dead) continue
        const cx = z.pos.x, cz = z.pos.z
        const dx = cx - origin.x, dz = cz - origin.z
        const d = Math.hypot(dx, dz)
        if (d > range + 0.55) continue
        const dot = (dx * forward.x + dz * forward.z) / Math.max(0.001, d)
        if (dot < 0.5) continue
        if (this.zombies.lineBlocked(origin.x, origin.z, cx, cz)) continue
        if (!best || d < best.d) best = { zombie: z, d, point: new THREE.Vector3(cx, 1.1, cz) }
      }
      if (best) target = { zombie: best.zombie, distance: best.d, headshot: false, point: best.point }
    }
    if (!target) {
      // maybe we hit masonry
      this._ray.set(origin, forward)
      this._ray.far = range
      try {
        const hits = this._ray.intersectObject(this.world.root, true)
        if (hits.length) { this.audio?.play('impact', { surface: 'wall' }); this.spawnImpact(hits[0].point, forward.clone().negate(), '#8f8779', false) }
      } catch (e) { /* no-op */ }
      return
    }
    const dmg = (this.weak ? w.damage * 0.48 : w.damage) * ((this.inventory.condition[this.current] ?? 100) < 20 ? 0.62 : 1)
    const dir = new THREE.Vector3().subVectors(target.zombie.pos, origin).setY(0).normalize()
    const res = this.zombies.damage(target.zombie, dmg, {
      headshot: target.headshot, point: target.point, dir, force: dmg * 0.5, source: 'melee'
    })
    this.inventory.damageCondition(this.current, 0.55 + (w.sound === 'axe' ? 0.8 : 0))
    this.audio?.play(w.sound === 'blunt' ? 'bluntHit' : 'bladeHit')
    this.ui?.hitmarker?.(!!res?.killed)
    this.game.addTrauma?.(target.headshot ? 0.24 : 0.14)
    this.player.noise = Math.max(this.player.noise, 0.8)
    this.game.zombies.alertAt(this.player.pos.x, this.player.pos.z, 9)
  }

  bindResize(w, h) {
    this.viewCamera.aspect = w / h
    this.viewCamera.updateProjectionMatrix()
  }

  render() {
    this.viewCamera.aspect = this.game.camera.aspect
    this.viewCamera.updateProjectionMatrix()
    const renderer = this.game.renderer
    const oldAutoClear = renderer.autoClear
    renderer.autoClear = false
    renderer.clearDepth()
    renderer.render(this.viewScene, this.viewCamera)
    renderer.autoClear = oldAutoClear
  }

  reset() {
    this.mags = { ...MAX_AMMO }
    this.cooldown = 0
    this.attackT = -1
    this.reloadT = 0
    this.setWeapon(this.inventory.equipped || 'machete', true)
  }

  dispose() {
    window.removeEventListener('mousedown', this._onDown)
    window.removeEventListener('mouseup', this._onUp)
    window.removeEventListener('keydown', this._onKey)
    window.removeEventListener('contextmenu', this._onContext)
    window.removeEventListener('wheel', this._onWheel)
    for (const im of this._impacts) { im.sprite.parent?.remove(im.sprite); im.sprite.material.dispose() }
  }
}

function hitSurface(normal) {
  if (Math.abs(normal.y) > 0.7) return 'ground'
  return 'wall'
}
