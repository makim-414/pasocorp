"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.6, delay: i * 0.1 } });

const locations = [
  { name: "Office", address: "서울특별시 성북구 삼선교로23가길 72", detail: "인터블루 빌딩 1F-3F", mapQuery: "서울특별시 성북구 삼선교로23가길 72" },
  { name: "Gallery", address: "서울특별시 종로구 성균관로 92", detail: "한옥 빌딩", mapQuery: "서울특별시 종로구 성균관로 92" },
  { name: "Art Center", address: "서울특별시 강서구 마곡중앙4로 66, 2층", detail: "with Mass C&G", mapQuery: "서울특별시 강서구 마곡중앙4로 66" },
];

const contacts = [
  { label: "Email", value: "info@pasogallery.com", href: "mailto:info@pasogallery.com" },
  { label: "Phone", value: "+82 2-925-3631", href: "tel:+8229253631" },
];

const inquiries = [
  { title: "전시 & 대관", desc: "갤러리 전시, 팝업, 이벤트 공간 대관 문의" },
  { title: "자문 서비스", desc: "미술품 절세, 자산관리, 컬렉팅 자문" },
  { title: "브랜드 협업", desc: "캐릭터 IP, 아트 프로젝트 콜라보레이션" },
  { title: "데이터 & 리포트", desc: "Artrader 플랫폼, Artist Index 구독" },
];

export default function ContactContent() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Contact</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-light text-white mb-6"
            style={{ fontFamily: "var(--font-dutch)" }}
          >
            Get in Touch
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg text-[#888] font-light max-w-xl">
            프로젝트 문의, 협업 제안, 또는 더 알고 싶은 내용이 있다면 연락주세요.
          </motion.p>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-16 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map((c, i) => (
            <motion.div key={c.label} {...stagger(i)} className="text-center py-4">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#555] mb-3">{c.label}</p>
              {c.href ? (
                <a href={c.href} className="text-lg text-white font-light hover:text-[#b8960b] transition-colors" style={{ fontFamily: "var(--font-dutch)" }}>{c.value}</a>
              ) : (
                <p className="text-lg text-white font-light" style={{ fontFamily: "var(--font-dutch)" }}>{c.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Inquiry types */}
      <section className="py-24 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p {...fadeUp} className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Inquiries</motion.p>
          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-light text-white mb-14" style={{ fontFamily: "var(--font-dutch)" }}>How Can We Help?</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inquiries.map((item, i) => (
              <motion.a
                key={item.title}
                href="mailto:info@pasogallery.com"
                {...stagger(i)}
                className="block border border-[#1a1a1a] p-8 hover:border-[#333] transition-colors group"
              >
                <h3 className="text-lg text-white font-normal mb-2 group-hover:text-[#b8960b] transition-colors">{item.title}</h3>
                <p className="text-sm text-[#888] font-light">{item.desc}</p>
                <div className="mt-4 w-0 group-hover:w-10 h-px bg-[#b8960b] transition-all duration-500" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-[#0a0a0a] border-t border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p {...fadeUp} className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Locations</motion.p>
          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-light text-white mb-14" style={{ fontFamily: "var(--font-dutch)" }}>Find Us</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                {...stagger(i)}
                onClick={() => setSelectedLocation(selectedLocation === loc.name ? null : loc.name)}
                className={`border p-8 cursor-pointer transition-colors duration-300 ${selectedLocation === loc.name ? "border-[#b8960b]/50 bg-[#b8960b]/5" : "border-[#1a1a1a] hover:border-[#333]"}`}
              >
                <p className="text-xs tracking-[0.15em] uppercase text-[#b8960b] mb-4">{loc.name}</p>
                <p className="text-sm text-white font-light mb-1">{loc.address}</p>
                <p className="text-sm text-[#555] font-light">{loc.detail}</p>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedLocation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden mt-8"
              >
                <div className="border border-[#1a1a1a] rounded-lg overflow-hidden">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(locations.find((l) => l.name === selectedLocation)?.mapQuery || "")}&output=embed&hl=ko`}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${selectedLocation} 지도`}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
