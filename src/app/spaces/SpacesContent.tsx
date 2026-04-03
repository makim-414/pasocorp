"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};


export default function SpacesContent() {
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  return (
    <main className="pt-16">
      {/* ── Hero with Background Image ── */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-end overflow-hidden">
        <Image
          src="/images/gallery/Slide 16_9 - 1416.png"
          alt="Paso Gallery Heritage 외관"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <motion.div {...fadeUp}>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Spaces</p>
            <h1
              className="text-4xl md:text-6xl text-white mb-4"
              style={{ fontFamily: "'Cormorant Garamond', var(--font-dutch), serif", fontWeight: 300, letterSpacing: "0.02em" }}
            >
              Space Introduction
            </h1>
            <p className="text-[#aaa] font-light leading-relaxed max-w-2xl text-lg">
              서울 종로구에 위치한 한옥 갤러리. 전통 건축의 고유한 공간미 위에 동시대 미술이 펼쳐지는 독립 전시 공간입니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Space Info ── */}
      <section className="py-24 md:py-32 bg-[#111] border-b border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-xl">
            <div className="w-12 h-[3px] bg-[#888] mb-6" />
            <h2 className="text-2xl md:text-3xl text-white font-semibold mb-1">Space</h2>
            <p className="text-[#aaa] text-sm mb-8">공간 소개</p>
            <div className="space-y-2 text-sm text-[#999] font-light">
              <p>주소지 : 서울특별시 종로구 성균관로 92</p>
              <p>면적 : 약 231m², 70평</p>
              <p>수용 인원 : 최대 50명</p>
              <p>테이블 / 의자 : 간이 의자 약 20개 구비, 테이블 사용 가능</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Private Programs ── */}
      <section className="py-32 md:py-44 bg-black border-y border-[#1a1a1a]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeUp}>
            <h2
              className="text-4xl md:text-6xl lg:text-7xl text-white mb-8"
              style={{ fontFamily: "'Cormorant Garamond', var(--font-dutch), serif", fontWeight: 300, letterSpacing: "0.02em" }}
            >
              Private Programs
            </h2>
            <div className="w-16 h-[3px] bg-white mx-auto mb-12" />
            <div className="space-y-8 text-[#aaa] font-light leading-relaxed text-sm md:text-base">
              <p>
                PASO의 전시 공간 Paso Gallery Heritage는 성북동 초입에 위치한 현대적으로 개조된 한옥 갤러리로,
                미술 애호가들에게 특별한 경험을 제공합니다.
              </p>
              <p>
                이 공간은 프라이빗 프로그램을 중심으로 운영되며, 다양한 브랜드와의 협업을 통해
                아트 살롱, 프라이빗 뷰잉, 컬렉터 대상 아트 포럼 등 차별화된 행사를 기획하고 있습니다.
              </p>
              <p>
                이를 통해 예술과 브랜드가 교류하며 새로운 가치를 창출하고, 미술 애호가들에게 맞춤형 예술 경험을 선사합니다
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Location Info ── */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "Location", value: "92, Seonggyungwan-ro\nJongno-gu, Seoul" },
              { label: "Hours", value: "Tue — Sat\n11:00 — 19:00" },
              { label: "Contact", value: "makim@ironact.net\n+82 10-6432-4471" },
              { label: "Instagram", value: "@pasogallery" },
            ].map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              >
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#555] mb-3">{info.label}</p>
                <p className="text-sm text-[#aaa] font-light whitespace-pre-line">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Space Rental Inquiry ── */}
      <section id="rental" className="py-24 md:py-32 bg-[#0a0a0a] border-t border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div {...fadeUp}>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Space Rental</p>
              <h2
                className="text-3xl md:text-5xl text-white mb-6"
                style={{ fontFamily: "'Cormorant Garamond', var(--font-dutch), serif", fontWeight: 300, letterSpacing: "0.02em" }}
              >
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
                  <p>전시 기획 및 설치 지원 서비스 제공</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setSubmitting(true);
                  setSubmitStatus(null);
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");
                  formData.append("subject", "공간 대관 문의");
                  formData.append("from_name", formData.get("name") as string);
                  formData.append("replyto", formData.get("email") as string);
                  try {
                    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
                    const data = await res.json();
                    if (data.success) {
                      setSubmitStatus("success");
                      form.reset();
                    } else {
                      setSubmitStatus("error");
                    }
                  } catch {
                    setSubmitStatus("error");
                  } finally {
                    setSubmitting(false);
                  }
                }}
                className="space-y-6"
              >
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
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
                    <input name="date" type="date" min={new Date().toISOString().split("T")[0]} className="w-full bg-transparent border-b border-[#333] focus:border-[#b8960b] text-white text-sm font-light py-3 outline-none transition-colors [color-scheme:dark]" />
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
                <button type="submit" disabled={submitting} className="mt-4 px-8 py-3 border border-[#b8960b] text-[#b8960b] text-xs tracking-[0.15em] uppercase hover:bg-[#b8960b] hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                  {submitting ? "전송 중..." : "문의하기"}
                </button>
                {submitStatus === "success" && (
                  <p className="mt-4 text-sm text-green-400 font-light">문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다.</p>
                )}
                {submitStatus === "error" && (
                  <p className="mt-4 text-sm text-red-400 font-light">전송에 실패했습니다. 잠시 후 다시 시도해주세요.</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
