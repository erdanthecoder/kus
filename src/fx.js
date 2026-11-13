// Crash effects: debris (glass / plastic / metal shards), sparks and engine smoke.
import * as THREE from 'three';

export class FX {
  constructor(scene) {
    this.scene = scene;
    // ---- debris (instanced)
    this.ND = 260;
    const dg = new THREE.BoxGeometry(1, 1, 1);
    this.debris = new THREE.InstancedMesh(dg, new THREE.MeshStandardMaterial({ roughness: 0.4, metalness: 0.4 }), this.ND);
    this.debris.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.debris.frustumCulled = false; this.debris.castShadow = true;
    this.debris.count = 0;
    this.debris.setColorAt(0, new THREE.Color());
    scene.add(this.debris);
    this.parts = [];
    // ---- sparks
    this.NS = 200;
    this.sparkPos = new Float32Array(this.NS * 3);
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(this.sparkPos, 3));
    this.sparkPts = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xffc860, size: 0.18, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.sparkPts.frustumCulled = false; scene.add(this.sparkPts);
    this.sparks = [];
    // ---- smoke
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const x = c.getContext('2d'); const gr = x.createRadialGradient(32, 32, 2, 32, 32, 30);
    gr.addColorStop(0, 'rgba(255,255,255,0.9)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = gr; x.fillRect(0, 0, 64, 64);
    this.smokeTex = new THREE.CanvasTexture(c);
    this.smokePool = [];
    for (let i = 0; i < 140; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.smokeTex, color: 0x333333, transparent: true, opacity: 0, depthWrite: false }));
      s.visible = false; scene.add(s); this.smokePool.push({ s, life: 0 });
    }
    this.si = 0;
    this.emitters = []; // {x,z,y, rate, dark, t, obj}
    this.M = new THREE.Matrix4(); this.Q = new THREE.Quaternion(); this.E = new THREE.Euler(); this.V = new THREE.Vector3(); this.S = new THREE.Vector3(); this.C = new THREE.Color();
  }

  crash(x, y, z, nx, nz, strength, bodyColor = 0xcccccc) {
    const n = Math.min(26, Math.round(4 + strength * 1.6));
    for (let i = 0; i < n; i++) {
      const kind = Math.random();
      const col = kind < 0.35 ? 0xbfd8e8 : kind < 0.6 ? 0x151515 : kind < 0.7 ? 0xff3020 : bodyColor;
      const s = kind < 0.35 ? 0.05 + Math.random() * 0.06 : 0.08 + Math.random() * 0.22;
      const sp = 2 + Math.random() * strength * 0.5;
      const a = Math.atan2(nz, nx) + (Math.random() - 0.5) * 2.2;
      this._part({ x, y: y + Math.random() * 0.5, z, vx: Math.cos(a) * sp, vy: 1.5 + Math.random() * 3.5, vz: Math.sin(a) * sp, rx: Math.random() * 6, ry: Math.random() * 6, wx: (Math.random() - 0.5) * 20, wy: (Math.random() - 0.5) * 20, s, sx: s * (kind < 0.35 ? 1.4 : 1 + Math.random() * 2), life: 5 + Math.random() * 4, col });
    }
    const ns = Math.min(40, Math.round(strength * 3));
    for (let i = 0; i < ns; i++) {
      const a = Math.random() * Math.PI * 2, sp = 2 + Math.random() * 6;
      this.sparks.push({ x, y: y + 0.4, z, vx: Math.cos(a) * sp + nx * 2, vy: Math.random() * 4, vz: Math.sin(a) * sp + nz * 2, life: 0.3 + Math.random() * 0.4 });
      if (this.sparks.length > this.NS) this.sparks.shift();
    }
    for (let i = 0; i < 4; i++) this.puff(x, y + 0.5, z, 0x777777, 1.5);
  }

  _part(p) {
    if (this.parts.length >= this.ND) this.parts.shift();
    this.parts.push(p);
  }

  puff(x, y, z, color = 0x333333, size = 1, vy = 1.2) {
    const p = this.smokePool[this.si++ % this.smokePool.length];
    p.s.position.set(x + (Math.random() - 0.5) * 0.4, y, z + (Math.random() - 0.5) * 0.4);
    p.s.material.color.setHex(color);
    p.life = 1; p.size = size; p.vy = vy * (0.7 + Math.random() * 0.6); p.vx = (Math.random() - 0.5) * 0.6; p.vz = (Math.random() - 0.5) * 0.6;
    p.s.visible = true;
  }

  // persistent smoke source (wrecked cars, damaged engine). obj = {x,z,h} kept live
  emitter(obj, offset, dark = true) {
    const e = { obj, offset, dark, t: 0 };
    this.emitters.push(e);
    return e;
  }
  removeEmitter(e) { const i = this.emitters.indexOf(e); if (i >= 0) this.emitters.splice(i, 1); }

  update(dt) {
    // debris
    const { M, Q, E, V, S, C } = this;
    let k = 0;
    for (let i = this.parts.length - 1; i >= 0; i--) {
      const p = this.parts[i];
      p.life -= dt;
      if (p.life <= 0) { this.parts.splice(i, 1); continue; }
      if (p.y > p.s * 0.5 || p.vy > 0) {
        p.vy -= 9.8 * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
        p.rx += p.wx * dt; p.ry += p.wy * dt;
        if (p.y < p.s * 0.5) { p.y = p.s * 0.5; p.vy = -p.vy * 0.3; p.vx *= 0.6; p.vz *= 0.6; p.wx *= 0.5; p.wy *= 0.5; if (Math.abs(p.vy) < 0.5) p.vy = 0; }
      }
    }
    for (const p of this.parts) {
      E.set(p.rx, p.ry, 0); Q.setFromEuler(E);
      const fade = Math.min(1, p.life);
      M.compose(V.set(p.x, p.y + 0.12, p.z), Q, S.set(p.sx * fade, p.s * 0.35 * fade, p.s * fade));
      this.debris.setMatrixAt(k, M); this.debris.setColorAt(k, C.setHex(p.col)); k++;
    }
    this.debris.count = k;
    this.debris.instanceMatrix.needsUpdate = true;
    if (this.debris.instanceColor) this.debris.instanceColor.needsUpdate = true;
    // sparks
    let j = 0;
    for (let i = this.sparks.length - 1; i >= 0; i--) {
      const s = this.sparks[i]; s.life -= dt;
      if (s.life <= 0) { this.sparks.splice(i, 1); continue; }
      s.vy -= 9.8 * dt; s.x += s.vx * dt; s.y += s.vy * dt; s.z += s.vz * dt;
    }
    for (const s of this.sparks) { this.sparkPos[j * 3] = s.x; this.sparkPos[j * 3 + 1] = Math.max(0.05, s.y); this.sparkPos[j * 3 + 2] = s.z; j++; }
    this.sparkPts.geometry.setDrawRange(0, j);
    this.sparkPts.geometry.attributes.position.needsUpdate = true;
    // emitters
    for (const e of this.emitters) {
      e.t -= dt;
      if (e.t <= 0) {
        e.t = e.dark ? 0.12 : 0.25;
        const o = e.obj, c = Math.cos(o.h), s = Math.sin(o.h);
        const lx = e.offset[0], lz = e.offset[2];
        this.puff(o.x + lx * c + lz * s, e.offset[1], o.z - lx * s + lz * c, e.dark ? 0x222222 : 0x999999, e.dark ? 1.4 : 0.9, e.dark ? 2.2 : 1.2);
      }
    }
    for (const p of this.smokePool) {
      if (p.life <= 0) continue;
      p.life -= dt * 0.35;
      p.s.position.x += p.vx * dt; p.s.position.y += p.vy * dt; p.s.position.z += p.vz * dt;
      p.s.scale.setScalar(p.size * (1 + (1 - p.life) * 4));
      p.s.material.opacity = Math.max(0, p.life * 0.55);
      if (p.life <= 0) p.s.visible = false;
    }
  }
}
