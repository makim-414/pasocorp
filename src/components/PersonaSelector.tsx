"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const personas = [
  {
    label: "Corporate",
    title: "법인 미술 자산이 필요하신가요?",
    desc: "증여·상속, 법인세 절감, 포트폴리오 구축",
    links: [
      { name: "Artrader", href: "/brands/artrader" },
      { name: "Artledger Consulting", href: "/brands/artledger-consulting" },
    ],
  },
  {
    label: "Brand",
    title: "브랜드 × 아트 콜라보를 계획 중이신가요?",
    desc: "캐릭터 IP, 팝업 전시, 브랜드 행사 공간",
    links: [
      { name: "Paso Agency", href: "/brands/paso-agency" },
      { name: "Paso Gallery", href: "https://pasogallery.com" },
    ],
  },
  {
    label: "Collector",
    title: "미술 시장에 진입하고 싶으신가요?",
    desc: "1,500만 건 거래 데이터, 신진작가 컬렉션",
    links: [
      { name: "Artrader", href: "/brands/artrader" },
      { name: "PASO Art Center", href: "/brands/paso-art-center" },
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function PersonaSelector() {
  return (
    <section className="py-24 md:py-32 bg-black border-t border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div {...fadeUp} className="text-center mb-14">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">For You</p>
          <h2 className="text-2xl md:text-4xl font-light text-white">어떤 도움이 필요하신가요?</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border border-[#1a1a1a] rounded-xl p-8 hover:border-[#b8960b]/50 transition-all duration-500 hover:-translate-y-1"
            >
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">{p.label}</p>
              <h3 className="text-lg text-white font-light mb-3 leading-snug">{p.title}</h3>
              <p className="text-sm text-[#888] font-light mb-8">{p.desc}</p>
              <div className="flex flex-col gap-2">
                {p.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    className="flex items-center justify-between text-sm text-[#ccc] font-light py-2 border-b border-[#1a1a1a] group-hover:border-[#333] transition-colors hover:text-[#b8960b]"
                  >
                    {link.name}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-40"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
