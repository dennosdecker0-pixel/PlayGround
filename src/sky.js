import * as THREE from 'three'
import { clamp, damp, lerp, mulberry32, rand } from './utils.js'

const SKY_VERT = /* glsl */`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`

const SKY_FRAG = /* glsl */`
precision highp float;
varying vec3 vWorld;
uniform vec3 uSunDir;
uniform vec3 uMoonDir;
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uGround;
uniform vec3 uSunColor;
uniform vec3 uMoonColor;
uniform float uNight;
uniform float uOvercast;
uniform float uRain;
uniform float uTime;
uniform float uStars;

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i), b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0)), d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.55;
  for (int i = 0; i < 3; i++) { v += a * noise(p); p = p * 2.03 + 11.7; a *= 0.5; }
  return v;
}

void main() {
  vec3 d = normalize(vWorld);
  float h = d.y;
  vec3 col = mix(uHorizon, uZenith, pow(clamp(h, 0.0, 1.0), 0.42));
  if (h < 0.0) col = mix(uHorizon, uGround, clamp(-h * 3.5, 0.0, 1.0));

  float sunDot = max(dot(d, uSunDir), 0.0);
  float sunVisible = 1.0 - uOvercast * 0.88;

  // atmospheric scattering around the sun
  col += uSunColor * (pow(sunDot, 6.0) * 0.18 + pow(sunDot, 48.0) * 0.6) * sunVisible * (1.0 - uNight * 0.94);
  col += uSunColor * smoothstep(0.99945, 0.99985, sunDot) * 3.4 * sunVisible;

  // moon
  float moonDot = max(dot(d, uMoonDir), 0.0);
  float moonDisc = smoothstep(0.99955, 0.9998, moonDot);
  col += uMoonColor * moonDisc * 2.2 * uStars;
  col += uMoonColor * pow(moonDot, 24.0) * 0.22 * uStars;

  // stars
  if (uStars > 0.01 && h > 0.01) {
    vec2 sp = d.xz / (h + 0.35) * 180.0;
    float s = hash21(floor(sp));
    float twinkle = 0.65 + 0.35 * sin(uTime * 1.3 + s * 80.0);
    float star = smoothstep(0.9955, 1.0, s) * twinkle;
    col += vec3(0.72, 0.78, 0.9) * star * uStars * smoothstep(0.02, 0.2, h) * 0.85;
  }

  // clouds - flattened domain, slowly drifting
  if (h > -0.02) {
    vec2 cp = d.xz / (max(h, 0.0) + 0.16) * 0.62;
    cp += vec2(uTime * 0.004, uTime * 0.0016);
    float base = fbm(cp * 0.72);
    float detail = fbm(cp * 1.9 + 3.1);
    float cl = base * 0.72 + detail * 0.34;
    float cover = mix(0.61, 0.33, uOvercast);
    float mask = smoothstep(cover, cover + 0.22, cl) * smoothstep(-0.01, 0.1, h);
    float thin = smoothstep(cover - 0.14, cover + 0.1, cl) * 0.3;
    vec3 cloudCol = mix(vec3(0.30, 0.31, 0.31), uSunColor * 0.85, pow(sunDot, 2.5) * 0.55);
    cloudCol = mix(cloudCol, vec3(0.055, 0.06, 0.068), uNight * 0.82 + uOvercast * 0.25);
    cloudCol *= 1.0 - uRain * 0.22;
    col = mix(col, cloudCol, clamp(mask * 0.78 + thin * 0.3, 0.0, 0.95));
  }

  // horizon haze
  float haze = exp(-max(h, 0.0) * 11.0);
  col = mix(col, uHorizon * (1.0 - uRain * 0.3), haze * 0.4);

  // filmic-ish rolloff for the sky glow
  col = col / (col + vec3(0.72));
  col = pow(col, vec3(0.92));
  gl_FragColor = vec4(col, 1.0);
}
`

export class SkySystem {
  constructor(scene, renderer) {
    this.scene = scene
    this.renderer = renderer
    this.time = 17.32 // in-game hours
    this.day = 1
    this.dayLength = 64 // real minutes for 24h
    this.weather = 'haze'
    this.weatherTimer = 105
    this.overcast = 0.18
    this.rainAmount = 0
    this.flash = 0
    this.rng = mulberry32(4242)
    this.sunDir = new THREE.Vector3(-1, 0.12, 0.15).normalize()
    this.moonDir = new THREE.Vector3(1, -0.12, -0.15).normalize()
    this.onLightning = null
    this.onWeatherChange = null

    const uniforms = {
      uSunDir: { value: this.sunDir },
      uMoonDir: { value: this.moonDir },
      uZenith: { value: new THREE.Color('#3e5c75') },
      uHorizon: { value: new THREE.Color('#c89a75') },
      uGround: { value: new THREE.Color('#2b2822') },
      uSunColor: { value: new THREE.Color('#ffd6a0') },
      uMoonColor: { value: new THREE.Color('#a9bddb') },
      uNight: { value: 0 },
      uOvercast: { value: this.overcast },
      uRain: { value: 0 },
      uTime: { value: 0 },
      uStars: { value: 0 }
    }
    this.uniforms = uniforms
    this.material = new THREE.ShaderMaterial({
      vertexShader: SKY_VERT,
      fragmentShader: SKY_FRAG,
      uniforms,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false
    })
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(760, 48, 32), this.material)
    this.mesh.name = 'sky'
    this.mesh.frustumCulled = false
    this.mesh.renderOrder = -1000
    scene.add(this.mesh)

    this.hemi = new THREE.HemisphereLight(0xb8c6cf, 0x514433, 0.78)
    scene.add(this.hemi)
    this.ambient = new THREE.AmbientLight(0x4a5058, 0.24)
    scene.add(this.ambient)

    this.sun = new THREE.DirectionalLight(0xffd6a0, 2.6)
    this.sun.position.set(-60, 26, 14)
    this.sun.castShadow = true
    this.sun.shadow.mapSize.set(1024, 1024)
    this.sun.shadow.camera.near = 0.5
    this.sun.shadow.camera.far = 90
    this.sun.shadow.camera.left = -22
    this.sun.shadow.camera.right = 22
    this.sun.shadow.camera.top = 22
    this.sun.shadow.camera.bottom = -22
    this.sun.shadow.bias = -0.0012
    this.sun.shadow.normalBias = 0.04
    this.sun.target.position.set(0, 0, 0)
    scene.add(this.sun, this.sun.target)

    this.moonLight = new THREE.DirectionalLight(0x8fa6c8, 0)
    this.moonLight.position.set(40, 50, -20)
    scene.add(this.moonLight)

    this.scene.fog = new THREE.FogExp2(0xa98c72, 0.0125)

    this.envDirty = true
    this.envTimer = 0
    this.envMap = null
    this.pmrem = new THREE.PMREMGenerator(renderer)
    this.pmrem.compileEquirectangularShader()
  }

  setWeather(name) {
    if (name === this.weather) return
    this.weather = name
    if (this.onWeatherChange) this.onWeatherChange(name)
  }

  update(dt, cameraPos, playerPos) {
    this.time += dt * (24 / (this.dayLength * 60))
    if (this.time >= 24) { this.time -= 24; this.day++ }
    this.uniforms.uTime.value += dt
    this.weatherTimer -= dt

    if (this.weatherTimer <= 0) {
      this.weatherTimer = 70 + this.rng() * 90
      const options = this.time > 7 && this.time < 20
        ? ['clear', 'haze', 'overcast', 'rain', 'clear', 'haze']
        : ['haze', 'overcast', 'rain', 'clear']
      const next = options[Math.floor(this.rng() * options.length)]
      this.setWeather(next)
    }

    const targetOvercast = { clear: 0.05, haze: 0.2, overcast: 0.78, rain: 0.92, storm: 1 }[this.weather] ?? 0.2
    const targetRain = { rain: 1, storm: 1, overcast: 0.15 }[this.weather] ?? 0
    const wetTarget = { clear: 0.12, haze: 0.08, overcast: 0.25, rain: 0.9, storm: 1 }[this.weather] ?? 0.1
    this.overcast = damp(this.overcast, targetOvercast, 0.5, dt)
    const prevRain = this.rainAmount
    this.rainAmount = damp(this.rainAmount, targetRain, 0.7, dt)
    this.wetness = damp(this.wetness ?? 0.05, wetTarget, 0.35, dt)
    this.raining = this.rainAmount > 0.04
    if (this.onRainIntensity) this.onRainIntensity(this.rainAmount, this.raining)
    if (this.weather === 'storm' && this.rainAmount > 0.8 && this.rng() < dt * 0.08) {
      this.flash = 1
      if (this.onLightning) this.onLightning()
    }
    this.flash = Math.max(0, this.flash - dt * 4.2)

    // --- solar position ---
    const dayPhase = (this.time - 6) / 13 // sunrise 6, sunset 19
    const elev = Math.sin(dayPhase * Math.PI) * 1.12
    const az = Math.PI * (this.time - 6) / 13
    this.sunDir.set(Math.cos(az) * Math.cos(elev), Math.sin(elev), Math.sin(az) * Math.cos(elev) * 0.62 + 0.08).normalize()
    this.moonDir.copy(this.sunDir).multiplyScalar(-1)
    this.moonDir.z = 0.24

    const sunH = this.sunDir.y
    const day = clamp((sunH + 0.06) / 0.3, 0, 1)
    const golden = clamp(1 - Math.abs(sunH) / 0.35, 0, 1) * clamp(day * 1.2, 0, 1)
    const night = 1 - clamp((sunH + 0.02) / 0.16, 0, 1)
    this.daylight = day
    this.night = night

    // sky colours by time of day + weather
    const dayZenith = new THREE.Color('#4c718d')
    const duskZenith = new THREE.Color('#2f465c')
    const nightZenith = new THREE.Color('#060a12')
    const dayHorizon = new THREE.Color('#bfc5bd')
    const duskHorizon = new THREE.Color('#d99b6e')
    const nightHorizon = new THREE.Color('#101823')
    const zenith = dayZenith.clone().lerp(duskZenith, golden).lerp(nightZenith, night)
    const horizon = dayHorizon.clone().lerp(duskHorizon, golden * 0.95).lerp(nightHorizon, night)
    zenith.lerp(new THREE.Color('#535b61'), this.overcast * 0.55)
    horizon.lerp(new THREE.Color('#78766f'), this.overcast * 0.55)
    if (night > 0.5) horizon.lerp(new THREE.Color('#293440'), this.overcast * 0.25)
    this.uniforms.uZenith.value.copy(zenith)
    this.uniforms.uHorizon.value.copy(horizon)
    this.uniforms.uGround.value.copy(horizon).multiplyScalar(0.42)
    this.uniforms.uNight.value = night
    this.uniforms.uOvercast.value = this.overcast
    this.uniforms.uRain.value = this.rainAmount
    this.uniforms.uStars.value = clamp(night * 1.4, 0, 1) * (1 - this.overcast * 0.75)

    const sunColor = new THREE.Color('#ffe0b0').lerp(new THREE.Color('#ff9c5c'), golden * 0.8).lerp(new THREE.Color('#c8d4e6'), night * 0.85)
    this.uniforms.uSunColor.value.copy(sunColor)
    this.uniforms.uMoonColor.value.copy(new THREE.Color('#a9bddb'))

    this.sun.color.copy(sunColor)
    this.sun.intensity = (2.25 * day + 0.55 * golden) * (1 - this.overcast * 0.7) * (1 - night * 0.9) + this.flash * 2.5
    this.moonLight.intensity = night * 0.34 * (1 - this.overcast * 0.75)
    this.hemi.intensity = (0.72 * day + 0.16) * (1 - this.overcast * 0.25) + night * 0.22
    this.hemi.color.copy(zenith).lerp(new THREE.Color('#d9c4a4'), golden * 0.35)
    this.hemi.groundColor.set('#574b3a').lerp(new THREE.Color('#1b2027'), night)
    this.ambient.intensity = (0.18 + night * 0.13) * (1 - this.overcast * 0.2)
    this.ambient.color.copy(zenith)

    const fogColor = horizon.clone().lerp(new THREE.Color('#5a5c58'), this.overcast * 0.35)
    this.scene.fog.color.copy(fogColor)
    this.scene.fog.density = lerp(0.011, 0.028, this.overcast * 0.7 + this.rainAmount * 0.5) * lerp(1, 1.32, night)
    if (this.renderer) {
      this.renderer.toneMappingExposure = 1.02 + night * 0.18 + this.overcast * 0.06 + this.flash * 0.5
    }

    // lightning flash
    this.sun.intensity += this.flash * 3.2

    // follow player for shadow frustum
    if (playerPos) {
      this.sun.position.copy(playerPos).addScaledVector(this.sunDir, 46)
      this.sun.target.position.copy(playerPos)
      this.sun.target.updateMatrixWorld()
      this.moonLight.position.copy(playerPos).addScaledVector(this.moonDir, 50)
      this.moonLight.target.position.copy(playerPos)
      this.moonLight.target.updateMatrixWorld()
    }
    if (cameraPos) this.mesh.position.copy(cameraPos)

    // environment reflections, refreshed sparingly
    this.envTimer -= dt
    if (this.envTimer <= 0) {
      this.envTimer = 120
      this.refreshEnvironment()
    }
    this.updateRain(dt, cameraPos)
  }

  refreshEnvironment() {
    try {
      const scene = new THREE.Scene()
      const sky = new THREE.Mesh(new THREE.SphereGeometry(100, 32, 16), this.material)
      sky.material = this.material
      scene.add(sky)
      const rt = this.pmrem.fromScene(scene, 0, 0.1, 500)
      if (this.envMap) this.envMap.dispose()
      this.envMap = rt.texture
      this.scene.environment = this.envMap
      this.scene.environmentIntensity = 0.32
      sky.geometry.dispose()
    } catch (e) { console.warn('env refresh failed', e) }
  }

  updateRain(dt, cameraPos) {
    if (!this.rainSystem) this.rainSystem = new RainSystem(this.scene)
    this.rainSystem.update(dt, cameraPos, this.rainAmount, this.wind ?? 0.4)
  }

  clockString() {
    const h = Math.floor(this.time)
    const m = Math.floor((this.time - h) * 60)
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
  }

  sunElevation() { return this.sunDir.y }
}

class RainSystem {
  constructor(scene) {
    this.count = 5200
    const geo = new THREE.BufferGeometry()
    const pos = new Float32Array(this.count * 3)
    const seed = new Float32Array(this.count)
    for (let i = 0; i < this.count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 46
      pos[i * 3 + 1] = Math.random() * 22
      pos[i * 3 + 2] = (Math.random() - 0.5) * 46
      seed[i] = Math.random()
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1))
    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: { uTime: { value: 0 }, uAmount: { value: 0 }, uCam: { value: new THREE.Vector3() }, uWind: { value: 0.4 } },
      vertexShader: /* glsl */`
        attribute float aSeed;
        uniform float uTime; uniform float uAmount; uniform vec3 uCam; uniform float uWind;
        varying float vAlpha;
        void main() {
          vec3 p = position;
          p.y = mod(p.y - uTime * (12.0 + aSeed * 7.0), 22.0);
          p.x += sin(uTime * 0.5 + aSeed * 30.0) * 0.4 + uWind * p.y;
          p.z += cos(uTime * 0.3 + aSeed * 20.0) * 0.25;
          vec3 world = p + vec3(uCam.x, uCam.y - 12.0, uCam.z);
          vec4 mv = viewMatrix * vec4(world, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = mix(1.0, 2.6, aSeed) * (280.0 / max(1.0, -mv.z));
          vAlpha = uAmount * smoothstep(22.0, 19.0, p.y) * smoothstep(0.0, 2.0, p.y);
        }
      `,
      fragmentShader: /* glsl */`
        varying float vAlpha;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          float a = smoothstep(0.5, 0.0, length(vec2(c.x * 4.0, c.y)));
          gl_FragColor = vec4(0.72, 0.78, 0.82, a * vAlpha * 0.45);
        }
      `
    })
    this.points = new THREE.Points(geo, mat)
    this.points.frustumCulled = false
    this.points.renderOrder = 10
    scene.add(this.points)
    this.mat = mat
    this.entered = false
  }

  update(dt, cameraPos, amount, wind) {
    this.mat.uniforms.uTime.value += dt
    this.mat.uniforms.uAmount.value = amount
    if (cameraPos) this.mat.uniforms.uCam.value.copy(cameraPos)
    this.mat.uniforms.uWind.value = wind
    this.points.visible = amount > 0.02
  }
}
