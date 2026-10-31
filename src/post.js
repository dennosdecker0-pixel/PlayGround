import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uVignette: { value: 1.05 },
    uAberration: { value: 0.00065 },
    uGrain: { value: 0.008 },
    uDesaturate: { value: 0.16 },
    uWarmth: { value: 0.06 },
    uDamage: { value: 0 }
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */`
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uVignette;
    uniform float uAberration;
    uniform float uGrain;
    uniform float uDesaturate;
    uniform float uWarmth;
    uniform float uDamage;

    float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    void main() {
      vec2 uv = vUv;
      vec2 centered = uv - 0.5;
      float r2 = dot(centered, centered);

      // subtle lateral chromatic aberration toward the edges
      vec2 dir = centered * uAberration * (0.35 + r2 * 2.4);
      vec3 col;
      col.r = texture2D(tDiffuse, uv + dir).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - dir).b;

      // filmic contrast and colour grade
      float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(col, vec3(luma), uDesaturate);
      col *= vec3(1.0 + uWarmth * 0.5, 1.0 + uWarmth * 0.12, 1.0 - uWarmth * 0.3);
      col = pow(col, vec3(0.97));
      col = mix(col, col * col * (3.0 - 2.0 * col), 0.12);
      // warm lifted shadows / cool highlights
      col += vec3(0.012, 0.006, -0.004) * (1.0 - smoothstep(0.0, 0.5, luma));
      col = mix(col, col * vec3(0.94, 0.99, 1.04), smoothstep(0.55, 1.0, luma) * 0.4);

      // vignette
      float vig = smoothstep(0.86, 0.24, r2 * uVignette);
      col *= mix(0.72, 1.0, vig);

      // damage tint at low health
      col = mix(col, vec3(0.24, 0.02, 0.01), uDamage * smoothstep(0.2, 0.7, r2) * 0.6);

      // grain
      float g = hash(uv * vec2(1920.0, 1080.0) + uTime * 53.0) - 0.5;
      col += g * uGrain;

      // gentle scanline
      col *= 1.0 - 0.006 * (0.5 + 0.5 * sin(uv.y * 1080.0 * 3.14159));

      gl_FragColor = vec4(max(col, vec3(0.0)), 1.0);
    }
  `
}

export class PostFX {
  constructor(renderer, scene, camera, opts = {}) {
    this.renderer = renderer
    this.scene = scene
    this.camera = camera
    this.quality = opts.quality || 'balanced'
    this.bloomEnabled = opts.bloom !== false
    this.enabled = true
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.composer = new EffectComposer(renderer)
    // Render targets do not inherit the canvas MSAA setting. Without this the
    // image is aliased before it ever reaches the bloom / grade passes.
    this.composer.renderTarget1.samples = 4
    this.composer.renderTarget2.samples = 4
    this.renderPass = new RenderPass(scene, camera)
    this.bloom = new UnrealBloomPass(new THREE.Vector2(this.width, this.height), 0.34, 0.62, 0.8)
    this.grade = new ShaderPass(GradeShader)
    this.output = new OutputPass()
    this.composer.addPass(this.renderPass)
    this.composer.addPass(this.bloom)
    this.composer.addPass(this.grade)
    this.composer.addPass(this.output)
    this.setQuality(this.quality)
  }

  setQuality(q) {
    this.quality = q
    this.enabled = q !== 'low'
    this.bloom.enabled = this.bloomEnabled && q !== 'low'
    if (this.bloom) {
      this.bloom.strength = q === 'high' ? 0.46 : 0.3
      this.bloom.radius = q === 'high' ? 0.5 : 0.38
      this.bloom.threshold = q === 'high' ? 0.76 : 0.82
    }
    this.grade.uniforms.uGrain.value = q === 'high' ? 0.009 : 0.007
    this.grade.uniforms.uAberration.value = q === 'high' ? 0.0008 : 0.0006
  }

  setBloom(on) {
    this.bloomEnabled = on
    this.bloom.enabled = on && this.quality !== 'low'
  }

  setSize(w, h, scale = 1) {
    this.width = Math.max(1, Math.floor(w * scale))
    this.height = Math.max(1, Math.floor(h * scale))
    this.composer.setSize(this.width, this.height)
    this.renderPass.setSize?.(this.width, this.height)
    this.bloom.setSize(this.width, this.height)
    this.grade.uniforms.uAberration.value = (this.quality === 'high' ? 0.0008 : 0.0006) * (1080 / Math.max(480, this.height)) * 0.9
  }

  setDamage(v) {
    this.grade.uniforms.uDamage.value = v
  }

  update(dt) {
    this.grade.uniforms.uTime.value += dt * 0.6
  }

  render() {
    if (this.enabled) this.composer.render()
    else this.renderer.render(this.scene, this.camera)
  }
}
