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
    this.paintMat = new THREE.MeshPhysicalMaterial({ color: col, metalness: 0.55, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.06, vertexColors: true, envMapIntensity: 1.2 });
    const detailMat = new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.3, roughness: 0.25 });
    this.lightMat = new THREE.MeshStandardMaterial({ vertexColors: true, emissive: 0xffffff, emissiveIntensity: 0.4, roughness: 0.2 });
    const p = new THREE.Mesh(v.paint, this.paintMat); p.castShadow = true;
    const d = new THREE.Mesh(v.detailNoWheels, detailMat); d.castShadow = true;
    this.paintMesh = p; this.detailMesh = d; this.damage = 0; this.dents = 0;
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
    if (!this.plateText) this.plateText = '01KG ' + String(100 + Math.floor(Math.random() * 899)) + ' ' + 'ABK'[Math.floor(Math.random() * 3)] + 'KG'[Math.floor(Math.random() * 2)] + 'B';
    const pt = plateTexture(this.plateText);
    const pm = new THREE.MeshBasicMaterial({ map: pt });
    this.plateMat = pm;
    const pf = new THREE.Mesh(new THREE.PlaneGeometry(0.52, 0.12), pm); pf.position.set(0, T.body[0][1] + 0.3, T.head.z + 0.075);
    const pr = new THREE.Mesh(new THREE.PlaneGeometry(0.52, 0.12), pm); pr.position.set(0, T.body[0][1] + 0.42, T.tail.z - 0.075); pr.rotation.y = Math.PI;
    this.body.add(pf, pr);
    // driver silhouette
    const drv = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), new THREE.MeshStandardMaterial({ color: 0x2a2020 }));
    drv.position.set(0.38, T.cabin[0][1] + 0.38, (T.cabin[1][0] + T.cabin[2][0]) / 2 + 0.25);
    this.body.add(drv);
    // wheels
    if (this.wheels) for (const w of this.wheels) this.group.remove(w.pivot);
    this.wheels = [];
    const wm = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, metalness: 0.3 });
    this.wheelMat = wm;
    for (const [x, y, z] of v.wheelPos) {
      const pivot = new THREE.Group(); pivot.position.set(x, y, z);
      const w = new THREE.Mesh(v.wheel, wm); w.castShadow = true;
      pivot.add(w); this.group.add(pivot);
      this.wheels.push({ pivot, mesh: w, front: z > 0 });
    }
    // nitro flames
    this.flames = [];
    const fm = new THREE.MeshBasicMaterial({ color: 0x66aaff, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false });
    for (const s of [-1, 1]) {
      const f = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.9, 10, 1, true).rotateX(-Math.PI / 2).translate(0, 0, -0.45), fm);
      f.position.set(s * T.W * 0.24, T.body[0][1] + 0.05, T.tail.z - 0.05); f.visible = false;
      this.body.add(f); this.flames.push(f);
    }
    this.flameMat = fm;
    this._applyCustom();
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
    this.tank = { sedan: 60, hatch: 45, suv: 90, coupe: 65, oldsedan: 40, van: 75, bus: 200, truck: 200 }[typeId] || 60;
    this.diesel = ['van', 'bus', 'truck'].includes(typeId);
    if (this.fuel === undefined || this.fuel > this.tank) this.fuel = this.tank * 0.7;
    // indicator lamps (front + rear corners)
    this.blinkMat = new THREE.MeshBasicMaterial({ color: 0xff9a10, transparent: true, opacity: 0 });
    this.blinkers = { L: [], R: [] };
    for (const [side, sx] of [['L', 1], ['R', -1]]) for (const zz of [T.head.z - 0.02, T.tail.z + 0.02]) {
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffa020 }));
      b.position.set(sx * (T.W / 2 - 0.08), T.head.y, zz); b.visible = false; this.body.add(b); this.blinkers[side].push(b);
    }
    this.drag = this.power / Math.pow(this.vmax, 3);
    this.inertia = this.mass * (T.L * T.L + T.W * T.W) / 12 * 1.1;
    this.a = T.wb / 2 + (T.wbOff || 0); this.b = T.wb / 2 - (T.wbOff || 0);
    this.radius = T.W / 2 + 0.05;
    this.color = col;
  }

  // crumple the body around a world-space impact point
  dent(wx, wz, amount) {
    const dx = wx - this.x, dz = wz - this.z, c = Math.cos(this.h), s = Math.sin(this.h);
    const lx = dx * c - dz * s, lz = dx * s + dz * c;
    const R = 1.25, top = this.spec.roof[2][1];
    for (const m of [this.paintMesh, this.detailMesh]) {
      const pos = m.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
        const d = Math.hypot(x - lx, z - lz);
        if (d > R || y > top + 0.1) continue;
        const f = Math.pow(1 - d / R, 2) * amount;
        const cl = Math.hypot(x, z * 0.35) || 1;
        pos.setXYZ(i, x - x / cl * f * 0.6 - Math.sign(lx) * 0 , y - f * 0.15 * (y > 0.9 ? 1 : 0.3), z - Math.sign(z) * f * (Math.abs(lz) > this.spec.L * 0.3 ? 0.5 : 0.1));
      }
      pos.needsUpdate = true;
    }
    this.dents++;
  }
  repair() { this.setType(this.type, this.color); }

  // cosmetic upgrades bought in the garage
  _applyCustom() {
    const C = this.custom || (this.custom = {});
    const T = this.spec;
    if (this.neon) { this.group.remove(this.neon); this.neon = null; }
    if (C.neon) {
      const tex = this._neonTex || (this._neonTex = (() => {
        const c = document.createElement('canvas'); c.width = c.height = 128;
        const x = c.getContext('2d'); const g = x.createRadialGradient(64, 64, 10, 64, 64, 64);
        g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 128, 128);
        return new THREE.CanvasTexture(c);
      })());
      this.neon = new THREE.Mesh(new THREE.PlaneGeometry(T.W * 1.9, T.L * 1.35).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: tex, color: C.neon, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }));
      this.neon.position.y = 0.14; this.neon.material.polygonOffset = true; this.neon.material.polygonOffsetFactor = -8; this.neon.material.polygonOffsetUnits = -30; this.neon.renderOrder = 2; this.group.add(this.neon);
    }
    if (this.spoiler) { this.body.remove(this.spoiler); this.spoiler = null; }
    if (C.spoiler && !['van', 'bus', 'truck'].includes(this.type)) {
      const g = new THREE.Group();
      const wing = new THREE.Mesh(new THREE.BoxGeometry(T.W * 0.95, 0.05, 0.35), this.paintMat);
      wing.position.set(0, 0.28, 0); g.add(wing);
      for (const s of [-1, 1]) { const st = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.28, 0.12), new THREE.MeshStandardMaterial({ color: 0x111111 })); st.position.set(s * T.W * 0.3, 0.14, 0); g.add(st); }
      const tailTop = T.body.reduce((m, p) => p[0] < T.L * -0.3 ? Math.max(m, p[1]) : m, 0.8);
      g.position.set(0, tailTop, T.tail.z + 0.3); g.traverse(o => o.castShadow = true);
      this.body.add(g); this.spoiler = g;
    }
    if (this.wheelMat) this.wheelMat.color.setHex(C.rims ?? 0xffffff);
  }
  setPlate(text) {
    this.plateText = String(text).toUpperCase().slice(0, 12);
    if (this.plateMat) { this.plateMat.map.dispose(); this.plateMat.map = plateTexture(this.plateText); this.plateMat.needsUpdate = true; }
  }

  setColor(c) { this.paintMat.color.setHex(c); this.color = c; }

  place(x, z, h) { this.x = x; this.z = z; this.h = h; this.vx = this.vz = this.r = 0; this.steer = 0; }

  get forward() { return [Math.sin(this.h), Math.cos(this.h)]; }

  update(dt, input, world, traffic, onCrash) {
    const steps = 3, sdt = dt / steps;
    for (let i = 0; i < steps; i++) this._step(sdt, input, world, traffic, onCrash);
    this._visual(dt, input);
  }

  // Driving model: bicycle model with load transfer, combined-slip limit, and optional
  // assists (ABS, traction control, stability control, counter-steer help).
  _step(dt, inp, world, traffic, onCrash) {
    const A = this.assists || (this.assists = { abs: true, tcs: true, esc: true, steerAssist: true, sens: 1, manual: false });
    const fx = Math.sin(this.h), fz = Math.cos(this.h);
    const Rx = -Math.cos(this.h), Rz = Math.sin(this.h);
    let u = this.vx * fx + this.vz * fz;
    let w = this.vx * Rx + this.vz * Rz;
    const g = 9.81, m = this.mass;
    const sp = Math.abs(u);
    const surf = this.surface ?? 1;            // 1 = asphalt, <1 = gravel / grass
    // ---- steering: speed-sensitive lock & rate, smooth self-centering
    const maxSteer = (0.6 / (1 + sp / 14)) * (0.75 + 0.5 * A.sens);
    let target = -inp.steer * maxSteer;
    // counter-steer assist: help catch slides (disabled while handbraking)
    if (A.steerAssist && !inp.hand && sp > 6 && this.rearSlip) target += THREE.MathUtils.clamp(this.rearSlip * 0.55, -0.25, 0.25);
    const rate = (inp.steer === 0 ? 5.5 : 4.2) / (1 + sp / 45);
    this.steer += THREE.MathUtils.clamp(target - this.steer, -rate * dt, rate * dt);
    const d = this.steer;
    // ---- engine / gearbox (always updated so the sound is right while coasting)
    const torqueK = this._gearbox(inp);
    // ---- longitudinal forces
    let Fx = 0;
    const thr = (this.fuel ?? 1) > 0 ? inp.throttle : 0, brk = inp.brake;
    this.braking = false; this.reversing = false;
    const stopped = sp < 0.6;
    if (brk > 0 && stopped) this.stopHold = (this.stopHold || 0) + dt; else if (brk === 0) this.stopHold = 0;
    const wantReverse = brk > 0 && (u < -0.3 || (stopped && this.stopHold > 0.2));
    if (this.nitro === undefined) this.nitro = 1;
    // fuel: consumption grows with throttle, nitro and speed (scaled up so a tank lasts a session)
    const burn = (0.35 + thr * 5.5 + (this.boosting ? 8 : 0)) * (this.diesel ? 0.8 : 1) * (this.mass / 1500) * 0.00012 * Math.max(1, Math.abs(u));
    if (thr > 0 || Math.abs(u) > 0.5) this.fuel = Math.max(0, (this.fuel ?? this.tank) - burn * dt * 10);
    this.boosting = !!(inp.nitro && this.nitro > 0.01 && thr > 0 && u > 1 && this.fuel > 0);
    if (this.boosting) { Fx += m * 5.2; this.nitro = Math.max(0, this.nitro - dt * 0.2); }
    else this.nitro = Math.min(1, this.nitro + dt * 0.02);
    if (thr > 0) {
      if (u < -0.5) { Fx += 1.0 * m * g * thr; this.braking = true; }
      else if (!this.limiter) {
        let drive = this.power * torqueK / Math.max(3.0, u) * thr;
        const tractionMax = (A.tcs ? 0.92 : 1.15) * m * g * 0.6 * surf;
        if (!A.tcs && drive > tractionMax && sp < 25) this.wheelspin = Math.min(1, (drive - tractionMax) / tractionMax); else this.wheelspin = 0;
        Fx += Math.min(tractionMax, drive);
      }
    } else this.wheelspin = 0;
    if (brk > 0) {
      if (wantReverse) { this.reversing = true; if (u > -8) Fx -= m * 3.4 * brk; }
      else if (u > 0.3) {
        const lock = A.abs ? 1.0 : 1.12;
        Fx -= lock * m * g * brk * surf; this.braking = true;
        if (!A.abs && brk > 0.9 && sp > 4) this.locked = true; else this.locked = false;
      }
    } else this.locked = false;
    if (inp.hand) { Fx -= Math.sign(u) * Math.min(Math.abs(u) * m * 3, 0.55 * m * g); }
    Fx -= this.drag * u * Math.abs(u) + (0.015 * m * g * Math.sign(u) + 4 * u) * Math.min(1, Math.abs(u)) * (surf < 1 ? 3.5 : 1);
    if (thr === 0 && brk === 0 && sp < 0.4) u *= 0.85;
    // ---- load transfer (CoG height ~0.55 m)
    const a = this.a, b = this.b, L = a + b;
    const dN = THREE.MathUtils.clamp(m * (this.accLong || 0) * 0.55 / L, -m * g * 0.3, m * g * 0.3);
    const Nf = m * g * b / L - dN, Nr = m * g * a / L + dN;
    const mu = 1.08 * surf;
    let Ff = 0, Fr = 0;
    if (sp > 1.2) {
      const af = Math.atan2(w - this.r * a, sp) + d * Math.sign(u);
      const ar = Math.atan2(w + this.r * b, sp);
      const Cf = 10 * Nf, Cr = 11 * Nr;
      // combined slip: longitudinal use of rear grip reduces lateral capacity
      const longUse = Math.min(0.9, Math.abs(Fx) / (mu * (Nf + Nr)) * (thr > 0 ? 1.2 : 0.6));
      let muR = Math.sqrt(1 - longUse * longUse);
      if (inp.hand) muR = 0.38;
      if (this.wheelspin) muR *= 1 - 0.5 * this.wheelspin;
      const muF = this.locked ? 0.25 : 1;
      // smooth saturation (tanh) for progressive breakaway
      const satF = mu * Nf * muF, satR = mu * Nr * muR;
      Ff = -satF * Math.tanh(Cf * af / satF);
      Fr = -satR * Math.tanh(Cr * ar / satR);
      this.rearSlip = ar;
      this.slip = Math.max(Math.abs(ar) * (inp.hand ? 2.4 : 1.6), Math.abs(af) * 0.7, this.wheelspin * 0.8, this.locked ? 0.6 : 0) * Math.min(1, sp / 8);
      const torque = -Ff * Math.cos(d) * a + Fr * b;
      this.r += torque / this.inertia * dt;
      this.r *= 1 - 0.8 * dt;
      // electronic stability control: cap yaw rate to what the tyres can sustain
      if (A.esc && !inp.hand) {
        const rMax = mu * g / Math.max(sp, 4) * 1.12;
        if (Math.abs(this.r) > rMax) this.r += (Math.sign(this.r) * rMax - this.r) * Math.min(1, dt * 8);
        if (Math.abs(ar) > 0.12) w *= 1 - Math.min(0.5, dt * 2.5);
      }
    } else {
      this.r = u * Math.tan(d) / L;
      w *= 0.5;
      this.slip = 0; this.rearSlip = 0;
    }
    const Flat = Ff * Math.cos(d) + Fr;
    if (sp <= 1.2) {
      const nu = u + Fx / m * dt;
      this.vx = fx * nu + Rx * w; this.vz = fz * nu + Rz * w;
      if (thr === 0 && !wantReverse && Math.abs(nu) < 0.2) { this.vx = this.vz = 0; this.r = 0; }
    } else {
      // re-project ESC-damped lateral velocity
      const nu = u + Fx / m * dt, nw = w + Flat / m * dt;
      this.vx = fx * nu + Rx * nw; this.vz = fz * nu + Rz * nw;
    }
    this.h += this.r * dt;
    this.x += this.vx * dt; this.z += this.vz * dt;
    this.accLong = this.accLong === undefined ? 0 : this.accLong + (Fx / m - this.accLong) * Math.min(1, dt * 10);
    this.accLat = Flat / m;
    this.speed = Math.hypot(this.vx, this.vz);
    this.u = this.vx * Math.sin(this.h) + this.vz * Math.cos(this.h);
    // ---- collisions with buildings (3 circles along the body)
    const CL = this.spec.L;
    const res = {};
    for (const off of [CL * 0.32, 0, -CL * 0.32]) {
      const cx = this.x + Math.sin(this.h) * off, cz = this.z + Math.cos(this.h) * off;
      if (world.collide(cx, cz, this.radius, res)) {
        this.x += res.x; this.z += res.z;
        const vn = this.vx * res.nx + this.vz * res.nz;
        if (vn < 0) {
          this.vx -= res.nx * vn * 1.25; this.vz -= res.nz * vn * 1.25;
          this.vx *= 0.94; this.vz *= 0.94;
          this.r += (off > 0 ? 1 : -1) * vn * 0.02 * Math.sign(res.nx * Math.cos(this.h) - res.nz * Math.sin(this.h));
          if (-vn > 2) { onCrash && onCrash(-vn, 'wall', null, cx - res.nx * this.radius, cz - res.nz * this.radius, res.nx, res.nz); this.damage = Math.min(100, this.damage + (-vn) * 0.6); }
        }
      }
    }
    if (traffic) traffic.collidePlayer(this, onCrash);
    if (this.remotes) this.remotes.collide(this, onCrash);
  }

  shiftUp() { if (this.gear < 6) { this.gear = Math.max(1, this.gear) + 1; this.shiftT = 0.25; } }
  shiftDown() { if (this.gear > 1) { this.gear--; this.shiftT = 0.2; } }

  _gearbox(inp) {
    const u = Math.max(0, this.u || 0);
    const ratios = [0, 3.6, 2.2, 1.55, 1.18, 0.95, 0.78];
    const fin = 3.6, wr = this.spec.wr;
    if (!(this.gear >= 1)) this.gear = 1;
    const rpmOf = (g) => u / wr * ratios[g] * fin * 60 / (2 * Math.PI);
    let rpm = rpmOf(this.gear);
    if (!(this.assists && this.assists.manual)) {
      const up = inp.throttle > 0.5 ? 6300 : 3800;
      if (rpm > up && this.gear < 6) { this.gear++; this.shiftT = 0.18; }
      if (rpm < 2000 && this.gear > 1) this.gear--;
      rpm = rpmOf(this.gear);
    }
    this.limiter = rpm > 7200;
    this.rpmTarget = Math.min(7300, Math.max(900, rpm));
    if (this.shiftT > 0) { this.shiftT -= 1 / 180; return 0.25; }
    const x = Math.min(1, rpm / 6500);
    const health = this.damage >= 100 ? 0.3 : 1 - this.damage / 300;
    return (0.72 + 0.38 * Math.sin(x * Math.PI)) * health;
  }

  setIndicator(mode) { this.indicator = this.indicator === mode ? null : mode; }
  _visual(dt, inp) {
    const on = (performance.now() % 760) < 380;
    if (this.blinkers) for (const s of ['L', 'R']) { const act = this.indicator === s || this.indicator === 'H'; for (const b of this.blinkers[s]) b.visible = act && on; }
    // auto-cancel the indicator after a completed turn
    if (this.indicator === 'L' || this.indicator === 'R') { this._turnAcc = (this._turnAcc || 0) + Math.abs(this.r || 0) * dt; if (this._turnAcc > 1.2) { this.indicator = null; this._turnAcc = 0; } } else this._turnAcc = 0;
    this.blinkOn = !!this.indicator && on;
    if (this.flames) for (const f of this.flames) { f.visible = !!this.boosting; if (f.visible) { const k = 0.8 + Math.random() * 0.5; f.scale.set(1, 1, k); } }
    if (this.flameMat) this.flameMat.color.setHex(Math.random() < 0.5 ? 0x66aaff : 0x99ccff);
    this.rpm += ((this.rpmTarget || 900) + (inp.throttle > 0 && this.speed < 1 ? 2200 * inp.throttle : 0) - this.rpm) * Math.min(1, dt * 6);
    this.gearLabel = this.reversing ? 'R' : (this.speed < 0.3 && !this.throttleOn ? 'N' : String(this.gear));
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
    this.brakeMat.opacity = this.braking ? 0.75 : (this.night ? 0.12 : 0);
    this.lightMat.emissiveIntensity = this.night ? (this.braking ? 1.6 : 0.8) : (this.braking ? 1.2 : 0.25);
    this.lightsOn = this.headMode === 'on' || (this.headMode !== 'off' && this.night);
    this.flareMat.opacity = this.lightsOn ? 0.55 : 0;
    this.spot.intensity = this.lightsOn ? 60 : 0;
    // skid marks + smoke
    if ((this.slip > 0.22 && this.speed > 6) || (this.wheelspin > 0.2 && this.speed > 1)) {
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
    const fov = (this.mode === 2 ? (this.baseFov || 62) + 10 : (this.baseFov || 62)) + Math.min(16, sp * 0.2);
    this.cam.fov += (fov - this.cam.fov) * Math.min(1, dt * 3);
    this.cam.updateProjectionMatrix();
  }
}
