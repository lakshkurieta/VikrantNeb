import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";

const FOV = 26;
const TAN_HALF_FOV = Math.tan(THREE.MathUtils.degToRad(FOV / 2));
/** The bust is normalized to this height in world units. */
const HEIGHT = 2;
/** Share of the canvas the bust fills: height, and width with room to turn. */
const FILL = 0.94;
const TURN_ROOM = 1.05;
/** Resting yaw on the podcast page: turned a little toward the copy on his right (screen left).
 *  Once he has crossed to the left of the page for Writing, it mirrors (toward screen right). */
const REST_YAW = -0.26;
/** He arrives turned this much further the other way, then turns to rest. */
const ENTER_YAW = 0.95;
/** Signal blue for the rim light that follows the cursor. */
const RIM = "#3a78ee";

/**
 * The scan ends at his waist: dissolve that cut edge into the page in the canvas itself (a CSS mask
 * would make the browser composite the canvas through an extra pass every frame). Drawn last over
 * the whole canvas, it scales colour and alpha by a ramp: whole down to 66% of the height, gone by 97%.
 */
const waistFade = () => {
  const veil = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    new THREE.ShaderMaterial({
      vertexShader: "varying float vY; void main() { vY = uv.y; gl_Position = vec4(position.xy, 0.0, 1.0); }",
      fragmentShader:
        "varying float vY; void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, clamp((vY - 0.03) / 0.31, 0.0, 1.0)); }",
      blending: THREE.CustomBlending,
      blendSrc: THREE.ZeroFactor,
      blendDst: THREE.SrcAlphaFactor,
      depthTest: false,
      depthWrite: false,
    }),
  );
  veil.frustumCulled = false;
  return veil;
};

const clamp01 = (value: number) => THREE.MathUtils.clamp(value, 0, 1);
const easeOutCubic = (value: number) => 1 - (1 - clamp01(value)) ** 3;
const easeInOutCubic = (value: number) => {
  const t = clamp01(value);
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
};
/** Frame-rate independent approach to a target (k is per second). */
const damp = (from: number, to: number, k: number, dt: number) => THREE.MathUtils.damp(from, to, k, dt);

export type BustPose = {
  /** 0 → 1 as the section arrives (he turns in, in place). */
  enter: number;
  /** 0 → 1 as he crosses from the podcast (right of the page) to Writing (left): he turns from
   *  facing screen-left to facing screen-right, toward the new page. */
  side: number;
  /** Yaw added by dragging, in radians. */
  spin: number;
  /** Seconds, for the idle breathing. 0 holds him still (reduced motion). */
  time: number;
};

/**
 * Vikrant's 3D bust for the podcast stage: a single scanned mesh (no rig), so every motion is the
 * whole bust moving: turning in on arrival, turning to face the new page as he crosses to Writing,
 * a breath of idle float, a drag to spin him, and a blue rim light that follows the cursor. He never moves up or down: the page holds
 * him at one spot from the moment the section arrives (and while it arrives) to its end.
 *
 * Shares the GSAP/Lenis clock with the rest of the page; the host component only calls update()
 * while the stage is on screen.
 */
export class BustScene {
  readonly renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 50);
  private veil = waistFade();
  private fade = new THREE.Scene().add(this.veil);
  private flat = new THREE.Camera();
  private turntable = new THREE.Group();
  private model: THREE.Group | null = null;
  private rim = new THREE.DirectionalLight(RIM, 0);
  private rimTarget = new THREE.Vector2(0.6, 0.3);
  private rimNow = new THREE.Vector2(0.6, 0.3);
  private environment: THREE.WebGLRenderTarget;
  private disposed = false;

  constructor(host: HTMLElement) {
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.autoClear = false;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.domElement.setAttribute("aria-hidden", "true");
    host.appendChild(this.renderer.domElement);

    // Soft studio reflections without an HDR download, as in the book scene.
    const room = new RoomEnvironment();
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.environment = pmrem.fromScene(room, 0.04);
    this.scene.environment = this.environment.texture;
    this.scene.environmentIntensity = 0.4;
    room.dispose();
    pmrem.dispose();

    // Key from his front-left, a cool kicker opposite the blue rim, a warm hemisphere fill.
    const key = new THREE.DirectionalLight(0xfff3e6, 2.3);
    key.position.set(-3, 4, 5);
    const kicker = new THREE.DirectionalLight(0xb9c8ff, 0.9);
    kicker.position.set(-4, 2, -3);
    this.rim.intensity = 2.6;
    this.scene.add(this.turntable, key, kicker, this.rim, new THREE.HemisphereLight(0xfff7ed, 0x2a2724, 0.8));
    this.placeRim();
  }

  async load(url: string) {
    const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
    const { scene: model } = await loader.loadAsync(url);
    if (this.disposed) {
      this.release(model);
      return;
    }
    const anisotropy = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());
    model.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      const material = object.material as THREE.MeshStandardMaterial;
      // The scan's metal map reaches ~0.5 across skin and cloth; scaled down, they stay matte.
      material.metalness = 0.12;
      if (material.map) material.map.anisotropy = anisotropy;
    });

    // Normalize: centred, HEIGHT tall, turning about his vertical centre line.
    const bounds = new THREE.Box3().setFromObject(model);
    const size = bounds.getSize(new THREE.Vector3());
    const center = bounds.getCenter(new THREE.Vector3());
    const scale = HEIGHT / size.y;
    model.scale.setScalar(scale);
    model.position.copy(center).multiplyScalar(-scale);
    this.turntable.add(model);
    this.model = model;
    // Compile and upload now (one warm-up frame), so the first frame on screen doesn't stall.
    await this.renderer.compileAsync(this.scene, this.camera);
    this.draw();
  }

  resize(width: number, height: number) {
    const aspect = width / height;
    this.renderer.setSize(width, height, false);
    this.camera.aspect = aspect;
    const fitHeight = HEIGHT / 2 / (FILL * TAN_HALF_FOV);
    const fitWidth = (HEIGHT * 0.86 * TURN_ROOM) / 2 / (FILL * TAN_HALF_FOV * aspect);
    const distance = Math.max(fitHeight, fitWidth);
    // A touch above eye level, looking slightly down at him.
    this.camera.position.set(0, 0.18, distance);
    this.camera.lookAt(0, 0.02, 0);
    this.camera.updateProjectionMatrix();
  }

  /** Where the rim light should swing to: the cursor, in -1..1 across the stage. */
  aimLight(x: number, y: number) {
    this.rimTarget.set(THREE.MathUtils.clamp(x, -1, 1), THREE.MathUtils.clamp(y, -1, 1));
  }

  update(dt: number, pose: BustPose) {
    if (!this.model) return;
    const enter = easeOutCubic(pose.enter);
    const breath = pose.time ? Math.sin(pose.time * 1.1) : 0;
    const sway = pose.time ? Math.sin(pose.time * 0.45) : 0;

    const facing = REST_YAW * (1 - 2 * easeInOutCubic(pose.side));
    this.turntable.rotation.y = facing + (1 - enter) * ENTER_YAW + pose.spin + sway * 0.035;
    this.turntable.rotation.x = 0.02 * breath;
    this.turntable.position.y = 0.014 * breath;

    this.rimNow.set(damp(this.rimNow.x, this.rimTarget.x, 4, dt), damp(this.rimNow.y, this.rimTarget.y, 4, dt));
    this.placeRim();
    this.draw();
  }

  dispose() {
    this.disposed = true;
    if (this.model) this.release(this.model);
    this.veil.geometry.dispose();
    this.veil.material.dispose();
    this.environment.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }

  private draw() {
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);
    this.renderer.render(this.fade, this.flat);
  }

  /** Behind him, swinging side to side and up and down with the cursor. */
  private placeRim() {
    this.rim.position.set(this.rimNow.x * 4.5, 1.2 - this.rimNow.y * 2.4, -3.5);
  }

  private release(model: THREE.Object3D) {
    const textures = new Set<THREE.Texture>();
    model.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      object.geometry.dispose();
      const material = object.material as THREE.MeshStandardMaterial;
      for (const texture of [material.map, material.normalMap, material.roughnessMap, material.metalnessMap]) {
        if (texture) textures.add(texture);
      }
      material.dispose();
    });
    textures.forEach((texture) => texture.dispose());
  }
}
