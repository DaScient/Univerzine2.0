// GPGPU Velocity Compute Shader — imports noise so it works
// as a plain ES module in both browser and Vite.
// Enhanced with galaxy attractors, supernovae, quantum eccentricity.
import noise from './noise.js';

export default noise + /* glsl */`

uniform float uTime;
uniform float uDeltaTime;
uniform float uExpansionRate;
uniform float uTemperature;
uniform float uGravityStrength;
uniform vec3  uGyro;
uniform float uAudioLevel;
uniform float uAudioBass;
uniform float uPhase;

// Mouse / touch interaction
uniform vec3  uMouseWorldPos;
uniform float uMouseStrength;
uniform float uMouseActive;

// Galaxy formation
uniform float uGalaxySeed;
uniform float uNumGalaxies;

// Star lifecycle
uniform float uSupernovaIntensity;
uniform float uStarFormationRate;

// Quantum eccentricity
uniform float uQuantumJitter;

// Black holes
uniform float uBlackHoleStrength;
uniform float uNumBlackHoles;
uniform float uBlackHoleSeed;

// Quantum bridges
uniform float uQuantumBridgeStrength;

// Energy conglomerations
uniform float uConglomerationStrength;

// Collision dynamics
uniform float uCollisionIntensity;

// ─── AR Camera Flow / Surface Detection ─────────
uniform sampler2D uFlowTexture;     // (flowX, flowY, surfaceConf, luminance) 64×64
uniform float     uARActive;        // 0 or 1
uniform float     uARSurfaceForce;  // surface repulsion strength
uniform float     uARFlowForce;     // motion-following strength
uniform float     uARLuminance;     // scene-average brightness [0,1]

// ─── Deterministic hash functions ───────────────────
float hash11(float p) {
    p = fract(p * 0.1031);
    p *= p + 33.33;
    p *= p + p;
    return fract(p);
}

vec3 hash31(float p) {
    vec3 p3 = fract(vec3(p) * vec3(0.1031, 0.1030, 0.0973));
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.xxy + p3.yzz) * p3.zyx);
}

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec4 pos = texture2D(texturePosition, uv);
    vec4 vel = texture2D(textureVelocity, uv);

    vec3 position = pos.xyz;
    vec3 velocity = vel.xyz;
    float age  = pos.w;
    float mass = vel.w;

    float dist = length(position);
    vec3  dir  = dist > 0.001 ? position / dist : vec3(0.0);

    // Particle ID for deterministic per-particle randomness
    float pid = uv.x * 1024.0 + uv.y;

    // ─── HUBBLE-LIKE EXPANSION ──────────────────────
    float hubble = uExpansionRate * (1.0 + dist * 0.005);
    vec3 expansion = dir * hubble;

    // ─── GRAVITATIONAL CLUSTERING (noise field) ─────
    vec3 nc = position * 0.03 + uTime * 0.008;
    vec3 gravField = vec3(
        snoise(nc),
        snoise(nc + vec3(31.416, 0.0, 0.0)),
        snoise(nc + vec3(0.0, 67.123, 0.0))
    ) * uGravityStrength;

    // ─── CENTRAL ATTRACTOR ──────────────────────────
    float attract = mass * 0.5 / (dist * dist + 0.5);
    vec3 centralPull = -dir * attract;

    // ─── TURBULENCE (multi-scale) ───────────────────
    vec3 tc = position * 0.015 + uTime * 0.12;
    vec3 turbulence = vec3(
        snoise(tc),
        snoise(tc + vec3(100.0, 0.0, 0.0)),
        snoise(tc + vec3(0.0, 200.0, 0.0))
    );

    // ─── VORTICITY (spiral arm formation) ───────────
    vec3 vortex = vec3(-position.y, position.x, 0.0) * 0.002 / (dist + 1.0);

    // ─── FILAMENT FORMATION (anisotropic structure) ─
    vec3 filCoord = position * 0.008 + uTime * 0.003;
    float filament = fbm(filCoord, 2);   // 2 octaves — saves GPU ALU
    vec3 filForce = vec3(
        snoise(filCoord + vec3(200.0)),
        snoise(filCoord + vec3(300.0)),
        snoise(filCoord + vec3(400.0))
    ) * filament * 0.4;

    // ─── GALAXY ATTRACTOR FIELD ─────────────────────
    // Procedural galaxy centers with varied morphology:
    //   spiral, elliptical, irregular, barred spiral
    vec3 galaxyForce = vec3(0.0);
    if (uPhase >= 2.5 && uNumGalaxies > 0.0) {
        float galaxySpread = 80.0 + uPhase * 30.0;

        for (int i = 0; i < 8; i++) {
            if (float(i) >= uNumGalaxies) break;

            float fi = float(i);
            vec3 seed = hash31(fi * 127.1 + uGalaxySeed);
            vec3 gCenter = (seed - 0.5) * galaxySpread * 2.0;

            // Galaxy properties from hash
            float gMass = (hash11(fi * 31.7 + uGalaxySeed) * 0.7 + 0.3) * 8.0;
            float gType = hash11(fi * 73.3 + uGalaxySeed);
            float gSize = (hash11(fi * 53.1 + uGalaxySeed) * 0.6 + 0.4) * 60.0;

            vec3 toGalaxy = gCenter - position;
            float gDist = length(toGalaxy);
            vec3 gDir = gDist > 0.01 ? toGalaxy / gDist : vec3(0.0);

            // Gravitational attraction with softened falloff
            float gAttract = gMass / (gDist * gDist + gSize * 0.5);
            float falloff = smoothstep(gSize * 3.0, 0.0, gDist);

            vec3 force = gDir * gAttract * falloff;

            if (gType < 0.35) {
                // SPIRAL GALAXY — rotational component
                vec3 tangent = normalize(cross(toGalaxy, vec3(seed.x, 1.0, seed.z)));
                float spiralStrength = falloff * gMass * 0.3;
                float spiralAngle = gDist * 0.05 + uTime * 0.1;
                vec3 spiral = tangent * spiralStrength * sin(spiralAngle)
                            + cross(tangent, gDir) * spiralStrength * cos(spiralAngle) * 0.3;
                force += spiral;

            } else if (gType < 0.55) {
                // ELLIPTICAL GALAXY — anisotropic compression
                vec3 axis = normalize(hash31(fi * 91.3 + uGalaxySeed) - 0.5);
                float compression = dot(gDir, axis);
                force += axis * compression * gAttract * falloff * 0.5;

            } else if (gType < 0.75) {
                // IRREGULAR GALAXY — hash-based chaotic perturbation (cheaper than noise)
                vec3 chaos = (hash31(fi * 17.3 + dot(position, vec3(0.02))) - 0.5) * 2.0
                           * gMass * falloff * 0.4;
                force += chaos;

            } else {
                // BARRED SPIRAL — bar structure + spiral arms
                vec3 barAxis = normalize(hash31(fi * 47.7 + uGalaxySeed) - 0.5);
                float barAlign = abs(dot(gDir, barAxis));
                force += barAxis * barAlign * gAttract * falloff * 0.6;
                vec3 tangent = normalize(cross(toGalaxy, barAxis));
                float spiralStrength = falloff * gMass * 0.25 * (1.0 - barAlign);
                force += tangent * spiralStrength * sin(gDist * 0.08 + uTime * 0.08);
            }

            galaxyForce += force;
        }
    }

    // ─── SUPERNOVA EVENTS ───────────────────────────
    vec3 supernovaForce = vec3(0.0);
    if (uSupernovaIntensity > 0.01) {
        float snNoise = snoise(vec3(pid * 0.01, age * 0.1, uTime * 0.3));
        float snThreshold = 1.0 - uSupernovaIntensity * 0.15;

        if (snNoise > snThreshold && mass > 1.2) {
            float intensity = (snNoise - snThreshold) * 20.0 * uSupernovaIntensity;
            vec3 explosionDir = normalize(hash31(pid + uTime * 47.1) - 0.5);
            supernovaForce = explosionDir * intensity;
        }
    }

    // ─── STAR FORMATION COMPRESSION ─────────────────
    vec3 starFormForce = vec3(0.0);
    if (uStarFormationRate > 0.01) {
        vec3 densityCoord = position * 0.02 + uTime * 0.01;
        float density = snoise(densityCoord) * 0.5 + 0.25;
        if (density > 0.2) {
            // Approximate gradient with offset samples (2 calls instead of 6)
            float dRight = snoise(densityCoord + vec3(0.02, 0.0, 0.0));
            float dUp    = snoise(densityCoord + vec3(0.0, 0.02, 0.0));
            float dHere  = snoise(densityCoord);
            vec3 densityGrad = vec3(dRight - dHere, dUp - dHere, dHere * 0.5) * 25.0;
            starFormForce = -densityGrad * density * uStarFormationRate * 3.0;
        }
    }

    // ─── QUANTUM ECCENTRICITY ───────────────────────
    vec3 quantumForce = vec3(0.0);
    if (uQuantumJitter > 0.01) {
        float qScale1 = sin(uTime * 1.618 + pid * 0.1) * 0.5 + 0.5;
        float qScale2 = cos(uTime * 2.718 + pid * 0.3) * 0.5 + 0.5;
        vec3 qCoord = position * (0.01 + qScale1 * 0.05) + uTime * (0.5 + qScale2);
        quantumForce = vec3(
            snoise(qCoord),
            snoise(qCoord + vec3(777.0)),
            snoise(qCoord + vec3(1234.0))
        ) * uQuantumJitter * 3.0;

        // Occasional quantum tunneling — sudden velocity spike
        float tunnel = snoise(vec3(pid * 0.001, uTime * 0.7, 0.0));
        if (tunnel > 0.97) {
            quantumForce *= 8.0;
        }
    }

    // ─── SENSOR: GYROSCOPE (full 3-axis) ────────────
    vec3 gyroForce = uGyro * 5.0;
    // Cross-axis coupling for realistic tilt-to-force
    gyroForce += vec3(-uGyro.y, uGyro.x, 0.0) * 1.5;

    // ─── SENSOR: AUDIO (procedural, non-echo) ──────
    vec3 audioForce = dir * uAudioLevel * 10.0
                    * sin(age * uAudioBass * 6.28318);

    // ─── MOUSE / TOUCH INTERACTION ──────────────────
    vec3 toMouse    = position - uMouseWorldPos;
    float mouseDist  = length(toMouse);
    vec3 mouseDir   = mouseDist > 0.01 ? toMouse / mouseDist : vec3(0.0);
    float mouseRadius = 40.0;
    float mouseFalloff = smoothstep(mouseRadius, 0.0, mouseDist);
    vec3 mouseForce = mouseDir * uMouseStrength * mouseFalloff * uMouseActive * 12.0;

    // ─── BLACK HOLES ────────────────────────────────
    // Gravitational singularities of varying sizes that
    // warp space, capture nearby particles, and eject
    // matter in relativistic jets along spin axes.
    vec3 blackHoleForce = vec3(0.0);
    if (uBlackHoleStrength > 0.01 && uNumBlackHoles > 0.0) {
        for (int i = 0; i < 8; i++) {
            if (float(i) >= uNumBlackHoles) break;
            float fi = float(i);
            vec3 bhSeed = hash31(fi * 173.7 + uBlackHoleSeed);
            // Black hole positions drift slowly through space
            float bhSpread = 60.0 + uPhase * 40.0;
            vec3 bhCenter = (bhSeed - 0.5) * bhSpread * 2.0;
            bhCenter += vec3(
                sin(uTime * 0.03 + fi * 2.1),
                cos(uTime * 0.025 + fi * 1.7),
                sin(uTime * 0.02 + fi * 3.3)
            ) * 15.0;

            // Size categories: small (0-0.33), medium (0.33-0.66), large (0.66-1.0)
            float sizeClass = hash11(fi * 59.3 + uBlackHoleSeed);
            float bhMass = sizeClass < 0.33 ? 4.0 : (sizeClass < 0.66 ? 12.0 : 30.0);
            float eventHorizon = sizeClass < 0.33 ? 3.0 : (sizeClass < 0.66 ? 8.0 : 18.0);

            vec3 toBH = bhCenter - position;
            float bhDist = length(toBH);
            vec3 bhDir = bhDist > 0.01 ? toBH / bhDist : vec3(0.0);

            // Extreme gravity near event horizon with inverse-square falloff
            float bhGrav = bhMass * uBlackHoleStrength / (bhDist * bhDist + eventHorizon * 0.3);
            float bhFalloff = smoothstep(eventHorizon * 12.0, 0.0, bhDist);

            // Gravitational pull
            vec3 bhPull = bhDir * bhGrav * bhFalloff;

            // Accretion disk spin — particles spiral inward
            if (bhDist < eventHorizon * 6.0) {
                vec3 spinAxis = normalize(hash31(fi * 211.1 + uBlackHoleSeed) - 0.5);
                vec3 tangent = normalize(cross(toBH, spinAxis));
                float spiralSpeed = bhGrav * 0.6 * smoothstep(eventHorizon * 6.0, eventHorizon, bhDist);
                bhPull += tangent * spiralSpeed;
            }

            // Relativistic jets — particles very near event horizon get
            // blasted along the spin axis at extreme velocities
            if (bhDist < eventHorizon * 1.5 && bhDist > eventHorizon * 0.3) {
                vec3 jetAxis = normalize(hash31(fi * 211.1 + uBlackHoleSeed) - 0.5);
                float jetSide = sign(dot(toBH, jetAxis));
                float jetIntensity = (1.0 - bhDist / (eventHorizon * 1.5)) * bhMass * 2.0;
                bhPull += jetAxis * jetSide * jetIntensity * uBlackHoleStrength;
            }

            blackHoleForce += bhPull;
        }
    }

    // ─── QUANTUM BRIDGES ────────────────────────────
    // Subtle entanglement links between dense regions create
    // ephemeral filamentary connections — particles near high-density
    // nodes feel a gentle pull toward the nearest connected node.
    vec3 quantumBridgeForce = vec3(0.0);
    if (uQuantumBridgeStrength > 0.01) {
        // Create bridge nodes at noise-determined positions
        vec3 bridgeCoord = position * 0.006 + uTime * 0.015;
        float bridgeDensity = fbm(bridgeCoord, 2);

        // Particles in moderately dense regions feel bridge pull
        if (bridgeDensity > 0.1) {
            // Find the direction toward the nearest bridge endpoint
            vec3 bridgeTarget = vec3(
                snoise(vec3(floor(bridgeCoord.x * 2.0) * 0.5, uTime * 0.02, 0.0)),
                snoise(vec3(0.0, floor(bridgeCoord.y * 2.0) * 0.5, uTime * 0.02)),
                snoise(vec3(uTime * 0.02, 0.0, floor(bridgeCoord.z * 2.0) * 0.5))
            ) * 80.0;

            vec3 toBridge = bridgeTarget - position;
            float bridgeDist = length(toBridge);
            vec3 bridgeDir = bridgeDist > 0.01 ? toBridge / bridgeDist : vec3(0.0);

            // Gentle, ethereal pull — stronger in denser regions
            float bridgePull = bridgeDensity * uQuantumBridgeStrength * 0.8;
            bridgePull *= smoothstep(200.0, 0.0, bridgeDist);

            // Oscillating connection strength (quantum flickering)
            float flicker = sin(uTime * 2.3 + pid * 0.7) * 0.3 + 0.7;
            quantumBridgeForce = bridgeDir * bridgePull * flicker;

            // Add slight perpendicular drift for visual helicity
            vec3 helical = cross(bridgeDir, vec3(0.0, 1.0, 0.0));
            if (length(helical) > 0.01) {
                helical = normalize(helical);
                quantumBridgeForce += helical * bridgePull * 0.2 * sin(uTime * 4.0 + bridgeDist * 0.1);
            }
        }
    }

    // ─── ENERGY CONGLOMERATIONS ─────────────────────
    // Irregularly shaped celestial formations of pure dancing
    // energy — turbulent, vibrant clusters that attract and
    // repel particles in chaotic but beautiful patterns.
    vec3 conglomForce = vec3(0.0);
    if (uConglomerationStrength > 0.01) {
        // 3-4 major energy conglomerations with irregular shapes
        for (int i = 0; i < 4; i++) {
            float fi = float(i);
            vec3 cSeed = hash31(fi * 337.7 + uGalaxySeed * 0.5);

            // Conglomeration centers that dance and wander
            vec3 cCenter = (cSeed - 0.5) * 200.0;
            cCenter += vec3(
                sin(uTime * 0.05 * (1.0 + fi * 0.3) + fi * 4.0) * 30.0,
                cos(uTime * 0.04 * (1.0 + fi * 0.2) + fi * 2.5) * 25.0,
                sin(uTime * 0.06 * (1.0 + fi * 0.4) + fi * 1.8) * 35.0
            );

            vec3 toCong = cCenter - position;
            float cDist = length(toCong);
            vec3 cDir = cDist > 0.01 ? toCong / cDist : vec3(0.0);

            // Irregular shape via noise deformation
            float shapeNoise = fbm(vec3(
                cDir.x * 3.0 + fi + uTime * 0.08,
                cDir.y * 3.0 + fi * 2.0 + uTime * 0.06,
                cDir.z * 3.0 + fi * 3.0 + uTime * 0.07
            ), 2);
            float irregularRadius = 25.0 + shapeNoise * 20.0;
            float cFalloff = smoothstep(irregularRadius * 2.5, 0.0, cDist);

            // Alternating attract/repel creates dancing energy
            float breathe = sin(uTime * 0.3 + fi * 1.5) * 0.5 + 0.5;
            float cMass = (3.0 + shapeNoise * 4.0) * uConglomerationStrength;

            vec3 cPull = cDir * cMass * cFalloff * mix(-0.3, 1.0, breathe);

            // Turbulent internal motion — swirling chaotic energy
            if (cDist < irregularRadius * 1.5) {
                float chaosVal = snoise(position * 0.04 + vec3(fi * 20.0) + uTime * 0.15);
                vec3 chaos = vec3(chaosVal, -chaosVal * 0.8, chaosVal * 0.6) * cMass * cFalloff * 1.5;
                cPull += chaos;
            }

            conglomForce += cPull;
        }
    }

    // ─── COLLISION DYNAMICS ─────────────────────────
    // Enhanced particle-particle interaction simulation.
    // Particles near dense regions experience dramatic
    // collision forces — births from compression, deaths from explosion.
    vec3 collisionForce = vec3(0.0);
    if (uCollisionIntensity > 0.01) {
        // Local density estimation via noise field (single octave)
        vec3 denseCoord = position * 0.025 + uTime * 0.008;
        float localDensity = snoise(denseCoord) * 0.5 + 0.25;
        float densityThreshold = 0.3;

        if (localDensity > densityThreshold) {
            // In dense regions: particles jostle and collide
            float collisionStr = (localDensity - densityThreshold) * uCollisionIntensity * 5.0;

            // Explosive birth: compression triggers outward burst (star birth)
            float birthTrigger = snoise(vec3(pid * 0.005, uTime * 0.5, age * 0.05));
            if (birthTrigger > 0.7 && age < 5.0) {
                vec3 burstDir = normalize(hash31(pid + uTime * 31.7) - 0.5);
                collisionForce += burstDir * collisionStr * 8.0;
            }

            // Destruction: old massive particles in dense regions explode
            if (age > 20.0 && mass > 1.0) {
                float deathTrigger = snoise(vec3(pid * 0.003, uTime * 0.4, mass));
                if (deathTrigger > 0.75) {
                    vec3 explodeDir = normalize(hash31(pid * 1.1 + uTime * 53.3) - 0.5);
                    collisionForce += explodeDir * collisionStr * 12.0 * mass;
                }
            }

            // General collision jitter in dense regions (single noise call)
            float jitterVal = snoise(position * 0.1 + uTime * 0.8);
            collisionForce += vec3(jitterVal, -jitterVal * 0.7, jitterVal * 0.5) * collisionStr * 1.5;
        }
    }

    // ─── AR SURFACE-REACTIVE FORCE FIELD ────────────
    // Projects particle into screen-space UV, samples the flow
    // texture, and generates forces from detected surfaces.
    vec3 arSurfaceForce = vec3(0.0);
    vec3 arFlowForce    = vec3(0.0);
    if (uARActive > 0.5) {
        // Project particle position into normalised screen UV [0,1]
        // Improved camera frustum mapping: particles in front of camera
        // get better UV coverage
        float camDist = abs(position.z);

        // Dynamic view range based on phase and depth
        float viewRangeX = mix(150.0, 300.0, uPhase / 8.0);
        float viewRangeY = mix(120.0, 240.0, uPhase / 8.0);

        // Map XY to screen space with depth-aware scaling
        float depthScale = 1.0 / (1.0 + camDist * 0.02);  // closer = larger coverage
        vec2 screenUV = position.xy / vec2(viewRangeX, viewRangeY) * depthScale * 0.5 + 0.5;
        screenUV = clamp(screenUV, 0.02, 0.98);  // Keep away from texture edges to avoid filtering artifacts

        // Sample flow texture: (flowX, flowY, surfaceConfidence, luminance)
        vec4 flowData = texture2D(uFlowTexture, screenUV);
        float flowX       = flowData.r;
        float flowY       = flowData.g;
        float surfaceConf = flowData.b;
        float localLum    = flowData.a;

        // ── Surface repulsion: particles bounce off detected surfaces ──
        // Surface confidence drives repulsive force away from camera
        // Combined with proximity weighting for better responsiveness
        float proximityBoost = smoothstep(120.0, 5.0, camDist);  // stronger when near camera
        float surfaceStrength = surfaceConf * uARSurfaceForce * proximityBoost;

        // Primary: push particles outward along Z (away from camera/surface)
        arSurfaceForce.z += surfaceStrength * 20.0;

        // Secondary: lateral deflection based on detected surface orientation
        // Flow vectors indicate motion, which helps us infer surface tilt
        float flowMag = length(vec2(flowX, flowY));
        arSurfaceForce.x += flowX * surfaceStrength * 12.0;
        arSurfaceForce.y += flowY * surfaceStrength * 12.0;

        // Cross-axis coupling: perpendicular flow creates spin
        if (flowMag > 0.05) {
            arSurfaceForce.x -= flowY * surfaceConf * uARSurfaceForce * 3.0;
            arSurfaceForce.y += flowX * surfaceConf * uARSurfaceForce * 3.0;
        }

        // ── Motion-following: particles drift with camera motion flow ──
        // Flow Force directly follows optical flow from camera motion
        arFlowForce.x = flowX * uARFlowForce * 8.0;
        arFlowForce.y = flowY * uARFlowForce * 8.0;

        // Flow-induced vorticity: create swirling motion around large optical flow
        float flowMagnitude = sqrt(flowX * flowX + flowY * flowY);
        if (flowMagnitude > 0.1) {
            // Perpendicular component creates rotation
            vec3 swirl = vec3(-flowY, flowX, 0.0) * flowMagnitude * uARFlowForce * 4.0;
            arFlowForce += swirl;

            // Add turbulent jitter in flow-aligned direction
            arFlowForce.z += flowMagnitude * uARFlowForce * sin(position.x * 0.1 + position.y * 0.1) * 2.0;
        }

        // ── Luminance-reactive acceleration ──
        // Bright regions accelerate particles outward, creating energy attraction
        float lumBoost = localLum * uARLuminance;
        arFlowForce += dir * lumBoost * 8.0;
        arFlowForce.z += lumBoost * 4.0;  // Also push outward in Z for volume effect
    }

    // ══════════════════════════════════════════════════
    // PHASE-SPECIFIC DYNAMICS
    // ══════════════════════════════════════════════════
    if (uPhase < 0.5) {
        // ** SINGULARITY ** — tight compressed swirl
        velocity += centralPull  * 15.0  * uDeltaTime;
        velocity += turbulence   *  3.0  * uDeltaTime;
        velocity += vortex       * 20.0  * uDeltaTime;
        velocity += quantumForce *  2.0  * uDeltaTime;
        velocity += quantumBridgeForce * 1.0 * uDeltaTime;
        velocity += collisionForce * 0.5 * uDeltaTime;
        velocity *= 0.97;

    } else if (uPhase < 1.5) {
        // ** INFLATION ** — violent outward burst
        velocity += expansion    *  8.0  * uDeltaTime;
        velocity += turbulence   *  1.5  * uDeltaTime;
        velocity += vortex       *  5.0  * uDeltaTime;
        velocity += quantumForce *  1.0  * uDeltaTime;
        velocity += conglomForce *  0.5  * uDeltaTime;
        velocity += collisionForce * 1.0 * uDeltaTime;

    } else if (uPhase < 2.5) {
        // ** COOLING ** — decelerate, grow filaments
        velocity += expansion    *  0.4  * uDeltaTime;
        velocity += gravField    *  2.5  * uDeltaTime;
        velocity += centralPull  *  0.3  * uDeltaTime;
        velocity += vortex       *  3.0  * uDeltaTime;
        velocity += filForce     *  1.5  * uDeltaTime;
        velocity += quantumForce *  0.5  * uDeltaTime;
        velocity += starFormForce * uDeltaTime;
        velocity += blackHoleForce * 0.5 * uDeltaTime;
        velocity += quantumBridgeForce * 0.8 * uDeltaTime;
        velocity += conglomForce * 0.6 * uDeltaTime;
        velocity += collisionForce * 0.8 * uDeltaTime;
        velocity *= 0.997;

    } else if (uPhase < 3.5) {
        // ** STRUCTURE + STELLAR IGNITION ** — galaxies forming
        velocity += expansion    *  0.15 * uDeltaTime;
        velocity += gravField    *  3.0  * uDeltaTime;
        velocity += centralPull  *  0.2  * uDeltaTime;
        velocity += vortex       *  4.0  * uDeltaTime;
        velocity += filForce     *  2.0  * uDeltaTime;
        velocity += galaxyForce  *  1.5  * uDeltaTime;
        velocity += starFormForce * uDeltaTime;
        velocity += supernovaForce * uDeltaTime;
        velocity += quantumForce *  0.3  * uDeltaTime;
        velocity += turbulence   *  0.3  * uDeltaTime;
        velocity += blackHoleForce * 1.0 * uDeltaTime;
        velocity += quantumBridgeForce * 1.0 * uDeltaTime;
        velocity += conglomForce * 1.0 * uDeltaTime;
        velocity += collisionForce * 1.0 * uDeltaTime;
        velocity *= 0.998;

    } else if (uPhase < 4.5) {
        // ** GALAXY FORMATION ** — strong galaxy attractors
        velocity += expansion    *  0.1  * uDeltaTime;
        velocity += gravField    *  2.0  * uDeltaTime;
        velocity += galaxyForce  *  3.0  * uDeltaTime;
        velocity += vortex       *  3.0  * uDeltaTime;
        velocity += filForce     *  1.5  * uDeltaTime;
        velocity += starFormForce * 1.5  * uDeltaTime;
        velocity += supernovaForce * uDeltaTime;
        velocity += quantumForce *  0.2  * uDeltaTime;
        velocity += blackHoleForce * 1.5 * uDeltaTime;
        velocity += quantumBridgeForce * 0.8 * uDeltaTime;
        velocity += conglomForce * 1.2 * uDeltaTime;
        velocity += collisionForce * 1.2 * uDeltaTime;
        velocity *= 0.996;

    } else if (uPhase < 5.5) {
        // ** STELLAR EVOLUTION ** — mature galaxies
        velocity += galaxyForce  *  3.5  * uDeltaTime;
        velocity += gravField    *  1.5  * uDeltaTime;
        velocity += vortex       *  2.5  * uDeltaTime;
        velocity += starFormForce * 1.0  * uDeltaTime;
        velocity += supernovaForce * 1.5 * uDeltaTime;
        velocity += quantumForce *  0.15 * uDeltaTime;
        velocity += turbulence   *  0.2  * uDeltaTime;
        velocity += blackHoleForce * 2.0 * uDeltaTime;
        velocity += quantumBridgeForce * 0.5 * uDeltaTime;
        velocity += conglomForce * 1.0 * uDeltaTime;
        velocity += collisionForce * 1.5 * uDeltaTime;
        velocity *= 0.997;

    } else if (uPhase < 6.5) {
        // ** SUPERNOVA ERA ** — explosive stellar deaths
        velocity += galaxyForce  *  2.0  * uDeltaTime;
        velocity += supernovaForce * 3.0 * uDeltaTime;
        velocity += gravField    *  1.0  * uDeltaTime;
        velocity += vortex       *  1.5  * uDeltaTime;
        velocity += quantumForce *  0.8  * uDeltaTime;
        velocity += turbulence   *  0.5  * uDeltaTime;
        velocity += blackHoleForce * 2.5 * uDeltaTime;
        velocity += conglomForce * 0.6 * uDeltaTime;
        velocity += collisionForce * 2.0 * uDeltaTime;
        velocity *= 0.995;

    } else {
        // ** HEAT DEATH ** — everything dissipates
        velocity += expansion    *  0.02 * uDeltaTime;
        velocity += quantumForce *  0.05 * uDeltaTime;
        velocity += blackHoleForce * 1.0 * uDeltaTime;
        velocity *= 0.99;
    }

    // Always apply environmental sensors + mouse + AR
    velocity += gyroForce  * uDeltaTime;
    velocity += audioForce * uDeltaTime;
    velocity += mouseForce * uDeltaTime;
    velocity += arSurfaceForce * uDeltaTime;
    velocity += arFlowForce    * uDeltaTime;

    // Speed ceiling (increased for supernovae)
    float maxSpeed = 60.0 + uSupernovaIntensity * 40.0;
    float speed = length(velocity);
    if (speed > maxSpeed) velocity = velocity / speed * maxSpeed;

    gl_FragColor = vec4(velocity, mass);
}
`;
