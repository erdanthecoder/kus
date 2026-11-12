// Sky, sun, Kyrgyz Ala-Too mountain range on the southern horizon, day/night cycle.
import * as THREE from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { mulberry } from './data.js';

export class Environment {
  constructor(renderer, scene) {
    this.renderer = renderer; this.scene = scene;
    this.bg = new THREE.Scene();
    this.bgCam = new THREE.PerspectiveCamera(60, 1, 50, 200000);
    // physical sky
    this.sky = new Sky(); this.sky.scale.setScalar(150000);
    const u = this.sky.material.uniforms;
    u.turbidity.value = 2.6; u.rayleigh.value = 2.2; u.mieCoefficient.value = 0.004; u.mieDirectionalG.value = 0.85;
    this.bg.add(this.sky);
    this._stars();
    this._mountains();
    this.sunDir = new THREE.Vector3();
    // lights
    this.sun = new THREE.DirectionalLight(0xffffff, 3);
    this.sun.castShadow = true;
    const S = this.sun.shadow;
    S.mapSize.set(2048, 2048);
    S.camera.left = -110; S.camera.right = 110; S.camera.top = 110; S.camera.bottom = -110;
    S.camera.near = 10; S.camera.far = 900; S.bias = -0.0005; S.normalBias = 0.35;
    S.camera.updateProjectionMatrix();
    scene.add(this.sun, this.sun.target);
    this.hemi = new THREE.HemisphereLight(0xbfd8ff, 0x6a6048, 1.0);
    scene.add(this.hemi);
    scene.fog = new THREE.Fog(0xc8d6e0, 300, 2600);
    this.pmrem = new THREE.PMREMGenerator(renderer);
    this.envScene = new THREE.Scene();
    this.envSky = new Sky(); this.envSky.scale.setScalar(1000);
    this.envScene.add(this.envSky);
    this.lastEnvHour = -10;
    this.hour = 10;
    this.night = 0;
  }

  _stars() {
    const r = mulberry(5), n = 2500, p = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const th = r() * Math.PI * 2, ph = Math.acos(r() * 0.95);
      p[i * 3] = Math.sin(ph) * Math.cos(th) * 100000; p[i * 3 + 1] = Math.cos(ph) * 100000; p[i * 3 + 2] = Math.sin(ph) * Math.sin(th) * 100000;
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(p, 3));
    this.starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false });
    this.stars = new THREE.Points(g, this.starMat);
    this.bg.add(this.stars);
  }

  // The Kyrgyz Ala-Too range rises ~25 km south of central Bishkek, peaks ~4800 m (city ~800 m).
  _mountains() {
    const r = mulberry(99);
    const W = 260, D = 70;
    const g = new THREE.PlaneGeometry(220000, 52000, W, D).rotateX(-Math.PI / 2);
    const p = g.attributes.position;
    const noise = (x, z) => {
      let s = 0, a = 1, f = 1 / 9000;
      for (let o = 0; o < 6; o++) {
        s += a * (Math.sin(x * f + o * 1.7) * Math.cos(z * f * 1.3 - o) + Math.sin((x + z) * f * 0.7 + o * 3.1) * 0.6);
        a *= 0.5; f *= 2.1;
      }
      return s;
    };
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), zl = p.getZ(i);
      const z = zl + 26000 + 26000; // world z from 26 km to 78 km
      const dz = z - 26000;
      // foothills start ~16 km south of the centre
      const rise = Math.min(1, Math.max(0, (dz + 6000) / 14000));
      const ridge = Math.exp(-((dz - 16000) ** 2) / (2 * 9000 ** 2));
      let h = rise * rise * 900 + ridge * 3400 * (0.75 + 0.35 * noise(x, z)) + Math.abs(noise(x * 1.7, z * 1.7)) * 600 * rise;
      h *= Math.min(1, Math.max(0.15, 1 - Math.abs(x) / 120000));
      p.setXYZ(i, x, Math.max(-40, h - 120), z);
    }
    g.computeVertexNormals();
    // northern Kazakh hills: low and far
    const g2 = new THREE.PlaneGeometry(220000, 30000, 160, 20).rotateX(-Math.PI / 2);
    const p2 = g2.attributes.position;
    for (let i = 0; i < p2.count; i++) {
      const x = p2.getX(i), z = p2.getZ(i) - 70000;
      const h = Math.max(0, (Math.abs(z + 70000 - 15000) < 15000 ? 1 : 0) * (300 + 500 * Math.abs(noise(x * 0.6, z * 0.6))) * Math.min(1, (-(z + 55000)) / 12000));
      p2.setXYZ(i, x, h - 80, z);
    }
    g2.computeVertexNormals();
    this.mtnMat = new THREE.ShaderMaterial({
      uniforms: { sunDir: { value: new THREE.Vector3(0, 1, 0) }, fogCol: { value: new THREE.Color(0xc8d6e0) }, light: { value: 1 }, camPos: { value: new THREE.Vector3() } },
      vertexShader: `varying vec3 vN; varying vec3 vW;
        void main(){ vN = normal; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,
      fragmentShader: `uniform vec3 sunDir; uniform vec3 fogCol; uniform float light; uniform vec3 camPos; varying vec3 vN; varying vec3 vW;
        float h(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453); }
        void main(){
          vec3 n = normalize(vN);
          float slope = 1.0 - n.y;
          float snowLine = 2600.0 + 500.0*sin(vW.x*0.0006) + 200.0*h(floor(vW.xz/300.0));
          float snow = smoothstep(snowLine-250.0, snowLine+150.0, vW.y + slope*-900.0);
          vec3 rock = mix(vec3(0.42,0.38,0.33), vec3(0.32,0.30,0.29), smoothstep(0.2,0.6,slope));
          vec3 grass = vec3(0.45,0.47,0.30);
          vec3 c = mix(grass, rock, smoothstep(700.0, 1800.0, vW.y));
          c = mix(c, vec3(0.95,0.97,1.0), snow);
          float d = max(0.0, dot(n, normalize(sunDir)));
          vec3 col = c * (0.35 + 0.9*d) * light;
          float dist = length(vW.xz - camPos.xz);
          float haze = 1.0 - exp(-dist/75000.0);
          col = mix(col, fogCol, clamp(haze*0.85, 0.0, 0.8));
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
      fog: false,
    });
    this.mountains = new THREE.Mesh(g, this.mtnMat);
    this.hills = new THREE.Mesh(g2, this.mtnMat);
    // far plain of the Chui valley (fills the horizon between the city and the mountains)
    const plain = new THREE.Mesh(new THREE.PlaneGeometry(400000, 400000, 1, 1).rotateX(-Math.PI / 2), this.mtnMat);
    plain.position.y = -6;
    this.plain = plain;
    this.bg.add(this.mountains, this.hills, plain);
  }

  setHour(h) { this.hour = ((h % 24) + 24) % 24; }

  update(camera, focus) {
    const h = this.hour;
    // sun path for Bishkek latitude (~43°N): rise ~6, set ~19
    const t = (h - 6.2) / 12.6;
    const elev = Math.sin(t * Math.PI) * 62 * Math.PI / 180 - (t < 0 || t > 1 ? 0.25 : 0);
    const az = Math.PI * Math.max(-0.2, Math.min(1.2, t)); // east (+x) -> south (+z) -> west (-x)
    const el = Math.max(-0.5, elev);
    this.sunDir.set(Math.cos(el) * Math.cos(az), Math.sin(el), Math.cos(el) * Math.sin(az) * 0.8 + 0.25).normalize();
    const u = this.sky.material.uniforms;
    u.sunPosition.value.copy(this.sunDir);
    this.envSky.material.uniforms.sunPosition.value.copy(this.sunDir);
    const day = THREE.MathUtils.smoothstep(this.sunDir.y, -0.08, 0.18);
    const golden = Math.exp(-((this.sunDir.y - 0.06) ** 2) / 0.006);
    this.night = 1 - THREE.MathUtils.smoothstep(this.sunDir.y, -0.12, 0.05);
    this.sun.intensity = 3.2 * day;
    this.sun.color.setRGB(1, 0.92 - golden * 0.25, 0.82 - golden * 0.45);
    if (day < 0.15) { // moonlight
      this.sun.intensity = 0.55 * (1 - day / 0.15) + 3.2 * day;
      this.sun.color.setRGB(0.62, 0.72, 1.0);
    }
    this.hemi.intensity = 0.25 + 0.9 * day;
    this.hemi.color.setRGB(0.55 + 0.2 * day, 0.62 + 0.22 * day, 0.85 + 0.1 * day).multiplyScalar(0.5 + 0.5 * day);
    if (this.night > 0.5) { this.hemi.color.setRGB(0.42, 0.5, 0.75); this.hemi.intensity = 0.6; }
    this.hemi.groundColor.setRGB(0.42 * (0.3 + day), 0.38 * (0.3 + day), 0.3 * (0.3 + day));
    const fog = new THREE.Color().setRGB(0.6, 0.71, 0.84).lerp(new THREE.Color(0.92, 0.66, 0.45), golden * 0.55).multiplyScalar(0.08 + 0.92 * day);
    if (this.night > 0.5) fog.setRGB(0.05, 0.065, 0.1);
    this.scene.fog.color.copy(fog);
    this.mtnMat.uniforms.fogCol.value.copy(fog);
    this.mtnMat.uniforms.sunDir.value.copy(this.sunDir);
    this.mtnMat.uniforms.light.value = 0.12 + 0.95 * day;
    this.mtnMat.uniforms.camPos.value.copy(camera.position);
    this.starMat.opacity = this.night;
    // shadow camera follows focus point
    const sd = this.sunDir.y > 0.05 ? this.sunDir : new THREE.Vector3(-0.4, 0.8, 0.3).normalize();
    this.sun.position.set(focus.x + sd.x * 400, sd.y * 400, focus.z + sd.z * 400);
    this.sun.target.position.set(focus.x, 0, focus.z);
    this.sun.shadow.camera.updateMatrixWorld();
    // background camera mirrors main camera
    this.bgCam.position.copy(camera.position);
    this.bgCam.quaternion.copy(camera.quaternion);
    this.bgCam.fov = camera.fov; this.bgCam.aspect = camera.aspect; this.bgCam.updateProjectionMatrix();
    this.mountains.position.set(0, 0, 0);
    this.plain.position.x = camera.position.x; this.plain.position.z = camera.position.z;
    this.sky.position.copy(camera.position);
    this.stars.position.copy(camera.position);
    // refresh reflections occasionally
    if (Math.abs(h - this.lastEnvHour) > 0.2) {
      this.lastEnvHour = h;
      if (this.envRT) this.envRT.dispose();
      this.envRT = this.pmrem.fromScene(this.envScene, 0, 1, 2000);
      this.scene.environment = this.envRT.texture;
      this.scene.environmentIntensity = 0.15 + 0.85 * day;
    }
    return { day, night: this.night };
  }

  render(renderer) {
    renderer.render(this.bg, this.bgCam);
  }
}
