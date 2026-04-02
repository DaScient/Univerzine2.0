// Particle Fragment Shader — Hyperspectral colour mapping.
// Enhanced with quantum chromatic iridescence, hyperspace dimensional
// rift coloring, and multiverse spectral interference.
import noise from './noise.js';

export default noise + /* glsl */`

varying float vSpeed;
varying float vAge;
varying float vDistFromCenter;
varying float vMass;

uniform float uTime;
uniform float uTemperature;
uniform float uPhase;
uniform float uSupernovaIntensity;
uniform float uStarFormationRate;
uniform float uHyperspaceWarp;

// AR camera integration
uniform float uARActive;
uniform float uARSceneLuminance;
uniform float uARSurfaceCoverage;

// New cosmic phenomena
uniform float uBlackHoleStrength;
uniform float uQuantumBridgeStrength;
uniform float uConglomerationStrength;
uniform float uCollisionIntensity;

// ─── CIE-approximate wavelength → visible RGB ──────────
vec3 wavelengthToRGB(float wavelength) {
    float w = clamp(wavelength, 380.0, 780.0);
    vec3 color = vec3(0.0);

    if      (w < 440.0) { color = vec3(-(w - 440.0) / 60.0, 0.0, 1.0); }
    else if (w < 490.0) { color = vec3(0.0, (w - 440.0) / 50.0, 1.0); }
    else if (w < 510.0) { color = vec3(0.0, 1.0, -(w - 510.0) / 20.0); }
    else if (w < 580.0) { color = vec3((w - 510.0) / 70.0, 1.0, 0.0); }
    else if (w < 645.0) { color = vec3(1.0, -(w - 645.0) / 65.0, 0.0); }
    else                { color = vec3(1.0, 0.0, 0.0); }

    // Intensity taper at spectral boundaries
    float intensity;
    if      (w < 420.0) intensity = 0.3 + 0.7 * (w - 380.0) / 40.0;
    else if (w > 700.0) intensity = 0.3 + 0.7 * (780.0 - w) / 80.0;
    else                intensity = 1.0;

    return color * intensity;
}

void main() {
    // Soft circular point sprite
    vec2 uvc = gl_PointCoord - 0.5;
    float d = length(uvc);
    if (d > 0.5) discard;
    float softEdge = 1.0 - smoothstep(0.15, 0.5, d);

    // ─── HYPERSPECTRAL VELOCITY MAPPING ─────────────
    // Fast → blueshift (short λ ≈ 390 nm)
    // Slow → redshift  (long  λ ≈ 740 nm)
    float speedNorm      = clamp(vSpeed / 25.0, 0.0, 1.0);
    float baseWavelength = mix(740.0, 390.0, speedNorm);

    // ─── CMB SPECTRAL INTERFERENCE (Simplex noise) ──
    float cmb = snoise(vec3(
        vSpeed * 0.3 + uTime * 0.02,
        vAge   * 0.08,
        vDistFromCenter * 0.01
    ));
    float wavelength = clamp(baseWavelength + cmb * 50.0, 380.0, 780.0);

    vec3 color = wavelengthToRGB(wavelength);

    // ─── HOT PARTICLE WHITE-BLUE BOOST ──────────────
    float hotGlow = smoothstep(18.0, 40.0, vSpeed);
    color += vec3(0.7, 0.85, 1.0) * hotGlow * 0.6;

    // ─── TEMPERATURE AMBIENT GLOW ───────────────────
    float tempNorm = clamp(uTemperature / 1.0e8, 0.0, 1.0);
    color += vec3(1.0, 0.5, 0.15) * tempNorm * 0.35;

    // ─── SINGULARITY / INFLATION CORE FLASH ─────────
    if (uPhase < 1.5) {
        float coreGlow = exp(-vDistFromCenter * 0.5) * (1.5 - uPhase);
        color += vec3(1.0, 0.95, 0.9) * coreGlow;
    }

    // ─── STAR FORMATION — ELECTRIC PLASMA EFFECT ────
    if (uStarFormationRate > 0.01) {
        float densityProxy = smoothstep(60.0, 10.0, vDistFromCenter);
        float sparkle = snoise(vec3(
            vAge * 2.0 + uTime * 5.0,
            vSpeed * 0.5,
            vMass * 3.0
        ));
        float electricArc = pow(max(0.0, sparkle), 3.0) * densityProxy * uStarFormationRate;

        // Electric blue-white with purple fringe
        vec3 electricColor = mix(
            vec3(0.3, 0.5, 1.0),
            vec3(0.8, 0.6, 1.0),
            sin(uTime * 3.0 + vAge) * 0.5 + 0.5
        );
        color += electricColor * electricArc * 2.0;

        // Bright white core for newborn stars
        float newborn = smoothstep(2.0, 0.0, vAge) * uStarFormationRate * densityProxy;
        color += vec3(1.0, 0.98, 0.95) * newborn * 1.5;
    }

    // ─── SUPERNOVA FLASH — EXPLOSIVE DEATH ──────────
    if (uSupernovaIntensity > 0.01 && vSpeed > 25.0 && vMass > 1.0) {
        float snStrength = smoothstep(25.0, 60.0, vSpeed) * uSupernovaIntensity;

        // White-hot core
        float coreFlash = (1.0 - smoothstep(0.0, 0.2, d)) * snStrength;
        color += vec3(1.0, 1.0, 1.0) * coreFlash * 3.0;

        // Electric blue corona
        float corona = smoothstep(0.15, 0.4, d) * (1.0 - smoothstep(0.4, 0.5, d));
        color += vec3(0.4, 0.6, 1.0) * corona * snStrength * 2.0;

        // Purple-red shockwave edge
        float shockwave = smoothstep(0.3, 0.45, d) * (1.0 - smoothstep(0.45, 0.5, d));
        color += vec3(1.0, 0.2, 0.5) * shockwave * snStrength * 1.5;

        // Pulsating intensity
        float pulse = sin(uTime * 8.0 + vAge * 3.0) * 0.3 + 0.7;
        color *= pulse;
    }

    // ─── GALAXY ARM COLORING ────────────────────────
    if (uPhase >= 3.5) {
        float armNoise = snoise(vec3(
            vDistFromCenter * 0.02,
            vAge * 0.01,
            uTime * 0.005
        ));
        float armFactor = smoothstep(-0.2, 0.5, armNoise);
        vec3 armColor = mix(
            vec3(0.1, 0.15, 0.3),
            vec3(0.8, 0.6, 0.2),
            armFactor
        );
        float galaxyBlend = smoothstep(2.5, 4.5, uPhase) * 0.3;
        color = mix(color, color + armColor, galaxyBlend);
    }

    // ─── DEEP-INFRARED AFTERGLOW (old particles) ────
    float irGlow = smoothstep(40.0, 80.0, vAge) * (1.0 - speedNorm);
    color += vec3(0.4, 0.05, 0.0) * irGlow * 0.5;

    // ─── BLACK HOLE PROXIMITY EFFECTS ───────────────
    // Particles near black holes get extreme redshift, darkening,
    // and accretion disk glow — spaghettification visual.
    if (uBlackHoleStrength > 0.01) {
        // Proximity estimation from velocity+gravity signature
        float bhProximity = smoothstep(8.0, 45.0, vSpeed) * uBlackHoleStrength;

        // Accretion disk glow: hot orange-white ring
        float accretionGlow = bhProximity * smoothstep(15.0, 35.0, vSpeed);
        vec3 accretionColor = mix(
            vec3(1.0, 0.4, 0.1),
            vec3(1.0, 0.95, 0.8),
            smoothstep(25.0, 45.0, vSpeed)
        );
        color += accretionColor * accretionGlow * 1.8;

        // Event horizon darkening: extreme-speed particles near core dim
        float eventHorizonDim = smoothstep(40.0, 60.0, vSpeed) * uBlackHoleStrength * 0.6;
        color *= 1.0 - eventHorizonDim;

        // Gravitational redshift: shift toward deep red near singularity
        float redshift = bhProximity * 0.4;
        color = mix(color, color * vec3(1.2, 0.3, 0.1), redshift);

        // Hawking radiation glow at event horizon boundary
        float hawking = smoothstep(35.0, 42.0, vSpeed) * (1.0 - smoothstep(42.0, 50.0, vSpeed));
        color += vec3(0.5, 0.7, 1.0) * hawking * uBlackHoleStrength * 0.8;
    }

    // ─── QUANTUM BRIDGE VISUAL ──────────────────────
    // Subtle ethereal glow connecting entangled particle regions.
    // Particles participating in bridges get a faint cyan-violet shimmer.
    if (uQuantumBridgeStrength > 0.01) {
        float bridgeNoise = snoise(vec3(
            vDistFromCenter * 0.006 + uTime * 0.015,
            vAge * 0.02,
            vSpeed * 0.05
        ));
        float bridgeActive = smoothstep(0.1, 0.5, bridgeNoise) * uQuantumBridgeStrength;

        // Oscillating entanglement glow
        float entangleFlicker = sin(uTime * 2.3 + vDistFromCenter * 0.1 + vAge * 0.5) * 0.4 + 0.6;
        vec3 bridgeColor = mix(
            vec3(0.2, 0.8, 0.9),
            vec3(0.6, 0.3, 1.0),
            sin(uTime * 0.8 + vDistFromCenter * 0.03) * 0.5 + 0.5
        );
        color += bridgeColor * bridgeActive * entangleFlicker * 0.35;

        // Very subtle filament brightening along bridge paths
        float filamentGlow = pow(max(0.0, bridgeNoise), 4.0) * uQuantumBridgeStrength;
        color += vec3(0.9, 0.95, 1.0) * filamentGlow * 0.3;
    }

    // ─── ENERGY CONGLOMERATION COLORING ─────────────
    // Irregularly shaped dancing energy clusters: vibrant,
    // iridescent, pulsating with chromatic intensity.
    if (uConglomerationStrength > 0.01) {
        float congNoise = snoise(vec3(
            vDistFromCenter * 0.012 + uTime * 0.06,
            vAge * 0.03 + uTime * 0.04,
            vSpeed * 0.08
        ));
        float congActive = smoothstep(0.0, 0.6, congNoise) * uConglomerationStrength;

        // Multi-hue dancing energy palette
        float hueShift = uTime * 0.5 + vDistFromCenter * 0.03 + vAge * 0.1;
        vec3 congColor = vec3(
            sin(hueShift) * 0.5 + 0.5,
            sin(hueShift + 2.094) * 0.5 + 0.5,
            sin(hueShift + 4.189) * 0.5 + 0.5
        );
        // Boost saturation and brilliance
        congColor = mix(vec3(dot(congColor, vec3(0.299, 0.587, 0.114))), congColor, 1.8);
        congColor = clamp(congColor, 0.0, 1.0);

        // Pulsating intensity — energy breathes
        float pulse = sin(uTime * 0.3 + vDistFromCenter * 0.02) * 0.3 + 0.7;
        color += congColor * congActive * pulse * 0.6;

        // Electric crackling edges within conglomerations
        float crackle = pow(max(0.0, snoise(vec3(
            vDistFromCenter * 0.05 + uTime * 3.0,
            vAge * 0.5 + uTime * 2.0,
            vSpeed * 0.2
        ))), 5.0) * congActive;
        color += vec3(1.0, 0.9, 0.7) * crackle * 2.0;
    }

    // ─── COLLISION/EXPLOSION VISUALS ────────────────
    // Birth explosions glow white-blue, death explosions glow red-orange.
    if (uCollisionIntensity > 0.01) {
        // Young particles in high-speed regions: birth flash
        if (vAge < 5.0 && vSpeed > 15.0) {
            float birthFlash = (1.0 - vAge / 5.0) * smoothstep(15.0, 30.0, vSpeed) * uCollisionIntensity;
            color += vec3(0.7, 0.85, 1.0) * birthFlash * 2.0;
            // Core white
            float coreB = (1.0 - smoothstep(0.0, 0.15, d)) * birthFlash;
            color += vec3(1.0) * coreB * 1.5;
        }

        // Old massive particles at high speed: death explosion
        if (vAge > 20.0 && vSpeed > 20.0 && vMass > 1.0) {
            float deathGlow = smoothstep(20.0, 50.0, vSpeed) * uCollisionIntensity;
            vec3 deathColor = mix(
                vec3(1.0, 0.3, 0.05),
                vec3(1.0, 0.8, 0.2),
                sin(uTime * 6.0 + vAge) * 0.5 + 0.5
            );
            color += deathColor * deathGlow * 1.5;
            // Shockwave ring
            float deathRing = smoothstep(0.25, 0.35, d) * (1.0 - smoothstep(0.35, 0.45, d));
            color += vec3(1.0, 0.5, 0.8) * deathRing * deathGlow * 2.0;
        }
    }

    // ─── QUANTUM CHROMATIC IRIDESCENCE ─────────────
    // Particles shimmer with dimensional interference patterns
    // that shift based on viewing angle (approximated by distance)
    float iriPhase = vDistFromCenter * 0.03 + vSpeed * 0.08 + uTime * 0.7;
    vec3 quantumIri = vec3(
        sin(iriPhase) * 0.5 + 0.5,
        sin(iriPhase + 2.094) * 0.5 + 0.5,
        sin(iriPhase + 4.189) * 0.5 + 0.5
    );
    float iriIntensity = smoothstep(0.0, 1.0, uHyperspaceWarp) * 0.2;
    color = mix(color, color + quantumIri * 0.6, iriIntensity);

    // ─── HYPERSPACE DIMENSIONAL RIFT GLOW ───────────
    // At dimensional fold points, particles gain an ethereal
    // ultra-violet / deep-blue corona from energy leaking
    // between universes in the multiverse stack.
    float riftNoise = snoise(vec3(
        vDistFromCenter * 0.015 + uTime * 0.08,
        vAge * 0.02,
        vSpeed * 0.1 + uTime * 0.05
    ));
    float riftIntensity = smoothstep(0.3, 0.8, riftNoise) * uHyperspaceWarp;
    vec3 riftColor = mix(
        vec3(0.15, 0.1, 0.6),
        vec3(0.6, 0.2, 0.9),
        sin(uTime * 0.3 + vDistFromCenter * 0.02) * 0.5 + 0.5
    );
    color += riftColor * riftIntensity * 0.5;

    // ─── MULTIVERSE SPECTRAL BLEED ─────────────────
    // Overlapping universe boundaries create spectral
    // interference fringes — thin bands of shifted color.
    float fringePattern = sin(vDistFromCenter * 0.1 + vSpeed * 0.3 + uTime * 1.5);
    float fringeIntensity = smoothstep(0.85, 1.0, abs(fringePattern)) * uHyperspaceWarp * 0.35;
    vec3 fringeColor = wavelengthToRGB(mix(420.0, 680.0, fringePattern * 0.5 + 0.5));
    color += fringeColor * fringeIntensity;

    // ─── HEAT DEATH DIMMING ─────────────────────────
    if (uPhase > 6.5) {
        float deathFade = (uPhase - 6.5) * 2.0;
        // Keep a faint residual glow even at heat death for visual appeal
        color *= max(0.04, 1.0 - deathFade * 0.92);
        // Shift remaining particles toward deep violet at heat death
        color = mix(color, vec3(0.08, 0.02, 0.15), deathFade * 0.3);
    }

    // ─── AR CAMERA LUMINANCE-REACTIVE COLORING ──────
    if (uARActive > 0.5) {
        // Bright environments: warm golden-white uplift
        // Dark environments: deep blue-violet shift
        float lumShift = uARSceneLuminance * 2.0 - 1.0;   // [-1, 1] dark-to-bright

        // Warm boost in bright scenes (golden photon bath)
        vec3 warmTint = vec3(1.0, 0.85, 0.55) * max(0.0, lumShift) * 0.3;
        // Cool boost in dark scenes (cosmic void deepening)
        vec3 coolTint = vec3(0.3, 0.4, 1.0) * max(0.0, -lumShift) * 0.25;
        color += warmTint + coolTint;

        // Surface-detected regions: particles near surfaces get
        // an iridescent edge shimmer (holographic AR effect)
        if (uARSurfaceCoverage > 0.1) {
            float iridescence = sin(vDistFromCenter * 0.3 + uTime * 2.0 + vSpeed) * 0.5 + 0.5;
            vec3 iriColor = mix(
                vec3(0.3, 0.8, 1.0),
                vec3(1.0, 0.4, 0.8),
                iridescence
            );
            float surfaceGlow = uARSurfaceCoverage * smoothstep(100.0, 20.0, vDistFromCenter);
            color += iriColor * surfaceGlow * 0.2;
        }

        // Overall brightness modulation: AR mode slightly boosts
        // emissive intensity so particles stand out over camera feed
        color *= 1.0 + uARSceneLuminance * 0.4;
    }

    // ─── ALPHA COMPOSITING ──────────────────────────
    float alpha = softEdge;
    alpha *= mix(1.0, 0.15, clamp(vAge / 80.0, 0.0, 1.0));

    // Keep supernovae bright
    if (uSupernovaIntensity > 0.01 && vSpeed > 25.0) {
        alpha = max(alpha, smoothstep(25.0, 50.0, vSpeed) * uSupernovaIntensity * 0.8);
    }

    alpha = clamp(alpha, 0.0, 1.0);

    gl_FragColor = vec4(color, alpha);
}
`;
