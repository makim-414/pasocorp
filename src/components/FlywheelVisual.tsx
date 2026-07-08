"use client";

import { motion, useAnimationFrame, useMotionValue, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";

/**
 * PASO ecosystem as a dimensional orbital map: five brand nodes orbit the
 * PASO core on a tilted elliptical plane. Depth is expressed through scale,
 * opacity, and z-order as nodes pass in front of / behind the core.
 * Hovering a node pauses the orbit and reveals its synergy links.
 */

const NODES = [
  { id: "gallery", name: "Gallery", accent: "#e0c097", phase: 0 },
  { id: "artcenter", name: "Art Center", accent: "#a0522d", phase: (Math.PI * 2) / 5 },
  { id: "artrader", name: "Artrader", accent: "#22c55e", phase: (Math.PI * 4) / 5 },
  { id: "artledger", name: "Artledger", accent: "#8b5cf6", phase: (Math.PI * 6) / 5 },
  { id: "agency", name: "Agency", accent: "#06b6d4", phase: (Math.PI * 8) / 5 },
];

const CONNECTIONS = [
  { from: "artrader", to: "gallery", key: "flywheel.conn.market_data" },
  { from: "artrader", to: "artcenter", key: "flywheel.conn.value_analysis" },
  { from: "agency", to: "artcenter", key: "flywheel.conn.ip_supply" },
  { from: "agency", to: "gallery", key: "flywheel.conn.art_toy" },
  { from: "artledger", to: "artcenter", key: "flywheel.conn.advisory" },
  { from: "artledger", to: "gallery", key: "flywheel.conn.collector_support" },
  { from: "gallery", to: "artrader", key: "flywheel.conn.primary_data" },
  { from: "artcenter", to: "artrader", key: "flywheel.conn.secondary_market" },
];

// Orbit geometry (design-box units; the box scales responsively)
const RX = 185;
const RY = 74;
const SPEED = 0.22; // radians / second

function OrbitNode({
  node,
  angleRef,
  active,
  anyActive,
  onEnter,
  onLeave,
  shortLabel,
}: {
  node: (typeof NODES)[number];
  angleRef: React.MutableRefObject<number>;
  active: boolean;
  anyActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
  shortLabel: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const opacity = useMotionValue(1);
  const zIndex = useMotionValue(10);

  useAnimationFrame(() => {
    const a = angleRef.current + node.phase;
    const sin = Math.sin(a);
    x.set(Math.cos(a) * RX);
    y.set(sin * RY);
    const depth = (sin + 1) / 2; // 0 = far, 1 = near
    scale.set(0.78 + depth * 0.38);
    opacity.set(anyActive && !active ? 0.35 : 0.55 + depth * 0.45);
    zIndex.set(sin > 0 ? 20 : 5);
  });

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 cursor-pointer"
      style={{ x, y, scale, opacity, zIndex, translateX: "-50%", translateY: "-50%" }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        className="w-[104px] h-[104px] rounded-full border flex flex-col items-center justify-center backdrop-blur-sm transition-[border-color,box-shadow,background-color] duration-300"
        style={{
          borderColor: active ? `${node.accent}66` : "rgba(255,255,255,0.16)",
          backgroundColor: active ? `${node.accent}14` : "rgba(0,0,0,0.65)",
          boxShadow: active
            ? `0 0 24px ${node.accent}40, 0 0 48px ${node.accent}1f`
            : "0 8px 24px rgba(0,0,0,0.5)",
        }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full mb-1"
          style={{ backgroundColor: active ? node.accent : "rgba(255,255,255,0.3)" }}
        />
        <span className="text-[11px] text-white/90 text-center leading-tight font-light">{node.name}</span>
        <span className="text-[9px] text-white/55 text-center mt-0.5">{shortLabel}</span>
      </div>
    </motion.div>
  );
}

export default function FlywheelVisual({ defaultActive }: { defaultActive?: string } = {}) {
  const [hovered, setHovered] = useState<string | null>(null);
  const active = hovered ?? defaultActive ?? null;
  const angleRef = useRef(-Math.PI / 2);
  const pausedRef = useRef(false);
  const { t } = useLocale();

  pausedRef.current = hovered !== null;

  useAnimationFrame((_, delta) => {
    if (!pausedRef.current) angleRef.current += (delta / 1000) * SPEED;
  });

  const shortLabels: Record<string, string> = {
    gallery: t("flywheel.gallery.short"),
    artcenter: t("flywheel.artcenter.short"),
    artrader: t("flywheel.artrader.short"),
    artledger: t("flywheel.artledger.short"),
    agency: t("flywheel.agency.short"),
  };
  const nodeNames = Object.fromEntries(NODES.map((n) => [n.id, n.name]));
  const nodeAccents = Object.fromEntries(NODES.map((n) => [n.id, n.accent]));
  const activeConns = active
    ? CONNECTIONS.filter((c) => c.from === active || c.to === active)
    : [];

  return (
    <div className="bg-black p-4 md:p-8 min-h-[420px] md:min-h-[520px] flex flex-col items-center justify-center">
      <div className="relative w-full max-w-[500px] mx-auto" style={{ aspectRatio: "5/3.4", perspective: 1100 }}>
        {/* Orbital plane rings */}
        <div
          className="absolute left-1/2 top-1/2 rounded-[50%] border border-[#b8960b]/25"
          style={{ width: RX * 2 + 30, height: RY * 2 + 14, transform: "translate(-50%, -50%)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 rounded-[50%] border border-dashed border-white/[0.08]"
          style={{ width: RX * 2 + 90, height: RY * 2 + 44, transform: "translate(-50%, -50%)" }}
        />
        {/* Plane glow */}
        <div
          className="absolute left-1/2 top-1/2 rounded-[50%] pointer-events-none"
          style={{
            width: RX * 2 + 30,
            height: RY * 2 + 14,
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse at center, rgba(184,150,11,0.10) 0%, transparent 65%)",
          }}
        />

        {/* Core */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-[92px] h-[92px] rounded-full border flex items-center justify-center"
          style={{ translateX: "-50%", translateY: "-50%", zIndex: 10, borderColor: "rgba(184,150,11,0.45)", backgroundColor: "rgba(184,150,11,0.08)" }}
          animate={{
            boxShadow: [
              "0 0 24px rgba(184,150,11,0.18), 0 0 64px rgba(184,150,11,0.08)",
              "0 0 36px rgba(184,150,11,0.32), 0 0 90px rgba(184,150,11,0.14)",
              "0 0 24px rgba(184,150,11,0.18), 0 0 64px rgba(184,150,11,0.08)",
            ],
          }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm tracking-[0.25em] text-[#b8960b] font-light">PASO</span>
        </motion.div>

        {/* Orbiting brand nodes */}
        {NODES.map((node) => (
          <OrbitNode
            key={node.id}
            node={node}
            angleRef={angleRef}
            active={active === node.id}
            anyActive={active !== null}
            onEnter={() => setHovered(node.id)}
            onLeave={() => setHovered(null)}
            shortLabel={shortLabels[node.id]}
          />
        ))}

        {/* Synergy tooltip */}
        <AnimatePresence>
          {hovered && activeConns.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-30"
              style={{ bottom: -24 }}
            >
              <div className="bg-black/80 border border-white/[0.12] backdrop-blur-md rounded-md px-4 py-2.5 min-w-[250px]">
                <p className="text-[10px] tracking-[0.15em] uppercase mb-2 text-center" style={{ color: nodeAccents[hovered] }}>
                  {nodeNames[hovered]} {t("flywheel.synergy")}
                </p>
                <div className="space-y-1">
                  {activeConns.map((conn, i) => {
                    const target = conn.from === hovered ? conn.to : conn.from;
                    const direction = conn.from === hovered ? "→" : "←";
                    return (
                      <p key={i} className="text-[10px] text-white/60 font-light">
                        <span className="text-white/35">{direction}</span>{" "}
                        <span style={{ color: nodeAccents[target] }}>{nodeNames[target]}</span>{" "}
                        {t(conn.key)}
                      </p>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="mt-6 text-[9px] tracking-[0.2em] uppercase text-[#b8960b]/70">
        PASO Integrated Ecosystem
      </p>
    </div>
  );
}
