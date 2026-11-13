# BskDrive · Bishkek Drive 🇰🇬

**Play now:** https://raw.githack.com/erdanthecoder/kus/claude/festive-shannon-42kaix/index.html

An open-world driving game set on the **real streets of Bishkek, Kyrgyzstan**, running in the browser (Three.js / WebGL).

Every street, building footprint, park, river, railway, bus stop and traffic light comes from **OpenStreetMap**. That covers central Bishkek and the full road to **Manas International Airport (FRU)**, including its real 4,200 m runway, taxiways, aprons, terminals and jet bridges.

## Play

Serve the folder with any static web server and open `index.html`:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

(Opening the file directly with `file://` also works in most browsers, because the data is loaded with a plain `<script>` tag.)

## Update: phone always on screen
- The phone now **peeks up from the bottom of the screen** all the time, showing the clock and an unread badge. Tap it or press **P** to open it.
- New messages make the phone **rise and buzz** with a preview of the message.
- The home screen has **MBank and Wallet balance widgets** and your latest notifications.
- Fixed: on phones the touch buttons were covering the Map/Phone/Menu buttons. Touch controls are re-arranged and no longer overlap.

## Update: fuel, cameras, live events, awards
- **Fuel** – every car has a real tank (AI‑92 or diesel). Fill up at 60 real Bishkek petrol stations taken from OpenStreetMap (Gazprom, BP, Shell, Kumtor…): stop under the canopy and press **E**. Prices are per litre and are paid from MBank.
- **Safe City cameras** – 331 speed cameras at real junctions. They flash and send a fine with a photo to your phone.
- **Lights and signals** – `,` and `.` for left/right indicators, `/` for hazards, **L** cycles the headlights (auto, on, off). Street lamps now cast warm pools of light on the road.
- **Live city events** – wedding motorcades with flags, roadworks that close a lane so traffic merges, and accident scenes with police.
- **Phone: Awards and Services** – 23 achievements worth +250 сом each, and a tow‑truck service when your car is wrecked.
- **Graphics** – ambient occlusion (GTAO) on the High/Ultra presets.
- **Touch joystick** on phones and tablets.

## Update: phone, MBank, jail, rent, real-time

- **Buttons on screen:** 🗺 Map, 📱 Phone, ☰ Menu (top right). Tapping the minimap also opens the map.
- **Phone (P):** MBank, Messages, Map, Jobs, Rent, Garage, Radio, Online, Camera (saves a photo), Settings.
- **Wallet + MBank:** cash in your pocket (taxi/courier fares, drift bonuses) plus a bank account (salary, race prizes). Fines, rent and purchases are paid by card. Withdraw cash (1% fee), deposit, **send money to online players**, see your transaction history.
- **Messages:** your mum, the taxi dispatcher, friends, the landlady, MBank notifications, "Safe City" fine notices and the police all text you. You can **chat privately with real online players**.
- **Jail:** busted with 2+ wanted stars means detention in the ИВС yard next to the Sverdlovsky district police department (walls, barbed wire, watchtower). Wait out the timer or press **B** to pay bail.
- **Rent:** daily-rent apartments from a hostel bed at Osh Bazaar up to a penthouse in Bishkek City. Your home becomes your spawn point; press E there to rest, which repairs the car and saves your progress. Rent is charged every Bishkek day. You can also rent a car until midnight.
- **Real-time sync:** the clock follows **real Bishkek time (UTC+6)**, and the live weather is the same for every player (snow only in the real winter months).
- **New sound:** an engine built from firing pulses (4-cylinder, V8 or diesel depending on the car), exhaust rumble and drive, turbo whine, blow-off and exhaust pops, gear-change dips, ignition crank, realistic tyre squeal, rain, birds by day, crickets at night, and a real-sounding horn.
- **Using your phone while driving** gets a fine too.

## Update: rules, places, Bishkek look

- **Every way of driving wrong is now punished.** A flashing warning and a police whistle come first, then a camera fine with a photo, and the police get involved if you keep going:
  - driving in the oncoming lane
  - wrong way on one-way streets
  - driving on sidewalks, through parks and on pedestrian squares (Ala-Too!)
  - endangering pedestrians
  - not yielding at zebra crossings
  - road accidents (ДТП)
  - red lights
  - speeding over 150 km/h
  - entering the runway
- **40 discoverable places**, including the **White House (Ак үй)** with marble pilasters and a roof flag, and the new presidential palace **Ынтымак Ордо** with its dome and colonnade. Also City Hall, the National Bank, Spartak Stadium, KNU, AUCA, the Botanical Garden, Ataturk Park, the Bishkek-2 railway station, the Eastern bus station, the Alamedin and Orto-Sai bazaars, Tash-Rabat, Bishkek Arena and more. The big map labels hundreds of real places and shops as you zoom in.
- **Map zoom:** +/− buttons, zoom towards the mouse, pinch-zoom and drag on phones, and minimap zoom (+/− buttons or keys).
- **Looks like Bishkek:** trolleybus overhead wires and poles on Chuy, Manas, Sovetskaya and the other avenues, real trolleybuses in traffic, roadside billboards with local ads, a blue sky with lighter clouds, and the snow-capped Ala-Too range brought closer behind the city.

## Newest

- **Nitro** (Shift) with blue exhaust flames; **drift scoring** with combo multipliers that pay coins and refill nitro.
- **Walk around** (F): get out of the car, run (Shift), jump (Space), get back in, or **steal any car** (the driver runs off and the police come after you).
- **Street races**: 4 checkpoint races on real streets (Chuy Avenue Sprint, Ala-Too Circuit, South Side Run, Manas Airport Rush) against gold and silver rival cars, with a 3-2-1 countdown, medals, prizes and best times.
- **40 golden kalpaks** hidden all over Bishkek (+250 coins each, bonus for all).
- **Car customization**: neon underglow, rims, rear spoiler, custom number plate.
- **Weather**: rain (wet, reflective roads, less grip) and Bishkek winter snow (white streets, frosty trees, slippery), or changing weather.
- **Car radio** (Q): 4 stations of generated music (pop, synthwave, Kyrgyz komuz folk, lo-fi).
- **Less lag**: automatic resolution scaling keeps the FPS smooth, the minimap is cached, shadows are cheaper, and there's an optional FPS counter.

## Latest

- **Police chases:** crash into cars, wreck them or drive too fast and the patrol police (*Патрульная милиция*) chase you with sirens and light bars, following the real roads. Lose them for an escape bonus. If they catch you, an arrest cutscene plays and you pay a fine.
- **Crash damage:** your car dents, smokes and loses power, and other cars crumple, wreck and block traffic (debris, sparks, hazard lights). Repair in the Garage.
- **Map search (M):** find any street, shop, café, pharmacy, landmark or named building in Bishkek (Latin or Cyrillic), then get a route there or teleport.
- **Whole skyline:** every building in the city stays visible far into the distance, with lit windows at night. Set the distance with *City skyline distance* in Settings.
- **How-to-play card** on first start.

## New in BskDrive

- **Online multiplayer:** every player in Bishkek sees the others live, with name tags, chat (Enter), an online leaderboard (Tab) and car-to-car collisions. Runs on Supabase Realtime.
- **Jobs that earn coins:** taxi driver; city bus or marshrutka driver on routes through real bus stops, where passengers walk to the door and board; and courier deliveries from real shops and cafés. Spend the coins on cars in the Garage.
- **Whole city:** 135,000 real buildings, real shop and cafe signboards (3,700 names from OSM) and real building colours.
- **More realistic graphics:** leafy trees, detailed facades (balconies, AC units, window frames, curtains), roof parapets, clouds, bloom, colour grading and rounded car bodies.
- **New handling:** load transfer, progressive tyre grip, ABS, traction control, stability control and counter-steer assist, with automatic or manual gears.
- **Settings:** graphics preset, resolution, view distance, shadows, bloom, anti-aliasing, field of view, traffic, pedestrians, day speed, steering sensitivity, assists, minimap, volume and player name.
- **Minimal HUD:** F1 hides it completely.

## Hosting

- **GitHub (works now):** the raw.githack link above.
- **GitHub Pages:** the `.github/workflows/pages.yml` workflow is ready. Enable it once under Settings → Pages → Source: *GitHub Actions*.
- **Firebase (`bskdrive.web.app`):** `firebase.json`, `.firebaserc` and the `.github/workflows/firebase-hosting.yml` workflow are ready. Create a Firebase project with the ID `bskdrive` and add the repository secret `FIREBASE_SERVICE_ACCOUNT`, or run `npx firebase-tools deploy` once.

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
