# Univerzine 2.0 — Quantum Big Bang Simulation

A purely visual, text-free, GPU-accelerated **Quantum Big Bang** simulation rendering **1 000 000+** particles through a custom GPGPU physics pipeline with quantum space-time fabric distortions, hyperspace dimensional warping, hyperspectral colour shifting, AR/XR camera integration, full gyroscopic interactivity, and adaptive performance across all devices.

No text. No labels. No UI chrome. Just the universe emerging from the void.

**[Launch Simulation →](https://DaScient.github.io/Univerzine2.0/)**

---

## Architecture

| Layer | Technology | Purpose |
| --- | --- | --- |
| Rendering | **Three.js r170** | Scene graph, camera, WebGL 2.0 abstraction |
| Physics | **GPUComputationRenderer** (FBO ping-pong) | Position & velocity computed entirely on the GPU |
| Shaders | **GLSL** (custom vertex + fragment) | Hyperspectral colour, quantum distortion, hyperspace warping |
| AR/XR | getUserMedia + CameraFlow pipeline | Real-time optical flow, surface detection, luminance analysis |
| Sensors | DeviceOrientation + DeviceMotion APIs | Full 3-axis gyro-camera, accelerometer shake detection |
| Audio | **Web Audio API** (procedural, non-echo) | Cosmic drone synthesis with self-analysis — no microphone |
| Haptics | Vibration API | Phase-transition and inflation haptic pulses |
| Post-Processing | UnrealBloomPass + Film Grain | Adaptive cosmic glow and cinematic texture |
| Adaptive Quality | FPS monitor + runtime LOD | Auto-downgrades DPR, bloom, grain on low-end devices |
| Time | Quantum time dilation engine | Non-uniform simulation speed with quantum fluctuations |
| Build | **Vite** | ESM dev server & production bundler |
| Deployment | **GitHub Actions → GitHub Pages** | Automated CI/CD on push to `main` |

---

## Features

### Zero-UI Design Philosophy

The simulation is entirely text-free — no titles, labels, HUD overlays, button text, or status readouts. The universe speaks through particles alone. Interactive controls are reduced to minimal translucent glass pips. The simulation auto-starts from a void after a brief 800ms emergence delay.

### Quantum Time Dilation Engine

The simulation does not run at constant speed. A **quantum time dilation** system governs the flow of simulated time:

- **Slow emergence**: simulation begins at ~12% speed, ramping to full over ~17 seconds
- **Quantum fluctuations**: sinusoidal oscillations (`sin(t×0.7) × cos(t×1.3) × sin(t×0.41)`) create non-uniform time flow, producing organic breathing rhythms in the particle dynamics
- **Per-particle space-time fabric**: each region of space experiences locally different time flow via 3-axis trig distortion, creating visible ripples in the simulation fabric

### Hyperspace Multiverse Visuals

Particles exist across overlapping dimensional manifolds, producing layered visual effects:

- **Dimensional fold displacement**: particles bend through hidden-dimension sinusoidal manifolds, creating organic trajectory warping that varies with cosmic phase
- **Hyperspace vertex warping**: 3D sinusoidal position offsets in the vertex shader give particles a sense of traversing higher-dimensional space
- **Quantum chromatic iridescence**: phase-separated RGB shimmer creates rainbow interference patterns that shift with distance, speed, and time
- **Dimensional rift glow**: deep blue/purple corona appears on particles near high-distortion zones — energy leaking between universes
- **Multiverse spectral bleed**: thin interference fringes of shifted colour appear from overlapping universe boundaries

### GPGPU Particle Engine

- **FBO particle physics**: positions and velocities stored in floating-point textures, updated frame-by-frame on the GPU — zero CPU particle math
- **Eleven-epoch cosmic timeline** cycling through 95 seconds then auto-rebirthing with fully randomized galaxy configurations
- **Quantum eccentricity**: per-particle jitter with occasional quantum tunnelling events (sudden 8× velocity spikes when noise exceeds 0.97 threshold)

### Hyperspectral Rendering

- Velocity-to-wavelength mapping across the full visible spectrum (380–780 nm) using a CIE-approximate transfer function
- **Redshift / Blueshift**: fast particles shift towards ultraviolet (390 nm); cooling particles shift towards deep infrared (740 nm)
- **CMB interference**: 3D Simplex noise modulates spectral wavelength per-particle, simulating cosmic microwave background fluctuations
- **Temperature ambient glow**: orange/warm emission scaled by thermal state (up to 10⁸ K normalised)
- **Singularity core flash**: exponential radial glow during early phases
- **Deep-infrared afterglow**: old, slow particles emit faint red-orange residual energy
- **Heat death violet shift**: remaining particles at heat death shift toward deep violet rather than total blackout

### Galaxy Formation System

Each simulation cycle spawns **6–18 procedurally generated galaxies** with randomized morphologies:

| Type | Probability | Visual Signature |
| --- | --- | --- |
| **Spiral** | 35% | Rotational tangential arms with distance-modulated winding |
| **Elliptical** | 20% | Anisotropic compression along a random axis |
| **Irregular** | 20% | Chaotic 3D Simplex noise perturbation — lumpy, organic |
| **Barred Spiral** | 25% | Central bar structure with orthogonal spiral arms (S/Z shape) |

Galaxy attractors use softened gravitational falloff with mass ranges of 2.4–8.0 units and sizes of 24–60 units. Filament formation via Fractal Brownian Motion creates a cosmic web connecting the galaxies.

### Supernova Visual System

Multi-layered explosion rendering for stellar death events:

- **White-hot core** (3× brightness) with radial falloff
- **Electric blue corona** ring at mid-radius
- **Purple-red shockwave edge** at the outer boundary
- **Pulsating intensity modulation** at 8× frequency
- **Trigger**: speed > 25 units/s AND mass > 1.0 during high supernova intensity phases

### Star Formation Electric Plasma

- High-frequency sparkle (5× time modulation) in dense regions
- Blue-white core with purple fringe electric arc effect
- Newborn star white flash that fades with particle age

### AR/XR Camera Integration

Real-time augmented reality compositing via the device camera:

- **Rear-facing camera** with progressive fallback (1080p → 720p → any available)
- **Zero-copy compositing**: video element behind transparent WebGL canvas with additive particle blending
- **64×64 GPU optical flow pipeline** (Lucas-Kanade inspired):
  - Frame-to-frame difference detection + Sobel spatial gradients
  - Surface confidence estimation (high edges + low temporal change = solid surface)
  - Output: flowXY, surface confidence, luminance per cell
- **Particle-reactive AR forces**:
  - Surface repulsion — particles bounce off detected planes
  - Flow-following — particles drift with camera motion
  - Flow vorticity — perpendicular flow creates swirling motion
  - Luminance-reactive colouring — bright scenes yield golden warmth; dark scenes deepen into cosmic blue-violet
  - Iridescent surface shimmer — holographic edge effect near detected surfaces

### Fly Mode (6-Axis Free Camera)

Full six-axis free-flight navigation through the particle field:

- **Base speed**: 25 units/s, **boost speed**: 150 units/s
- **Acceleration**: 8.0 units/s², **momentum friction**: 0.94 decay
- **Rotation inertia**: 0.92 angular friction, 0.003 rad/px sensitivity
- **Desktop**: WASD/Arrows for movement, Q/E for vertical, Space for boost
- **Mobile**: drag-to-rotate, two-finger for forward/back, double-tap for boost

### Full Gyroscopic Experience

- **3-axis gyroscope** (`DeviceOrientationEvent`): tilting shifts the gravitational axis and sways the camera with 12% lerp damping
- **Accelerometer** (`DeviceMotionEvent`): shake detection triggers expansion bursts
- **Compass heading**: Z-axis rotation from device compass for immersive orientation
- **Cross-axis force coupling**: gyro tilt maps to particle force fields with realistic directional response
- Haptic pulses fire during inflation, on epoch transitions, and during supernova events

### Non-Echo Audio Architecture

- **Procedural synthesis only**: cosmic drone (55 Hz), sub-bass (27.5 Hz), harmonic overtone (110 Hz triangle), and filtered white noise — all via Web Audio API
- **Self-analysis**: SensorHub analyses the CosmicAudio output node (not a microphone) for audio-reactive particle displacement
- **Zero echo, zero ambient noise**: fully deterministic sound-to-visual mapping
- **Phase-evolving**: drone frequency, filter cutoff, and gain all modulate across the 11 epochs
- **Dynamics compressor** (4:1 ratio, -24 dB threshold) prevents clipping

### Adaptive Performance Engine

- **Runtime quality management**: monitors FPS every 0.5s, auto-downgrades after 3 consecutive low readings
- **Three quality tiers**:

| Tier | Pixel Ratio | Bloom | Grain | Default For |
| --- | --- | --- | --- | --- |
| **High (2)** | 2× | Full | Enabled | Desktop |
| **Medium (1)** | 1.5× | Full | Enabled | Mobile |
| **Low (0)** | 1× | 0.6× strength | Disabled | Very-low-end |

- **Tiered particle counts**: 1 048 576 (desktop 1024²), 262 144 (mobile 512²), 65 536 (very-low-end 256²)
- **HalfFloat textures** on mobile GPUs — halves memory bandwidth
- **Reduced FBM octaves** (3 vs 4) in velocity shader — saves ~25% fragment ALU

### Post-Processing

- **Unreal Bloom**: strength 1.8, radius 0.8, threshold 0.03 — dynamically modulated by temperature
- **Film Grain**: animated hash-based noise at 0.06 intensity (0.08 during early phases)
- **Nebula dust cloud**: 400 volumetric particles (purple, teal, orange) with slow orbital drift

---

## Cosmic Timeline

The simulation cycles through **eleven named epochs** over 95 seconds, then auto-rebirts with a fresh randomized galaxy configuration:

| Epoch | Time | Phase | Key Dynamics |
| --- | --- | --- | --- |
| **Singularity** | 0–4s | 0 | Extreme density, quantum jitter 0.8, tight vortex swirl |
| **Cosmic Inflation** | 4–9s | 1 | Explosive expansion (30×), temperature 10¹² → 10⁹ K |
| **Quark-Gluon Plasma** | 9–14s | 2 | Cooling begins, filament formation, gravity rises |
| **Hadron Epoch** | 14–19s | 2 | Continued cooling, structure seeds nucleate |
| **Nucleosynthesis** | 19–26s | 2 | Star formation initiates (0.2 rate), expansion decelerates |
| **Recombination** | 26–34s | 3 | Structure crystallises, stellar ignition, electric plasma |
| **Stellar Ignition** | 34–44s | 3 | Galaxy attractors activate, supernovae begin (0.2 intensity) |
| **Galaxy Formation** | 44–58s | 4 | Peak structure — full star formation, 6–18 galaxies coalesce |
| **Stellar Evolution** | 58–70s | 5 | Mature galaxies, supernovae ramping (0.6 → 1.0) |
| **Supernova Era** | 70–80s | 6 | Maximum explosions, quantum jitter spikes, dramatic audio |
| **Heat Death** | 80–95s | 7 | Fade to residual violet glow, gravity collapses, rebirth at 95s |

---

## Controls

The simulation auto-starts from a void — no interaction required. All controls are optional:

| Input | Action |
| --- | --- |
| **Tilt device** | Gyroscopic camera + particle force field |
| **Shake device** | Expansion burst |
| **Mouse hover** | Particle repulsion field |
| **Scroll wheel** | Toggle repulse ↔ attract |
| **R** | Restart simulation |
| **F** | Toggle fullscreen |
| **C** | Toggle AR camera mode |
| **V** | Toggle fly mode |
| **WASD / Arrows** | Fly mode movement |
| **Q / E** | Fly mode vertical (up / down) |
| **Space** | Fly mode boost |
| ● (blue pip) | AR camera toggle (bottom-left) |
| ● (purple pip) | Fly mode toggle (bottom-left) |

---

## Project Structure

```text
Univerzine2.0/
├── index.html                        Entry point, SVG favicon, CDN importmap
├── vite.config.js                    Build config (esbuild, es2020 target)
├── package.json                      Vite + Three.js r170
├── LICENSE
├── .github/workflows/deploy.yml      CI/CD → GitHub Pages
└── src/
    ├── main.js                       Scene, GPGPU pipeline, quantum time dilation, render loop
    ├── style.css                     GPU-optimised layout, glass-pip controls
    ├── components/
    │   ├── BigBangController.js      11-epoch cosmic state machine with auto-rebirth
    │   ├── CameraAR.js              getUserMedia rear camera integration
    │   ├── CameraFlow.js            64×64 optical flow + surface detection pipeline
    │   ├── CosmicAudio.js           Procedural cosmic audio synthesis (non-echo)
    │   ├── FlyCamera.js             6-axis free-flight controller (KB + touch + gyro)
    │   ├── GrainPass.js             Film grain post-processing shader
    │   ├── MouseField.js            Pointer/touch → world-space force field
    │   └── SensorHub.js             Gyro + accelerometer + procedural audio analysis
    └── shaders/
        ├── noise.js                  Simplex 3D noise + FBM (GLSL as ES module)
        ├── gpgpu-position.js         Quantum space-time fabric + dimensional fold compute
        ├── gpgpu-velocity.js         Galaxy formation, supernovae, AR forces, quantum jitter
        ├── simulation.js             Hyperspace vertex warping + quantum displacement
        └── spectral.js               Hyperspectral colour, iridescence, rift glow, spectral bleed
```

---

## Local Development

```bash
npm install
npm run dev         # http://localhost:5173/Univerzine2.0/
```

For production build:

```bash
npm run build       # outputs to dist/
npm run preview     # preview the production build locally
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow that builds and deploys to GitHub Pages automatically.

> **First-time setup**: In the repository **Settings → Pages**, set **Source** to **GitHub Actions**.

Live URL: `https://DaScient.github.io/Univerzine2.0/`

## Browser Requirements

- **WebGL 2.0** — required (all modern browsers since 2017)
- **HTTPS** — required for camera, gyroscope, and haptic APIs
- **Recommended**: Chrome, Edge, or Safari on desktop; Chrome or Safari on mobile

## License

See [LICENSE](LICENSE).
