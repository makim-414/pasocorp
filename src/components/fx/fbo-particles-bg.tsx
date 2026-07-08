// SOURCE: IRONACT design-system primitives/code/hero/fbo-particles-bg.tsx (adapted for PASO)
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

export type FBOPhase = "idle" | "form" | "analyzing";

// Three.js + r3f runs in the browser only — skip SSR to avoid WebGL /
// window references during server render.
const FBOParticlesScene = dynamic(() => import("./fbo-particles-scene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />,
});

/**
 * FBO GPGPU curl-noise particles (ported from Maxime Heckel's tutorial).
 * Mounted as a hero background — pointer-events disabled so CTAs above
 * stay clickable.
 *
 * `phase` drives the in-scene choreography (not a CSS transform):
 *   idle      — full sphere at origin
 *   form      — cluster drifts to the right, shrinks slightly
 *   analyzing — cluster pulls back to center and tightens further
 *
 * Each phase change also kicks a one-shot "scatter burst" — the shader's
 * noise frequency spikes then decays, so particles visually dissolve
 * then re-form at the new size/position instead of sliding as a rigid block.
 */
export function FBOParticlesBg({ phase = "idle" }: { phase?: FBOPhase }) {
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {reduceMotion ? (
        // Static fallback for users who've asked their OS to dial down
        // motion — a subtle radial glow that hints at the particle
        // cluster without animating (or mounting WebGL) at all.
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, rgba(201,169,110,0.18) 0%, rgba(184,150,11,0.06) 40%, transparent 70%)",
          }}
        />
      ) : (
        <FBOParticlesScene phase={phase} />
      )}
    </div>
  );
}
