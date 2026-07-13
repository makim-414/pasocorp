// SOURCE: IRONACT design-system primitives/code/hero/fbo-particles-scene.tsx
// Adapted for PASO 2026-07-08: brand gold points, /paso-logo.svg morph target.
"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
// Retaining unused shape generators (sphere/torus/ring/spiral/etc.)
// as a toolbox for future FBO variants; they read well next to makeShapeData.

import { Canvas, useFrame, extend, createPortal } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
import { MeshSurfaceSampler } from "three/addons/math/MeshSurfaceSampler.js";

/* ───── GLSL shaders (inlined — raw-loader not available in Next.js) ───── */

const simulationVertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
  }
`;

const simulationFragmentShader = /* glsl */ `
  uniform sampler2D positions;
  uniform sampler2D uTargetPositions;
  uniform float uTime;
  uniform float uFrequency;
  uniform float uMorph;
  uniform float uHasTarget;
  uniform vec2  uMouse;         // normalized -1..1 (window space, smoothed)
  uniform float uMouseStrength; // 0..1
  varying vec2 vUv;

  vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}

  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 =   v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  vec3 snoiseVec3(vec3 x){
    float s  = snoise(vec3(x));
    float s1 = snoise(vec3(x.y - 19.1, x.z + 33.4, x.x + 47.2));
    float s2 = snoise(vec3(x.z + 74.2, x.x - 124.5, x.y + 99.4));
    return vec3(s, s1, s2);
  }

  vec3 curlNoise(vec3 p){
    const float e = 0.1;
    vec3 dx = vec3(e, 0.0, 0.0);
    vec3 dy = vec3(0.0, e, 0.0);
    vec3 dz = vec3(0.0, 0.0, e);
    vec3 p_x0 = snoiseVec3(p - dx); vec3 p_x1 = snoiseVec3(p + dx);
    vec3 p_y0 = snoiseVec3(p - dy); vec3 p_y1 = snoiseVec3(p + dy);
    vec3 p_z0 = snoiseVec3(p - dz); vec3 p_z1 = snoiseVec3(p + dz);
    float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
    float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
    float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;
    const float divisor = 1.0 / (2.0 * e);
    return normalize(vec3(x, y, z) * divisor);
  }

  // Y-axis rotation matrix
  mat3 rotY(float a){
    float c = cos(a), s = sin(a);
    return mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c);
  }

  void main() {
    // ── Original Heckel motion: two curl fields oscillating via sin(uTime) ──
    vec3 lowCurl  = texture2D(positions, vUv).rgb;
    vec3 highCurl = texture2D(positions, vUv).rgb;
    lowCurl  = curlNoise(lowCurl  * uFrequency + uTime * 0.1);
    highCurl = curlNoise(highCurl * uFrequency + uTime * 0.1);
    highCurl += curlNoise(highCurl * uFrequency * 2.0) * 0.5;
    vec3 noisePos = mix(lowCurl, highCurl, sin(uTime));

    // ── PA 3D logo target (Y-rotating volume + tiny wobble) ──
    vec3 targetPos = texture2D(uTargetPositions, vUv).rgb;
    targetPos = rotY(uTime * 0.25) * targetPos;
    vec3 wobble = snoiseVec3(targetPos * 3.0 + uTime * 0.4) * 0.025;
    vec3 shapePos = targetPos + wobble;

    // Blend logo into the noise at the current morph phase
    float morph = uMorph * uHasTarget;
    vec3 finalPos = mix(noisePos, shapePos, morph);

    // ── Cursor push: particles near the cursor get nudged outward ──
    // uMouse is window-NDC; scale to roughly world coords the particles live in.
    vec2 mouseWorld = uMouse * 2.0;
    float mDist = distance(finalPos.xy, mouseWorld);
    float push  = smoothstep(1.6, 0.0, mDist) * uMouseStrength;
    vec2  pushDir = normalize(finalPos.xy - mouseWorld + vec2(0.0001));
    finalPos.xy += pushDir * push * 0.45;

    gl_FragColor = vec4(finalPos, 1.0);
  }
`;

const renderVertexShader = /* glsl */ `
  uniform sampler2D uPositions;
  uniform float uTime;

  void main() {
    vec3 pos = texture2D(uPositions, position.xy).xyz;
    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    gl_PointSize = 3.0;
    gl_PointSize *= step(1.0 - (1.0/64.0), position.x) + 0.5;
  }
`;

const renderFragmentShader = /* glsl */ `
  void main() {
    vec3 color = vec3(0.788, 0.663, 0.431); // PASO gold-bright #c9a96e
    gl_FragColor = vec4(color, 1.0);
  }
`;

/* ───── SimulationMaterial (GPGPU) ───── */

function getRandomData(width: number, height: number) {
  const length = width * height * 4;
  const data = new Float32Array(length);
  for (let i = 0; i < length; i++) {
    const stride = i * 4;
    const distance = Math.sqrt(Math.random()) * 2.0;
    const theta = THREE.MathUtils.randFloatSpread(360);
    const phi = THREE.MathUtils.randFloatSpread(360);
    data[stride] = distance * Math.sin(theta) * Math.cos(phi);
    data[stride + 1] = distance * Math.sin(theta) * Math.sin(phi);
    data[stride + 2] = distance * Math.cos(theta);
    data[stride + 3] = 1.0;
  }
  return data;
}

function makeEmptyTargetTexture(size: number) {
  const data = new Float32Array(size * size * 4);
  const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat, THREE.FloatType);
  tex.needsUpdate = true;
  return tex;
}

class SimulationMaterial extends THREE.ShaderMaterial {
  constructor(size: number) {
    const positionsTexture = new THREE.DataTexture(
      getRandomData(size, size),
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType,
    );
    positionsTexture.needsUpdate = true;

    super({
      uniforms: {
        positions: { value: positionsTexture },
        uTargetPositions: { value: makeEmptyTargetTexture(size) },
        uFrequency: { value: 0.25 },
        uTime: { value: 0 },
        uMorph: { value: 0 },
        uHasTarget: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uMouseStrength: { value: 0.7 },
      },
      vertexShader: simulationVertexShader,
      fragmentShader: simulationFragmentShader,
    });
  }
}

extend({ SimulationMaterial });

declare module "@react-three/fiber" {
  interface ThreeElements {
    simulationMaterial: React.DetailedHTMLProps<
      React.HTMLAttributes<SimulationMaterial>,
      SimulationMaterial
    > & { args?: [number] };
  }
}

/* ───── Procedural shape target builders ───── */

function makeShapeData(
  count: number,
  generator: () => [number, number, number],
) {
  const out = new Float32Array(count * 4);
  for (let i = 0; i < count; i++) {
    const [x, y, z] = generator();
    out[i * 4] = x;
    out[i * 4 + 1] = y;
    out[i * 4 + 2] = z;
    out[i * 4 + 3] = 1.0;
  }
  return out;
}

function sphereGen(): [number, number, number] {
  const r = 1.5;
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);
  return [
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.sin(phi) * Math.sin(theta),
    r * Math.cos(phi),
  ];
}

function torusGen(): [number, number, number] {
  const R = 1.25;
  const r = 0.38;
  const u = Math.random() * Math.PI * 2;
  const v = Math.random() * Math.PI * 2;
  return [
    (R + r * Math.cos(v)) * Math.cos(u),
    (R + r * Math.cos(v)) * Math.sin(u),
    r * Math.sin(v),
  ];
}

function ringGen(): [number, number, number] {
  const rMin = 1.2;
  const rMax = 1.5;
  const r = rMin + Math.random() * (rMax - rMin);
  const theta = Math.random() * Math.PI * 2;
  return [r * Math.cos(theta), r * Math.sin(theta), (Math.random() - 0.5) * 0.1];
}

function spiralGalaxyGen(): [number, number, number] {
  const arms = 3;
  const arm = Math.floor(Math.random() * arms);
  const t = Math.random();
  const radius = 0.2 + t * 1.6;
  const theta =
    t * 6.0 + (arm / arms) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
  return [
    radius * Math.cos(theta) + (Math.random() - 0.5) * 0.08,
    radius * Math.sin(theta) + (Math.random() - 0.5) * 0.08,
    (Math.random() - 0.5) * 0.25,
  ];
}

/* ───── PA logo → true 3D volume via SVG extrude + surface sampling ───── */

function buildLogoTargetFromSVG(url: string, count: number): Promise<Float32Array> {
  return new Promise((resolve, reject) => {
    const loader = new SVGLoader();
    loader.load(
      url,
      (data) => {
        try {
          const meshes: THREE.Mesh[] = [];
          for (const path of data.paths) {
            const shapes = SVGLoader.createShapes(path);
            for (const shape of shapes) {
              const geo = new THREE.ExtrudeGeometry(shape, {
                depth: 80,
                bevelEnabled: false,
              });
              meshes.push(new THREE.Mesh(geo));
            }
          }
          if (meshes.length === 0) {
            reject(new Error("no shapes in SVG"));
            return;
          }

          // Center + uniform scale the whole thing into world ~3 unit cube
          const group = new THREE.Group();
          meshes.forEach((m) => group.add(m));
          group.updateMatrixWorld(true);
          const box = new THREE.Box3().setFromObject(group);
          const center = box.getCenter(new THREE.Vector3());
          const bsize = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(bsize.x, bsize.y, bsize.z);
          const worldScale = 1.95 / maxDim; // logo +30% (1.5 → 1.95)

          // Apply to each mesh geometry (SVG has flipped Y)
          for (const mesh of meshes) {
            mesh.geometry.translate(-center.x, -center.y, -center.z);
            mesh.geometry.scale(worldScale, -worldScale, worldScale);
            mesh.geometry.computeBoundingBox();
          }

          // Build surface samplers per mesh; distribute samples by bbox area
          const samplers = meshes.map((m) => new MeshSurfaceSampler(m).build());
          const weights = meshes.map((m) => {
            const bb = m.geometry.boundingBox!;
            return Math.max(
              0.01,
              (bb.max.x - bb.min.x) * (bb.max.y - bb.min.y),
            );
          });
          const totalWeight = weights.reduce((s, w) => s + w, 0);

          const out = new Float32Array(count * 4);
          const tmp = new THREE.Vector3();
          let filled = 0;
          for (let mi = 0; mi < meshes.length; mi++) {
            const share =
              mi === meshes.length - 1
                ? count - filled
                : Math.floor((weights[mi] / totalWeight) * count);
            for (let i = 0; i < share; i++) {
              samplers[mi].sample(tmp);
              out[filled * 4] = tmp.x;
              out[filled * 4 + 1] = tmp.y;
              out[filled * 4 + 2] = tmp.z;
              out[filled * 4 + 3] = 1.0;
              filled++;
            }
          }
          // Any remainder → sample from first mesh
          while (filled < count) {
            samplers[0].sample(tmp);
            out[filled * 4] = tmp.x;
            out[filled * 4 + 1] = tmp.y;
            out[filled * 4 + 2] = tmp.z;
            out[filled * 4 + 3] = 1.0;
            filled++;
          }

          meshes.forEach((m) => m.geometry.dispose());
          resolve(out);
        } catch (e) {
          reject(e);
        }
      },
      undefined,
      (err) => reject(err as unknown as Error),
    );
  });
}

/* ───── FBO particles ───── */

type ShapeEntry = { name: string; texture: THREE.DataTexture | null };
type FBOPhase = "idle" | "form" | "analyzing";

/** Mutable scroll progress (0..1) shared without re-rendering the canvas. */
export type ScrollDriveRef = { current: number };

function FBOParticles({
  phase = "idle",
  scrollDrive,
}: {
  phase?: FBOPhase;
  scrollDrive?: ScrollDriveRef;
}) {
  // 96² = ~9.2k particles (down from 128²/16.4k) — noticeably lighter on
  // fill-rate during the scroll choreography with no visible density loss.
  const size = 96;
  const points = useRef<THREE.Points>(null!);
  const simulationMaterialRef = useRef<SimulationMaterial>(null!);

  // Phase-driven animation state (accessed inside useFrame without re-rendering)
  const phaseRef = useRef<FBOPhase>(phase);
  const scatterBurstRef = useRef(0);
  useEffect(() => {
    if (phase !== phaseRef.current) {
      phaseRef.current = phase;
      // Re-arm the scatter burst on every transition so the cluster
      // dissolves → re-forms at the new target.
      // Kept modest — FBO particle positions feed back into themselves,
      // so an over-strong burst can send particles past the camera
      // frustum and they never recover.
      scatterBurstRef.current = phase === "analyzing" ? 0.85 : 0.7;
    }
  }, [phase]);

  const scene = useMemo(() => new THREE.Scene(), []);
  const camera = useMemo(
    () => new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1),
    [],
  );
  const positions = useMemo(
    () => new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0]),
    [],
  );
  const uvs = useMemo(
    () => new Float32Array([0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1]),
    [],
  );

  const renderTarget = useMemo(
    () =>
      new THREE.WebGLRenderTarget(size, size, {
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat,
        stencilBuffer: false,
        type: THREE.FloatType,
      }),
    [size],
  );

  const particlesPosition = useMemo(() => {
    const length = size * size;
    const particles = new Float32Array(length * 3);
    for (let i = 0; i < length; i++) {
      const i3 = i * 3;
      particles[i3 + 0] = (i % size) / size;
      particles[i3 + 1] = i / size / size;
    }
    return particles;
  }, [size]);

  const uniforms = useMemo(
    () => ({ uPositions: { value: null as THREE.Texture | null } }),
    [],
  );

  /* Only one morph target: the PA 3D logo (async-loaded). */
  const shapes: ShapeEntry[] = useMemo(
    () => [{ name: "logo", texture: null }],
    [],
  );

  /* Cursor tracking — window-NDC coords, smoothed per frame. */
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.ty = -(((e.clientY / window.innerHeight) * 2) - 1);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* Load PA logo as a 3D extrusion, sample its surface → target texture. */
  const [, setLogoReady] = useState(false);
  useEffect(() => {
    let cancelled = false;
    buildLogoTargetFromSVG("/paso-logo.svg", size * size)
      .then((positions) => {
        if (cancelled) return;
        const tex = new THREE.DataTexture(
          positions,
          size,
          size,
          THREE.RGBAFormat,
          THREE.FloatType,
        );
        tex.needsUpdate = true;
        shapes[0].texture = tex;
        setLogoReady(true);
      })
      .catch((e) => console.warn("[FBO] 3D logo build failed:", e));
    return () => {
      cancelled = true;
    };
  }, [size, shapes]);

  useFrame((state) => {
    const { gl, clock } = state;
    gl.setRenderTarget(renderTarget);
    gl.clear();
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    const mat = points.current.material as THREE.ShaderMaterial;
    mat.uniforms.uPositions.value = renderTarget.texture;

    const t = clock.elapsedTime;
    simulationMaterialRef.current.uniforms.uTime.value = t;

    // Smooth cursor (lerp toward target)
    const m = mouseRef.current;
    m.x += (m.tx - m.x) * 0.12;
    m.y += (m.ty - m.y) * 0.12;
    simulationMaterialRef.current.uniforms.uMouse.value.set(m.x, m.y);

    // ── Phase-driven choreography ─────────────────────────────────────
    // Instead of sliding the whole DOM wrapper, we move & scale the
    // actual <points> inside the scene, and pulse the simulation's
    // curl-noise frequency on phase change. That pulse makes the
    // particles dissolve for a moment, then reknit at the new
    // position/scale — the "venom moving sideways" effect.
    if (points.current) {
      let targetX = 0;
      let targetY = 0;
      let targetScale = 1.2;

      if (scrollDrive) {
        // ── Scroll choreography (PASO story beats) ──────────────────
        //   0.00–0.20  hero    : full breathing sphere, center
        //   0.20–0.45  find    : drifts left, settles smaller
        //   0.45–0.70  analyze : pulls center, tightens to a dense core
        //   0.70–1.00  grow    : re-expands and morphs into the wordmark
        const sp = Math.min(1, Math.max(0, scrollDrive.current));
        if (sp < 0.2) {
          targetX = 0; targetY = 0; targetScale = 1.2;
        } else if (sp < 0.45) {
          const k = (sp - 0.2) / 0.25;
          targetX = -1.0 * k; targetY = 0.15 * k; targetScale = 1.2 - 0.35 * k;
        } else if (sp < 0.7) {
          const k = (sp - 0.45) / 0.25;
          targetX = -1.0 + 1.0 * k; targetY = 0.15 - 0.15 * k; targetScale = 0.85 - 0.4 * k;
        } else {
          const k = (sp - 0.7) / 0.3;
          targetX = 0; targetY = 0; targetScale = 0.45 + 0.75 * k;
        }
      } else {
        const p = phaseRef.current;
        targetX = p === "form" ? 1.35 : 0;
        targetY = p === "form" ? 0.25 : 0;
        targetScale = p === "form" ? 0.82 : p === "analyzing" ? 0.42 : 1.2;
      }
      // Smooth lerp — eased, feels organic at ~0.06
      points.current.position.x +=
        (targetX - points.current.position.x) * 0.055;
      points.current.position.y +=
        (targetY - points.current.position.y) * 0.055;
      const sx = points.current.scale.x;
      const nextScale = sx + (targetScale - sx) * 0.055;
      points.current.scale.setScalar(nextScale);
    }

    // Exponential decay of the scatter burst (~0.5s lifetime).
    // Faster decay + smaller contribution keeps particles inside the
    // camera frustum so they never get "lost".
    scatterBurstRef.current *= 0.92;
    const baseFreq = 0.25;
    const burstContribution = scatterBurstRef.current * 1.3;
    simulationMaterialRef.current.uniforms.uFrequency.value =
      baseFreq + burstContribution;

    // Cycle through only shapes whose texture is ready (logo may still load)
    const ready = shapes.filter(
      (s): s is { name: string; texture: THREE.DataTexture } =>
        s.texture !== null,
    );
    if (ready.length === 0) {
      simulationMaterialRef.current.uniforms.uMorph.value = 0;
      simulationMaterialRef.current.uniforms.uHasTarget.value = 0;
      return;
    }

    let morphT: number;
    if (scrollDrive) {
      // Scroll-driven: the wordmark assembles across the last story beat.
      const sp = Math.min(1, Math.max(0, scrollDrive.current));
      morphT = sp < 0.74 ? 0 : Math.min(1, (sp - 0.74) / 0.18);
    } else {
      // 15 s cycle: whip-fast ramps, hold steady for ~1.8 s.
      //   0     – 10    → pure curl-noise
      //   10    – 10.3  → ramp into logo (0.3 s)
      //   10.3  – 12.1  → hold logo (1.8 s)
      //   12.1  – 12.4  → ramp out (0.3 s)
      //   12.4  – 15    → noise
      const PERIOD = 15.0;
      const cycleT = t % PERIOD;
      if (cycleT < 10) morphT = 0;
      else if (cycleT < 10.3) morphT = (cycleT - 10) / 0.3;
      else if (cycleT < 12.1) morphT = 1;
      else if (cycleT < 12.4) morphT = 1 - (cycleT - 12.1) / 0.3;
      else morphT = 0;
    }
    const smooth = morphT * morphT * (3 - 2 * morphT);

    const current = ready[0];
    simulationMaterialRef.current.uniforms.uTargetPositions.value = current.texture;
    simulationMaterialRef.current.uniforms.uHasTarget.value = 1;
    simulationMaterialRef.current.uniforms.uMorph.value = smooth;
  });

  return (
    <>
      {createPortal(
        <mesh>
          <simulationMaterial ref={simulationMaterialRef} args={[size]} />
          <bufferGeometry>
            {/* @ts-expect-error — R3F bufferAttribute `args` optional at runtime */}
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
            {/* @ts-expect-error — R3F bufferAttribute `args` optional at runtime */}
            <bufferAttribute
              attach="attributes-uv"
              count={uvs.length / 2}
              array={uvs}
              itemSize={2}
            />
          </bufferGeometry>
        </mesh>,
        scene,
      )}
      <points ref={points} scale={[1.11, 1.11, 1.11]}>
        <bufferGeometry>
          {/* @ts-expect-error — R3F bufferAttribute `args` optional at runtime */}
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          fragmentShader={renderFragmentShader}
          vertexShader={renderVertexShader}
          uniforms={uniforms}
        />
      </points>
    </>
  );
}

/* ───── Scene root (default export; consumed via next/dynamic ssr:false) ───── */

export default function FBOParticlesScene({
  phase = "idle",
  scrollDrive,
}: {
  phase?: FBOPhase;
  scrollDrive?: ScrollDriveRef;
}) {
  return (
    <Canvas
      // Cap DPR at 1.25 — on 2x Retina the canvas would otherwise render
      // at native 2x, quadrupling fill-rate cost for additive-blended
      // points. Invisible to the eye for a particle backdrop, but the
      // single biggest perf win against hero-scroll jank.
      dpr={[1, 1.25]}
      camera={{ position: [1.5, 1.5, 2.5] }}
      gl={{
        antialias: false, // additive-blended points are already smooth; MSAA is wasted cost
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <ambientLight intensity={0.5} />
      <FBOParticles phase={phase} scrollDrive={scrollDrive} />
    </Canvas>
  );
}
