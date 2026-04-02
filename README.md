# Univerzine 2.0 — Quantum Big Bang Simulation

A WebGL-powered, GPU-accelerated **Quantum Big Bang** simulation rendering **1 000 000+** particles at 60 FPS through a custom GPGPU (General-Purpose GPU) physics pipeline, hyperspectral colour shifting, full gyroscopic interactivity, and adaptive performance for seamless execution on all devices.

**[Launch Simulation →](https://DaScient.github.io/Univerzine2.0/)**

---

## Architecture

| Layer | Technology | Purpose |
|---|---|---|
| Rendering | **Three.js r170** | Scene graph, camera, WebGL abstraction |
| Physics | **GPUComputationRenderer** (FBO ping-pong) | Position & velocity computed entirely on the GPU |
| Shaders | **GLSL** (custom vertex + fragment) | Hyperspectral colour mapping, simplex noise CMB interference |
| Sensors | DeviceOrientation + DeviceMotion APIs | Full 3-axis gyro-camera, accelerometer shake detection |
| Audio | **Web Audio API** (procedural, non-echo) | Cosmic drone synthesis with self-analysis — no microphone |
| Haptics | Vibration API | Phase-transition and inflation haptic pulses |
| Post-Processing | UnrealBloomPass + Film Grain | Adaptive cosmic glow and cinematic texture |
| Adaptive Quality | FPS monitor + runtime LOD | Auto-downgrades DPR, bloom, grain on low-end devices |
| Build | **Vite** | ESM dev server & production bundler (terser minification) |
| Deployment | **GitHub Actions → GitHub Pages** | Automated CI/CD on push to `main` |

## Features

### Adaptive Performance Engine
- **Runtime quality management**: monitors FPS and automatically reduces pixel ratio, bloom resolution, and film grain on low-end devices.
- **Tiered particle counts**: 1 048 576 (desktop 1024²), 262 144 (mobile 512²), 65 536 (very-low-end 256²).
- **HalfFloat textures** on mobile GPUs — halves memory bandwidth.
- **Reduced FBM octaves** (3 vs 4) in velocity shader — saves ~25% fragment ALU.
- Debounced resize, capped pixel ratio, GPU compositing CSS hints.

### GPGPU Particle Engine
- **FBO particle physics**: positions and velocities stored in floating-point textures and updated frame-by-frame on the GPU through compute shaders — zero CPU particle math.
- Seven-phase cosmic timeline: *Singularity → Inflation → Quark Epoch → Hadron Epoch → Nucleosynthesis → Recombination → Structure Formation*.

### Hyperspectral Rendering
- Velocity-to-wavelength mapping across the full visible spectrum (380–780 nm) using a CIE-approximate transfer function.
- **Redshift / Blueshift**: fast particles shift towards ultraviolet; cooling particles shift towards deep infrared.
- **CMB interference**: 3D Simplex noise modulates spectral wavelength per-particle, simulating cosmic microwave background fluctuations.
- Fractal Brownian Motion (FBM) drives large-scale filament formation.

### Full Gyroscopic Experience
- **3-axis gyroscope** (`DeviceOrientationEvent`): tilting a mobile device shifts the gravitational axis and sways the camera with smooth damping.
- **Accelerometer** (`DeviceMotionEvent`): shake detection triggers expansion bursts.
- **Compass heading**: Z-axis rotation from device compass for immersive orientation.
- **Cross-axis force coupling**: gyro tilt maps to particle force fields with realistic directional response.
- Haptic pulses fire during Inflation and on epoch transitions.

### Non-Echo Audio Architecture
- **Procedural synthesis only**: cosmic drone, sub-bass, harmonic overtones, and filtered noise — all generated via Web Audio API.
- **Self-analysis**: SensorHub analyses the CosmicAudio output node (not a microphone) for audio-reactive particle displacement.
- **Zero echo, zero ambient noise**: fully deterministic sound-to-visual mapping — flawless for presentations and demos.
- **Dynamics compressor** prevents clipping across all phases.

## Project Structure

```
/Univerzine2.0
├── index.html                          Vite entry point (PWA-ready meta tags)
├── vite.config.js                      Build config (terser, es2020 target)
├── package.json
├── .github/workflows/deploy.yml        CI/CD → GitHub Pages
└── src/
    ├── main.js                         Scene, GPGPU pipeline, adaptive quality, render loop
    ├── style.css                       GPU-optimised layout, safe areas, HUD
    ├── components/
    │   ├── BigBangController.js        Cosmic epoch state machine
    │   ├── CosmicAudio.js              Procedural audio synthesis (non-echo)
    │   ├── GrainPass.js                Film grain post-processing
    │   ├── MouseField.js               Pointer/touch → world-space force field
    │   └── SensorHub.js                Full gyro + accelerometer + procedural audio analysis
    └── shaders/
        ├── noise.js / noise.glsl       Simplex 3D noise + FBM
        ├── gpgpu-position.js / .frag   Position compute (FBO)
        ├── gpgpu-velocity.js / .frag   Velocity / force compute (FBO)
        ├── simulation.js / .vert       Particle vertex (reads GPGPU textures)
        └── spectral.js / .frag         Hyperspectral fragment shader
```

## Controls

| Input | Action |
|---|---|
| **Click / Tap** | Start simulation |
| **Tilt device** | Gyroscopic camera + particle force |
| **Shake device** | Expansion burst |
| **Mouse hover** | Particle repulsion field |
| **Scroll wheel** | Toggle repulse ↔ attract |
| **R** | Restart simulation |
| **F** | Toggle fullscreen |

## Local Development

```bash
npm install
npm run dev         # http://localhost:5173/Univerzine2.0/
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow that builds and deploys to GitHub Pages automatically.

> **First-time setup**: In the repository **Settings → Pages**, set **Source** to **GitHub Actions**.

Your live URL will be: `https://DaScient.github.io/Univerzine2.0/`

## License

See [LICENSE](LICENSE).