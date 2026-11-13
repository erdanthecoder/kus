// Achievements – checked once per second, saved locally, shown in the phone.
export const ACH = [
  ['first_km', '🛣', 'First kilometre', 'Drive 1 km in Bishkek', s => s.km >= 1],
  ['km50', '🗺', 'Road warrior', 'Drive 50 km', s => s.km >= 50],
  ['taxi5', '🚕', 'Taxi pro', 'Complete 5 jobs', s => s.jobs >= 5],
  ['jobs25', '💼', 'Hard worker', 'Complete 25 jobs', s => s.jobs >= 25],
  ['rich', '💰', 'Rich man', 'Have 50 000 сом in total', s => s.total >= 50000],
  ['debt', '😬', 'In debt', 'Let your MBank account go negative', s => s.bank < 0],
  ['speed', '⚡', 'Speed demon', 'Reach 200 km/h', s => s.vmax >= 200],
  ['drift', '🌀', 'Drift king', 'Score a 5 000-point drift', s => s.drift >= 5000],
  ['escape', '😎', 'Ghost', 'Escape from a police chase', s => s.escapes >= 1],
  ['busted', '🚔', 'Busted!', 'Get caught by the police', s => s.busted >= 1],
  ['jail', '🔒', 'Behind bars', 'Spend time in the ИВС', s => s.jailed >= 1],
  ['wreck', '💥', 'Demolition', 'Wreck 5 cars', s => s.wrecks >= 5],
  ['kalpak', '🎩', 'Treasure hunter', 'Find 10 golden kalpaks', s => s.kalpaks >= 10],
  ['places', '📍', 'Bishkek explorer', 'Discover 20 landmarks', s => s.places >= 20],
  ['race', '🏁', 'Street racer', 'Win a gold medal', s => s.gold >= 1],
  ['rent', '🏠', 'Moved in', 'Rent an apartment', s => !!s.rent],
  ['airport', '✈', 'Frequent flyer', 'Take the scenic flight', s => s.flights >= 1],
  ['fuel', '⛽', 'Fill her up', 'Refuel at a petrol station', s => s.refuels >= 1],
  ['wedding', '💍', 'Той!', 'Drive next to a wedding motorcade', s => s.wedding >= 1],
  ['night', '🌙', 'Night owl', 'Drive at night in real Bishkek time', s => s.nightKm >= 2],
  ['snow', '❄', 'Winter driver', 'Drive in the snow', s => s.snowKm >= 1],
  ['walker', '🚶', 'Pedestrian', 'Walk 500 m on foot', s => s.walk >= 500],
  ['thief', '🦹', 'Grand theft auto', 'Steal a car', s => s.thefts >= 1],
];

export class Achievements {
  constructor(game, hud, audio) {
    this.game = game; this.hud = hud; this.audio = audio;
    try { this.got = new Set(JSON.parse(localStorage.getItem('bd_ach') || '[]')); this.stats = JSON.parse(localStorage.getItem('bd_stats') || '{}'); } catch (e) { this.got = new Set(); this.stats = {}; }
    this.t = 0;
  }
  add(k, v = 1) { this.stats[k] = (this.stats[k] || 0) + v; }
  max(k, v) { this.stats[k] = Math.max(this.stats[k] || 0, v); }
  update(dt, extra) {
    this.t += dt; if (this.t < 1) return; this.t = 0;
    const s = Object.assign({}, this.stats, extra);
    for (const [id, ic, name, desc, test] of ACH) {
      if (this.got.has(id) || !test(s)) continue;
      this.got.add(id);
      this.game.credit(250, 'Достижение: ' + name, true);
      this.audio.chime();
      this.hud.toast(`🏆 Achievement: <b>${ic} ${name}</b> – ${desc} · +250 сом`, 4);
    }
    try { localStorage.setItem('bd_ach', JSON.stringify([...this.got])); localStorage.setItem('bd_stats', JSON.stringify(this.stats)); } catch (e) { /* ignore */ }
  }
}
