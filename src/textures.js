import * as THREE from 'three'
import { makeTexture, mulberry32, hash2, fbm, valueNoise, clamp, rand } from './utils.js'

const cache = new Map()
function cached(key, fn) {
  if (!cache.has(key)) cache.set(key, fn())
  return cache.get(key)
}

function canvas(size) {
  const c = document.createElement('canvas')
  c.width = c.height = size
  return c
}

function noiseSurface(size, base, spread, seed, octaves = 4, scale = 8, speckle = 0) {
  const c = canvas(size)
  const ctx = c.getContext('2d')
  const img = ctx.createImageData(size, size)
  const d = img.data
  const rng = mulberry32(seed)
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const n = fbm(x / size * scale, y / size * scale, octaves, seed)
      const fine = (hash2(x, y, seed + 9) - 0.5) * speckle
      const v = base + (n - 0.5) * spread + fine * 255
      const i = (y * size + x) * 4
      d[i] = clamp(v, 0, 255)
      d[i + 1] = clamp(v, 0, 255)
      d[i + 2] = clamp(v, 0, 255)
      d[i + 3] = 255
    }
  }
  ctx.putImageData(img, 0, 0)
  return c
}

function heightFromNoise(size, base, spread, seed, octaves = 4, scale = 8) {
  return noiseSurface(size, base, spread, seed, octaves, scale, 8)
}

function normalMapFromHeight(heightCanvas, strength = 1.6) {
  const size = heightCanvas.width
  const src = heightCanvas.getContext('2d').getImageData(0, 0, size, size).data
  const out = new ImageData(size, size)
  const get = (x, y) => src[((y + size) % size * size + (x + size) % size) * 4] / 255
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const l = get(x - 1, y), r = get(x + 1, y)
      const u = get(x, y - 1), dn = get(x, y + 1)
      let nx = (l - r) * strength
      let ny = (dn - u) * strength
      let nz = 1
      const len = Math.hypot(nx, ny, nz)
      nx /= len; ny /= len; nz /= len
      const i = (y * size + x) * 4
      out.data[i] = (nx * 0.5 + 0.5) * 255
      out.data[i + 1] = (ny * 0.5 + 0.5) * 255
      out.data[i + 2] = (nz * 0.5 + 0.5) * 255
      out.data[i + 3] = 255
    }
  }
  const c = canvas(size)
  c.getContext('2d').putImageData(out, 0, 0)
  return c
}

function roughnessTexture(size, base, spread, seed, extra = null) {
  const c = noiseSurface(size, base, spread, seed, 5, 7, 10)
  if (extra) extra(c.getContext('2d'), size)
  return c
}

function crack(ctx, rng, x, y, length, width, color, branch = 3) {
  ctx.save()
  ctx.strokeStyle = color
  ctx.lineWidth = width
  ctx.beginPath()
  ctx.moveTo(x, y)
  let px = x, py = y
  let angle = rng() * Math.PI * 2
  for (let i = 0; i < length; i++) {
    angle += (rng() - 0.5) * 0.9
    px += Math.cos(angle) * (3 + rng() * 6)
    py += Math.sin(angle) * (3 + rng() * 6)
    ctx.lineTo(px, py)
    if (branch > 0 && rng() < 0.045) {
      ctx.stroke()
      crack(ctx, rng, px, py, Math.floor(length * 0.35), width * 0.65, color, branch - 1)
      ctx.beginPath()
      ctx.moveTo(px, py)
    }
  }
  ctx.stroke()
  ctx.restore()
  return { x: px, y: py }
}

function grimeBlob(ctx, rng, x, y, r, color, alpha = 1) {
  const g = ctx.createRadialGradient(x, y, r * 0.1, x, y, r)
  g.addColorStop(0, color.replace('@a', alpha))
  g.addColorStop(1, color.replace('@a', 0))
  ctx.fillStyle = g
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill()
}

export function asphaltTextures() {
  return cached('asphalt', () => {
    const size = 1024
    const seed = 11
    const c = canvas(size)
    const ctx = c.getContext('2d')
    const base = noiseSurface(size, 47, 20, seed, 5, 6, 0.25)
    ctx.drawImage(base, 0, 0)
    const rng = mulberry32(seed)
    // broad worn wheel paths and patches
    for (let i = 0; i < 35; i++) {
      const x = rng() * size, y = rng() * size, r = 30 + rng() * 160
      grimeBlob(ctx, rng, x, y, r, rng() < 0.5 ? 'rgba(22,24,25,@a)' : 'rgba(96,98,96,@a)', 0.2 + rng() * 0.3)
    }
    // aggregate
    for (let i = 0; i < 8500; i++) {
      const x = rng() * size, y = rng() * size, r = rng() * 1.5
      ctx.fillStyle = rng() < 0.55 ? `rgba(30,31,32,${0.2 + rng() * 0.5})` : `rgba(112,112,106,${0.08 + rng() * 0.3})`
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill()
    }
    // tar seams
    ctx.strokeStyle = 'rgba(22,23,23,0.85)'
    ctx.lineWidth = 5
    for (let i = 0; i < 5; i++) {
      const y = 80 + rng() * (size - 160)
      ctx.beginPath(); ctx.moveTo(0, y)
      for (let x = 0; x <= size; x += 32) ctx.lineTo(x, y + Math.sin(x * 0.01 + i) * 7 + (rng() - 0.5) * 8)
      ctx.stroke()
    }
    // cracks
    for (let i = 0; i < 22; i++) {
      crack(ctx, rng, rng() * size, rng() * size, 28 + rng() * 55, 0.7 + rng() * 1.4, 'rgba(14,15,15,0.65)')
      if (rng() < 0.4) crack(ctx, rng, rng() * size, rng() * size, 20, 0.6, 'rgba(120,120,112,0.12)', 1)
    }
    // oil and stains
    for (let i = 0; i < 18; i++) grimeBlob(ctx, rng, rng() * size, rng() * size, 18 + rng() * 60, 'rgba(9,10,9,@a)', 0.15 + rng() * 0.35)

    const h = heightFromNoise(size, 120, 70, seed + 3, 6, 9)
    const hctx = h.getContext('2d')
    hctx.globalAlpha = 0.9
    const hrng = mulberry32(99)
    for (let i = 0; i < 18; i++) crack(hctx, hrng, hrng() * size, hrng() * size, 30 + hrng() * 60, 1.4, '#202020')
    hctx.globalAlpha = 1
    const rough = roughnessTexture(512, 205, 30, seed + 7, (rctx, s) => {
      const r2 = mulberry32(31)
      for (let i = 0; i < 18; i++) grimeBlob(rctx, r2, r2() * s, r2() * s, 20 + r2() * 70, 'rgba(45,45,45,@a)', 0.6)
    })
    return {
      map: makeTexture(c, { repeat: [10, 10] }),
      normalMap: makeTexture(normalMapFromHeight(h, 1.4), { repeat: [10, 10], srgb: false }),
      roughnessMap: makeTexture(rough, { repeat: [8, 8], srgb: false })
    }
  })
}

export function sidewalkTextures() {
  return cached('sidewalk', () => {
    const size = 768
    const seed = 23
    const c = canvas(size)
    const ctx = c.getContext('2d')
    ctx.drawImage(noiseSurface(size, 139, 26, seed, 5, 10, 0.16), 0, 0)
    const rng = mulberry32(seed)
    const tile = size / 4
    // pavers
    for (let ty = 0; ty < 4; ty++) {
      for (let tx = 0; tx < 4; tx++) {
        const shade = 122 + Math.floor(rng() * 26)
        ctx.fillStyle = `rgba(${shade},${shade - 4},${shade - 12},0.38)`
        ctx.fillRect(tx * tile + 3, ty * tile + 3, tile - 6, tile - 6)
        ctx.strokeStyle = 'rgba(38,37,33,0.55)'
        ctx.lineWidth = 3
        ctx.strokeRect(tx * tile + 2, ty * tile + 2, tile - 4, tile - 4)
      }
    }
    for (let i = 0; i < 120; i++) grimeBlob(ctx, rng, rng() * size, rng() * size, 4 + rng() * 34, 'rgba(37,35,30,@a)', 0.1 + rng() * 0.22)
    for (let i = 0; i < 10; i++) crack(ctx, rng, rng() * size, rng() * size, 25 + rng() * 30, 1, 'rgba(32,31,28,0.55)', 2)
    for (let i = 0; i < 80; i++) {
      ctx.fillStyle = `rgba(62,62,55,${0.1 + rng() * 0.2})`
      ctx.beginPath(); ctx.arc(rng() * size, rng() * size, rng() * 3, 0, Math.PI * 2); ctx.fill()
    }
    const h = noiseSurface(size, 150, 24, seed + 4, 4, 12, 10)
    const hctx = h.getContext('2d')
    hctx.strokeStyle = '#282828'; hctx.lineWidth = 8
    for (let i = 0; i <= 4; i++) {
      hctx.beginPath(); hctx.moveTo(i * tile, 0); hctx.lineTo(i * tile, size); hctx.stroke()
      hctx.beginPath(); hctx.moveTo(0, i * tile); hctx.lineTo(size, i * tile); hctx.stroke()
    }
    const rough = roughnessTexture(384, 218, 20, seed + 5)
    return {
      map: makeTexture(c, { repeat: [1, 1] }),
      normalMap: makeTexture(normalMapFromHeight(h, 1.2), { srgb: false }),
      roughnessMap: makeTexture(rough, { srgb: false })
    }
  })
}

export function concreteTextures() {
  return cached('concrete', () => {
    const size = 512
    const seed = 41
    const c = canvas(size)
    const ctx = c.getContext('2d')
    ctx.drawImage(noiseSurface(size, 151, 34, seed, 5, 7, 0.2), 0, 0)
    const rng = mulberry32(seed)
    // formwork, stains and drips
    ctx.fillStyle = 'rgba(87,82,72,0.13)'
    for (let i = 0; i < 7; i++) ctx.fillRect(0, rng() * size, size, 2 + rng() * 7)
    for (let i = 0; i < 26; i++) {
      const x = rng() * size, w = 1 + rng() * 3, y = rng() * size, len = 10 + rng() * 90
      const g = ctx.createLinearGradient(x, y, x, y + len)
      g.addColorStop(0, 'rgba(55,51,44,0.24)'); g.addColorStop(1, 'rgba(55,51,44,0)')
      ctx.fillStyle = g; ctx.fillRect(x, y, w, len)
    }
    for (let i = 0; i < 24; i++) grimeBlob(ctx, rng, rng() * size, rng() * size, 8 + rng() * 60, 'rgba(40,38,33,@a)', 0.2 + rng() * 0.3)
    for (let i = 0; i < 12; i++) crack(ctx, rng, rng() * size, rng() * size, 20 + rng() * 30, 0.6 + rng(), 'rgba(42,40,35,0.4)', 2)
    const h = noiseSurface(size, 135, 55, seed + 2, 5, 9, 12)
    const hctx = h.getContext('2d')
    const hrng = mulberry32(seed + 8)
    for (let i = 0; i < 10; i++) crack(hctx, hrng, hrng() * size, hrng() * size, 20 + hrng() * 30, 1.5, '#222')
    return {
      map: makeTexture(c),
      normalMap: makeTexture(normalMapFromHeight(h, 1.4), { srgb: false }),
      roughnessMap: makeTexture(roughnessTexture(256, 225, 20, seed + 4), { srgb: false })
    }
  })
}

export function plasterTextures() {
  return cached('plaster', () => {
    const size = 512
    const seed = 57
    const c = canvas(size)
    const ctx = c.getContext('2d')
    ctx.drawImage(noiseSurface(size, 173, 22, seed, 5, 6, 0.12), 0, 0)
    const rng = mulberry32(seed)
    // faded paint layers, peeling patches revealing brick/stone
    for (let i = 0; i < 14; i++) {
      const x = rng() * size, y = rng() * size, r = 15 + rng() * 55
      ctx.save()
      ctx.beginPath()
      const pts = 9
      for (let p = 0; p < pts; p++) {
        const a = p / pts * Math.PI * 2
        const rr = r * (0.5 + rng() * 0.6)
        const px = x + Math.cos(a) * rr, py = y + Math.sin(a) * rr
        p ? ctx.lineTo(px, py) : ctx.moveTo(px, py)
      }
      ctx.closePath()
      ctx.fillStyle = `rgba(${105 + rng() * 20},${84 + rng() * 15},${68 + rng() * 10},${0.25 + rng() * 0.35})`
      ctx.fill()
      ctx.clip()
      for (let b = 0; b < 12; b++) {
        ctx.fillStyle = `rgba(${120 + rng() * 40},${70 + rng() * 20},${50 + rng() * 15},0.35)`
        ctx.fillRect(x - 60, y - 60 + b * 11, 120, 7)
      }
      ctx.restore()
      ctx.strokeStyle = 'rgba(80,66,54,0.45)'; ctx.lineWidth = 1
      ctx.stroke()
    }
    for (let i = 0; i < 40; i++) grimeBlob(ctx, rng, rng() * size, rng() * size, 8 + rng() * 45, 'rgba(47,42,34,@a)', 0.12 + rng() * 0.25)
    for (let i = 0; i < 10; i++) crack(ctx, rng, rng() * size, rng() * size, 25 + rng() * 40, 0.7, 'rgba(50,44,37,0.4)', 2)
    // damp bottom band hints
    const g = ctx.createLinearGradient(0, size * 0.7, 0, size)
    g.addColorStop(0, 'rgba(50,45,37,0)'); g.addColorStop(1, 'rgba(50,45,37,0.25)')
    ctx.fillStyle = g; ctx.fillRect(0, size * 0.7, size, size * 0.3)
    const h = noiseSurface(size, 135, 55, seed + 2, 5, 8, 10)
    const hctx = h.getContext('2d')
    const hrng = mulberry32(seed + 9)
    for (let i = 0; i < 7; i++) {
      const x = hrng() * size, y = hrng() * size, r = 15 + hrng() * 40
      hctx.fillStyle = '#4f4f4f'
      hctx.beginPath(); hctx.arc(x, y, r, 0, Math.PI * 2); hctx.fill()
    }
    return {
      map: makeTexture(c),
      normalMap: makeTexture(normalMapFromHeight(h, 1.6), { srgb: false }),
      roughnessMap: makeTexture(roughnessTexture(256, 228, 18, seed + 6), { srgb: false })
    }
  })
}

export function brickTextures() {
  return cached('brick', () => {
    const size = 512
    const seed = 71
    const c = canvas(size)
    const ctx = c.getContext('2d')
    ctx.fillStyle = '#6d675c'; ctx.fillRect(0, 0, size, size)
    const rng = mulberry32(seed)
    const bw = 64, bh = 26, mortar = 4
    for (let row = 0; row < Math.ceil(size / bh); row++) {
      const offset = row % 2 ? -bw / 2 : 0
      for (let col = -1; col < Math.ceil(size / bw) + 1; col++) {
        const x = col * bw + offset, y = row * bh
        const r = 104 + rng() * 46, g = 66 + rng() * 24, b = 48 + rng() * 15
        ctx.fillStyle = `rgb(${r},${g},${b})`
        ctx.fillRect(x + mortar / 2, y + mortar / 2, bw - mortar, bh - mortar)
        // chips / highlights
        if (rng() < 0.4) {
          ctx.fillStyle = 'rgba(38,30,24,0.3)'
          ctx.beginPath(); ctx.ellipse(x + rng() * bw, y + rng() * bh, 2 + rng() * 5, 1 + rng() * 3, rng(), 0, Math.PI * 2); ctx.fill()
        }
        ctx.fillStyle = `rgba(255,235,210,${0.03 + rng() * 0.04})`
        ctx.fillRect(x + 4, y + 4, bw - 10, 2)
      }
    }
    // mortar noise and soot
    ctx.drawImage(noiseSurface(size, 110, 30, seed + 1, 4, 14, 0.2), 0, 0, size, size, 0, 0, size, size)
    ctx.globalCompositeOperation = 'multiply'
    ctx.globalAlpha = 0.65
    ctx.drawImage(noiseSurface(size, 200, 70, seed + 3, 5, 5, 0), 0, 0)
    ctx.globalAlpha = 1
    ctx.globalCompositeOperation = 'source-over'
    for (let i = 0; i < 55; i++) grimeBlob(ctx, rng, rng() * size, rng() * size, 8 + rng() * 50, 'rgba(34,31,26,@a)', 0.1 + rng() * 0.3)
    const h = canvas(size)
    const hctx = h.getContext('2d')
    hctx.fillStyle = '#555'; hctx.fillRect(0, 0, size, size)
    for (let row = 0; row < Math.ceil(size / bh); row++) {
      const offset = row % 2 ? -bw / 2 : 0
      for (let col = -1; col < Math.ceil(size / bw) + 1; col++) {
        hctx.fillStyle = '#d8d8d8'
        hctx.fillRect(col * bw + offset + mortar / 2, row * bh + mortar / 2, bw - mortar, bh - mortar)
      }
    }
    return {
      map: makeTexture(c),
      normalMap: makeTexture(normalMapFromHeight(h, 2), { srgb: false }),
      roughnessMap: makeTexture(roughnessTexture(256, 232, 18, seed + 5), { srgb: false })
    }
  })
}

export function woodTextures() {
  return cached('wood', () => {
    const size = 512
    const seed = 83
    const c = canvas(size)
    const ctx = c.getContext('2d')
    const rng = mulberry32(seed)
    const plankH = 42
    for (let row = 0; row < size / plankH; row++) {
      const base = 90 + rng() * 30
      ctx.fillStyle = `rgb(${base + 20},${base - 10},${base - 38})`
      ctx.fillRect(0, row * plankH, size, plankH - 2)
      // grain
      for (let g = 0; g < 35; g++) {
        const y = row * plankH + rng() * plankH
        ctx.strokeStyle = `rgba(${45 + rng() * 25},${30 + rng() * 16},${18 + rng() * 10},${0.1 + rng() * 0.2})`
        ctx.lineWidth = 0.5 + rng() * 1.2
        ctx.beginPath(); ctx.moveTo(0, y)
        for (let x = 0; x <= size; x += 24) ctx.lineTo(x, y + Math.sin(x * 0.02 + g) * 2.4)
        ctx.stroke()
      }
      if (rng() < 0.5) {
        ctx.fillStyle = 'rgba(42,27,16,0.4)'
        ctx.beginPath(); ctx.ellipse(rng() * size, row * plankH + rng() * plankH, 4 + rng() * 8, 2 + rng() * 3, 0, 0, Math.PI * 2); ctx.fill()
      }
      ctx.fillStyle = 'rgba(22,16,11,0.55)'
      ctx.fillRect(0, row * plankH + plankH - 2, size, 2)
    }
    for (let i = 0; i < 120; i++) {
      ctx.strokeStyle = `rgba(35,25,17,${0.05 + rng() * 0.18})`
      ctx.lineWidth = 0.6
      ctx.beginPath(); ctx.moveTo(rng() * size, rng() * size); ctx.lineTo(rng() * size, rng() * size); ctx.stroke()
    }
    const h = noiseSurface(size, 120, 60, seed + 2, 4, 20, 6)
    return {
      map: makeTexture(c),
      normalMap: makeTexture(normalMapFromHeight(h, 1.2), { srgb: false }),
      roughnessMap: makeTexture(roughnessTexture(256, 200, 30, seed + 5), { srgb: false })
    }
  })
}

export function metalTextures() {
  return cached('metal', () => {
    const size = 512
    const seed = 97
    const c = noiseSurface(size, 80, 40, seed, 5, 8, 0.2)
    const ctx = c.getContext('2d')
    const rng = mulberry32(seed)
    for (let i = 0; i < 600; i++) {
      ctx.strokeStyle = `rgba(${140 + rng() * 60},${140 + rng() * 60},${140 + rng() * 55},${0.02 + rng() * 0.08})`
      ctx.lineWidth = 0.5
      const y = rng() * size
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(size, y + (rng() - 0.5) * 6); ctx.stroke()
    }
    for (let i = 0; i < 55; i++) {
      const x = rng() * size, y = rng() * size, r = 4 + rng() * 35
      const g = ctx.createRadialGradient(x, y, 0, x, y, r)
      g.addColorStop(0, `rgba(${100 + rng() * 40},${48 + rng() * 20},${24 + rng() * 12},${0.35 + rng() * 0.4})`)
      g.addColorStop(0.7, `rgba(78,50,32,${0.14 + rng() * 0.2})`)
      g.addColorStop(1, 'rgba(60,40,26,0)')
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill()
    }
    for (let i = 0; i < 26; i++) {
      ctx.strokeStyle = `rgba(210,210,205,${0.04 + rng() * 0.1})`
      ctx.lineWidth = 0.6
      ctx.beginPath(); ctx.moveTo(rng() * size, rng() * size); ctx.lineTo(rng() * size, rng() * size); ctx.stroke()
    }
    return {
      map: makeTexture(c),
      normalMap: makeTexture(normalMapFromHeight(noiseSurface(size, 128, 50, seed + 3, 4, 12, 14), 0.8), { srgb: false }),
      roughnessMap: makeTexture(roughnessTexture(256, 150, 50, seed + 8), { srgb: false })
    }
  })
}

export function wallpaperTextures() {
  return cached('wallpaper', () => {
    const size = 512
    const seed = 111
    const c = canvas(size)
    const ctx = c.getContext('2d')
    ctx.fillStyle = '#8d8874'; ctx.fillRect(0, 0, size, size)
    const rng = mulberry32(seed)
    // faded stripe + damask pattern
    for (let x = 0; x < size; x += 64) {
      ctx.fillStyle = 'rgba(120,112,92,0.35)'; ctx.fillRect(x, 0, 26, size)
      ctx.fillStyle = 'rgba(160,150,126,0.16)'; ctx.fillRect(x + 30, 0, 3, size)
    }
    for (let y = 40; y < size; y += 110) {
      for (let x = 32; x < size; x += 64) {
        ctx.save(); ctx.translate(x, y)
        ctx.strokeStyle = 'rgba(105,98,80,0.35)'; ctx.lineWidth = 1.2
        ctx.beginPath(); ctx.ellipse(0, 0, 13, 22, 0, 0, Math.PI * 2); ctx.stroke()
        ctx.beginPath(); ctx.ellipse(0, 0, 6, 12, 0, 0, Math.PI * 2); ctx.stroke()
        ctx.beginPath(); ctx.moveTo(-13, 0); ctx.lineTo(13, 0); ctx.stroke()
        ctx.restore()
      }
    }
    ctx.drawImage(noiseSurface(size, 150, 40, seed + 2, 5, 8, 0.2), 0, 0, size, size, 0, 0, size, size)
    ctx.globalCompositeOperation = 'multiply'; ctx.globalAlpha = 0.4
    ctx.drawImage(noiseSurface(size, 210, 55, seed + 4, 4, 4, 0), 0, 0)
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over'
    for (let i = 0; i < 25; i++) grimeBlob(ctx, rng, rng() * size, rng() * size, 12 + rng() * 80, 'rgba(55,49,38,@a)', 0.1 + rng() * 0.25)
    // peeling
    for (let i = 0; i < 8; i++) {
      const x = rng() * size, y = rng() * size
      ctx.fillStyle = 'rgba(145,136,115,0.5)'
      ctx.beginPath(); ctx.moveTo(x, y)
      for (let p = 0; p < 7; p++) ctx.lineTo(x + (rng() - 0.5) * 55, y + (rng() - 0.5) * 55)
      ctx.closePath(); ctx.fill()
    }
    return {
      map: makeTexture(c),
      normalMap: makeTexture(normalMapFromHeight(noiseSurface(size, 128, 40, seed + 6, 4, 10, 6), 0.8), { srgb: false }),
      roughnessMap: makeTexture(roughnessTexture(256, 220, 20, seed + 9), { srgb: false })
    }
  })
}

export function tileTextures(kind = 'hospital') {
  return cached('tile-' + kind, () => {
    const size = 512
    const seed = kind === 'hospital' ? 121 : 131
    const c = canvas(size)
    const ctx = c.getContext('2d')
    const rng = mulberry32(seed)
    const grout = 4
    const tile = 64
    const palette = kind === 'hospital'
      ? [[156, 165, 145], [140, 151, 132], [166, 172, 152]]
      : [[116, 104, 84], [102, 92, 74], [126, 112, 90]]
    ctx.fillStyle = kind === 'hospital' ? '#6f7566' : '#5c5344'
    ctx.fillRect(0, 0, size, size)
    for (let y = 0; y < size; y += tile) {
      for (let x = 0; x < size; x += tile) {
        const p = palette[Math.floor(rng() * palette.length)]
        ctx.fillStyle = `rgb(${p[0]},${p[1]},${p[2]})`
        ctx.fillRect(x + grout / 2, y + grout / 2, tile - grout, tile - grout)
        ctx.fillStyle = 'rgba(255,255,255,0.035)'
        ctx.fillRect(x + 5, y + 5, tile - 12, 2)
      }
    }
    ctx.drawImage(noiseSurface(size, 140, 32, seed + 3, 5, 10, 0.2), 0, 0, size, size, 0, 0, size, size)
    ctx.globalCompositeOperation = 'multiply'; ctx.globalAlpha = 0.45
    ctx.drawImage(noiseSurface(size, 200, 60, seed + 4, 4, 5, 0), 0, 0)
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over'
    for (let i = 0; i < 22; i++) grimeBlob(ctx, rng, rng() * size, rng() * size, 6 + rng() * 55, 'rgba(48,44,35,@a)', 0.12 + rng() * 0.3)
    for (let i = 0; i < 5; i++) crack(ctx, rng, rng() * size, rng() * size, 20 + rng() * 20, 0.7, 'rgba(45,42,35,0.5)', 1)
    const h = canvas(size)
    const hctx = h.getContext('2d')
    hctx.fillStyle = '#555'; hctx.fillRect(0, 0, size, size)
    for (let y = 0; y < size; y += tile) for (let x = 0; x < size; x += tile) {
      hctx.fillStyle = '#d0d0d0'; hctx.fillRect(x + grout / 2, y + grout / 2, tile - grout, tile - grout)
    }
    return {
      map: makeTexture(c),
      normalMap: makeTexture(normalMapFromHeight(h, 1), { srgb: false }),
      roughnessMap: makeTexture(roughnessTexture(256, 150, 30, seed + 5), { srgb: false })
    }
  })
}

export function carpetTextures() {
  return cached('carpet', () => {
    const size = 256
    const c = canvas(size)
    const ctx = c.getContext('2d')
    ctx.drawImage(noiseSurface(size, 105, 50, 151, 5, 24, 0.5), 0, 0)
    ctx.strokeStyle = 'rgba(130,80,55,0.18)'; ctx.lineWidth = 2
    ctx.strokeRect(20, 20, size - 40, size - 40)
    ctx.strokeRect(28, 28, size - 56, size - 56)
    return { map: makeTexture(ctx.canvas), normalMap: makeTexture(normalMapFromHeight(noiseSurface(size, 128, 60, 152, 4, 25, 8), 0.6), { srgb: false }) }
  })
}

export function litWindowTexture(seed = 1) {
  return cached('litwindow' + seed, () => {
    const w = 256, h = 256
    const c = document.createElement('canvas'); c.width = w; c.height = h
    const ctx = c.getContext('2d')
    const rng = mulberry32(seed * 77 + 3)
    const warm = seed % 3 === 0 ? ['#ffd99c', '#e8a75c', '#6e3c1e'] : seed % 3 === 1 ? ['#e7d8b6', '#b79868', '#4b2f19'] : ['#c6d6c2', '#8b9f8a', '#33443a']
    const g = ctx.createLinearGradient(0, 0, 0, h)
    g.addColorStop(0, warm[0]); g.addColorStop(0.52, warm[1]); g.addColorStop(1, warm[2])
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h)
    // room silhouette
    ctx.fillStyle = 'rgba(22,16,11,0.65)'
    if (rng() < 0.6) ctx.fillRect(0, h * 0.62, w, h * 0.38)
    if (rng() < 0.6) ctx.fillRect(w * 0.6, h * 0.3, w * 0.34, h * 0.5)
    // blinds / curtains
    if (rng() < 0.55) {
      ctx.fillStyle = 'rgba(32,24,16,0.55)'
      for (let y = 10; y < h * 0.62; y += 12) ctx.fillRect(0, y, w, 5)
    } else {
      ctx.fillStyle = 'rgba(25,20,15,0.5)'
      ctx.fillRect(0, 0, w * 0.16, h); ctx.fillRect(w * 0.84, 0, w * 0.16, h)
    }
    // grime + cross bars
    ctx.fillStyle = 'rgba(17,20,17,0.65)'
    ctx.fillRect(w / 2 - 3, 0, 6, h); ctx.fillRect(0, h / 2 - 3, w, 6)
    ctx.strokeStyle = 'rgba(18,20,17,0.8)'; ctx.lineWidth = 10; ctx.strokeRect(0, 0, w, h)
    for (let i = 0; i < 10; i++) grimeBlob(ctx, rng, rng() * w, rng() * h, 5 + rng() * 20, 'rgba(20,16,10,@a)', 0.2)
    const tex = makeTexture(c)
    return tex
  })
}

export function windowPaneTexture() {
  return cached('windowpane', () => {
    const w = 256, h = 256
    const c = document.createElement('canvas'); c.width = w; c.height = h
    const ctx = c.getContext('2d')
    const g = ctx.createLinearGradient(0, 0, w, h)
    g.addColorStop(0, '#1d2828'); g.addColorStop(0.45, '#0e1718'); g.addColorStop(1, '#25302e')
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h)
    // faint sky reflection
    const r = ctx.createLinearGradient(0, 0, 0, h)
    r.addColorStop(0, 'rgba(210,195,165,0.22)'); r.addColorStop(0.4, 'rgba(160,165,150,0.05)'); r.addColorStop(1, 'rgba(30,35,30,0)')
    ctx.fillStyle = r; ctx.fillRect(0, 0, w, h)
    const rng = mulberry32(171)
    // streaks and dirt
    for (let i = 0; i < 30; i++) {
      const x = rng() * w, y = rng() * h
      const gg = ctx.createLinearGradient(x, y, x + 3, y + 60)
      gg.addColorStop(0, 'rgba(25,30,25,0.25)'); gg.addColorStop(1, 'rgba(25,30,25,0)')
      ctx.fillStyle = gg; ctx.fillRect(x, y, 2 + rng() * 5, 40 + rng() * 70)
    }
    ctx.strokeStyle = 'rgba(8,10,9,0.9)'; ctx.lineWidth = 9; ctx.strokeRect(0, 0, w, h)
    ctx.fillStyle = 'rgba(10,12,10,0.7)'; ctx.fillRect(w / 2 - 3, 0, 6, h); ctx.fillRect(0, h / 2 - 3, w, 6)
    return makeTexture(c)
  })
}

export function signTexture(text, {
  bg = '#1b1c17', fg = '#e8e2d2', accent = '#c94f2d', sub = '', w = 512, h = 256,
  border = true, font = 'Barlow Condensed', weight = 600, size = 96, align = 'center', vertical = false, icon = ''
} = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h
  const ctx = c.getContext('2d')
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h)
  // texture
  const rng = mulberry32(text.length * 37 + w)
  for (let i = 0; i < 25; i++) grimeBlob(ctx, rng, rng() * w, rng() * h, 5 + rng() * 40, 'rgba(40,36,28,@a)', 0.08 + rng() * 0.14)
  if (border) {
    ctx.strokeStyle = accent; ctx.lineWidth = 6; ctx.strokeRect(12, 12, w - 24, h - 24)
    ctx.strokeStyle = 'rgba(232,226,210,0.3)'; ctx.lineWidth = 1; ctx.strokeRect(20, 20, w - 40, h - 40)
  }
  ctx.textAlign = align
  ctx.textBaseline = 'middle'
  const cx = align === 'center' ? w / 2 : align === 'left' ? 38 : w - 38
  if (vertical) {
    ctx.save(); ctx.translate(w / 2, h / 2); ctx.rotate(-Math.PI / 2)
    ctx.fillStyle = fg; ctx.font = `${weight} ${size}px "${font}", Arial Narrow, sans-serif`
    ctx.fillText(text, 0, 0)
    ctx.restore()
  } else {
    if (icon) {
      ctx.font = `${size * 0.75}px "Barlow Condensed", sans-serif`
      ctx.fillStyle = accent
      ctx.fillText(icon, cx, h / 2 - (sub ? 22 : 0))
    }
    ctx.fillStyle = fg
    ctx.font = `${weight} ${size}px "${font}", Arial Narrow, sans-serif`
    ctx.fillText(text, cx, h / 2 - (sub ? 20 : 0) + (icon ? size * 0.52 : 0))
    if (sub) {
      ctx.fillStyle = accent
      ctx.font = `400 ${Math.max(18, size * 0.22)}px "Barlow Condensed", sans-serif`
      ctx.letterSpacing = '4px'
      ctx.fillText(sub, cx, h / 2 + size * 0.55)
    }
  }
  // chipped vinyl letters
  ctx.globalCompositeOperation = 'destination-out'
  for (let i = 0; i < 90; i++) {
    ctx.globalAlpha = 0.15 + rng() * 0.5
    ctx.beginPath(); ctx.arc(rng() * w, rng() * h, rng() * 2.5, 0, Math.PI * 2); ctx.fill()
  }
  ctx.globalAlpha = 1
  ctx.globalCompositeOperation = 'source-over'
  return makeTexture(c)
}

export function posterTexture(kind = 'missing') {
  return cached('poster-' + kind, () => {
    const w = 512, h = 720
    const c = document.createElement('canvas'); c.width = w; c.height = h
    const ctx = c.getContext('2d')
    const rng = mulberry32(kind.length * 91 + 7)
    ctx.fillStyle = '#d8d1bf'; ctx.fillRect(0, 0, w, h)
    if (kind === 'missing') {
      ctx.fillStyle = '#1c1c18'; ctx.font = '600 78px "Barlow Condensed", Arial Narrow, sans-serif'; ctx.textAlign = 'center'
      ctx.fillText('MISSING', w / 2, 105)
      ctx.font = '400 26px "Barlow Condensed", sans-serif'; ctx.fillStyle = '#b33a2c'
      ctx.fillText('HAVE YOU SEEN HER?', w / 2, 145)
      // portrait silhouette
      ctx.fillStyle = '#b9b2a2'; ctx.fillRect(60, 180, w - 120, 330)
      ctx.fillStyle = '#6d675c'
      ctx.beginPath(); ctx.arc(w / 2, 300, 90, 0, Math.PI * 2); ctx.fill()
      ctx.beginPath(); ctx.ellipse(w / 2, 500, 135, 155, 0, Math.PI, 0); ctx.fill()
      ctx.fillStyle = '#1c1c18'; ctx.font = '500 24px "Barlow Condensed", sans-serif'; ctx.textAlign = 'left'
      ctx.fillText('MARTA VEGA · 14 YEARS OLD', 50, 565)
      ctx.font = '400 19px Inter, sans-serif'; ctx.fillStyle = '#3a3833'
      ctx.fillText('Last seen near the Harbor Pharmacy, Sector 7.', 50, 603)
      ctx.fillText('Do not approach infected. Call quarantine line 118.', 50, 632)
      ctx.fillStyle = '#b33a2c'; ctx.fillRect(50, 655, w - 100, 34)
      ctx.fillStyle = '#f0e9da'; ctx.font = '600 22px "Barlow Condensed", sans-serif'; ctx.textAlign = 'center'
      ctx.fillText('REWARD — 2 DAYS OF SUPPLIES', w / 2, 680)
    } else if (kind === 'quarantine') {
      ctx.fillStyle = '#d8c25c'; ctx.fillRect(0, 0, w, h)
      ctx.fillStyle = '#171711'; ctx.fillRect(22, 22, w - 44, h - 44)
      ctx.strokeStyle = '#d8c25c'; ctx.lineWidth = 8; ctx.strokeRect(38, 38, w - 76, h - 76)
      ctx.fillStyle = '#d8c25c'; ctx.textAlign = 'center'
      ctx.font = '700 64px "Barlow Condensed", sans-serif'
      ctx.fillText('QUARANTINE', w / 2, 140)
      ctx.font = '600 138px "Barlow Condensed", sans-serif'
      ctx.fillText('KEEP', w / 2, 290)
      ctx.fillText('OUT', w / 2, 410)
      ctx.font = '400 27px "Barlow Condensed", sans-serif'
      ctx.fillText('SECTOR 7 SEALED BY ORDER OF', w / 2, 500)
      ctx.fillText('HARBOR CITY EMERGENCY COUNCIL', w / 2, 536)
      ctx.strokeStyle = '#d8c25c'; ctx.lineWidth = 4
      ctx.beginPath(); ctx.arc(w / 2, 620, 22, 0, Math.PI * 2); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(w / 2, 598); ctx.lineTo(w / 2, 620); ctx.lineTo(w / 2 + 14, 630); ctx.stroke()
    } else {
      // evacuation / help
      ctx.fillStyle = '#22231e'; ctx.fillRect(0, 0, w, h)
      ctx.strokeStyle = '#c8c2b0'; ctx.lineWidth = 3; ctx.strokeRect(20, 20, w - 40, h - 40)
      ctx.fillStyle = '#d8d1bf'; ctx.textAlign = 'center'
      ctx.font = '700 58px "Barlow Condensed", sans-serif'
      ctx.fillText('SAFE HOUSE', w / 2, 120)
      ctx.fillStyle = '#a9c46a'; ctx.font = '600 38px "Barlow Condensed", sans-serif'
      ctx.fillText('THE OLD LAUNDRY', w / 2, 175)
      ctx.fillStyle = '#d8d1bf'; ctx.font = '400 24px Inter, sans-serif'
      ctx.fillText('Water · Shelter · Radio', w / 2, 230)
      // crude map lines
      ctx.strokeStyle = '#6d6a5c'; ctx.lineWidth = 5
      ctx.beginPath(); ctx.moveTo(70, 300); ctx.lineTo(440, 300); ctx.moveTo(260, 260); ctx.lineTo(260, 590); ctx.stroke()
      ctx.strokeStyle = '#a9c46a'; ctx.lineWidth = 8
      ctx.beginPath(); ctx.moveTo(260, 300); ctx.lineTo(260, 470); ctx.lineTo(350, 470); ctx.lineTo(350, 560); ctx.stroke()
      ctx.fillStyle = '#a9c46a'; ctx.beginPath(); ctx.arc(350, 560, 18, 0, Math.PI * 2); ctx.fill()
      ctx.fillStyle = '#d8d1bf'; ctx.font = '400 22px "Barlow Condensed", sans-serif'
      ctx.fillText('IF YOU CAN READ THIS — THE CITY IS LOST.', w / 2, 660)
    }
    // aged paper
    ctx.globalCompositeOperation = 'multiply'
    ctx.globalAlpha = 0.25
    ctx.drawImage(noiseSurface(256, 190, 50, 4, 4, 5, 0), 0, 0, 256, 256, 0, 0, w, h)
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over'
    for (let i = 0; i < 35; i++) grimeBlob(ctx, rng, rng() * w, rng() * h, 5 + rng() * 45, 'rgba(50,42,28,@a)', 0.1 + rng() * 0.2)
    // torn corners
    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(55, 0); ctx.lineTo(0, 70); ctx.fill()
    ctx.beginPath(); ctx.moveTo(w, h); ctx.lineTo(w - 45, h); ctx.lineTo(w, h - 60); ctx.fill()
    return makeTexture(c)
  })
}

export function graffitiTexture(text, color = '#b8472f', seed = 1) {
  return cached('graffiti-' + text + color + seed, () => {
    const w = 512, h = 256
    const c = document.createElement('canvas'); c.width = w; c.height = h
    const ctx = c.getContext('2d')
    const rng = mulberry32(seed * 51 + text.length)
    ctx.translate(w / 2, h / 2)
    ctx.rotate((rng() - 0.5) * 0.12)
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
    ctx.font = '700 96px "Barlow Condensed", Arial Narrow, sans-serif'
    // spray halo
    ctx.shadowColor = color; ctx.shadowBlur = 18
    ctx.strokeStyle = 'rgba(28,25,20,0.35)'; ctx.lineWidth = 16
    ctx.strokeText(text, 0, 0)
    ctx.fillStyle = color; ctx.globalAlpha = 0.9
    ctx.fillText(text, 0, 0)
    ctx.shadowBlur = 0; ctx.globalAlpha = 1
    // drips
    for (let i = 0; i < 26; i++) {
      const x = (rng() - 0.5) * w * 0.8, y = 20 + rng() * 40
      ctx.fillStyle = color; ctx.globalAlpha = 0.35 + rng() * 0.3
      ctx.fillRect(x, y, 2 + rng() * 2, 10 + rng() * 80)
    }
    ctx.globalAlpha = 1
    // erase speckles
    ctx.globalCompositeOperation = 'destination-out'
    for (let i = 0; i < 220; i++) {
      ctx.globalAlpha = rng() * 0.7
      ctx.beginPath(); ctx.arc(rng() * w - w / 2, rng() * h - h / 2, rng() * 2.2, 0, Math.PI * 2); ctx.fill()
    }
    return makeTexture(c)
  })
}

export function bloodTexture(seed = 1) {
  return cached('blood' + seed, () => {
    const size = 256
    const c = canvas(size); const ctx = c.getContext('2d')
    const rng = mulberry32(seed * 19 + 5)
    for (let i = 0; i < 42; i++) {
      const x = size / 2 + (rng() - 0.5) * 120, y = size / 2 + (rng() - 0.5) * 120
      const r = 2 + rng() * (i < 6 ? 28 : 10)
      const g = ctx.createRadialGradient(x, y, 0, x, y, r)
      g.addColorStop(0, `rgba(${70 + rng() * 30},${8 + rng() * 8},${5 + rng() * 5},${0.5 + rng() * 0.4})`)
      g.addColorStop(1, 'rgba(45,4,3,0)')
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill()
    }
    for (let i = 0; i < 12; i++) {
      const x = rng() * size, y = rng() * size, len = 10 + rng() * 60
      const g = ctx.createLinearGradient(x, y, x, y + len)
      g.addColorStop(0, 'rgba(72,8,5,0.55)'); g.addColorStop(1, 'rgba(55,4,3,0)')
      ctx.strokeStyle = g; ctx.lineWidth = 1 + rng() * 4
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + len); ctx.stroke()
    }
    return makeTexture(c)
  })
}

export function puddleTexture() {
  return cached('puddle', () => {
    const size = 512
    const c = canvas(size); const ctx = c.getContext('2d')
    ctx.clearRect(0, 0, size, size)
    ctx.fillStyle = '#1a2020'
    ctx.beginPath()
    const rng = mulberry32(202)
    const pts = 24
    for (let i = 0; i < pts; i++) {
      const a = i / pts * Math.PI * 2
      const r = size * (0.29 + fbm(Math.cos(a) * 2 + 5, Math.sin(a) * 2 + 5, 3, 4) * 0.12)
      const x = size / 2 + Math.cos(a) * r, y = size / 2 + Math.sin(a) * r
      i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)
    }
    ctx.closePath(); ctx.fill()
    ctx.strokeStyle = 'rgba(160,170,160,0.15)'; ctx.lineWidth = 2; ctx.stroke()
    return makeTexture(c)
  })
}

export function weedTexture() {
  return cached('weeds', () => {
    const w = 256, h = 256
    const c = document.createElement('canvas'); c.width = w; c.height = h
    const ctx = c.getContext('2d')
    const rng = mulberry32(303)
    for (let i = 0; i < 80; i++) {
      const x = 30 + rng() * (w - 60)
      const hh = 30 + rng() * 150
      const bend = (rng() - 0.5) * 55
      const col = rng() < 0.4 ? `rgba(108,112,62,${0.5 + rng() * 0.4})` : `rgba(${120 + rng() * 30},${105 + rng() * 25},${62 + rng() * 20},${0.4 + rng() * 0.4})`
      ctx.strokeStyle = col; ctx.lineWidth = 1 + rng() * 2
      ctx.beginPath(); ctx.moveTo(x, h)
      ctx.quadraticCurveTo(x + bend * 0.3, h - hh * 0.6, x + bend, h - hh); ctx.stroke()
      if (rng() < 0.5) {
        ctx.fillStyle = col
        ctx.beginPath(); ctx.ellipse(x + bend, h - hh, 2 + rng() * 3, 6 + rng() * 8, bend * 0.01, 0, Math.PI * 2); ctx.fill()
      }
    }
    const t = makeTexture(c)
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping
    return t
  })
}

export function ivyTexture() {
  return cached('ivy', () => {
    const w = 256, h = 256
    const c = document.createElement('canvas'); c.width = w; c.height = h
    const ctx = c.getContext('2d')
    const rng = mulberry32(404)
    for (let i = 0; i < 240; i++) {
      const x = rng() * w, y = rng() * h
      const r = 3 + rng() * 10
      ctx.fillStyle = `rgba(${32 + rng() * 30},${52 + rng() * 30},${25 + rng() * 15},${0.5 + rng() * 0.4})`
      ctx.beginPath(); ctx.ellipse(x, y, r, r * (0.4 + rng() * 0.5), rng() * 3, 0, Math.PI * 2); ctx.fill()
    }
    const t = makeTexture(c)
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping
    return t
  })
}

export function paperTexture() {
  return cached('paper', () => {
    const size = 256
    const c = canvas(size); const ctx = c.getContext('2d')
    ctx.drawImage(noiseSurface(size, 205, 30, 505, 5, 14, 0.4), 0, 0)
    const rng = mulberry32(505)
    for (let i = 0; i < 40; i++) {
      ctx.strokeStyle = `rgba(90,85,72,${0.05 + rng() * 0.15})`
      ctx.beginPath(); ctx.moveTo(rng() * size, rng() * size); ctx.lineTo(rng() * size, rng() * size); ctx.stroke()
    }
    return makeTexture(c)
  })
}

export function hazardStripeTexture() {
  return cached('hazard', () => {
    const size = 256
    const c = canvas(size); const ctx = c.getContext('2d')
    ctx.fillStyle = '#c9a93f'; ctx.fillRect(0, 0, size, size)
    ctx.fillStyle = '#1b1a16'
    for (let i = -size; i < size * 2; i += 64) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i + 32, 0); ctx.lineTo(i + 32 - size, size); ctx.lineTo(i - size, size); ctx.closePath(); ctx.fill()
    }
    ctx.globalAlpha = 0.3; ctx.drawImage(noiseSurface(size, 128, 90, 606, 5, 10, 0.3), 0, 0)
    return makeTexture(c)
  })
}

export function awningTexture(color1 = '#8c3d2c', color2 = '#d9cdb2') {
  return cached('awning-' + color1 + color2, () => {
    const w = 256, h = 256
    const c = document.createElement('canvas'); c.width = w; c.height = h
    const ctx = c.getContext('2d')
    ctx.fillStyle = color1; ctx.fillRect(0, 0, w, h)
    for (let x = 0; x < w; x += 48) { ctx.fillStyle = color2; ctx.fillRect(x, 0, 24, h) }
    ctx.globalAlpha = 0.25; ctx.drawImage(noiseSurface(w, 128, 80, 707, 5, 8, 0.4), 0, 0)
    return makeTexture(c)
  })
}

export function dirtTexture() {
  return cached('dirt', () => {
    const size = 512
    const c = noiseSurface(size, 93, 60, 808, 6, 8, 0.4)
    const ctx = c.getContext('2d')
    const rng = mulberry32(808)
    for (let i = 0; i < 60; i++) grimeBlob(ctx, rng, rng() * size, rng() * size, 8 + rng() * 45, 'rgba(55,45,30,@a)', 0.2 + rng() * 0.3)
    return {
      map: makeTexture(c),
      normalMap: makeTexture(normalMapFromHeight(noiseSurface(size, 128, 80, 809, 5, 12, 12), 1.4), { srgb: false }),
      roughnessMap: makeTexture(roughnessTexture(256, 235, 15, 810), { srgb: false })
    }
  })
}

export function dirtTextures() {
  return dirtTexture()
}

export function skyCanvasTexture(phase = 0) {
  // Equirectangular sky used by the menu/distant environment. Updated rarely.
  const w = 1024, h = 512
  const c = document.createElement('canvas'); c.width = w; c.height = h
  const ctx = c.getContext('2d')
  const g = ctx.createLinearGradient(0, 0, 0, h)
  g.addColorStop(0, '#1d3147')
  g.addColorStop(0.38, '#50667a')
  g.addColorStop(0.52, '#b88e6a')
  g.addColorStop(0.57, '#e0a878')
  g.addColorStop(0.64, '#9e7b61')
  g.addColorStop(1, '#2e2c28')
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h)
  const rng = mulberry32(909)
  // hazy cloud streaks
  for (let i = 0; i < 55; i++) {
    const x = rng() * w, y = h * (0.2 + rng() * 0.34), rw = 40 + rng() * 240, rh = 3 + rng() * 16
    const cg = ctx.createRadialGradient(x, y, 0, x, y, rw)
    cg.addColorStop(0, `rgba(${210 + rng() * 30},${185 + rng() * 30},${160 + rng() * 20},${0.05 + rng() * 0.14})`)
    cg.addColorStop(1, 'rgba(180,160,140,0)')
    ctx.fillStyle = cg
    ctx.beginPath(); ctx.ellipse(x, y, rw, rh, 0, 0, Math.PI * 2); ctx.fill()
  }
  // sun glow
  const sunx = w * 0.14, suny = h * 0.55
  const sg = ctx.createRadialGradient(sunx, suny, 0, sunx, suny, 230)
  sg.addColorStop(0, 'rgba(255,232,190,0.95)')
  sg.addColorStop(0.05, 'rgba(255,205,140,0.6)')
  sg.addColorStop(0.4, 'rgba(240,150,90,0.16)')
  sg.addColorStop(1, 'rgba(220,130,80,0)')
  ctx.fillStyle = sg; ctx.fillRect(0, 0, w, h)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  t.mapping = THREE.EquirectangularReflectionMapping
  return t
}

export function crackDecalTexture() {
  return cached('crackdecal', () => {
    const w = 512, h = 512
    const c = document.createElement('canvas'); c.width = w; c.height = h
    const ctx = c.getContext('2d')
    const rng = mulberry32(1001)
    ctx.strokeStyle = 'rgba(210,220,218,0.5)'
    for (let i = 0; i < 16; i++) {
      ctx.lineWidth = 0.6 + rng()
      const cx = 20 + rng() * (w - 40), cy = 20 + rng() * (h - 40)
      crack(ctx, rng, cx, cy, 30 + rng() * 60, 1.2, 'rgba(215,225,222,0.38)', 3)
    }
    // glass shard highlights
    for (let i = 0; i < 25; i++) {
      ctx.fillStyle = 'rgba(225,235,230,0.08)'
      ctx.beginPath(); ctx.moveTo(rng() * w, rng() * h)
      ctx.lineTo(rng() * w, rng() * h); ctx.lineTo(rng() * w, rng() * h); ctx.closePath(); ctx.fill()
    }
    return makeTexture(c)
  })
}

export function decalTexture(kind) {
  return cached('decal-' + kind, () => {
    const size = 256
    const c = canvas(size); const ctx = c.getContext('2d')
    const rng = mulberry32(kind.length * 33 + 3)
    if (kind === 'oil') {
      for (let i = 0; i < 16; i++) grimeBlob(ctx, rng, size / 2 + (rng() - 0.5) * 80, size / 2 + (rng() - 0.5) * 80, 15 + rng() * 45, 'rgba(10,10,9,@a)', 0.35)
    } else if (kind === 'leaves') {
      for (let i = 0; i < 90; i++) {
        const x = rng() * size, y = rng() * size
        ctx.fillStyle = `rgba(${95 + rng() * 40},${72 + rng() * 30},${35 + rng() * 20},${0.4 + rng() * 0.4})`
        ctx.save(); ctx.translate(x, y); ctx.rotate(rng() * 6)
        ctx.beginPath(); ctx.ellipse(0, 0, 2 + rng() * 5, 1 + rng() * 2, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore()
      }
    } else if (kind === 'trash') {
      for (let i = 0; i < 20; i++) {
        ctx.fillStyle = `rgba(${190 + rng() * 40},${185 + rng() * 35},${165 + rng() * 30},${0.4 + rng() * 0.5})`
        ctx.save(); ctx.translate(rng() * size, rng() * size); ctx.rotate(rng() * 6)
        ctx.fillRect(0, 0, 4 + rng() * 16, 2 + rng() * 8); ctx.restore()
      }
    }
    return makeTexture(c)
  })
}

export function smokeTexture() {
  return cached('smoke', () => {
    const size = 256
    const c = canvas(size); const ctx = c.getContext('2d')
    ctx.clearRect(0, 0, size, size)
    const rng = mulberry32(1100)
    for (let i = 0; i < 38; i++) {
      const x = size / 2 + (rng() - 0.5) * 90, y = size / 2 + (rng() - 0.5) * 90
      const r = 18 + rng() * 60
      const g = ctx.createRadialGradient(x, y, 0, x, y, r)
      g.addColorStop(0, 'rgba(70,70,68,0.16)'); g.addColorStop(1, 'rgba(70,70,68,0)')
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill()
    }
    return makeTexture(c)
  })
}

export function muzzleFlashTexture() {
  return cached('muzzle', () => {
    const size = 256
    const c = canvas(size); const ctx = c.getContext('2d')
    ctx.translate(size / 2, size / 2)
    const g = ctx.createRadialGradient(0, 0, 0, 0, 0, size / 2)
    g.addColorStop(0, 'rgba(255,250,225,1)')
    g.addColorStop(0.12, 'rgba(255,220,140,0.95)')
    g.addColorStop(0.34, 'rgba(255,150,60,0.45)')
    g.addColorStop(1, 'rgba(255,110,30,0)')
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, size / 2, 0, Math.PI * 2); ctx.fill()
    const rng = mulberry32(1201)
    ctx.fillStyle = 'rgba(255,230,170,0.8)'
    for (let i = 0; i < 7; i++) {
      ctx.save(); ctx.rotate(rng() * Math.PI * 2)
      ctx.beginPath(); ctx.moveTo(0, -6); ctx.lineTo(size * (0.2 + rng() * 0.28), 0); ctx.lineTo(0, 6); ctx.fill(); ctx.restore()
    }
    return makeTexture(c)
  })
}
