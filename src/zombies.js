import * as THREE from 'three'
import { clamp, damp, lerp, mulberry32, rand, choose } from './utils.js'
import { rollLoot, stack } from './items.js'

export const ZOMBIE_TYPES = {
  walker: {
    name: 'Walker', health: 110, speed: 1.15, chaseSpeed: 1.65, detect: 15, reach: 1.5,
    damage: 13, attackTime: 0.75, cooldown: 1.55, scale: 1, radius: 0.36, infection: 3.2,
    label: 'Shambler', score: 10, headMul: 2.0, hunch: 0.2
  },
  infected: {
    name: 'Infected', health: 68, speed: 1.5, chaseSpeed: 4.15, detect: 19, reach: 1.35,
    damage: 9, attackTime: 0.5, cooldown: 0.95, scale: 0.96, radius: 0.32, infection: 5.5,
    label: 'Infected', score: 14, headMul: 2.2, hunch: 0.32
  },
  brute: {
    name: 'Brute', health: 340, speed: 0.9, chaseSpeed: 1.5, detect: 14, reach: 1.85,
    damage: 34, attackTime: 1.0, cooldown: 2.1, scale: 1.34, radius: 0.48, infection: 8,
    label: 'Brute', score: 40, headMul: 1.45, hunch: 0.12
  },
  screamer: {
    name: 'Screamer', health: 85, speed: 1.35, chaseSpeed: 2.2, detect: 24, reach: 1.3,
    damage: 7, attackTime: 0.55, cooldown: 1.4, scale: 0.93, radius: 0.31, infection: 6.5,
    label: 'Screamer', score: 22, headMul: 2.1, hunch: 0.24, scream: true
  }
}

const SKIN_TONES = ['#969a83', '#9a9480', '#8f9684', '#a19a83', '#8b907c', '#a29a86']
const CLOTH_TONES = ['#5b5749', '#665243', '#4e5550', '#6a5f4c', '#56544a', '#705a48', '#4b5048']

function boxGeo() { return new THREE.BoxGeometry(1, 1, 1) }

export class ZombieSystem {
  constructor(scene, world, player, opts = {}) {
    this.scene = scene
    this.world = world
    this.player = player
    this.root = new THREE.Group()
    this.root.name = 'infected'
    scene.add(this.root)
    this.zombies = []
    this.corpses = []
    this.onEvent = opts.onEvent || null
    this.rng = mulberry32(9182)
    this.maxAlive = opts.maxAlive ?? 18
    this.geo = { box: boxGeo() }
    this.spawnTimer = 0
    this.blockers = world.colliders.filter(c => (c.tag === 'wall' || c.tag === 'building' || c.tag === 'door') && c.y1 > 1.3)
    this.initBlood()
    this.spawnInitial()
  }

  initBlood() {
    const n = 260
    const pos = new Float32Array(n * 3)
    const col = new Float32Array(n * 3)
    for (let i = 0; i < n; i++) { pos[i * 3 + 1] = -100; col[i * 3] = 0.34; col[i * 3 + 1] = 0.06; col[i * 3 + 2] = 0.045 }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3))
    const mat = new THREE.PointsMaterial({ size: 0.07, vertexColors: true, transparent: true, opacity: 0.95, depthWrite: false })
    this.bloodPoints = new THREE.Points(geo, mat)
    this.bloodPoints.frustumCulled = false
    this.bloodPoints.renderOrder = 6
    this.scene.add(this.bloodPoints)
    this.blood = {
      pos, vel: new Float32Array(n * 3), life: new Float32Array(n), cursor: 0, n,
      attr: geo.attributes.position
    }
  }

  spawnBlood(point, count = 10, dir = null) {
    const b = this.blood
    for (let i = 0; i < count; i++) {
      const idx = b.cursor++ % b.n
      const a = this.rng() * Math.PI * 2
      const sp = 0.8 + this.rng() * 2.6
      b.pos[idx * 3] = point.x
      b.pos[idx * 3 + 1] = point.y
      b.pos[idx * 3 + 2] = point.z
      b.vel[idx * 3] = Math.cos(a) * sp * 0.5 + (dir ? dir.x * sp * 0.6 : 0)
      b.vel[idx * 3 + 1] = 1.0 + this.rng() * 3.0
      b.vel[idx * 3 + 2] = Math.sin(a) * sp * 0.5 + (dir ? dir.z * sp * 0.6 : 0)
      b.life[idx] = 0.55 + this.rng() * 0.7
    }
  }

  updateBlood(dt) {
    const b = this.blood
    let dirty = false
    for (let i = 0; i < b.n; i++) {
      if (b.life[i] <= 0) continue
      dirty = true
      b.life[i] -= dt
      if (b.life[i] <= 0) { b.pos[i * 3 + 1] = -100; continue }
      b.vel[i * 3 + 1] -= 9.8 * dt
      b.pos[i * 3] += b.vel[i * 3] * dt
      b.pos[i * 3 + 1] += b.vel[i * 3 + 1] * dt
      b.pos[i * 3 + 2] += b.vel[i * 3 + 2] * dt
      if (b.pos[i * 3 + 1] < 0.03) { b.pos[i * 3 + 1] = 0.03; b.vel[i * 3 + 1] *= -0.18; b.vel[i * 3] *= 0.7; b.vel[i * 3 + 2] *= 0.7 }
    }
    if (dirty) b.attr.needsUpdate = true
  }

  // ------------------------------------------------------------- model
  makePart(parent, mat, sx, sy, sz, x, y, z) {
    const m = new THREE.Mesh(this.geo.box, mat)
    m.scale.set(sx, sy, sz)
    m.position.set(x, y, z)
    m.castShadow = false
    m.receiveShadow = false
    parent.add(m)
    return m
  }

  createMesh(type) {
    const t = ZOMBIE_TYPES[type]
    const r = this.rng
    const skinCol = choose(r, SKIN_TONES)
    const clothCol = choose(r, CLOTH_TONES)
    const skin = new THREE.MeshStandardMaterial({ color: skinCol, roughness: 0.95, metalness: 0, envMapIntensity: 0.15 })
    const cloth = new THREE.MeshStandardMaterial({ color: clothCol, roughness: 0.98, metalness: 0, envMapIntensity: 0.12 })
    const dark = new THREE.MeshStandardMaterial({ color: type === 'brute' ? '#3c3630' : '#37352e', roughness: 0.95 })
    const eye = new THREE.MeshBasicMaterial({ color: type === 'infected' ? '#c9d6a8' : type === 'screamer' ? '#e0cba0' : '#b9c4a2' })
    skin.userData.base = new THREE.Color(skinCol)
    cloth.userData.base = new THREE.Color(clothCol)
    const group = new THREE.Group()
    group.scale.setScalar(t.scale)
    const upper = new THREE.Group()
    upper.position.y = 0.9
    group.add(upper)

    const torso = new THREE.Group()
    upper.add(torso)
    torso.rotation.x = t.hunch
    this.makePart(torso, cloth, 0.52, 0.64, 0.3, 0, 0.29, 0)
    this.makePart(torso, cloth, 0.44, 0.2, 0.32, 0, -0.04, 0)
    if (type === 'brute') {
      this.makePart(torso, cloth, 0.64, 0.22, 0.36, 0, 0.52, 0)
      this.makePart(torso, skin, 0.2, 0.28, 0.2, 0, 0.18, 0.18)
    }
    if (type === 'infected') {
      // torn shirt, exposed ribs
      this.makePart(torso, skin, 0.24, 0.22, 0.02, 0.08, 0.2, 0.16)
      this.makePart(torso, dark, 0.18, 0.04, 0.02, 0.08, 0.28, 0.17)
      this.makePart(torso, dark, 0.18, 0.04, 0.02, 0.08, 0.2, 0.17)
    }
    // head
    const head = new THREE.Group()
    head.position.set(0, 0.72, 0.015)
    torso.add(head)
    this.makePart(head, skin, 0.25, 0.27, 0.24, 0, 0.02, 0)
    this.makePart(head, skin, 0.19, 0.1, 0.17, 0, -0.13, 0.035)
    this.makePart(head, dark, 0.075, 0.035, 0.03, 0, 0.06, 0.125)
    const eyeL = this.makePart(head, eye, 0.045, 0.032, 0.015, -0.062, 0.075, 0.122)
    const eyeR = this.makePart(head, eye, 0.045, 0.032, 0.015, 0.062, 0.075, 0.122)
    if (type === 'brute') {
      this.makePart(head, skin, 0.06, 0.12, 0.16, -0.14, 0.04, 0)
      this.makePart(head, skin, 0.06, 0.12, 0.16, 0.14, 0.04, 0)
    }
    if (type === 'screamer') {
      // gaping mouth
      this.makePart(head, dark, 0.09, 0.08, 0.03, 0, -0.06, 0.12)
    } else {
      this.makePart(head, dark, 0.1, 0.022, 0.02, 0, -0.06, 0.122)
    }
    // hair patch
    if (r() < 0.7) this.makePart(head, dark, 0.24, 0.06, 0.23, 0, 0.145, -0.01)

    // arms
    const arms = []
    for (const side of [-1, 1]) {
      const arm = new THREE.Group()
      arm.position.set(side * 0.34, 0.52, 0)
      torso.add(arm)
      this.makePart(arm, cloth, 0.13, 0.32, 0.14, 0, -0.15, 0)
      this.makePart(arm, skin, 0.115, 0.34, 0.12, 0, -0.43, 0.015)
      this.makePart(arm, skin, 0.115, 0.12, 0.13, 0, -0.62, 0.03)
      arms.push(arm)
    }
    // legs
    const legs = []
    for (const side of [-1, 1]) {
      const leg = new THREE.Group()
      leg.position.set(side * 0.15, 0.9, 0)
      group.add(leg)
      this.makePart(leg, dark, 0.18, 0.44, 0.18, 0, -0.22, 0)
      this.makePart(leg, dark, 0.16, 0.4, 0.16, 0, -0.62, 0)
      this.makePart(leg, dark, 0.17, 0.1, 0.28, 0, -0.85, 0.055)
      legs.push(leg)
    }
    // subtle blood splash
    if (r() < 0.75) {
      const splash = this.makePart(torso, dark, 0.16 + r() * 0.18, 0.12 + r() * 0.2, 0.02, (r() - 0.5) * 0.3, 0.15 + r() * 0.3, 0.16)
      splash.material = new THREE.MeshStandardMaterial({ color: '#4a1512', roughness: 0.6 })
    }

    const shadowMat = new THREE.MeshBasicMaterial({ map: this.shadowTexture(), transparent: true, opacity: 0.5, depthWrite: false, color: 0x000000 })
    const shadow = new THREE.Mesh(new THREE.PlaneGeometry(0.95 * t.scale, 0.62 * t.scale), shadowMat)
    shadow.rotation.x = -Math.PI / 2
    shadow.position.y = 0.02
    group.add(shadow)

    this.root.add(group)
    return { group, upper, torso, head, arms, legs, skin, cloth, eye: [eyeL, eyeR], tools: [], shadow }
  }

  shadowTexture() {
    if (!this._shadowTex) {
      const c = document.createElement('canvas')
      c.width = c.height = 64
      const ctx = c.getContext('2d')
      const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 31)
      g.addColorStop(0, 'rgba(0,0,0,0.72)')
      g.addColorStop(0.65, 'rgba(0,0,0,0.28)')
      g.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, 64, 64)
      this._shadowTex = new THREE.CanvasTexture(c)
    }
    return this._shadowTex
  }

  spawn(type, x, z, rot = 0) {
    if (this.zombies.filter(zz => !zz.dead).length >= this.maxAlive) return null
    const t = ZOMBIE_TYPES[type] || ZOMBIE_TYPES.walker
    const parts = this.createMesh(type)
    const scale = t.scale
    const zombie = {
      type, t, parts, group: parts.group,
      pos: new THREE.Vector3(x, 0, z),
      vel: new THREE.Vector3(),
      rot: rot || this.rng() * Math.PI * 2,
      health: t.health, maxHealth: t.health,
      state: 'idle', phase: this.rng() * 10, cooldown: 0.5 + this.rng() * 1.5,
      attackT: -1, flash: 0, stagger: 0, dead: false, deathT: 0,
      home: new THREE.Vector3(x, 0, z), wander: new THREE.Vector3(x, 0, z), wanderTimer: 0,
      alert: 0, groanTimer: 2 + this.rng() * 6, heard: null, screamTimer: 3,
      radius: t.radius, speedMul: 0.9 + this.rng() * 0.22, hasLooted: false, corpseMade: false,
      animSpeed: 1, lastHitDir: new THREE.Vector3()
    }
    zombie.group.position.copy(zombie.pos)
    zombie.group.rotation.y = zombie.rot
    this.zombies.push(zombie)
    return zombie
  }

  spawnInitial() {
    const pts = this.world.spawnPoints || []
    for (const p of pts) this.spawn(p.type || 'walker', p.x, p.z, p.rot || 0)
    const extra = [
      [-4.5, -1.8, 'walker'], [-24.5, 1.6, 'walker'], [31.0, 1.2, 'infected'],
      [54.0, -1.4, 'walker'], [44.8, 13.0, 'infected'], [-42.0, 3.7, 'walker'],
      [75.0, -2.2, 'walker'], [61.0, 7.4, 'infected'], [-58.0, -1.0, 'walker'],
      [10.0, 20.0, 'walker'], [-31.0, 27.5, 'walker'], [36.0, 28.0, 'infected']
    ]
    for (const [x, z, type] of extra) this.spawn(type, x, z)
  }

  aliveCount() { return this.zombies.reduce((n, z) => n + (z.dead ? 0 : 1), 0) }

  lineBlocked(x1, z1, x2, z2) {
    const dx = x2 - x1, dz = z2 - z1
    const len = Math.hypot(dx, dz)
    const steps = Math.min(26, Math.ceil(len / 1.1))
    for (let i = 1; i < steps; i++) {
      const t = i / steps
      const px = x1 + dx * t, pz = z1 + dz * t
      for (const c of this.blockers) {
        if (px > c.minX - 0.15 && px < c.maxX + 0.15 && pz > c.minZ - 0.15 && pz < c.maxZ + 0.15) return true
      }
    }
    return false
  }

  findBlocked(z, nx, nz) {
    const r = z.radius
    for (const c of this.world.colliders) {
      if (!c.enabled || c.tag === 'bounds') continue
      if (c.y1 < 0.45 || c.y0 > 1.5) continue
      const cx = clamp(z.pos.x, c.minX, c.maxX)
      const cz = clamp(z.pos.z, c.minZ, c.maxZ)
      if ((nx - cx) ** 2 + (nz - cz) ** 2 < r * r) return c
    }
    return null
  }

  moveZombie(z, dx, dz) {
    const beforeX = z.pos.x, beforeZ = z.pos.z
    z.pos.x += dx
    let c = this.findBlocked(z, z.pos.x, z.pos.z)
    if (c) z.pos.x = dx > 0 ? c.minX - z.radius : c.maxX + z.radius
    z.pos.z += dz
    c = this.findBlocked(z, z.pos.x, z.pos.z)
    if (c) z.pos.z = dz > 0 ? c.minZ - z.radius : c.maxZ + z.radius
    z.pos.x = clamp(z.pos.x, -90, 90)
    z.pos.z = clamp(z.pos.z, -56, 56)
    return Math.hypot(z.pos.x - beforeX, z.pos.z - beforeZ)
  }

  alertAt(x, z, radius, source = null) {
    for (const zz of this.zombies) {
      if (zz.dead) continue
      const d = Math.hypot(zz.pos.x - x, zz.pos.z - z)
      if (d < radius) {
        zz.alert = Math.max(zz.alert, 8)
        zz.state = 'chase'
        zz.heard = new THREE.Vector3(x, 0, z)
        if (!source) zz.groanTimer = Math.min(zz.groanTimer, 0.4 + this.rng())
      }
    }
  }

  // ------------------------------------------------------------- damage
  raycast(origin, dir, maxDist = 40) {
    let best = null
    for (const z of this.zombies) {
      if (z.dead) continue
      const s = z.t.scale
      const chest = new THREE.Vector3(z.pos.x, z.pos.y + 1.02 * s, z.pos.z)
      const head = new THREE.Vector3(z.pos.x, z.pos.y + 1.66 * s, z.pos.z)
      const cHit = this.raySphere(origin, dir, chest, 0.42 * s)
      const hHit = this.raySphere(origin, dir, head, 0.235 * s)
      let hit = null, headshot = false
      if (hHit !== null && hHit <= maxDist) { hit = hHit; headshot = true }
      if (cHit !== null && cHit <= maxDist && (hit === null || cHit < hit)) { hit = cHit; headshot = false }
      if (hit !== null && (!best || hit < best.distance)) {
        best = {
          zombie: z, distance: hit, headshot,
          point: origin.clone().addScaledVector(dir, hit),
          type: z.type
        }
      }
    }
    return best
  }

  raySphere(o, d, c, r) {
    const ox = o.x - c.x, oy = o.y - c.y, oz = o.z - c.z
    const b = ox * d.x + oy * d.y + oz * d.z
    const cc = ox * ox + oy * oy + oz * oz - r * r
    const disc = b * b - cc
    if (disc < 0) return null
    const t = -b - Math.sqrt(disc)
    return t >= 0 ? t : null
  }

  damage(z, amount, { headshot = false, point = null, dir = null, force = 0, source = 'melee' } = {}) {
    if (!z || z.dead) return null
    const mul = headshot ? z.t.headMul : 1
    const dmg = amount * mul
    z.health -= dmg
    z.flash = 0.16
    z.alert = Math.max(z.alert, 10)
    if (z.state !== 'chase') z.state = 'chase'
    if (dir) z.lastHitDir.copy(dir)
    const p = point || new THREE.Vector3(z.pos.x, 1.2 * z.t.scale, z.pos.z)
    this.spawnBlood(p, headshot ? 14 : 9, dir)
    this.onEvent?.({ type: 'hit', headshot, point: p, zombie: z, source })

    if (z.health <= 0) {
      this.kill(z, dir)
      return { killed: true, damage: dmg, headshot, zombie: z }
    }
    const stagger = headshot ? 0.5 : force > 20 ? 0.4 : 0.16
    z.stagger = Math.max(z.stagger, stagger)
    // knockback
    if (dir && force > 0) {
      const kb = force * 0.025
      this.moveZombie(z, dir.x * kb, dir.z * kb)
    }
    this.onEvent?.({ type: 'zombieHurt', zombie: z, headshot })
    return { killed: false, damage: dmg, headshot, zombie: z }
  }

  kill(z, dir = null) {
    if (z.dead) return
    z.dead = true
    z.state = 'dead'
    z.deathT = 0
    z.group.rotation.z = 0
    z.parts.skin.emissive?.set('#000000')
    this.player.kills++
    this.onEvent?.({ type: 'kill', zombie: z })
    this.alertAt(z.pos.x, z.pos.z, 8, z)
    // drop a few coins / loot items directly into a corpse later
    z.corpseLoot = rollLoot('corpse', this.rng, { min: 1, max: 3 })
    if (z.type === 'brute') z.corpseLoot.push(stack('repair_kit', 1))
    if (z.type === 'infected' && this.rng() < 0.4) z.corpseLoot.push(stack('pistol_ammo', 2))
  }

  makeCorpse(z) {
    if (z.corpseMade) return
    z.corpseMade = true
    z.group.visible = false
    const x = z.pos.x, zz = z.pos.z, rot = z.rot
    try {
      const c = this.world.addContainer({
        type: 'corpse', name: z.t.label, label: `Body of a ${z.t.label}`,
        x, z: zz, rotY: rot, table: 'corpse', items: z.corpseLoot || null
      })
      c.zombieCorpse = true
    } catch (e) { console.warn('corpse failed', e) }
  }

  // ------------------------------------------------------------- AI
  update(dt, elapsed) {
    this.updateBlood(dt)
    const p = this.player
    const playerPos = p.pos
    const playerChest = new THREE.Vector3(p.pos.x, p.pos.y + 1.2, p.pos.z)

    for (const z of this.zombies) {
      if (z.dead) {
        z.deathT += dt
        const t = Math.min(1, z.deathT / 0.8)
        z.group.rotation.z = z.group.rotation.z + (1.35 * (z.lastHitDir.x > 0 ? -1 : 1) - z.group.rotation.z) * Math.min(1, dt * 5)
        z.group.position.y = -0.1 * t
        z.parts.shadow.visible = false
        if (z.deathT > 1.5 && !z.corpseMade) this.makeCorpse(z)
        continue
      }
      const dx = playerPos.x - z.pos.x, dz = playerPos.z - z.pos.z
      const dist = Math.hypot(dx, dz)
      z.alert = Math.max(0, z.alert - dt)
      z.cooldown = Math.max(0, z.cooldown - dt)
      z.stagger = Math.max(0, z.stagger - dt)
      z.flash = Math.max(0, z.flash - dt)
      z.groanTimer -= dt
      z.screamTimer -= dt

      // perception
      const noiseBoost = 1 + (p.noise || 0) * 2.2 + (p.sprinting ? 0.4 : 0)
      const detect = z.t.detect * noiseBoost * (p.crouching ? 0.72 : 1)
      if (p.alive && dist < detect) {
        if (dist < 4.5 || !this.lineBlocked(z.pos.x, z.pos.z, playerPos.x, playerPos.z)) {
          if (z.state === 'idle') {
            z.state = 'chase'
            z.groanTimer = Math.min(z.groanTimer, 0.3 + this.rng() * 1.2)
          }
          z.alert = Math.max(z.alert, 3.5)
        }
      }
      if (!p.alive) z.alert = 0
      if (z.alert <= 0 && dist > 22) z.state = 'idle'

      // screamer call
      if (z.t.scream && z.state === 'chase' && z.screamTimer <= 0 && dist < 16) {
        z.screamTimer = 7 + this.rng() * 5
        z.attackT = 0.01
        this.alertAt(z.pos.x, z.pos.z, 26, z)
        this.onEvent?.({ type: 'scream', zombie: z })
      }

      // occasional vocalization
      if (z.groanTimer <= 0) {
        z.groanTimer = 3.5 + this.rng() * 7
        if (dist < 24 && z.state === 'chase') this.onEvent?.({ type: 'groan', zombie: z, distance: dist })
      }

      let moveSpeed = 0
      let targetX = z.pos.x, targetZ = z.pos.z

      if (z.stagger <= 0) {
        if (z.state === 'chase' && p.alive) {
          targetX = playerPos.x; targetZ = playerPos.z
          moveSpeed = z.t.chaseSpeed * z.speedMul
          const reach = z.t.reach + 0.1
          if (dist < reach + 0.2 && z.cooldown <= 0 && z.attackT < 0) {
            z.attackT = 0
            z.cooldown = z.t.cooldown + this.rng() * 0.35
            this.onEvent?.({ type: 'attack', zombie: z })
          }
          if (dist < reach) moveSpeed = 0
        } else {
          // wander near home
          z.wanderTimer -= dt
          if (z.wanderTimer <= 0) {
            z.wanderTimer = 4 + this.rng() * 7
            const a = this.rng() * Math.PI * 2
            const rr = 2 + this.rng() * 6
            z.wander.set(z.home.x + Math.cos(a) * rr, 0, z.home.z + Math.sin(a) * rr)
          }
          const wdx = z.wander.x - z.pos.x, wdz = z.wander.z - z.pos.z
          const wd = Math.hypot(wdx, wdz)
          if (wd > 0.7) {
            targetX = z.wander.x; targetZ = z.wander.z
            moveSpeed = z.t.speed * 0.62
          }
        }
      }

      // attack animation + damage
      if (z.attackT >= 0) {
        z.attackT += dt
        const at = z.t.attackTime
        if (z.attackT > at * 0.46 && !z.attackHit) {
          z.attackHit = true
          const d2 = Math.hypot(playerPos.x - z.pos.x, playerPos.z - z.pos.z)
          if (d2 < z.t.reach + 0.7 && p.alive) {
            const inf = z.t.infection
            p.hurt(z.t.damage * (0.85 + this.rng() * 0.3), { infection: inf, source: z.type, force: z.type === 'brute' ? 0.7 : 0.2 })
            if (z.type === 'brute') {
              const kx = (playerPos.x - z.pos.x) / Math.max(0.001, d2)
              const kz = (playerPos.z - z.pos.z) / Math.max(0.001, d2)
              p.pos.x += kx * 0.75; p.pos.z += kz * 0.75
            }
            this.spawnBlood(playerChest, 5, null)
            this.onEvent?.({ type: 'playerHit', zombie: z })
          }
        }
        if (z.attackT > at) { z.attackT = -1; z.attackHit = false }
      }

      // locomotion
      if (moveSpeed > 0 && z.stagger <= 0) {
        let mx = targetX - z.pos.x, mz = targetZ - z.pos.z
        const ml = Math.hypot(mx, mz) || 1
        mx = mx / ml; mz = mz / ml
        // simple stuck avoidance
        const step = moveSpeed * dt
        const moved = this.moveZombie(z, mx * step, mz * step)
        if (moved < step * 0.3) {
          z.stuck = (z.stuck || 0) + dt
          if (z.stuck > 0.6) {
            const side = this.rng() < 0.5 ? 1 : -1
            this.moveZombie(z, -mz * side * step, mx * side * step)
            if (z.stuck > 2.0) { z.stuck = 0; z.alert = 1.5; z.state = 'idle'; z.wanderTimer = 0 }
          }
        } else z.stuck = 0
        z.rot = lerpAngle(z.rot, Math.atan2(mx, mz), Math.min(1, dt * 5.5))
      } else if (z.state === 'chase' && p.alive) {
        // turn in place toward the player
        z.rot = lerpAngle(z.rot, Math.atan2(dx, dz), Math.min(1, dt * 4))
      }

      // separation
      for (const o of this.zombies) {
        if (o === z || o.dead) continue
        const sx = z.pos.x - o.pos.x, sz = z.pos.z - o.pos.z
        const d = Math.hypot(sx, sz)
        const min = (z.radius + o.radius) * 0.85
        if (d > 0.001 && d < min) {
          const push = (min - d) * 0.5
          this.moveZombie(z, (sx / d) * push, (sz / d) * push)
        }
      }

      // animation
      const moving = moveSpeed > 0 && z.stagger <= 0
      const cadence = z.state === 'chase' ? (z.type === 'infected' ? 10.5 : 5.2) : 3.4
      if (moving) z.phase += dt * cadence * (0.8 + z.speedMul * 0.25)
      const swinging = moving ? Math.sin(z.phase) : Math.sin(elapsed * 1.4 + z.phase) * 0.12
      const amp = z.type === 'infected' ? 0.95 : z.type === 'brute' ? 0.45 : 0.6
      z.parts.legs[0].rotation.x = swinging * amp
      z.parts.legs[1].rotation.x = -swinging * amp
      let armBase = z.type === 'walker' ? -1.15 : z.type === 'infected' ? -0.55 : z.type === 'screamer' ? 0 : -0.25
      let armSwing = moving ? swinging * 0.34 : 0
      if (z.type === 'screamer' && z.state === 'chase') {
        z.parts.arms[0].rotation.z = -2.15 + Math.sin(elapsed * 3.2) * 0.16
        z.parts.arms[1].rotation.z = 2.15 - Math.sin(elapsed * 3.2) * 0.16
      } else {
        z.parts.arms[0].rotation.z = -0.1
        z.parts.arms[1].rotation.z = 0.1
      }
      if (z.attackT >= 0) {
        const at = z.t.attackTime
        const pr = z.attackT / at
        const lunge = Math.sin(Math.min(1, pr) * Math.PI)
        armBase = -2.25 * lunge - 0.2
        armSwing = 0
        z.parts.upper.rotation.x = -0.12 * lunge
        z.parts.upper.position.y = 0.9 - lunge * 0.06
      } else {
        z.parts.upper.rotation.x = 0
        z.parts.upper.position.y = 0.9 + (moving ? Math.abs(Math.sin(z.phase)) * 0.035 : 0)
      }
      z.parts.arms[0].rotation.x = armBase + armSwing
      z.parts.arms[1].rotation.x = armBase - armSwing
      z.parts.torso.rotation.x = z.t.hunch + (z.attackT >= 0 ? 0.14 : 0)
      z.parts.head.rotation.y = clamp(Math.atan2(dx, dz) - z.rot, -0.6, 0.6) * 0.5
      z.parts.torso.rotation.z = Math.sin(z.phase * 0.5) * 0.025
      z.group.position.set(z.pos.x, z.pos.y - (z.stagger > 0 ? 0.03 : 0), z.pos.z)
      z.group.rotation.y = z.rot
      // hit flash
      if (z.flash > 0) {
        z.parts.skin.emissive.setRGB(0.55, 0.06, 0.04)
        z.parts.skin.emissiveIntensity = z.flash * 4
        z.parts.cloth.emissive.setRGB(0.3, 0.02, 0.01)
        z.parts.cloth.emissiveIntensity = z.flash * 2
      } else {
        z.parts.skin.emissive.setRGB(0, 0, 0)
        z.parts.skin.emissiveIntensity = 0
        z.parts.cloth.emissive.setRGB(0, 0, 0)
        z.parts.cloth.emissiveIntensity = 0
      }
    }

    // occasional distant reinforcement so the city stays dangerous
    this.spawnTimer -= dt
    if (this.spawnTimer <= 0) {
      this.spawnTimer = 48
      if (this.aliveCount() < 10) {
        const spots = [[-62, 1], [78, 1.5], [-48, 30], [66, 30], [-70, -24], [52, -36]]
        const candidates = spots.filter(([x, z]) => Math.hypot(x - p.pos.x, z - p.pos.z) > 32)
        if (candidates.length) {
          const [x, z] = choose(this.rng, candidates)
          this.spawn(choose(this.rng, ['walker', 'walker', 'infected']), x + rand(this.rng, -2, 2), z + rand(this.rng, -2, 2))
        }
      }
    }
  }

  reset() {
    for (const z of this.zombies) {
      this.root.remove(z.group)
      z.parts.skin.dispose(); z.parts.cloth.dispose()
    }
    this.zombies.length = 0
    this.spawnInitial()
  }

  dispose() {
    this.scene.remove(this.root)
    this.scene.remove(this.bloodPoints)
  }
}

function lerpAngle(a, b, t) {
  let d = b - a
  while (d > Math.PI) d -= Math.PI * 2
  while (d < -Math.PI) d += Math.PI * 2
  return a + d * t
}
