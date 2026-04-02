// Particle Vertex Shader — reads GPGPU position/velocity textures.
// Enhanced with hyperspace dimensional warping and quantum displacement.
export default /* glsl */`
uniform sampler2D uPositionTexture;
uniform sampler2D uVelocityTexture;
uniform float uPixelRatio;
uniform float uPointSize;
uniform float uTime;
uniform float uSupernovaIntensity;
uniform float uStarFormationRate;
uniform float uHyperspaceWarp;
uniform float uBlackHoleStrength;
uniform float uCollisionIntensity;

varying float vSpeed;
varying float vAge;
varying float vDistFromCenter;
varying float vMass;

void main() {
    // position.xy stores the UV into the GPGPU data textures
    vec2 uv = position.xy;

    vec4 posData = texture2D(uPositionTexture, uv);
    vec4 velData = texture2D(uVelocityTexture, uv);

    vec3 pos = posData.xyz;
    vAge            = posData.w;
    vSpeed          = length(velData.xyz);
    vDistFromCenter = length(pos);
    vMass           = velData.w;

    // ─── Hyperspace dimensional warping ─────────────
    // Particles bend through space-time, creating visible
    // distortions that emulate higher-dimensional traversal.
    float warpScale = uHyperspaceWarp * smoothstep(0.0, 60.0, vDistFromCenter);
    pos.x += sin(pos.y * 0.02 + pos.z * 0.015 + uTime * 0.4) * warpScale * 3.5;
    pos.y += cos(pos.x * 0.018 + pos.z * 0.02 + uTime * 0.35) * warpScale * 3.0;
    pos.z += sin(pos.x * 0.015 + pos.y * 0.022 + uTime * 0.3) * warpScale * 2.5;

    // ─── Quantum fluctuation micro-displacement ─────
    float quantumDisp = sin(vAge * 2.0 + vSpeed * 0.5 + uTime * 3.0) * 0.35;
    vec3 posNorm = length(pos) > 0.001 ? normalize(pos) : vec3(0.0, 1.0, 0.0);
    pos += posNorm * quantumDisp;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Dynamic point sizing — fast / nearby particles are larger
    float basePx     = uPointSize * uPixelRatio;
    float speedBoost = 1.0 + smoothstep(0.0, 20.0, vSpeed) * 2.0;
    float depthScale = 250.0 / max(1.0, -mvPosition.z);

    // Star formation: dense regions get brighter larger points
    float starGlow = uStarFormationRate * smoothstep(15.0, 5.0, vDistFromCenter) * 0.5;

    // Supernova: high-speed massive particles flash large
    float snFlash = 0.0;
    if (uSupernovaIntensity > 0.01 && vSpeed > 30.0 && vMass > 1.2) {
        snFlash = (vSpeed - 30.0) / 30.0 * uSupernovaIntensity * 3.0;
    }

    // Hyperspace proximity glow — particles near dimensional folds grow
    float hyperspaceGlow = abs(sin(pos.x * 0.01 + pos.y * 0.012 + uTime * 0.2)) * uHyperspaceWarp * 0.6;

    // Black hole accretion glow — fast particles near singularities enlarge
    float bhGlow = 0.0;
    if (uBlackHoleStrength > 0.01 && vSpeed > 20.0) {
        bhGlow = smoothstep(20.0, 50.0, vSpeed) * uBlackHoleStrength * 1.5;
    }

    // Collision birth/death flash sizing
    float collisionGlow = 0.0;
    if (uCollisionIntensity > 0.01) {
        // Young fast particles: birth flash
        if (vAge < 5.0 && vSpeed > 15.0) {
            collisionGlow += (1.0 - vAge / 5.0) * smoothstep(15.0, 30.0, vSpeed) * uCollisionIntensity * 2.0;
        }
        // Old massive fast particles: death explosion
        if (vAge > 20.0 && vSpeed > 20.0 && vMass > 1.0) {
            collisionGlow += smoothstep(20.0, 50.0, vSpeed) * uCollisionIntensity * 1.5;
        }
    }

    gl_PointSize = basePx * (speedBoost + starGlow + snFlash + hyperspaceGlow + bhGlow + collisionGlow) * depthScale;
    gl_PointSize = clamp(gl_PointSize, 0.5, 150.0);
}
`;
