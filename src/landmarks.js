// Hand-modelled landmarks placed at their real OSM coordinates.
import * as THREE from 'three';
import { U } from './materials.js';

function flagTexture() {
  // Flag of Kyrgyzstan (red field, golden sun with 40 rays, tunduk in the centre)
  const c = document.createElement('canvas'); c.width = 1000; c.height = 600;
  const x = c.getContext('2d');
  x.fillStyle = '#e8112d'; x.fillRect(0, 0, 1000, 600);
  const cx = 500, cy = 300;
  x.fillStyle = '#ffef00';
  for (let i = 0; i < 40; i++) {
    const a = i / 40 * Math.PI * 2;
    x.beginPath();
    x.moveTo(cx + Math.cos(a - 0.05) * 105, cy + Math.sin(a - 0.05) * 105);
    x.lineTo(cx + Math.cos(a) * 190, cy + Math.sin(a) * 190);
    x.lineTo(cx + Math.cos(a + 0.05) * 105, cy + Math.sin(a + 0.05) * 105);
    x.fill();
  }
  x.beginPath(); x.arc(cx, cy, 108, 0, 7); x.fill();
  x.strokeStyle = '#e8112d'; x.lineWidth = 14;
  x.beginPath(); x.arc(cx, cy, 80, 0, 7); x.stroke();
  x.lineWidth = 10;
  for (const s of [-1, 1]) {
    for (const o of [-26, 26]) {
      x.beginPath(); x.moveTo(cx + o, cy - 76); x.quadraticCurveTo(cx + o + s * 30 * (o > 0 ? 1 : -1) * 0, cy, cx + o, cy + 76); x.stroke();
    }
    x.beginPath(); x.moveTo(cx - 76, cy + s * 26); x.quadraticCurveTo(cx, cy + s * 8, cx + 76, cy + s * 26); x.stroke();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}

const bronze = () => new THREE.MeshStandardMaterial({ color: 0x6a4a28, metalness: 0.85, roughness: 0.38 });
const stone = (c = 0x9a8a7a) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.75 });

export class Landmarks {
  constructor(scene, map, world) {
    this.scene = scene; this.map = map;
    this.g = new THREE.Group(); scene.add(this.g);
    this.anim = [];
    this.world = world;
    this._flag(-25, -30);
    this._manas(17, -42, Math.PI);       // Aikol Manas on Ala-Too Square, facing the square
    this._manas(-1307, -150, Math.PI, 0.7); // Manas epic monument in front of the Philharmonic
    this._victory(1032, -325);
    this._mosque();
    this._fountains([[525, -78], [544, -80], [559, -79], [581, -78], [597, -78], [613, -77], [159, -204], [416, -193], [710, -100], [711, -128], [614, -271], [627, 469], [716, 132]]);
    this._ferris(-330, -270);           // Panfilov park amusement rides
    this._mig(-498, 179);
    this._whiteHouse();
    this._ordo();
  }

  _col(x, z, r) { // square collision box around a monument base
    if (!this.world) return;
    const c = [[-r, -r], [r, -r], [r, r], [-r, r]];
    for (let i = 0; i < 4; i++) this.world.addWall(x + c[i][0], z + c[i][1], x + c[(i + 1) % 4][0], z + c[(i + 1) % 4][1]);
  }

  _flag(x, z) {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.45, 45, 12), new THREE.MeshStandardMaterial({ color: 0xd8dce0, metalness: 0.9, roughness: 0.2 }));
    pole.position.set(x, 22.5, z); pole.castShadow = true;
    const base = new THREE.Mesh(new THREE.CylinderGeometry(3.5, 4, 1.2, 24), stone(0xb0a898)); base.position.set(x, 0.6, z); base.receiveShadow = true;
    const top = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 8), new THREE.MeshStandardMaterial({ color: 0xd4a830, metalness: 1, roughness: 0.2 })); top.position.set(x, 45.3, z);
    const W = 16, H = 9.6;
    const geo = new THREE.PlaneGeometry(W, H, 40, 16).translate(W / 2, 0, 0);
    const mat = new THREE.MeshStandardMaterial({ map: flagTexture(), side: THREE.DoubleSide, roughness: 0.75 });
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.uTime = U.uTime;
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTime;')
        .replace('#include <begin_vertex>', `#include <begin_vertex>
          float k = position.x / ${W.toFixed(1)};
          float w = sin(position.x*0.55 - uTime*3.4) * 0.9 + sin(position.x*0.9 + position.y*0.3 - uTime*5.1)*0.35;
          transformed.z += w * k * 1.2;
          transformed.y -= k*k*0.8;
          transformed.x -= abs(w)*k*0.15;`)
        .replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>
          float kk = position.x / ${W.toFixed(1)};
          objectNormal = normalize(vec3(-cos(position.x*0.55 - uTime*3.4)*0.5*kk, 0.0, 1.0));`);
    };
    const flag = new THREE.Mesh(geo, mat); flag.position.set(x + 0.3, 45 - H / 2 - 0.4, z); flag.castShadow = true;
    flag.customDepthMaterial = undefined;
    this.g.add(pole, base, top, flag);
    this._col(x, z, 3.6);
    // honour guard: two soldiers in dress uniform beside the pole
    const uni = new THREE.MeshStandardMaterial({ color: 0x2a3a2a, roughness: 0.6 }), skin = new THREE.MeshStandardMaterial({ color: 0xc89a78 });
    for (const s of [-1, 1]) {
      const sg = new THREE.Group();
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.45, 1.05, 0.28), uni); body.position.y = 1.35;
      const legs = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.85, 0.24), uni); legs.position.y = 0.42;
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), skin); head.position.y = 2.0;
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.13, 0.12, 10), new THREE.MeshStandardMaterial({ color: 0x1e2a1e })); cap.position.y = 2.12;
      const rifle = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1.2, 0.05), new THREE.MeshStandardMaterial({ color: 0x2a1a10 })); rifle.position.set(0.3, 1.5, 0.1);
      sg.add(body, legs, head, cap, rifle);
      sg.children.forEach(o => o.castShadow = true);
      sg.position.set(x + s * 5, 1.2, z + 3.5);
      this.g.add(sg);
      this.anim.push({ type: 'guard', g: sg, base: sg.position.clone(), s });
    }
  }

  _manas(x, z, rot, sc = 1) {
    const g = new THREE.Group();
    const ped = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.8, 9, 8), stone(0x8a7c70)); ped.position.y = 4.5;
    const step = new THREE.Mesh(new THREE.CylinderGeometry(6, 6.5, 1, 16), stone(0xa09888)); step.position.y = 0.5;
    const B = bronze();
    const horse = new THREE.Group();
    const body = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 12), B); body.scale.set(1.1, 1.1, 2.3); body.position.y = 3;
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.8, 2.2, 10), B); neck.position.set(0, 4.3, 1.9); neck.rotation.x = 0.7;
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.75, 1.6), B); head.position.set(0, 5.2, 2.8); head.rotation.x = 0.5;
    const tail = new THREE.Mesh(new THREE.ConeGeometry(0.35, 2.2, 8), B); tail.position.set(0, 2.6, -2.5); tail.rotation.x = -0.6;
    horse.add(body, neck, head, tail);
    // rearing pose: front legs raised
    for (const [lx, lz, a] of [[-0.55, 1.4, -0.9], [0.55, 1.5, -1.2], [-0.55, -1.5, 0.15], [0.55, -1.5, -0.1]]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.16, 2.4, 8).translate(0, -1.2, 0), B);
      leg.position.set(lx, 2.7, lz); leg.rotation.x = a; horse.add(leg);
    }
    horse.rotation.x = -0.32; horse.position.y = 0.4;
    const rider = new THREE.Group();
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.7, 1.9, 10), B); torso.position.y = 5;
    const rh = new THREE.Mesh(new THREE.SphereGeometry(0.42, 12, 10), B); rh.position.y = 6.3;
    const helm = new THREE.Mesh(new THREE.ConeGeometry(0.45, 0.8, 10), B); helm.position.y = 6.8;
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 1.8, 8).translate(0, 0.9, 0), B); arm.position.set(0.6, 5.6, 0); arm.rotation.z = -0.5;
    const sword = new THREE.Mesh(new THREE.BoxGeometry(0.08, 2.4, 0.18).translate(0, 1.2, 0), new THREE.MeshStandardMaterial({ color: 0xa08050, metalness: 1, roughness: 0.25 }));
    sword.position.set(1.4, 7.1, 0); sword.rotation.z = -0.3;
    const cape = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.8, 0.1), B); cape.position.set(0, 4.8, -0.7); cape.rotation.x = 0.5;
    rider.add(torso, rh, helm, arm, sword, cape);
    const statue = new THREE.Group(); statue.add(horse, rider); statue.position.y = 9;
    g.add(ped, step, statue);
    g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    g.position.set(x, 0, z); g.rotation.y = rot; g.scale.setScalar(sc);
    this.g.add(g);
    this._col(x, z, 4 * sc);
  }

  _victory(x, z) {
    // Victory Square monument (1985): three red-granite arches forming the frame of a yurt,
    // a woman awaiting her husband, and the eternal flame.
    const g = new THREE.Group();
    const red = new THREE.MeshStandardMaterial({ color: 0x7a3328, roughness: 0.55, metalness: 0.1 });
    const base = new THREE.Mesh(new THREE.CylinderGeometry(15, 16, 1.2, 36), stone(0x8a8078)); base.position.y = 0.6;
    g.add(base);
    for (let k = 0; k < 3; k++) {
      const a = k / 3 * Math.PI * 2;
      const p0 = new THREE.Vector3(Math.cos(a) * 12, 1, Math.sin(a) * 12);
      const p1 = new THREE.Vector3(Math.cos(a) * 9, 15, Math.sin(a) * 9);
      const p2 = new THREE.Vector3(Math.cos(a) * 2.5, 21, Math.sin(a) * 2.5);
      const curve = new THREE.QuadraticBezierCurve3(p0, p1, p2);
      const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 24, 1.1, 6, false), red);
      g.add(tube);
    }
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.7, 0.7, 8, 24), red); ring.rotation.x = Math.PI / 2; ring.position.y = 21; g.add(ring);
    // flame bowl
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.1, 0.8, 16), new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.8, roughness: 0.3 })); bowl.position.y = 1.6; g.add(bowl);
    // woman statue
    const fig = new THREE.Group();
    const dress = new THREE.Mesh(new THREE.ConeGeometry(0.9, 3.4, 10), bronze()); dress.position.y = 1.7;
    const hd = new THREE.Mesh(new THREE.SphereGeometry(0.32, 10, 8), bronze()); hd.position.y = 3.6;
    fig.add(dress, hd); fig.position.set(6.5, 1.2, 0); g.add(fig);
    g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    g.position.set(x, 0, z);
    this.g.add(g);
    this._col(x, z, 3);
    this.anim.push({ type: 'flame', ps: this._fire(x, 2.0, z) });
  }

  _fire(x, y, z) {
    const N = 90;
    const geo = new THREE.BufferGeometry();
    const seed = new Float32Array(N);
    for (let i = 0; i < N; i++) seed[i] = Math.random();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
    geo.setAttribute('seed', new THREE.BufferAttribute(seed, 1));
    const mat = new THREE.ShaderMaterial({
      uniforms: { uTime: U.uTime },
      vertexShader: `attribute float seed; uniform float uTime; varying float vT;
        void main(){ float t = fract(uTime*0.9 + seed); vT = t;
          vec3 p = vec3(sin(seed*40.0)*0.7*(1.0-t), t*3.2, cos(seed*31.0)*0.7*(1.0-t));
          p.x += sin(uTime*6.0+seed*10.0)*0.15*t;
          vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
          gl_PointSize = (1.0-t)*900.0/ -mv.z; }`,
      fragmentShader: `varying float vT; void main(){ vec2 d = gl_PointCoord-0.5; float a = smoothstep(0.5,0.0,length(d));
          vec3 c = mix(vec3(1.0,0.85,0.3), vec3(1.0,0.25,0.05), vT); gl_FragColor = vec4(c*2.0, a*(1.0-vT)); }`,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    const p = new THREE.Points(geo, mat); p.position.set(x, y, z); p.frustumCulled = false;
    this.g.add(p);
    const light = new THREE.PointLight(0xff8a30, 0, 30, 2); light.position.set(x, y + 1.5, z); this.g.add(light);
    this.anim.push({ type: 'firelight', light });
    return p;
  }

  _mosque() {
    // Central Mosque of Imam Sarakhsi – add dome and four minarets on top of the OSM footprint
    const B = this.map.buildings.find(b => b.name && /Central Mosque|Центральная мечеть|Сарахси/.test(b.name) && b.kind === 8) || this.map.buildings.find(b => b.name && /Central Mosque|Центральная мечеть/.test(b.name));
    if (!B) return;
    const cx = (B.x0 + B.x1) / 2, cz = (B.z0 + B.z1) / 2;
    const w = B.x1 - B.x0, d = B.z1 - B.z0, r = Math.min(w, d) * 0.28;
    const h = Math.max(B.h, 16);
    const white = new THREE.MeshStandardMaterial({ color: 0xf2efe8, roughness: 0.5 });
    const domeM = new THREE.MeshStandardMaterial({ color: 0x5aa0b8, metalness: 0.5, roughness: 0.25 });
    const gold = new THREE.MeshStandardMaterial({ color: 0xd8b040, metalness: 1, roughness: 0.2 });
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 5, 24), white); drum.position.set(cx, h + 2.5, cz);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(r, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), domeM); dome.position.set(cx, h + 5, cz); dome.scale.y = 1.15;
    const fin = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.3, 4, 8), gold); fin.position.set(cx, h + 5 + r * 1.15 + 2, cz);
    this.g.add(drum, dome, fin);
    for (const [sx, sz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
      const mx = cx + sx * (w / 2 - 2), mz = cz + sz * (d / 2 - 2);
      const m1 = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 2, 52, 12), white); m1.position.set(mx, 26, mz);
      const bal = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.2, 1.4, 12), white); bal.position.set(mx, 44, mz);
      const top = new THREE.Mesh(new THREE.ConeGeometry(1.7, 7, 12), domeM); top.position.set(mx, 55.5, mz);
      const crs = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.2, 2.5, 6), gold); crs.position.set(mx, 60, mz);
      this.g.add(m1, bal, top, crs);
      this._col(mx, mz, 2);
    }
    this.g.children.slice(-19).forEach(o => { o.castShadow = true; o.receiveShadow = true; });
  }

  _fountains(list) {
    const N = 140;
    for (const [x, z] of list) {
      const basin = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.4, 0.6, 28, 1, true), stone(0xb8b0a0));
      basin.position.set(x, 0.3, z);
      const water = new THREE.Mesh(new THREE.CircleGeometry(4.1, 28).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x5a8aa0, roughness: 0.05, metalness: 0.3 }));
      water.position.set(x, 0.45, z);
      this.g.add(basin, water);
      const geo = new THREE.BufferGeometry();
      const seed = new Float32Array(N);
      for (let i = 0; i < N; i++) seed[i] = Math.random();
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
      geo.setAttribute('seed', new THREE.BufferAttribute(seed, 1));
      const mat = new THREE.ShaderMaterial({
        uniforms: { uTime: U.uTime },
        vertexShader: `attribute float seed; uniform float uTime; varying float vA;
          void main(){ float t = fract(uTime*0.55 + seed); float a = seed*6.2831*7.0;
            float jet = step(0.5, fract(seed*3.0));
            float r = mix(0.4, 3.0, jet);
            vec3 v0 = vec3(cos(a)*r*0.6, mix(9.0, 5.0, jet), sin(a)*r*0.6);
            vec3 p = v0*t*1.6 + vec3(0.0,-9.8,0.0)*t*t*1.28;
            p.y = max(p.y, 0.0);
            vA = 1.0 - t;
            vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
            gl_PointSize = 260.0 / -mv.z; }`,
        fragmentShader: `varying float vA; void main(){ float a = smoothstep(0.5,0.1,length(gl_PointCoord-0.5)); gl_FragColor = vec4(0.85,0.93,1.0, a*0.55*vA); }`,
        transparent: true, depthWrite: false,
      });
      const p = new THREE.Points(geo, mat); p.position.set(x, 0.5, z); p.frustumCulled = false;
      this.g.add(p);
      this._col(x, z, 3.5);
    }
  }

  _ferris(x, z) {
    // Panfilov Park Ferris wheel
    const g = new THREE.Group();
    const m = new THREE.MeshStandardMaterial({ color: 0xe8e8e8, metalness: 0.6, roughness: 0.3 });
    const R = 16;
    const wheel = new THREE.Group();
    const rim = new THREE.Mesh(new THREE.TorusGeometry(R, 0.25, 6, 48), m); wheel.add(rim);
    const rim2 = rim.clone(); rim2.position.z = 1.6; wheel.add(rim2);
    const cols = [0xe03030, 0xf0c020, 0x30a0e0, 0x40c060];
    this.cabins = [];
    for (let i = 0; i < 16; i++) {
      const a = i / 16 * Math.PI * 2;
      const sp = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, R, 4), m); sp.position.set(Math.cos(a) * R / 2, Math.sin(a) * R / 2, 0.8); sp.rotation.z = a - Math.PI / 2; wheel.add(sp);
      const cab = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.5, 1.4), new THREE.MeshStandardMaterial({ color: cols[i % 4] }));
      cab.position.set(Math.cos(a) * R, Math.sin(a) * R - 1, 0.8); wheel.add(cab); this.cabins.push({ cab, a });
    }
    wheel.position.y = R + 3;
    for (const s of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, R + 5, 6), m);
      leg.position.set(s * 5, (R + 3) / 2, -0.6); leg.rotation.z = s * 0.28; g.add(leg);
      const leg2 = leg.clone(); leg2.position.z = 2.2; g.add(leg2);
    }
    g.add(wheel);
    g.position.set(x, 0, z); g.rotation.y = 0.4;
    g.traverse(o => { if (o.isMesh) o.castShadow = true; });
    this.g.add(g);
    this.anim.push({ type: 'ferris', wheel, R });
  }

  _mig(x, z) {
    // MiG-21 monument on a pylon
    const g = new THREE.Group();
    const m = new THREE.MeshStandardMaterial({ color: 0x9aa4a0, metalness: 0.6, roughness: 0.35 });
    const fus = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.75, 13, 12).rotateX(Math.PI / 2), m);
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.5, 2, 12).rotateX(Math.PI / 2), m); nose.position.z = 7.5;
    const wing = new THREE.Shape(); wing.moveTo(0, 2); wing.lineTo(3.6, -2.5); wing.lineTo(-3.6, -2.5); wing.closePath();
    const wg = new THREE.Mesh(new THREE.ExtrudeGeometry(wing, { depth: 0.15, bevelEnabled: false }).rotateX(Math.PI / 2), m);
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.15, 2.4, 2.6), m); fin.position.set(0, 1.4, -5);
    const pyl = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 1, 6, 8), stone(0x888888)); pyl.position.y = -3.4;
    g.add(fus, nose, wg, fin, pyl);
    g.position.set(x, 6.8, z); g.rotation.set(-0.35, 1.2, 0);
    g.traverse(o => { if (o.isMesh) o.castShadow = true; });
    this.g.add(g);
  }

  _findB(re) { return this.map.buildings.filter(b => b.name && re.test(b.name)).sort((a, b) => (b.x1 - b.x0) * (b.z1 - b.z0) - (a.x1 - a.x0) * (a.z1 - a.z0))[0]; }

  // small waving flag on a pole (on roofs, in front of buildings)
  _miniFlag(x, y, z, size = 1) {
    if (!this.flagTex) this.flagTex = flagTexture();
    const W = 3.2 * size, H = 1.9 * size;
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05 * size, 0.07 * size, 6 * size, 6), new THREE.MeshStandardMaterial({ color: 0xcfd3d8, metalness: 0.8, roughness: 0.3 }));
    pole.position.set(x, y + 3 * size, z);
    const geo = new THREE.PlaneGeometry(W, H, 12, 6).translate(W / 2, 0, 0);
    const mat = new THREE.MeshStandardMaterial({ map: this.flagTex, side: THREE.DoubleSide, roughness: 0.8 });
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.uTime = U.uTime;
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTime;')
        .replace('#include <begin_vertex>', `#include <begin_vertex>
          float k = position.x / ${W.toFixed(2)};
          transformed.z += sin(position.x*1.6 - uTime*4.0 + ${(x * 0.1).toFixed(2)}) * 0.35 * k * ${size.toFixed(2)};`);
    };
    const f = new THREE.Mesh(geo, mat); f.position.set(x + 0.06, y + 6 * size - H / 2 - 0.1, z);
    this.g.add(pole, f);
  }

  // Ak Uy – the White House on Chuy Avenue: white marble block with tall vertical pilasters
  _whiteHouse() {
    const B = this._findB(/Жогорку Кеңеш|National Parliament|White House|Ак үй|Белый дом/);
    if (!B) return;
    const p = B.pts, n = p.length / 2, h = Math.max(B.h, 26);
    let A = 0; for (let i = 0; i < n; i++) { const j = (i + 1) % n; A += p[i * 2] * p[j * 2 + 1] - p[j * 2] * p[i * 2 + 1]; }
    const out = A > 0 ? 1 : -1;
    const fins = [];
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      const x0 = p[i * 2], z0 = p[i * 2 + 1], x1 = p[j * 2], z1 = p[j * 2 + 1];
      const L = Math.hypot(x1 - x0, z1 - z0); if (L < 8) continue;
      const nx = (z1 - z0) / L * out, nz = -(x1 - x0) / L * out;
      const cnt = Math.floor(L / 3.4);
      for (let k = 0; k <= cnt; k++) { const t = k / cnt; fins.push([x0 + (x1 - x0) * t + nx * 0.45, z0 + (z1 - z0) * t + nz * 0.45, Math.atan2(nx, nz)]); }
    }
    const marble = new THREE.MeshStandardMaterial({ color: 0xf3f1ec, roughness: 0.35, metalness: 0.05 });
    const im = new THREE.InstancedMesh(new THREE.BoxGeometry(0.7, h - 3, 0.9), marble, fins.length);
    const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), Y = new THREE.Vector3(0, 1, 0);
    fins.forEach(([x, z, a], i) => { Q.setFromAxisAngle(Y, a); M.compose(new THREE.Vector3(x, 3 + (h - 3) / 2, z), Q, new THREE.Vector3(1, 1, 1)); im.setMatrixAt(i, M); });
    im.castShadow = true; im.receiveShadow = true; im.computeBoundingSphere();
    this.g.add(im);
    // heavy roof cornice
    const cx = (B.x0 + B.x1) / 2, cz = (B.z0 + B.z1) / 2;
    const cor = new THREE.Mesh(new THREE.BoxGeometry(B.x1 - B.x0 + 1.6, 1.4, B.z1 - B.z0 + 1.6), marble);
    cor.position.set(cx, h + 0.7, cz); cor.castShadow = true; this.g.add(cor);
    this._miniFlag(cx, h + 1.4, cz, 1.6);
  }

  // Yntymak Ordo – the new presidential palace (2022) in the south of the city
  _ordo() {
    const B = this._findB(/Ынтымак Ордо|Yntymak Ordo/);
    if (!B) return;
    const cx = (B.x0 + B.x1) / 2, cz = (B.z0 + B.z1) / 2;
    const w = B.x1 - B.x0, d = B.z1 - B.z0, h = Math.max(B.h, 18);
    const white = new THREE.MeshStandardMaterial({ color: 0xf5f2ea, roughness: 0.4 });
    const gold = new THREE.MeshStandardMaterial({ color: 0xd8b040, metalness: 1, roughness: 0.25 });
    const r = Math.min(w, d) * 0.22;
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 1.05, 7, 32), white); drum.position.set(cx, h + 3.5, cz);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(r, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xe9edf2, metalness: 0.3, roughness: 0.2 }));
    dome.position.set(cx, h + 7, cz); dome.scale.y = 0.85;
    const lantern = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.15, r * 0.18, 3, 16), gold); lantern.position.set(cx, h + 7 + r * 0.85 + 1.5, cz);
    this.g.add(drum, dome, lantern);
    // colonnade around the drum
    for (let i = 0; i < 16; i++) {
      const a = i / 16 * Math.PI * 2;
      const c = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.4, 7, 10), white);
      c.position.set(cx + Math.cos(a) * (r + 0.8), h + 3.5, cz + Math.sin(a) * (r + 0.8)); this.g.add(c);
    }
    // portico with columns on the longest side facing the street
    const portW = Math.max(w, d) * 0.4, side = w > d ? 'z' : 'x';
    for (let i = 0; i < 8; i++) {
      const t = (i / 7 - 0.5) * portW;
      const c = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.6, h * 0.9, 12), white);
      if (side === 'z') c.position.set(cx + t, h * 0.45, B.z1 + 3); else c.position.set(B.x1 + 3, h * 0.45, cz + t);
      this.g.add(c);
    }
    const pedi = new THREE.Mesh(new THREE.BoxGeometry(side === 'z' ? portW + 3 : 6, 1.6, side === 'z' ? 6 : portW + 3), white);
    pedi.position.set(side === 'z' ? cx : B.x1 + 1.5, h * 0.9 + 0.8, side === 'z' ? B.z1 + 1.5 : cz); this.g.add(pedi);
    this.g.children.slice(-30).forEach(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    this._miniFlag(cx + w * 0.3, h, cz, 1.3);
    this._miniFlag(cx - w * 0.3, h, cz, 1.3);
  }

  update(dt, time, night) {
    for (const a of this.anim) {
      if (a.type === 'ferris') {
        a.wheel.rotation.z = time * 0.05;
        for (const c of this.cabins) { const ang = c.a + a.wheel.rotation.z; c.cab.position.set(Math.cos(c.a) * a.R, Math.sin(c.a) * a.R - 1, 0.8); c.cab.rotation.z = -a.wheel.rotation.z; void ang; }
      } else if (a.type === 'firelight') {
        a.light.intensity = (8 + Math.sin(time * 13) * 2 + Math.sin(time * 7.3) * 1.5) * (0.4 + night * 1.6);
      } else if (a.type === 'guard') {
        // small sway, at full hour the guards march a few steps (changing of the guard)
        const ph = (time % 60) / 60;
        const march = ph > 0.8 ? Math.sin((ph - 0.8) / 0.2 * Math.PI) : 0;
        a.g.position.z = a.base.z + march * 6;
        a.g.rotation.y = march > 0.01 ? 0 : Math.PI;
      }
    }
  }
}
