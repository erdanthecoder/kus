# Bishkek Drive 🇰🇬

An open-world driving game set on the **real streets of Bishkek, Kyrgyzstan**, running in the browser (Three.js / WebGL).

Every street, building footprint, park, river, railway, bus stop and traffic light comes from **OpenStreetMap**. That covers central Bishkek and the full road to **Manas International Airport (FRU)**, including its real 4,200 m runway, taxiways, aprons, terminals and jet bridges.

## Play

Serve the folder with any static web server and open `index.html`:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

(Opening the file directly with `file://` also works in most browsers, because the data is loaded with a plain `<script>` tag.)

## Features

- **Real city**: 8,000 street segments with real names (Chuy Avenue, Manas, Jibek Jolu, Akhunbaev, Kievskaya…) and 66,000 buildings from OSM, with Soviet panel blocks, glass offices, private houses with pitched roofs and marble public buildings. Windows light up at night.
- **Landmarks**: Ala-Too Square (the 45 m flagpole with a waving Kyrgyz flag, the Aikol Manas statue and the honour guard), Victory Square with its yurt-shaped arches and eternal flame, the Central Mosque with dome and four minarets, the Philharmonic Manas monument, the Panfilov Park Ferris wheel, fountains, the MiG-21 monument, Osh Bazaar, TSUM, Dordoi Plaza, Asia Mall, Bishkek Park, Vefa and more. Discover 16 landmarks.
- **Environment**: the snow-capped Kyrgyz Ala-Too range on the southern horizon, a physical sky with sun and stars, a full day/night cycle, street lamps, tree-lined avenues (poplars, elms, oaks) and aryk canals.
- **Traffic & jams**: AI cars, white marshrutka minibuses that stop at the real bus stops, buses, trucks and taxis. Car-following uses the Intelligent Driver Model, and **327 real signalised junctions** each run their own light cycle. In rush hour (7:30–10:00 and 17:00–20:00) Chuy, Manas, Jibek Jolu, Akhunbaev and other avenues jam up. Drivers honk if you block them.
- **People**: pedestrians walk the sidewalks, cross at the real zebra crossings (cars stop for them), wait at bus stops and crowd Ala-Too Square, Osh Bazaar and the airport (with luggage). Some older men wear the white ak-kalpak. Everyone dodges your car.
- **Rules & fines** ("Safe City" cameras, with a photo of the violation):
  - Speeding: the limit is **150 km/h**. 151–170 km/h costs 3,000 сом, 171–200 costs 5,000 сом, over 200 costs 7,500 сом.
  - Running a red light: 1,000 сом
  - Wrong way on a one-way street: 1,500 сом
  - Entering the active runway at Manas: 10,000 сом (and incoming planes will **go around**!)
- **Interactive Manas Airport**: airliners land, taxi to the real stands, push back and take off on runway 07/25. There are runway, centreline, approach "rabbit" and PAPI lights, a control tower with rotating radar, service vehicles and a flight information board. At the terminal you can:
  - take a **scenic flight over Bishkek** with cinematic cameras (chase, window seat, cockpit, spotter)
  - **watch a landing** from the runway fence
  - pick up an **airport taxi** passenger
- **Taxi jobs** between real places, with A* GPS routing on the real road graph.
- **Cars**: sedan, SUV, sport coupe, hatchback, old Soviet-style classic and the marshrutka. Physics uses a tyre/bicycle model with drifting (handbrake), skid marks, tyre smoke, body roll, a gearbox and synthesised engine sound.

## Controls

| Key | Action |
|---|---|
| W / S | accelerate / brake & reverse |
| A / D | steer |
| Space | handbrake |
| H | horn |
| C | camera |
| Right mouse drag | look around |
| M | city map (click = GPS route, Shift+click = teleport) |
| J | taxi job |
| E | interact (airport) |
| R | reset car to road |
| [ / ] | time of day |
| K | mute |
| Esc | pause, settings, garage, landmarks, fines |

Gamepads and touch screens are supported.

## Development

```bash
npm install
npm run build      # bundles src/ -> dist/game.js
```

`tools/` holds the scripts that download OSM data from the OSM API (`fetch.py`), merge the tiles (`merge.py`) and convert them into the compact `data/bishkek-data.js` (`convert.py`).

Map data © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors, licensed under the ODbL.
