import * as THREE from 'three'
import { GeoBatch, mulberry32, rand, randInt, choose, clamp, lerp, blobTexture, glowTexture, makeTexture } from './utils.js'
import * as TEX from './textures.js'
import { rollLoot, stack } from './items.js'

const PI = Math.PI
const HALF_PI = Math.PI / 2

function flatTex(t) {
  if (!t) return null
  const c = t.clone()
  c.repeat.set(1, 1)
  c.needsUpdate = true
  return c
}

function std(set, opts = {}) {
  const o = { vertexColors: true, roughness: 0.92, metalness: 0.02, envMapIntensity: 0.38, ...opts }
  if (set) {
    if (set.map) o.map = flatTex(set.map)
    if (set.normalMap) o.normalMap = flatTex(set.normalMap)
    if (set.roughnessMap) o.roughnessMap = flatTex(set.roughnessMap)
  }
  return new THREE.MeshStandardMaterial(o)
}

function localPlace(cx, cz, rotY, lx, lz) {
  const c = Math.cos(rotY), s = Math.sin(rotY)
  return [cx + lx * c + lz * s, cz - lx * s + lz * c]
}

function Bplane(batch, key, w, h, x, y, z, color, opts) {
  return batch.plane(key, w, h, x, y, z, color, opts)
}

const shadowCanvas = (() => {
  let c = null
  return () => {
    if (!c) c = blobTexture(128, 0.05, 0.98)
    return c
  }
})()

export class World {
  constructor(scene, opts = {}) {
    this.scene = scene
    this.quality = opts.quality || 'balanced'
    this.root = new THREE.Group()
    this.root.name = 'city'
    scene.add(this.root)
    this.rng = mulberry32(20261031)
    this.batches = new GeoBatch()
    this.colliders = []
    this.doors = []
    this.containers = []
    this.interactRoots = []
    this.flickerLights = []
    this.streetLamps = []
    this.glows = []
    this.spawnPoints = []
    this.safeZones = []
    this.questPoints = {}
    this.ambientEmitters = []
    this.smoke = []
    this.flames = []
    this.pointLights = []
    this.dust = null
    this.focusRecord = null
    this.doorSfx = null
    this._tmpV = new THREE.Vector3()
    this._ray = new THREE.Raycaster()
    this.makeMaterials()
    this.build()
  }

  makeMaterials() {
    const asphalt = TEX.asphaltTextures()
    const sidewalk = TEX.sidewalkTextures()
    const concrete = TEX.concreteTextures()
    const plaster = TEX.plasterTextures()
    const brick = TEX.brickTextures()
    const wood = TEX.woodTextures()
    const metal = TEX.metalTextures()
    const wallpaper = TEX.wallpaperTextures()
    const tileH = TEX.tileTextures('hospital')
    const tileA = TEX.tileTextures('apartment')
    const carpet = TEX.carpetTextures()
    const dirt = TEX.dirtTextures()

    this.mats = {
      asphalt: std(asphalt, { metalness: 0.04, roughness: 0.96, envMapIntensity: 0.42 }),
      sidewalk: std(sidewalk, { roughness: 0.94, envMapIntensity: 0.32 }),
      concrete: std(concrete, { roughness: 0.94, envMapIntensity: 0.3 }),
      plaster: std(plaster, { roughness: 0.95, envMapIntensity: 0.28 }),
      brick: std(brick, { roughness: 0.96, envMapIntensity: 0.26 }),
      wood: std(wood, { roughness: 0.82, envMapIntensity: 0.3 }),
      metal: std(metal, { metalness: 0.55, roughness: 0.58, envMapIntensity: 0.7 }),
      wallpaper: std(wallpaper, { roughness: 0.97, envMapIntensity: 0.2 }),
      tileH: std(tileH, { roughness: 0.42, metalness: 0.04, envMapIntensity: 0.55 }),
      tileA: std(tileA, { roughness: 0.72, envMapIntensity: 0.35 }),
      carpet: std(carpet, { roughness: 1, envMapIntensity: 0.15 }),
      dirt: std(dirt, { roughness: 1, envMapIntensity: 0.16 }),
      fabric: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.98, metalness: 0, envMapIntensity: 0.18 }),
      plastic: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.52, metalness: 0.05, envMapIntensity: 0.4 }),
      rubber: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, metalness: 0.0, envMapIntensity: 0.1 }),
      paint: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7, metalness: 0.02, envMapIntensity: 0.3, transparent: true, opacity: 0.72 }),
      glass: new THREE.MeshPhysicalMaterial({ vertexColors: true, color: 0xbcc6c4, metalness: 0.35, roughness: 0.12, transparent: true, opacity: 0.34, envMapIntensity: 1.2, depthWrite: false, side: THREE.DoubleSide }),
      windowPane: std({ map: TEX.windowPaneTexture(), normalMap: null, roughnessMap: null }, { roughness: 0.16, metalness: 0.28, envMapIntensity: 1.1, transparent: false }),
      dark: new THREE.MeshStandardMaterial({ vertexColors: true, color: 0xffffff, roughness: 0.9, metalness: 0.1 }),
      emissive: new THREE.MeshBasicMaterial({ vertexColors: true, color: 0xffffff }),
      shadow: new THREE.MeshBasicMaterial({ vertexColors: true, map: makeTexture(shadowCanvas()), transparent: true, opacity: 0.58, depthWrite: false, color: 0xffffff, blending: THREE.NormalBlending }),
      blood: new THREE.MeshStandardMaterial({ vertexColors: true, map: TEX.bloodTexture(1), transparent: true, opacity: 0.88, depthWrite: false, roughness: 0.42, metalness: 0.05, polygonOffset: true, polygonOffsetFactor: -2 }),
      blood2: new THREE.MeshStandardMaterial({ vertexColors: true, map: TEX.bloodTexture(2), transparent: true, opacity: 0.75, depthWrite: false, roughness: 0.5, polygonOffset: true, polygonOffsetFactor: -2 }),
      crack: new THREE.MeshBasicMaterial({ vertexColors: true, map: TEX.crackDecalTexture(), transparent: true, opacity: 0.55, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }),
      decalLeaves: new THREE.MeshStandardMaterial({ vertexColors: true, map: TEX.decalTexture('leaves'), transparent: true, opacity: 0.9, depthWrite: false, roughness: 1, polygonOffset: true, polygonOffsetFactor: -2 }),
      decalTrash: new THREE.MeshStandardMaterial({ vertexColors: true, map: TEX.decalTexture('trash'), transparent: true, opacity: 0.9, depthWrite: false, roughness: 1, polygonOffset: true, polygonOffsetFactor: -2 }),
      decalOil: new THREE.MeshStandardMaterial({ vertexColors: true, map: TEX.decalTexture('oil'), transparent: true, opacity: 0.75, depthWrite: false, roughness: 0.4, polygonOffset: true, polygonOffsetFactor: -2 }),
      puddle: new THREE.MeshStandardMaterial({ map: TEX.puddleTexture(), color: 0x9aa4a0, transparent: true, opacity: 0.55, roughness: 0.06, metalness: 0.55, envMapIntensity: 1.7, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }),
      weeds: new THREE.MeshStandardMaterial({ map: TEX.weedTexture(), transparent: true, alphaTest: 0.32, side: THREE.DoubleSide, vertexColors: true, roughness: 1, metalness: 0, envMapIntensity: 0.2 }),
      ivy: new THREE.MeshStandardMaterial({ map: TEX.ivyTexture(), transparent: true, alphaTest: 0.3, side: THREE.DoubleSide, vertexColors: true, roughness: 1, metalness: 0, envMapIntensity: 0.2 }),
      hazard: new THREE.MeshStandardMaterial({ vertexColors: true, map: TEX.hazardStripeTexture(), roughness: 0.8, metalness: 0.15, envMapIntensity: 0.4 }),
      awning: new THREE.MeshStandardMaterial({ vertexColors: true, map: TEX.awningTexture('#7b3f31', '#cfc3a4'), roughness: 0.94, side: THREE.DoubleSide }),
      awningGreen: new THREE.MeshStandardMaterial({ vertexColors: true, map: TEX.awningTexture('#3d5a4a', '#cfc3a4'), roughness: 0.94, side: THREE.DoubleSide }),
      paper: new THREE.MeshStandardMaterial({ vertexColors: true, map: TEX.paperTexture(), roughness: 1 }),
      lightPool: new THREE.MeshBasicMaterial({ vertexColors: true, map: makeTexture(glowTexture()), transparent: true, opacity: 0.3, depthWrite: false, blending: THREE.AdditiveBlending }),
      glassLit: []
    }

    for (let i = 1; i <= 4; i++) {
      const tex = TEX.litWindowTexture(i)
      const mat = new THREE.MeshBasicMaterial({ map: tex, vertexColors: true, color: new THREE.Color(1.2, 1.02, 0.82), fog: true })
      mat.userData.baseColor = mat.color.clone()
      this.mats.glassLit.push(mat)
    }
    this.litMaterials = this.mats.glassLit
    const B = this.batches
    for (const [key, mat] of Object.entries(this.mats)) {
      if (mat && mat.isMaterial) B.use(key, mat)
    }
    for (let i = 0; i < this.mats.glassLit.length; i++) B.use('lit' + (i + 1), this.mats.glassLit[i])
    this.posters = {
      missing: this.decalMaterial(TEX.posterTexture('missing')),
      quarantine: this.decalMaterial(TEX.posterTexture('quarantine')),
      safe: this.decalMaterial(TEX.posterTexture('help'))
    }
    this.graffitiMats = new Map()
  }

  decalMaterial(map, { opacity = 0.92 } = {}) {
    return new THREE.MeshStandardMaterial({
      map, transparent: true, opacity, depthWrite: false, vertexColors: true,
      roughness: 0.95, metalness: 0, polygonOffset: true, polygonOffsetFactor: -3, side: THREE.DoubleSide
    })
  }

  // ---------------------------------------------------------------- helpers
  addCollider(minX, maxX, minZ, maxZ, y0 = 0, y1 = 6, tag = '') {
    const c = { minX, maxX, minZ, maxZ, y0, y1, tag, enabled: true }
    this.colliders.push(c)
    return c
  }

  addColliderBox(x, z, w, d, y0, y1, tag, rotY = 0) {
    if (rotY) {
      const c = Math.abs(Math.cos(rotY)), s = Math.abs(Math.sin(rotY))
      const ew = w * c + d * s, ed = w * s + d * c
      return this.addCollider(x - ew / 2, x + ew / 2, z - ed / 2, z + ed / 2, y0, y1, tag)
    }
    return this.addCollider(x - w / 2, x + w / 2, z - d / 2, z + d / 2, y0, y1, tag)
  }

  box(key, w, h, d, x, y, z, color, opts = {}) {
    return this.batches.box(key, w, h, d, x, y + h / 2, z, color, opts)
  }

  wallX(z, x1, x2, h, thickness, key, color, { y0 = 0, collide = true, uvScale = 2.2 } = {}) {
    const w = Math.abs(x2 - x1), x = (x1 + x2) / 2
    this.box(key, w, h, thickness, x, y0, z, color, { uvScale })
    if (collide) this.addCollider(Math.min(x1, x2), Math.max(x1, x2), z - thickness / 2, z + thickness / 2, y0, y0 + h, 'wall')
  }

  wallZ(x, z1, z2, h, thickness, key, color, { y0 = 0, collide = true, uvScale = 2.2 } = {}) {
    const d = Math.abs(z2 - z1), z = (z1 + z2) / 2
    this.box(key, thickness, h, d, x, y0, z, color, { uvScale })
    if (collide) this.addCollider(x - thickness / 2, x + thickness / 2, Math.min(z1, z2), Math.max(z1, z2), y0, y0 + h, 'wall')
  }

  wallXGap(z, x1, x2, gapA, gapB, h, thickness, key, color, opts = {}) {
    const lo = Math.min(x1, x2), hi = Math.max(x1, x2)
    const a = clamp(gapA, lo, hi), b = clamp(gapB, lo, hi)
    if (a > lo + 0.01) this.wallX(z, lo, a, h, thickness, key, color, opts)
    if (b < hi - 0.01) this.wallX(z, b, hi, h, thickness, key, color, opts)
    const doorH = opts.doorH ?? 2.35
    this.box(key, b - a, h - doorH, thickness, (a + b) / 2, doorH, z, color, { uvScale: opts.uvScale ?? 2.2 })
  }

  wallZGap(x, z1, z2, gapA, gapB, h, thickness, key, color, opts = {}) {
    const lo = Math.min(z1, z2), hi = Math.max(z1, z2)
    const a = clamp(gapA, lo, hi), b = clamp(gapB, lo, hi)
    if (a > lo + 0.01) this.wallZ(x, lo, a, h, thickness, key, color, opts)
    if (b < hi - 0.01) this.wallZ(x, b, hi, h, thickness, key, color, opts)
    const doorH = opts.doorH ?? 2.35
    this.box(key, thickness, h - doorH, b - a, x, doorH, (a + b) / 2, color, { uvScale: opts.uvScale ?? 2.2 })
  }

  addWindow(x, y, z, rotY, w, h, opts = {}) {
    const c = Math.cos(rotY), s = Math.sin(rotY)
    const P = (lx, ly, lz) => [x + lx * c + lz * s, y + ly, z - lx * s + lz * c]
    const frame = opts.frame ?? '#8f8879'
    const lit = opts.lit ?? false
    const broken = opts.broken ?? false
    const boarded = opts.boarded ?? false
    const [px, py, pz] = P(0, 0, 0.035)
    this.batches.plane(lit ? 'lit' + (opts.litVar || 1) : 'windowPane', w, h, px, py, pz, opts.tint || '#ffffff', { rotY })
    const [fx, fy, fz] = P(0, 0, 0.09)
    this.batches.box('concrete', w + 0.22, 0.1, 0.13, fx, fy + h / 2 + 0.02, fz, frame, { rotY, uvScale: 1.4 })
    this.batches.box('concrete', w + 0.22, 0.1, 0.13, fx, fy - h / 2 - 0.02, fz, frame, { rotY, uvScale: 1.4 })
    const [sx, sy, sz] = P(-w / 2 - 0.055, 0, 0.09)
    this.batches.box('concrete', 0.11, h, 0.13, sx, sy, sz, frame, { rotY, uvScale: 1.4 })
    const [sx2, sy2, sz2] = P(w / 2 + 0.055, 0, 0.09)
    this.batches.box('concrete', 0.11, h, 0.13, sx2, sy2, sz2, frame, { rotY, uvScale: 1.4 })
    const [mx, my, mz] = P(0, 0, 0.1)
    this.batches.box('concrete', w, 0.055, 0.09, mx, my, mz, frame, { rotY })
    this.batches.box('concrete', 0.05, h, 0.09, mx, my, mz, frame, { rotY })
    if (opts.sill !== false) {
      const [lx, ly, lz] = P(0, -h / 2 - 0.11, 0.17)
      this.batches.box('concrete', w + 0.4, 0.12, 0.28, lx, ly, lz, opts.sillColor || '#a79c88', { rotY, uvScale: 1.2 })
    }
    if (boarded) {
      for (let i = 0; i < 3; i++) {
        const [bx, by, bz] = P(0, -h / 2 + h * (0.25 + i * 0.25), 0.17)
        this.batches.box('wood', w + 0.6, 0.22, 0.07, bx, by, bz, i === 1 ? '#6e5940' : '#7d674b', { rotY, rotZ: (i - 1) * 0.06, uvScale: 1.3 })
      }
    } else if (broken) {
      const [bx, by, bz] = P(0, 0, 0.18)
      this.batches.plane('crack', w, h, bx, by, bz, '#ffffff', { rotY })
    }
    if (opts.shutter) {
      const [qx, qy, qz] = P(-w / 2 - 0.24, 0, 0.14)
      this.batches.box('wood', w * 0.22, h + 0.12, 0.06, qx, qy, qz, opts.shutterColor || '#6d6250', { rotY, uvScale: 1.1 })
      const [qx2, qy2, qz2] = P(w / 2 + 0.24, 0, 0.14)
      this.batches.box('wood', w * 0.22, h + 0.12, 0.06, qx2, qy2, qz2, opts.shutterColor || '#6d6250', { rotY, uvScale: 1.1 })
    }
  }

  addWindowFloor(x, y, z, rotY, w, h, floorSeed) {
    const r = mulberry32(floorSeed)
    const lit = r() < 0.31
    const broken = r() < 0.22
    const boarded = !broken && r() < 0.14
    this.addWindow(x, y, z, rotY, w, h, {
      lit, litVar: 1 + Math.floor(r() * 4), broken, boarded,
      shutter: r() < 0.24,
      shutterColor: r() < 0.5 ? '#6d6250' : '#4e5f52',
      frame: r() < 0.3 ? '#b4a58e' : '#8d8678'
    })
  }

  addWindowGrid(x1, x2, frontZ, facing, baseY, floors, cols, seed) {
    const r = mulberry32(seed)
    const rotY = facing > 0 ? 0 : PI
    const width = Math.abs(x2 - x1)
    const margin = Math.min(1.5, width * 0.12)
    const step = (width - margin * 2) / Math.max(1, cols - 1)
    for (let f = 0; f < floors; f++) {
      for (let c = 0; c < cols; c++) {
        const x = Math.min(x1, x2) + margin + step * c
        const y = baseY + f * 3.0
        this.addWindowFloor(x, y, frontZ, rotY, 1.28, 1.72, seed + f * 131 + c * 17)
      }
    }
  }

  addSign(text, x, y, z, rotY, w, h, opts = {}) {
    const tex = TEX.signTexture(text, {
      bg: opts.bg ?? '#1b1c17', fg: opts.fg ?? '#e8e2d2', accent: opts.accent ?? '#c94f2d',
      sub: opts.sub ?? '', w: opts.texW ?? 512, h: opts.texH ?? 256, border: opts.border ?? true,
      size: opts.size ?? 96, font: opts.font ?? 'Barlow Condensed', weight: opts.weight ?? 600,
      icon: opts.icon ?? '', vertical: opts.vertical ?? false
    })
    const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.72, metalness: 0.08, envMapIntensity: 0.35, emissiveMap: tex, emissive: new THREE.Color(opts.glow ?? '#2a1a0c'), emissiveIntensity: opts.glowIntensity ?? 0.16, transparent: false })
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat)
    mesh.position.set(x, y, z)
    mesh.rotation.y = rotY
    mesh.renderOrder = 2
    this.root.add(mesh)
    if (opts.backing !== false) {
      this.batches.box('metal', w + 0.12, h + 0.12, 0.06, x - Math.sin(rotY) * 0.04, y, z - Math.cos(rotY) * 0.04, '#2a2a26', { rotY })
    }
    return mesh
  }

  addPoster(kind, x, y, z, rotY, w = 1.05, h = 1.48) {
    const mat = this.posters[kind] || this.posters.missing
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat)
    mesh.position.set(x, y, z)
    mesh.rotation.y = rotY
    mesh.renderOrder = 3
    this.root.add(mesh)
    return mesh
  }

  addGraffiti(text, x, y, z, rotY, w = 3.2, h = 1.6, color = '#a3442f', seed = 1) {
    const key = text + color + seed
    let mat = this.graffitiMats.get(key)
    if (!mat) {
      mat = this.decalMaterial(TEX.graffitiTexture(text, color, seed), { opacity: 0.82 })
      this.graffitiMats.set(key, mat)
    }
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat)
    mesh.position.set(x, y, z)
    mesh.rotation.y = rotY
    mesh.renderOrder = 3
    this.root.add(mesh)
    return mesh
  }

  addGroundDecal(key, x, z, size, rotY = 0, y = 0.025, tint = '#ffffff') {
    if (this.batches) {
      this.batches.plane(key, size, size, x, y, z, tint, { rotX: -HALF_PI, rotZ: rotY, uvScale: 0 })
      return
    }
    // runtime decals (corpses spawned after the city has been batched)
    const src = this.mats[key]
    if (!src) return
    const mat = src.clone()
    mat.vertexColors = false
    mat.color = new THREE.Color(tint)
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat)
    mesh.rotation.set(-HALF_PI, 0, rotY)
    mesh.position.set(x, y, z)
    mesh.renderOrder = 1
    this.root.add(mesh)
  }

  addBlobShadow(x, z, w, d, rotY = 0, opacity = 1) {
    this.batches.plane('shadow', w, d, x, 0.012, z, new THREE.Color(opacity, opacity, opacity), { rotX: -HALF_PI, rotY, uvScale: 0 })
  }

  addGlow(x, y, z, color, size = 1.4, opacity = 0.5) {
    if (!this._glowMap) this._glowMap = makeTexture(glowTexture())
    const mat = new THREE.SpriteMaterial({ map: this._glowMap, color: new THREE.Color(color), transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false, fog: true })
    const sp = new THREE.Sprite(mat)
    sp.position.set(x, y, z)
    sp.scale.set(size, size, 1)
    this.root.add(sp)
    this.glows.push({ sprite: sp, base: opacity, seed: this.rng() * 100 })
    return sp
  }

  build() {
    this.buildGround()
    this.buildHeroBuildings()
    this.buildFillerBuildings()
    this.buildBackdrop()
    this.buildStreetProps()
    this.buildAtmosphere()
    this.buildDecals()
    // finalise merged city geometry
    this.batches.build(this.root, { shadows: false })
    this.batches = null
    this.root.traverse(o => { if (o.isMesh) { o.matrixAutoUpdate = false; o.updateMatrix() } })
  }

  // ---------------------------------------------------------------- ground
  buildGround() {
    const B = this.batches
    B.plane('dirt', 260, 260, 0, -0.06, 0, '#c9c0ad', { rotX: -HALF_PI, uvScale: 9 })
    // main avenue
    B.plane('asphalt', 184, 11, 0, 0.008, 0, '#bcbcb8', { rotX: -HALF_PI, uvScale: 4.2 })
    // cross street
    B.plane('asphalt', 12, 94, 50, 0.009, -12, '#b6b6b3', { rotX: -HALF_PI, uvScale: 4.2 })
    // sidewalks
    B.plane('sidewalk', 184, 3.5, 0, 0.02, -7.25, '#d4cbb8', { rotX: -HALF_PI, uvScale: 2.3 })
    B.plane('sidewalk', 184, 3.5, 0, 0.02, 7.25, '#cdc4b2', { rotX: -HALF_PI, uvScale: 2.3 })
    // cross street sidewalks
    B.plane('sidewalk', 3.2, 94, 45.5, 0.02, -12, '#cdc4b2', { rotX: -HALF_PI, uvScale: 2.3 })
    B.plane('sidewalk', 3.2, 94, 54.5, 0.02, -12, '#cdc4b2', { rotX: -HALF_PI, uvScale: 2.3 })
    // curbs with worn breaks
    for (const side of [-1, 1]) {
      const z = side * 5.55
      for (let i = 0; i < 22; i++) {
        if (this.rng() < 0.08) continue
        const x = -90 + i * 8.3
        this.box('concrete', 8.1, 0.17, 0.34, x, 0, z, '#9b9688', { uvScale: 1.2 })
      }
    }
    // cross-street curbs
    for (const side of [-1, 1]) {
      const x = 50 + side * 6.1
      for (let i = 0; i < 10; i++) {
        const z = -56 + i * 8.2
        this.box('concrete', 0.34, 0.17, 8.0, x, 0, z, '#948f82', { uvScale: 1.2 })
      }
    }
    // lane paint, worn and interrupted
    for (let x = -88; x < 88; x += 7) {
      if (this.rng() < 0.22) continue
      B.plane('paint', 3.1, 0.12, x, 0.028, 0, '#d6c99f', { rotX: -HALF_PI })
    }
    for (let z = -52; z < 28; z += 7) {
      if (this.rng() < 0.2) continue
      B.plane('paint', 0.12, 3.1, 50, 0.028, z, '#d6c99f', { rotX: -HALF_PI })
    }
    // crosswalk
    for (let i = 0; i < 7; i++) {
      B.plane('paint', 0.5, 3.6, 5.6 + i * 0.95, 0.029, 0, '#d2c8ae', { rotX: -HALF_PI })
    }
    // alley and lot floors
    B.plane('concrete', 6.2, 16, -8.9, 0.015, -17, '#b5ae9e', { rotX: -HALF_PI, uvScale: 2.2 })
    B.plane('concrete', 4.8, 20, 10.1, 0.015, -19, '#aea795', { rotX: -HALF_PI, uvScale: 2.2 })
    B.plane('dirt', 16, 16, 63, 0.01, 16, '#b2a68f', { rotX: -HALF_PI, uvScale: 4 })
    B.plane('concrete', 8.2, 18, 21, 0.012, 16, '#aaa492', { rotX: -HALF_PI, uvScale: 2.4 })
    B.plane('dirt', 15, 16, -18, 0.011, 32, '#b6ab95', { rotX: -HALF_PI, uvScale: 5 })

    // manholes and drains
    for (const [x, z] of [[-12, 2.3], [22.5, -1.4], [41, 3.1], [-37, -3.4], [50, -24]]) {
      B.cylinder('metal', 0.46, 0.46, 0.04, 16, x, 0.03, z, '#4b4a44', { open: false })
      B.cylinder('dark', 0.31, 0.31, 0.045, 12, x, 0.032, z, '#1c1c1a')
    }
    for (let i = 0; i < 9; i++) {
      const x = -78 + i * 19
      B.plane('dark', 0.72, 0.3, x, 0.033, 5.1, '#0c0d0b', { rotX: -HALF_PI })
    }

    // puddles, only on flat asphalt/sidewalk
    const puddles = [[-2, 3.1, 3.6], [17, -3.9, 2.7], [-26, -2, 4.3], [36, 3.8, 2.2], [7.4, -6.9, 2.1], [-45, 2.8, 3.1], [50, -6, 3.8], [63, 12, 2.4]]
    for (const [x, z, s] of puddles) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(s, s * 0.72), this.mats.puddle)
      m.rotation.x = -HALF_PI
      m.rotation.z = this.rng() * PI
      m.position.set(x, 0.035, z)
      m.renderOrder = 1
      this.root.add(m)
    }

    // weeds, dead grass along curbs and walls
    const weedSpots = []
    for (let i = 0; i < 40; i++) weedSpots.push([rand(this.rng, -80, 80), rand(this.rng, 0, 1) < 0.5 ? -5.35 : 5.35])
    for (let i = 0; i < 14; i++) weedSpots.push([rand(this.rng, -84, 84), -8.65])
    for (const [x, z] of weedSpots) {
      const w = rand(this.rng, 0.45, 1.1)
      const tint = choose(this.rng, ['#ffffff', '#c8c6a0', '#b7b58c', '#d8d4b4'])
      B.plane('weeds', w, w * 0.65, x, 0.28, z, tint, { rotY: this.rng() * PI, uvScale: 0 })
      B.plane('weeds', w, w * 0.65, x, 0.28, z, tint, { rotY: this.rng() * PI + HALF_PI, uvScale: 0 })
    }

    // world bounds
    this.addCollider(-96, -92, -60, 60, 0, 20, 'bounds')
    this.addCollider(92, 96, -60, 60, 0, 20, 'bounds')
    this.addCollider(-96, 96, -62, -58, 0, 20, 'bounds')
    this.addCollider(-96, 96, 58, 62, 0, 20, 'bounds')
  }

  // ---------------------------------------------------------------- shells
  buildShell({ cx, cz, w, d, h, facing = 1, doorX, doorW = 1.25, ceiling = 3.08, floor = 'wood', wall = 'wallpaper', wallColor = '#b6ac96', frontKey = 'plaster', frontColor = '#b4a892', backKey = 'plaster', backColor = '#a79b87', thickness = 0.34, doorLabel = 'Door', doorKind = 'wood', doorRotY = null, ceilColor = '#b0a89a', roofColor = '#746c5c', doorHeight = 2.32 }) {
    const minX = cx - w / 2, maxX = cx + w / 2
    const minZ = cz - d / 2, maxZ = cz + d / 2
    const frontZ = facing > 0 ? maxZ : minZ
    const backZ = facing > 0 ? minZ : maxZ
    const innerFrontZ = frontZ - facing * thickness / 2
    const innerBackZ = backZ + facing * thickness / 2
    const leftX = minX + thickness / 2, rightX = maxX - thickness / 2
    const rotY = facing > 0 ? 0 : PI
    const intColor = wallColor

    // front wall with entrance
    const gx1 = doorX - doorW / 2, gx2 = doorX + doorW / 2
    this.wallX(frontZ - facing * thickness / 2, minX, gx1, h, thickness, frontKey, frontColor, { doorH: doorHeight })
    this.wallX(frontZ - facing * thickness / 2, gx2, maxX, h, thickness, frontKey, frontColor)
    this.box(frontKey, doorW, h - doorHeight, thickness, doorX, doorHeight, frontZ - facing * thickness / 2, frontColor, { uvScale: 2.2 })
    this.addCollider(gx1, gx2, frontZ - facing * thickness / 2 - thickness / 2, frontZ - facing * thickness / 2 + thickness / 2, doorHeight, h, 'wall')
    // door frame
    this.box('concrete', 0.14, 2.46, thickness + 0.12, gx1 - 0.02, 0, frontZ - facing * thickness / 2, '#a99b85')
    this.box('concrete', 0.14, 2.46, thickness + 0.12, gx2 + 0.02, 0, frontZ - facing * thickness / 2, '#a99b85')
    this.box('concrete', doorW + 0.18, 0.14, thickness + 0.12, doorX, doorHeight, frontZ - facing * thickness / 2, '#a99b85')

    // side and back walls
    this.wallZ(leftX, minZ + thickness / 2, maxZ - thickness / 2, h, thickness, frontKey, frontColor)
    this.wallZ(rightX, minZ + thickness / 2, maxZ - thickness / 2, h, thickness, frontKey, frontColor)
    this.wallX(backZ + facing * thickness / 2, minX, maxX, h, thickness, backKey, backColor)

    // interior floor & ceiling
    Bplane(this.batches, floor, w - thickness * 2, d - thickness * 2, cx, 0.016, cz, intColor, { rotX: -HALF_PI, uvScale: 1.8 })
    Bplane(this.batches, 'plaster', w - thickness * 2, d - thickness * 2, cx, ceiling, cz, ceilColor, { rotX: HALF_PI, uvScale: 2.5 })
    // ceiling beams
    for (let i = -1; i <= 1; i++) {
      const zz = cz + i * (d * 0.27)
      this.box('wood', w - 0.7, 0.13, 0.16, cx, ceiling - 0.1, zz, '#5c4d3b', { uvScale: 2 })
    }
    // baseboards
    this.box('wood', w - 0.7, 0.16, 0.06, cx, 0, frontZ - facing * 0.19, '#4a3c2d', { uvScale: 1.4 })
    this.box('wood', w - 0.7, 0.16, 0.06, cx, 0, backZ + facing * 0.19, '#4a3c2d', { uvScale: 1.4 })
    this.box('wood', 0.06, 0.16, d - 0.7, leftX + 0.16, 0, cz, '#4a3c2d', { uvScale: 1.4 })
    this.box('wood', 0.06, 0.16, d - 0.7, rightX - 0.16, 0, cz, '#4a3c2d', { uvScale: 1.4 })

    // roof cap and parapet
    this.box('dark', w, 0.22, d, cx, h - 0.1, cz, '#3b3730')
    for (const side of [-1, 1]) {
      this.box(frontKey, w, 0.52, 0.22, cx, h, cz + side * (d / 2 - 0.1), '#857b69')
      this.box(frontKey, 0.22, 0.52, d, cx + side * (w / 2 - 0.1), h, cz, '#857b69')
    }
    // roof clutter silhouettes
    this.addRoofDetails(cx, cz, w, d, h, this.rng)

    // front door
    this.createDoor({
      x: doorX, z: frontZ - facing * 0.16,
      rotY: doorRotY ?? rotY, width: doorW, height: doorHeight, kind: doorKind, label: doorLabel,
      opensIn: facing > 0 ? 1 : -1
    })

    // door-side light fixtures
    this.box('metal', 0.1, 0.16, 0.16, gx1 - 0.45, 2.5, frontZ + facing * 0.1, '#3a3a34')
    this.addGlow(gx1 - 0.45, 2.45, frontZ + facing * 0.24, '#ffb56b', 0.8, 0.32)

    // interior wall lights / fixtures
    this.addRoomLight(cx + w * 0.18, ceiling - 0.16, cz + facing * d * 0.18, '#ffcf96', 12, 7.5, 'bulb', 0.55)
    return { minX, maxX, minZ, maxZ, frontZ, backZ, innerFrontZ, innerBackZ, leftX, rightX, ceiling, rotY, intColor }
  }

  wallXWithGaps(z, x1, x2, h, thickness, key, color, gaps, opts = {}) {
    const lo = Math.min(x1, x2), hi = Math.max(x1, x2)
    const sorted = gaps.map(g => [Math.max(lo, Math.min(g[0], g[1])), Math.min(hi, Math.max(g[0], g[1]))]).sort((a, b) => a[0] - b[0])
    let cursor = lo
    for (const [a, b] of sorted) {
      if (a > cursor + 0.01) this.wallX(z, cursor, a, h, thickness, key, color, opts)
      const dh = opts.doorH ?? 2.32
      this.box(key, b - a, h - dh, thickness, (a + b) / 2, dh, z, color, { uvScale: opts.uvScale ?? 2.2 })
      cursor = b
    }
    if (cursor < hi - 0.01) this.wallX(z, cursor, hi, h, thickness, key, color, opts)
  }

  wallZWithGaps(x, z1, z2, h, thickness, key, color, gaps, opts = {}) {
    const lo = Math.min(z1, z2), hi = Math.max(z1, z2)
    const sorted = gaps.map(g => [Math.max(lo, Math.min(g[0], g[1])), Math.min(hi, Math.max(g[0], g[1]))]).sort((a, b) => a[0] - b[0])
    let cursor = lo
    for (const [a, b] of sorted) {
      if (a > cursor + 0.01) this.wallZ(x, cursor, a, h, thickness, key, color, opts)
      const dh = opts.doorH ?? 2.32
      this.box(key, thickness, h - dh, b - a, x, dh, (a + b) / 2, color, { uvScale: opts.uvScale ?? 2.2 })
      cursor = b
    }
    if (cursor < hi - 0.01) this.wallZ(x, cursor, hi, h, thickness, key, color, opts)
  }

  createDoor({ x, z, rotY = 0, width = 1.25, height = 2.28, kind = 'wood', label = 'Door', opensIn = 1, hingeLeft = true, locked = false }) {
    const group = new THREE.Group()
    const hingeOffset = (hingeLeft ? -1 : 1) * width / 2
    const hx = x + Math.cos(rotY) * hingeOffset
    const hz = z - Math.sin(rotY) * hingeOffset
    group.position.set(hx, 0, hz)
    group.rotation.y = rotY
    this.root.add(group)

    const base = kind === 'metal'
      ? this.mats.metal.clone()
      : kind === 'glass'
        ? new THREE.MeshPhysicalMaterial({ color: 0x83979a, metalness: 0.4, roughness: 0.1, transparent: true, opacity: 0.38, envMapIntensity: 1.2, vertexColors: true })
        : this.mats.wood.clone()
    base.vertexColors = true
    const B = new GeoBatch()
    B.use('m', base)
    const w = width
    const panelX = (hingeLeft ? 1 : -1) * w / 2
    const panelColor = kind === 'metal' ? '#6f746e' : kind === 'glass' ? '#8ea1a2' : '#6b543c'
    if (kind === 'glass') {
      B.box('m', w, height, 0.06, panelX, height / 2, 0, '#8ea1a2')
      B.box('m', w, 0.16, 0.11, panelX, height - 0.08, 0, '#4d514b')
      B.box('m', w, 0.16, 0.11, panelX, 0.1, 0, '#4d514b')
      B.box('m', 0.1, height, 0.11, panelX - w / 2 + 0.05, height / 2, 0, '#4d514b')
      B.box('m', 0.1, height, 0.11, panelX + w / 2 - 0.05, height / 2, 0, '#4d514b')
    } else {
      B.box('m', w, height, 0.075, panelX, height / 2, 0, panelColor, { uvScale: 1.4 })
      B.box('m', w * 0.62, height * 0.28, 0.02, panelX, height * 0.72, 0.048, panelColor, { uvScale: 1.2 })
      B.box('m', w * 0.62, height * 0.28, 0.02, panelX, height * 0.32, 0.048, panelColor, { uvScale: 1.2 })
      B.box('m', 0.06, height, 0.085, panelX - w / 2 + 0.04, height / 2, 0.005, '#4b3c2c')
      B.box('m', 0.06, height, 0.085, panelX + w / 2 - 0.04, height / 2, 0.005, '#4b3c2c')
    }
    if (kind === 'metal') {
      B.box('m', 0.06, 0.36, 0.16, panelX + w * 0.36, 1.05, 0.09, '#272925')
    } else {
      B.cylinder('m', 0.035, 0.035, 0.24, 8, panelX + w * 0.36, 1.02, 0.09, '#b3a275', { rotX: HALF_PI })
    }
    B.box('m', 0.18, 0.12, 0.02, panelX, height * 0.82, 0.06, '#c2b28a')
    B.build(group, { shadows: false })

    const rec = { type: 'door', door: null, object: group, label, action: locked ? 'LOCKED' : 'OPEN', locked }
    group.traverse(o => { if (o.isMesh) { o.userData.interact = rec; o.castShadow = false } })

    const door = {
      group, baseAngle: rotY, angle: 0, target: 0, open: false, locked, rec, label,
      width, height, rotY, hingeSign: hingeLeft ? 1 : -1, opensIn, kind,
      collider: this.addColliderBox(x, z, Math.abs(Math.cos(rotY)) > 0.5 ? width : 0.18, Math.abs(Math.cos(rotY)) > 0.5 ? 0.18 : width, 0, height, 'door')
    }
    door.collider.door = door
    rec.door = door
    this.doors.push(door)
    this.interactRoots.push(group)
    return door
  }

  addRoomLight(x, y, z, color, intensity = 12, distance = 8, type = 'bulb', flicker = 0) {
    const light = new THREE.PointLight(new THREE.Color(color), intensity, distance, 2)
    light.position.set(x, y, z)
    this.scene.add(light)
    this.pointLights.push(light)
    if (type === 'tube') {
      this.box('metal', 1.2, 0.08, 0.16, x, y - 0.04, z, '#55574f')
      this.box('emissive', 1.1, 0.05, 0.1, x, y - 0.1, z, color)
    } else {
      this.box('metal', 0.3, 0.06, 0.3, x, y + 0.08, z, '#3d3c35')
      this.batches.cylinder('emissive', 0.06, 0.09, 0.14, 10, x, y, z, color)
    }
    this.addGlow(x, y, z, color, type === 'tube' ? 1.8 : 1.15, 0.36)
    this.batches.plane('lightPool', 4.2, 4.2, x, 0.03, z, color, { rotX: -HALF_PI })
    if (flicker) this.flickerLights.push({ light, base: intensity, seed: this.rng() * 100, flicker, tube: type === 'tube' })
    return light
  }

  addRoofDetails(cx, cz, w, d, h, rng) {
    // water tank
    if (rng() < 0.55) {
      const x = cx + (rng() - 0.5) * w * 0.5, z = cz + (rng() - 0.5) * d * 0.5
      this.batches.cylinder('metal', 0.62, 0.62, 1.25, 12, x, h + 0.65, z, '#56574f')
      this.batches.cylinder('metal', 0.66, 0.66, 0.08, 12, x, h + 1.28, z, '#3f403a')
      for (let i = 0; i < 4; i++) this.box('metal', 0.08, 0.55, 0.08, x + Math.cos(i * HALF_PI) * 0.4, h + 0.2, z + Math.sin(i * HALF_PI) * 0.4, '#3b3c36')
    }
    // antenna
    if (rng() < 0.6) {
      const x = cx + (rng() - 0.5) * w * 0.7, z = cz + (rng() - 0.5) * d * 0.7
      this.batches.cylinder('metal', 0.025, 0.045, 2.6, 5, x, h + 1.3, z, '#5b5a51')
      for (let i = 0; i < 3; i++) this.box('metal', 0.7, 0.02, 0.02, x, h + 1.4 + i * 0.35, z, '#5b5a51', { rotY: rng() * PI })
    }
    // AC unit
    if (rng() < 0.6) {
      const x = cx + (rng() - 0.5) * w * 0.5, z = cz + (rng() - 0.5) * d * 0.5
      this.box('metal', 0.85, 0.55, 0.6, x, h + 0.28, z, '#6e6f67')
      this.batches.cylinder('dark', 0.2, 0.2, 0.02, 12, x + 0.42, h + 0.55, z, '#22231f', { rotZ: HALF_PI })
    }
    // satellite dish
    if (rng() < 0.35) {
      const x = cx + (rng() - 0.5) * w * 0.6, z = cz + (rng() - 0.5) * d * 0.6
      this.batches.cylinder('metal', 0.03, 0.03, 0.8, 5, x, h + 0.4, z, '#5b5a51')
      const dish = new THREE.Mesh(new THREE.SphereGeometry(0.42, 10, 6, 0, PI * 2, 0, 0.9), new THREE.MeshStandardMaterial({ color: 0xb8b5a8, roughness: 0.7, metalness: 0.3, side: THREE.DoubleSide }))
      dish.position.set(x, h + 0.85, z)
      dish.rotation.set(-0.65, rng() * PI, 0.2)
      this.root.add(dish)
    }
  }

  // ---------------------------------------------------------------- containers
  containerMaterial(kind = 'wood') {
    const base = kind === 'metal' ? this.mats.metal : kind === 'appliance' ? this.mats.plastic : this.mats.wood
    const mat = base.clone()
    mat.vertexColors = true
    mat.emissive = new THREE.Color(0x000000)
    mat.emissiveIntensity = 0
    return mat
  }

  addContainer({ type, name, x, z, y = 0.018, rotY = 0, table = null, items = null, quest = null, collide = true, label = null, action = 'SEARCH' }) {
    const group = new THREE.Group()
    group.position.set(x, y, z)
    group.rotation.y = rotY
    this.root.add(group)
    const kind = ['fridge', 'washer'].includes(type) ? 'appliance' : ['med_cabinet', 'locker', 'toolbox', 'register', 'shelf'].includes(type) ? 'metal' : type === 'corpse' ? 'fabric' : 'wood'
    const mat = this.containerMaterial(kind)
    const B = new GeoBatch()
    B.use('m', mat)
    let w = 1, d = 0.5

    if (type === 'dresser') {
      w = 1.02; d = 0.5
      B.box('m', w, 0.94, d, 0, 0.47, 0, '#7a5f40', { uvScale: 1.1 })
      for (let i = 0; i < 3; i++) {
        B.box('m', w - 0.12, 0.23, 0.035, 0, 0.21 + i * 0.28, d / 2 + 0.015, i === 1 ? '#86694a' : '#7f6345', { uvScale: 0.9 })
        B.cylinder('m', 0.022, 0.022, 0.16, 6, 0, 0.21 + i * 0.28, d / 2 + 0.06, '#b0a077', { rotZ: HALF_PI })
      }
      B.box('m', w - 0.1, 0.035, d - 0.08, 0, 0.955, 0, '#6b5237')
      B.cylinder('m', 0.05, 0.06, 0.22, 8, 0.3, 1.05, 0.04, '#9aa982')
      B.plane('m', 0.3, 0.4, -0.25, 0.97, 0.12, '#c6bda7', { rotX: -HALF_PI })
    } else if (type === 'med_cabinet') {
      w = 0.74; d = 0.28
      B.box('m', w, 0.92, d, 0, 0.48, 0, '#8c938c', { uvScale: 0.9 })
      B.box('m', w - 0.08, 0.36, 0.02, 0, 0.68, d / 2 + 0.012, '#9fa8a0', { uvScale: 0.8 })
      B.box('m', w - 0.08, 0.3, 0.02, 0, 0.3, d / 2 + 0.012, '#9fa8a0', { uvScale: 0.8 })
      B.box('m', 0.03, 0.16, 0.04, 0.18, 0.68, d / 2 + 0.035, '#c6c8bc')
      B.box('m', 0.03, 0.16, 0.04, 0.18, 0.3, d / 2 + 0.035, '#c6c8bc')
      B.box('m', 0.26, 0.05, 0.015, 0, 0.46, d / 2 + 0.03, '#b94332')
      B.box('m', 0.08, 0.22, 0.015, 0, 0.46, d / 2 + 0.031, '#b94332')
    } else if (type === 'fridge') {
      w = 0.8; d = 0.7
      B.box('m', w, 1.82, d, 0, 0.91, 0, '#b7b6a8', { uvScale: 1.2 })
      B.box('m', w - 0.04, 0.62, 0.025, 0, 1.48, d / 2 + 0.015, '#c2c1b3')
      B.box('m', w - 0.04, 0.95, 0.025, 0, 0.6, d / 2 + 0.015, '#b0afa1')
      B.box('m', 0.035, 0.5, 0.07, w / 2 - 0.12, 1.48, d / 2 + 0.07, '#8d8c81')
      B.box('m', 0.035, 0.6, 0.07, w / 2 - 0.12, 0.62, d / 2 + 0.07, '#8d8c81')
      B.box('m', 0.2, 0.1, 0.01, -0.15, 1.15, d / 2 + 0.03, '#8f967d')
      for (let i = 0; i < 7; i++) B.box('m', 0.08 + this.rng() * 0.15, 0.02, 0.005, -0.2 + this.rng() * 0.4, 0.35 + this.rng() * 1.1, d / 2 + 0.032, '#6e5b45')
    } else if (type === 'shelf') {
      w = 1.72; d = 0.48
      B.box('m', 0.06, 1.86, d, -w / 2 + 0.03, 0.93, 0, '#6f7169')
      B.box('m', 0.06, 1.86, d, w / 2 - 0.03, 0.93, 0, '#6f7169')
      for (let i = 0; i < 4; i++) {
        B.box('m', w, 0.05, d, 0, 0.26 + i * 0.52, 0, '#7f8178')
        // item boxes on shelves
        if (i < 3) {
          for (let j = 0; j < 4; j++) {
            const iw = 0.14 + this.rng() * 0.18, ih = 0.12 + this.rng() * 0.15
            B.box('m', iw, ih, 0.16 + this.rng() * 0.1, -w / 2 + 0.25 + j * 0.37, 0.3 + i * 0.52 + ih / 2, 0.02, choose(this.rng, ['#b8ad91', '#8e9d8c', '#a47b5a', '#c2b6a0']))
          }
        }
      }
      B.box('m', w - 0.1, 0.08, d - 0.04, 0, 2.0, 0, '#66685f')
    } else if (type === 'crate') {
      w = 0.95; d = 0.64
      B.box('m', w, 0.52, d, 0, 0.28, 0, '#7c5c3c', { uvScale: 0.8 })
      for (let i = 0; i < 5; i++) B.box('m', w + 0.04, 0.07, 0.03, 0, 0.08 + i * 0.1, d / 2 + 0.01, i % 2 ? '#6b4e33' : '#8a6844')
      B.box('m', w - 0.06, 0.05, d - 0.06, 0, 0.55, 0, '#8e6e49')
      B.box('m', 0.16, 0.24, 0.025, 0.2, 0.28, d / 2 + 0.025, '#d0b787')
    } else if (type === 'locker') {
      w = 0.56; d = 0.5
      B.box('m', w, 1.88, d, 0, 0.94, 0, '#5e665f', { uvScale: 1 })
      B.box('m', w - 0.04, 1.75, 0.03, 0, 0.98, d / 2 + 0.015, '#69726a')
      for (let i = 0; i < 4; i++) B.box('m', w - 0.14, 0.02, 0.01, 0, 1.62 - i * 0.06, d / 2 + 0.035, '#333a35')
      B.box('m', 0.04, 0.17, 0.05, 0.16, 1.0, d / 2 + 0.04, '#b5b4a6')
      B.box('m', 0.18, 0.05, 0.01, 0, 1.7, d / 2 + 0.04, '#a68c5f')
    } else if (type === 'toolbox') {
      w = 0.56; d = 0.34
      B.box('m', w, 0.27, d, 0, 0.135, 0, '#8a3c2b', { uvScale: 0.7 })
      B.box('m', w + 0.04, 0.06, d + 0.04, 0, 0.31, 0, '#792f22')
      B.box('m', 0.16, 0.05, 0.04, 0, 0.35, 0, '#3e3b33')
      B.box('m', 0.03, 0.08, 0.03, 0.2, 0.27, d / 2 + 0.02, '#3e3b33')
    } else if (type === 'register') {
      w = 0.48; d = 0.42
      B.box('m', w, 0.24, d, 0, 0.12, 0, '#4f5049')
      B.box('m', 0.34, 0.18, 0.18, 0, 0.33, -0.02, '#70756f')
      B.box('m', 0.24, 0.08, 0.02, 0, 0.36, 0.08, '#232b23')
      for (let i = 0; i < 5; i++) B.box('m', 0.055, 0.03, 0.03, -0.16 + i * 0.08, 0.25, 0.14, '#c2b99d')
    } else if (type === 'suitcase') {
      w = 0.7; d = 0.44
      B.box('m', w, 0.16, d, 0, 0.08, 0, '#584d3c')
      B.box('m', w - 0.08, 0.3, d - 0.05, 0, 0.28, 0, '#655742')
      B.box('m', 0.2, 0.05, 0.05, 0, 0.46, 0, '#2f2b23')
      for (let i = 0; i < 2; i++) B.box('m', 0.06, 0.06, 0.02, -0.18 + i * 0.36, 0.27, d / 2 + 0.01, '#a8916d')
    } else if (type === 'corpse') {
      w = 0.62; d = 1.72
      const skin = '#8a927d', shirt = choose(this.rng, ['#5b5646', '#6b4e3f', '#4a5554'])
      B.box('m', 0.48, 0.24, 0.72, 0, 0.16, 0.18, shirt, { uvScale: 0.8 })
      B.box('m', 0.27, 0.25, 0.27, 0.02, 0.18, -0.32, skin)
      B.box('m', 0.38, 0.22, 0.48, 0, 0.14, 0.78, '#4e4d44')
      B.box('m', 0.15, 0.14, 0.6, -0.34, 0.1, 0.16, shirt, { rotZ: 0.18 })
      B.box('m', 0.15, 0.14, 0.58, 0.36, 0.12, 0.08, shirt, { rotZ: -0.3, rotY: 0.5 })
      B.box('m', 0.14, 0.13, 0.72, -0.16, 0.09, 1.02, '#4e4d44', { rotY: 0.12 })
      B.box('m', 0.14, 0.13, 0.66, 0.18, 0.09, 0.95, '#4e4d44', { rotY: -0.2 })
      B.box('m', 0.21, 0.08, 0.04, 0.02, 0.2, -0.46, '#3f4339')
      this.addGroundDecal('blood', x, z, 2.2, rotY + 0.4, 0.028)
    } else {
      // kitchen cabinet
      w = 0.84; d = 0.57
      B.box('m', w, 0.86, d, 0, 0.43, 0, '#7d6850', { uvScale: 1 })
      B.box('m', w + 0.05, 0.05, d + 0.05, 0, 0.89, 0, '#403a30')
      B.box('m', w / 2 - 0.05, 0.68, 0.03, -w / 4, 0.44, d / 2 + 0.015, '#8b7357')
      B.box('m', w / 2 - 0.05, 0.68, 0.03, w / 4, 0.44, d / 2 + 0.015, '#8b7357')
      B.box('m', 0.03, 0.16, 0.04, -0.05, 0.55, d / 2 + 0.05, '#b0a077')
      B.box('m', 0.03, 0.16, 0.04, 0.05, 0.55, d / 2 + 0.05, '#b0a077')
    }

    const mesh = B.build(group, { shadows: false })[0]
    if (mesh) mesh.userData.containerOwn = true

    const loot = items ? items.map(s => ({ ...s })) : rollLoot(table || type, this.rng, type === 'corpse' ? { min: 1, max: 2 } : { min: 1, max: 3 })
    if (quest && !loot.some(s => s.id === quest)) loot.unshift(stack(quest, 1))

    const rec = { type: 'container', object: group, label: label || name, action, container: null }
    group.traverse(o => { if (o.isMesh) o.userData.interact = rec })
    this.interactRoots.push(group)

    const container = {
      type, name: label || name, group, rec, loot, searched: false, material: mat,
      w, d, x, z, rotY, quest: quest || null
    }
    rec.container = container
    this.containers.push(container)
    if (collide) {
      this.addColliderBox(x, z, w, d, 0, type === 'med_cabinet' ? 2.2 : 1.2, 'container', rotY)
    }
    return container
  }

  highlightContainer(container, on) {
    if (!container) return
    const m = container.material
    if (!m) return
    m.emissive.set(on ? '#6b4a1c' : '#000000')
    m.emissiveIntensity = on ? 0.75 : 0
  }

  // ---------------------------------------------------------------- furniture
  addTable(x, z, w, d, h, rotY = 0, color = '#6b5238', opts = {}) {
    const B = this.batches
    const [tx, tz] = localPlace(x, z, rotY, 0, 0)
    B.box('wood', w, 0.09, d, tx, h, tz, color, { rotY, uvScale: 1.2 })
    const lx = w / 2 - 0.12, lz = d / 2 - 0.12
    for (const [a, b] of [[-lx, -lz], [lx, -lz], [-lx, lz], [lx, lz]]) {
      const [px, pz] = localPlace(x, z, rotY, a, b)
      B.box('wood', 0.09, h, 0.09, px, h / 2, pz, color, { rotY, uvScale: 0.8 })
    }
    if (opts.clutter !== false) {
      const [cx, cz] = localPlace(x, z, rotY, rand(this.rng, -w * 0.25, w * 0.25), rand(this.rng, -d * 0.2, d * 0.2))
      B.cylinder('plastic', 0.035, 0.04, 0.16, 6, cx, h + 0.125, cz, choose(this.rng, ['#7d8d76', '#8c7655', '#b2a98f']))
    }
  }

  addChair(x, z, rotY = 0, color = '#5d4a33') {
    const B = this.batches
    const [cx, cz] = localPlace(x, z, rotY, 0, 0)
    B.box('wood', 0.42, 0.06, 0.42, cx, 0.46, cz, color, { rotY })
    const [bx, bz] = localPlace(x, z, rotY, 0, -0.19)
    B.box('wood', 0.42, 0.5, 0.06, bx, 0.72, bz, color, { rotY, rotX: -0.1 })
    for (const [a, b] of [[-0.17, -0.17], [0.17, -0.17], [-0.17, 0.17], [0.17, 0.17]]) {
      const [px, pz] = localPlace(x, z, rotY, a, b)
      B.box('wood', 0.045, 0.46, 0.045, px, 0.23, pz, color, { rotY })
    }
  }

  addSofa(x, z, w, rotY = 0, color = '#6a5d4a', accent = '#7b6d56') {
    const B = this.batches
    const [cx, cz] = localPlace(x, z, rotY, 0, 0)
    B.box('fabric', w, 0.4, 0.85, cx, 0.24, cz, color, { rotY, uvScale: 1.4 })
    const [bx, bz] = localPlace(x, z, rotY, 0, -0.33)
    B.box('fabric', w, 0.62, 0.18, bx, 0.6, bz, color, { rotY, rotX: 0.08, uvScale: 1.2 })
    for (const side of [-1, 1]) {
      const [ax, az] = localPlace(x, z, rotY, side * (w / 2 - 0.08), 0)
      B.box('fabric', 0.16, 0.56, 0.9, ax, 0.38, az, color, { rotY, uvScale: 1.2 })
      const [px, pz] = localPlace(x, z, rotY, side * (w / 2 - 0.1), -0.36)
      B.box('fabric', 0.18, 0.68, 0.2, px, 0.65, pz, color, { rotY, uvScale: 1.1 })
    }
    const cushions = Math.max(2, Math.round(w / 0.75))
    for (let i = 0; i < cushions; i++) {
      const [qx, qz] = localPlace(x, z, rotY, -w / 2 + 0.4 + i * ((w - 0.8) / Math.max(1, cushions - 1)), 0.06)
      B.box('fabric', (w - 0.8) / cushions - 0.04, 0.13, 0.6, qx, 0.49, qz, i % 2 ? accent : color, { rotY, uvScale: 1 })
    }
    if (this.rng() < 0.5) {
      const [px, pz] = localPlace(x, z, rotY, 0.2, 0.1)
      B.box('fabric', 0.36, 0.36, 0.16, px, 0.68, pz, choose(this.rng, ['#8e7b5e', '#7e8c7d', '#9b8870']), { rotY, rotY2: 0, rotZ: 0.2 })
    }
  }

  addBed(x, z, rotY = 0, w = 1.55, len = 2.05, frameColor = '#5f4c38', sheetColor = '#a49b86') {
    const B = this.batches
    const [cx, cz] = localPlace(x, z, rotY, 0, 0)
    B.box('wood', w + 0.1, 0.22, len + 0.1, cx, 0.22, cz, frameColor, { rotY, uvScale: 1.3 })
    for (const [a, b] of [[-w / 2 + 0.08, -len / 2 + 0.08], [w / 2 - 0.08, -len / 2 + 0.08], [-w / 2 + 0.08, len / 2 - 0.08], [w / 2 - 0.08, len / 2 - 0.08]]) {
      const [px, pz] = localPlace(x, z, rotY, a, b)
      B.box('wood', 0.12, 0.22, 0.12, px, 0.11, pz, '#43372a', { rotY })
    }
    B.box('fabric', w, 0.24, len, cx, 0.45, cz, '#bdb39c', { rotY, uvScale: 1.4 })
    const [sx, sz] = localPlace(x, z, rotY, 0, 0.12)
    B.box('fabric', w + 0.06, 0.08, len * 0.78, sx, 0.6, sz, sheetColor, { rotY, rotX: 0.03, uvScale: 1.5 })
    const [px, pz] = localPlace(x, z, rotY, 0, -len / 2 + 0.3)
    B.box('fabric', w * 0.62, 0.13, 0.42, px, 0.62, pz, '#d3c9b2', { rotY, rotX: -0.08, uvScale: 1.2 })
    const [hx, hz] = localPlace(x, z, rotY, 0, -len / 2 - 0.04)
    B.box('wood', w + 0.12, 0.85, 0.12, hx, 0.65, hz, frameColor, { rotY, uvScale: 1.3 })
    if (this.rng() < 0.7) {
      const [bx, bz] = localPlace(x, z, rotY, w * 0.25, len * 0.23)
      B.box('fabric', 0.8, 0.06, len * 0.55, bx, 0.66, bz, choose(this.rng, ['#6e5a48', '#7b6f5a', '#586459']), { rotY, uvScale: 1 })
    }
  }

  addKitchen(x, z, rotY = 0, w = 3.2, color = '#7d705e') {
    const B = this.batches
    const [cx, cz] = localPlace(x, z, rotY, 0, 0)
    B.box('wood', w, 0.86, 0.62, cx, 0.43, cz, color, { rotY, uvScale: 1.3 })
    B.box('concrete', w, 0.06, 0.66, cx, 0.9, cz, '#514b41', { rotY, uvScale: 1 })
    const doors = Math.max(2, Math.round(w / 0.65))
    for (let i = 0; i < doors; i++) {
      const [dx, dz] = localPlace(x, z, rotY, -w / 2 + (i + 0.5) * (w / doors), 0.315)
      B.box('wood', w / doors - 0.06, 0.7, 0.03, dx, 0.44, dz, i % 2 ? '#897962' : color, { rotY, uvScale: 1.1 })
      B.box('metal', 0.16, 0.025, 0.035, dx, 0.58, dz + 0.03, '#b1a37f', { rotY })
    }
    // sink
    const [sx, sz] = localPlace(x, z, rotY, w * 0.16, 0)
    B.box('metal', 0.55, 0.04, 0.38, sx, 0.94, sz, '#858a84', { rotY })
    const [fx, fz] = localPlace(x, z, rotY, w * 0.16, -0.18)
    B.cylinder('metal', 0.025, 0.025, 0.25, 6, fx, 1.05, fz, '#9ea39c', { rotX: 0.3 })
    // stove
    const [ox, oz] = localPlace(x, z, rotY, -w * 0.28, 0)
    B.box('metal', 0.6, 0.06, 0.54, ox, 0.94, oz, '#4d4e47', { rotY })
    for (let i = 0; i < 4; i++) {
      const [bx, bz] = localPlace(x, z, rotY, -w * 0.28 + (i % 2 ? 0.14 : -0.14), i < 2 ? -0.12 : 0.12)
      B.cylinder('dark', 0.08, 0.09, 0.02, 10, bx, 0.98, bz, '#25251f', { rotY })
    }
    // upper cabinets
    const [ux, uz] = localPlace(x, z, rotY, 0, -0.16)
    B.box('wood', w, 0.68, 0.35, ux, 1.95, uz, color, { rotY, uvScale: 1.2 })
    for (let i = 0; i < doors; i++) {
      const [dx, dz] = localPlace(x, z, rotY, -w / 2 + (i + 0.5) * (w / doors), -0.34)
      B.box('wood', w / doors - 0.06, 0.6, 0.03, dx, 1.95, dz, i % 2 ? '#897962' : color, { rotY, uvScale: 1 })
    }
    // clutter
    B.cylinder('plastic', 0.05, 0.06, 0.17, 6, ...(() => { const [px, pz] = localPlace(x, z, rotY, -0.1, 0.16); return [px, 1.01, pz] })(), '#8f8d79', {})
    B.plane('paper', 0.35, 0.5, ...(() => { const [px, pz] = localPlace(x, z, rotY, w * 0.32, 0.1); return [px, 0.935, pz] })(), '#d0c8b4', { rotX: -HALF_PI })
  }

  addStaticShelf(x, z, rotY, w, h, d, color, items = true) {
    const B = this.batches
    const [cx, cz] = localPlace(x, z, rotY, 0, 0)
    for (const side of [-1, 1]) {
      const [px, pz] = localPlace(x, z, rotY, side * w / 2, 0)
      B.box('metal', 0.05, h, d, px, h / 2, pz, color, { rotY })
    }
    const levels = Math.max(2, Math.floor(h / 0.55))
    for (let i = 0; i < levels; i++) {
      const [px, pz] = localPlace(x, z, rotY, 0, 0)
      B.box('metal', w, 0.05, d, px, 0.3 + i * 0.52, pz, color, { rotY })
      if (items && i < levels - 1) {
        for (let j = 0; j < 4; j++) {
          const [ix, iz] = localPlace(x, z, rotY, -w / 2 + 0.25 + j * (w - 0.5) / 3, 0.02)
          const iw = 0.12 + this.rng() * 0.16
          B.box('plastic', iw, 0.14 + this.rng() * 0.12, 0.16, ix, 0.3 + i * 0.52 + 0.1, iz, choose(this.rng, ['#b7ad94', '#9fae9b', '#b07b55', '#c8bda3']))
        }
      }
    }
  }

  addTV(x, z, rotY = 0, w = 0.9) {
    const B = this.batches
    const [tx, tz] = localPlace(x, z, rotY, 0, 0)
    B.box('plastic', w, 0.52, 0.12, tx, 0.86, tz, '#2d2e2a', { rotY })
    B.box('dark', w - 0.1, 0.42, 0.02, tx, 0.87, tz + 0.07, '#090b0a', { rotY })
    B.box('metal', 0.6, 0.06, 0.35, tx, 0.56, tz + 0.05, '#4d4a41', { rotY })
  }

  addGurney(x, z, rotY = 0) {
    const B = this.batches
    const [cx, cz] = localPlace(x, z, rotY, 0, 0)
    B.box('metal', 0.72, 0.08, 1.9, cx, 0.72, cz, '#8e938b', { rotY })
    B.box('fabric', 0.66, 0.12, 1.82, cx, 0.82, cz, '#b7b7a8', { rotY, uvScale: 1.4 })
    for (const [a, b] of [[-0.28, -0.82], [0.28, -0.82], [-0.28, 0.82], [0.28, 0.82]]) {
      const [px, pz] = localPlace(x, z, rotY, a, b)
      B.cylinder('metal', 0.025, 0.025, 0.72, 6, px, 0.36, pz, '#72766e')
    }
    for (const side of [-1, 1]) {
      const [rx, rz] = localPlace(x, z, rotY, side * 0.34, 0)
      B.box('metal', 0.03, 0.03, 1.5, rx, 1.05, rz, '#7e827a', { rotY })
      for (const a of [-0.7, 0.7]) {
        const [sx, sz] = localPlace(x, z, rotY, side * 0.34, a)
        B.box('metal', 0.03, 0.3, 0.03, sx, 0.9, sz, '#7e827a', { rotY })
      }
    }
  }

  addHospitalBed(x, z, rotY = 0) {
    this.addGurney(x, z, rotY)
    const B = this.batches
    const [hx, hz] = localPlace(x, z, rotY, 0, -1.02)
    B.box('metal', 0.72, 0.45, 0.05, hx, 0.95, hz, '#7c817a', { rotY })
    const [ix, iz] = localPlace(x, z, rotY, 0.45, 0.85)
    B.cylinder('metal', 0.02, 0.02, 1.6, 6, ix, 0.8, iz, '#8a8e86')
    B.box('metal', 0.22, 0.02, 0.22, ix, 1.6, iz, '#8a8e86')
  }

  addWheelchair(x, z, rotY = 0) {
    const B = this.batches
    const [cx, cz] = localPlace(x, z, rotY, 0, 0)
    B.box('fabric', 0.5, 0.08, 0.48, cx, 0.52, cz, '#3e4440', { rotY })
    const [bx, bz] = localPlace(x, z, rotY, 0, -0.23)
    B.box('fabric', 0.46, 0.46, 0.06, bx, 0.78, bz, '#3e4440', { rotY })
    for (const side of [-1, 1]) {
      const [wx, wz] = localPlace(x, z, rotY, side * 0.28, 0.02)
      B.cylinder('dark', 0.3, 0.3, 0.05, 14, wx, 0.32, wz, '#1b1c19', { rotX: HALF_PI })
      B.cylinder('metal', 0.03, 0.03, 0.06, 8, wx, 0.32, wz, '#8a8e86', { rotX: HALF_PI })
      const [fx, fz] = localPlace(x, z, rotY, side * 0.24, 0.35)
      B.cylinder('dark', 0.09, 0.09, 0.04, 10, fx, 0.11, fz, '#24251f', { rotX: HALF_PI })
    }
  }

  addWasher(x, z, rotY = 0, color = '#b3b4a4') {
    const B = this.batches
    const [cx, cz] = localPlace(x, z, rotY, 0, 0)
    B.box('plastic', 0.62, 0.92, 0.64, cx, 0.46, cz, color, { rotY, uvScale: 1.1 })
    const [dx, dz] = localPlace(x, z, rotY, 0, 0.33)
    B.cylinder('dark', 0.2, 0.2, 0.04, 16, dx, 0.53, dz, '#33352f', { rotX: HALF_PI })
    B.cylinder('metal', 0.15, 0.15, 0.02, 16, dx, 0.53, dz + 0.01, '#5e6a64', { rotX: HALF_PI })
    B.box('metal', 0.45, 0.08, 0.03, dx, 0.87, dz, '#5c5f57', { rotY })
    for (let i = 0; i < 4; i++) B.cylinder('metal', 0.018, 0.018, 0.04, 6, ...(() => { const [px, pz] = localPlace(x, z, rotY, -0.18 + i * 0.12, 0.335); return [px, 0.88, pz] })(), '#44463f', { rotX: HALF_PI })
  }

  addCot(x, z, rotY = 0) {
    const B = this.batches
    const [cx, cz] = localPlace(x, z, rotY, 0, 0)
    B.box('metal', 0.72, 0.12, 1.9, cx, 0.35, cz, '#6c7068', { rotY })
    B.box('fabric', 0.7, 0.12, 1.86, cx, 0.46, cz, '#8b8a78', { rotY, uvScale: 1.4 })
    const [px, pz] = localPlace(x, z, rotY, 0, -0.7)
    B.box('fabric', 0.5, 0.1, 0.3, px, 0.55, pz, '#c2b9a2', { rotY })
  }

  addRug(x, z, w, d, rotY = 0, color = '#6b5541') {
    this.batches.plane('fabric', w, d, x, 0.032, z, color, { rotX: -HALF_PI, rotZ: rotY, uvScale: 0 })
  }

  addCeilingFan(x, y, z) {
    this.batches.cylinder('metal', 0.05, 0.05, 0.3, 6, x, y - 0.15, z, '#4f4f47')
    this.batches.cylinder('metal', 0.22, 0.22, 0.06, 10, x, y - 0.32, z, '#565850')
    for (let i = 0; i < 4; i++) {
      const a = i * HALF_PI + 0.2
      this.batches.box('wood', 0.85, 0.02, 0.14, x + Math.cos(a) * 0.5, y - 0.34, z + Math.sin(a) * 0.5, '#6b5a43', { rotY: -a })
    }
  }

  addClutter(x, z, rotY = 0, amount = 6, area = 1.2, seedOffset = 0) {
    const B = this.batches
    for (let i = 0; i < amount; i++) {
      const a = this.rng() * area * 2 - area
      const b = this.rng() * area * 2 - area
      const [px, pz] = localPlace(x, z, rotY, a, b)
      const kind = this.rng()
      if (kind < 0.28) {
        B.plane('paper', 0.22 + this.rng() * 0.2, 0.3 + this.rng() * 0.2, px, 0.037, pz, '#c9c1ad', { rotX: -HALF_PI, rotZ: this.rng() * PI })
      } else if (kind < 0.52) {
        B.cylinder('plastic', 0.03, 0.04, 0.15, 6, px, 0.08, pz, choose(this.rng, ['#8d9b88', '#a58a58', '#b6b0a0']))
      } else if (kind < 0.72) {
        B.box('fabric', 0.18 + this.rng() * 0.2, 0.05 + this.rng() * 0.1, 0.2, px, 0.05, pz, choose(this.rng, ['#7a7464', '#655d50', '#8d8674']), { rotY: this.rng() * PI })
      } else {
        B.box('wood', 0.1 + this.rng() * 0.2, 0.05, 0.08, px, 0.03, pz, '#5b4c38', { rotY: this.rng() * PI })
      }
    }
  }

  // ---------------------------------------------------------------- hero buildings
  buildHeroBuildings() {
    this.buildPharmacy()
    this.buildApartment()
    this.buildMarket()
    this.buildHospital()
    this.buildTenement()
    this.buildSafehouse()
  }

  buildPharmacy() {
    const cx = 1, cz = -15.5, w = 13.4, d = 13, h = 7.6
    const sh = this.buildShell({
      cx, cz, w, d, h, facing: 1, doorX: 3, doorW: 1.25, ceiling: 3.08,
      floor: 'tileA', wall: 'wallpaper', wallColor: '#b0a68f',
      frontKey: 'plaster', frontColor: '#aea28c', backKey: 'brick', backColor: '#9c8b78',
      doorLabel: 'Harbor Pharmacy', ceilColor: '#b3aa9a', roofColor: '#6e6556'
    })
    const frontZ = 9 * -1
    const fz = -8.96
    // storefront windows
    this.addWindow(-2.7, 1.75, fz, 0, 4.0, 2.05, { lit: true, litVar: 2, frame: '#6e6555', sill: true, sillColor: '#8e816c' })
    this.addWindow(5.5, 1.75, fz, 0, 2.7, 2.05, { lit: false, broken: true, frame: '#6e6555', sill: true, sillColor: '#8e816c' })
    // upper floor windows
    this.addWindowGrid(-5.5, 7.5, fz, 1, 4.55, 1, 3, 731)
    // pharmacy awning
    this.batches.box('awning', 4.6, 0.09, 1.6, -2.6, 3.24, -8.22, '#cfc4aa', { rotX: -0.14, rotY: 0 })
    this.batches.box('awning', 3.2, 0.09, 1.6, 5.6, 3.24, -8.22, '#cfc4aa', { rotX: -0.14, rotY: 0 })
    for (let i = 0; i < 14; i++) this.batches.box('awning', 0.3, 0.22, 0.06, -4.7 + i * 0.68, 3.05, -7.44, '#bfb49b')
    // main sign
    this.addSign('HARBOR PHARMACY', 1.6, 4.0, -8.91, 0, 4.5, 0.86, { bg: '#e0d8c2', fg: '#234333', accent: '#2f6b4c', sub: 'OPEN 24 HOURS · EST. 1998', size: 82, texH: 300, glow: '#243f2c', glowIntensity: 0.1 })
    // projecting vertical sign
    this.addSign('PHARMACY', 7.98, 2.55, -9.75, HALF_PI, 0.62, 2.2, { bg: '#dfd7c1', fg: '#1e3f30', accent: '#2f6b4c', vertical: true, texW: 256, texH: 512, size: 86, border: false, backing: false })
    this.box('metal', 0.05, 2.4, 0.64, 7.78, 2.3, -9.75, '#3b3d36')
    // green cross
    this.box('emissive', 0.5, 0.13, 0.06, -2.4, 4.95, -8.94, '#65c98e')
    this.box('emissive', 0.13, 0.5, 0.06, -2.4, 4.95, -8.94, '#65c98e')
    // posters and notices
    this.addPoster('missing', 6.9, 1.8, -8.93, 0, 0.82, 1.16)
    this.addPoster('quarantine', -5.15, 1.95, -8.93, 0, 0.9, 1.25)
    this.addGraffiti('NO CURE', -9.0, 2.5, -16.2, HALF_PI, 3.4, 1.7, '#7d3a2c', 2)
    this.addGraffiti('THEY HEAR YOU', 10.3, 3.4, -14.0, -HALF_PI, 3.0, 1.5, '#6d382f', 5)
    this.addGraffiti('DEAD INSIDE', -6.45, 2.2, -18.5, -HALF_PI, 3.0, 1.5, '#8c3a2b', 8)
    // quarantine tape
    for (let i = 0; i < 2; i++) this.batches.box('hazard', 1.55, 0.18, 0.015, 3.0, 1.25 + i * 0.9, -8.82, '#ffffff', { rotZ: i ? -0.22 : 0.22 })

    // interior partition / back room
    this.wallXGap(-17.75, -5.25, 7.25, 0.7, 2.0, 3.0, 0.2, 'wallpaper', '#b9ad95')
    this.box('wood', 0.1, 2.2, 0.12, 0.7, 0, -17.75, '#554534')
    this.box('wood', 0.1, 2.2, 0.12, 2.0, 0, -17.75, '#554534')
    this.addSign('STAFF ONLY', 1.35, 2.6, -17.63, 0, 1.0, 0.26, { bg: '#342e26', fg: '#d5c8ad', accent: '#8a5a3a', border: false, size: 86, texH: 160 })

    // shelving units
    this.addStaticShelf(-4.6, -12.5, HALF_PI, 2.6, 2.25, 0.55, '#5f6159')
    this.addStaticShelf(-4.6, -15.3, HALF_PI, 2.3, 2.25, 0.55, '#585a53')
    this.addStaticShelf(6.75, -12.4, -HALF_PI, 2.4, 2.1, 0.5, '#5f6159')
    this.addContainer({ type: 'shelf', name: 'Pharmacy Shelves', label: 'Pharmacy Shelves', x: 6.6, z: -15.4, rotY: -HALF_PI, table: 'pharmacy_shelf' })
    this.addContainer({ type: 'med_cabinet', name: 'Medicine Cabinet', label: 'Medicine Cabinet', x: -4.98, z: -13.4, rotY: HALF_PI, y: 1.22, collide: false, table: 'med_cabinet' })
    // counter
    this.box('wood', 5.2, 1.02, 0.75, 1.0, 0, -15.9, '#6f5b42', { uvScale: 1.3 })
    this.box('concrete', 5.3, 0.06, 0.82, 1.0, 1.02, -15.9, '#4c463b')
    this.box('glass', 5.0, 0.55, 0.03, 1.0, 1.3, -15.55, '#aabdb8', {})
    this.addContainer({ type: 'register', name: 'Cash Register', label: 'Cash Register', x: 2.5, z: -15.85, y: 1.03, rotY: 0, collide: false, table: 'register' })
    this.addClutter(1.0, -14.9, 0, 7, 1.6)
    // back storage
    this.addContainer({ type: 'crate', name: 'Delivery Crate', label: 'Delivery Crate', x: 5.9, z: -20.5, rotY: 0.2, table: 'storage', quest: 'antibiotics', items: [stack('antibiotics', 1), stack('medkit', 1), stack('bandage', 2)] })
    this.addStaticShelf(-3.6, -21.0, 0, 2.8, 1.9, 0.5, '#585a53')
    this.addContainer({ type: 'suitcase', name: 'Abandoned Suitcase', label: 'Abandoned Suitcase', x: 0.3, z: -20.3, rotY: 0.6, table: 'storage' })
    this.addContainer({ type: 'corpse', name: 'Pharmacist', label: 'Body of the Pharmacist', x: -2.9, z: -19.8, rotY: 1.2, table: 'corpse' })
    this.addGroundDecal('blood2', -1.4, -18.6, 3.2, 0.8, 0.03)
    this.addGroundDecal('blood', 4.4, -19.6, 1.8, 2.1, 0.03)
    // storage light
    this.addRoomLight(-1.2, 2.85, -20.3, '#dfe4cf', 8, 6, 'tube', 0.75)
    this.addGlow(-2.4, 4.95, -8.9, '#65c98e', 1.0, 0.35)

    this.questPoints.pharmacy = new THREE.Vector3(3, 1.6, -9)
    this.spawnPoints.push({ x: 0.5, z: -13.8, type: 'walker', rot: 1.9 })
    this.spawnPoints.push({ x: 5.0, z: -19.6, type: 'infected', rot: 2.7 })
    this.ambientEmitters.push({ type: 'buzz', x: 1, z: -15 })
  }

  buildApartment() {
    const cx = -6, cz = 17, w = 16, d = 16, h = 10.8
    const sh = this.buildShell({
      cx, cz, w, d, h, facing: -1, doorX: -7, doorW: 1.3, ceiling: 3.05,
      floor: 'wood', wall: 'wallpaper', wallColor: '#b5a892',
      frontKey: 'plaster', frontColor: '#ad9d84', backKey: 'brick', backColor: '#95816d',
      doorLabel: 'Apartment 2B', ceilColor: '#b4aa98', roofColor: '#6e6354'
    })
    const fz = 8.96
    this.addWindow(-11.6, 1.85, fz, PI, 1.7, 1.7, { lit: false, frame: '#8e8371', broken: true })
    this.addWindow(0.0, 1.85, fz, PI, 1.7, 1.7, { lit: true, litVar: 1, frame: '#8e8371' })
    this.addWindowGrid(-13.2, 1.2, fz, -1, 4.65, 2, 4, 1201)
    this.addBalcony(-10.5, 4.2, 8.35, 3.1, 1.25, PI)
    this.addBalcony(-1.2, 7.3, 8.35, 3.1, 1.25, PI)
    this.addFireEscape(-3.8, 8.95, 7.8)
    this.addSign('APARTMENTS', -7.0, 3.6, 8.9, PI, 2.0, 0.4, { bg: '#3d3c33', fg: '#c9c0a9', accent: '#8c7b60', size: 92, texH: 180, border: false })
    this.addPoster('missing', -4.4, 1.9, 8.92, PI, 0.78, 1.1)
    this.addGraffiti('HELP US', 3.7, 2.7, 13.5, -HALF_PI, 3.2, 1.6, '#743429', 12)
    this.addGraffiti('2B', -14.05, 2.5, 12.0, HALF_PI, 1.0, 0.7, '#9d3c2b', 14)
    this.addIvyWall(2.05, 2.6, 16.5, -HALF_PI, 2.4, 3.8, 3)
    this.addAC(2.1, 4.9, 14.2, -HALF_PI)
    this.addPipes(2.12, 12.1, 20.5, HALF_PI)

    // interior walls
    this.wallXWithGaps(15.4, -13.5, 1.5, 3.0, 0.2, 'wallpaper', '#a99d88', [[-9.4, -8.0], [-3.5, -2.1], [0.2, 1.3]])
    this.wallZ(-6.0, 15.4, 24.65, 3.0, 0.2, 'wallpaper', '#a99d88')
    this.wallZ(-1.5, 15.4, 24.65, 3.0, 0.2, 'wallpaper', '#a99d88')
    this.box('wood', 0.09, 2.2, 0.1, -9.4, 0, 15.4, '#4d3d2d')
    this.box('wood', 0.09, 2.2, 0.1, -8.0, 0, 15.4, '#4d3d2d')

    // living room
    this.addRug(-8.4, 12.6, 4.6, 3.4, 0, '#6b5541')
    this.addSofa(-9.8, 13.9, 2.7, PI, '#6d5e49', '#7e6c53')
    this.addTable(-8.2, 11.6, 1.35, 0.72, 0.46, 0, '#604b34')
    this.addTV(-8.3, 14.6, 0, 1.0)
    this.addChair(-6.6, 11.8, -0.6)
    this.addStaticShelf(-13.25, 12.3, HALF_PI, 2.2, 1.9, 0.38, '#5e5140', true)
    this.addCeilingFan(-8.0, 3.0, 12.2)

    // kitchen
    this.addKitchen(-2.7, 9.8, 0, 3.3, '#7f715d')
    this.addContainer({ type: 'fridge', name: 'Refrigerator', label: 'Refrigerator', x: 0.6, z: 13.7, rotY: -HALF_PI, table: 'fridge' })
    this.addContainer({ type: 'kitchen_cabinet', name: 'Kitchen Drawers', label: 'Kitchen Drawers', x: 0.7, z: 11.6, rotY: -HALF_PI, table: 'kitchen' })
    this.addTable(-1.0, 12.6, 1.1, 0.75, 0.75, 0, '#5d4934')
    this.addChair(-1.0, 13.4, PI)
    this.addClutter(-2.0, 11.2, 0, 5, 0.8)

    // bedroom
    this.addBed(-10.6, 20.4, 0, 1.55, 2.05, '#5a4732', '#94896f')
    this.addContainer({ type: 'wardrobe', name: 'Wardrobe', label: 'Wardrobe', x: -7.4, z: 23.9, rotY: 0, table: 'wardrobe' })
    this.addContainer({ type: 'nightstand', name: 'Nightstand', label: 'Nightstand', x: -12.2, z: 19.0, rotY: HALF_PI, table: 'nightstand' })
    this.addContainer({ type: 'dresser', name: 'Dresser', label: 'Dresser', x: -13.1, z: 22.4, rotY: -HALF_PI, table: 'nightstand' })
    this.addTable(-10.4, 17.0, 0.9, 0.45, 0.48, 0, '#5e4a34')
    this.addChair(-10.4, 17.7, PI)
    this.addClutter(-9.2, 21.8, 0, 4, 0.7)

    // bathroom + storage room
    this.addStaticShelf(-5.3, 20.5, HALF_PI, 1.2, 1.6, 0.3, '#6b6d64', false)
    this.box('plastic', 1.5, 0.6, 0.75, -5.4, 0, 22.7, '#b9b6a4', { uvScale: 1.2 })
    this.box('plastic', 0.5, 0.35, 0.42, -4.9, 0.65, 21.9, '#c1bfb0')
    this.addContainer({ type: 'med_cabinet', name: 'Bathroom Cabinet', label: 'Bathroom Cabinet', x: -6.25, z: 19.1, y: 1.2, rotY: HALF_PI, collide: false, table: 'nightstand' })
    this.addContainer({ type: 'toolbox', name: 'Toolbox', label: 'Toolbox', x: 0.1, z: 22.7, rotY: -0.4, table: 'toolbox' })
    this.addStaticShelf(0.9, 19.2, -HALF_PI, 1.5, 1.9, 0.35, '#5f5142', true)
    this.addClutter(0.4, 20.5, 0, 5, 0.6)

    this.addGroundDecal('blood', -5.2, 18.9, 1.9, 0.4, 0.03)
    this.addPoster('missing', -8.85, 1.7, 15.17, 0, 0.7, 1.0)
    this.spawnPoints.push({ x: -2.2, z: 12.6, type: 'walker', rot: 2.4 })
    this.spawnPoints.push({ x: -10.5, z: 21.5, type: 'infected', rot: 0.7 })
    this.ambientEmitters.push({ type: 'drip', x: -5, z: 20 })
  }

  buildMarket() {
    const cx = 12, cz = 14.5, w = 12, d = 11, h = 6.4
    const sh = this.buildShell({
      cx, cz, w, d, h, facing: -1, doorX: 10.5, doorW: 1.35, ceiling: 3.02,
      floor: 'tileA', wall: 'plaster', wallColor: '#9b9b82',
      frontKey: 'brick', frontColor: '#9d8a74', backKey: 'brick', backColor: '#8f7c68',
      doorLabel: 'Harbor Market', ceilColor: '#a8a695', roofColor: '#675f51'
    })
    this.addWindow(7.4, 1.8, 8.96, PI, 2.1, 1.9, { lit: true, litVar: 3, frame: '#7c6f5b' })
    this.addWindow(15.4, 1.8, 8.96, PI, 2.4, 1.9, { lit: false, boarded: true, frame: '#7c6f5b' })
    this.addWindowGrid(6.6, 17.4, 8.96, -1, 4.2, 0, 3, 44)
    this.addSign('HARBOR MARKET', 12, 3.45, 8.9, PI, 3.6, 0.6, { bg: '#d5c6a8', fg: '#4b3c26', accent: '#9b3e2d', sub: 'GROCERY · WATER · SUPPLIES', size: 78, texH: 260, glow: '#453116', glowIntensity: 0.1 })
    this.batches.box('awningGreen', 5.2, 0.08, 1.4, 8.8, 3.02, 8.3, '#d2c8ae', { rotX: 0.12 })
    for (let i = 0; i < 12; i++) this.batches.box('awningGreen', 0.36, 0.2, 0.05, 6.5 + i * 0.42, 2.88, 7.65, '#c8bda3')
    this.addPoster('quarantine', 17.3, 1.8, 8.9, PI, 0.85, 1.2)
    this.addGraffiti('FOOD', 18.05, 2.1, 12.5, -HALF_PI, 2.0, 1.1, '#a76b2f', 17)
    this.addGraffiti('WE ARE STILL HERE', 5.95, 3.3, 12.5, HALF_PI, 3.0, 1.5, '#7b3a2d', 19)

    // interior
    this.wallXGap(17.4, 6.5, 17.5, 11.6, 13.0, 3.0, 0.2, 'plaster', '#99957f')
    this.box('wood', 0.12, 2.2, 0.12, 11.6, 0, 17.4, '#514331')
    this.addSign('STOCKROOM', 12.3, 2.55, 17.29, PI, 1.2, 0.26, { bg: '#38342a', fg: '#c9bea7', accent: '#7c5b3b', border: false, size: 86, texH: 160 })
    this.addStaticShelf(8.0, 12.0, 0, 4.2, 1.9, 0.45, '#6d6f65', true)
    this.addStaticShelf(13.4, 12.0, 0, 4.2, 1.9, 0.45, '#66685e', true)
    this.addStaticShelf(6.9, 15.6, HALF_PI, 3.2, 1.8, 0.4, '#6d6f65', true)
    this.addContainer({ type: 'shelf', name: 'Market Shelves', label: 'Market Shelves', x: 15.8, z: 14.8, rotY: -HALF_PI, table: 'market_shelf' })
    this.addContainer({ type: 'fridge', name: 'Display Fridge', label: 'Display Fridge', x: 14.9, z: 10.0, rotY: PI, table: 'fridge' })
    this.box('wood', 4.0, 1.0, 0.7, 9.5, 0, 16.35, '#675339', { uvScale: 1.2 })
    this.box('concrete', 4.1, 0.05, 0.76, 9.5, 1.0, 16.35, '#494337')
    this.addContainer({ type: 'register', name: 'Cash Register', label: 'Cash Register', x: 10.2, z: 16.3, y: 1.01, rotY: PI, collide: false, table: 'register' })
    this.addContainer({ type: 'crate', name: 'Supply Crate', label: 'Supply Crate', x: 15.9, z: 18.8, rotY: 0.3, table: 'storage' })
    this.addContainer({ type: 'suitcase', name: 'Suitcase', label: 'Old Suitcase', x: 8.1, z: 19.0, rotY: 0.8, table: 'storage' })
    this.addStaticShelf(7.1, 18.8, 0, 1.3, 1.5, 0.3, '#6c6e64', false)
    this.addClutter(9.2, 13.6, 0, 9, 1.8)
    this.addClutter(13.0, 18.6, 0, 5, 1.0)
    this.addGroundDecal('blood2', 8.0, 15.0, 2.0, 0.8, 0.03)
    this.spawnPoints.push({ x: 13.2, z: 15.0, type: 'walker', rot: 3.4 })
    this.ambientEmitters.push({ type: 'buzz', x: 12, z: 14 })
  }

  buildHospital() {
    const cx = 27, cz = -21.5, w = 29, d = 25, h = 14.8
    const sh = this.buildShell({
      cx, cz, w, d, h, facing: 1, doorX: 27, doorW: 3.0, ceiling: 3.42,
      floor: 'tileH', wall: 'plaster', wallColor: '#b4b8a8',
      frontKey: 'concrete', frontColor: '#b9b5a6', backKey: 'concrete', backColor: '#aaa697',
      doorLabel: 'Harbor General — Main Entrance', doorKind: 'glass', ceilColor: '#b8bbad', roofColor: '#6b6a5e', doorHeight: 2.55
    })
    const fz = -8.95
    this.addWindowGrid(13.6, 40.4, fz, 1, 5.0, 3, 8, 3301)
    // ground floor tall windows / entrance
    for (const x of [17.4, 37.0]) this.addWindow(x, 1.95, fz, 0, 3.4, 2.35, { lit: x < 20, litVar: 4, frame: '#8e9288' })
    // entrance canopy
    this.batches.box('concrete', 12.5, 0.28, 3.4, 27, 3.85, -7.3, '#8c887b', { uvScale: 2 })
    this.box('concrete', 0.45, 3.7, 0.45, 22.4, 0, -6.15, '#848073')
    this.box('concrete', 0.45, 3.7, 0.45, 31.6, 0, -6.15, '#848073')
    this.box('concrete', 0.36, 0.5, 2.9, 22.4, 3.35, -7.3, '#7f7b6e')
    this.box('concrete', 0.36, 0.5, 2.9, 31.6, 3.35, -7.3, '#7f7b6e')
    this.addSign('HARBOR GENERAL', 27, 4.75, -8.9, 0, 7.2, 1.0, { bg: '#d4d3c8', fg: '#3c4a46', accent: '#a63c32', sub: 'EMERGENCY · SURGERY · PHARMACY', size: 102, texH: 300, glow: '#36413d', glowIntensity: 0.12 })
    // red cross
    this.box('emissive', 1.2, 0.3, 0.07, 33.2, 4.6, -8.85, '#c34736')
    this.box('emissive', 0.3, 1.2, 0.07, 33.2, 4.6, -8.85, '#c34736')
    // quarantine banners
    this.batches.box('hazard', 7.5, 0.2, 0.02, 20.0, 3.1, -8.79, '#ffffff', { rotZ: 0.03 })
    this.addPoster('quarantine', 15.1, 2.0, -8.9, 0, 1.0, 1.4)
    this.addPoster('missing', 39.0, 2.0, -8.9, 0, 0.86, 1.2)
    this.addGraffiti('NO ENTRY', 12.4, 3.2, -17.0, HALF_PI, 3.6, 1.8, '#7b2f26', 21)
    this.addGraffiti('THEY ARE INSIDE', 41.55, 1.8, -14.0, -HALF_PI, 3.0, 1.5, '#752f26', 23)
    // emergency floodlight over entrance
    this.addGlow(27, 3.6, -6.9, '#ffb46c', 2.2, 0.3)

    // interior partitions
    this.wallXWithGaps(-19.6, 13.4, 40.6, 3.3, 0.22, 'plaster', '#a9ad9f', [[16.2, 17.7], [25.2, 26.7], [34.0, 35.5]])
    this.wallZ(21.2, -33.4, -19.6, 3.3, 0.22, 'plaster', '#a9ad9f')
    this.wallZ(31.8, -33.4, -19.6, 3.3, 0.22, 'plaster', '#a9ad9f')
    // door headers/signs
    for (const [x, text] of [[16.95, 'SUPPLY'], [25.95, 'SURGERY'], [34.75, 'WARD']]) {
      this.addSign(text, x, 2.6, -19.45, 0, 1.35, 0.28, { bg: '#383c36', fg: '#ced1c2', accent: '#8b9a7c', size: 84, texH: 150, border: false })
    }

    // reception desk
    this.box('wood', 7.2, 1.05, 1.0, 22.4, 0, -12.2, '#635545', { uvScale: 1.3 })
    this.box('concrete', 7.3, 0.06, 1.08, 22.4, 1.05, -12.2, '#4a463d')
    this.box('wood', 1.2, 1.05, 3.4, 18.9, 0, -13.6, '#5d5041', { uvScale: 1.2 })
    this.addContainer({ type: 'register', name: 'Reception Drawer', label: 'Reception Desk', x: 21.0, z: -12.2, y: 1.06, rotY: 0, collide: false, table: 'register' })
    this.addContainer({ type: 'dresser', name: 'Reception Files', label: 'Reception Files', x: 24.7, z: -12.8, rotY: 0.2, table: 'nightstand' })
    this.addSign('HARBOR GENERAL', 27, 2.65, -19.56, 0, 5.4, 0.42, { bg: '#b8b9ac', fg: '#45504a', accent: '#944137', size: 88, texH: 160, border: false })
    // waiting area
    for (let i = 0; i < 7; i++) {
      const x = 15.3 + (i % 4) * 1.0
      const z = -15.8 - Math.floor(i / 4) * 1.15
      this.addChair(x, z, HALF_PI, '#4c5b52')
    }
    this.addWheelchair(37.7, -13.5, -0.7)
    this.addWheelchair(36.5, -14.8, -2.2)
    this.addStaticShelf(39.9, -17.1, HALF_PI, 3.2, 1.7, 0.35, '#7b7f74', true)
    this.addClutter(29.0, -13.5, 0, 10, 2.2)
    this.addClutter(36.0, -17.0, 0, 5, 1.0)
    this.addGroundDecal('blood', 25.3, -14.1, 3.2, 1.5, 0.03)
    this.addGroundDecal('blood2', 33.7, -21.0, 2.4, 0.3, 0.03)
    this.addGroundDecal('blood2', 17.0, -22.0, 2.8, 2.0, 0.03)
    this.addPoster('help', 14.0, 1.7, -18.5, HALF_PI, 0.8, 1.1)

    // supply room
    this.addStaticShelf(14.2, -24.5, HALF_PI, 4.2, 2.1, 0.45, '#6c6f66', true)
    this.addStaticShelf(14.2, -29.3, HALF_PI, 3.6, 2.1, 0.45, '#666960', true)
    this.addContainer({ type: 'med_cabinet', name: 'Supply Cabinet', label: 'Supply Cabinet', x: 15.0, z: -31.9, y: 1.15, rotY: 0, collide: false, table: 'hospital_cabinet' })
    this.addContainer({ type: 'crate', name: 'Medical Crate', label: 'Medical Crate', x: 18.5, z: -31.7, rotY: 0.3, table: 'storage' })
    this.addContainer({ type: 'locker', name: 'Medicine Locker', label: 'Medicine Locker', x: 20.3, z: -30.5, rotY: -HALF_PI, table: 'locker' })
    this.addContainer({ type: 'corpse', name: 'Nurse', label: 'Body of a Nurse', x: 17.0, z: -27.4, rotY: 1.1, table: 'corpse' })
    // surgery
    this.addGurney(25.7, -26.0, 0)
    this.addGurney(29.4, -26.2, 0.2)
    this.box('metal', 1.8, 0.05, 0.06, 26.2, 3.0, -26.0, '#7f837b')
    this.box('emissive', 1.5, 0.05, 0.35, 26.2, 2.96, -26.0, '#cfe0d4')
    this.addContainer({ type: 'med_cabinet', name: 'Surgical Cabinet', label: 'Surgical Cabinet', x: 30.7, z: -23.0, y: 1.22, rotY: -HALF_PI, collide: false, table: 'hospital_cabinet' })
    this.addContainer({ type: 'toolbox', name: 'Surgical Tray', label: 'Surgical Tray', x: 24.0, z: -29.8, rotY: 0.6, table: 'toolbox' })
    this.addStaticShelf(30.9, -30.2, -HALF_PI, 2.8, 1.8, 0.45, '#74776e', true)
    this.addClutter(27.0, -28.8, 0, 8, 1.5)
    // ward
    for (let i = 0; i < 3; i++) this.addHospitalBed(34.0 + (i % 2) * 4.0, -23.0 - Math.floor(i / 2) * 4.0, HALF_PI)
    this.addHospitalBed(37.5, -30.5, HALF_PI)
    this.addContainer({ type: 'med_cabinet', name: 'Ward Cabinet', label: 'Ward Cabinet', x: 40.2, z: -25.0, y: 1.2, rotY: -HALF_PI, collide: false, table: 'hospital_cabinet' })
    this.addContainer({ type: 'suitcase', name: 'Patient Bag', label: 'Patient Bag', x: 40.0, z: -31.5, rotY: 0.4, table: 'nightstand' })
    this.addContainer({ type: 'corpse', name: 'Patient', label: 'Body of a Patient', x: 33.4, z: -32.2, rotY: 2.5, table: 'corpse' })
    this.addStaticShelf(32.6, -32.9, 0, 3.0, 1.7, 0.34, '#73766d', true)

    // lights
    this.addRoomLight(16.6, 2.95, -27.0, '#d6e2d2', 11, 8, 'tube', 0.62)
    this.addRoomLight(34.5, 2.9, -26.5, '#ff8a6a', 8, 7, 'bulb', 0.85)
    this.addGlow(27, 2.4, -17.5, '#a7c4a4', 1.4, 0.24)
    this.ambientEmitters.push({ type: 'hospital', x: 27, z: -16 }, { type: 'buzz', x: 16, z: -27 })
    this.questPoints.hospital = new THREE.Vector3(27, 1.6, -9)
    this.spawnPoints.push({ x: 19.0, z: -16.0, type: 'walker', rot: 0.4 })
    this.spawnPoints.push({ x: 27.0, z: -24.0, type: 'infected', rot: 2.6 })
    this.spawnPoints.push({ x: 37.0, z: -29.0, type: 'walker', rot: 1.7 })
  }

  buildTenement() {
    const cx = -23, cz = -17, w = 22, d = 16, h = 10.2
    const sh = this.buildShell({
      cx, cz, w, d, h, facing: 1, doorX: -25, doorW: 1.3, ceiling: 3.02,
      floor: 'wood', wall: 'wallpaper', wallColor: '#aa9c85',
      frontKey: 'brick', frontColor: '#9a8570', backKey: 'brick', backColor: '#8d7965',
      doorLabel: 'Row House 14', ceilColor: '#ac9f8c', roofColor: '#65594b'
    })
    const fz = -8.96
    this.addWindow(-31.1, 1.85, fz, 0, 1.6, 1.7, { broken: true, frame: '#8f826f' })
    this.addWindow(-15.3, 1.85, fz, 0, 1.6, 1.7, { lit: true, litVar: 2, frame: '#8f826f' })
    this.addWindowGrid(-32.5, -13.5, fz, 1, 4.55, 2, 6, 8801)
    this.addBalcony(-29.0, 4.2, -8.35, 3.2, 1.2, 0)
    this.addBalcony(-18.0, 7.25, -8.35, 3.2, 1.2, 0)
    this.addFireEscape(-21.3, -8.9, 7.7)
    this.addSign('ROWHOUSES 12-18', -23, 3.5, -8.92, 0, 2.6, 0.44, { bg: '#3a372f', fg: '#c9c0aa', accent: '#806d55', size: 72, texH: 150, border: false })
    this.addGraffiti('DEAD INSIDE', -15.0, 2.4, -8.93, 0, 3.2, 1.6, '#80352a', 26)
    this.addGraffiti('ROOM 14', -12.1, 2.6, -15.0, -HALF_PI, 2.2, 1.1, '#7a6b4b', 28)
    this.addPoster('missing', -17.7, 1.9, fz, 0, 0.8, 1.14)
    this.addAC(-12.0, 4.8, -14.5, -HALF_PI)
    this.addPipes(-12.0, -22.8, -10.6, -HALF_PI)

    // interior
    this.wallXWithGaps(-16.5, -32.4, -13.6, 3.0, 0.2, 'wallpaper', '#a3957f', [[-25.2, -23.7], [-18.2, -16.8]])
    this.wallZ(-23.0, -24.6, -16.5, 3.0, 0.2, 'wallpaper', '#a3957f')
    this.box('wood', 0.1, 2.2, 0.12, -25.2, 0, -16.5, '#4c3c2c')
    this.box('wood', 0.1, 2.2, 0.12, -23.7, 0, -16.5, '#4c3c2c')
    // kitchen
    this.addKitchen(-30.9, -10.0, 0, 3.4, '#776b57')
    this.addContainer({ type: 'fridge', name: 'Old Fridge', label: 'Old Fridge', x: -31.0, z: -12.6, rotY: HALF_PI, table: 'fridge' })
    this.addContainer({ type: 'kitchen_cabinet', name: 'Kitchen Drawers', label: 'Kitchen Drawers', x: -27.9, z: -9.95, rotY: 0, table: 'kitchen' })
    this.addTable(-27.0, -12.4, 1.2, 0.8, 0.74, 0, '#5a4732')
    this.addChair(-27.0, -13.2, PI)
    this.addChair(-26.0, -11.6, -1.4)
    // living room
    this.addSofa(-20.3, -13.5, 2.5, 0, '#5e5c49', '#726f58')
    this.addTable(-20.5, -11.0, 1.2, 0.65, 0.44, 0, '#5a4632')
    this.addTV(-20.5, -9.75, 0, 0.85)
    this.addRug(-20.4, -12.2, 3.4, 2.5, 0, '#665441')
    this.addStaticShelf(-15.3, -12.4, -HALF_PI, 3.0, 1.9, 0.4, '#5f5140', true)
    this.addClutter(-20.0, -10.7, 0, 6, 0.9)
    // bedroom
    this.addBed(-29.7, -21.5, HALF_PI, 1.55, 2.05, '#59452f', '#887c66')
    this.addContainer({ type: 'wardrobe', name: 'Wardrobe', label: 'Wardrobe', x: -19.0, z: -23.7, rotY: 0, table: 'wardrobe' })
    this.addContainer({ type: 'nightstand', name: 'Nightstand', label: 'Nightstand', x: -26.8, z: -23.6, rotY: 0, table: 'nightstand' })
    this.addContainer({ type: 'dresser', name: 'Dresser', label: 'Dresser', x: -32.1, z: -19.8, rotY: HALF_PI, table: 'nightstand' })
    this.addStaticShelf(-24.2, -20.3, HALF_PI, 1.2, 1.7, 0.3, '#5c5040', false)
    // bathroom
    this.box('plastic', 1.45, 0.55, 0.72, -15.0, 0, -22.7, '#b6b4a2', { uvScale: 1.2 })
    this.box('metal', 0.45, 0.09, 0.4, -15.0, 0.72, -22.6, '#83887f')
    this.box('plastic', 0.4, 0.32, 0.4, -14.2, 0.35, -18.8, '#b9b7a6')
    this.addContainer({ type: 'med_cabinet', name: 'Bathroom Cabinet', label: 'Bathroom Cabinet', x: -14.1, z: -20.1, y: 1.18, rotY: -HALF_PI, collide: false, table: 'nightstand' })
    this.addContainer({ type: 'toolbox', name: 'Toolbox', label: 'Toolbox', x: -15.2, z: -24.0, rotY: -0.5, table: 'toolbox' })
    this.addClutter(-28.0, -18.0, 0, 6, 1.4)
    this.addGroundDecal('blood', -23.6, -17.4, 2.4, 1.0, 0.03)
    this.addPoster('quarantine', -23.5, 1.8, -16.6, 0, 0.75, 1.05)
    this.addRoomLight(-24.0, 2.8, -21.0, '#ffd0a0', 7, 6, 'bulb', 0.66)
    this.spawnPoints.push({ x: -29.0, z: -19.0, type: 'walker', rot: 2.3 })
    this.spawnPoints.push({ x: -19.0, z: -12.5, type: 'infected', rot: 1.0 })
    this.ambientEmitters.push({ type: 'drip', x: -15, z: -22 }, { type: 'buzz', x: -24, z: -21 })
  }

  buildSafehouse() {
    const cx = -27, cz = 14.5, w = 14, d = 11, h = 7.0
    const sh = this.buildShell({
      cx, cz, w, d, h, facing: -1, doorX: -27, doorW: 1.35, ceiling: 3.0,
      floor: 'tileA', wall: 'plaster', wallColor: '#a7ab99',
      frontKey: 'brick', frontColor: '#8f7d69', backKey: 'concrete', backColor: '#9a9688',
      doorLabel: 'Safe House', ceilColor: '#aeb0a1', roofColor: '#625a4c'
    })
    this.addWindow(-31.5, 1.9, 8.96, PI, 2.0, 1.6, { lit: true, litVar: 2, frame: '#7f7a6b', boarded: false })
    this.addWindow(-22.4, 1.9, 8.96, PI, 2.0, 1.6, { lit: false, boarded: true, frame: '#7f7a6b' })
    this.addSign('THE OLD LAUNDRY', -27, 3.25, 8.9, PI, 3.8, 0.62, { bg: '#21352b', fg: '#d7d4b9', accent: '#7fa15f', sub: 'SAFE HOUSE · WATER · RADIO', size: 76, texH: 260, glow: '#4d6a42', glowIntensity: 0.5 })
    // green UV lamp
    this.box('emissive', 0.9, 0.08, 0.22, -27, 2.72, 8.72, '#9adf7c')
    this.addGlow(-27, 2.6, 8.55, '#7fb35f', 2.8, 0.55)
    this.addGlow(-27, 2.2, 8.3, '#6f9d55', 1.6, 0.28)
    this.addPoster('help', -31.4, 1.7, 8.92, PI, 0.8, 1.1)
    this.addGraffiti('SAFE', -22.0, 2.0, 8.93, PI, 1.8, 0.8, '#96b56e', 31)
    // sandbags at entrance
    for (let i = 0; i < 7; i++) {
      const x = -29.6 + (i % 3) * 0.72
      const y = i > 4 ? 0.34 : 0
      this.batches.box('fabric', 0.62, 0.36, 0.42, x, y + 0.16, 7.55, '#8a7f63', { rotY: 0.1 * i, uvScale: 0.6 })
    }
    this.addBlobShadow(-27, 8.7, 4.6, 3.0, 0, 0.7)

    // interior
    this.addWasher(-31.5, 11.0, 0, '#b7b8a8')
    this.addWasher(-30.4, 11.0, 0, '#b0b1a2')
    this.addWasher(-29.3, 11.0, 0, '#bbbcaa')
    this.addWasher(-31.5, 12.4, 0, '#b3b4a4')
    this.addWasher(-30.4, 12.4, 0, '#adae9f')
    this.box('wood', 3.6, 1.0, 0.65, -29.9, 0, 14.3, '#655540', { uvScale: 1.2 })
    this.box('concrete', 3.7, 0.05, 0.7, -29.9, 1.0, 14.3, '#48443a')
    this.addSofa(-23.2, 16.8, 2.4, PI, '#5f6250', '#727458')
    this.addRug(-25.3, 15.8, 4.4, 3.2, 0, '#70604b')
    this.addTable(-25.3, 14.9, 1.8, 1.0, 0.76, 0, '#5d4935')
    // map on table
    this.batches.plane('paper', 1.3, 0.95, -25.3, 0.78, 14.9, '#d3c8ad', { rotX: -HALF_PI })
    this.box('emissive', 0.12, 0.02, 0.12, -25.3, 0.8, 14.9, '#ffbc73')
    this.addCot(-21.4, 12.2, 0)
    this.addContainer({ type: 'suitcase', name: 'Supply Crate', label: 'Safe House Supplies', x: -30.7, z: 16.9, rotY: 0.3, table: 'safehouse', items: [stack('water', 2), stack('canned_food', 1), stack('bandage', 2), stack('repair_kit', 1)] })
    this.addContainer({ type: 'locker', name: 'Weapon Locker', label: 'Weapon Locker', x: -20.8, z: 18.4, rotY: -HALF_PI, table: 'safehouse', items: [stack('pistol', 1), stack('pipe', 1), stack('pistol_ammo', 8), stack('flare', 1), stack('bandage', 2)] })
    this.addContainer({ type: 'med_cabinet', name: 'First Aid Cabinet', label: 'First Aid Cabinet', x: -20.0, z: 15.4, y: 1.2, rotY: -HALF_PI, collide: false, table: 'med_cabinet' })
    this.addStaticShelf(-32.1, 17.6, HALF_PI, 2.2, 1.8, 0.34, '#5e5140', true)
    // radio
    this.box('plastic', 0.4, 0.24, 0.2, -28.7, 1.02, 14.1, '#3f443b')
    this.box('metal', 0.06, 0.18, 0.04, -28.5, 1.15, 14.08, '#8d8a76')
    this.addGlow(-28.7, 1.1, 13.95, '#d7a566', 0.4, 0.24)
    this.addRoomLight(-26.5, 2.85, 15.0, '#ffd0a2', 9, 7, 'bulb', 0.2)
    this.addSign('YOU ARE SAFE', -27, 2.55, 9.2, PI, 2.6, 0.3, { bg: '#1c2b23', fg: '#9fc27d', accent: '#6c8a57', size: 84, texH: 140, border: false })
    this.addClutter(-28.2, 17.2, 0, 4, 0.8)
    this.addGroundDecal('blood', -29.7, 9.7, 1.4, 0.8, 0.032)
    this.safeZones.push({ x: -27, z: 14.5, r: 5.2, name: 'The Old Laundry' })
    this.questPoints.safehouse = new THREE.Vector3(-27, 1.6, 9.5)
    this.ambientEmitters.push({ type: 'safe', x: -27, z: 14.5 })
  }

  // ---------------------------------------------------------------- facade details
  addBalcony(x, y, z, w, depth, rotY = 0) {
    const B = this.batches
    const [cx, cz] = localPlace(x, z, rotY, 0, depth / 2)
    B.box('concrete', w, 0.16, depth, cx, y, cz, '#8f8777', { rotY, uvScale: 1.4 })
    const [rx, rz] = localPlace(x, z, rotY, 0, depth)
    B.box('metal', w, 0.06, 0.06, rx, y + 1.02, rz, '#474741', { rotY })
    B.box('metal', w, 0.04, 0.04, rx, y + 0.55, rz, '#474741', { rotY })
    for (let i = 0; i <= 6; i++) {
      const [px, pz] = localPlace(x, z, rotY, -w / 2 + (i / 6) * w, depth)
      B.box('metal', 0.045, 1.05, 0.045, px, y + 0.54, pz, '#474741', { rotY })
    }
    for (const side of [-1, 1]) {
      const [sx, sz] = localPlace(x, z, rotY, side * w / 2, depth / 2)
      B.box('metal', 0.05, 1.02, depth, sx, y + 0.54, sz, '#474741', { rotY })
    }
    // laundry / plant
    if (this.rng() < 0.6) {
      const cols = ['#a8a08a', '#7b8876', '#b39a7e']
      for (let i = 0; i < 3; i++) {
        const [lx, lz] = localPlace(x, z, rotY, -w * 0.3 + i * 0.55, depth - 0.16)
        B.plane('fabric', 0.34, 0.65 + this.rng() * 0.2, lx, y + 0.68, lz, choose(this.rng, cols), { rotY, uvScale: 0 })
      }
    }
    if (this.rng() < 0.5) {
      const [px, pz] = localPlace(x, z, rotY, w * 0.35, depth - 0.28)
      B.cylinder('plastic', 0.16, 0.12, 0.26, 8, px, y + 0.21, pz, '#8d5d42')
      B.plane('weeds', 0.4, 0.4, px, y + 0.42, pz, '#b9b17b', { rotY, uvScale: 0 })
    }
    this.addBlobShadow(cx, cz, w, depth, rotY, 0.35)
  }

  addFireEscape(x, z, height) {
    const B = this.batches
    B.box('metal', 2.6, 0.08, 1.15, x, 4.4, z - 0.5, '#4b4b45', { uvScale: 1.4 })
    B.box('metal', 2.6, 0.08, 1.15, x, 7.2, z - 0.5, '#4b4b45', { uvScale: 1.4 })
    for (let i = 0; i < 7; i++) {
      const px = x - 1.25 + i * 0.42
      B.box('metal', 0.035, 0.9, 0.035, px, 4.9, z - 1.05, '#43433e')
      B.box('metal', 0.035, 0.9, 0.035, px, 7.7, z - 1.05, '#43433e')
    }
    B.box('metal', 2.6, 0.05, 0.05, x, 5.85, z - 1.05, '#43433e')
    B.box('metal', 2.6, 0.05, 0.05, x, 5.4, z - 1.05, '#43433e')
    B.box('metal', 2.6, 0.05, 0.05, x, 8.1, z - 1.05, '#43433e')
    // ladder between platforms
    for (let i = 0; i < 10; i++) B.box('metal', 0.5, 0.04, 0.04, x + 0.8, 4.55 + i * 0.28, z - 1.02, '#4a4a44')
    B.box('metal', 0.04, 2.9, 0.04, x + 0.55, 5.95, z - 1.02, '#4a4a44')
    B.box('metal', 0.04, 2.9, 0.04, x + 1.05, 5.95, z - 1.02, '#4a4a44')
    // brackets
    for (const px of [x - 1.2, x + 1.2]) {
      B.box('metal', 0.06, 0.06, 1.1, px, 4.76, z - 0.6, '#3f3f3a', { rotX: -0.45 })
    }
  }

  addAC(x, y, z, rotY) {
    const B = this.batches
    const [cx, cz] = localPlace(x, z, rotY, 0, 0.35)
    B.box('metal', 0.9, 0.58, 0.55, cx, y, cz, '#797b71', { rotY })
    const [fx, fz] = localPlace(x, z, rotY, 0.25, 0.64)
    B.cylinder('dark', 0.21, 0.21, 0.02, 12, fx, y, fz, '#252621', { rotX: HALF_PI })
    B.box('metal', 0.06, 0.06, 0.5, ...(() => { const [a, b] = localPlace(x, z, rotY, 0, 0.1); return [a, y - 0.35, b] })(), '#494a43')
    // drip stain
    B.plane('blood2', 0.3, 1.2, ...(() => { const [a, b] = localPlace(x, z, rotY, 0, 0.04); return [a, y - 1.2, b] })(), '#3b3a32', { rotY })
  }

  addPipes(x, z1, z2, rotY) {
    const B = this.batches
    const zMid = (z1 + z2) / 2
    const len = Math.abs(z2 - z1)
    const [px, pz] = localPlace(x, zMid, rotY, 0, 0)
    B.cylinder('metal', 0.06, 0.06, len, 8, px, len / 2 + 0.4, pz, '#6d6a5c', { rotX: HALF_PI })
    B.cylinder('metal', 0.085, 0.085, len, 8, px + 0.12, len / 2 + 0.4, pz, '#5a574b', { rotX: HALF_PI })
    for (let i = 0; i < 5; i++) {
      B.box('metal', 0.18, 0.06, 0.06, px, 0.8 + i * (len / 4.5), pz, '#4d4b43')
    }
  }

  addIvyWall(x, y, z, rotY, w, h, seed) {
    const r = mulberry32(seed * 17 + 3)
    for (let i = 0; i < 7; i++) {
      const ox = (r() - 0.5) * w, oy = (r() - 0.5) * h
      const [px, pz] = localPlace(x, z, rotY, ox, 0.03)
      this.batches.plane('ivy', 0.7 + r() * 1.5, 0.7 + r() * 1.5, px, y + oy, pz, '#ffffff', { rotY, rotZ: r() * PI, uvScale: 0 })
    }
  }

  // ---------------------------------------------------------------- filler city
  buildFillerBuildings() {
    const shops = ['CAFÉ NABIL', 'HOTEL MARINA', 'HARDWARE', 'FURNITURE', 'BAKERY', 'PHONE REPAIR', 'BARBER', 'LAUNDRY', 'PHARMACY', 'BOOKS']
    const north = [
      { cx: 61, cz: -14.5, w: 10, d: 11, h: 6.6, style: 'brick', facing: 1, shop: 0, boarded: true, seed: 101 },
      { cx: 79, cz: -22, w: 18, d: 20, h: 11.4, style: 'plaster', facing: 1, shop: 3, seed: 102 },
      { cx: 53.5, cz: -39, w: 14, d: 14, h: 13.0, style: 'brick', facing: 1, seed: 103, noFront: true }
    ]
    const south = [
      { cx: 30, cz: 15, w: 12, d: 12, h: 8.4, style: 'plaster', facing: -1, shop: 6, boarded: true, seed: 111, sign: 'CLINIC' },
      { cx: 61, cz: 16, w: 14, d: 14, h: 8.2, style: 'brick', facing: -1, shop: 4, seed: 112 },
      { cx: 79, cz: 17, w: 18, d: 18, h: 10.0, style: 'plaster', facing: -1, shop: 7, seed: 113 },
      { cx: 40, cz: 25, w: 9, d: 10, h: 7.5, style: 'concrete', facing: -1, seed: 114, noFront: true }
    ]
    for (const b of north) this.addFillerBuilding({ ...b, name: shops[b.shop] })
    for (const b of south) this.addFillerBuilding({ ...b, name: shops[b.shop], sign: b.sign })
  }

  addFillerBuilding({ cx, cz, w, d, h, facing = 1, style = 'plaster', shop = 0, name = '', boarded = false, seed = 1, sign = null, noFront = false }) {
    const r = mulberry32(seed * 131 + 7)
    const B = this.batches
    const frontZ = facing > 0 ? cz + d / 2 : cz - d / 2
    const backZ = facing > 0 ? cz - d / 2 : cz + d / 2
    const mat = style === 'brick' ? 'brick' : style === 'concrete' ? 'concrete' : 'plaster'
    const col = style === 'brick' ? choose(r, ['#8e7c69', '#9b8470', '#857364', '#a08a72']) : style === 'concrete' ? choose(r, ['#98978b', '#8d8c82', '#a3a093']) : choose(r, ['#b5a98f', '#ad9f88', '#b9ad96', '#a99b83', '#c0b39a'])
    // main volume
    this.box(mat, w, h, d, cx, 0, cz, col, { uvScale: 2.4 })
    this.addColliderBox(cx, cz, w, d, 0, h, 'building')
    // roof cap, parapet and roof clutter
    this.box('dark', w + 0.4, 0.26, d + 0.4, cx, h - 0.1, cz, '#37342d')
    for (const side of [-1, 1]) {
      this.box(mat, w, 0.6, 0.24, cx, h, cz + side * (d / 2 - 0.1), col)
      this.box(mat, 0.24, 0.6, d, cx + side * (w / 2 - 0.1), h, cz, col)
    }
    this.addRoofDetails(cx, cz, w, d, h, r)
    // base band
    this.batches.box(mat, w + 0.15, 0.7, d + 0.15, cx, 0.35, cz, '#766e60', { uvScale: 2 })
    // cornice
    this.batches.box('concrete', w + 0.35, 0.18, d + 0.35, cx, h - 0.65, cz, '#a69b85', { uvScale: 2 })
    // upper windows
    const floors = Math.max(1, Math.floor((h - 4.4) / 3.0))
    const cols = Math.max(2, Math.floor(w / 3.0))
    if (!noFront) this.addWindowGrid(cx - w / 2 + 1.2, cx + w / 2 - 1.2, frontZ + facing * 0.045, facing, 4.4, floors, cols, seed * 17)
    // side windows on the street-facing corner
    if (w > 10) {
      const sideX = cx + w / 2 + 0.045
      const rot = HALF_PI
      for (let f = 0; f < Math.max(1, floors - 1); f++) {
        for (let i = 0; i < 2; i++) {
          this.addWindowFloor(sideX, 4.5 + f * 3.0, cz + d * 0.12 + i * 2.4, rot, 1.15, 1.55, seed + 300 + f * 13 + i)
        }
      }
    }
    // ground floor storefront
    if (!noFront) {
      const doorX = cx + (r() - 0.5) * w * 0.25
      const gz = frontZ + facing * 0.05
      const rotY = facing > 0 ? 0 : PI
      // door alcove
      B.box('wood', 1.1, 2.25, 0.1, doorX, 1.125, gz, '#5c4a36', { rotY, uvScale: 1.2 })
      B.box('concrete', 0.12, 2.4, 0.25, doorX - 0.62, 1.2, gz, '#91846f', { rotY })
      B.box('concrete', 0.12, 2.4, 0.25, doorX + 0.62, 1.2, gz, '#91846f', { rotY })
      B.box('concrete', 1.34, 0.12, 0.25, doorX, 2.42, gz, '#91846f', { rotY })
      // shop window
      const wx = cx + (r() < 0.5 ? -1 : 1) * w * 0.24
      this.addWindow(wx, 1.55, frontZ + facing * 0.045, rotY, Math.min(3.8, w * 0.32), 1.85, {
        lit: !boarded && r() < 0.45, litVar: 1 + Math.floor(r() * 4), broken: boarded || r() < 0.25,
        boarded, frame: '#7e7461', sill: true
      })
      // awning
      if (!boarded && r() < 0.55) {
        const aw = Math.min(3.8, w * 0.35)
        B.box(r() < 0.5 ? 'awning' : 'awningGreen', aw, 0.07, 1.35, wx, 2.62, frontZ + facing * 0.75, '#ffffff', { rotX: facing > 0 ? 0.13 : -0.13, rotY: 0 })
        for (let i = 0; i < 8; i++) B.box('awning', aw / 9, 0.2, 0.05, wx - aw / 2 + i * (aw / 8), 2.48, frontZ + facing * 1.4, '#ffffff')
      }
      // shop sign
      const label = sign || name || 'CAFÉ NABIL'
      this.addSign(label, cx, 3.25, frontZ + facing * 0.05, rotY, Math.min(4.4, w * 0.48), 0.56, {
        bg: choose(r, ['#26261f', '#34302a', '#2a332c', '#3a2b25']), fg: choose(r, ['#d8cfb8', '#cfc5aa', '#c8d0bc']),
        accent: choose(r, ['#a34a32', '#8b6e3e', '#5f7d5d']), size: 76, texH: 220,
        glow: '#2a2116', glowIntensity: 0.1, border: r() < 0.6
      })
      if (boarded) {
        for (let i = 0; i < 3; i++) B.box('wood', 2.4, 0.18, 0.05, wx, 1.0 + i * 0.5, frontZ + facing * 0.075, '#6c5943', { rotY, rotZ: (i % 2 ? 1 : -1) * 0.02 })
        this.addGraffiti('CONDEMNED', wx, 1.65, frontZ + facing * 0.085, rotY, 2.4, 1.0, '#8a3c2b', seed + 6)
      }
      // clutter at shopfront
      if (r() < 0.5) this.addClutter(cx + (r() - 0.5) * w * 0.6, frontZ + facing * 0.45, 0, 4, 0.8)
    }
    // wires / AC / graffiti
    if (r() < 0.6) this.addAC(cx + w / 2 + 0.06, 4.2 + r() * 2.4, cz + (r() - 0.5) * d * 0.5, HALF_PI)
    if (r() < 0.5) this.addPipes(cx - w / 2 - 0.08, cz - d * 0.3, cz + d * 0.3, -HALF_PI)
    if (r() < 0.65) {
      const texts = ['RUN', 'HELP', 'NO WATER', 'KEEP OUT', 'DEAD INSIDE', 'SIGNAL LOST', 'THEY COME AT NIGHT']
      this.addGraffiti(choose(r, texts), cx + w / 2 + 0.07, 1.7 + r() * 1.5, cz + (r() - 0.5) * d * 0.6, HALF_PI, 3.0 + r() * 2, 1.4 + r() * 0.8, choose(r, ['#8f3a2a', '#736f42', '#6b3b31', '#3f5a51']), seed + 11)
    }
    if (r() < 0.5) this.addPoster(r() < 0.5 ? 'missing' : 'quarantine', cx - w / 2 + 0.8, 1.7, frontZ + facing * 0.07, facing > 0 ? 0 : PI, 0.8, 1.14)
    this.addBlobShadow(cx, cz, w + 3, d + 3, 0, 0.45)
    // rooftop fire escape silhouette on some
    if (r() < 0.25) this.addFireEscape(cx + w * 0.22, frontZ + facing * 0.08, h)
  }

  buildBackdrop() {
    const B = this.batches
    const r = mulberry32(9090)
    // back rows & skyline
    const blocks = [
      [-31, -45, 18, 16, 18.5, '#8d8272'], [-9, -47, 23, 18, 23.2, '#948674'], [19, -44, 19, 15, 17.0, '#8a7c6b'],
      [44, -46, 22, 16, 27.0, '#7f7567'], [72, -45, 18, 16, 20.0, '#8f8373'], [90, -39, 20, 18, 24.0, '#7e7364'],
      [-70, -48, 22, 18, 25.0, '#857a6b'], [-92, -40, 20, 18, 19.0, '#8e8272'],
      [-27, 37, 22, 16, 16.2, '#8f8373'], [1, 40, 18, 15, 13.5, '#988a78'], [27, 39, 20, 14, 19.5, '#877c6c'],
      [55, 38, 19, 16, 15.5, '#948674'], [79, 39, 17, 15, 18.0, '#897d6d'], [96, 35, 18, 17, 22.0, '#7e7365']
    ]
    for (const [x, z, w, d, h, col] of blocks) {
      B.box('plaster', w, h, d, x, h / 2, z, col, { uvScale: 2.6 })
      B.box('dark', w + 0.5, 0.3, d + 0.5, x, h, z, '#36332c')
      this.addColliderBox(x, z, w, d, 0, h, 'building')
      // windows on the side facing the playable street
      const front = z < 0 ? z + d / 2 : z - d / 2
      const facing = z < 0 ? 1 : -1
      for (let f = 0; f < Math.floor(h / 3.4); f++) {
        for (let i = 0; i < Math.floor(w / 2.8); i++) {
          const wx = x - w / 2 + 1.3 + i * 2.8
          const wy = 3.1 + f * 3.3
          const lit = r() < 0.12
          this.addWindow(wx, wy, front + facing * 0.03, facing > 0 ? 0 : PI, 1.1, 1.5, { lit, litVar: 1 + Math.floor(r() * 4), broken: r() < 0.3, sill: false })
        }
      }
      this.addRoofDetails(x, z, w, d, h, r)
    }
    // distant towers beyond playable bounds
    for (let i = 0; i < 22; i++) {
      const side = i % 2 ? 1 : -1
      const x = rand(r, -130, 130)
      const z = side * rand(r, 62, 120)
      const w = rand(r, 8, 22), d = rand(r, 8, 20), h = rand(r, 12, 42)
      const col = choose(r, ['#6d665b', '#786f62', '#625d53', '#7d7466'])
      B.box('plaster', w, h, d, x, h / 2, z, col, { uvScale: 3.4 })
      B.box('dark', w + 0.3, 0.25, d + 0.3, x, h, z, '#302e28')
      for (let f = 0; f < Math.floor(h / 4); f++) {
        for (let k = 0; k < Math.max(1, Math.floor(w / 4)); k++) {
          if (r() < 0.55) continue
          const wx = x - w / 2 + 1.4 + k * 4
          const wy = 3.2 + f * 3.8
          const lit = r() < 0.1
          B.plane(lit ? 'lit' + (1 + Math.floor(r() * 4)) : 'windowPane', 0.9, 1.2, wx, wy, z + (z < 0 ? d / 2 + 0.03 : -d / 2 - 0.03), '#ffffff', { rotY: z < 0 ? 0 : PI })
        }
      }
    }
    // far east/west end of avenue
    for (const [x, z, w, d, h] of [[-100, -12, 18, 28, 25], [-103, 22, 20, 22, 18], [103, -18, 22, 26, 29], [104, 18, 18, 24, 17]]) {
      B.box('plaster', w, h, d, x, h / 2, z, '#7a7265', { uvScale: 3 })
      B.box('dark', w + 0.4, 0.3, d + 0.4, x, h, z, '#302e28')
    }
    // landmark minaret and dome (distant, hazy)
    const mx = -64, mz = -78
    B.cylinder('concrete', 1.25, 1.7, 40, 12, mx, 20, mz, '#8f8878')
    B.cylinder('concrete', 2.4, 2.4, 2.0, 12, mx, 40.5, mz, '#9a9382')
    B.cylinder('metal', 0.12, 0.45, 7.5, 8, mx, 45.0, mz, '#6f6759')
    for (let i = 0; i < 3; i++) B.cylinder('concrete', 2.6, 2.6, 0.4, 12, mx, 12 + i * 10, mz, '#aaa190')
    const dome = new THREE.Mesh(new THREE.SphereGeometry(12, 20, 10, 0, PI * 2, 0, HALF_PI), new THREE.MeshStandardMaterial({ color: 0x8b8b7c, roughness: 0.9, metalness: 0.05 }))
    dome.position.set(mx + 14, 7, mz + 2)
    dome.scale.y = 0.8
    this.root.add(dome)
    B.box('concrete', 22, 10, 18, mx + 14, 5, mz + 2, '#8d8778', { uvScale: 3 })
    B.cylinder('concrete', 1.0, 1.3, 30, 10, mx + 26, 15, mz - 3, '#8c8373')
    B.cylinder('metal', 0.08, 0.3, 5.4, 6, mx + 26, 32, mz - 3, '#6d6558')
    // broken construction crane
    B.box('metal', 0.6, 34, 0.6, 74, 17, -63, '#6d6656', { rotZ: 0.04 })
    B.box('metal', 28, 0.5, 0.5, 84, 33.5, -63, '#6d6656', { rotZ: -0.02 })
    for (let i = 0; i < 12; i++) B.box('metal', 0.2, 2.2, 0.2, 72 + i * 2.2, 33.4, -63, '#5e584a', { rotZ: 0.45 })
    // ridge of broken buildings along horizon
    for (let i = 0; i < 14; i++) {
      const x = -120 + i * 18
      B.box('plaster', 12 + r() * 10, 18 + r() * 24, 14, x, 10, -135 - r() * 30, '#5f5a50', { uvScale: 4 })
    }
    // smoke columns
    const smokeTex = TEX.smokeTexture()
    for (const [x, z, h, s] of [[68, -40, 16, 12], [-45, -42, 14, 10], [20, -112, 22, 18], [96, 30, 18, 13]]) {
      for (let i = 0; i < 5; i++) {
        const mat = new THREE.SpriteMaterial({ map: smokeTex, color: 0x55544f, transparent: true, opacity: 0.15, depthWrite: false })
        const sp = new THREE.Sprite(mat)
        sp.position.set(x + rand(r, -2, 2), h + i * 6, z + rand(r, -2, 2))
        sp.scale.set(s + i * 3, s + i * 3, 1)
        sp.userData = { baseY: sp.position.y, baseX: sp.position.x, phase: r() * 10, speed: 0.12 + r() * 0.1 }
        this.root.add(sp)
        this.smoke.push(sp)
      }
    }
    // birds - simple distant silhouettes
    // overhead cables across the avenue
    for (let i = 0; i < 9; i++) {
      const x = -80 + i * 18
      this.addCable(new THREE.Vector3(x, 7.8 + r() * 1.2, -8.9), new THREE.Vector3(x + rand(r, -3, 3), 7.6 + r() * 1.2, 8.9), 1.2)
      this.addCable(new THREE.Vector3(x, 6.8 + r(), -8.9), new THREE.Vector3(x + rand(r, -2, 2), 6.6 + r(), 8.9), 1.8)
    }
    // pipe crossing, laundry lines
    for (let i = 0; i < 5; i++) {
      const x = -34 + i * 17
      this.addCable(new THREE.Vector3(x, 5.6, -8.9), new THREE.Vector3(x + 4, 5.3, 8.9), 2.0, 0x4d4b42)
    }
  }

  addCable(a, b, sag = 1.2, color = 0x272620) {
    const mid = a.clone().lerp(b, 0.5)
    mid.y -= sag
    const curve = new THREE.QuadraticBezierCurve3(a, mid, b)
    const pts = curve.getPoints(16)
    const geo = new THREE.BufferGeometry().setFromPoints(pts)
    const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.85 }))
    this.root.add(line)
  }

  // ---------------------------------------------------------------- street props
  addCar(x, z, rotY, color, { burnt = false, body = 4.25, width = 1.86, tall = 0 } = {}) {
    const B = this.batches
    const P = (lx, lz) => localPlace(x, z, rotY, lx, lz)
    const paint = burnt ? '#2b2823' : color
    let [cx, cz] = P(0, 0)
    B.box(burnt ? 'dark' : 'metal', body, 0.58 + tall, width, cx, 0.62 + tall * 0.5, cz, paint, { rotY, uvScale: 1.7 })
    ;[cx, cz] = P(-0.1, 0)
    B.box(burnt ? 'dark' : 'metal', body * 0.5, 0.56, width * 0.88, cx, 1.16 + tall * 0.6, cz, burnt ? '#312e28' : paint, { rotY, uvScale: 1.4 })
    ;[cx, cz] = P(-0.12, 0)
    B.box(burnt ? 'dark' : 'metal', body * 0.44, 0.07, width * 0.8, cx, 1.47 + tall * 0.6, cz, burnt ? '#26241f' : '#3a3a35', { rotY, uvScale: 1 })
    if (!burnt) {
      for (const side of [-1, 1]) {
        ;[cx, cz] = P(0.62, side * width * 0.43)
        B.plane('glass', body * 0.34, 0.4, cx, 1.19, cz, '#9fb0ad', { rotY: rotY + (side > 0 ? 0 : PI) })
        ;[cx, cz] = P(-0.62, side * width * 0.43)
        B.plane('glass', body * 0.3, 0.4, cx, 1.19, cz, '#9fb0ad', { rotY: rotY + (side > 0 ? 0 : PI) })
      }
      // windscreen and rear glass
      ;[cx, cz] = P(0.93, 0)
      B.plane('glass', width * 0.78, 0.42, cx, 1.2, cz, '#a7b5b1', { rotY: rotY + HALF_PI })
      ;[cx, cz] = P(-1.12, 0)
      B.plane('glass', width * 0.72, 0.38, cx, 1.18, cz, '#9faeab', { rotY: rotY + HALF_PI })
      // lights
      for (const side of [-1, 1]) {
        ;[cx, cz] = P(body / 2 - 0.02, side * width * 0.32)
        B.box('emissive', 0.04, 0.13, 0.28, cx, 0.66, cz, '#d9c69a', { rotY })
        ;[cx, cz] = P(-body / 2 + 0.02, side * width * 0.33)
        B.box('emissive', 0.04, 0.12, 0.24, cx, 0.66, cz, '#8e3a2e', { rotY })
      }
      // bumpers and mirrors
      ;[cx, cz] = P(body / 2 + 0.04, 0)
      B.box('metal', 0.12, 0.17, width * 0.96, cx, 0.42, cz, '#575750', { rotY })
      ;[cx, cz] = P(-body / 2 - 0.04, 0)
      B.box('metal', 0.12, 0.17, width * 0.96, cx, 0.42, cz, '#55554e', { rotY })
      for (const side of [-1, 1]) {
        ;[cx, cz] = P(0.82, side * (width * 0.53))
        B.box('plastic', 0.13, 0.1, 0.2, cx, 1.18, cz, '#33352f', { rotY })
      }
    } else {
      // burnt shell: broken windows, open hood, soot
      ;[cx, cz] = P(1.42, 0)
      B.box('dark', 1.2, 0.04, width * 0.82, cx, 0.95 + tall, cz, '#1c1b18', { rotY, rotX: 0.26 })
      ;[cx, cz] = P(-1.6, 0)
      B.box('dark', 0.9, 0.03, width * 0.7, cx, 1.5, cz, '#1e1d19', { rotY, rotZ: -0.4 })
      this.addGlow(x, 1.05, z, '#ff8a3c', 1.2, 0.1)
    }
    // wheels
    for (const a of [-1.36, 1.42]) {
      for (const side of [-1, 1]) {
        ;[cx, cz] = P(a, side * width * 0.5)
        B.cylinder('rubber', 0.33, 0.33, 0.22, 10, cx, 0.33, cz, burnt ? '#141412' : '#1d1e1a', { rotX: HALF_PI })
        ;[cx, cz] = P(a, side * width * 0.51)
        B.cylinder('metal', 0.17, 0.17, 0.03, 8, cx, 0.33, cz, burnt ? '#302e29' : '#77796f', { rotX: HALF_PI })
      }
    }
    this.addBlobShadow(x, z, body + 0.8, width + 0.9, rotY, burnt ? 0.25 : 0.55)
    this.addColliderBox(x, z, body, width, 0, 1.7, 'car', rotY)
  }

  addBus(x, z, rotY) {
    const B = this.batches
    const P = (lx, lz) => localPlace(x, z, rotY, lx, lz)
    let [cx, cz] = P(0, 0)
    B.box('metal', 11.2, 2.5, 2.55, cx, 1.55, cz, '#6f7364', { rotY, uvScale: 2.4 })
    ;[cx, cz] = P(0, 0)
    B.box('dark', 11.0, 0.28, 2.45, cx, 2.9, cz, '#3a3b34', { rotY })
    ;[cx, cz] = P(0.2, 0)
    B.box('metal', 10.6, 0.35, 2.4, cx, 0.42, cz, '#5b5e51', { rotY })
    // window band
    for (let i = 0; i < 8; i++) {
      for (const side of [-1, 1]) {
        ;[cx, cz] = P(-4.2 + i * 1.22, side * 1.29)
        B.plane('glass', 1.03, 0.95, cx, 2.05, cz, '#9aacaa', { rotY: rotY + (side > 0 ? 0 : PI) })
      }
    }
    // destination board
    ;[cx, cz] = P(5.58, 0)
    this.addSign('HARBOR CITY TRANSIT', cx, 2.72, cz, rotY + HALF_PI, 1.9, 0.32, { bg: '#232720', fg: '#d6b45e', accent: '#7b5f2c', size: 68, texH: 120, border: false, backing: false, glow: '#3b3117', glowIntensity: 0.3 })
    // wheels
    for (const a of [-3.6, 3.7]) {
      for (const side of [-1, 1]) {
        ;[cx, cz] = P(a, side * 1.3)
        B.cylinder('rubber', 0.46, 0.46, 0.3, 12, cx, 0.46, cz, '#161714', { rotX: HALF_PI })
        ;[cx, cz] = P(a, side * 1.31)
        B.cylinder('metal', 0.23, 0.23, 0.04, 8, cx, 0.46, cz, '#6c6e63', { rotX: HALF_PI })
      }
    }
    // doors, rust streaks
    ;[cx, cz] = P(3.0, -1.29)
    B.box('metal', 1.0, 1.9, 0.04, cx, 1.2, cz, '#5b5f52', { rotY })
    ;[cx, cz] = P(-2.2, 1.29)
    B.box('metal', 1.0, 1.9, 0.04, cx, 1.2, cz, '#585c4f', { rotY })
    this.addGroundDecal('decalOil', x - 2, z + 1.5, 3.4, 0.6, 0.027, '#6b6154')
    this.addBlobShadow(x, z, 12.6, 3.6, rotY, 0.55)
    this.addColliderBox(x, z, 11.2, 2.55, 0, 3.2, 'bus', rotY)
  }

  addAmbulance(x, z, rotY) {
    const B = this.batches
    const P = (lx, lz) => localPlace(x, z, rotY, lx, lz)
    let [cx, cz] = P(0, 0)
    B.box('metal', 4.9, 2.0, 2.1, cx, 1.28, cz, '#c8c6b6', { rotY, uvScale: 1.8 })
    ;[cx, cz] = P(1.55, 0)
    B.box('metal', 1.5, 1.15, 1.98, cx, 1.05, cz, '#bcbaa9', { rotY })
    ;[cx, cz] = P(1.75, 0)
    B.plane('glass', 1.45, 0.62, cx, 1.55, cz, '#9aacaa', { rotY: rotY + HALF_PI })
    // red stripe and markings
    ;[cx, cz] = P(0, 0)
    B.box('emissive', 4.92, 0.16, 2.12, cx, 1.06, cz, '#9c3a2d', { rotY })
    ;[cx, cz] = P(-1.0, 1.07)
    B.plane('paper', 0.7, 0.5, cx, 1.55, cz, '#b6c0ad', { rotY })
    // light bar
    ;[cx, cz] = P(0.65, 0)
    B.box('metal', 1.2, 0.1, 1.7, cx, 2.33, cz, '#33352f', { rotY })
    for (const side of [-1, 1]) {
      ;[cx, cz] = P(0.65, side * 0.55)
      B.box('emissive', 0.34, 0.16, 0.5, cx, 2.44, cz, side > 0 ? '#c04435' : '#5b7fa0', { rotY })
    }
    for (const a of [-1.55, 1.75]) {
      for (const side of [-1, 1]) {
        ;[cx, cz] = P(a, side * 1.0)
        B.cylinder('rubber', 0.37, 0.37, 0.24, 10, cx, 0.37, cz, '#1a1b17', { rotX: HALF_PI })
      }
    }
    this.addBlobShadow(x, z, 5.6, 3.0, rotY, 0.55)
    this.addColliderBox(x, z, 4.9, 2.1, 0, 2.4, 'ambulance', rotY)
    this.addGlow(x + 1.4, 1.35, z, '#d9a06a', 1.6, 0.18)
  }

  addBarrier(x, z, rotY, kind = 'concrete') {
    const B = this.batches
    if (kind === 'concrete') {
      B.box('concrete', 2.2, 0.52, 0.55, x, 0.48, z, '#a5a08f', { rotY, uvScale: 1.2 })
      B.box('concrete', 2.25, 0.22, 0.6, x, 0.09, z, '#8f8a7b', { rotY })
      B.box('hazard', 2.2, 0.2, 0.57, x, 0.72, z, '#ffffff', { rotY })
      this.addColliderBox(x, z, 2.2, 0.6, 0, 1.1, 'barrier', rotY)
    } else {
      // metal crowd barrier
      B.box('metal', 2.4, 0.06, 0.06, x, 1.02, z, '#71756c', { rotY })
      B.box('metal', 2.4, 0.06, 0.06, x, 0.2, z, '#71756c', { rotY })
      for (let i = 0; i < 8; i++) {
        const [px, pz] = localPlace(x, z, rotY, -1.1 + i * 0.31, 0)
        B.box('metal', 0.035, 0.85, 0.035, px, 0.6, pz, '#787c72', { rotY })
      }
      B.box('metal', 2.4, 0.3, 0.86, x, 0.0, z, '#5e6259', { rotY })
      this.addColliderBox(x, z, 2.4, 0.3, 0, 1.15, 'barrier', rotY)
    }
    this.addBlobShadow(x, z, 2.8, 1.1, rotY, 0.4)
  }

  addSandbagWall(x, z, rotY, length = 3.4, rows = 3) {
    const B = this.batches
    const bags = Math.max(3, Math.round(length / 0.62))
    for (let row = 0; row < rows; row++) {
      for (let i = 0; i < bags - row; i++) {
        const [px, pz] = localPlace(x, z, rotY, -length / 2 + 0.35 + i * 0.62 + row * 0.31, 0)
        B.box('fabric', 0.64, 0.28, 0.44, px, 0.15 + row * 0.27, pz, row % 2 ? '#8b8063' : '#93876a', { rotY, rotZ: (i % 3 - 1) * 0.03, uvScale: 0.7 })
      }
    }
    this.addColliderBox(x, z, length, 0.6, 0, rows * 0.3, 'sandbags', rotY)
  }

  addFireBarrel(x, z, scale = 1) {
    const B = this.batches
    B.cylinder('metal', 0.34, 0.32, 0.92, 12, x, 0.46, z, '#4a443a')
    B.cylinder('dark', 0.36, 0.36, 0.1, 12, x, 0.94, z, '#1d1c18')
    for (let i = 0; i < 3; i++) B.box('metal', 0.05, 0.05, 0.7, x, 0.2 + i * 0.3, z, '#38332b', { rotY: i * 0.4 })
    const tex = TEX.smokeTexture()
    const group = new THREE.Group()
    group.position.set(x, 1.05, z)
    const sprites = []
    for (let i = 0; i < 5; i++) {
      const mat = new THREE.SpriteMaterial({
        map: tex, color: new THREE.Color(i < 2 ? '#ffd27a' : '#ff7a2e'),
        transparent: true, opacity: 0.62 - i * 0.09, depthWrite: false, blending: THREE.AdditiveBlending
      })
      const sp = new THREE.Sprite(mat)
      sp.scale.setScalar(scale * (0.7 - i * 0.06))
      sp.position.y = i * 0.22
      group.add(sp)
      sprites.push(sp)
    }
    this.root.add(group)
    const light = new THREE.PointLight(new THREE.Color('#ff8a3a'), 7, 9, 2)
    light.position.set(x, 1.5, z)
    this.scene.add(light)
    this.pointLights.push(light)
    this.flames.push({ group, sprites, light, base: 7, seed: this.rng() * 60, scale })
    this.addGlow(x, 1.15, z, '#ff7c30', 1.8, 0.34)
    // scorch
    this.addGroundDecal('decalOil', x, z, 2.0, this.rng() * PI, 0.026, '#3a332b')
  }

  buildStreetProps() {
    const B = this.batches
    const r = this.rng
    // vehicles along Harbor Avenue
    this.addCar(-11.5, -3.35, 0.02, '#5e655b')
    this.addCar(7.6, 3.45, 3.14, '#77684f')
    this.addCar(23.2, -3.35, 0.03, '#6b5148')
    this.addCar(40.5, 3.35, 3.13, '#5b5f58')
    this.addCar(-30.5, 2.95, 3.1, '#4f5650', { burnt: true })
    this.addCar(-47, -3.45, 0.02, '#7f7a63', { burnt: true })
    this.addCar(70, 3.15, 3.12, '#6c6656')
    this.addCar(-66, 2.95, 3.14, '#595a50')
    this.addCar(84, -3.3, 0.02, '#675f50', { burnt: true })
    this.addBus(-20, -2.7, 0.02)
    this.addAmbulance(18.6, -4.9, 0.05)
    this.addCar(52.5, -4.2, 1.58, '#555e61', { body: 4.4 })

    // quarantine checkpoint on the east end of the avenue
    for (let i = 0; i < 3; i++) this.addBarrier(58 + i * 2.35, -3.1, 0.02, i === 1 ? 'metal' : 'concrete')
    this.addBarrier(58.4, 3.4, 0.02, 'metal')
    this.addBarrier(63.2, 3.4, 0.02, 'metal')
    this.addSandbagWall(56.6, -5.7, 0.02, 3.6, 3)
    this.addSandbagWall(66.4, 5.8, 0.02, 3.2, 3)
    this.addSign('QUARANTINE', 60.4, 2.6, -4.3, 0, 2.6, 0.64, { bg: '#b6a87f', fg: '#3c2f1e', accent: '#a23a2b', sub: 'NO PASSAGE · SECTOR 7', size: 90, texH: 210 })
    this.addSign('CHECKPOINT 4', 62.0, 2.2, 4.0, PI, 1.9, 0.44, { bg: '#33352d', fg: '#cfc6ae', accent: '#8e3a2b', size: 84, texH: 180, border: false, backing: false })
    // field tents
    for (const [tx, tz, tr] of [[61.5, 8.6, 0.2], [68.0, 8.0, -0.18], [61.0, -8.6, 0.05]]) {
      B.box('fabric', 3.2, 0.1, 4.0, tx, 2.15, tz, '#6f715d', { rotY: tr, rotX: 0.02 })
      B.box('fabric', 3.0, 2.0, 0.08, tx, 1.05, tz + 1.95, '#656753', { rotY: tr })
      B.box('fabric', 3.0, 2.0, 0.08, tx, 1.05, tz - 1.95, '#5e604d', { rotY: tr })
      for (let i = 0; i < 3; i++) B.box('metal', 0.05, 2.2, 0.05, tx - 1.5 + i * 1.5, 1.1, tz + 1.92, '#4b4c42')
      this.addColliderBox(tx, tz, 3.2, 4.0, 0, 2.2, 'tent', tr)
    }
    this.addFireBarrel(57.2, 6.6, 1.2)
    this.addFireBarrel(66.0, -6.4, 1.0)

    // road barricades near the hospital / pharmacy
    this.addBarrier(-2.6, -5.35, 0.02, 'metal')
    this.addBarrier(37.2, -5.45, 0.02, 'metal')
    this.addSandbagWall(31.5, 6.15, 0.02, 3.0, 2)
    this.addSign('CURFEW', 5.2, 2.45, 6.9, PI, 1.8, 0.52, { bg: '#2b2c25', fg: '#d7cdb4', accent: '#a54632', sub: 'DUSK UNTIL DAWN', size: 78, texH: 190 })

    // street lamps
    const lampSpots = [
      [-72, -6.15, 1], [-52, 6.15, -1], [-34, -6.15, 1], [-14, 6.15, -1],
      [4, -6.15, 1], [24, 6.15, -1], [44, -6.15, 1], [66, 6.15, -1], [84, -6.15, 1],
      [47.2, -28, 1], [47.2, 14, 1], [52.8, -44, -1]
    ]
    for (const [x, z, side] of lampSpots) {
      const B2 = this.batches
      B2.cylinder('metal', 0.09, 0.13, 5.6, 8, x, 2.8, z, '#3a3b34')
      B2.cylinder('metal', 0.2, 0.26, 0.34, 8, x, 0.17, z, '#33342d')
      const armZ = z + side * -0.75
      B2.box('metal', 0.08, 0.08, 1.5, x, 5.55, (z + armZ) / 2, '#3a3b34')
      B2.box('metal', 0.5, 0.16, 0.3, x, 5.44, armZ, '#43443b')
      B2.plane('emissive', 0.38, 0.2, x, 5.34, armZ, '#ffcf8a', { rotX: HALF_PI })
      const sp = this.addGlow(x, 5.3, armZ, '#ffbd75', 2.3, 0.34)
      sp.userData.lamp = true
      this.batches.plane('lightPool', 7.5, 7.5, x, 0.031, armZ, '#ffb46c', { rotX: -HALF_PI })
      // only the nearest lamps get actual lights, culling handles the rest
      const light = new THREE.PointLight(new THREE.Color('#ffb977'), 13, 15, 2)
      light.position.set(x, 5.15, armZ)
      this.scene.add(light)
      this.pointLights.push(light)
      this.streetLamps.push({ light, x, z: armZ, base: 13, seed: this.rng() * 100 })
    }
    // traffic lights at the cross street
    for (const [x, z, dir] of [[44.4, 5.9, 1], [55.6, -5.9, -1], [44.4, -25.0, 1]]) {
      B.cylinder('metal', 0.1, 0.14, 4.2, 8, x, 2.1, z, '#32332c')
      B.box('metal', 0.42, 1.0, 0.36, x, 4.35, z, '#2e2f29')
      for (let i = 0; i < 3; i++) {
        B.cylinder('dark', 0.12, 0.12, 0.03, 10, x, 4.66 - i * 0.3, z + dir * 0.19, '#11120f', { rotX: HALF_PI })
      }
      B.box('emissive', 0.2, 0.2, 0.03, x, 4.36, z + dir * 0.2, '#8e4a2b')
      this.addGlow(x, 4.36, z + dir * 0.28, '#b5532b', 0.8, 0.28)
    }

    // bus shelter
    const shx = 33.5, shz = 6.4
    B.box('metal', 4.4, 0.08, 1.7, shx, 2.55, shz, '#5c6058')
    for (const dx of [-2.0, 2.0]) B.box('metal', 0.1, 2.55, 0.1, shx + dx, 1.27, shz - 0.72, '#4c4f47')
    B.plane('glass', 4.2, 2.1, shx, 1.25, shz + 0.78, '#93a3a0', { rotY: PI })
    B.box('metal', 3.4, 0.09, 0.42, shx, 0.53, shz + 0.35, '#5a5d54')
    this.addSign('BUS', shx, 2.86, shz + 0.84, PI, 0.9, 0.28, { bg: '#2b3129', fg: '#c9c0a4', accent: '#7c6337', size: 90, texH: 140, border: false, backing: false })
    this.addColliderBox(shx, shz, 4.4, 1.2, 0, 2.6, 'shelter')

    // dumpsters
    for (const [x, z, rotY, col] of [[10.2, -23.4, 0.05, '#4a5a4b'], [-8.4, -20.6, -0.08, '#4c5148'], [17.2, 20.6, 1.57, '#4d4f43'], [-34.2, 20.0, 0.1, '#47524a']]) {
      B.box('metal', 1.9, 1.25, 1.15, x, 0.72, z, col, { rotY, uvScale: 1.2 })
      B.box('metal', 1.94, 0.1, 1.2, x, 1.39, z, '#3d4139', { rotY, rotX: 0.06 })
      B.box('metal', 0.16, 0.14, 0.1, x + 0.7, 0.6, z + 0.62, '#2e302b', { rotY })
      for (const s of [-1, 1]) B.cylinder('rubber', 0.14, 0.14, 0.08, 8, x + s * 0.72, 0.15, z + 0.4, '#1b1c18', { rotX: HALF_PI })
      this.addColliderBox(x, z, 1.9, 1.15, 0, 1.45, 'dumpster', rotY)
      this.addBlobShadow(x, z, 2.5, 1.7, rotY, 0.4)
    }

    // hydrants, bins, newspaper boxes, bollards
    for (const [x, z] of [[-6.8, -5.9], [29.0, 5.9], [64.0, -5.9], [-41.0, 5.9]]) {
      B.cylinder('metal', 0.14, 0.17, 0.55, 8, x, 0.3, z, '#8e3a2b')
      B.cylinder('metal', 0.1, 0.1, 0.16, 8, x, 0.64, z, '#7d3225')
      B.box('metal', 0.5, 0.1, 0.1, x, 0.42, z, '#7d3225')
    }
    const bins = [[-1.5, 6.1], [21.2, -6.0], [45.8, 8.2], [-27.0, -6.0], [58.0, 5.8]]
    for (const [x, z] of bins) {
      B.cylinder('metal', 0.32, 0.28, 0.86, 10, x, 0.43, z, '#4b4e45')
      B.cylinder('dark', 0.34, 0.34, 0.06, 10, x, 0.9, z, '#22231f')
      B.box('fabric', 0.3, 0.34, 0.3, x + 0.55, 0.17, z + 0.16, '#2a2b26', { rotY: 0.4 })
    }
    for (const [x, z, rotY] of [[-25.6, 5.9, 0.1], [-25.0, 5.9, -0.14], [12.2, -6.0, 0.05]]) {
      B.box('metal', 0.46, 0.9, 0.4, x, 0.52, z, '#6a705f', { rotY })
      B.box('glass', 0.36, 0.42, 0.02, x, 0.72, z - 0.21, '#8d9b94', { rotY })
      B.box('metal', 0.46, 0.08, 0.42, x, 0.98, z, '#4b5145', { rotY })
    }
    for (let i = 0; i < 7; i++) {
      const x = 50 + (i - 3) * 1.5
      B.cylinder('metal', 0.07, 0.09, 0.8, 8, x, 0.4, 7.6, '#54564c')
    }

    // abandoned market stalls in front of the market
    for (const [sx, sz, rot] of [[7.6, 6.2, 0.08], [13.4, 6.0, -0.05]]) {
      B.box('wood', 2.2, 0.08, 1.2, sx, 0.86, sz, '#6d5a42', { rotY: rot, uvScale: 1.2 })
      for (const s of [-1, 1]) B.box('wood', 0.08, 0.86, 0.08, sx + s * 0.95, 0.43, sz + 0.45, '#5e4b35', { rotY: rot })
      for (const s of [-1, 1]) B.box('wood', 0.08, 0.86, 0.08, sx + s * 0.95, 0.43, sz - 0.45, '#5e4b35', { rotY: rot })
      B.box('awning', 2.5, 0.06, 1.5, sx, 2.2, sz, '#8a6d54', { rotY: rot, rotX: 0.1 })
      for (let i = 0; i < 3; i++) B.box('wood', 0.4, 0.3, 0.3, sx - 0.7 + i * 0.6, 1.05, sz, '#8b7350', { rotY: rot + i * 0.3 })
      this.addColliderBox(sx, sz, 2.2, 1.2, 0, 1.0, 'stall', rot)
    }

    // collapsed wall / rubble near the tenement
    for (let i = 0; i < 9; i++) {
      const x = -34.5 + r() * 4.2, z = -7.6 + r() * 1.4
      B.box('concrete', 0.35 + r() * 0.7, 0.25 + r() * 0.4, 0.3 + r() * 0.5, x, 0.15 + r() * 0.2, z, choose(r, ['#98917f', '#8b8372', '#a39b87']), { rotY: r() * PI, rotZ: r() * 0.5, uvScale: 1.2 })
    }

    // corpses on the street (lootable)
    this.addContainer({ type: 'corpse', name: 'Body', label: 'Body of a Courier', x: 9.4, z: -5.4, rotY: 0.9, table: 'corpse' })
    this.addContainer({ type: 'corpse', name: 'Body', label: 'Body of a Soldier', x: 55.0, z: 2.4, rotY: 2.1, table: 'corpse' })
    // crates and supplies near checkpoint
    this.addContainer({ type: 'crate', name: 'Military Crate', label: 'Military Crate', x: 63.6, z: -7.2, rotY: 0.2, table: 'storage', items: [stack('rifle', 1), stack('rifle_ammo', 18), stack('shotgun_shells', 6), stack('bandage', 2)] })
    this.addContainer({ type: 'locker', name: 'Field Locker', label: 'Field Locker', x: 60.4, z: 9.4, rotY: -HALF_PI, table: 'locker', items: [stack('shotgun', 1), stack('shotgun_shells', 6), stack('medkit', 1), stack('painkillers', 1)] })

    // fires
    this.addFireBarrel(-13.6, -6.2, 1.0)
    this.addFireBarrel(34.8, 6.7, 0.95)
    this.addFireBarrel(-32.0, -6.3, 0.85)
  }

  buildAtmosphere() {
    const r = this.rng
    // ground haze / dust motes
    const count = 900
    const geo = new THREE.BufferGeometry()
    const pos = new Float32Array(count * 3)
    const seed = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (r() - 0.5) * 90
      pos[i * 3 + 1] = r() * 9 + 0.2
      pos[i * 3 + 2] = (r() - 0.5) * 44
      seed[i] = r()
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1))
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { uTime: { value: 0 }, uOpacity: { value: 0.5 } },
      vertexShader: /* glsl */`
        attribute float aSeed;
        uniform float uTime;
        varying float vA;
        void main() {
          vec3 p = position;
          p.y += sin(uTime * 0.22 + aSeed * 33.0) * 0.5;
          p.x += sin(uTime * 0.12 + aSeed * 17.0) * 1.4;
          p.z += cos(uTime * 0.1 + aSeed * 23.0) * 1.0;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp((1.0 + aSeed * 2.4) * (10.0 / max(1.5, -mv.z)), 1.0, 14.0);
          vA = (0.07 + aSeed * 0.2) * smoothstep(46.0, 8.0, -mv.z);
        }
      `,
      fragmentShader: /* glsl */`
        varying float vA;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          float a = smoothstep(0.5, 0.05, length(c));
          gl_FragColor = vec4(0.86, 0.8, 0.66, a * vA);
        }
      `
    })
    const points = new THREE.Points(geo, mat)
    points.frustumCulled = false
    points.renderOrder = 8
    this.root.add(points)
    this.dust = { points, mat, base: pos.slice() }

    // steam rising from street vents
    const steamTex = TEX.smokeTexture()
    this.steam = []
    for (const [x, z] of [[-12, 2.3], [41, 3.1], [50, -24], [-37, -3.4]]) {
      for (let i = 0; i < 3; i++) {
        const mat = new THREE.SpriteMaterial({ map: steamTex, color: 0xbfc2b8, transparent: true, opacity: 0.1, depthWrite: false })
        const sp = new THREE.Sprite(mat)
        sp.position.set(x + rand(r, -0.4, 0.4), 0.5 + i * 0.8, z + rand(r, -0.4, 0.4))
        sp.scale.setScalar(1.6 + i * 1.2)
        sp.userData = { baseX: sp.position.x, baseZ: sp.position.z, phase: r() * 10, rise: 0.16 + r() * 0.12, index: i }
        this.root.add(sp)
        this.steam.push(sp)
      }
    }

    // floating ash / embers near fires
    for (const f of this.flames) {
      const g = new THREE.BufferGeometry()
      const n = 26
      const p = new Float32Array(n * 3)
      for (let i = 0; i < n; i++) {
        p[i * 3] = (r() - 0.5) * 0.5
        p[i * 3 + 1] = r() * 1.6
        p[i * 3 + 2] = (r() - 0.5) * 0.5
      }
      g.setAttribute('position', new THREE.BufferAttribute(p, 3))
      const pm = new THREE.PointsMaterial({ color: 0xff9a4a, size: 0.045, transparent: true, opacity: 0.8, depthWrite: false, blending: THREE.AdditiveBlending })
      const pts = new THREE.Points(g, pm)
      pts.position.set(f.group.position.x, 0.6, f.group.position.z)
      this.root.add(pts)
      f.embers = pts
      f.emberSeed = Array.from({ length: n }, () => r())
    }

    // distant crows, simple animated silhouettes
    this.crows = []
    const crowMat = new THREE.MeshBasicMaterial({ color: 0x25241f, transparent: true, opacity: 0.85, side: THREE.DoubleSide })
    for (let i = 0; i < 7; i++) {
      const g = new THREE.Group()
      const wingGeo = new THREE.PlaneGeometry(0.9, 0.16)
      const w1 = new THREE.Mesh(wingGeo, crowMat)
      const w2 = new THREE.Mesh(wingGeo, crowMat)
      w1.position.x = -0.44; w2.position.x = 0.44
      g.add(w1, w2)
      g.position.set(rand(r, -40, 40), rand(r, 16, 26), rand(r, -30, 10))
      g.userData = { radius: rand(r, 18, 42), speed: rand(r, 0.1, 0.24), phase: r() * PI * 2, cx: g.position.x, cz: g.position.z, w1, w2, flap: rand(r, 3, 7) }
      this.root.add(g)
      this.crows.push(g)
    }

    // hanging plastic sheeting and church banners
    for (const [x, z, rotY] of [[-15.0, -8.75, 0], [6.8, -8.76, 0]]) {
      const B = this.batches
      B.plane('fabric', 2.4, 1.1, x, 2.5, z, '#8b8d7a', { rotY, rotZ: 0.02 })
      B.box('metal', 2.5, 0.04, 0.04, x, 3.06, z, '#5b5c50', { rotY })
    }
  }

  buildDecals() {
    const r = this.rng
    // blood trails and splatters near the hotspots
    const bloodSpots = [
      [2.0, -7.9, 1.5], [3.6, -7.2, 1.1], [1.2, -5.0, 1.8], [-1.0, -3.2, 1.3],
      [24.0, -7.6, 2.2], [28.4, -6.4, 1.6], [31.2, -12.0, 1.4], [17.0, -6.8, 1.2],
      [-22.0, -7.4, 1.7], [-25.4, -6.2, 1.2], [-28.0, -15.0, 1.6],
      [-3.0, 8.4, 1.4], [-9.0, 9.2, 1.2], [10.5, 8.6, 1.3], [12.0, 8.9, 1.5],
      [54.0, 1.0, 1.8], [56.5, -1.0, 1.4], [51.8, -4.0, 1.2]
    ]
    for (const [x, z, s] of bloodSpots) {
      this.addGroundDecal(r() < 0.5 ? 'blood' : 'blood2', x, z, s, r() * PI, 0.029)
    }
    // blood drag marks
    for (const [x, z, rot, len] of [[1.2, -6.0, 1.1, 3.0], [26.0, -8.4, 2.4, 3.6], [-23.8, -8.0, 1.5, 2.4], [55.4, 1.8, 0.4, 2.8]]) {
      for (let i = 0; i < 4; i++) {
        this.addGroundDecal('blood2', x + Math.cos(rot) * i * len / 4, z + Math.sin(rot) * i * len / 4, 0.55 + r() * 0.35, rot, 0.03, '#b0a79a')
      }
    }
    // scattered trash and leaves along the avenue
    for (let i = 0; i < 110; i++) {
      const x = rand(r, -86, 86)
      const z = (r() < 0.55 ? (r() < 0.5 ? -1 : 1) * rand(r, 5.8, 8.6) : rand(r, -5.2, 5.2))
      const t = r()
      if (t < 0.4) this.addGroundDecal('decalTrash', x, z, rand(r, 0.35, 0.8), r() * PI, 0.028 + r() * 0.004)
      else if (t < 0.72) this.addGroundDecal('decalLeaves', x, z, rand(r, 0.5, 1.1), r() * PI, 0.027)
      else this.addGroundDecal('decalOil', x, z, rand(r, 0.8, 1.8), r() * PI, 0.026, '#8a8172')
    }
    // surface cracks
    for (let i = 0; i < 24; i++) {
      const x = rand(r, -80, 80)
      const z = rand(r, -7, 7)
      this.addGroundDecal('crack', x, z, rand(r, 1.2, 3.2), r() * PI, 0.029)
    }
    // skid marks
    for (const [x, z, rot] of [[-18, 1.4, 0.02], [11, -1.6, 0.02], [45.5, 1.2, 1.57]]) {
      for (const side of [-0.55, 0.55]) {
        const [px, pz] = localPlace(x, z, rot, 0, side)
        this.addGroundDecal('decalOil', px, pz, 5.0, rot + HALF_PI, 0.027, '#5f5a51')
      }
    }
    // chalk outline near the pharmacy body
    const chx = -2.9, chz = -19.8
    const chalk = new THREE.MeshBasicMaterial({ color: 0xd7d2c2, transparent: true, opacity: 0.4, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 })
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.42, 0.47, 20), chalk)
    ring.rotation.x = -HALF_PI
    ring.position.set(chx, 0.032, chz)
    this.root.add(ring)
    for (const [ox, oz, w, d] of [[0, -0.9, 0.34, 0.7], [0.34, -0.45, 0.16, 0.5], [-0.34, -0.4, 0.16, 0.45], [0, 0.75, 0.28, 0.9]]) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), chalk)
      m.rotation.x = -HALF_PI
      m.rotation.z = 0.1
      m.position.set(chx + ox, 0.032, chz + oz)
      this.root.add(m)
    }
    // bullet holes on walls
    for (const [x, y, z, rotY] of [[-4.65, 1.8, -14.0, HALF_PI], [7.4, 1.5, -19.0, -HALF_PI], [13.6, 2.4, -8.84, 0], [26.8, 2.2, -8.85, 0], [-18.2, 1.6, -8.84, 0]]) {
      for (let i = 0; i < 5; i++) {
        this.batches.plane('dark', 0.1, 0.1, x + rand(r, -0.7, 0.7), y + rand(r, -0.5, 0.5), z + 0.01, '#1a1916', { rotY, rotZ: r() * PI })
      }
    }
    // warning paint on the asphalt
    this.batches.plane('paint', 3.2, 0.28, 50, 0.03, 2.2, '#c7b784', { rotX: -HALF_PI, rotZ: HALF_PI })
  }

  // ---------------------------------------------------------------- runtime
  update(dt, elapsed, playerPos, cameraPos) {
    // doors swing
    for (const door of this.doors) {
      const target = door.open ? 1.38 * door.opensIn : 0
      door.angle += (target - door.angle) * Math.min(1, dt * 7.5)
      door.group.rotation.y = door.baseAngle + door.angle
      if (door.collider) door.collider.enabled = Math.abs(door.angle) < 0.3
      if (door.rec) door.rec.action = door.locked ? 'LOCKED' : (door.open ? 'CLOSE' : 'OPEN')
    }
    // flickering interior lights
    for (const f of this.flickerLights) {
      const n = Math.sin(elapsed * 9.3 + f.seed) * Math.sin(elapsed * 2.1 + f.seed * 0.7)
      const dip = n < -0.72 ? 0.18 : 1
      f.light.intensity = f.base * (0.82 + 0.18 * Math.sin(elapsed * 3 + f.seed)) * dip
    }
    // street lamp hum / rare dropouts
    for (const l of this.streetLamps) {
      const n = Math.sin(elapsed * 2.2 + l.seed)
      l.light.intensity = l.base * (0.88 + n * 0.08 + (n < -0.96 ? -0.7 : 0))
    }
    // flames
    for (const f of this.flames) {
      const t = elapsed * 7 + f.seed
      for (let i = 0; i < f.sprites.length; i++) {
        const s = f.sprites[i]
        const flick = 0.78 + Math.sin(t + i * 1.7) * 0.16 + Math.sin(t * 2.3 + i) * 0.08
        s.scale.setScalar(f.scale * (0.62 - i * 0.05) * flick)
        s.position.y = i * 0.2 + Math.sin(t * 1.4 + i) * 0.05
        s.position.x = Math.sin(t * 0.9 + i * 2) * 0.05
      }
      f.light.intensity = f.base * (0.7 + Math.sin(t * 1.1) * 0.16 + Math.sin(t * 3.7) * 0.1)
      if (f.embers) {
        const pos = f.embers.geometry.attributes.position
        for (let i = 0; i < pos.count; i++) {
          let y = pos.getY(i) + dt * (0.5 + f.emberSeed[i] * 0.8)
          if (y > 2.0) y = 0
          pos.setY(i, y)
          pos.setX(i, Math.sin(elapsed * 1.4 + i) * 0.22)
        }
        pos.needsUpdate = true
      }
    }
    // smoke columns drift
    for (const s of this.smoke) {
      const u = s.userData
      s.position.y = u.baseY + Math.sin(elapsed * u.speed + u.phase) * 1.2 + ((elapsed * 0.06 + u.phase) % 6)
      s.position.x = u.baseX + Math.sin(elapsed * 0.07 + u.phase) * 2.4
      s.material.opacity = 0.11 + Math.sin(elapsed * 0.4 + u.phase) * 0.04
    }
    // steam
    if (this.steam) {
      for (const s of this.steam) {
        const u = s.userData
        s.position.y += dt * u.rise
        if (s.position.y > 3.4) s.position.y = 0.4 + u.index * 0.3
        s.position.x = u.baseX + Math.sin(elapsed * 0.35 + u.phase) * 0.35
        s.position.z = u.baseZ + Math.cos(elapsed * 0.28 + u.phase) * 0.3
        s.material.opacity = 0.055 * (1 - (s.position.y - 0.4) / 3.2)
      }
    }
    // dust
    if (this.dust) this.dust.mat.uniforms.uTime.value = elapsed
    // glows pulse gently
    for (const g of this.glows) {
      const p = 0.85 + Math.sin(elapsed * 1.7 + g.seed) * 0.12
      g.sprite.material.opacity = g.base * p
    }
    // crows circle overhead
    for (const c of this.crows) {
      const u = c.userData
      u.phase += dt * u.speed
      c.position.x = u.cx + Math.cos(u.phase) * u.radius
      c.position.z = u.cz + Math.sin(u.phase) * u.radius * 0.6
      c.position.y = 18 + Math.sin(u.phase * 1.3) * 2.2
      c.rotation.y = -u.phase + HALF_PI
      const flap = Math.sin(elapsed * u.flap + u.phase) * 0.5
      u.w1.rotation.z = flap
      u.w2.rotation.z = -flap
    }
    // point-light budget: keep the closest few alive
    if (playerPos && this.pointLights.length) {
      this._lightTimer = (this._lightTimer ?? 0) - dt
      if (this._lightTimer <= 0) {
        this._lightTimer = 0.35
        const scored = this.pointLights.map(l => ({
          l, d: (l.position.x - playerPos.x) ** 2 + (l.position.z - playerPos.z) ** 2
        })).sort((a, b) => a.d - b.d)
        const budget = 7
        for (let i = 0; i < scored.length; i++) scored[i].l.visible = i < budget
      }
    }
  }

  // nearest interactable under the crosshair
  focus(camera, maxDistance = 3.4) {
    if (!camera || !this.interactRoots.length) {
      if (this.focusRecord) this.highlightContainer(this.focusRecord.container, false)
      this.focusRecord = null
      return null
    }
    this._ray.setFromCamera({ x: 0, y: 0 }, camera)
    this._ray.far = maxDistance
    const hits = this._ray.intersectObjects(this.interactRoots, true)
    let rec = null
    for (const h of hits) {
      const r = h.object.userData.interact
      if (r) { rec = r; break }
    }
    if (rec !== this.focusRecord) {
      if (this.focusRecord) this.highlightContainer(this.focusRecord.container, false)
      if (rec) this.highlightContainer(rec.container, true)
      this.focusRecord = rec
    }
    return rec
  }

  interact(rec) {
    if (!rec) return null
    if (rec.type === 'door') {
      const d = rec.door
      if (!d) return null
      if (d.locked) return { type: 'locked', label: d.label }
      d.open = !d.open
      return { type: 'door', open: d.open, label: d.label }
    }
    if (rec.type === 'container') {
      const c = rec.container
      if (!c) return null
      if (c.searched) return { type: 'empty', label: c.name }
      c.searched = true
      rec.action = 'SEARCHED'
      if (c.material) {
        c.material.emissive.set('#000000')
        c.material.emissiveIntensity = 0
      }
      const loot = c.loot.map(s => ({ ...s }))
      c.loot = []
      return { type: 'loot', label: c.name, loot }
    }
    return null
  }

  inSafeZone(pos) {
    for (const z of this.safeZones) {
      if ((pos.x - z.x) ** 2 + (pos.z - z.z) ** 2 < z.r * z.r) return z
    }
    return null
  }

  nearestQuest(key, pos) {
    const p = this.questPoints[key]
    if (!p) return null
    return { point: p, distance: Math.hypot(p.x - pos.x, p.z - pos.z) }
  }

  dispose() {
    this.scene.remove(this.root)
  }
}
