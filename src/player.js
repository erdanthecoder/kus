// Player vehicle: model, tyre-model physics, lights, skid marks, smoke, chase camera.
import * as THREE from 'three';
import { buildVehicle, plateTexture } from './carModels.js';

export const CAR_CHOICES = [
  { id: 'sedan', name: 'Sedan', desc: 'The classic white Bishkek sedan', color: 0xf0f0f0 },
  { id: 'suv', name: 'Land SUV', desc: 'Big 4x4 – rules the potholes', color: 0x111214 },
  { id: 'coupe', name: 'Sport Coupe', desc: '420 hp – watch the 150 km/h limit!', color: 0xc01818 },
  { id: 'hatch', name: 'City Hatch', desc: 'Small, nimble, Japanese-import style', color: 0x3a6ea8 },
  { id: 'oldsedan', name: 'Old Classic', desc: 'Boxy Soviet-era legend', color: 0xd8c8a0 },
  { id: 'van', name: 'Marshrutka', desc: 'Route 110 minibus. Passengers not included', color: 0xf4f4f4 },
];

export class PlayerCar {
  constructor(scene, typeId = 'sedan', color) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.body = new THREE.Group();
    this.group.add(this.body);
    scene.add(this.group);
    this.x = 0; this.z = 0; this.h = 0; this.vx = 0; this.vz = 0; this.r = 0;
    this.steer = 0; this.throttle = 0; this.brake = 0; this.hand = false;
    this.rpm = 900; this.gear = 1; this.damage = 0;
    this.pitch = 0; this.roll = 0; this.pitchV = 0; this.rollV = 0;
    this.slip = 0; this.speed = 0;
    this.spin = 0;
    this._skid();
    this._smoke();
    this.setType(typeId, color);
  }

  setType(typeId, color) {
    this.type = typeId;
    while (this.body.children.length) {
      const o = this.body.children.pop();
      o.traverse?.(c => { if (c.geometry) c.geometry.dispose(); });
    }
    const v = buildVehicle(typeId, {});
    this.spec = v.spec;
    const col = color ?? 0xf0f0f0;
    this.paintMat = new THREE.MeshPhysicalMaterial({ color: col, metalness: 0.45, roughness: 0.32, clearcoat: 1, clearcoatRoughness: 0.08, vertexColors: true });
    const detailMat = new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.3, roughness: 0.25 });
    this.lightMat = new THREE.MeshStandardMaterial({ vertexColors: true, emissive: 0xffffff, emissiveIntensity: 0.4, roughness: 0.2 });
    const p = new THREE.Mesh(v.paint, this.paintMat); p.castShadow = true;
    const d = new THREE.Mesh(v.detailNoWheels, detailMat); d.castShadow = true;
    this.lightMesh = new THREE.Mesh(v.lights, this.lightMat);
    this.body.add(p, d, this.lightMesh);
    // brake light glow quads
    const T = v.spec;
    this.brakeMat = new THREE.MeshBasicMaterial({ color: 0xff2010, transparent: true, opacity: 0.0, blending: THREE.AdditiveBlending, depthWrite: false });
    for (const s of [-1, 1]) {
      const g = new THREE.Mesh(new THREE.PlaneGeometry(T.tail.w * 2.2, T.tail.h * 4), this.brakeMat);
      g.position.set(s * T.tail.x, T.tail.y, T.tail.z - 0.06); g.rotation.y = Math.PI;
      this.body.add(g);
    }
    // headlight flares
    this.flareMat = new THREE.MeshBasicMaterial({ color: 0xfff2d0, transparent: true, opacity: 0.0, blending: THREE.AdditiveBlending, depthWrite: false });
    for (const s of [-1, 1]) {
      const g = new THREE.Mesh(new THREE.CircleGeometry(0.45, 16), this.flareMat);
      g.position.set(s * T.head.x, T.head.y, T.head.z + 0.08);
      this.body.add(g);
    }
    // plates
    const pt = plateTexture('01KG ' + String(100 + Math.floor(Math.random() * 899)) + ' ' + 'ABK'[Math.floor(Math.random() * 3)] + 'KG'[Math.floor(Math.random() * 2)] + 'B');
    const pm = new THREE.MeshBasicMaterial({ map: pt });
    const pf = new THREE.Mesh(new THREE.PlaneGeometry(0.52, 0.12), pm); pf.position.set(0, T.body[0][1] + 0.3, T.head.z + 0.075);
    const pr = new THREE.Mesh(new THREE.PlaneGeometry(0.52, 0.12), pm); pr.position.set(0, T.body[0][1] + 0.42, T.tail.z - 0.075); pr.rotation.y = Math.PI;
    this.body.add(pf, pr);
    // driver silhouette
    const drv = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), new THREE.MeshStandardMaterial({ color: 0x2a2020 }));
    drv.position.set(0.38, T.cabin[0][1] + 0.38, (T.cabin[1][0] + T.cabin[2][0]) / 2 + 0.25);
    this.body.add(drv);
    // wheels
    this.wheels = [];
    const wm = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, metalness: 0.3 });
    for (const [x, y, z] of v.wheelPos) {
      const pivot = new THREE.Group(); pivot.position.set(x, y, z);
      const w = new THREE.Mesh(v.wheel, wm); w.castShadow = true;
      pivot.add(w); this.group.add(pivot);
      this.wheels.push({ pivot, mesh: w, front: z > 0 });
    }
    // head lights (spot)
    if (!this.spot) {
      this.spot = new THREE.SpotLight(0xfff0d8, 0, 90, 0.55, 0.5, 1.2);
      this.spot.position.set(0, 0.8, T.head.z);
      this.spotTarget = new THREE.Object3D(); this.spotTarget.position.set(0, 0, T.head.z + 25);
      this.spot.target = this.spotTarget;
      this.group.add(this.spot, this.spotTarget);
    } else {
      this.spot.position.set(0, 0.8, T.head.z); this.spotTarget.position.set(0, 0, T.head.z + 25);
    }
    this.mass = T.mass; this.power = T.power * 745.7; this.vmax = T.vmax / 3.6;
    this.drag = this.power / Math.pow(this.vmax, 3);
    this.inertia = this.mass * (T.L * T.L + T.W * T.W) / 12 * 1.1;
    this.a = T.wb / 2 + (T.wbOff || 0); this.b = T.wb / 2 - (T.wbOff || 0);
    this.radius = T.W / 2 + 0.05;
    this.color = col;
  }

  setColor(c) { this.paintMat.color.setHex(c); this.color = c; }

  place(x, z, h) { this.x = x; this.z = z; this.h = h; this.vx = this.vz = this.r = 0; this.steer = 0; }

  get forward() { return [Math.sin(this.h), Math.cos(this.h)]; }

  update(dt, input, world, traffic, onCrash) {
    const steps = 3, sdt = dt / steps;
    for (let i = 0; i < steps; i++) this._step(sdt, input, world, traffic, onCrash);
    this._visual(dt, input);
  }

  _step(dt, inp, world, traffic, onCrash) {
    const fx = Math.sin(this.h), fz = Math.cos(this.h);
    const rx = -fz, rz = fx;            // right vector (driver's right)
    // NOTE: with forward (sin h, cos h), right = (-cos h, sin h)
    const Rx = -Math.cos(this.h), Rz = Math.sin(this.h);
    let u = this.vx * fx + this.vz * fz;
    let w = this.vx * Rx + this.vz * Rz;
    void rx; void rz;
    const g = 9.81, m = this.mass;
    // ---- steering
    const sp = Math.abs(u);
    const maxSteer = 0.62 / (1 + sp / 16);
    const target = -inp.steer * maxSteer; // input +1 = right; delta positive = left
    const rate = 3.2;
    this.steer += Math.max(-rate * dt, Math.min(rate * dt, target - this.steer));
    const d = this.steer;
    // ---- longitudinal
    let Fx = 0;
    const thr = inp.throttle, brk = inp.brake;
    this.braking = false; this.reversing = false;
    if (thr > 0) {
      if (u < -0.5) { Fx += 9000 * thr * m / 1500; this.braking = true; }
      else {
        const tractionMax = 0.95 * m * g * 0.62;
        Fx += Math.min(tractionMax, this.power * this._torqueCurve() / Math.max(3.5, u)) * thr;
      }
    }
    if (brk > 0) {
      if (u > 0.6) { Fx -= 1.05 * m * g * brk; this.braking = true; }
      else { // reverse
        this.reversing = true;
        if (u > -7) Fx -= m * 3.2 * brk;
      }
    }
    if (inp.hand) { Fx -= Math.sign(u) * Math.min(Math.abs(u) * m * 4, 0.6 * m * g); }
    Fx -= this.drag * u * Math.abs(u) + (0.014 * m * g * Math.sign(u) + 4 * u) * Math.min(1, Math.abs(u));
    if (thr === 0 && brk === 0 && Math.abs(u) < 0.4) { u *= 0.9; }
    // ---- lateral (bicycle model)
    const a = this.a, b = this.b;
    let Ff = 0, Fr = 0;
    const mu = 1.05;
    const Nf = m * g * b / (a + b), Nr = m * g * a / (a + b);
    if (sp > 1.5) {
      const af = Math.atan2(w - this.r * a, Math.abs(u)) + d * Math.sign(u);
      const ar = Math.atan2(w + this.r * b, Math.abs(u));
      const Cf = 9.5 * Nf, Cr = 10.5 * Nr;
      const muR = inp.hand ? 0.42 : (thr > 0.9 && sp < 22 && this.power > 200000 ? 0.85 : 1);
      Ff = THREE.MathUtils.clamp(-Cf * af, -mu * Nf, mu * Nf);
      Fr = THREE.MathUtils.clamp(-Cr * ar, -mu * muR * Nr, mu * muR * Nr);
      this.slip = Math.max(Math.abs(ar) * (inp.hand ? 2.5 : 1.4), Math.abs(af) * 0.6) * Math.min(1, sp / 8);
      const torque = -Ff * Math.cos(d) * a + Fr * b;
      this.r += torque / this.inertia * dt;
      this.r *= 1 - 0.6 * dt;
    } else {
      // kinematic at parking speeds
      this.r = u * Math.tan(d) / (a + b);
      w *= 0.5;
      this.slip = 0;
    }
    // world-space integration
    const Flat = Ff * Math.cos(d) + Fr;
    let ax = (fx * Fx + Rx * Flat) / m, az = (fz * Fx + Rz * Flat) / m;
    if (sp <= 1.5) {
      // rebuild velocity from kinematic state
      const nu = u + Fx / m * dt;
      this.vx = fx * nu + Rx * w; this.vz = fz * nu + Rz * w;
      if (thr === 0 && brk === 0 && Math.abs(nu) < 0.15) { this.vx = this.vz = 0; this.r = 0; }
    } else {
      this.vx += ax * dt; this.vz += az * dt;
    }
    this.h += this.r * dt;
    this.x += this.vx * dt; this.z += this.vz * dt;
    this.accLong = Fx / m; this.accLat = Flat / m;
    this.speed = Math.hypot(this.vx, this.vz);
    this.u = this.vx * Math.sin(this.h) + this.vz * Math.cos(this.h);
    // ---- collisions with buildings (3 circles along the body)
    const L = this.spec.L;
    const res = {};
    for (const off of [L * 0.32, 0, -L * 0.32]) {
      const cx = this.x + Math.sin(this.h) * off, cz = this.z + Math.cos(this.h) * off;
      if (world.collide(cx, cz, this.radius, res)) {
        this.x += res.x; this.z += res.z;
        const vn = this.vx * res.nx + this.vz * res.nz;
        if (vn < 0) {
          this.vx -= res.nx * vn * 1.3; this.vz -= res.nz * vn * 1.3;
          this.vx *= 0.92; this.vz *= 0.92;
          this.r += (off > 0 ? 1 : -1) * vn * 0.02 * Math.sign(res.nx * Math.cos(this.h) - res.nz * Math.sin(this.h));
          if (-vn > 2) { onCrash && onCrash(-vn, 'wall'); this.damage = Math.min(100, this.damage + (-vn) * 0.6); }
        }
      }
    }
    // ---- collisions with traffic
    if (traffic) traffic.collidePlayer(this, onCrash);
  }

  _torqueCurve() {
    // pseudo gearbox for feel + engine sound
    const u = Math.max(0, this.u || 0);
    const ratios = [0, 3.6, 2.2, 1.55, 1.18, 0.95, 0.78];
    const fin = 3.6, wr = this.spec.wr;
    if (!(this.gear >= 1)) this.gear = 1;
    let rpm = u / wr * ratios[this.gear] * fin * 60 / (2 * Math.PI);
    if (rpm > 6300 && this.gear < 6) this.gear++;
    if (rpm < 2400 && this.gear > 1) this.gear--;
    rpm = Math.max(900, u / wr * ratios[this.gear] * fin * 60 / (2 * Math.PI));
    this.rpmTarget = Math.min(7000, rpm);
    return 0.75 + 0.35 * Math.sin(Math.min(1, rpm / 6500) * Math.PI);
  }

  _visual(dt, inp) {
    this.rpm += ((this.rpmTarget || 900) + (inp.throttle > 0 && this.speed < 1 ? 2200 * inp.throttle : 0) - this.rpm) * Math.min(1, dt * 6);
    if (this.reversing) this.gear = -1; else if (this.gear < 1) this.gear = 1;
    // body pitch/roll springs
    const tp = THREE.MathUtils.clamp(-(this.accLong || 0) * 0.006, -0.05, 0.05);
    const tr = THREE.MathUtils.clamp((this.accLat || 0) * 0.007, -0.06, 0.06);
    this.pitchV += ((tp - this.pitch) * 90 - this.pitchV * 12) * dt; this.pitch += this.pitchV * dt;
    this.rollV += ((tr - this.roll) * 90 - this.rollV * 12) * dt; this.roll += this.rollV * dt;
    this.group.position.set(this.x, 0, this.z);
    this.group.rotation.y = this.h;
    this.body.rotation.set(this.pitch, 0, this.roll);
    this.body.position.y = 0.02 + Math.sin(performance.now() * 0.03) * 0.002 * Math.min(1, this.speed / 10);
    this.spin += (this.u || 0) / this.spec.wr * dt;
    for (const w of this.wheels) {
      w.mesh.rotation.x = this.spin;
      if (w.front) w.pivot.rotation.y = this.steer;
    }
    this.brakeMat.opacity = this.braking ? 0.9 : (this.night ? 0.35 : 0);
    this.lightMat.emissiveIntensity = this.night ? 2.2 : (this.braking ? 1.2 : 0.3);
    this.flareMat.opacity = this.night ? 0.55 : 0;
    this.spot.intensity = this.night ? 60 : 0;
    // skid marks + smoke
    if (this.slip > 0.22 && this.speed > 6) {
      this._addSkid();
      if (Math.random() < this.slip * 1.5) this._puff();
    } else this.lastSkid = null;
    this._updateSmoke(dt);
  }

  // ----------------------------------------------------------- skid marks (ring buffer of quads)
  _skid() {
    const N = 1200;
    this.skidN = N; this.skidI = 0;
    const g = new THREE.BufferGeometry();
    this.skidPos = new Float32Array(N * 4 * 3);
    g.setAttribute('position', new THREE.BufferAttribute(this.skidPos, 3));
    const idx = new Uint32Array(N * 6);
    for (let i = 0; i < N; i++) { idx.set([i * 4, i * 4 + 2, i * 4 + 1, i * 4 + 1, i * 4 + 2, i * 4 + 3], i * 6); }
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    this.skidMesh = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0x111111, transparent: true, opacity: 0.55, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4 }));
    this.skidMesh.frustumCulled = false;
    this.scene.add(this.skidMesh);
  }
  _addSkid() {
    const T = this.spec;
    const cur = [];
    for (const w of this.wheels) {
      if (w.front) continue;
      const p = w.pivot.position;
      const c = Math.cos(this.h), s = Math.sin(this.h);
      cur.push([this.x + p.x * c + p.z * s, this.z - p.x * s + p.z * c]);
    }
    if (this.lastSkid) {
      for (let k = 0; k < cur.length; k++) {
        const [x0, z0] = this.lastSkid[k], [x1, z1] = cur[k];
        const dx = x1 - x0, dz = z1 - z0, l = Math.hypot(dx, dz);
        if (l < 0.05 || l > 5) continue;
        const nx = -dz / l * 0.11, nz = dx / l * 0.11;
        const i = this.skidI++ % this.skidN;
        const y = 0.075;
        this.skidPos.set([x0 - nx, y, z0 - nz, x0 + nx, y, z0 + nz, x1 - nx, y, z1 - nz, x1 + nx, y, z1 + nz], i * 12);
      }
      this.skidMesh.geometry.attributes.position.needsUpdate = true;
    }
    this.lastSkid = cur;
    void T;
  }

  // ----------------------------------------------------------- tyre smoke particles
  _smoke() {
    const N = 160;
    this.smokeN = N; this.smokeI = 0;
    this.smoke = [];
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const x = c.getContext('2d'); const gr = x.createRadialGradient(32, 32, 2, 32, 32, 30);
    gr.addColorStop(0, 'rgba(255,255,255,0.8)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = gr; x.fillRect(0, 0, 64, 64);
    this.smokeTex = new THREE.CanvasTexture(c);
    for (let i = 0; i < N; i++) {
      const m = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.smokeTex, color: 0xdddddd, transparent: true, opacity: 0, depthWrite: false }));
      m.visible = false; this.scene.add(m);
      this.smoke.push({ m, life: 0, vx: 0, vy: 0, vz: 0 });
    }
  }
  _puff() {
    const p = this.smoke[this.smokeI++ % this.smokeN];
    const side = Math.random() < 0.5 ? -1 : 1;
    const T = this.spec;
    const c = Math.cos(this.h), s = Math.sin(this.h);
    const lx = side * T.track / 2, lz = -T.wb / 2;
    p.m.position.set(this.x + lx * c + lz * s, 0.3, this.z - lx * s + lz * c);
    p.life = 1; p.vx = this.vx * 0.1 + (Math.random() - 0.5); p.vz = this.vz * 0.1 + (Math.random() - 0.5); p.vy = 0.6 + Math.random() * 0.5;
    p.m.visible = true; p.m.scale.setScalar(1);
  }
  _updateSmoke(dt) {
    for (const p of this.smoke) {
      if (p.life <= 0) continue;
      p.life -= dt * 0.55;
      p.m.position.x += p.vx * dt; p.m.position.y += p.vy * dt; p.m.position.z += p.vz * dt;
      const s = 1 + (1 - p.life) * 5; p.m.scale.setScalar(s);
      p.m.material.opacity = Math.max(0, p.life * 0.45);
      if (p.life <= 0) p.m.visible = false;
    }
  }
}

// ------------------------------------------------------------------ camera rig
export class CameraRig {
  constructor(camera) {
    this.cam = camera; this.mode = 0;
    this.pos = new THREE.Vector3(0, 5, -10); this.look = new THREE.Vector3();
    this.shake = 0; this.yawOff = 0; this.lag = 0;
    this.modes = ['Chase', 'Far chase', 'Hood', 'Cinematic'];
  }
  cycle() { this.mode = (this.mode + 1) % this.modes.length; return this.modes[this.mode]; }
  snap(car) {
    this.pos.set(car.x - Math.sin(car.h) * 8, 3, car.z - Math.cos(car.h) * 8);
    this.look.set(car.x, 1, car.z);
  }
  update(dt, car, mouseYaw = 0) {
    const fx = Math.sin(car.h), fz = Math.cos(car.h);
    const sp = car.speed;
    const T = car.spec;
    let desired, look;
    // look-ahead uses velocity direction a bit so drifts look cinematic
    const vdx = sp > 2 ? car.vx / sp : fx, vdz = sp > 2 ? car.vz / sp : fz;
    const dx = fx * 0.7 + vdx * 0.3, dz = fz * 0.7 + vdz * 0.3;
    const yaw = Math.atan2(dx, dz) + mouseYaw;
    const bx = Math.sin(yaw), bz = Math.cos(yaw);
    const big = Math.max(1, T.L / 4.7);
    if (this.mode === 0 || this.mode === 1) {
      const dist = (this.mode === 0 ? 6.8 : 11) * big + sp * 0.03;
      const hgt = (this.mode === 0 ? 2.3 : 4) * big + T.cabin[1][1] * 0.4;
      desired = new THREE.Vector3(car.x - bx * dist, hgt, car.z - bz * dist);
      look = new THREE.Vector3(car.x + fx * 4, 1.1 * big, car.z + fz * 4);
      const k = 1 - Math.exp(-dt * (this.mode === 0 ? 7 : 5));
      this.pos.lerp(desired, k);
      // keep a minimum distance
    } else if (this.mode === 2) {
      desired = new THREE.Vector3(car.x + fx * (T.cabin[T.cabin.length - 1][0] - 0.2), T.cabin[0][1] + 0.55, car.z + fz * (T.cabin[T.cabin.length - 1][0] - 0.2));
      look = new THREE.Vector3(car.x + fx * 30, 1.2, car.z + fz * 30);
      this.pos.copy(desired);
    } else {
      // cinematic: slowly orbiting low camera
      this.lag += dt * 0.15;
      const a = this.lag;
      desired = new THREE.Vector3(car.x + Math.sin(a) * 9, 1.2 + Math.sin(a * 0.7) * 0.6, car.z + Math.cos(a) * 9);
      look = new THREE.Vector3(car.x, 0.9, car.z);
      this.pos.lerp(desired, 1 - Math.exp(-dt * 3));
    }
    this.look.lerp(look, this.mode === 2 ? 1 : 1 - Math.exp(-dt * 10));
    this.cam.position.copy(this.pos);
    if (this.shake > 0) {
      this.cam.position.x += (Math.random() - 0.5) * this.shake;
      this.cam.position.y += (Math.random() - 0.5) * this.shake;
      this.shake = Math.max(0, this.shake - dt * 2);
    }
    // subtle speed vibration
    if (sp > 30) this.cam.position.y += (Math.random() - 0.5) * 0.015 * (sp - 30) / 20;
    this.cam.lookAt(this.look);
    const fov = (this.mode === 2 ? 72 : 62) + Math.min(18, sp * 0.22);
    this.cam.fov += (fov - this.cam.fov) * Math.min(1, dt * 3);
    this.cam.updateProjectionMatrix();
  }
}
