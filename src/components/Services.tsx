"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  FileText,
  Landmark,
  Palette,
  ArrowUpRight,
} from "lucide-react";

/* ───── data ───── */
const services = [
  {
    tag: "ARTRADER",
    title: "Data & Intelligence",
    desc: "국내외 경매·Private Sales 등 1,500만 건 이상 거래 데이터. Artist Index, 종목분석서 스타일 정량 리포트.",
    color: "#b8960b",
    Icon: BarChart3,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    tag: "ARTLEDGER",
    title: "Advisory & Tax",
    desc: "증여·상속, 법인 비용·감가, 컬렉션 관리. Review → Valuation → Strategy → Execute.",
    color: "#9ca3af",
    Icon: FileText,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    tag: "PASO GALLERY · ART CENTER",
    title: "Exhibition & Primary Market",
    desc: "국내 신진작가 공모전, 글로벌 이머징 작가 전시, 적정가 2차 시장 Top 30 작품 전시.",
    color: "#1e3a5f",
    Icon: Landmark,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    tag: "PASO AGENCY",
    title: "IP & Brand Collaboration",
    desc: "프랜차이즈 브랜드 아트 프로젝트, 캐릭터 IP 라이선싱, 아트토이·스트릿 아트 매입.",
    color: "#d4a574",
    Icon: Palette,
    span: "md:col-span-1 md:row-span-1",
  },
];

/* ───── component ───── */
export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-32 md:py-40 bg-black">
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* header */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.3em] uppercase text-[#b8960b] mb-4"
        >
          Capabilities
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-5xl font-light text-white mb-16"
          style={{ fontFamily: "var(--font-dutch)" }}
        >
          What We Do
        </motion.h2>

        {/* bento grid — desktop */}
        <div className="hidden md:grid md:grid-cols-3 md:auto-rows-[220px] gap-3">
          {services.map((s, i) => (
            <motion.div
              key={s.tag}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-2xl p-8",
                "bg-[#0a0a0a] border border-white/[0.06]",
                "transition-all duration-500 hover:border-white/[0.12]",
                s.span,
              )}
            >
              {/* top-line accent on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
                style={{ backgroundColor: s.color }}
              />

              {/* ambient glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 30% 100%, ${s.color}12 0%, transparent 70%)`,
                }}
              />

              {/* icon */}
              <div className="relative z-10">
                <s.Icon
                  className="w-8 h-8 mb-4 transition-all duration-500 group-hover:scale-90"
                  style={{ color: s.color }}
                  strokeWidth={1.2}
                />
              </div>

              {/* text */}
              <div className="relative z-10 flex flex-col gap-2">
                <p
                  className="text-[10px] tracking-[0.2em] uppercase transition-colors duration-500"
                  style={{ color: s.color }}
                >
                  {s.tag}
                </p>
                <h3
                  className="text-xl md:text-2xl font-light text-white"
                  style={{ fontFamily: "var(--font-dutch)" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-[#666] font-light leading-relaxed max-w-md group-hover:text-[#999] transition-colors duration-500">
                  {s.desc}
                </p>
              </div>

              {/* CTA arrow */}
              <div className="absolute top-6 right-6 z-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <ArrowUpRight className="w-5 h-5 text-white/40" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* mobile: stacked */}
        <div className="md:hidden grid grid-cols-1 gap-3">
          {services.map((s, i) => (
            <motion.div
              key={s.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0a0a] p-8"
            >
              <s.Icon
                className="w-7 h-7 mb-4"
                style={{ color: s.color }}
                strokeWidth={1.2}
              />
              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-2"
                style={{ color: s.color }}
              >
                {s.tag}
              </p>
              <h3
                className="text-xl font-light text-white mb-2"
                style={{ fontFamily: "var(--font-dutch)" }}
              >
                {s.title}
              </h3>
              <p className="text-sm text-[#666] font-light leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center text-xs tracking-[0.15em] uppercase text-[#444]"
        >
          Available for private events & exhibitions
        </motion.p>
      </div>
    </section>
  );
}
