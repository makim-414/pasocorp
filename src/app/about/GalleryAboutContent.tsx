"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.6, delay: i * 0.1 } });

export default function GalleryAboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/gallery-01.jpg"
            alt="Paso Gallery"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pb-16 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-light text-white"
            style={{ fontFamily: "var(--font-dutch)" }}
          >
            About Paso Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-lg text-[#888] font-light max-w-xl"
          >
            Art Meets Space
          </motion.p>
        </div>
      </section>

      {/* Gallery Story */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="border-l-2 border-[#b8960b] pl-8 md:pl-12 space-y-8">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-6">About Us</p>
            <p className="text-sm md:text-base text-[#ccc] font-light leading-relaxed">
              <strong className="text-white">Space by PASO</strong>는 파소의 첫 번째 전시 공간으로,<br />
              성북동 초입의 성균관 유생 종가를 현대적으로 재건축한 전시 공간입니다.
            </p>
            <p className="text-sm md:text-base text-[#ccc] font-light leading-relaxed">
              파소는 지난 10여 년간 꾸준히 이어온 신진 작가 발굴과 지원의 철학을 담아,<br />
              작가들에게 상업적 가능성을 실험하고 시장과 만날 수 있는 기회를 제공하였습니다.
            </p>
            <p className="text-sm md:text-base text-[#ccc] font-light leading-relaxed">
              현재 Space by PASO는 전시와 더불어 브랜드 협업 및 다양한 문화 행사를 유연하게 수용하는 기획 공간으로 운영됩니다.
            </p>
            <p className="text-sm md:text-base text-[#ccc] font-light leading-relaxed">
              파소는 미술 시장 전반의 다양한 영역에서 비즈니스를 전개하며,<br />
              예술의 새로운 가능성을 모색하고 있습니다.
            </p>
            <p className="text-sm md:text-base text-[#ccc] font-light leading-relaxed">
              더 많은 정보는 파소의 공식 웹사이트에서 확인하실 수 있습니다.<br />
              <a href="https://pasocorp.com" target="_blank" rel="noopener noreferrer" className="text-[#b8960b] hover:text-white transition-colors">www.pasocorp.com</a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location Info */}
      <section className="bg-black border-t border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: "Location", value: "92, Seonggyungwan-ro\nJongno-gu, Seoul" },
            { label: "Hours", value: "Tue — Sat\n11:00 — 19:00" },
            { label: "Contact", value: "makim@ironact.net\n+82 10-6432-4471" },
            { label: "Instagram", value: "@pasogallery" },
          ].map((info, i) => (
            <motion.div key={info.label} {...stagger(i)}>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#555] mb-3">{info.label}</p>
              <p className="text-sm text-[#aaa] font-light whitespace-pre-line">{info.value}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
