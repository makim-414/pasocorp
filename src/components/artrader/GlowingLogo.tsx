"use client";
import { useEffect, useState } from "react";

export default function GlowingLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
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

  const r1 = 0.4 + 0.15 * Math.sin(pulse * 1.2);
  const r2 = 0.3 + 0.2 * Math.sin(pulse * 0.8 + 1);
  const r3 = 0.35 + 0.1 * Math.sin(pulse * 1.5 + 2);
  const sparkles = [
    { cx: 20, cy: 15, delay: 0 },
    { cx: 80, cy: 20, delay: 0.5 },
    { cx: 15, cy: 75, delay: 1.0 },
    { cx: 85, cy: 80, delay: 1.5 },
    { cx: 50, cy: 5, delay: 0.3 },
    { cx: 50, cy: 95, delay: 0.8 },
    { cx: 5, cy: 50, delay: 1.2 },
    { cx: 95, cy: 50, delay: 1.8 },
  ];

  const sizeClass = size === "lg" ? "w-36 h-36 md:w-40 md:h-40" : size === "sm" ? "w-20 h-20" : "w-28 h-28 md:w-32 md:h-32";
  const textClass = size === "lg" ? "text-5xl md:text-6xl" : size === "sm" ? "text-3xl" : "text-4xl md:text-5xl";

  return (
    <div className={`relative ${sizeClass}`}>
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle, rgba(74,222,128,${r1}) 0%, rgba(74,222,128,0.05) 60%, transparent 80%)`,
          transform: `scale(${1.6 + 0.1 * Math.sin(pulse * 1.0)})`,
          filter: "blur(20px)",
        }}
      />
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle, rgba(74,222,128,${r2}) 0%, transparent 70%)`,
          transform: `scale(${1.3 + 0.08 * Math.sin(pulse * 1.4 + 0.5)})`,
          filter: "blur(12px)",
        }}
      />
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle, rgba(74,222,128,${r3}) 0%, transparent 60%)`,
          transform: `scale(${1.1 + 0.05 * Math.sin(pulse * 1.8 + 1)})`,
          filter: "blur(6px)",
        }}
      />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" style={{ transform: "scale(1.8)" }}>
        {sparkles.map((s, i) => {
          const opacity = 0.3 + 0.7 * Math.max(0, Math.sin(pulse * 2 + s.delay * Math.PI));
          const sSize = 1 + 0.8 * Math.max(0, Math.sin(pulse * 2 + s.delay * Math.PI));
          return (
            <g key={i} opacity={opacity}>
              <line x1={s.cx - sSize * 2} y1={s.cy} x2={s.cx + sSize * 2} y2={s.cy} stroke="#4ade80" strokeWidth="0.5" />
              <line x1={s.cx} y1={s.cy - sSize * 2} x2={s.cx} y2={s.cy + sSize * 2} stroke="#4ade80" strokeWidth="0.5" />
              <circle cx={s.cx} cy={s.cy} r={sSize * 0.4} fill="#4ade80" />
            </g>
          );
        })}
      </svg>

      <div className="relative w-full h-full bg-[#111] border border-[#2a2a2a] rounded-2xl flex items-center justify-center shadow-lg shadow-[#4ade80]/10">
        <span className={`${textClass} font-bold`}>
          <span className="text-[#4ade80]">A</span>
        </span>
      </div>
    </div>
  );
}
