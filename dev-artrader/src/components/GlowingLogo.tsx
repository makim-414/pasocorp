"use client";
import { useEffect, useState } from "react";

export default function GlowingLogo() {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const animate = (ts: number) => {
      if (!start) start = ts;
      setPulse((ts - start) / 1000);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Slow on/off breathing — goes from ~0.05 (nearly off) to ~0.6 (bright)
  const glow = 0.05 + 0.55 * (0.5 + 0.5 * Math.sin(pulse * 0.8));
  const scale = 1.3 + 0.2 * Math.sin(pulse * 0.8);
  const shadow = 10 + 30 * glow;

  return (
    <div className="relative w-28 h-28 md:w-32 md:h-32">
      {/* Glow — single layer, on/off breathing */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle, rgba(74,222,128,${glow}) 0%, rgba(74,222,128,${glow * 0.3}) 50%, transparent 75%)`,
          transform: `scale(${scale})`,
          filter: "blur(18px)",
        }}
      />

      {/* Logo card */}
      <div
        className="relative w-full h-full bg-[#111] border border-[#2a2a2a] rounded-2xl flex items-center justify-center"
        style={{
          boxShadow: `0 0 ${shadow}px rgba(74,222,128,${glow * 0.5})`,
        }}
      >
        <span className="text-4xl md:text-5xl font-bold">
          <span className="text-[#4ade80]">A</span>
        </span>
      </div>
    </div>
  );
}
