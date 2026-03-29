"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const brands = [
  { id: "artrader", name: "Artrader", short: "데이터 · 분석", accent: "#22c55e", angle: -90 },
  { id: "artledger", name: "Artledger", short: "자문 · 절세", accent: "#8b5cf6", angle: -18 },
  { id: "artcenter", name: "Art Center", short: "전시 · 커뮤니티", accent: "#b8960b", angle: 54 },
  { id: "gallery", name: "Gallery", short: "신진작가 · MD", accent: "#e0c097", angle: 126 },
  { id: "agency", name: "Agency", short: "IP · 브랜드", accent: "#06b6d4", angle: 198 },
];

// Connections: from → to, with description
const connections = [
  { from: "artrader", to: "gallery", label: "시장 데이터 제공", color: "#22c55e" },
  { from: "artrader", to: "artcenter", label: "가치 분석 보완", color: "#22c55e" },
  { from: "agency", to: "artcenter", label: "IP 작가 전시 공급", color: "#06b6d4" },
  { from: "agency", to: "gallery", label: "아트토이 콜라보", color: "#06b6d4" },
  { from: "artledger", to: "artcenter", label: "고객 자산 자문", color: "#8b5cf6" },
  { from: "artledger", to: "gallery", label: "컬렉터 인수 지원", color: "#8b5cf6" },
  { from: "gallery", to: "artrader", label: "1차 시장 거래 데이터", color: "#e0c097" },
  { from: "artcenter", to: "artrader", label: "2차 시장 매물 연결", color: "#b8960b" },
];

function getPos(angle: number, r: number, cx: number, cy: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export default function FlywheelVisual({ defaultActive }: { defaultActive?: string } = {}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [hovered, setHovered] = useState<string | null>(null);
  const active = hovered ?? defaultActive ?? null;

  const R = 170;
  const CX = 230;
  const CY = 230;
  const SIZE = 460;

  const brandMap = Object.fromEntries(brands.map((b) => [b.id, b]));
  const activeConns = active
    ? connections.filter((c) => c.from === active || c.to === active)
    : [];

  return (
    <div ref={ref} className="bg-black p-4 md:p-8 min-h-[420px] md:min-h-[520px] flex flex-col items-center justify-center">
      <div className="relative w-full max-w-[460px] mx-auto" style={{ aspectRatio: "1/1" }}>
        <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${SIZE} ${SIZE}`}>
          {/* Orbit ring */}
          <motion.circle
            cx={CX} cy={CY} r={R}
            fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          />

          {/* All connections (dim) */}
          {connections.map((conn, i) => {
            const from = getPos(brandMap[conn.from].angle, R, CX, CY);
            const to = getPos(brandMap[conn.to].angle, R, CX, CY);
            const isHighlighted = active && (conn.from === active || conn.to === active);
            const isFromActive = conn.from === active;

            // Curved path via center offset
            const mx = (from.x + to.x) / 2 + (CX - (from.x + to.x) / 2) * 0.3;
            const my = (from.y + to.y) / 2 + (CY - (from.y + to.y) / 2) * 0.3;

            return (
              <g key={`${conn.from}-${conn.to}-${i}`}>
                <motion.path
                  d={`M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`}
                  fill="none"
                  strokeWidth={isHighlighted ? 1.5 : 0.3}
                  animate={{
                    stroke: isHighlighted ? conn.color : "rgba(255,255,255,0.06)",
                    opacity: active ? (isHighlighted ? 0.7 : 0.03) : 0.08,
                  }}
                  transition={{ duration: 0.3 }}
                />
                {/* Animated flow dot */}
                {isHighlighted && (
                  <motion.circle
                    r="3"
                    fill={conn.color}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <animateMotion
                      dur="2s"
                      repeatCount="indefinite"
                      path={isFromActive
                        ? `M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`
                        : `M ${to.x} ${to.y} Q ${mx} ${my} ${from.x} ${from.y}`
                      }
                    />
                  </motion.circle>
                )}
              </g>
            );
          })}
        </svg>

        {/* Center PASO node */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute"
          style={{ left: `${((CX - 40) / SIZE) * 100}%`, top: `${((CY - 40) / SIZE) * 100}%`, width: `${(80 / SIZE) * 100}%`, height: `${(80 / SIZE) * 100}%` }}
        >
          <div className="w-full h-full rounded-full border border-[#b8960b]/20 bg-[#b8960b]/5 flex items-center justify-center">
            <span className="text-sm tracking-[0.25em] text-[#b8960b]/80 font-light">PASO</span>
          </div>
        </motion.div>

        {/* Brand nodes */}
        {brands.map((brand, i) => {
          const pos = getPos(brand.angle, R, CX, CY);
          const isActive = active === brand.id;
          const isConnected = active ? connections.some(
            (c) => (c.from === active && c.to === brand.id) || (c.to === active && c.from === brand.id)
          ) : false;
          const dimmed = active !== null && !isActive && !isConnected;

          return (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 + 0.5 }}
              className="absolute cursor-pointer"
              style={{ left: `${((pos.x - 52) / SIZE) * 100}%`, top: `${((pos.y - 52) / SIZE) * 100}%`, width: `${(104 / SIZE) * 100}%`, height: `${(104 / SIZE) * 100}%` }}
              onMouseEnter={() => setHovered(brand.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <motion.div
                animate={{
                  scale: isActive ? 1.18 : 1,
                  borderColor: isActive ? `${brand.accent}40` : dimmed ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.07)",
                  backgroundColor: isActive ? `${brand.accent}0D` : "rgba(0,0,0,0.6)",
                  opacity: dimmed ? 0.3 : 1,
                  boxShadow: isActive
                    ? `0 0 20px ${brand.accent}30, 0 0 40px ${brand.accent}15, inset 0 0 15px ${brand.accent}10`
                    : "0 0 0px transparent",
                }}
                transition={{ duration: 0.4 }}
                className="w-full h-full rounded-full border flex flex-col items-center justify-center backdrop-blur-sm"
              >
                <motion.div
                  animate={{ backgroundColor: isActive || isConnected ? brand.accent : "rgba(255,255,255,0.15)" }}
                  className="w-1.5 h-1.5 rounded-full mb-1"
                />
                <span className="text-[11px] text-white/70 text-center leading-tight font-light">{brand.name}</span>
                <span className="text-[9px] text-white/30 text-center mt-0.5">{brand.short}</span>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Connection labels tooltip — only on hover */}
        <AnimatePresence>
          {hovered && activeConns.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
              style={{ bottom: -16 }}
            >
              <div className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-md rounded-md px-4 py-2.5 min-w-[240px]">
                <p className="text-[10px] tracking-[0.15em] uppercase mb-2 text-center" style={{ color: brandMap[hovered!]?.accent }}>
                  {brandMap[hovered!]?.name} 시너지
                </p>
                <div className="space-y-1">
                  {activeConns.map((conn, i) => {
                    const target = conn.from === hovered ? conn.to : conn.from;
                    const direction = conn.from === hovered ? "→" : "←";
                    return (
                      <p key={i} className="text-[10px] text-white/50 font-light">
                        <span className="text-white/30">{direction}</span>{" "}
                        <span style={{ color: brandMap[target]?.accent }}>{brandMap[target]?.name}</span>{" "}
                        {conn.label}
                      </p>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        className="mt-2 text-[9px] tracking-[0.2em] uppercase text-[#b8960b]/40"
      >
        PASO Integrated Ecosystem
      </motion.p>
    </div>
  );
}
