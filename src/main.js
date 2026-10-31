import * as THREE from 'three'
import '@fontsource/barlow-condensed/400.css'
import '@fontsource/barlow-condensed/500.css'
import '@fontsource/barlow-condensed/600.css'
import '@fontsource/barlow-condensed/700.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import './styles.css'

import { SkySystem } from './sky.js'
import { World } from './world.js'
import { Player } from './player.js'
import { ZombieSystem } from './zombies.js'
import { Inventory } from './inventory.js'
import { AudioEngine } from './audio.js'
import { UI } from './ui.js'
import { Combat } from './combat.js'
import { PostFX } from './post.js'
import { clamp } from './utils.js'

const SETTINGS_KEY = 'deadhour.settings.v1'

const DEFAULT_SETTINGS = {
  quality: 'balanced',
  scale: 1,
  bloom: true,
  subtitles: true,
  sens: 1
}

const WEATHER_LABEL = {
  clear: 'CLEAR SKIES',
  haze: 'LIGHT HAZE',
  overcast: 'OVERCAST',
  rain: 'RAIN',
  storm: 'STORM'
}

const DEATH_LINES = {
  walker: 'The dead found you in the street.',
  infected: 'It was faster than it looked.',
  brute: 'The big one got its hands on you.',
  screamer: 'Its scream brought the whole block down on you.',
  dehydration: 'The city is thirsty work.',
  infection: 'The fever took you before the dead could.',
  theinfected: 'The city took another one.'
}

function loadSettings() {
  const out = { ...DEFAULT_SETTINGS }
  try {
    const raw = localStorage.getItem(SETTINGS_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      for (const key of Object.keys(DEFAULT_SETTINGS)) {
        if (!(key in parsed)) continue
        if (key === 'quality' && !['low', 'balanced', 'high'].includes(parsed[key])) continue
        if (key === 'scale' && ![0.7, 0.85, 1].includes(Number(parsed[key]))) continue
        if (key === 'sens' && ![0.5, 1, 1.6].includes(Number(parsed[key]))) continue
        out[key] = key === 'scale' || key === 'sens' ? Number(parsed[key]) : parsed[key]
      }
    }
  } catch (e) { /* first run / private mode */ }
  return out
}

function makeImpactTexture() {
  const size = 96
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')
  const c = size / 2
  const grad = ctx.createRadialGradient(c, c, 1, c, c, c)
  grad.addColorStop(0, 'rgba(255,255,255,1)')
  grad.addColorStop(0.2, 'rgba(255,246,224,0.95)')
  grad.addColorStop(0.48, 'rgba(255,214,150,0.5)')
  grad.addColorStop(1, 'rgba(255,180,90,0)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)
  ctx.globalCompositeOperation = 'lighter'
  ctx.strokeStyle = 'rgba(255,238,196,0.8)'
  ctx.lineWidth = 1.5
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2 + 0.41
    const r0 = 4 + (i % 3) * 2
    const r1 = 16 + (i % 4) * 5
    ctx.beginPath()
    ctx.moveTo(c + Math.cos(a) * r0, c + Math.sin(a) * r0)
    ctx.lineTo(c + Math.cos(a) * r1, c + Math.sin(a) * r1)
    ctx.stroke()
  }
  const tex = new THREE.CanvasTexture(canvas)
  tex.needsUpdate = true
  return tex
}

class Game {
  constructor() {
    this.canvas = document.getElementById('game')
    this.settings = loadSettings()
    this.playing = false
    this.paused = false
    this.startedOnce = false
    this.everLocked = false
    this.elapsed = 0
    this.lastFrame = performance.now()
    this.statsData = { loot: 0 }
    this._safeToast = false
    this._lastCause = null
    this._questDelivered = false

    this.setupRenderer()
    this.setupScene()

    this.impactTexture = makeImpactTexture()

    this.sky = new SkySystem(this.scene, this.renderer)
    this.world = new World(this.scene, { quality: this.settings.quality })
    this.player = new Player(this.camera, this.world, {
      canvas: this.canvas,
      sensitivity: 0.0022 * this.settings.sens
    })

    this.audio = new AudioEngine()
    this.inventory = new Inventory(this, { maxWeight: 34 })
    this.giveStartingKit()

    this.quest = {
      stage: 0,
      title: 'Search the pharmacy',
      sub: 'Harbor Pharmacy',
      target: this.world.questPoints.pharmacy || new THREE.Vector3(1, 1.6, -9)
    }

    this.ui = new UI(this)
    this.zombies = new ZombieSystem(this.scene, this.world, this.player, {
      maxAlive: 18,
      onEvent: (e) => this.onZombieEvent(e)
    })
    this.combat = new Combat(this)
    this.post = new PostFX(this.renderer, this.scene, this.camera, {
      quality: this.settings.quality,
      bloom: this.settings.bloom
    })

    this.bindPlayer()
    this.bindSky()
    this.bindWindow()

    this.ui.setQuest(this.quest.title, this.quest.sub)
    this.applySettings()
    this.resize()

    // Render one frame immediately so the menu has a living city behind it.
    this.sky.update(0, this.camera.position, this.player.pos)
    this.world.update(0.016, 0, this.player.pos, this.camera.position)
    this.camera.updateMatrixWorld(true)
    this.post.render()
    this.ui.el.status.innerHTML = '<i class="status-dot"></i> CITY READY · CLICK PLAY'

    this.lastFrame = performance.now()
    this.frame = this.frame.bind(this)
    requestAnimationFrame(this.frame)
  }

  // ------------------------------------------------------------- setup
  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: false,
      stencil: false,
      powerPreference: 'high-performance'
    })
    this.renderer.setClearColor(0x0b0c0a, 1)
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.04
    this.renderer.shadowMap.enabled = false
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.info.autoReset = true
  }

  setupScene() {
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color('#0d0e0c')
    this.camera = new THREE.PerspectiveCamera(74, 16 / 9, 0.06, 820)
    this.camera.rotation.order = 'YXZ'
  }

  giveStartingKit() {
    const inv = this.inventory
    inv.add('machete', 1)
    inv.add('bandage', 2)
    inv.add('water', 1)
    inv.add('energy_bar', 1)
    inv.equip('machete')
  }

  bindPlayer() {
    this.player.onStep = ({ surface, volume, sprint }) => {
      this.audio.play('footstep', { surface, volume: clamp(volume * (sprint ? 1.05 : 1), 0, 1) })
    }
    this.player.onJump = () => {
      this.audio.play('footstep', { surface: 'stone', volume: 0.4 })
    }
    this.player.onHurt = (amount, source) => {
      this.audio.play('hurt')
      this.ui.damageFlash()
      if (amount > 14) this.ui.mini('WOUNDED')
      this.post?.setDamage(1)
    }
    this.player.onHeal = () => {
      this.ui.mini('PATCHED UP')
    }
    this.player.onDeath = (source) => this.onDeath(source)
    this.player.onLockChange = (locked) => this.onLockChange(locked)
    this.player.onInteractFocus = (rec) => {
      if (!rec && this.ui) this.ui.searchTarget = null
    }
  }

  bindSky() {
    this.sky.onWeatherChange = (name) => {
      if (!this.ui) return
      this.ui.mini('WEATHER · ' + (WEATHER_LABEL[name] || name.toUpperCase()))
      this.audio?.setWeather({ rain: this.sky.rainAmount || 0, overcast: this.sky.overcast || 0.2 })
    }
    this.sky.onLightning = () => {
      this.audio?.play('lightning')
    }
  }

  bindWindow() {
    this._onResize = () => this.resize()
    this._onVisibility = () => {
      if (document.hidden) {
        for (const k in this.player.keys) this.player.keys[k] = false
      }
    }
    window.addEventListener('resize', this._onResize)
    document.addEventListener('visibilitychange', this._onVisibility)
  }

  // ------------------------------------------------------------- flow
  start() {
    if (this.playing && !this.paused) return
    this.audio.init()
    this.audio.resume()
    this.audio.playing = true
    this.audio.setWeather({ rain: this.sky.rainAmount || 0, overcast: this.sky.overcast || 0.2 })

    this.playing = true
    this.paused = false
    this.player.enabled = true
    this.player.frozen = false
    this.combat.enabled = true
    if (!this.player.alive) this.player.respawn(18, 3.8)

    this.ui.showGame()
    this.player.lock()

    if (!this.startedOnce) {
      this.startedOnce = true
      this.ui.subtitle('Harbor City, six hours after the evacuation order. The pharmacy on Harbor Avenue may still have antibiotics.', 7)
      this.ui.toast('Harbor City', 'Search the pharmacy', '')
    }
    this.syncQuest()
  }

  setPaused(value) {
    this.paused = value
    this.player.frozen = value
    this.player.enabled = this.playing && !value
    this.combat.enabled = this.playing && !value
    if (value) {
      for (const k in this.player.keys) this.player.keys[k] = false
      this.player.crouching = false
    }
  }

  restart() {
    this.ui.closeDeath()
    this.player.respawn(18, 3.8)
    this.player.hunger = 86
    this.player.thirst = 74
    this.player.infection = 0
    this.player.kills = 0
    this.player.timeAlive = 0
    this.player.speed = 0
    this.zombies.reset()
    this.combat.reset()
    this.statsData.loot = 0
    this._safeToast = false
    this.playing = true
    this.setPaused(false)
    this.ui.showGame()
    this.syncQuest()
    this.player.lock()
    this.ui.toast('Back on Harbor Avenue', 'Try to last a little longer', '')
  }

  quitToMenu() {
    this.playing = false
    this.setPaused(false)
    this.player.enabled = false
    this.player.frozen = true
    this.player.unlock()
    this.combat.enabled = false
    this.audio.playing = false
    this.ui.closeDeath()
    this.ui.closePanel()
    this.ui.showMenu()
  }

  onDeath(source) {
    this._lastCause = source
    this.audio.play('hurt')
    this.post?.setDamage(1)
    this.ui.showDeath({ cause: DEATH_LINES[String(source).toLowerCase()] || DEATH_LINES[String(source)] || 'The city took another one.' })
    this.paused = true
    this.combat.enabled = false
    this.player.enabled = false
  }

  onLockChange(locked) {
    if (locked) {
      this.everLocked = true
      return
    }
    if (!this.playing || this.paused || !this.everLocked || document.hidden) return
    if (this.ui?.panel) return
    this.setPaused(true)
    this.ui.openPause()
  }

  // ------------------------------------------------------------- quest
  syncQuest() {
    if (!this.ui) return
    this.ui.setQuest(this.quest.title, this.quest.sub)
    if (this.quest.target) {
      const d = Math.hypot(this.quest.target.x - this.player.pos.x, this.quest.target.z - this.player.pos.z)
      this.ui.el.questSub.textContent = `${this.quest.sub} · ${d < 4 ? 'HERE' : Math.round(d) + ' m'}`
    }
    if (this.quest.stage >= 2) this.ui.el.quest?.classList.add('done')
  }

  onLoot(id, qty) {
    this.statsData.loot += qty
    if (id === 'antibiotics' && this.quest.stage === 0) {
      this.quest.stage = 1
      this.quest.title = 'Deliver the antibiotics'
      this.quest.sub = 'The Old Laundry'
      this.quest.target = this.world.questPoints.safehouse
      this.ui.setQuest(this.quest.title, this.quest.sub)
      this.ui.toast('Antibiotics found', 'Take them to the Old Laundry safe house', 'good')
      this.ui.subtitle('This is the full course. The Old Laundry safe house is west, past the checkpoint.', 6)
      this.audio.play('quest')
    }
  }

  updateQuest() {
    if (this.quest.stage === 1 && !this._questDelivered) {
      const target = this.world.questPoints.safehouse
      const d = Math.hypot(target.x - this.player.pos.x, target.z - this.player.pos.z)
      if (d < 6.5 && this.inventory.count('antibiotics') > 0) {
        this._questDelivered = true
        this.quest.stage = 2
        this.quest.title = 'Safe house supplied'
        this.quest.sub = 'The Old Laundry'
        this.quest.target = null
        this.inventory.remove('antibiotics', 1)
        this.ui.setQuest(this.quest.title, this.quest.sub)
        this.ui.el.quest?.classList.add('done')
        this.ui.toast('Antibiotics delivered', 'The Old Laundry will hold a little longer', 'good')
        this.ui.subtitle('The antibiotics are in the right hands. The safe house can treat the sick — and you.', 6)
        this.audio.play('quest')
        this.player.heal(20)
        this.player.addStamina(30)
      }
    }
    if (this.player.inSafeZone && !this._safeToast) {
      this._safeToast = true
      this.ui.mini('SAFE HOUSE · THE OLD LAUNDRY')
      this.ui.subtitle('The Old Laundry. The infected rarely come this far inside. Catch your breath.', 5)
    } else if (!this.player.inSafeZone) {
      this._safeToast = false
    }
  }

  // ------------------------------------------------------------- events
  onZombieEvent(e) {
    const a = this.audio
    if (!a) return
    const cam = this.camera.position
    const yaw = this.player.yaw
    if (e.type === 'groan' && e.zombie) {
      const { pan, vol, dist } = a.panFor(e.zombie.pos, cam, yaw)
      if (dist < 30) a.groan(pan, vol * 0.7, dist > 13)
    } else if (e.type === 'scream' && e.zombie) {
      const { pan, vol, dist } = a.panFor(e.zombie.pos, cam, yaw)
      if (dist < 42) a.scream(pan, vol)
    } else if (e.type === 'attack' && e.zombie) {
      a.playAt('swing', { x: e.zombie.pos.x, y: 1.2, z: e.zombie.pos.z }, cam, yaw, { heavy: true })
    } else if (e.type === 'playerHit') {
      this.ui.damageFlash()
    } else if (e.type === 'kill' && e.zombie) {
      a.playAt('kill', { x: e.zombie.pos.x, y: 1.1, z: e.zombie.pos.z }, cam, yaw, {})
    }
  }

  // ------------------------------------------------------------- settings
  setSetting(key, value) {
    this.settings[key] = value
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings)) } catch (e) { /* ignore */ }
    this.applySettings()
  }

  applySettings() {
    const s = this.settings
    if (this.renderer) {
      if (this.post) {
        this.post.setQuality(s.quality)
        this.post.setBloom(s.bloom)
      }
      this.renderer.shadowMap.enabled = false
    }
    if (this.player) this.player.sensitivity = 0.0022 * s.sens
    if (this.ui) this.ui.applySettings()
    this.resize()
  }

  resize() {
    const w = Math.max(1, window.innerWidth)
    const h = Math.max(1, window.innerHeight)
    const s = this.settings
    const maxDpr = s.quality === 'low' ? 1 : s.quality === 'high' ? 1.6 : 1.3
    const dpr = Math.min(window.devicePixelRatio || 1, maxDpr)
    const bw = Math.max(320, Math.floor(w * s.scale * dpr))
    const bh = Math.max(180, Math.floor(h * s.scale * dpr))

    this.renderer.setPixelRatio(1)
    this.renderer.setSize(bw, bh, false)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    this.combat?.bindResize(w, h)
    if (this.post) {
      this.post.composer.setPixelRatio(1)
      this.post.setSize(bw, bh, 1)
    }
  }

  stats() {
    return {
      time: this.player.timeAlive,
      kills: this.player.kills,
      loot: this.statsData.loot,
      health: this.player.health,
      weight: this.inventory.weight
    }
  }

  addTrauma(t) {
    this.player.addTrauma(t)
  }

  // ------------------------------------------------------------- loop
  frame(now) {
    requestAnimationFrame(this.frame)
    const raw = (now - this.lastFrame) / 1000
    this.lastFrame = now
    const dt = clamp(raw, 0, 0.05)
    this.elapsed += dt

    if (!this.paused) {
      this.sky.update(dt, this.camera.position, this.player.pos)
      this.world.update(dt, this.elapsed, this.player.pos, this.camera.position)

      if (this.playing) {
        this.player.update(dt, this.elapsed)
        if (this.player.alive) this.zombies.update(dt, this.elapsed)
        this.combat.update(dt, this.elapsed)
        this.updateQuest()
        this.audio.update(dt, {
          playing: true,
          player: this.player,
          sky: this.sky,
          camera: this.camera.position,
          yaw: this.player.yaw
        })
        this.ui.update(dt, this.elapsed)
      }
    }

    // subtle damage grade; independent of pause so the effect settles
    if (this.player) {
      const wound = 1 - clamp(this.player.health / 100, 0, 1)
      const infection = clamp(this.player.infection / 100, 0, 1)
      const hit = this.player.healthFlash > 0 ? 0.16 * Math.min(1, this.player.healthFlash) : 0
      this.post?.setDamage(clamp(wound * 0.82 + infection * 0.22 + hit, 0, 1))
    }

    this.post.update(dt)
    this.post.render()

    const showWeapon = this.playing && this.player.alive && !this.paused && this.ui.screen === 'game'
    this.combat.root.visible = showWeapon
    if (showWeapon) this.combat.render()
  }
}

// Boot. A failure here still leaves the menu usable and reports the cause.
try {
  const game = new Game()
  window.__deadHour = game
  window.game = game
} catch (err) {
  console.error(err)
  const status = document.getElementById('menu-status')
  if (status) status.innerHTML = '<i class="status-dot"></i> CITY FAILED TO LOAD · SEE CONSOLE'
  const play = document.getElementById('play-btn')
  if (play) play.disabled = true
}
