"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

const services = [
  {
    tag: "Artrader",
    title: "Data & Intelligence",
    desc: "국내외 경매·Private Sales 등 1,500만 건 이상 거래 데이터. Artist Index, 종목분석서 스타일 정량 리포트.",
    color: "#b8960b",
  },
  {
    tag: "Artledger",
    title: "Advisory & Tax",
    desc: "증여·상속, 법인 비용·감가, 컬렉션 관리. Review → Valuation → Strategy → Execute.",
    color: "#9ca3af",
  },
  {
    tag: "Paso Gallery · Art Center",
    title: "Exhibition & Primary Market",
    desc: "국내 신진작가 공모전, 글로벌 이머징 작가 전시, 적정가 2차 시장 Top 30 작품 전시.",
    color: "#1e3a5f",
  },
  {
    tag: "Paso Agency",
    title: "IP & Brand Collaboration",
    desc: "프랜차이즈 브랜드 아트 프로젝트, 캐릭터 IP 라이선싱, 아트토이·스트릿 아트 매입.",
    color: "#d4a574",
  },
];

const titleWords = "What We Do".split(" ");

function SpotlightCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -8 }}
      className="relative bg-[#0a0a0a] border border-[#1a1a1a] p-8 md:p-10 overflow-hidden group transition-all duration-500 hover:border-white/[0.06] hover:shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
      style={
        {
          "--spotlight-x": "50%",
          "--spotlight-y": "50%",
          "--card-color": service.color,
        } as React.CSSProperties
      }
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at var(--spotlight-x) var(--spotlight-y), ${service.color}26, transparent 60%)`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ borderColor: `${service.color}4d` }}
      />
      <p className="text-[10px] tracking-[0.2em] uppercase mb-4 relative z-10 transition-colors duration-500" style={{ color: service.color }}>
        {service.tag}
      </p>
      <h3 className="text-xl md:text-2xl font-light text-white mb-3 relative z-10" style={{ fontFamily: "var(--font-dutch)" }}>
        {service.title}
      </h3>
      <p className="text-sm text-[#888] font-light leading-relaxed relative z-10 group-hover:-translate-y-0.5 transition-transform duration-500">
        {service.desc}
      </p>
      <div
        className="mt-6 w-0 group-hover:w-12 h-px transition-all duration-500 relative z-10"
        style={{ backgroundColor: service.color }}
      />
    </motion.div>
  );
}

export default function Services() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
          {services.map((s, i) => (
            <SpotlightCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
