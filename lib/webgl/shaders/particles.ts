import { simplexNoise2D } from "./noise";

/**
 * Particle portrait — one instanced quad per opaque pixel of the source photo.
 *
 * Adapted from Bruno Imbrizi's "Interactive Particles" (Codrops, MIT), with:
 *  - luminance and random seeds baked into attributes on the CPU (no per-vertex photo lookups)
 *  - a per-particle intro ("reveal") that swirls in from a dust cloud, top of the head first
 *  - a scroll-driven exit ("scatter") that lifts particles toward the camera as the hero leaves
 *  - cursor "heat": particles pushed by the pointer flare to the accent colour, then cool
 *  - "invert" (0 → 1) for light mode: size and colour follow darkness instead of brightness, which
 *    turns the glowing photo into a halftone print on paper
 *
 * Units: positions are in texels of the particle grid. The mesh scale converts texels to CSS px,
 * and `uScale` carries that same factor for billboard sizes, which are added after the model-view
 * transform and would otherwise ignore the mesh scale.
 */
export const particleVertexShader = /* glsl */ `
uniform float uTime;
uniform float uSize;
uniform float uScale;
uniform float uDepth;
uniform float uRandom;
uniform float uReveal;
uniform float uScatter;
uniform float uTouchForce;
uniform float uInvert;
uniform vec2 uGrid;
uniform sampler2D uTouch;

attribute vec2 aOffset;  // grid position, origin bottom-left
attribute vec2 aTone;    // x: luminance, y: alpha coverage
attribute vec4 aSeed;    // xyz: random [0, 1), w: push angle

varying vec2 vUv;
varying float vTone;
varying float vHeat;
varying float vAlpha;

${simplexNoise2D}

mat2 rotate2d(float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c, -s, s, c);
}

void main() {
  vUv = uv;
  vec2 puv = (aOffset + 0.5) / uGrid;
  vec2 dir = vec2(cos(aSeed.w), sin(aSeed.w));

  // Idle life: jitter in the plane, breathing in depth.
  float rndz = aSeed.y + snoise(vec2(aSeed.x * 97.0, uTime * 0.1));
  vec3 p = vec3(aOffset - uGrid * 0.5, 0.0);
  p.xy += (aSeed.zx - 0.5) * uRandom;
  p.z += rndz * aSeed.z * 2.0 * uDepth;

  // Cursor: the touch texture says how hard this spot was hit.
  float touch = texture2D(uTouch, puv).r;
  p.z += touch * uTouchForce * rndz;
  p.xy += dir * touch * uTouchForce * rndz;

  // Intro: each particle flies in on its own clock, hairline first.
  float start = aSeed.x * 0.35 + (1.0 - puv.y) * 0.25;
  float r = smoothstep(start, start + 0.4, uReveal);
  float settle = 1.0 - pow(1.0 - r, 3.0);
  vec3 from = vec3((aSeed.yz - 0.5) * uGrid * 1.3, (aSeed.x * 1.7 - 1.2) * uGrid.y);
  from.xy = rotate2d((1.0 - settle) * 1.8) * from.xy;
  p += from * (1.0 - settle);

  // Exit: scroll lifts the portrait apart, toward the camera, like heat off a floor.
  float s = smoothstep(aSeed.z * 0.45, aSeed.z * 0.45 + 0.55, uScatter);
  p.xy += dir * s * uGrid.y * 0.3 * (0.4 + aSeed.y);
  p.y += s * s * uGrid.y * 0.25;
  p.z += s * uGrid.y * 0.8 * (aSeed.x + 0.15);

  // Dark mode: bright pixels make big, bright particles; the white shirt would outshine the face,
  // so everything below the collar is quietened. Light mode: dark pixels make big, dark dots and the
  // shirt fades into the paper on its own.
  float glow = aTone.x * mix(0.62, 1.0, smoothstep(0.12, 0.5, puv.y));
  float ink = 1.0 - aTone.x;
  float tone = mix(glow, ink, uInvert);

  float flicker = snoise(vec2(uTime * 0.5, aSeed.y * 113.0)) + 2.0;
  float size = flicker * max(tone, 0.24) * uSize * mix(1.0, 0.92, uInvert);
  size *= mix(0.55, 1.0, aTone.y) * r * (1.0 - s * 0.5);

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  mv.xyz += position * size * uScale;
  gl_Position = projectionMatrix * mv;

  // An oval vignette around the head lets the shoulders dissolve before they reach the copy on
  // either side; the bottom edge melts into the page.
  float vignette = 1.0 - smoothstep(0.32, 0.5, length((puv - vec2(0.5, 0.62)) * vec2(1.0, 0.75)));
  float fade = vignette * smoothstep(0.0, 0.3, puv.y);
  vAlpha = fade * (1.0 - s) * smoothstep(0.0, 0.3, r);
  vTone = tone;
  vHeat = clamp(touch * 1.5, 0.0, 1.0);
}
`;

export const particleFragmentShader = /* glsl */ `
uniform vec3 uShadow;
uniform vec3 uHighlight;
uniform vec3 uAccent;

varying vec2 vUv;
varying float vTone;
varying float vHeat;
varying float vAlpha;

void main() {
  float disc = smoothstep(0.5, 0.2, distance(vUv, vec2(0.5)));
  float alpha = disc * vAlpha;
  if (alpha < 0.01) discard;

  vec3 color = mix(uShadow, uHighlight, pow(vTone, 0.85));
  // Flare to the accent quickly, so pushed particles read as gold rather than half-blended tones.
  color = mix(color, uAccent, smoothstep(0.0, 0.55, vHeat));
  gl_FragColor = vec4(color, alpha);
}
`;
