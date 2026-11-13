// Game rules: traffic fines (150 km/h limit, red lights, wrong way, runway incursion),
// taxi missions between real Bishkek places, landmark discovery, GPS routing.
import * as THREE from 'three';
import { pointInPoly, CHUNK, ck } from './data.js';

export const SPEED_LIMIT = 150; // km/h – go faster and you get fined

export const PLACES = [
  { id: 'alatoo', name: 'Ala-Too Square', local: 'Ала-Тоо аянты', x: 30, z: 30, fact: 'The main square of Bishkek. The 45 m flagpole and the Aikol Manas statue stand in front of the State Historical Museum. The honour guard changes here every hour.' },
  { id: 'museum', name: 'National Historical Museum', local: 'Улуттук тарыхый музей', match: /National Historical Museum/, fact: 'Opened in 1984 as the Lenin Museum, renovated in 2016 – the marble cube on the north side of Ala-Too Square.' },
  { id: 'victory', name: 'Victory Square', local: 'Жеңиш аянты', x: 1032, z: -300, fact: 'Built in 1985 for the 40th anniversary of the Victory. Three red granite arches form the frame of a yurt above the eternal flame.' },
  { id: 'philharmonic', name: 'Philharmonic Hall', local: 'Филармония', match: /Philharmonic Hall/, fact: 'The Toktogul Satylganov National Philharmonic, with the monument to the heroes of the Manas epic in front of it on Chuy Avenue.' },
  { id: 'osh', name: 'Osh Bazaar', local: 'Ош базары', x: -2760, z: 300, fact: 'The biggest bazaar in central Bishkek – dried fruit, spices, kurut, fresh nan and everything else. Expect heavy traffic around it.' },
  { id: 'tsum', name: 'TSUM Aichurok', local: 'ЦУМ «Айчүрөк»', match: /TSUM Aichurok/, fact: 'The Central Department Store on Chuy Avenue, a Bishkek landmark since 1964.' },
  { id: 'dordoi', name: 'Dordoi Plaza', local: 'Дордой Плаза', match: /Dordoi Plaza/, fact: 'A shopping centre right next to Victory Square, on the corner of Ibraimov and Chuy.' },
  { id: 'asia', name: 'Asia Mall', local: 'Asia Mall', match: /^Asia Mall$/, fact: 'One of the largest malls in Bishkek, in the south of the city on Chyngyz Aytmatov Avenue.' },
  { id: 'bpark', name: 'Bishkek Park', local: 'Бишкек Парк', match: /^Bishkek Park$/, fact: 'A modern mall on Kievskaya / Turusbekov streets with a cinema and food court.' },
  { id: 'panfilov', name: 'Panfilov Park', local: 'Панфилов сейилбагы', match: /Panfilov Park/, fact: 'The city amusement park behind the White House, with a Ferris wheel and rides.' },
  { id: 'oak', name: 'Oak Park', local: 'Дубовый парк', x: 300, z: -170, fact: 'Bishkek\'s oldest park, planted in 1890. It is full of century-old oaks and an open-air sculpture gallery.' },
  { id: 'mosque', name: 'Central Mosque', local: 'Борбордук мечит', match: /Central Mosque/, fact: 'The Imam Sarakhsi Central Mosque opened in 2023. It holds up to 20,000 worshippers and has four 64 m minarets.' },
  { id: 'opera', name: 'Opera & Ballet Theatre', local: 'Опера жана балет театры', match: /Opera and Ballet/, fact: 'The Abdylas Maldybaev National Opera and Ballet Theatre, a neoclassical building from 1955.' },
  { id: 'vefa', name: 'Vefa Center', local: 'Вефа', match: /Vefa Center/, fact: 'A popular mall on the corner of Gorky and Sovetskaya streets in the south of the city.' },
  { id: 'erkindik', name: 'Erkindik Boulevard', local: 'Эркиндик бульвары', x: 230, z: 320, fact: '"Freedom" boulevard: a long pedestrian alley lined with huge oak and elm trees, running south from the centre.' },
  { id: 'whitehouse', name: 'White House (Ак үй)', local: 'Ак үй · Жогорку Кеңеш', x: -277, z: -40, fact: 'The 7-storey white marble "Ak Uy" on Chuy Avenue, built in 1985. Today it houses the Jogorku Kenesh, Kyrgyzstan\'s parliament.' },
  { id: 'ordo', name: 'Yntymak Ordo (new White House)', local: 'Ынтымак Ордо', x: -1751, z: 7480, fact: 'The new presidential palace in the south of Bishkek, opened in 2022. The Presidential Administration moved here from the old White House.' },
  { id: 'cityhall', name: 'Bishkek City Hall', local: 'Бишкек шаардык мэриясы', x: -1389, z: 60, fact: 'The mayor\'s office of Bishkek, on Chuy Avenue next to the National Bank.' },
  { id: 'natbank', name: 'National Bank', local: 'Улуттук банк', x: -1436, z: 30, fact: 'Head office of the National Bank of the Kyrgyz Republic, which issues the som.' },
  { id: 'gorky', name: 'Gorky Park', local: 'Горький сквери', x: -887, z: -237, fact: 'A shady square park next to the Philharmonic and the Kojomkul Sports Palace.' },
  { id: 'kojomkul', name: 'Kojomkul Sports Palace', local: 'Кожомкул атындагы спорт сарайы', x: -726, z: -211, fact: 'Named after the legendary strongman Kojomkul. Wrestling, boxing and concerts.' },
  { id: 'spartak', name: 'Spartak Stadium', local: 'Спартак стадиону', x: -588, z: -470, fact: 'The national stadium (also called Dolen Omurzakov Stadium) where Kyrgyzstan\'s football team plays.' },
  { id: 'caravan', name: 'Caravan Mall', local: 'Караван', x: -798, z: 199, fact: 'A shopping centre on Kievskaya street, near the Sheraton.' },
  { id: 'sheraton', name: 'Sheraton Bishkek', local: 'Шератон', x: -1057, z: 171, fact: 'A 23-floor hotel – one of the tallest buildings in central Bishkek.' },
  { id: 'hyatt', name: 'Hyatt Regency', local: 'Хаятт Ридженси', x: 759, z: -362, fact: 'The classic business hotel next to the Opera and Ballet Theatre and Oak Park.' },
  { id: 'knu', name: 'Kyrgyz National University', local: 'КНУ им. Ж. Баласагына', x: -1495, z: -555, fact: 'The country\'s oldest university, founded in 1925 and named after the poet Jusup Balasagyn.' },
  { id: 'auca', name: 'American University of Central Asia', local: 'АУЦА', x: 1918, z: 7200, fact: 'AUCA\'s modern campus in the south of Bishkek, opened in 2015.' },
  { id: 'botanic', name: 'Botanical Garden', local: 'Ботаникалык бак', x: -1051, z: 1915, fact: 'The E. Z. Gareev Botanical Garden, with thousands of plant species and quiet alleys.' },
  { id: 'ataturk', name: 'Ataturk Park', local: 'Ататүрк сейил багы', x: -782, z: 4370, fact: 'A large park in the south with a lake, fountains and a monument to Atatürk.' },
  { id: 'station', name: 'Bishkek-2 Railway Station', local: 'Бишкек-2 вокзалы', x: 190, z: 1290, fact: 'The main railway station. Trains leave for Balykchy (Issyk-Kul) and Moscow.' },
  { id: 'eastbus', name: 'Eastern Bus Station', local: 'Чыгыш автовокзалы', x: 2131, z: -1213, fact: 'Marshrutkas and buses to the east: Issyk-Kul, Kant and Tokmok.' },
  { id: 'alamedin', name: 'Alamedin Bazaar', local: 'Аламүдүн базары', x: 2784, z: -1202, fact: 'A busy market in the east of the city – fruit, vegetables and everything for the home.' },
  { id: 'ortosai', name: 'Orto-Sai Bazaar', local: 'Орто-Сай базары', x: 1095, z: 4501, fact: 'The southern bazaar on the Ala-Archa road, famous for fresh produce.' },
  { id: 'tashrabat', name: 'Tash-Rabat Mall', local: 'Таш-Рабат', x: 1350, z: 2140, fact: 'A popular mall on Gorky street, named after the 15th-century stone caravanserai.' },
  { id: 'arena', name: 'Bishkek Arena', local: 'Бишкек Арена', x: -6465, z: 5340, fact: 'A large arena in the west of the city, built for concerts and sports.' },
  { id: 'nomad', name: 'Nomad Arena Ice Rink', local: 'Номад Арена', x: 5046, z: 1978, fact: 'The city ice rink in the east of Bishkek.' },
  { id: 'conservatory', name: 'National Conservatory', local: 'Улуттук консерватория', x: 773, z: 3392, fact: 'The Kyrgyz National Conservatory, where komuz players and opera singers train.' },
  { id: 'post', name: 'Main Post Office', local: 'Башкы почтамт', x: 710, z: 171, fact: 'The central post office on the corner of Chuy Avenue and Sovetskaya street.' },
  { id: 'bcity', name: 'Bishkek City Center', local: 'Бишкек Сити', x: 1019, z: -577, fact: 'A business district with new glass towers north-east of the centre.' },
  { id: 'airport', name: 'Manas International Airport', local: 'Манас эл аралык аэропорту', airport: true, fact: 'Bishkek\'s airport (FRU), about 25 km north-west of the centre. Its single 4,200 m runway is one of the longest in Central Asia.' },
];

export class Game {
  constructor(map, hud, audio) {
    this.map = map; this.hud = hud; this.audio = audio;
    this.money = 3000;
    this.fines = [];
    this.speedState = { armed: true, over: 0, lastFine: -100, maxSpeed: 0 };
    this.redCooldown = 0;
    this.wrongWay = 0; this.wrongCooldown = 0;
    this.runwayT = 0; this.runwayCooldown = 0;
    this.time = 0;
    this.mission = null;
    this.visited = new Set();
    this.route = null;
    this.routeTarget = null;
    this.routeMesh = null;
    this._resolvePlaces();
    this._load();
  }

  _resolvePlaces() {
    for (const p of PLACES) {
      if (p.match) {
        const poi = this.map.pois.find(o => p.match.test(o.en) || p.match.test(o.name));
        if (poi) { p.x = poi.x; p.z = poi.z; }
      }
      if (p.x === undefined && !p.airport) { p.x = 0; p.z = 0; }
    }
  }

  setAirport(ap) {
    const p = PLACES.find(q => q.airport);
    p.x = ap.dropoff.x; p.z = ap.dropoff.y;
  }

  _load() {
    try {
      const s = JSON.parse(localStorage.getItem('bishkekDrive') || 'null');
      if (s) { this.money = s.money ?? this.money; this.visited = new Set(s.visited || []); this.fines = s.fines || []; this.savedCar = s.car; this.savedColor = s.color; this.owned = s.owned; this.jobsDone = s.jobs || 0; this.custom = s.custom; this.upgrades = s.upgrades; }
    } catch (e) { /* storage unavailable */ }
  }
  save(car) {
    try { localStorage.setItem('bishkekDrive', JSON.stringify({ money: this.money, visited: [...this.visited], fines: this.fines.slice(-30), car: this.homeCar || car?.type, color: this.homeColor ?? car?.color, owned: [...(this.owned || ['sedan'])], jobs: this.jobsDone || 0, custom: this.custom, upgrades: this.upgrades })); } catch (e) { /* ignore */ }
  }

  issueFine(kind, amount, detail, photo, heat = 0) {
    this.money -= amount;
    const f = { kind, amount, detail, time: this.hud.clockText(), photo, heat };
    this.fines.push(f);
    this.audio.fine();
    this.hud.showFine(f);
    this.onFine && this.onFine(f);
  }

  // --------------------------------------------------------------- rules
  checkRules(dt, car, info, signalsNear, airport, requestPhoto) {
    this.time += dt;
    const kmh = car.speed * 3.6;
    // ---- speeding: more than 150 km/h
    const S = this.speedState;
    if (kmh > SPEED_LIMIT) {
      S.over += dt; S.maxSpeed = Math.max(S.maxSpeed, kmh);
      if (S.armed && S.over > 0.6) {
        S.armed = false; S.lastFine = this.time;
        const v = Math.round(S.maxSpeed);
        const amount = v > 200 ? 750 : v > 170 ? 500 : 300;
        const where = info.street ? ` on ${info.street}` : '';
        requestPhoto((photo) => this.issueFine('Speeding', amount, `${v} km/h in a 150 km/h zone${where}`, photo));
      }
      // keep speeding for 12 s more -> another camera catches you
      if (!S.armed && this.time - S.lastFine > 12) { S.armed = true; S.maxSpeed = 0; S.over = 0; }
    } else {
      if (kmh < SPEED_LIMIT - 5) { S.armed = true; S.over = 0; S.maxSpeed = 0; }
    }
    // ---- red lights
    this.redCooldown -= dt;
    if (this.redCooldown <= 0 && kmh > 12 && info.road) {
      const r = info.road;
      for (const sg of r.e.signals) {
        // determine travel direction on edge
        const fx = Math.sin(car.h), fz = Math.cos(car.h);
        const dot = fx * r.dx + fz * r.dz;
        const dir = dot >= 0 ? 0 : 1;
        if (sg.dir !== dir || Math.abs(dot) < 0.7) continue;
        const s = dir ? r.e.len - r.s : r.s;
        const prev = car._sOnEdge && car._sOnEdge.e === r.e ? car._sOnEdge.s : null;
        if (prev !== null && prev < sg.stop && s >= sg.stop) {
          const lat = dir ? -r.lat : r.lat;
          if ((r.e.ow || lat > -0.5) && this.map.signalState(sg.cluster, sg.group, this.trafficTime) === 'R') {
            this.redCooldown = 8;
            requestPhoto((photo) => this.issueFine('Red light', 100, `Ran a red light${info.street ? ' on ' + info.street : ''}`, photo));
          }
        }
      }
      const fx = Math.sin(car.h), fz = Math.cos(car.h);
      const dir = fx * r.dx + fz * r.dz >= 0 ? 0 : 1;
      car._sOnEdge = { e: r.e, s: dir ? r.e.len - r.s : r.s };
    }
    // ---- wrong way on a one-way street
    this.wrongCooldown -= dt;
    if (info.road && info.road.e.ow && info.road.dist < info.road.e.w / 2 && kmh > 15) {
      const dot = Math.sin(car.h) * info.road.dx + Math.cos(car.h) * info.road.dz;
      if (dot < -0.75) { this.wrongWay += dt; } else this.wrongWay = 0;
      if (this.wrongWay > 2.5 && this.wrongCooldown <= 0) {
        this.wrongCooldown = 20; this.wrongWay = 0;
        requestPhoto((photo) => this.issueFine('Wrong way', 150, `Driving against traffic on one-way ${info.street || 'street'}`, photo));
      }
      info.wrongWay = dot < -0.75;
    } else { this.wrongWay = 0; info.wrongWay = false; }
    // ---- runway incursion at Manas
    this.runwayCooldown -= dt;
    if (airport && airport.runwayIncursion(car.x, car.z)) {
      this.runwayT += dt;
      info.runway = true;
      if (this.runwayT > 4 && this.runwayCooldown <= 0) {
        this.runwayCooldown = 30;
        requestPhoto((photo) => this.issueFine('Runway incursion', 1000, 'Entered the active runway at Manas International Airport', photo));
      }
    } else { this.runwayT = 0; info.runway = false; }
    this._moreRules(dt, car, info, kmh, requestPhoto);
  }

  // Every other way people drive wrong in Bishkek: live warning first, then a camera fine,
  // and serious or repeated violations bring the patrol police.
  _moreRules(dt, car, info, kmh, requestPhoto) {
    const T = this.time;
    this.cool = this.cool || {}; this.tm = this.tm || {};
    const tm = this.tm;
    const street = info.street || 'the street';
    const fine = (key, kind, amount, detail, heat) => {
      if ((this.cool[key] || 0) > T) return;
      this.cool[key] = T + 10;
      requestPhoto((photo) => this.issueFine(kind, amount, detail, photo, heat));
    };
    const timer = (key, on) => { tm[key] = on ? (tm[key] || 0) + dt : 0; return tm[key]; };
    let warn = '';
    const fx = Math.sin(car.h), fz = Math.cos(car.h);
    const r = info.road;
    // 1) oncoming lane on a two-way road (overtaking for a moment is tolerated)
    let onc = false;
    if (r && !r.e.ow && kmh > 12 && r.e.w >= 6 && r.e.cls <= 4 && r.dist < r.e.w / 2 + 0.5) {
      const dot = fx * r.dx + fz * r.dz;
      const latT = dot >= 0 ? r.lat : -r.lat; // + = right of our travel direction
      onc = Math.abs(dot) > 0.7 && latT < -0.9;
    }
    const tO = timer('onc', onc);
    if (tO > 0.6) warn = 'ONCOMING LANE – KEEP RIGHT';
    if (tO > 2.5) { tm.onc = 0; fine('onc', 'Oncoming lane', 120, `Drove in the oncoming lane on ${street}`, 0.5); }
    // 2) sidewalks, parks, pedestrian squares (checked 5x per second)
    this._zoneT = (this._zoneT || 0) - dt;
    if (this._zoneT <= 0) {
      this._zoneT = 0.2;
      let zone = '';
      if (kmh > 6 && !info.runway) {
        const nr = this.map.nearestRoad(car.x, car.z, 14);
        const onRoad = nr && nr.dist < nr.e.w / 2 + 0.4;
        if (!onRoad) {
          const gx = Math.floor(car.x / CHUNK), gz = Math.floor(car.z / CHUNK);
          for (let ox = -1; ox <= 1 && zone !== 'square'; ox++) for (let oz = -1; oz <= 1; oz++) {
            const c = this.map.chunks.get(ck(gx + ox, gz + oz)); if (!c) continue;
            for (const A of c.areas) {
              if (car.x < A.x0 || car.x > A.x1 || car.z < A.z0 || car.z > A.z1) continue;
              if (![0, 1, 4, 5, 11].includes(A.type) || !pointInPoly(car.x, car.z, A.pts)) continue;
              if (A.type === 11) { zone = 'square'; break; }
              zone = 'park';
            }
          }
          if (!zone && nr && nr.e.cls >= 1 && nr.e.cls <= 4 && nr.e.w >= 5 && nr.dist < nr.e.w / 2 + 3.6) zone = 'sidewalk';
        }
      }
      this._zone = zone;
    }
    const tS = timer('sidewalk', this._zone === 'sidewalk'), tP = timer('park', this._zone === 'park'), tQ = timer('square', this._zone === 'square');
    if (tS > 0.3) warn = 'GET OFF THE SIDEWALK!';
    if (tP > 0.3) warn = 'NO DRIVING IN THE PARK!';
    if (tQ > 0.3) warn = 'PEDESTRIAN ZONE – NO CARS!';
    if (tS > 1.5) { tm.sidewalk = 0; fine('sidewalk', 'Driving on the sidewalk', 150, `Drove on the sidewalk of ${street}`, 0.6); }
    if (tP > 1.5) { tm.park = 0; fine('park', 'Driving through a park', 250, 'Drove through a park / lawn', 0.8); }
    if (tQ > 1.2) { tm.square = 0; fine('square', 'Pedestrian zone', 400, 'Drove into a pedestrian square', 1.2); }
    // 3) endangering pedestrians
    if (this.peds && kmh > 22) {
      for (const p of this.peds.list) {
        if (p.fixed) continue;
        const dx = p.x - car.x, dz = p.z - car.z;
        if (dx * dx + dz * dz < 6.5) { warn = 'WATCH OUT – PEDESTRIAN!'; fine('ped', 'Endangering a pedestrian', 300, `Nearly hit a pedestrian at ${Math.round(kmh)} km/h`, 1.0); break; }
      }
    }
    // 4) not yielding at a zebra crossing while someone is crossing
    if (this.peds && kmh > 8 && this.peds.crossers.length) {
      for (const p of this.peds.crossers) {
        const d = Math.hypot(p.x - car.x, p.z - car.z);
        if (d < 7) { warn = 'STOP – PEOPLE ON THE ZEBRA!'; if (d < 4.5) fine('zebra', 'Did not yield at zebra', 150, 'Did not give way to pedestrians at a zebra crossing', 0.4); break; }
      }
    }
    // 5) about to run a red light
    if (r && kmh > 15 && !warn) {
      const dot = fx * r.dx + fz * r.dz, dir = dot >= 0 ? 0 : 1;
      const s = dir ? r.e.len - r.s : r.s;
      for (const sg of r.e.signals) {
        if (sg.dir !== dir) continue;
        const d = sg.stop - s;
        if (d > 0 && d < 30 && this.map.signalState(sg.cluster, sg.group, this.trafficTime) === 'R') { warn = 'RED LIGHT – STOP!'; break; }
      }
    }
    if (kmh > 150 && !warn) warn = 'SPEEDING – SLOW DOWN';
    if (warn && !this._lastWarn) this.onWarn && this.onWarn(warn);
    this._lastWarn = warn;
    info.warn = warn;
  }

  // collisions with other cars = road traffic accident (ДТП)
  accident(v, requestPhoto) {
    this.cool = this.cool || {};
    if ((this.cool.dtp || 0) > this.time) return;
    this.cool.dtp = this.time + 4;
    const amount = v > 12 ? 400 : v > 7 ? 250 : 120;
    requestPhoto((photo) => this.issueFine('Road accident (ДТП)', amount, `Crashed into another car at ${Math.round(v * 3.6)} km/h`, photo, v > 7 ? 1 : 0.4));
  }

  // --------------------------------------------------------------- landmarks
  checkLandmarks(car) {
    for (const p of PLACES) {
      if (this.visited.has(p.id) || p.x === undefined) continue;
      if (Math.hypot(car.x - p.x, car.z - p.z) < (p.airport ? 120 : 70)) {
        this.visited.add(p.id);
        this.money += 500;
        this.audio.chime();
        this.hud.showDiscovery(p, this.visited.size, PLACES.length);
      }
    }
  }

  // --------------------------------------------------------------- taxi missions
  startTaxi(car, peds) {
    // pick a pick-up spot on a sidewalk 150..600 m away
    for (let k = 0; k < 40; k++) {
      const a = Math.random() * Math.PI * 2, d = 150 + Math.random() * 450;
      const x = car.x + Math.cos(a) * d, z = car.z + Math.sin(a) * d;
      const r = this.map.nearestRoad(x, z, 80, e => e.cls >= 1 && e.cls <= 4);
      if (!r) continue;
      const side = r.lat >= 0 ? 1 : -1;
      const off = r.e.w / 2 + 1.2;
      const px = r.x - r.dz * off * side, pz = r.z + r.dx * off * side;
      if (this.map.insideBuilding(px, pz, 0.5)) continue;
      const dests = PLACES.filter(p => Math.hypot(p.x - px, p.z - pz) > 700 && (!p.airport || Math.random() < 0.5));
      const dest = dests[Math.floor(Math.random() * dests.length)];
      const names = ['Aibek', 'Nurlan', 'Aigerim', 'Bakyt', 'Cholpon', 'Azamat', 'Elnura', 'Timur', 'Gulnara', 'Ermek', 'Aizada', 'Kanat', 'Meerim', 'Daniyar'];
      this.mission = { stage: 'pickup', x: px, z: pz, dest, passenger: names[Math.floor(Math.random() * names.length)], t: 0, start: null };
      this.setRoute(px, pz, 'Pick up ' + this.mission.passenger);
      if (peds) {
        const p = { mode: 'plaza', zone: { x: px, z: pz, r: 0.1, active: true, count: 0 }, x: px, z: pz, h: 0, tx: px, tz: pz, idle: 1e9, ex: 0, ez: 0, dodge: 0, wave: true };
        p.shirt = 0xf2c200; p.pants = 0x22283a; p.skin = 0xd8b090; p.hairC = 0x1a1410; p.scale = 1; p.speed = 1.2; p.phase = 0; p.fixed = true;
        peds.list.push(p); this.mission.ped = p;
      }
      this.audio.chime();
      return this.mission;
    }
    return null;
  }

  updateMission(dt, car, peds) {
    const M = this.mission; if (!M) return;
    M.t += dt;
    const d = Math.hypot(car.x - M.x, car.z - M.z);
    if (M.stage === 'pickup') {
      if (M.ped) { M.ped.h = Math.atan2(car.x - M.ped.x, car.z - M.ped.z); M.ped.zone.active = true; M.ped.moving = false; }
      if (d < 9 && car.speed < 1.5) {
        M.stage = 'ride'; M.start = { x: car.x, z: car.z, t: M.t };
        if (M.ped && peds) { const i = peds.list.indexOf(M.ped); if (i >= 0) peds.list.splice(i, 1); }
        M.x = M.dest.x; M.z = M.dest.z;
        const dist = Math.hypot(M.x - car.x, M.z - car.z);
        M.fare = Math.round((120 + dist / 1000 * 38 * 1.35) / 10) * 10 + (M.dest.airport ? 600 : 0);
        M.par = dist / 1000 * 110 + 40; // seconds
        this.setRoute(M.x, M.z, M.dest.name);
        this.audio.chime();
        this.hud.toast(`${M.passenger}: "Salam! ${M.dest.name}, please."`, 4);
      }
    } else if (M.stage === 'ride') {
      if (d < 22 && car.speed < 2) {
        const time = M.t - M.start.t;
        const bonus = time < M.par ? Math.round((M.par - time) * 4 / 10) * 10 : 0;
        const total = M.fare + bonus;
        this.money += total;
        this.audio.cash();
        this.hud.toast(`Fare paid: ${fmt(M.fare)} coins. Rahmat!`, 5);
        this.mission = null;
        this.clearRoute();
      }
    }
  }

  cancelMission(peds) {
    if (this.mission?.ped && peds) { const i = peds.list.indexOf(this.mission.ped); if (i >= 0) peds.list.splice(i, 1); }
    this.mission = null; this.clearRoute();
  }

  // --------------------------------------------------------------- GPS
  setRoute(x, z, label) { this.routeTarget = { x, z, label }; this._routeDirty = true; }
  clearRoute() { this.routeTarget = null; this.route = null; this._routeDirty = true; }

  updateRoute(car, scene) {
    if (!this.routeTarget) {
      if (this.routeMesh) { scene.remove(this.routeMesh); this.routeMesh.geometry.dispose(); this.routeMesh = null; }
      return;
    }
    this._routeT = (this._routeT || 0) - 1;
    // recompute when dirty or the player has strayed from the route
    let off = 0;
    if (this.route && this.route.length >= 4) {
      let best = 1e9;
      for (let i = 0; i < this.route.length - 2; i += 2) {
        const ax = this.route[i], az = this.route[i + 1], bx = this.route[i + 2], bz = this.route[i + 3];
        const vx = bx - ax, vz = bz - az, l2 = vx * vx + vz * vz || 1;
        let t = ((car.x - ax) * vx + (car.z - az) * vz) / l2; t = Math.max(0, Math.min(1, t));
        best = Math.min(best, Math.hypot(car.x - ax - vx * t, car.z - az - vz * t));
      }
      off = best;
    }
    if (this._routeDirty || (off > 40 && this._routeT <= 0)) {
      this._routeDirty = false; this._routeT = 60;
      this.route = this.map.route(car.x, car.z, this.routeTarget.x, this.routeTarget.z) || [car.x, car.z, this.routeTarget.x, this.routeTarget.z];
      this._buildRouteMesh(scene);
    }
  }

  _buildRouteMesh(scene) {
    if (this.routeMesh) { scene.remove(this.routeMesh); this.routeMesh.geometry.dispose(); }
    const p = this.route; const pos = [], uv = [], idx = [];
    let d = 0;
    for (let i = 0; i < p.length / 2; i++) {
      if (i > 0) d += Math.hypot(p[i * 2] - p[i * 2 - 2], p[i * 2 + 1] - p[i * 2 - 1]);
      const j0 = Math.max(0, i - 1), j1 = Math.min(p.length / 2 - 1, i + 1);
      let dx = p[j1 * 2] - p[j0 * 2], dz = p[j1 * 2 + 1] - p[j0 * 2 + 1]; const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
      const w = 1.1;
      pos.push(p[i * 2] - dz * w, 0.22, p[i * 2 + 1] + dx * w, p[i * 2] + dz * w, 0.22, p[i * 2 + 1] - dx * w);
      uv.push(d, 0, d, 1);
      if (i > 0) { const b = i * 2; idx.push(b - 2, b, b - 1, b - 1, b, b + 1); }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    if (!this.routeMat) {
      this.routeMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 } },
        vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
        fragmentShader: `uniform float uTime; varying vec2 vUv;
          void main(){ float c = abs(vUv.y-0.5)*2.0; float chev = fract(vUv.x/6.0 - uTime*0.8 - c*0.25);
            float a = smoothstep(0.0,0.15,chev)*smoothstep(0.55,0.4,chev);
            gl_FragColor = vec4(vec3(0.25,0.8,1.0)*1.6, (0.25 + 0.6*a)*(1.0-c*c)); }`,
        transparent: true, depthWrite: false, side: THREE.DoubleSide,
      });
    }
    this.routeMesh = new THREE.Mesh(g, this.routeMat);
    this.routeMesh.frustumCulled = false;
    scene.add(this.routeMesh);
  }
}

export function fmt(n) { return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }
