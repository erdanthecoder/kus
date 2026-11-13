// In-game smartphone: MBank (wallet + bank, transfers), Messages (NPCs + real players),
// Map, Jobs, Rent (apartments & car rental), Garage, Radio, Online players, Camera, Settings.
import { fmt } from './game.js';
import { APARTMENTS } from './life.js';
import { STATIONS } from './radio.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const APPS = [
  ['map', '🗺', 'Map', '#2f7de1'], ['mbank', '🏦', 'MBank', '#11a37f'], ['msg', '💬', 'Messages', '#25c26a'], ['jobs', '💼', 'Jobs', '#f2a516'],
  ['rent', '🏠', 'Rent', '#e85d3a'], ['garage', '🚗', 'Garage', '#6a5acd'], ['radio', '📻', 'Radio', '#d63384'], ['online', '👥', 'Online', '#0aa2c0'],
  ['camera', '📷', 'Camera', '#555'], ['settings', '⚙', 'Settings', '#6c757d'],
];

export class Phone {
  constructor(ctx) {
    this.c = ctx; // { game, net, life, radio, hud, audio, openMap, openTab, rentCar, setCar, carPrice, photo, onClose }
    this.open = false; this.app = null; this.thread = null;
    this._home();
    $('phHome').onclick = () => this.show(null);
  }
  get unread() { return this.c.game.messages.filter(m => !m.read).length; }

  toggle(app) { this.open ? this.close() : this.show(app || null); }
  show(app) {
    this.open = true; $('phone').classList.add('on'); this.c.audio.blip(980, 0.03, 0.04);
    this.app = app; this.thread = null; this.render();
  }
  close() { this.open = false; $('phone').classList.remove('on'); this.c.onClose && this.c.onClose(); }

  tick() {
    $('phTime').textContent = this.c.hud.clockText();
    const n = this.unread;
    const b = $('phBadge'); if (b) { b.textContent = n; b.style.display = n ? 'flex' : 'none'; }
    const ab = document.querySelector('.ph-app[data-a="msg"] .bdg'); if (ab) { ab.textContent = n; ab.style.display = n ? 'flex' : 'none'; }
  }

  _home() {
    $('phBody').innerHTML = '';
  }

  render() {
    const body = $('phBody');
    const G = this.c.game;
    if (!this.app) {
      body.innerHTML = `<div class="ph-clock">${this.c.hud.clockText()}</div><div class="ph-date">Бишкек · ${new Date().toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' })}</div>
        <div class="ph-grid">${APPS.map(([id, ic, nm, col]) => `<button class="ph-app" data-a="${id}"><span style="background:${col}">${ic}</span><small>${nm}</small>${id === 'msg' ? '<i class="bdg"></i>' : ''}</button>`).join('')}</div>`;
      body.querySelectorAll('.ph-app').forEach(b => b.onclick = () => this.openApp(b.dataset.a));
      this.tick();
      return;
    }
    const head = (t) => `<div class="ph-head"><button class="ph-back">‹</button><b>${t}</b></div>`;
    if (this.app === 'mbank') {
      const tx = G.tx.slice(-25).reverse();
      body.innerHTML = head('MBank') + `<div class="mb-card"><small>Счёт MBank · KGS</small><div class="mb-bal ${G.bank < 0 ? 'neg' : ''}">${fmt(G.bank)} сом</div><small>Наличные в кошельке: <b>${fmt(G.money)} сом</b></small></div>
        <div class="mb-row"><button data-w="500">Снять 500</button><button data-w="2000">Снять 2 000</button><button data-d="1">Внести всё</button></div>
        <div class="ph-sec">Перевод игроку онлайн</div>
        <div class="mb-tr"><select id="mbTo">${this.c.net.list().map(p => `<option value="${p.id}">${esc(p.name)}</option>`).join('') || '<option value="">— никого онлайн —</option>'}</select><input id="mbAmt" type="number" min="1" placeholder="сом"><button id="mbSend">→</button></div>
        <div class="ph-sec">История</div><div class="mb-tx">${tx.map(t => `<div><span>${esc(t.l)}</span><b class="${t.a < 0 ? 'neg' : 'pos'}">${t.a > 0 ? '+' : ''}${fmt(t.a)}</b></div>`).join('') || '<p class="ph-muted">Нет операций</p>'}</div>`;
      body.querySelectorAll('[data-w]').forEach(b => b.onclick = () => {
        const a = +b.dataset.w, fee = Math.ceil(a * 0.01);
        if (G.bank < a + fee) return this.c.hud.toast('Недостаточно средств', 1.2);
        G.bank -= a + fee; G.money += a; G.tx.push({ t: Date.now(), a: -(a + fee), l: 'Снятие наличных (комиссия 1%)' }); this.c.audio.cash(); this.render();
      });
      body.querySelector('[data-d]').onclick = () => { if (G.money <= 0) return; G.tx.push({ t: Date.now(), a: G.money, l: 'Пополнение наличными' }); G.bank += G.money; G.money = 0; this.c.audio.cash(); this.render(); };
      $('mbSend').onclick = () => {
        const to = $('mbTo').value, amt = Math.round(+$('mbAmt').value);
        if (!to || !(amt > 0)) return;
        if (G.bank < amt) return this.c.hud.toast('Недостаточно средств', 1.2);
        const p = this.c.net.list().find(q => q.id === to);
        G.bank -= amt; G.tx.push({ t: Date.now(), a: -amt, l: 'Перевод: ' + (p ? p.name : 'игроку') });
        this.c.net.sendMoney(to, amt); this.c.audio.cash();
        this.c.hud.toast(`✅ ${fmt(amt)} сом отправлено ${p ? esc(p.name) : ''}`, 2);
        this.render();
      };
    } else if (this.app === 'msg') {
      if (this.thread) {
        const msgs = G.messages.filter(m => m.from === this.thread);
        msgs.forEach(m => m.read = true);
        const peer = this.c.net.list().find(p => p.name === this.thread.replace(/^👤 /, ''));
        body.innerHTML = head(esc(this.thread)) + `<div class="ms-list">${msgs.map(m => `<div class="ms-b ${m.mine ? 'me' : ''}">${esc(m.text)}<small>${m.clock}</small></div>`).join('')}</div>` +
          (peer ? `<div class="mb-tr"><input id="msTxt" placeholder="Сообщение…" maxlength="200"><button id="msSend">→</button></div>` : '');
        const list = body.querySelector('.ms-list'); list.scrollTop = list.scrollHeight;
        if (peer) {
          const send = () => { const v = $('msTxt').value.trim(); if (!v) return; this.c.net.dm(peer.id, v); G.messages.push({ from: this.thread, text: v, icon: '👤', t: Date.now(), clock: this.c.hud.clockText(), read: true, mine: true }); this.render(); };
          $('msSend').onclick = send; $('msTxt').onkeydown = (e) => { e.stopPropagation(); if (e.key === 'Enter') send(); };
          setTimeout(() => $('msTxt') && $('msTxt').focus(), 50);
        }
        this.tick();
      } else {
        const threads = new Map();
        for (const m of G.messages) threads.set(m.from, m);
        const arr = [...threads.values()].sort((a, b) => b.t - a.t);
        body.innerHTML = head('Messages') + `<div class="ms-th">${arr.map(m => { const un = G.messages.filter(q => q.from === m.from && !q.read).length; return `<button data-f="${esc(m.from)}"><span class="av">${m.icon || '💬'}</span><span><b>${esc(m.from)}</b><small>${esc(m.text).slice(0, 60)}</small></span>${un ? `<i>${un}</i>` : ''}</button>`; }).join('') || '<p class="ph-muted">Нет сообщений</p>'}</div>
          <div class="ph-sec">Написать игроку онлайн</div><div class="ms-on">${this.c.net.list().map(p => `<button data-p="${esc(p.name)}">👤 ${esc(p.name)}</button>`).join('') || '<p class="ph-muted">Сейчас никого нет онлайн. Поделитесь ссылкой на игру с друзьями!</p>'}</div>`;
        body.querySelectorAll('[data-f]').forEach(b => b.onclick = () => { this.thread = b.dataset.f; this.render(); });
        body.querySelectorAll('[data-p]').forEach(b => b.onclick = () => { this.thread = '👤 ' + b.dataset.p; this.render(); });
      }
    } else if (this.app === 'rent') {
      const cur = G.rent;
      const cars = [['hatch', 'City Hatch', 350], ['suv', 'Land SUV', 900], ['coupe', 'Sport Coupe', 2200], ['van', 'Marshrutka', 600]];
      body.innerHTML = head('Аренда · Rent') + `<div class="ph-sec">Квартиры посуточно</div>` + APARTMENTS.map(A => `<div class="rt ${cur === A.id ? 'on' : ''}"><b>${A.name}</b><small>${A.desc}</small><div><span>${fmt(A.price)} сом / сутки</span>${cur === A.id ? '<button data-go="1">Домой</button><button data-cancel="1">Съехать</button>' : `<button data-r="${A.id}">Снять</button>`}</div></div>`).join('') +
        `<div class="ph-sec">Прокат авто (до полуночи)</div>` + cars.map(([t, n, p]) => `<div class="rt"><b>${n}</b><div><span>${fmt(p)} сом / день</span><button data-car="${t}" data-pr="${p}">Взять</button></div></div>`).join('') +
        `<p class="ph-muted">Свой дом: место появления, сон (E у дома), безопасная парковка. Оплата каждый день с MBank.</p>`;
      body.querySelectorAll('[data-r]').forEach(b => b.onclick = () => { if (this.c.life.rentApartment(b.dataset.r)) { this.c.audio.cash(); this.render(); } else this.c.hud.toast('Недостаточно средств', 1.2); });
      const cancel = body.querySelector('[data-cancel]'); if (cancel) cancel.onclick = () => { this.c.life.cancelRent(); this.render(); };
      const go = body.querySelector('[data-go]'); if (go) go.onclick = () => { this.c.goHome(); this.close(); };
      body.querySelectorAll('[data-car]').forEach(b => b.onclick = () => { if (this.c.life.rentCar(b.dataset.car, +b.dataset.pr, this.c.setCar)) { this.c.audio.cash(); this.close(); } else this.c.hud.toast('Недостаточно средств', 1.2); });
    } else if (this.app === 'radio') {
      const R = this.c.radio;
      body.innerHTML = head('Radio') + `<div class="rd">${['Выкл', ...STATIONS.map(s => s.name)].map((n, i) => `<button class="${R.idx === i - 1 ? 'on' : ''}" data-s="${i - 1}">${i ? '📻 ' : '⏹ '}${n}${i ? `<small>${STATIONS[i - 1].genre}</small>` : ''}</button>`).join('')}</div>`;
      body.querySelectorAll('[data-s]').forEach(b => b.onclick = () => { const want = +b.dataset.s; let guard = 8; while (R.idx !== want && guard--) R.next(); $('radioLbl').textContent = R.on ? '📻 ' + R.station.name : ''; this.render(); });
    } else if (this.app === 'online') {
      const list = this.c.net.list();
      body.innerHTML = head('Online') + `<p class="ph-muted">${this.c.net.status === 'online' ? `🟢 Подключено · водителей в Бишкеке: ${list.length + 1}` : this.c.net.enabled ? '🟡 Подключение…' : '⚪ Мультиплеер выключен (Настройки)'}</p>` +
        `<div class="ms-th">${list.map(p => `<button data-p="${esc(p.name)}"><span class="av">🚗</span><span><b>${esc(p.name)}</b><small>${fmt(p.money)} сом · ${p.job || p.car}</small></span></button>`).join('') || '<p class="ph-muted">Вы пока один. Отправьте ссылку на игру друзьям – и катайтесь вместе по Бишкеку!</p>'}</div>`;
      body.querySelectorAll('[data-p]').forEach(b => b.onclick = () => { this.app = 'msg'; this.thread = '👤 ' + b.dataset.p; this.render(); });
    }
    const back = body.querySelector('.ph-back'); if (back) back.onclick = () => { if (this.thread) { this.thread = null; this.render(); } else { this.app = null; this.render(); } };
  }

  openApp(a) {
    if (a === 'map') { this.close(); this.c.openMap(); return; }
    if (a === 'jobs') { this.close(); this.c.openTab('pJobs'); return; }
    if (a === 'garage') { this.close(); this.c.openTab('pGarage'); return; }
    if (a === 'settings') { this.close(); this.c.openTab('pSettings'); return; }
    if (a === 'camera') { this.close(); this.c.photo(); return; }
    this.app = a; this.thread = null; this.render();
  }
}
