// Place search for the city map: landmarks, every named street, shops / cafés / pharmacies,
// named buildings and points of interest from OpenStreetMap. Works in Latin or Cyrillic
// (both are transliterated to one form before matching).
import { PLACES } from './game.js';

const CYR = { а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z', и: 'i', й: 'i', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'h', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'sh', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya', ө: 'o', ү: 'u', ң: 'n', і: 'i' };
export function norm(s) {
  s = String(s || '').toLowerCase();
  let o = '';
  for (const ch of s) o += CYR[ch] ?? ch;
  return o.replace(/kh/g, 'h').replace(/[jy]/g, 'i').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
}

const KIND_LABEL = {
  cafe: 'Café', restaurant: 'Restaurant', fast_food: 'Fast food', pharmacy: 'Pharmacy', bank: 'Bank', supermarket: 'Supermarket', convenience: 'Shop',
  fuel: 'Petrol station', hotel: 'Hotel', clothes: 'Clothes', bar: 'Bar', mall: 'Mall', museum: 'Museum', theatre: 'Theatre', university: 'University',
  hospital: 'Hospital', cinema: 'Cinema', park: 'Park', stadium: 'Stadium', place_of_worship: 'Place of worship', marketplace: 'Bazaar', square: 'Square',
  terminal: 'Airport', department_store: 'Department store', attraction: 'Attraction', memorial: 'Memorial', monument: 'Monument', bakery: 'Bakery', mobile_phone: 'Phones',
};
const ICON = { Landmark: '⭐', Street: '🛣', Café: '☕', Restaurant: '🍽', 'Fast food': '🌯', Pharmacy: '💊', Bank: '🏦', Supermarket: '🛒', Shop: '🏪', 'Petrol station': '⛽', Hotel: '🏨', Mall: '🛍', Museum: '🏛', Park: '🌳', Bazaar: '🧺', Airport: '✈', University: '🎓', Hospital: '🏥', Building: '🏢' };

export class PlaceSearch {
  constructor(map) {
    this.items = [];
    const seen = new Set();
    const add = (name, alt, kind, x, z, w) => {
      if (!name || x === undefined) return;
      const key = norm(name) + '|' + Math.round(x / 150) + ',' + Math.round(z / 150);
      if (seen.has(key)) return; seen.add(key);
      this.items.push({ name, alt: alt && alt !== name ? alt : '', kind, x, z, w, n: norm(name) + ' ' + norm(alt) });
    };
    for (const p of PLACES) add(p.name, p.local, 'Landmark', p.x, p.z, 5);
    // streets: one entry per name at the middle of its longest piece
    const best = new Map();
    for (const e of map.edges) {
      if (e.name < 0 || e.cls > 5) continue;
      const b = best.get(e.name); if (!b || e.len > b.len) best.set(e.name, e);
    }
    for (const [id, e] of best) {
      const [loc, en] = map.names[id];
      const m = Math.floor(e.pts.length / 4) * 2;
      add(en || loc, en ? loc : '', 'Street', e.pts[m], e.pts[m + 1], 4 - e.cls * 0.3);
    }
    for (const p of map.pois) add(p.en || p.name, p.en ? p.name : '', KIND_LABEL[p.kind] || 'Place', p.x, p.z, 3);
    for (const c of map.chunks.values()) for (const s of c.signs) add(s.name, '', KIND_LABEL[s.kind] || 'Shop', s.x, s.z, 1);
    for (const B of map.buildings) if (B.name) add(B.name, '', 'Building', B.cx, B.cz, 1.5);
  }

  find(q, limit = 12, near) {
    const nq = norm(q);
    if (!nq) return [];
    const words = nq.split(' ');
    const out = [];
    for (const it of this.items) {
      let score = 0;
      if (it.n.startsWith(nq)) score = 10;
      else if (it.n.includes(' ' + nq)) score = 7;
      else if (words.every(w => it.n.includes(w))) score = 4;
      else continue;
      score += it.w;
      if (near) score -= Math.min(3, Math.hypot(it.x - near.x, it.z - near.z) / 4000);
      out.push([score, it]);
    }
    out.sort((a, b) => b[0] - a[0]);
    return out.slice(0, limit).map(o => o[1]);
  }

  icon(kind) { return ICON[kind] || '📍'; }
}
