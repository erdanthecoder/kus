// City life: renting apartments & cars, the jail (detention yard at the Sverdlovsky district
// police department), daily rent payments, NPC text messages.
import * as THREE from 'three';
import { pointInPoly } from './data.js';
import { fmt } from './game.js';

export const APARTMENTS = [
  { id: 'hostel', name: 'Hostel bed near Osh Bazaar', desc: 'Bunk bed, shared kitchen. Cheap and loud.', near: [-2650, 220], price: 150 },
  { id: 'khrush', name: '1-room flat in a khrushchyovka', desc: '5-storey Soviet block, 4th floor, no lift. Pervomaisky district.', near: [-1400, 700], price: 600 },
  { id: 'center', name: '2-room flat on Erkindik Boulevard', desc: 'High ceilings, oak trees under the window. City centre.', near: [230, 520], price: 1400 },
  { id: 'south', name: 'New apartment near Asia Mall', desc: '12th floor, mountain view, underground parking.', near: [-1500, 2200], price: 2200 },
  { id: 'penthouse', name: 'Penthouse in Bishkek City', desc: 'Glass tower, panoramic view of the whole city.', near: [1019, -577], price: 6000 },
];

export class Life {
  constructor(game, map, world, scene, hud, audio) {
    this.game = game; this.map = map; this.world = world; this.scene = scene; this.hud = hud; this.audio = audio;
    // resolve every apartment to a real residential building + a curb spot in front of it
    for (const A of APARTMENTS) {
      let best = null, bd = 1e9;
      for (const B of map.buildings) {
        const d = Math.hypot(B.cx - A.near[0], B.cz - A.near[1]);
        if (d > 600 || B.h < 8) continue;
        if (d < bd) { bd = d; best = B; }
      }
      A.b = best;
      const c = best ? [best.cx, best.cz] : A.near;
      const r = map.nearestRoad(c[0], c[1], 150, e => e.cls <= 5);
      A.x = r ? r.x : c[0]; A.z = r ? r.z : c[1]; A.h = r ? Math.atan2(r.dx, r.dz) : 0;
    }
    this.home = null;
    this.jail = null;
    this._jailSite();
    this.npcT = 40 + Math.random() * 60;
  }

  // ------------------------------------------------------------------ rent
  rentApartment(id) {
    const A = APARTMENTS.find(a => a.id === id); if (!A) return false;
    if (!this.game.spend(A.price, 'Аренда: ' + A.name)) return false;
    this.game.rent = id; this.game.rentDay = this._day();
    this.game.msg('Арендодатель Гульмира', `Ключи ваши! ${A.name}. Оплата ${fmt(A.price)} сом в сутки списывается с MBank автоматически.`, '🏠');
    this._marker();
    return true;
  }
  cancelRent() { if (!this.game.rent) return; this.game.msg('Арендодатель Гульмира', 'Договор аренды расторгнут. Ключи оставьте у соседки.', '🏠'); this.game.rent = null; this._marker(); }
  get apartment() { return APARTMENTS.find(a => a.id === this.game.rent) || null; }
  rentCar(type, price, setCar) {
    if (!this.game.spend(price, 'Прокат авто')) return false;
    this.game.carRent = { type, day: this._day() };
    setCar(type, undefined, false);
    this.game.msg('Прокат «Ала-Тоо Авто»', `Машина ваша до полуночи. Приятной поездки! Списано ${fmt(price)} сом.`, '🔑');
    return true;
  }
  _day() { const d = new Date(Date.now() + 6 * 3600 * 1000); return d.toISOString().slice(0, 10); } // Bishkek date (UTC+6)

  // charge rent once per (Bishkek) day; end car rentals at midnight
  dailyTick(setCar, car) {
    const day = this._day();
    const A = this.apartment;
    if (A && this.game.rentDay !== day) {
      this.game.rentDay = day;
      this.game.charge(A.price, 'Аренда: ' + A.name);
      this.game.msg('MBank', `−${fmt(A.price)} сом · аренда «${A.name}». Баланс: ${fmt(this.game.bank)} сом`, '🏦');
      if (this.game.bank < -2000) { this.game.msg('Арендодатель Гульмира', 'Вы должны за аренду! Освободите квартиру.', '🏠'); this.game.rent = null; this._marker(); }
    }
    if (this.game.carRent && this.game.carRent.day !== day) {
      this.game.carRent = null;
      this.game.msg('Прокат «Ала-Тоо Авто»', 'Срок аренды закончился, машину забрали. Спасибо!', '🔑');
      if (setCar) setCar(this.game.homeCar || 'sedan', this.game.homeColor, true);
    }
  }

  _marker() {
    if (this.homeMesh) { this.scene.remove(this.homeMesh); this.homeMesh = null; }
    const A = this.apartment; if (!A) return;
    const g = new THREE.Group();
    const ring = new THREE.Mesh(new THREE.RingGeometry(3, 3.6, 40).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0x3ddc84, transparent: true, opacity: 0.85, depthWrite: false }));
    ring.position.y = 0.25; g.add(ring);
    const c = document.createElement('canvas'); c.width = 256; c.height = 64; const x = c.getContext('2d');
    x.fillStyle = 'rgba(20,90,50,.85)'; x.fillRect(0, 0, 256, 64); x.fillStyle = '#fff'; x.font = 'bold 30px Arial'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('🏠 HOME [E]', 128, 33);
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), depthTest: false })); s.scale.set(5, 1.25, 1); s.position.y = 4; g.add(s);
    g.position.set(A.x, 0, A.z); this.scene.add(g); this.homeMesh = g;
  }

  // ------------------------------------------------------------------ jail
  _jailSite() {
    // detention yard next to the Sverdlovsky district police department (real OSM location)
    const P = [1666, 244];
    let site = null;
    // need an open lot: no buildings within ~8 m of the yard and no roads crossing it
    for (let r = 30; r < 600 && !site; r += 12) for (let a = 0; a < 6.28 && !site; a += 0.25) {
      const x = P[0] + Math.cos(a) * r, z = P[1] + Math.sin(a) * r;
      let ok = true;
      for (let dx = -22; dx <= 22 && ok; dx += 3.5) for (let dz = -19; dz <= 19 && ok; dz += 3.5) {
        if (this.map.insideBuilding(x + dx, z + dz, 0.5)) ok = false;
      }
      for (let dx = -16; dx <= 16 && ok; dx += 4) for (let dz = -13; dz <= 13 && ok; dz += 4) {
        const nr = this.map.nearestRoad(x + dx, z + dz, 12); if (nr && nr.dist < nr.e.w / 2 + 1.5) ok = false;
      }
      if (ok) site = [x, z];
    }
    this.jailPos = site || [P[0] + 40, P[1] + 40];
    const [cx, cz] = this.jailPos, W = 28, D = 22;
    const g = new THREE.Group();
    const concrete = new THREE.MeshStandardMaterial({ color: 0xa8a49c, roughness: 0.9 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x3a3c40, roughness: 0.6, metalness: 0.5 });
    const wall = (x0, z0, x1, z1) => {
      const L = Math.hypot(x1 - x0, z1 - z0);
      const m = new THREE.Mesh(new THREE.BoxGeometry(L, 4, 0.4), concrete);
      m.position.set((x0 + x1) / 2, 2, (z0 + z1) / 2); m.rotation.y = -Math.atan2(z1 - z0, x1 - x0); m.castShadow = m.receiveShadow = true; g.add(m);
      // barbed wire coil on top
      const coil = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.03, 4, 8), dark);
      for (let t = 0.5; t < L; t += 0.6) { const c2 = coil.clone(); c2.position.set(x0 + (x1 - x0) * t / L, 4.25, z0 + (z1 - z0) * t / L); c2.rotation.y = m.rotation.y; g.add(c2); }
      this.world.addWall(x0, z0, x1, z1);
    };
    const x0 = cx - W / 2, x1 = cx + W / 2, z0 = cz - D / 2, z1 = cz + D / 2;
    wall(x0, z0, x1, z0); wall(x1, z0, x1, z1); wall(x1, z1, x0, z1); wall(x0, z1, x0, z0);
    // cell block with barred windows
    const block = new THREE.Mesh(new THREE.BoxGeometry(12, 7, 6), concrete);
    block.position.set(cx, 3.5, z0 + 3.3); block.castShadow = block.receiveShadow = true; g.add(block);
    for (let i = 0; i < 5; i++) for (let fl = 0; fl < 2; fl++) {
      const win = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.8), new THREE.MeshStandardMaterial({ color: 0x111111 }));
      win.position.set(cx - 4.8 + i * 2.4, 2.2 + fl * 3, z0 + 6.32); g.add(win);
      for (let b = 0; b < 4; b++) { const bar = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.8, 0.04), dark); bar.position.set(cx - 5.15 + i * 2.4 + b * 0.24, 2.2 + fl * 3, z0 + 6.36); g.add(bar); }
    }
    // watch tower
    const tw = new THREE.Mesh(new THREE.BoxGeometry(2.4, 7, 2.4), concrete); tw.position.set(x1 - 1.4, 3.5, z1 - 1.4); g.add(tw);
    const cab = new THREE.Mesh(new THREE.BoxGeometry(3, 1.6, 3), new THREE.MeshStandardMaterial({ color: 0x2a3a2a })); cab.position.set(x1 - 1.4, 7.8, z1 - 1.4); g.add(cab);
    this.towerLight = new THREE.SpotLight(0xfff2cc, 0, 40, 0.4, 0.5, 1); this.towerLight.position.set(x1 - 1.4, 8.6, z1 - 1.4); this.towerLight.target.position.set(cx, 0, cz); g.add(this.towerLight, this.towerLight.target);
    // sign
    const c = document.createElement('canvas'); c.width = 512; c.height = 96; const x = c.getContext('2d');
    x.fillStyle = '#1446a0'; x.fillRect(0, 0, 512, 96); x.fillStyle = '#fff'; x.font = 'bold 34px Arial'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('ИЗОЛЯТОР ВРЕМЕННОГО СОДЕРЖАНИЯ', 256, 48);
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(9, 1.7), new THREE.MeshStandardMaterial({ map: new THREE.CanvasTexture(c) }));
    sign.position.set(cx, 5.2, z1 + 0.25); g.add(sign);
    const sign2 = sign.clone(); sign2.position.set(cx, 5.2, z0 - 0.25); sign2.rotation.y = Math.PI; g.add(sign2);
    this.scene.add(g);
    this.jailBox = { x0, x1, z0, z1, cx, cz };
  }

  sendToJail(seconds, bail, foot, car) {
    const J = this.jailBox;
    this.jail = { t: seconds, total: seconds, bail };
    foot.x = J.cx; foot.z = J.cz + 3; foot.y = 0; foot.h = 0; foot.camYaw = Math.PI; foot.active = true; foot.char.visible = true;
    // the car is parked outside the gate
    car.place(J.cx, J.z1 + 8, Math.PI / 2);
    this.game.msg('Патрульная милиция', `Вы задержаны на ${seconds} c. Залог: ${fmt(bail)} сом (нажмите B, чтобы внести).`, '👮');
  }
  updateJail(dt, foot, night) {
    if (this.towerLight) this.towerLight.intensity = night > 0.4 ? 80 : 0;
    if (!this.jail) return null;
    this.jail.t -= dt;
    // keep the prisoner inside the yard
    const J = this.jailBox;
    foot.x = Math.max(J.x0 + 1, Math.min(J.x1 - 1, foot.x)); foot.z = Math.max(J.z0 + 7, Math.min(J.z1 - 1, foot.z));
    if (this.jail.t <= 0) return this.release(foot, false);
    return { t: this.jail.t, bail: this.jail.bail };
  }
  payBail(foot) {
    if (!this.jail) return false;
    if (!this.game.spend(this.jail.bail, 'Залог')) return false;
    this.release(foot, true);
    return true;
  }
  release(foot, bailed) {
    const J = this.jailBox;
    this.jail = null;
    foot.x = J.cx + 3; foot.z = J.z1 + 4; foot.h = 0;
    this.game.msg('Патрульная милиция', bailed ? 'Залог внесён. Вы свободны – больше не нарушайте!' : 'Срок закончился. Вы свободны. Ваша машина у ворот.', '👮');
    return { released: true };
  }

  // ------------------------------------------------------------------ NPC text messages
  npcMessages(dt, ctx) {
    this.npcT -= dt;
    if (this.npcT > 0) return;
    this.npcT = 90 + Math.random() * 150;
    const pool = [
      ['Апа (мама)', 'Балам, кечинде тамакка кел! Бешбармак жасадым 🍲', '❤️'],
      ['Диспетчер такси', 'Есть заказы в центре и у Ошского базара. Нажми J – выходи на линию!', '🚕'],
      ['Нурлан (друг)', 'Братан, вечером катаемся по Южной магистрали? 🏁', '😎'],
      ['MBank', 'Кэшбэк 5% на заправках до конца недели!', '🏦'],
      ['Коопсуз шаар', 'Напоминаем: на дорогах Бишкека работают камеры. Соблюдайте ПДД.', '📸'],
      ['Айгерим', 'Привет! Ты видел, на Ала-Тоо смена караула в каждый час?', '🙂'],
      ['Погода KG', ctx.night ? 'Ночью в Бишкеке прохладно, на перевалах возможен снег ❄' : 'Сегодня в Бишкеке солнечно, в горах +8°C ☀', '🌤'],
      ['Курьерская служба', 'Срочно нужны курьеры! Оплата наличными сразу. Нажми J.', '📦'],
      ['Агай (дядя)', 'Машинаны айда, бирок 150дөн ашпа! Штраф чоң 😅', '👴'],
    ];
    if (ctx.wanted) pool.push(['Нурлан (друг)', 'Тебя менты ищут?! Сворачивай во дворы!', '🚨']);
    if (!this.game.rent) pool.push(['Арендодатель Гульмира', 'Сдаю квартиры посуточно в разных районах. Открой приложение «Аренда» в телефоне.', '🏠']);
    const [from, text, icon] = pool[Math.floor(Math.random() * pool.length)];
    this.game.msg(from, text, icon);
  }
}
