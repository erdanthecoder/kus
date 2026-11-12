// Procedural textures + shared materials (no external image assets needed).
import * as THREE from 'three';
import { mulberry } from './data.js';

export const U = {
  uNight: { value: 0 },      // 0 day .. 1 night (windows, street lamps)
  uTime: { value: 0 },
};

function canvas(w, h = w) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; return c;
}
function tex(c, repeat = true, srgb = true) {
  const t = new THREE.CanvasTexture(c);
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  t.anisotropy = 8;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  return t;
}
function noiseFill(ctx, w, h, base, vari, rnd, size = 1) {
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  for (let y = 0; y < h; y += size) for (let x = 0; x < w; x += size) {
    const v = (rnd() - 0.5) * vari;
    for (let yy = 0; yy < size; yy++) for (let xx = 0; xx < size; xx++) {
      const i = ((y + yy) * w + x + xx) * 4;
      d[i] = Math.max(0, Math.min(255, base[0] + v));
      d[i + 1] = Math.max(0, Math.min(255, base[1] + v));
      d[i + 2] = Math.max(0, Math.min(255, base[2] + v));
      d[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
}

export function makeTextures() {
  const r = mulberry(42);
  const T = {};
  // asphalt
  {
    const c = canvas(512), x = c.getContext('2d');
    noiseFill(x, 512, 512, [92, 92, 94], 34, r);
    for (let i = 0; i < 2500; i++) { x.fillStyle = `rgba(${r() < 0.5 ? 40 : 150},${r() < 0.5 ? 40 : 150},${r() < 0.5 ? 40 : 150},${0.25 * r()})`; x.fillRect(r() * 512, r() * 512, 1 + r() * 2, 1 + r() * 2); }
    // patches & cracks (Bishkek roads have a lot of patching)
    for (let i = 0; i < 9; i++) { x.fillStyle = `rgba(30,30,32,${0.15 + r() * 0.2})`; x.beginPath(); x.ellipse(r() * 512, r() * 512, 20 + r() * 60, 10 + r() * 40, r() * 3, 0, 7); x.fill(); }
    x.strokeStyle = 'rgba(25,25,25,0.5)';
    for (let i = 0; i < 14; i++) { x.lineWidth = 0.6 + r(); x.beginPath(); let px = r() * 512, py = r() * 512; x.moveTo(px, py); for (let k = 0; k < 8; k++) { px += (r() - 0.5) * 40; py += (r() - 0.5) * 40; x.lineTo(px, py); } x.stroke(); }
    T.asphalt = tex(c);
  }
  // grass
  {
    const c = canvas(512), x = c.getContext('2d');
    noiseFill(x, 512, 512, [86, 112, 52], 30, r, 2);
    for (let i = 0; i < 9000; i++) { const g = 80 + r() * 70; x.fillStyle = `rgba(${g * 0.7},${g},${g * 0.4},0.5)`; x.fillRect(r() * 512, r() * 512, 1, 2 + r() * 3); }
    for (let i = 0; i < 40; i++) { x.fillStyle = `rgba(120,105,70,${0.1 + r() * 0.2})`; x.beginPath(); x.ellipse(r() * 512, r() * 512, 10 + r() * 40, 8 + r() * 30, r() * 3, 0, 7); x.fill(); }
    T.grass = tex(c);
  }
  // dry ground (steppe / roadside dirt)
  {
    const c = canvas(512), x = c.getContext('2d');
    noiseFill(x, 512, 512, [128, 118, 92], 30, r, 2);
    for (let i = 0; i < 6000; i++) { const g = 90 + r() * 80; x.fillStyle = `rgba(${g},${g * 0.92},${g * 0.7},0.35)`; x.fillRect(r() * 512, r() * 512, 1 + r() * 2, 1 + r() * 2); }
    for (let i = 0; i < 60; i++) { x.fillStyle = `rgba(95,115,55,${0.15 + r() * 0.25})`; x.beginPath(); x.ellipse(r() * 512, r() * 512, 6 + r() * 30, 6 + r() * 20, r() * 3, 0, 7); x.fill(); }
    T.dirt = tex(c);
  }
  // paving tiles (sidewalks, squares)
  {
    const c = canvas(512), x = c.getContext('2d');
    noiseFill(x, 512, 512, [168, 164, 156], 14, r);
    x.strokeStyle = 'rgba(90,88,84,0.55)'; x.lineWidth = 2;
    const S = 64;
    for (let yy = 0; yy < 512; yy += S / 2) {
      const off = (yy / (S / 2)) % 2 ? S / 2 : 0;
      x.beginPath(); x.moveTo(0, yy); x.lineTo(512, yy); x.stroke();
      for (let xx = off; xx < 512 + S; xx += S) { x.beginPath(); x.moveTo(xx, yy); x.lineTo(xx, yy + S / 2); x.stroke(); }
    }
    for (let i = 0; i < 300; i++) { x.fillStyle = `rgba(${r() < 0.5 ? 120 : 200},${r() < 0.5 ? 115 : 190},110,${0.12 * r()})`; x.fillRect(Math.floor(r() * 16) * 32, Math.floor(r() * 16) * 32, 64, 32); }
    T.paving = tex(c);
  }
  // concrete slabs (airport apron / runway)
  {
    const c = canvas(512), x = c.getContext('2d');
    noiseFill(x, 512, 512, [176, 174, 168], 18, r);
    x.strokeStyle = 'rgba(70,70,70,0.45)'; x.lineWidth = 2;
    for (let i = 0; i <= 512; i += 128) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, 512); x.stroke(); x.beginPath(); x.moveTo(0, i); x.lineTo(512, i); x.stroke(); }
    for (let i = 0; i < 25; i++) { x.fillStyle = `rgba(60,55,50,${0.05 + r() * 0.12})`; x.beginPath(); x.ellipse(r() * 512, r() * 512, 10 + r() * 50, 8 + r() * 25, r() * 3, 0, 7); x.fill(); }
    T.concrete = tex(c);
  }
  // fields
  {
    const c = canvas(512), x = c.getContext('2d');
    noiseFill(x, 512, 512, [150, 140, 80], 26, r, 2);
    for (let i = 0; i < 512; i += 6) { x.fillStyle = `rgba(90,110,40,${0.25 + 0.2 * r()})`; x.fillRect(0, i, 512, 2); }
    T.field = tex(c);
  }
  // water normal-ish ripple
  {
    const c = canvas(256), x = c.getContext('2d');
    noiseFill(x, 256, 256, [60, 90, 100], 18, r, 2);
    T.water = tex(c);
  }
  // facade detail noise (multiplied into building walls)
  {
    const c = canvas(256), x = c.getContext('2d');
    noiseFill(x, 256, 256, [230, 230, 230], 30, r, 1);
    for (let i = 0; i < 40; i++) { x.fillStyle = `rgba(80,70,60,${0.08 * r()})`; x.fillRect(r() * 256, r() * 256 * 0.2 + 200, 2 + r() * 10, 50); }
    T.facade = tex(c, true, false);
  }
  return T;
}

// ------------------------------------------------------------------ building material
// Windows are generated in the shader from metre-based UVs so every façade gets
// a believable window grid (Soviet panel blocks, glass offices, private houses...).
export function buildingMaterial(T) {
  const m = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, metalness: 0.0, map: T.facade });
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uNight = U.uNight;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec2 aInfo; attribute vec2 aWin; varying vec2 vInfo; varying vec2 vWin;')
      .replace('#include <uv_vertex>', '#include <uv_vertex>\nvInfo = aInfo; vWin = aWin;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec2 vInfo; varying vec2 vWin; uniform float uNight;
        float h21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        float win = 0.0; float lit = 0.0; float hh = 0.0;
        float st = vInfo.x;
        if (st > 0.5) {
          vec2 cell = floor(vWin); vec2 f = fract(vWin);
          hh = h21(cell + vInfo.y);
          float ao = mix(0.62, 1.0, clamp(vWin.y*0.9, 0.0, 1.0));
          if (st < 1.5) {            // private house
            win = step(0.30,f.x)*step(f.x,0.70)*step(0.30,f.y)*step(f.y,0.72);
          } else if (st < 2.5) {     // soviet panel block
            win = step(0.16,f.x)*step(f.x,0.84)*step(0.30,f.y)*step(f.y,0.80);
            float seam = max(step(0.965,f.y), step(0.985,f.x));
            diffuseColor.rgb *= 1.0 - 0.10*seam;
            // balconies on some columns
            float bal = step(0.6, h21(vec2(cell.x, vInfo.y))) * step(0.05,f.y)*step(f.y,0.32)*step(0.1,f.x)*step(f.x,0.9);
            diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb*0.78, bal);
            if (vWin.y < 1.0) win *= 0.0;
          } else if (st < 3.5) {     // commercial glass / modern
            win = step(0.05,f.x)*step(f.x,0.95)*step(0.14,f.y)*step(f.y,0.94);
            if (vWin.y < 1.2) win = step(0.03,f.x)*step(f.x,0.97)*step(0.05,f.y)*step(f.y,0.9);
          } else if (st < 4.5) {     // industrial
            win = step(0.1,f.x)*step(f.x,0.9)*step(0.62,f.y)*step(f.y,0.85) * step(0.5, h21(vec2(cell.x,3.0)+vInfo.y));
            diffuseColor.rgb *= 0.9 + 0.1*step(0.5, fract(vWin.x*2.0));
          } else if (st < 5.5) {     // public / marble
            win = step(0.28,f.x)*step(f.x,0.72)*step(0.2,f.y)*step(f.y,0.85);
            diffuseColor.rgb *= 0.93 + 0.07*step(0.5,fract(vWin.x*0.5+0.25));
          } else if (st < 6.5) {     // airport terminal glass
            win = step(0.02,f.x)*step(f.x,0.98)*step(0.06,f.y)*step(f.y,0.96);
          }
          vec3 glass = mix(vec3(0.05,0.07,0.09), vec3(0.22,0.28,0.33), hh*0.7);
          if (st > 2.5 && st < 3.5) glass = mix(vec3(0.06,0.12,0.16), vec3(0.2,0.35,0.42), hh);
          if (st > 5.5) glass = vec3(0.12,0.2,0.26);
          diffuseColor.rgb = mix(diffuseColor.rgb * ao, glass, win);
          lit = win * step(0.5, hh) * uNight;
          if (st > 5.5 || (st > 2.5 && st < 3.5 && vWin.y < 1.2)) lit = win * uNight * 0.8;
          if (st > 2.5 && st < 3.5 && vWin.y >= 1.2) lit *= step(0.75, hh);
        } else {
          // roofs: subtle tar patches
          diffuseColor.rgb *= 0.9 + 0.1*h21(floor(vWin*0.5));
        }`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, 0.08, win);`)
      .replace('#include <metalnessmap_fragment>', `#include <metalnessmap_fragment>
        metalnessFactor = mix(metalnessFactor, 0.55, win*(1.0-lit));`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        totalEmissiveRadiance += lit * mix(vec3(1.0,0.66,0.32), vec3(0.75,0.82,1.0), step(0.85,hh)) * (0.25 + 0.55*fract(hh*7.13));`);
  };
  return m;
}

// world-space textured ground material with macro variation
export function groundMaterial(T, map, scale, tint = 0xffffff, rough = 0.95) {
  const m = new THREE.MeshStandardMaterial({ map, color: tint, roughness: rough, metalness: 0, vertexColors: true });
  m.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vWXZ;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWXZ = (modelMatrix*vec4(transformed,1.0)).xz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>\nvarying vec2 vWXZ;
        float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
          float a=fract(sin(dot(i,vec2(127.1,311.7)))*43758.5), b=fract(sin(dot(i+vec2(1,0),vec2(127.1,311.7)))*43758.5),
          c=fract(sin(dot(i+vec2(0,1),vec2(127.1,311.7)))*43758.5), d=fract(sin(dot(i+vec2(1,1),vec2(127.1,311.7)))*43758.5);
          return mix(mix(a,b,f.x),mix(c,d,f.x),f.y); }`)
      .replace('#include <map_fragment>', `
        vec4 tA = texture2D(map, vWXZ / ${scale.toFixed(2)});
        vec4 tB = texture2D(map, vWXZ / ${(scale * 3.7).toFixed(2)} + 0.37);
        float mac = vn(vWXZ/60.0)*0.6 + vn(vWXZ/9.0)*0.4;
        diffuseColor *= mix(tA, tB, 0.35) * (0.82 + 0.3*mac);`);
  };
  return m;
}

export function markingMaterial() {
  const m = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  m.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec2 aDash; varying vec2 vDash;')
      .replace('#include <uv_vertex>', '#include <uv_vertex>\nvDash = aDash;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vDash;')
      .replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
        if (vDash.y > 0.5 && vDash.y < 1.5 && fract(vDash.x / 9.0) > 0.38) discard;      // dashed lane line
        if (vDash.y > 1.5 && vDash.y < 2.5 && fract(vDash.x / 1.0) > 0.5) discard;       // zebra crossing stripes
        if (vDash.y > 2.5 && fract(vDash.x / 50.0) > 0.6) discard;                       // runway centreline`);
  };
  return m;
}
