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

const contacts = [
  { label: "Email", value: "info@pasogallery.com", href: "mailto:info@pasogallery.com" },
  { label: "Phone", value: "+82 2-925-3631", href: "tel:+8229253631" },
];

const inquiries = [
  { title: "전시 & 대관", desc: "갤러리 전시, 팝업, 이벤트 공간 대관 문의" },
  { title: "작가 협업", desc: "신진작가 공모, 레지던시, 전시 기획 협업" },
];

const location = {
  name: "Gallery",
  address: "서울특별시 종로구 성균관로 92",
  detail: "한옥 빌딩",
  mapQuery: "서울특별시 종로구 성균관로 92",
};

export default function GalleryContactContent() {
  const [showMap, setShowMap] = useState(false);

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
            전시 문의, 공간 대관, 작가 협업 등 파소 갤러리에 연락하세요.
          </motion.p>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-16 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map((c, i) => (
            <motion.div key={c.label} {...stagger(i)} className="text-center py-4">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#555] mb-3">{c.label}</p>
              <a href={c.href} className="text-lg text-white font-light hover:text-[#b8960b] transition-colors" style={{ fontFamily: "var(--font-dutch)" }}>{c.value}</a>
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
                <h3 className="text-lg text-white font-light mb-2 group-hover:text-[#b8960b] transition-colors" style={{ fontFamily: "var(--font-dutch)" }}>{item.title}</h3>
                <p className="text-sm text-[#888] font-light">{item.desc}</p>
                <div className="mt-4 w-0 group-hover:w-10 h-px bg-[#b8960b] transition-all duration-500" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 bg-[#0a0a0a] border-t border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div {...fadeUp}>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Space Rental</p>
              <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
                공간 대관 문의
              </h2>
              <p className="text-[#888] font-light leading-relaxed mb-8">
                서울 종로구에 위치한 한옥 갤러리에서 전시, 팝업, 프라이빗 이벤트를 진행해 보세요. 문의사항을 남겨주시면 담당자가 빠르게 연락드리겠습니다.
              </p>
              <div className="space-y-4 text-sm text-[#666] font-light">
                <div className="flex items-start gap-3">
                  <span className="text-[#b8960b] mt-0.5">—</span>
                  <p>전시, 팝업, 프라이빗 이벤트, 촬영 등 다양한 목적의 대관 가능</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#b8960b] mt-0.5">—</span>
                  <p>Light Room · Dark Room 두 개의 전시실 운영</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#b8960b] mt-0.5">—</span>
                  <p>전시 기획 및 설치 지원 서비스 제공</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const subject = encodeURIComponent("공간 대관 문의");
                  const body = encodeURIComponent(
                    `이름: ${formData.get("name")}\n연락처: ${formData.get("phone")}\n대관 요청 희망일: ${formData.get("date")}\n행사 유형: ${formData.get("eventType")}\n\n${formData.get("message")}`
                  );
                  window.open(`mailto:info@pasogallery.com?subject=${subject}&body=${body}`);
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#555] block mb-2">이름</label>
                    <input name="name" required type="text" placeholder="홍길동" className="w-full bg-transparent border-b border-[#333] focus:border-[#b8960b] text-white text-sm font-light py-3 outline-none transition-colors placeholder:text-[#444]" />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#555] block mb-2">이메일</label>
                    <input name="email" required type="email" placeholder="email@example.com" className="w-full bg-transparent border-b border-[#333] focus:border-[#b8960b] text-white text-sm font-light py-3 outline-none transition-colors placeholder:text-[#444]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#555] block mb-2">연락처</label>
                    <input name="phone" type="tel" placeholder="010-0000-0000" className="w-full bg-transparent border-b border-[#333] focus:border-[#b8960b] text-white text-sm font-light py-3 outline-none transition-colors placeholder:text-[#444]" />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#555] block mb-2">대관 요청 희망일</label>
                    <input name="date" type="date" className="w-full bg-transparent border-b border-[#333] focus:border-[#b8960b] text-white text-sm font-light py-3 outline-none transition-colors [color-scheme:dark]" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-[#555] block mb-2">행사 유형</label>
                  <select name="eventType" className="w-full bg-transparent border-b border-[#333] focus:border-[#b8960b] text-white text-sm font-light py-3 outline-none transition-colors [&>option]:bg-[#111]">
                    <option value="">선택해주세요</option>
                    <option value="전시">전시</option>
                    <option value="팝업">팝업</option>
                    <option value="프라이빗 이벤트">프라이빗 이벤트</option>
                    <option value="촬영">촬영</option>
                    <option value="기타">기타</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-[#555] block mb-2">메시지</label>
                  <textarea name="message" rows={4} placeholder="문의 내용을 입력해주세요" className="w-full bg-transparent border-b border-[#333] focus:border-[#b8960b] text-white text-sm font-light py-3 outline-none transition-colors resize-none placeholder:text-[#444]" />
                </div>
                <button type="submit" className="mt-4 px-8 py-3 border border-[#b8960b] text-[#b8960b] text-xs tracking-[0.15em] uppercase hover:bg-[#b8960b] hover:text-black transition-all duration-300">
                  문의하기
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-black border-t border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p {...fadeUp} className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Location</motion.p>
          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-light text-white mb-14" style={{ fontFamily: "var(--font-dutch)" }}>Find Us</motion.h2>
          <motion.div
            {...fadeUp}
            onClick={() => setShowMap(!showMap)}
            className={`border p-8 cursor-pointer transition-colors duration-300 max-w-md ${showMap ? "border-[#b8960b]/50 bg-[#b8960b]/5" : "border-[#1a1a1a] hover:border-[#333]"}`}
          >
            <p className="text-xs tracking-[0.15em] uppercase text-[#b8960b] mb-4">{location.name}</p>
            <p className="text-sm text-white font-light mb-1">{location.address}</p>
            <p className="text-sm text-[#555] font-light">{location.detail}</p>
          </motion.div>

          <AnimatePresence>
            {showMap && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden mt-8"
              >
                <div className="border border-[#1a1a1a] rounded-lg overflow-hidden">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed&hl=ko`}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Gallery 지도"
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
