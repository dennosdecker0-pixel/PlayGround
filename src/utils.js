import * as THREE from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'

export function mulberry32(seed) {
  let a = seed >>> 0
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export const clamp = (v, a, b) => Math.max(a, Math.min(b, v))
export const lerp = (a, b, t) => a + (b - a) * t
export const smoothstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t) }
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt))
export const rand = (rng, a = 0, b = 1) => a + (b - a) * rng()
export const randInt = (rng, a, b) => Math.floor(a + (b - a + 1) * rng())
export const choose = (rng, arr) => arr[Math.floor(rng() * arr.length) % arr.length]

export function hash2(x, y, seed = 0) {
  let h = Math.imul(x | 0, 374761393) ^ Math.imul(y | 0, 668265263) ^ Math.imul(seed | 0, 2246822519)
  h = Math.imul(h ^ (h >>> 13), 1274126177)
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296
}

export function valueNoise(x, y, seed = 0) {
  const xi = Math.floor(x), yi = Math.floor(y)
  const xf = x - xi, yf = y - yi
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf)
  const a = hash2(xi, yi, seed), b = hash2(xi + 1, yi, seed)
  const c = hash2(xi, yi + 1, seed), d = hash2(xi + 1, yi + 1, seed)
  return lerp(lerp(a, b, u), lerp(c, d, u), v)
}

export function fbm(x, y, oct = 4, seed = 0) {
  let v = 0, amp = 0.5, f = 1
  for (let i = 0; i < oct; i++) { v += amp * valueNoise(x * f, y * f, seed + i * 17); f *= 2.03; amp *= 0.5 }
  return v
}

// ---------------------------------------------------------------------------
// Geometry batching: merges hundreds of props into a handful of draw calls.
// ---------------------------------------------------------------------------
export class GeoBatch {
  constructor() {
    this.buckets = new Map()
    this.materials = new Map()
  }

  use(key, material) {
    this.materials.set(key, material)
    if (!this.buckets.has(key)) this.buckets.set(key, [])
    return material
  }

  push(key, geo, color) {
    const count = geo.attributes.position.count
    if (!geo.attributes.color) {
      const arr = new Float32Array(count * 3)
      const c = color instanceof THREE.Color ? color : new THREE.Color(color ?? 0xffffff)
      for (let i = 0; i < count; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b }
      geo.setAttribute('color', new THREE.BufferAttribute(arr, 3))
    } else if (color) {
      const attr = geo.attributes.color
      const c = color instanceof THREE.Color ? color : new THREE.Color(color)
      for (let i = 0; i < attr.count; i++) { attr.setXYZ(i, c.r, c.g, c.b) }
    }
    if (!geo.index) {
      // ensure merge compatibility
    }
    this.buckets.get(key).push(geo)
  }

  add(key, geo, matrix, color) {
    if (matrix) geo.applyMatrix4(matrix)
    this.push(key, geo, color)
    return geo
  }

  box(key, w, h, d, x, y, z, color, { rotY = 0, rotX = 0, rotZ = 0, uvScale = 0, uvRotate = false } = {}) {
    const g = new THREE.BoxGeometry(w, h, d)
    if (uvScale) scaleBoxUV(g, w, h, d, uvScale)
    const m = new THREE.Matrix4().compose(
      new THREE.Vector3(x, y, z),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(rotX, rotY, rotZ, 'YXZ')),
      new THREE.Vector3(1, 1, 1)
    )
    return this.add(key, g, m, color)
  }

  plane(key, w, h, x, y, z, color, { rotY = 0, rotX = 0, rotZ = 0, uvScale = 0 } = {}) {
    const g = new THREE.PlaneGeometry(w, h)
    if (uvScale) {
      const uv = g.attributes.uv
      for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * w / uvScale, uv.getY(i) * h / uvScale)
    }
    const m = new THREE.Matrix4().compose(
      new THREE.Vector3(x, y, z),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(rotX, rotY, rotZ, 'YXZ')),
      new THREE.Vector3(1, 1, 1)
    )
    return this.add(key, g, m, color)
  }

  cylinder(key, rt, rb, h, seg, x, y, z, color, { rotY = 0, rotX = 0, rotZ = 0, open = false } = {}) {
    const g = new THREE.CylinderGeometry(rt, rb, h, seg, 1, open)
    const m = new THREE.Matrix4().compose(
      new THREE.Vector3(x, y, z),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(rotX, rotY, rotZ, 'YXZ')),
      new THREE.Vector3(1, 1, 1)
    )
    return this.add(key, g, m, color)
  }

  build(parent, { shadows = false } = {}) {
    const meshes = []
    for (const [key, list] of this.buckets) {
      if (!list.length) continue
      const merged = mergeGeometries(list, false)
      if (!merged) { console.warn('merge failed', key, list.length); continue }
      for (const g of list) g.dispose()
      merged.computeBoundingSphere()
      const mat = this.materials.get(key)
      const mesh = new THREE.Mesh(merged, mat)
      mesh.name = 'batch-' + key
      mesh.castShadow = shadows && mat && !mat.transparent
      mesh.receiveShadow = shadows
      mesh.matrixAutoUpdate = false
      parent.add(mesh)
      meshes.push(mesh)
    }
    this.buckets.clear()
    return meshes
  }
}

export function scaleBoxUV(geo, w, h, d, scale) {
  const uv = geo.attributes.uv
  // face order: +x, -x, +y, -y, +z, -z (4 verts each)
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]]
  for (let f = 0; f < 6; f++) {
    const [fw, fh] = dims[f]
    for (let v = 0; v < 4; v++) {
      const i = f * 4 + v
      uv.setXY(i, uv.getX(i) * fw / scale, uv.getY(i) * fh / scale)
    }
  }
  uv.needsUpdate = true
}

let glowCanvas = null
export function glowTexture(size = 128) {
  if (glowCanvas && glowCanvas.width === size) return glowCanvas
  const c = document.createElement('canvas')
  c.width = c.height = size
  const ctx = c.getContext('2d')
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  g.addColorStop(0, 'rgba(255,255,255,1)')
  g.addColorStop(0.18, 'rgba(255,255,255,0.78)')
  g.addColorStop(0.5, 'rgba(255,255,255,0.23)')
  g.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  glowCanvas = c
  return c
}

export function blobTexture(size = 128, inner = 0.1, outer = 0.95) {
  const c = document.createElement('canvas')
  c.width = c.height = size
  const ctx = c.getContext('2d')
  const g = ctx.createRadialGradient(size / 2, size / 2, size * inner, size / 2, size / 2, size * outer)
  g.addColorStop(0, 'rgba(0,0,0,0.8)')
  g.addColorStop(0.55, 'rgba(0,0,0,0.35)')
  g.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  return c
}

export function textCanvas(width, height, draw) {
  const c = document.createElement('canvas')
  c.width = width; c.height = height
  const ctx = c.getContext('2d')
  draw(ctx, width, height)
  return c
}

export function makeTexture(canvas, { repeat = [1, 1], srgb = true, anisotropy = 8 } = {}) {
  const t = new THREE.CanvasTexture(canvas)
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.repeat.set(repeat[0], repeat[1])
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace
  t.anisotropy = anisotropy
  t.needsUpdate = true
  return t
}

export function localToWorld(obj) {
  obj.updateWorldMatrix(true, false)
  return obj.getWorldPosition(new THREE.Vector3())
}

// Very cheap 3D AABB vs circle test helper
export function circleHitsBox(x, z, r, b) {
  const cx = clamp(x, b.minX, b.maxX)
  const cz = clamp(z, b.minZ, b.maxZ)
  const dx = x - cx, dz = z - cz
  return dx * dx + dz * dz < r * r
}
