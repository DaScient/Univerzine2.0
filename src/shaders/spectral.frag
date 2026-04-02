// ────────────────────────────────────────────────────────
// Particle Fragment Shader — Hyperspectral colour mapping
// Enhanced with electric plasma, supernova flashes, galaxy arm coloring.
// NOTE: noise.glsl is prepended at runtime
// ────────────────────────────────────────────────────────

varying float vSpeed;
varying float vAge;
varying float vDistFromCenter;
varying float vMass;

uniform float uTime;
uniform float uTemperature;
uniform float uPhase;
uniform float uSupernovaIntensity;
uniform float uStarFormationRate;

// ─── CIE-approximate wavelength → visible RGB ──────────
vec3 wavelengthToRGB(float wavelength) {
    float w = clamp(wavelength, 380.0, 780.0);
    vec3 color = vec3(0.0);

    if      (w < 440.0) { color = vec3(-(w - 440.0) / 60.0, 0.0, 1.0); }
    else if (w < 490.0) { color = vec3(0.0, (w - 440.0) / 50.0, 1.0); }
    else if (w < 510.0) { color = vec3(0.0, 1.0, -(w - 510.0) / 20.0); }
    else if (w < 580.0) { color = vec3((w - 510.0) / 70.0, 1.0, 0.0); }
    else if (w < 645.0) { color = vec3(1.0, -(w - 645.0) / 65.0, 0.0); }
    else               { color = vec3(1.0, 0.0, 0.0); }

    float intensity;
    if      (w < 420.0) intensity = 0.3 + 0.7 * (w - 380.0) / 40.0;
    else if (w > 700.0) intensity = 0.3 + 0.7 * (780.0 - w) / 80.0;
    else                intensity = 1.0;

    return color * intensity;
}

void main() {
    vec2 uvc = gl_PointCoord - 0.5;
    float d = length(uvc);
    if (d > 0.5) discard;
    float softEdge = 1.0 - smoothstep(0.15, 0.5, d);

    float speedNorm     = clamp(vSpeed / 25.0, 0.0, 1.0);
    float baseWavelength = mix(740.0, 390.0, speedNorm);

    float cmb = snoise(vec3(
        vSpeed * 0.3 + uTime * 0.02,
        vAge   * 0.08,
        vDistFromCenter * 0.01
    ));
    float wavelength = clamp(baseWavelength + cmb * 50.0, 380.0, 780.0);
    vec3 color = wavelengthToRGB(wavelength);

    float hotGlow = smoothstep(18.0, 40.0, vSpeed);
    color += vec3(0.7, 0.85, 1.0) * hotGlow * 0.6;

    float tempNorm = clamp(uTemperature / 1.0e8, 0.0, 1.0);
    color += vec3(1.0, 0.5, 0.15) * tempNorm * 0.35;

    if (uPhase < 1.5) {
        float coreGlow = exp(-vDistFromCenter * 0.5) * (1.5 - uPhase);
        color += vec3(1.0, 0.95, 0.9) * coreGlow;
    }

    // Star formation — electric plasma
    if (uStarFormationRate > 0.01) {
        float densityProxy = smoothstep(60.0, 10.0, vDistFromCenter);
        float sparkle = snoise(vec3(vAge * 2.0 + uTime * 5.0, vSpeed * 0.5, vMass * 3.0));
        float electricArc = pow(max(0.0, sparkle), 3.0) * densityProxy * uStarFormationRate;
        vec3 electricColor = mix(vec3(0.3, 0.5, 1.0), vec3(0.8, 0.6, 1.0),
            sin(uTime * 3.0 + vAge) * 0.5 + 0.5);
        color += electricColor * electricArc * 2.0;
        float newborn = smoothstep(2.0, 0.0, vAge) * uStarFormationRate * densityProxy;
        color += vec3(1.0, 0.98, 0.95) * newborn * 1.5;
    }

    // Supernova flash
    if (uSupernovaIntensity > 0.01 && vSpeed > 25.0 && vMass > 1.0) {
        float snStrength = smoothstep(25.0, 60.0, vSpeed) * uSupernovaIntensity;
        float coreFlash = (1.0 - smoothstep(0.0, 0.2, d)) * snStrength;
        color += vec3(1.0) * coreFlash * 3.0;
        float corona = smoothstep(0.15, 0.4, d) * (1.0 - smoothstep(0.4, 0.5, d));
        color += vec3(0.4, 0.6, 1.0) * corona * snStrength * 2.0;
        float shockwave = smoothstep(0.3, 0.45, d) * (1.0 - smoothstep(0.45, 0.5, d));
        color += vec3(1.0, 0.2, 0.5) * shockwave * snStrength * 1.5;
        color *= sin(uTime * 8.0 + vAge * 3.0) * 0.3 + 0.7;
    }

    // Galaxy arm coloring
    if (uPhase >= 3.5) {
        float armNoise = snoise(vec3(vDistFromCenter * 0.02, vAge * 0.01, uTime * 0.005));
        float armFactor = smoothstep(-0.2, 0.5, armNoise);
        vec3 armColor = mix(vec3(0.1, 0.15, 0.3), vec3(0.8, 0.6, 0.2), armFactor);
        float galaxyBlend = smoothstep(2.5, 4.5, uPhase) * 0.3;
        color = mix(color, color + armColor, galaxyBlend);
    }

    float irGlow = smoothstep(40.0, 80.0, vAge) * (1.0 - speedNorm);
    color += vec3(0.4, 0.05, 0.0) * irGlow * 0.5;

    // Heat death dimming
    if (uPhase > 6.5) {
        float deathFade = (uPhase - 6.5) * 2.0;
        color *= max(0.02, 1.0 - deathFade * 0.95);
    }

    float alpha = softEdge;
    alpha *= mix(1.0, 0.15, clamp(vAge / 80.0, 0.0, 1.0));
    if (uSupernovaIntensity > 0.01 && vSpeed > 25.0) {
        alpha = max(alpha, smoothstep(25.0, 50.0, vSpeed) * uSupernovaIntensity * 0.8);
    }
    alpha = clamp(alpha, 0.0, 1.0);

    gl_FragColor = vec4(color, alpha);
}
