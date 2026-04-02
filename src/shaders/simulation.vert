// ────────────────────────────────────────────────────────
// Particle Vertex Shader — reads GPGPU textures for position
// Enhanced with supernova flash sizing and star formation glow.
// ────────────────────────────────────────────────────────

uniform sampler2D uPositionTexture;
uniform sampler2D uVelocityTexture;
uniform float uPixelRatio;
uniform float uPointSize;
uniform float uTime;
uniform float uSupernovaIntensity;
uniform float uStarFormationRate;

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
    vAge             = posData.w;
    vSpeed           = length(velData.xyz);
    vDistFromCenter  = length(pos);
    vMass            = velData.w;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Dynamic point sizing — fast / nearby particles are larger
    float basePx    = uPointSize * uPixelRatio;
    float speedBoost = 1.0 + smoothstep(0.0, 20.0, vSpeed) * 2.0;
    float depthScale = 250.0 / max(1.0, -mvPosition.z);

    // Star formation: dense regions get brighter larger points
    float starGlow = uStarFormationRate * smoothstep(15.0, 5.0, vDistFromCenter) * 0.5;

    // Supernova: high-speed massive particles flash large
    float snFlash = 0.0;
    if (uSupernovaIntensity > 0.01 && vSpeed > 30.0 && vMass > 1.2) {
        snFlash = (vSpeed - 30.0) / 30.0 * uSupernovaIntensity * 3.0;
    }

    gl_PointSize = basePx * (speedBoost + starGlow + snFlash) * depthScale;
    gl_PointSize = clamp(gl_PointSize, 0.5, 120.0);
}
