// On-foot mode: get out of the car (F), walk / sprint / jump around Bishkek, get back in,
// or pull a driver out of a traffic car and take it (car theft brings the police).
import * as THREE from 'three';

function makeCharacter(shirt = 0x2a5a9a) {
  const g = new THREE.Group();
  const M = (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.8 });
  const skin = M(0xd0a07c), sh = M(shirt), pants = M(0x22262e), shoe = M(0x111111), hair = M(0x15110d);
  const add = (geo, mat, x, y, z, parent = g) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; parent.add(m); return m; };
  add(new THREE.BoxGeometry(0.44, 0.6, 0.25), sh, 0, 1.22, 0);
  add(new THREE.BoxGeometry(0.4, 0.2, 0.23), pants, 0, 0.88, 0);
  add(new THREE.SphereGeometry(0.12, 14, 12), skin, 0, 1.68, 0);
  add(new THREE.SphereGeometry(0.127, 14, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), hair, 0, 1.71, -0.01);
  const legs = [], arms = [];
  for (const s of [-1, 1]) {
    const lg = new THREE.Group(); lg.position.set(0.1 * s, 0.9, 0); g.add(lg);
    add(new THREE.BoxGeometry(0.15, 0.82, 0.16).translate(0, -0.41, 0), pants, 0, 0, 0, lg);
    add(new THREE.BoxGeometry(0.16, 0.08, 0.26), shoe, 0, -0.86, 0.04, lg);
    const ag = new THREE.Group(); ag.position.set(0.28 * s, 1.5, 0); g.add(ag);
    add(new THREE.BoxGeometry(0.1, 0.6, 0.11).translate(0, -0.3, 0), sh, 0, 0, 0, ag);
    add(new THREE.SphereGeometry(0.055, 8, 6), skin, 0, -0.62, 0, ag);
    legs.push(lg); arms.push(ag);
  }
  g.userData = { legs, arms };
  return g;
}

export class OnFoot {
  constructor(scene, world, map) {
    this.scene = scene; this.world = world; this.map = map;
    this.active = false;
    this.char = makeCharacter();
    this.char.visible = false;
    scene.add(this.char);
    this.x = 0; this.z = 0; this.y = 0; this.vy = 0; this.h = 0; this.speed = 0; this.phase = 0;
    this.camYaw = 0; this.camPitch = 0.25;
    this.vx = 0; this.vz = 0;
    this.spec = { L: 0.6, W: 0.6 }; this.radius = 0.35; // so traffic treats us like an obstacle
  }

  exit(car) {
    // step out of the driver's door (left side)
    const lx = Math.cos(car.h) * 1.6, lz = -Math.sin(car.h) * 1.6;
    this.x = car.x + lx; this.z = car.z + lz; this.y = 0; this.vy = 0;
    const res = {};
    if (this.world.collide(this.x, this.z, this.radius, res)) { this.x = car.x - lx; this.z = car.z - lz; }
    this.h = car.h; this.camYaw = car.h; this.active = true; this.char.visible = true;
    car.vx = car.vz = 0; car.r = 0;
  }
  enter() { this.active = false; this.char.visible = false; }

  update(dt, inp, cars, peds) {
    // camera-relative movement
    const fwd = inp.fwd, side = inp.side;
    const run = inp.run ? 6.2 : 2.6;
    let mx = 0, mz = 0;
    if (fwd || side) {
      const a = this.camYaw;
      mx = Math.sin(a) * fwd - Math.cos(a) * side;
      mz = Math.cos(a) * fwd + Math.sin(a) * side;
      const l = Math.hypot(mx, mz); mx /= l; mz /= l;
      const want = Math.atan2(mx, mz);
      let dh = want - this.h; dh = Math.atan2(Math.sin(dh), Math.cos(dh));
      this.h += dh * Math.min(1, dt * 12);
    }
    const target = fwd || side ? run : 0;
    this.speed += THREE.MathUtils.clamp(target - this.speed, -20 * dt, 14 * dt);
    this.vx = Math.sin(this.h) * this.speed; this.vz = Math.cos(this.h) * this.speed;
    this.x += this.vx * dt; this.z += this.vz * dt;
    if (inp.jump && this.y <= 0.001) this.vy = 4.6;
    this.vy -= 13 * dt; this.y = Math.max(0, this.y + this.vy * dt);
    if (this.y === 0 && this.vy < 0) this.vy = 0;
    // walls
    const res = {};
    if (this.world.collide(this.x, this.z, this.radius, res)) { this.x += res.x; this.z += res.z; }
    // cars push us
    for (const c of cars) {
      const dx = this.x - c.x, dz = this.z - c.z, d = Math.hypot(dx, dz), R = c.spec.W / 2 + 0.5;
      if (d < R + c.spec.L / 2) {
        // in car-local coords
        const s = Math.sin(c.h), co = Math.cos(c.h);
        const lx = dx * co - dz * s, lz = dx * s + dz * co;
        const hx = c.spec.W / 2 + 0.35, hz = c.spec.L / 2 + 0.35;
        if (Math.abs(lx) < hx && Math.abs(lz) < hz) {
          const px = hx - Math.abs(lx), pz = hz - Math.abs(lz);
          let nlx = 0, nlz = 0;
          if (px < pz) nlx = Math.sign(lx) * px; else nlz = Math.sign(lz) * pz;
          this.x += nlx * co + nlz * s; this.z += -nlx * s + nlz * co;
        }
      }
    }
    // animation
    this.phase += dt * this.speed * 2.6;
    const sw = Math.sin(this.phase) * Math.min(1, this.speed / 2.6);
    const U = this.char.userData;
    U.legs[0].rotation.x = sw * 0.7; U.legs[1].rotation.x = -sw * 0.7;
    U.arms[0].rotation.x = -sw * 0.6; U.arms[1].rotation.x = sw * 0.6;
    if (this.y > 0.01) { U.legs[0].rotation.x = 0.6; U.legs[1].rotation.x = -0.3; U.arms[0].rotation.x = U.arms[1].rotation.x = -2.6; }
    this.char.position.set(this.x, this.y + Math.abs(Math.cos(this.phase)) * 0.04 * Math.min(1, this.speed / 3), this.z);
    this.char.rotation.y = this.h;
  }

  // nearest enterable car within reach: own car or a traffic car
  nearestCar(own, traffic) {
    let best = null, bd = 4.5;
    const d0 = Math.hypot(own.x - this.x, own.z - this.z);
    if (d0 < bd + own.spec.L / 2) { best = { own: true, c: own }; bd = d0 - own.spec.L / 2; }
    for (const c of traffic.cars) {
      const d = Math.hypot(c.x - this.x, c.z - this.z) - c.spec.L / 2;
      if (d < bd) { bd = d; best = { own: false, c }; }
    }
    return best;
  }

  camera(cam, dt, mouse) {
    this.camYaw += mouse.dx; this.camPitch = THREE.MathUtils.clamp(this.camPitch + mouse.dy, -0.1, 1.1);
    if (!mouse.active && this.speed > 0.5) {
      let dh = this.h - this.camYaw; dh = Math.atan2(Math.sin(dh), Math.cos(dh));
      this.camYaw += dh * Math.min(1, dt * 2.2);
    }
    const dist = 4.2;
    const tx = this.x - Math.sin(this.camYaw) * dist * Math.cos(this.camPitch);
    const tz = this.z - Math.cos(this.camYaw) * dist * Math.cos(this.camPitch);
    const ty = this.y + 1.6 + Math.sin(this.camPitch) * dist;
    cam.position.lerp(new THREE.Vector3(tx, ty, tz), 1 - Math.exp(-dt * 10));
    cam.lookAt(this.x, this.y + 1.4, this.z);
    cam.fov += (60 - cam.fov) * Math.min(1, dt * 3); cam.updateProjectionMatrix();
  }
}
