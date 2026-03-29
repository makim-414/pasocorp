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
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-6">Our Story</p>
            <p className="text-sm md:text-base text-[#ccc] font-light leading-relaxed">
              2013년 &lsquo;푸에스토 (Puesto) 갤러리&rsquo;라는 이름으로 시작된 &lsquo;파소 (Paso) 갤러리&rsquo;는 한국의 신진작가들을 발굴하고 지원하는 것에 주력하였습니다. 현재 10년간 개최하고 있는 &lsquo;신진 아티스트 공모전&rsquo;을 한국의 신진 작가들에게 개인전과 단체전 등 다양한 전시 기회를 지원하고, 작가들과 기업간의 협력 기회를 창출함으로써 유망 작가들의 시장 진출을 다방면으로 확장하는 것을 목표로 합니다.
            </p>
            <p className="text-sm md:text-base text-[#ccc] font-light leading-relaxed">
              서울 종로구 한옥 건축물에 자리한 Paso Gallery는, 전통 공간의 아름다움과 동시대 미술의 실험이 공존하는 독립 갤러리입니다. 브랜드 팝업, VIP 이벤트, 아트 어드바이저리 등 예술과 비즈니스를 잇는 프로그램을 운영합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Space */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Venue</p>
              <h2 className="text-3xl md:text-5xl text-white mb-6 font-light" style={{ fontFamily: "var(--font-dutch)" }}>
                Space by PASO
              </h2>
              <p className="text-[#888] font-light leading-relaxed mb-8">
                서울 종로구에 위치한 한옥 갤러리. 전통 건축의 고유한 공간미 위에 동시대 미술이 펼쳐지는 독립 전시 공간입니다. Light Room과 Dark Room, 두 개의 전시실이 서로 다른 분위기를 연출합니다.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border border-[#1a1a1a] p-6 hover:border-[#333] transition-colors">
                  <h4 className="text-sm text-white font-light mb-2" style={{ fontFamily: "var(--font-dutch)" }}>Light Room</h4>
                  <p className="text-xs text-[#666] font-light">자연광이 스며드는 한옥 마루 공간. 회화, 설치, 사진 전시에 적합.</p>
                </div>
                <div className="border border-[#1a1a1a] p-6 hover:border-[#333] transition-colors">
                  <h4 className="text-sm text-white font-light mb-2" style={{ fontFamily: "var(--font-dutch)" }}>Dark Room</h4>
                  <p className="text-xs text-[#666] font-light">조명 연출이 자유로운 밀폐 공간. 미디어아트, 영상, 몰입형 전시에 적합.</p>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src="/images/gallery/gallery-01.jpg" alt="Gallery space" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square overflow-hidden">
                    <img src="/images/gallery/gallery-03.jpg" alt="Gallery space" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-3 pt-8">
                  <div className="aspect-square overflow-hidden">
                    <img src="/images/gallery/gallery-02.jpg" alt="Gallery space" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src="/images/gallery/gallery-04.jpg" alt="Gallery space" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
