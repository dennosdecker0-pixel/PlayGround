import { clamp, lerp, mulberry32 } from './utils.js'

export class AudioEngine {
  constructor() {
    this.ctx = null
    this.ready = false
    this.master = null
    this.volume = 0.72
    this.rng = mulberry32(5150)
    this.weather = { rain: 0, overcast: 0.2 }
    this.creakTimer = 6
    this.moanTimer = 9
    this.heartTimer = 0
    this.lastStep = 0
    this.enabled = false
    this.playing = false
  }

  init() {
    if (this.ctx) { this.ctx.resume?.(); return }
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return
    this.ctx = new AC()
    const ctx = this.ctx
    const comp = ctx.createDynamicsCompressor()
    comp.threshold.value = -18
    comp.knee.value = 22
    comp.ratio.value = 4
    comp.attack.value = 0.004
    comp.release.value = 0.22
    this.master = ctx.createGain()
    this.master.gain.value = this.volume
    this.master.connect(comp)
    comp.connect(ctx.destination)
    this.comp = comp

    // white noise buffer
    const len = ctx.sampleRate * 2
    const buf = ctx.createBuffer(1, len, ctx.sampleRate)
    const data = buf.getChannelData(0)
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1
    this.noiseBuffer = buf

    // brown-ish noise for wind
    const windBuf = ctx.createBuffer(1, len, ctx.sampleRate)
    const wd = windBuf.getChannelData(0)
    let last = 0
    for (let i = 0; i < len; i++) {
      last = last * 0.985 + (Math.random() * 2 - 1) * 0.015
      wd[i] = last * 3.2
    }
    this.windBuffer = windBuf

    this.buildAmbience()
    this.ready = true
    this.enabled = true
  }

  buildAmbience() {
    const ctx = this.ctx
    // wind layer
    const wind = ctx.createBufferSource()
    wind.buffer = this.windBuffer
    wind.loop = true
    const windFilter = ctx.createBiquadFilter()
    windFilter.type = 'lowpass'
    windFilter.frequency.value = 380
    windFilter.Q.value = 0.6
    this.windGain = ctx.createGain()
    this.windGain.gain.value = 0.001
    wind.connect(windFilter)
    windFilter.connect(this.windGain)
    this.windGain.connect(this.master)
    wind.start()
    this.wind = wind

    // high airy layer
    const air = ctx.createBufferSource()
    air.buffer = this.noiseBuffer
    air.loop = true
    const airFilter = ctx.createBiquadFilter()
    airFilter.type = 'bandpass'
    airFilter.frequency.value = 1400
    airFilter.Q.value = 0.35
    this.airGain = ctx.createGain()
    this.airGain.gain.value = 0.0001
    air.connect(airFilter)
    airFilter.connect(this.airGain)
    this.airGain.connect(this.master)
    air.start()
    this.air = air

    // rain layer
    const rain = ctx.createBufferSource()
    rain.buffer = this.noiseBuffer
    rain.loop = true
    const rainFilter = ctx.createBiquadFilter()
    rainFilter.type = 'highpass'
    rainFilter.frequency.value = 1500
    this.rainFilter = rainFilter
    this.rainGain = ctx.createGain()
    this.rainGain.gain.value = 0
    rain.connect(rainFilter)
    rainFilter.connect(this.rainGain)
    this.rainGain.connect(this.master)
    rain.start()
    this.rain = rain

    // low drone bed
    const droneGain = ctx.createGain()
    droneGain.gain.value = 0.038
    droneGain.connect(this.master)
    this.droneGain = droneGain
    for (const [f, type, g] of [[41.2, 'sine', 0.6], [61.7, 'triangle', 0.32], [82.4, 'sine', 0.18]]) {
      const o = ctx.createOscillator()
      o.type = type
      o.frequency.value = f
      const gn = ctx.createGain()
      gn.gain.value = g
      const filt = ctx.createBiquadFilter()
      filt.type = 'lowpass'
      filt.frequency.value = 220
      o.connect(filt)
      filt.connect(gn)
      gn.connect(droneGain)
      o.start()
      // slow drift
      const lfo = ctx.createOscillator()
      lfo.frequency.value = 0.03 + this.rng() * 0.05
      const lfoGain = ctx.createGain()
      lfoGain.gain.value = 0.6
      lfo.connect(lfoGain)
      lfoGain.connect(o.frequency)
      lfo.start()
    }
  }

  resume() {
    if (this.ctx?.state === 'suspended') this.ctx.resume()
  }

  setVolume(v) {
    this.volume = clamp(v, 0, 1)
    if (this.master) this.master.gain.value = this.volume
  }

  setWeather({ rain = 0, overcast = 0.2 } = {}) {
    this.weather = { rain, overcast }
    if (!this.ready) return
    const t = this.ctx.currentTime
    this.rainGain.gain.setTargetAtTime(rain * 0.05, t, 0.8)
    this.rainFilter.frequency.setTargetAtTime(1000 + rain * 1800, t, 0.8)
    this.windGain.gain.setTargetAtTime(0.016 + overcast * 0.026, t, 1.2)
    this.airGain.gain.setTargetAtTime(0.0016 + overcast * 0.004, t, 1.2)
  }

  panFor(pos, camera, yaw) {
    if (!pos) return { pan: 0, vol: 1, dist: 0 }
    const dx = pos.x - camera.x
    const dz = pos.z - camera.z
    const dist = Math.hypot(dx, dz)
    const rx = Math.cos(yaw), rz = -Math.sin(yaw)
    const pan = clamp((dx * rx + dz * rz) / Math.max(1, dist), -1, 1) * 0.85
    const vol = clamp(1 / (1 + dist * 0.11), 0, 1)
    return { pan, vol, dist }
  }

  connectOutput(node, pan = 0, gain = 1) {
    const ctx = this.ctx
    const g = ctx.createGain()
    g.gain.value = gain
    let out = g
    if (ctx.createStereoPanner) {
      const p = ctx.createStereoPanner()
      p.pan.value = pan
      g.connect(p)
      out = p
    }
    out.connect(this.master)
    node.connect(g)
    return g
  }

  noise(duration, { type = 'bandpass', freq = 800, q = 0.8, gain = 0.3, pan = 0, attack = 0.002, sweepTo = null } = {}) {
    if (!this.ready) return
    const ctx = this.ctx
    const src = ctx.createBufferSource()
    src.buffer = this.noiseBuffer
    src.loop = true
    const filt = ctx.createBiquadFilter()
    filt.type = type
    filt.frequency.value = freq
    filt.Q.value = q
    if (sweepTo) filt.frequency.exponentialRampToValueAtTime(Math.max(40, sweepTo), ctx.currentTime + duration)
    const g = ctx.createGain()
    const now = ctx.currentTime
    g.gain.setValueAtTime(0.0001, now)
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), now + attack)
    g.gain.exponentialRampToValueAtTime(0.0001, now + duration)
    src.connect(filt)
    filt.connect(g)
    this.connectOutput(g, pan)
    src.start(now, this.rng() * 1.5)
    src.stop(now + duration + 0.02)
  }

  tone(freq, duration, { type = 'sine', gain = 0.2, pan = 0, glide = null, attack = 0.004, delay = 0 } = {}) {
    if (!this.ready) return
    const ctx = this.ctx
    const o = ctx.createOscillator()
    o.type = type
    const now = ctx.currentTime + delay
    o.frequency.setValueAtTime(freq, now)
    if (glide) o.frequency.exponentialRampToValueAtTime(Math.max(20, glide), now + duration)
    const g = ctx.createGain()
    g.gain.setValueAtTime(0.0001, now)
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), now + attack)
    g.gain.exponentialRampToValueAtTime(0.0001, now + duration)
    o.connect(g)
    this.connectOutput(g, pan)
    o.start(now)
    o.stop(now + duration + 0.02)
  }

  play(name, opts = {}) {
    if (!this.ready || !this.enabled) return
    const pan = opts.pan ?? 0
    switch (name) {
      case 'footstep': {
        const s = opts.surface || 'stone'
        const vol = (opts.volume ?? 0.6) * 0.55
        if (s === 'interior') {
          this.noise(0.11, { type: 'bandpass', freq: 320 + this.rng() * 160, q: 1.4, gain: vol * 0.75, pan })
          this.tone(72 + this.rng() * 22, 0.11, { type: 'sine', gain: vol * 0.4, pan })
        } else if (s === 'asphalt') {
          this.noise(0.1, { type: 'bandpass', freq: 700 + this.rng() * 500, q: 0.8, gain: vol * 0.62, pan })
          this.tone(96, 0.08, { type: 'sine', gain: vol * 0.22, pan })
        } else {
          this.noise(0.09, { type: 'bandpass', freq: 1150 + this.rng() * 600, q: 1.1, gain: vol * 0.5, pan })
        }
        break
      }
      case 'swing':
        this.noise(0.24, { type: 'bandpass', freq: opts.heavy ? 320 : 520, q: 1.1, gain: opts.heavy ? 0.36 : 0.24, pan, sweepTo: opts.heavy ? 140 : 1800, attack: 0.03 })
        break
      case 'bladeHit':
        this.noise(0.16, { type: 'lowpass', freq: 1050, q: 1.4, gain: 0.4, pan })
        this.tone(120, 0.16, { type: 'square', gain: 0.1, pan, glide: 55 })
        this.noise(0.09, { type: 'highpass', freq: 2400, gain: 0.16, pan })
        break
      case 'bluntHit':
        this.tone(74, 0.24, { type: 'sine', gain: 0.42, pan, glide: 36 })
        this.noise(0.18, { type: 'lowpass', freq: 550, q: 1.2, gain: 0.34, pan })
        break
      case 'pistol':
        this.noise(0.17, { type: 'lowpass', freq: 2600, q: 0.9, gain: 0.7, pan, attack: 0.001, sweepTo: 260 })
        this.tone(155, 0.2, { type: 'square', gain: 0.3, pan, glide: 45 })
        this.tone(70, 0.26, { type: 'sine', gain: 0.42, pan, glide: 34 })
        this.noise(0.5, { type: 'lowpass', freq: 600, q: 0.6, gain: 0.12, pan })
        break
      case 'shotgun':
        this.noise(0.32, { type: 'lowpass', freq: 2100, q: 0.7, gain: 0.9, pan, attack: 0.001, sweepTo: 170 })
        this.tone(92, 0.36, { type: 'sine', gain: 0.55, pan, glide: 28 })
        this.noise(0.9, { type: 'lowpass', freq: 480, q: 0.5, gain: 0.16, pan })
        break
      case 'rifle':
        this.noise(0.2, { type: 'lowpass', freq: 3200, q: 0.8, gain: 0.8, pan, attack: 0.001, sweepTo: 300 })
        this.tone(180, 0.18, { type: 'square', gain: 0.25, pan, glide: 50 })
        this.tone(64, 0.3, { type: 'sine', gain: 0.4, pan, glide: 30 })
        break
      case 'dryfire':
        this.noise(0.035, { type: 'highpass', freq: 2200, gain: 0.16, pan })
        this.tone(1600, 0.03, { type: 'square', gain: 0.04, pan })
        break
      case 'reload':
        this.noise(0.05, { type: 'highpass', freq: 2600, gain: 0.16, pan })
        this.tone(280, 0.06, { type: 'square', gain: 0.05, pan, delay: 0.05 })
        this.noise(0.06, { type: 'highpass', freq: 1800, gain: 0.15, pan: pan + 0.2, delay: 0.35 })
        this.tone(180, 0.05, { type: 'square', gain: 0.05, pan, delay: 0.5 })
        break
      case 'impact':
        this.noise(0.06, { type: opts.surface === 'ground' ? 'lowpass' : 'bandpass', freq: opts.surface === 'ground' ? 500 : 1800, q: 1.2, gain: 0.14, pan })
        break
      case 'hurt':
        this.tone(66, 0.28, { type: 'sine', gain: 0.34, pan, glide: 38 })
        this.noise(0.2, { type: 'lowpass', freq: 420, q: 1, gain: 0.24, pan })
        break
      case 'groan':
        this.groan(pan, opts.vol ?? 0.5, false)
        break
      case 'scream':
        this.scream(pan, opts.vol ?? 0.55)
        break
      case 'kill':
        this.tone(88, 0.4, { type: 'sawtooth', gain: 0.18, pan, glide: 41 })
        this.noise(0.3, { type: 'lowpass', freq: 380, q: 1.4, gain: 0.22, pan })
        break
      case 'pickup':
        this.tone(620, 0.08, { type: 'sine', gain: 0.1, pan })
        this.tone(880, 0.12, { type: 'sine', gain: 0.08, pan, delay: 0.06 })
        break
      case 'click':
        this.tone(420, 0.04, { type: 'square', gain: 0.05, pan })
        break
      case 'door':
        this.noise(0.5, { type: 'bandpass', freq: 240, q: 2.2, gain: 0.18, pan, sweepTo: 120, attack: 0.05 })
        break
      case 'quest':
        this.tone(392, 0.6, { type: 'sine', gain: 0.14, pan })
        this.tone(523.25, 0.7, { type: 'sine', gain: 0.11, pan, delay: 0.14 })
        this.tone(659.25, 0.9, { type: 'sine', gain: 0.09, pan, delay: 0.3 })
        break
      case 'pickupGun':
        this.noise(0.08, { type: 'highpass', freq: 1400, gain: 0.14, pan })
        this.tone(340, 0.1, { type: 'square', gain: 0.06, pan })
        break
      case 'heartbeat':
        this.tone(48, 0.19, { type: 'sine', gain: 0.4, pan })
        this.tone(42, 0.22, { type: 'sine', gain: 0.3, pan, delay: 0.24 })
        break
      case 'lightning':
        this.noise(1.4, { type: 'lowpass', freq: 420, q: 0.5, gain: 0.35, pan: (this.rng() - 0.5) * 1.4, attack: 0.06 })
        break
    }
  }

  groan(pan = 0, vol = 0.4, distant = false) {
    if (!this.ready) return
    const ctx = this.ctx
    const now = ctx.currentTime
    const dur = 0.9 + this.rng() * 1.1
    const base = 58 + this.rng() * 46
    const g = ctx.createGain()
    g.gain.setValueAtTime(0.0001, now)
    g.gain.exponentialRampToValueAtTime(vol * 0.14, now + 0.15)
    g.gain.setValueAtTime(vol * 0.14, now + dur * 0.6)
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur)
    const filt = ctx.createBiquadFilter()
    filt.type = 'bandpass'
    filt.frequency.value = 340 + this.rng() * 260
    filt.Q.value = 3.2
    const o = ctx.createOscillator()
    o.type = 'sawtooth'
    o.frequency.setValueAtTime(base, now)
    o.frequency.linearRampToValueAtTime(base * (0.8 + this.rng() * 0.5), now + dur)
    const lfo = ctx.createOscillator()
    lfo.frequency.value = 5 + this.rng() * 4
    const lg = ctx.createGain()
    lg.gain.value = 12
    lfo.connect(lg)
    lg.connect(o.frequency)
    o.connect(filt)
    filt.connect(g)
    this.connectOutput(g, pan, distant ? 0.55 : 1)
    o.start(now)
    lfo.start(now)
    o.stop(now + dur + 0.05)
    lfo.stop(now + dur + 0.05)
    if (!distant) this.noise(dur * 0.7, { type: 'bandpass', freq: 600, q: 2, gain: vol * 0.03, pan })
  }

  scream(pan = 0, vol = 0.5) {
    if (!this.ready) return
    const ctx = this.ctx
    const now = ctx.currentTime
    const dur = 1.8
    const g = ctx.createGain()
    g.gain.setValueAtTime(0.0001, now)
    g.gain.exponentialRampToValueAtTime(vol * 0.2, now + 0.1)
    g.gain.setValueAtTime(vol * 0.2, now + dur * 0.55)
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur)
    const o = ctx.createOscillator()
    o.type = 'sawtooth'
    o.frequency.setValueAtTime(340, now)
    o.frequency.exponentialRampToValueAtTime(900, now + 0.35)
    o.frequency.exponentialRampToValueAtTime(480, now + dur * 0.8)
    const o2 = ctx.createOscillator()
    o2.type = 'square'
    o2.frequency.setValueAtTime(510, now)
    o2.frequency.exponentialRampToValueAtTime(760, now + 0.3)
    o2.frequency.exponentialRampToValueAtTime(390, now + dur * 0.8)
    const filt = ctx.createBiquadFilter()
    filt.type = 'bandpass'
    filt.frequency.value = 1300
    filt.Q.value = 1.2
    o.connect(filt)
    o2.connect(filt)
    filt.connect(g)
    this.connectOutput(g, pan)
    o.start(now); o2.start(now)
    o.stop(now + dur); o2.stop(now + dur)
    this.noise(dur * 0.7, { type: 'bandpass', freq: 1600, q: 1.2, gain: 0.05, pan })
  }

  update(dt, state = {}) {
    if (!this.ready) return
    const { playing, player, sky, camera, yaw } = state
    if (!playing) {
      this.master.gain.setTargetAtTime(this.volume * 0.45, this.ctx.currentTime, 0.5)
      return
    }
    this.master.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.4)
    this.creakTimer -= dt
    this.moanTimer -= dt
    if (this.creakTimer <= 0) {
      this.creakTimer = 9 + this.rng() * 18
      const pan = (this.rng() - 0.5) * 1.5
      if (this.rng() < 0.55) {
        this.noise(0.7 + this.rng() * 0.7, { type: 'bandpass', freq: 190 + this.rng() * 300, q: 4, gain: 0.055, pan, attack: 0.08, sweepTo: 120 })
      } else {
        this.tone(220 + this.rng() * 160, 0.5, { type: 'triangle', gain: 0.025, pan, glide: 180 })
      }
    }
    if (this.moanTimer <= 0) {
      this.moanTimer = 14 + this.rng() * 24
      this.groan((this.rng() - 0.5) * 1.3, 0.28, true)
    }
    if (player && player.health < 38 && player.alive) {
      this.heartTimer -= dt
      if (this.heartTimer <= 0) {
        this.heartTimer = 0.8 + player.health / 60
        this.play('heartbeat')
      }
    }
    if (sky) {
      const rain = sky.rainAmount || 0
      const over = sky.overcast || 0.2
      if (Math.abs(rain - this.weather.rain) > 0.02 || Math.abs(over - this.weather.overcast) > 0.05) {
        this.setWeather({ rain, overcast: over })
      }
    }
  }

  playAt(name, position, camera, yaw, opts = {}) {
    const { pan, vol, dist } = this.panFor(position, camera, yaw)
    if (dist > 42) return
    this.play(name, { ...opts, pan, vol: vol * (opts.vol ?? 1) })
  }
}
