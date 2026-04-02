// ────────────────────────────────────────────────────────
// GPGPU Velocity Compute — particle forces & dynamics
// Reads: texturePosition, textureVelocity (auto-injected)
// Writes: vec4(velocity.xyz, mass)
// Enhanced with galaxy attractors, supernovae, quantum eccentricity.
// NOTE: noise.glsl is prepended at runtime
// ────────────────────────────────────────────────────────

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
    float filament = fbm(filCoord, 3);
    vec3 filForce = vec3(
        snoise(filCoord + vec3(200.0)),
        snoise(filCoord + vec3(300.0)),
        snoise(filCoord + vec3(400.0))
    ) * filament * 0.4;

    // ─── GALAXY ATTRACTOR FIELD ─────────────────────
    vec3 galaxyForce = vec3(0.0);
    if (uPhase >= 2.5) {
        float galaxySpread = 80.0 + uPhase * 30.0;
        for (int i = 0; i < 16; i++) {
            if (float(i) >= uNumGalaxies) break;
            float fi = float(i);
            vec3 seed = hash31(fi * 127.1 + uGalaxySeed);
            vec3 gCenter = (seed - 0.5) * galaxySpread * 2.0;
            float gMass = (hash11(fi * 31.7 + uGalaxySeed) * 0.7 + 0.3) * 8.0;
            float gType = hash11(fi * 73.3 + uGalaxySeed);
            float gSize = (hash11(fi * 53.1 + uGalaxySeed) * 0.6 + 0.4) * 60.0;
            vec3 toGalaxy = gCenter - position;
            float gDist = length(toGalaxy);
            vec3 gDir = gDist > 0.01 ? toGalaxy / gDist : vec3(0.0);
            float gAttract = gMass / (gDist * gDist + gSize * 0.5);
            float falloff = smoothstep(gSize * 3.0, 0.0, gDist);
            vec3 force = gDir * gAttract * falloff;
            if (gType < 0.35) {
                vec3 tangent = normalize(cross(toGalaxy, vec3(seed.x, 1.0, seed.z)));
                float spiralStrength = falloff * gMass * 0.3;
                float spiralAngle = gDist * 0.05 + uTime * 0.1;
                force += tangent * spiralStrength * sin(spiralAngle)
                       + cross(tangent, gDir) * spiralStrength * cos(spiralAngle) * 0.3;
            } else if (gType < 0.55) {
                vec3 axis = normalize(hash31(fi * 91.3 + uGalaxySeed) - 0.5);
                force += axis * dot(gDir, axis) * gAttract * falloff * 0.5;
            } else if (gType < 0.75) {
                vec3 chaosCoord = position * 0.02 + vec3(fi * 10.0) + uTime * 0.05;
                force += vec3(snoise(chaosCoord), snoise(chaosCoord + vec3(50.0)),
                    snoise(chaosCoord + vec3(100.0))) * gMass * falloff * 0.4;
            } else {
                vec3 barAxis = normalize(hash31(fi * 47.7 + uGalaxySeed) - 0.5);
                float barAlign = abs(dot(gDir, barAxis));
                force += barAxis * barAlign * gAttract * falloff * 0.6;
                vec3 tangent = normalize(cross(toGalaxy, barAxis));
                force += tangent * falloff * gMass * 0.25 * (1.0 - barAlign) * sin(gDist * 0.08 + uTime * 0.08);
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
            vec3 explosionDir = normalize(vec3(
                snoise(vec3(pid, uTime * 2.0, 0.0)),
                snoise(vec3(0.0, pid, uTime * 2.0)),
                snoise(vec3(uTime * 2.0, 0.0, pid))
            ));
            supernovaForce = explosionDir * intensity;
        }
    }

    // ─── STAR FORMATION COMPRESSION ─────────────────
    vec3 starFormForce = vec3(0.0);
    if (uStarFormationRate > 0.01) {
        vec3 densityCoord = position * 0.02 + uTime * 0.01;
        float density = fbm(densityCoord, 2);
        if (density > 0.2) {
            vec3 densityGrad = vec3(
                snoise(densityCoord + vec3(0.01, 0.0, 0.0)) - snoise(densityCoord - vec3(0.01, 0.0, 0.0)),
                snoise(densityCoord + vec3(0.0, 0.01, 0.0)) - snoise(densityCoord - vec3(0.0, 0.01, 0.0)),
                snoise(densityCoord + vec3(0.0, 0.0, 0.01)) - snoise(densityCoord - vec3(0.0, 0.0, 0.01))
            );
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
            snoise(qCoord), snoise(qCoord + vec3(777.0)), snoise(qCoord + vec3(1234.0))
        ) * uQuantumJitter * 3.0;
        float tunnel = snoise(vec3(pid * 0.001, uTime * 0.7, 0.0));
        if (tunnel > 0.97) quantumForce *= 8.0;
    }

    // ─── SENSOR: GYROSCOPE (full 3-axis) ────────────
    vec3 gyroForce = uGyro * 5.0;
    gyroForce += vec3(-uGyro.y, uGyro.x, 0.0) * 1.5;

    // ─── SENSOR: AUDIO (procedural, non-echo) ──────
    vec3 audioForce = dir * uAudioLevel * 10.0
                    * sin(age * uAudioBass * 6.28318);

    // ─── MOUSE / TOUCH INTERACTION ──────────────────
    vec3 toMouse   = position - uMouseWorldPos;
    float mouseDist = length(toMouse);
    vec3 mouseDir   = mouseDist > 0.01 ? toMouse / mouseDist : vec3(0.0);
    float mouseRadius = 40.0;
    float mouseFalloff = smoothstep(mouseRadius, 0.0, mouseDist);
    vec3 mouseForce = mouseDir * uMouseStrength * mouseFalloff * uMouseActive * 12.0;

    // ═══════════════════════════════════════════════
    // PHASE-SPECIFIC DYNAMICS
    // ═══════════════════════════════════════════════
    if (uPhase < 0.5) {
        velocity += centralPull * 15.0 * uDeltaTime;
        velocity += turbulence * 3.0 * uDeltaTime;
        velocity += vortex * 20.0 * uDeltaTime;
        velocity += quantumForce * 2.0 * uDeltaTime;
        velocity *= 0.97;
    } else if (uPhase < 1.5) {
        velocity += expansion * 8.0 * uDeltaTime;
        velocity += turbulence * 1.5 * uDeltaTime;
        velocity += vortex * 5.0 * uDeltaTime;
        velocity += quantumForce * 1.0 * uDeltaTime;
    } else if (uPhase < 2.5) {
        velocity += expansion * 0.4 * uDeltaTime;
        velocity += gravField * 2.5 * uDeltaTime;
        velocity += centralPull * 0.3 * uDeltaTime;
        velocity += vortex * 3.0 * uDeltaTime;
        velocity += filForce * 1.5 * uDeltaTime;
        velocity += quantumForce * 0.5 * uDeltaTime;
        velocity += starFormForce * uDeltaTime;
        velocity *= 0.997;
    } else if (uPhase < 3.5) {
        velocity += expansion * 0.15 * uDeltaTime;
        velocity += gravField * 3.0 * uDeltaTime;
        velocity += centralPull * 0.2 * uDeltaTime;
        velocity += vortex * 4.0 * uDeltaTime;
        velocity += filForce * 2.0 * uDeltaTime;
        velocity += galaxyForce * 1.5 * uDeltaTime;
        velocity += starFormForce * uDeltaTime;
        velocity += supernovaForce * uDeltaTime;
        velocity += quantumForce * 0.3 * uDeltaTime;
        velocity += turbulence * 0.3 * uDeltaTime;
        velocity *= 0.998;
    } else if (uPhase < 4.5) {
        velocity += expansion * 0.1 * uDeltaTime;
        velocity += gravField * 2.0 * uDeltaTime;
        velocity += galaxyForce * 3.0 * uDeltaTime;
        velocity += vortex * 3.0 * uDeltaTime;
        velocity += filForce * 1.5 * uDeltaTime;
        velocity += starFormForce * 1.5 * uDeltaTime;
        velocity += supernovaForce * uDeltaTime;
        velocity += quantumForce * 0.2 * uDeltaTime;
        velocity *= 0.996;
    } else if (uPhase < 5.5) {
        velocity += galaxyForce * 3.5 * uDeltaTime;
        velocity += gravField * 1.5 * uDeltaTime;
        velocity += vortex * 2.5 * uDeltaTime;
        velocity += starFormForce * 1.0 * uDeltaTime;
        velocity += supernovaForce * 1.5 * uDeltaTime;
        velocity += quantumForce * 0.15 * uDeltaTime;
        velocity += turbulence * 0.2 * uDeltaTime;
        velocity *= 0.997;
    } else if (uPhase < 6.5) {
        velocity += galaxyForce * 2.0 * uDeltaTime;
        velocity += supernovaForce * 3.0 * uDeltaTime;
        velocity += gravField * 1.0 * uDeltaTime;
        velocity += vortex * 1.5 * uDeltaTime;
        velocity += quantumForce * 0.8 * uDeltaTime;
        velocity += turbulence * 0.5 * uDeltaTime;
        velocity *= 0.995;
    } else {
        velocity += expansion * 0.02 * uDeltaTime;
        velocity += quantumForce * 0.05 * uDeltaTime;
        velocity *= 0.99;
    }

    // Always apply environmental sensors
    velocity += gyroForce  * uDeltaTime;
    velocity += audioForce * uDeltaTime;
    velocity += mouseForce * uDeltaTime;

    // Speed ceiling
    float maxSpeed = 60.0 + uSupernovaIntensity * 40.0;
    float speed = length(velocity);
    if (speed > maxSpeed) velocity = velocity / speed * maxSpeed;

    gl_FragColor = vec4(velocity, mass);
}
