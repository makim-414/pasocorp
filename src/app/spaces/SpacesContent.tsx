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

const galleryImages = [
  "/images/gallery/gallery-01.jpg",
  "/images/gallery/gallery-02.jpg",
  "/images/gallery/gallery-03.jpg",
  "/images/gallery/gallery-04.jpg",
  "/images/gallery/gallery-05.jpg",
  "/images/gallery/gallery-06.jpg",
];

const spaces = [
  {
    name: "Light Room",
    desc: "자연광이 풍부하게 들어오는 밝은 전시실. 회화, 드로잉, 사진 작품 전시에 최적화된 공간입니다.",
    features: ["자연광 채광", "가변형 벽면", "회화 · 사진 전시 최적화"],
  },
  {
    name: "Dark Room",
    desc: "조도를 자유롭게 조절할 수 있는 어두운 톤의 전시실. 영상, 설치, 조각 작품에 적합합니다.",
    features: ["조명 컨트롤", "영상 · 설치 전시 최적화", "독립 전원 시스템"],
  },
];

export default function SpacesContent() {
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  return (
    <main className="pt-16">
      {/* ── Hero ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div {...fadeUp}>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Spaces</p>
            <h1
              className="text-4xl md:text-6xl text-white mb-6"
              style={{ fontFamily: "'Cormorant Garamond', var(--font-dutch), serif", fontWeight: 300, letterSpacing: "0.02em" }}
            >
              Art Meets Space
            </h1>
            <p className="text-[#888] font-light leading-relaxed max-w-2xl text-lg">
              서울 종로구에 위치한 한옥 갤러리. 전통 건축의 고유한 공간미 위에 동시대 미술이 펼쳐지는 독립 전시 공간입니다.
              Light Room과 Dark Room, 두 개의 전시실이 서로 다른 분위기를 연출합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery Images ── */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Paso Gallery space ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Space Details ── */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Exhibition Rooms</p>
            <h2
              className="text-3xl md:text-5xl text-white"
              style={{ fontFamily: "'Cormorant Garamond', var(--font-dutch), serif", fontWeight: 300, letterSpacing: "0.02em" }}
            >
              두 개의 전시실
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {spaces.map((space, i) => (
              <motion.div
                key={space.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="border border-[#1a1a1a] p-8 md:p-10"
              >
                <h3
                  className="text-2xl md:text-3xl text-white mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', var(--font-dutch), serif", fontWeight: 400 }}
                >
                  {space.name}
                </h3>
                <p className="text-[#888] font-light leading-relaxed mb-6">{space.desc}</p>
                <ul className="space-y-2">
                  {space.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-[#666] font-light">
                      <span className="text-[#b8960b]">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
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
