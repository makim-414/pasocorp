"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    tag: "ARTRADER",
    title: "Data & Intelligence",
    desc: "국내외 경매·Private Sales 등 1,500만 건 이상 거래 데이터. Artist Index, 종목분석서 스타일 정량 리포트.",
    color: "#b8960b",
  },
  {
    tag: "ARTLEDGER",
    title: "Advisory & Tax",
    desc: "증여·상속, 법인 비용·감가, 컬렉션 관리. Review → Valuation → Strategy → Execute.",
    color: "#9ca3af",
  },
  {
    tag: "PASO GALLERY · ART CENTER",
    title: "Exhibition & Primary Market",
    desc: "국내 신진작가 공모전, 글로벌 이머징 작가 전시, 적정가 2차 시장 Top 30 작품 전시.",
    color: "#1e3a5f",
  },
  {
    tag: "PASO AGENCY",
    title: "IP & Brand Collaboration",
    desc: "프랜차이즈 브랜드 아트 프로젝트, 캐릭터 IP 라이선싱, 아트토이·스트릿 아트 매입.",
    color: "#d4a574",
  },
];

const titleWords = "What We Do".split(" ");

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 md:py-40 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4"
        >
          Capabilities
        </motion.p>
        <h2 className="text-3xl md:text-5xl font-light text-white mb-16" style={{ fontFamily: "var(--font-dutch)" }}>
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Horizontal expanding cards */}
        <div className="hidden md:flex gap-2 h-[400px]">
          {services.map((s, i) => {
            const isHovered = hovered === i;
            const hasHover = hovered !== null;
            return (
              <motion.div
                key={s.tag}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                animate={{
                  flex: isHovered ? 3 : hasHover ? 0.8 : 1,
                }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="relative overflow-hidden border border-[#1a1a1a] bg-[#0a0a0a] cursor-pointer flex flex-col justify-end p-8"
                style={{ minWidth: 0 }}
              >
                {/* Hover glow */}
                <motion.div
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(to top, ${s.color}15, transparent 60%)`,
                  }}
                />
                <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: isHovered ? s.color : 'transparent', transition: 'background-color 0.5s' }} />

                <div className="relative z-10">
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase mb-3 transition-colors duration-500"
                    style={{ color: s.color }}
                  >
                    {s.tag}
                  </p>
                  <h3
                    className="text-xl font-light text-white mb-3 transition-all duration-500"
                    style={{ fontFamily: "var(--font-dutch)" }}
                  >
                    {s.title}
                  </h3>
                  <AnimatePresence>
                    {isHovered && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-[#888] font-light leading-relaxed max-w-md"
                      >
                        {s.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <div
                    className="mt-4 h-px transition-all duration-500"
                    style={{
                      backgroundColor: s.color,
                      width: isHovered ? '3rem' : '0',
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-[#1a1a1a] bg-[#0a0a0a] p-8"
            >
              <p className="text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: s.color }}>{s.tag}</p>
              <h3 className="text-xl font-light text-white mb-3" style={{ fontFamily: "var(--font-dutch)" }}>{s.title}</h3>
              <p className="text-sm text-[#888] font-light leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Available for events note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-xs tracking-[0.1em] uppercase text-[#555]"
        >
          Available for private events & exhibitions
        </motion.p>
      </div>
    </section>
  );
}
