"use client";
import { useEffect, useState } from "react";

export default function GlowingLogo() {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const elapsed = (ts - start) / 1000;
      setPulse(elapsed);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Breathing glow intensities
  const r1 = 0.5 + 0.25 * Math.sin(pulse * 1.2);
  const r2 = 0.4 + 0.3 * Math.sin(pulse * 0.8 + 1);
  const r3 = 0.45 + 0.15 * Math.sin(pulse * 1.5 + 2);

  // Flash burst — strong pulse every ~3s
  const burstCycle = (pulse % 3) / 3; // 0→1 over 3s
  const burstIntensity = burstCycle < 0.15 ? Math.sin(burstCycle / 0.15 * Math.PI) : 0;

  // Sparkle positions around the logo
  const sparkles = [
    { cx: 18, cy: 12, delay: 0 },
    { cx: 82, cy: 18, delay: 0.5 },
    { cx: 12, cy: 78, delay: 1.0 },
    { cx: 88, cy: 82, delay: 1.5 },
    { cx: 50, cy: 2, delay: 0.3 },
    { cx: 50, cy: 98, delay: 0.8 },
    { cx: 2, cy: 50, delay: 1.2 },
    { cx: 98, cy: 50, delay: 1.8 },
    { cx: 30, cy: 5, delay: 0.6 },
    { cx: 70, cy: 5, delay: 1.1 },
    { cx: 30, cy: 95, delay: 1.4 },
    { cx: 70, cy: 95, delay: 0.2 },
  ];

  return (
    <div className="relative w-28 h-28 md:w-32 md:h-32">
      {/* Outermost soft glow — large and diffuse */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle, rgba(74,222,128,${r1 + burstIntensity * 0.4}) 0%, rgba(74,222,128,0.08) 50%, transparent 75%)`,
          transform: `scale(${1.8 + 0.15 * Math.sin(pulse * 1.0) + burstIntensity * 0.3})`,
          filter: "blur(24px)",
        }}
      />
      {/* Mid glow — breathing */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle, rgba(74,222,128,${r2 + burstIntensity * 0.3}) 0%, transparent 65%)`,
          transform: `scale(${1.4 + 0.1 * Math.sin(pulse * 1.4 + 0.5) + burstIntensity * 0.2})`,
          filter: "blur(14px)",
        }}
      />
      {/* Inner glow — tight and bright */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle, rgba(74,222,128,${r3 + burstIntensity * 0.5}) 0%, transparent 55%)`,
          transform: `scale(${1.15 + 0.06 * Math.sin(pulse * 1.8 + 1) + burstIntensity * 0.15})`,
          filter: "blur(6px)",
        }}
      />

      {/* Flash burst ring */}
      {burstIntensity > 0.01 && (
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            border: `2px solid rgba(74,222,128,${burstIntensity * 0.6})`,
            transform: `scale(${1.3 + burstIntensity * 0.5})`,
            opacity: burstIntensity,
          }}
        />
      )}

      {/* Sparkles */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" style={{ transform: "scale(1.9)" }}>
        {sparkles.map((s, i) => {
          const sparkPhase = Math.sin(pulse * 2.5 + s.delay * Math.PI * 1.3);
          const opacity = 0.15 + 0.85 * Math.max(0, sparkPhase);
          const size = 0.8 + 1.2 * Math.max(0, sparkPhase);
          // Only render when visible
          if (opacity < 0.1) return null;
          return (
            <g key={i} opacity={opacity}>
              {/* Cross sparkle */}
              <line x1={s.cx - size * 3} y1={s.cy} x2={s.cx + size * 3} y2={s.cy} stroke="#4ade80" strokeWidth="0.4" />
              <line x1={s.cx} y1={s.cy - size * 3} x2={s.cx} y2={s.cy + size * 3} stroke="#4ade80" strokeWidth="0.4" />
              {/* Diagonal sparkle */}
              <line x1={s.cx - size * 1.5} y1={s.cy - size * 1.5} x2={s.cx + size * 1.5} y2={s.cy + size * 1.5} stroke="#4ade80" strokeWidth="0.3" opacity="0.6" />
              <line x1={s.cx + size * 1.5} y1={s.cy - size * 1.5} x2={s.cx - size * 1.5} y2={s.cy + size * 1.5} stroke="#4ade80" strokeWidth="0.3" opacity="0.6" />
              {/* Center dot */}
              <circle cx={s.cx} cy={s.cy} r={size * 0.5} fill="#4ade80" />
              {/* Outer glow dot */}
              <circle cx={s.cx} cy={s.cy} r={size * 1.2} fill="rgba(74,222,128,0.15)" />
            </g>
          );
        })}
      </svg>

      {/* Logo card */}
      <div
        className="relative w-full h-full bg-[#111] border border-[#2a2a2a] rounded-2xl flex items-center justify-center shadow-lg"
        style={{
          boxShadow: `0 0 ${20 + burstIntensity * 30}px rgba(74,222,128,${0.15 + burstIntensity * 0.3}), 0 0 ${40 + burstIntensity * 60}px rgba(74,222,128,${0.05 + burstIntensity * 0.15})`,
        }}
      >
        <span className="text-4xl md:text-5xl font-bold">
          <span className="text-[#4ade80]">A</span>
        </span>
      </div>
    </div>
  );
}
