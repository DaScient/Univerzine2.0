# Univerzine 2.0 — Quantum Big Bang Simulation

A WebGL-powered, GPU-accelerated **Quantum Big Bang** simulation rendering **1 000 000+** particles at 60 FPS through a custom GPGPU (General-Purpose GPU) physics pipeline, hyperspectral colour shifting, and responsive environmental feedback.

**[Launch Simulation →](https://DaScient.github.io/Univerzine2.0/)**

---

## Architecture

| Layer | Technology | Purpose |
|---|---|---|
| Rendering | **Three.js r170** | Scene graph, camera, WebGL abstraction |
| Physics | **GPUComputationRenderer** (FBO ping-pong) | Position & velocity computed entirely on the GPU |
| Shaders | **GLSL** (custom vertex + fragment) | Hyperspectral colour mapping, simplex noise CMB interference |
| Sensors | DeviceOrientation API, Web Audio API, Vibration API | Gyro-camera, audio-to-displacement, haptic echo |
| Post-Processing | UnrealBloomPass | Cosmic glow |
| Build | **Vite** | ESM dev server & production bundler |
| Deployment | **GitHub Actions → GitHub Pages** | Automated CI/CD on push to `main` |

## Features

### GPGPU Particle Engine
- **FBO particle physics**: positions and velocities stored in floating-point textures and updated frame-by-frame on the GPU through compute shaders — zero CPU particle math.
- **1 048 576 particles** on desktop (1024² texture); 262 144 on mobile (512²).
- Six-phase cosmic timeline: *Singularity → Inflation → Quark Epoch → Hadron Epoch → Nucleosynthesis → Recombination → Structure Formation*.

### Hyperspectral Rendering
- Velocity-to-wavelength mapping across the full visible spectrum (380–780 nm) using a CIE-approximate transfer function.
- **Redshift / Blueshift**: fast particles shift towards ultraviolet; cooling particles shift towards deep infrared.
- **CMB interference**: 3D Simplex noise modulates spectral wavelength per-particle, simulating cosmic microwave background fluctuations.
- Fractal Brownian Motion (FBM) drives large-scale filament formation.

### Intelligence Layer
- **Gyro-sensitivity** (`DeviceOrientationEvent`): tilting a mobile device shifts the gravitational axis and sways the camera.
- **Audio echo** (`Web Audio API`): ambient microphone input drives particle vibration via frequency-to-displacement mapping.
- **Haptic echo** (`Vibration API`): short haptic pulses fire during the Inflation phase on supported devices.

## Project Structure

```
/Univerzine2.0
├── index.html                          Vite entry point
├── vite.config.js                      Build config (base path for GH Pages)
├── package.json
├── .github/workflows/deploy.yml        CI/CD → GitHub Pages
└── src/
    ├── main.js                         Scene, GPGPU pipeline, render loop
    ├── style.css                       Fullscreen layout, HUD, overlay
    ├── components/
    │   ├── BigBangController.js        Cosmic epoch state machine
    │   └── SensorHub.js               Gyro, audio, haptic integration
    └── shaders/
        ├── noise.glsl                  Simplex 3D noise + FBM
        ├── gpgpu-position.frag         Position compute (FBO)
        ├── gpgpu-velocity.frag         Velocity / force compute (FBO)
        ├── simulation.vert             Particle vertex (reads GPGPU textures)
        └── spectral.frag              Hyperspectral fragment shader
```

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