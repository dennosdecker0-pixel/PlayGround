import * as THREE from 'three'
import { clamp, damp, lerp, mulberry32 } from './utils.js'

const EYE_STAND = 1.66
const EYE_CROUCH = 1.12
const RADIUS = 0.34
const HEIGHT_STAND = 1.78
const HEIGHT_CROUCH = 1.28

export class Player {
  constructor(camera, world, opts = {}) {
    this.camera = camera
    this.world = world
    this.canvas = opts.canvas || document.getElementById('game')
    this.pos = new THREE.Vector3(18, 0, 3.8)
    this.vel = new THREE.Vector3()
    this.yaw = Math.PI / 2
    this.pitch = -0.035
    this.sensitivity = opts.sensitivity ?? 0.0022
    this.eye = EYE_STAND
    this.crouching = false
    this.crouchAmount = 0
    this.grounded = true
    this.gravity = 24
    this.jumpSpeed = 6.2
    this.moving = false
    this.sprinting = false
    this.speed = 0
    this.bobTime = 0
    this.bobAmount = 0
    this.stepTimer = 0
    this.footstepCount = 0
    this.locked = false
    this.enabled = true
    this.frozen = false
    this.trauma = 0
    this.shake = new THREE.Vector3()
    this.keys = Object.create(null)
    this.noise = 0
    this.surface = 'stone'
    this._tmp = new THREE.Vector3()
    this._fwd = new THREE.Vector3()
    this._right = new THREE.Vector3()
    this._focusTimer = 0
    this.focus = null
    this.onStep = null
    this.onInteractFocus = null
    this.onLockChange = null
    this.onJump = null

    // survival state
    this.health = 100
    this.maxHealth = 100
    this.stamina = 100
    this.maxStamina = 100
    this.hunger = 86
    this.thirst = 74
    this.infection = 0
    this.staminaDelay = 0
    this.healthFlash = 0
    this.alive = true
    this.inSafeZone = false
    this.safeZone = null
    this.distanceWalked = 0
    this.kills = 0
    this.deaths = 0
    this.timeAlive = 0
    this.lastDamage = -99
    this.exhausted = false
    this.rng = mulberry32(77)

    this.bind()
    this.applyCamera(0)
  }

  bind() {
    this._onKeyDown = (e) => {
      if (e.repeat) return
      const k = e.code
      this.keys[k] = true
      if (k === 'Space' && this.enabled && this.locked && this.grounded && !this.frozen) {
        this.vel.y = this.jumpSpeed
        this.grounded = false
        this.stamina = Math.max(0, this.stamina - 6)
        this.addTrauma(0.16)
        this.onJump?.()
      }
      if (k === 'ControlLeft' || k === 'ControlRight') this.crouching = true
      if (['Tab', 'Space', 'KeyE', 'KeyQ', 'KeyF', 'KeyR', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8'].includes(k)) e.preventDefault()
    }
    this._onKeyUp = (e) => {
      this.keys[e.code] = false
      if (e.code === 'ControlLeft' || e.code === 'ControlRight') this.crouching = false
    }
    this._onMouseMove = (e) => {
      if (!this.locked || !this.enabled) return
      this.yaw -= e.movementX * this.sensitivity
      this.pitch -= e.movementY * this.sensitivity
      this.pitch = clamp(this.pitch, -1.45, 1.45)
    }
    this._onLockChange = () => {
      this.locked = document.pointerLockElement === this.canvas
      this.onLockChange?.(this.locked)
    }
    this._onBlur = () => { for (const k in this.keys) this.keys[k] = false; this.crouching = false }
    window.addEventListener('keydown', this._onKeyDown)
    window.addEventListener('keyup', this._onKeyUp)
    window.addEventListener('blur', this._onBlur)
    document.addEventListener('mousemove', this._onMouseMove)
    document.addEventListener('pointerlockchange', this._onLockChange)
  }

  lock() {
    if (document.pointerLockElement !== this.canvas) {
      const p = this.canvas.requestPointerLock?.()
      if (p && p.catch) p.catch(() => {})
    }
  }

  unlock() {
    if (document.pointerLockElement) document.exitPointerLock()
  }

  setPosition(x, y, z) {
    this.pos.set(x, y, z)
    this.vel.set(0, 0, 0)
    this.applyCamera(0)
  }

  get eyeHeight() {
    return lerp(EYE_STAND, EYE_CROUCH, this.crouchAmount)
  }

  get height() {
    return lerp(HEIGHT_STAND, HEIGHT_CROUCH, this.crouchAmount)
  }

  get forward() {
    return this._fwd.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw))
  }

  get right() {
    return this._right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw))
  }

  addTrauma(t) {
    this.trauma = clamp(this.trauma + t, 0, 1)
  }

  addStamina(v) {
    this.stamina = clamp(this.stamina + v, 0, this.maxStamina)
  }

  useStamina(v) {
    if (this.stamina < v) return false
    this.stamina -= v
    this.staminaDelay = 1.3
    return true
  }

  hurt(amount, { infection = 0, source = null, force = 0 } = {}) {
    if (!this.alive) return
    this.health = clamp(this.health - amount, 0, this.maxHealth)
    this.infection = clamp(this.infection + infection, 0, 100)
    this.lastDamage = this.timeAlive
    this.healthFlash = 1
    this.addTrauma(clamp(amount / 34 + (force || 0), 0.12, 0.85))
    if (this.onHurt) this.onHurt(amount, source)
    if (this.health <= 0) this.die(source)
  }

  heal(amount) {
    this.health = clamp(this.health + amount, 0, this.maxHealth)
    if (this.onHeal) this.onHeal(amount)
  }

  die(source = 'the infected') {
    if (!this.alive) return
    this.alive = false
    this.enabled = false
    this.deaths++
    this.vel.set(0, 0, 0)
    this.onDeath?.(source)
  }

  respawn(x = 18, z = 3.8) {
    this.alive = true
    this.enabled = true
    this.health = this.maxHealth
    this.stamina = this.maxStamina
    this.infection = Math.max(0, this.infection - 35)
    this.hunger = Math.max(35, this.hunger)
    this.thirst = Math.max(35, this.thirst)
    this.setPosition(x, 0, z)
    this.pitch = -0.03
    this.yaw = Math.PI / 2
    this.trauma = 0
  }

  surfaceAt(x, z) {
    // cheap surface classification for footstep timbre
    if (Math.abs(z) < 5.5) return 'asphalt'
    if (Math.abs(z) < 9) return 'stone'
    const inBuilding = (x > -14 && x < 8 && z > -22 && z < -9) ||
      (x > -14 && x < 2 && z > 9 && z < 25) ||
      (x > 6 && x < 18 && z > 9 && z < 20) ||
      (x > 13 && x < 41 && z > -34 && z < -9) ||
      (x > -34 && x < -12 && z > -25 && z < -9) ||
      (x > -34 && x < -20 && z > 9 && z < 20)
    return inBuilding ? 'interior' : 'stone'
  }

  resolveCollisions() {
    const r = RADIUS
    const feet = this.pos.y
    const head = feet + this.height
    const colliders = this.world.colliders
    for (let pass = 0; pass < 2; pass++) {
      for (const c of colliders) {
        if (!c.enabled) continue
        if (c.y1 <= feet + 0.25 || c.y0 >= head) continue
        const minX = c.minX - r, maxX = c.maxX + r
        const minZ = c.minZ - r, maxZ = c.maxZ + r
        if (this.pos.x <= minX || this.pos.x >= maxX || this.pos.z <= minZ || this.pos.z >= maxZ) continue
        const dl = this.pos.x - minX, dr = maxX - this.pos.x
        const db = this.pos.z - minZ, df = maxZ - this.pos.z
        const m = Math.min(dl, dr, db, df)
        if (m === dl) this.pos.x = minX
        else if (m === dr) this.pos.x = maxX
        else if (m === db) this.pos.z = minZ
        else this.pos.z = maxZ
      }
    }
    // hard world bounds
    this.pos.x = clamp(this.pos.x, -91, 91)
    this.pos.z = clamp(this.pos.z, -57, 57)
  }

  update(dt, elapsed) {
    this.timeAlive += dt
    if (!this.alive) {
      this.applyCamera(dt)
      return
    }

    const active = this.enabled && this.locked && !this.frozen
    const k = this.keys
    let ix = 0, iz = 0
    if (active) {
      if (k.KeyW || k.ArrowUp) iz += 1
      if (k.KeyS || k.ArrowDown) iz -= 1
      if (k.KeyD || k.ArrowRight) ix += 1
      if (k.KeyA || k.ArrowLeft) ix -= 1
    }
    const movingInput = ix !== 0 || iz !== 0
    const wantSprint = active && movingInput && iz > 0 && (k.ShiftLeft || k.ShiftRight) && !this.crouching && this.stamina > 2
    this.sprinting = wantSprint
    this.moving = movingInput

    // crouch smoothing
    this.crouchAmount = damp(this.crouchAmount, this.crouching ? 1 : 0, 12, dt)

    const targetSpeed = this.crouching ? 2.15 : wantSprint ? 7.0 : 4.25
    const accel = this.grounded ? 15 : 4.5
    const wishX = ix, wishZ = iz
    const len = Math.hypot(wishX, wishZ) || 1
    const fwd = this.forward
    const right = this.right
    const dirX = (fwd.x * wishZ + right.x * wishX) / len
    const dirZ = (fwd.z * wishZ + right.z * wishX) / len
    const targetVX = movingInput ? dirX * targetSpeed : 0
    const targetVZ = movingInput ? dirZ * targetSpeed : 0
    this.vel.x = damp(this.vel.x, targetVX, accel, dt)
    this.vel.z = damp(this.vel.z, targetVZ, accel, dt)
    this.speed = Math.hypot(this.vel.x, this.vel.z)

    // gravity / jump
    this.vel.y -= this.gravity * dt
    this.pos.addScaledVector(this.vel, dt)
    if (this.pos.y <= 0) {
      this.pos.y = 0
      this.vel.y = 0
      this.grounded = true
    } else {
      this.grounded = false
    }
    this.resolveCollisions()

    // stamina
    if (wantSprint && this.speed > 1.2) {
      this.stamina = Math.max(0, this.stamina - 17 * dt)
      this.staminaDelay = 0.9
      if (this.stamina <= 0) this.exhausted = true
    } else {
      this.staminaDelay = Math.max(0, this.staminaDelay - dt)
      if (this.staminaDelay <= 0) {
        const regen = this.crouching ? 19 : this.grounded ? 12.5 : 7
        this.stamina = Math.min(this.maxStamina, this.stamina + regen * dt)
        if (this.stamina > 35) this.exhausted = false
      }
    }

    // survival meters (slower, legible pacing)
    const moving = this.speed > 0.35
    this.hunger = clamp(this.hunger - dt * (this.sprinting ? 0.075 : moving ? 0.05 : 0.03), 0, 100)
    this.thirst = clamp(this.thirst - dt * (this.sprinting ? 0.11 : moving ? 0.075 : 0.045), 0, 100)
    if (this.hunger <= 0 || this.thirst <= 0) {
      this.health = Math.max(0, this.health - dt * ((this.hunger <= 0 ? 0.55 : 0) + (this.thirst <= 0 ? 0.75 : 0)))
      if (this.health <= 0) this.die('dehydration')
    }
    if (this.infection > 60) {
      this.health = Math.max(0, this.health - dt * (this.infection - 60) * 0.006)
      if (this.health <= 0) this.die('infection')
    }

    // safe zone
    const sz = this.world.inSafeZone(this.pos)
    this.safeZone = sz
    this.inSafeZone = !!sz
    if (sz) {
      this.health = Math.min(this.maxHealth, this.health + dt * 1.4)
      if (this.infection > 0) this.infection = Math.max(0, this.infection - dt * 0.5)
    }

    // footstep/bob
    const movingGround = moving && this.grounded
    if (movingGround) {
      const stride = this.crouching ? 0.78 : this.sprinting ? 0.34 : 0.52
      this.bobTime += dt * (this.sprinting ? 12.5 : this.crouching ? 5.2 : 8.0)
      this.bobAmount = damp(this.bobAmount, 1, 7, dt)
      this.stepTimer -= dt
      this.distanceWalked += this.speed * dt
      this.surface = this.surfaceAt(this.pos.x, this.pos.z)
      if (this.stepTimer <= 0) {
        this.stepTimer = stride
        this.footstepCount++
        this.onStep?.({ sprint: this.sprinting, crouch: this.crouching, surface: this.surface, volume: this.crouching ? 0.28 : this.sprinting ? 1 : 0.62 })
      }
      this.noise = damp(this.noise, this.crouching ? 0.08 : this.sprinting ? 0.95 : 0.34, 6, dt)
    } else {
      this.bobAmount = damp(this.bobAmount, 0, 6, dt)
      this.noise = damp(this.noise, 0, 3.5, dt)
    }

    // focus raycast (cheap throttle)
    this._focusTimer -= dt
    if (this._focusTimer <= 0 && active) {
      this._focusTimer = 0.1
      const prev = this.focus
      this.focus = this.world.focus(this.camera, 3.25)
      if (prev !== this.focus) this.onInteractFocus?.(this.focus)
    } else if (!active && this.focus) {
      this.focus = null
      this.world.focus(null)
      this.onInteractFocus?.(null)
    }

    this.healthFlash = Math.max(0, this.healthFlash - dt * 1.5)
    this.applyCamera(dt)
  }

  applyCamera(dt) {
    const bob = this.bobAmount
    const bobY = Math.sin(this.bobTime * 2) * 0.028 * bob
    const bobX = Math.cos(this.bobTime) * 0.035 * bob
    const idle = Math.sin(performance.now() * 0.0011) * 0.006
    const eye = this.eyeHeight + bobY + idle - (this.alive ? 0 : Math.min(0.5, dt * 0.1))

    // camera shake from trauma
    this.trauma = Math.max(0, this.trauma - dt * 1.35)
    const sh = this.trauma * this.trauma
    const t = performance.now() * 0.001
    this.shake.set(
      (Math.sin(t * 37.1) + Math.sin(t * 19.3)) * 0.5 * sh * 0.42,
      (Math.sin(t * 41.7) + Math.sin(t * 23.9)) * 0.5 * sh * 0.34,
      (Math.sin(t * 29.3) + Math.sin(t * 13.1)) * 0.5 * sh * 0.2
    )

    const sideX = Math.cos(this.yaw) * bobX
    const sideZ = -Math.sin(this.yaw) * bobX
    this.camera.position.set(
      this.pos.x + sideX + this.shake.x,
      this.pos.y + eye + this.shake.y,
      this.pos.z + sideZ + this.shake.z
    )
    this.camera.rotation.set(this.pitch + this.shake.z * 0.12, this.yaw, this.shake.x * 0.16, 'YXZ')
    this._tmp.copy(this.pos)
    this._tmp.y += this.eyeHeight
  }

  status() {
    return {
      health: this.health,
      stamina: this.stamina,
      hunger: this.hunger,
      thirst: this.thirst,
      infection: this.infection,
      safe: this.inSafeZone,
      alive: this.alive
    }
  }

  dispose() {
    window.removeEventListener('keydown', this._onKeyDown)
    window.removeEventListener('keyup', this._onKeyUp)
    window.removeEventListener('blur', this._onBlur)
    document.removeEventListener('mousemove', this._onMouseMove)
    document.removeEventListener('pointerlockchange', this._onLockChange)
  }
}
