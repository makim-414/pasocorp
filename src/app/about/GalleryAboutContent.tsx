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
            src="/images/about-space/img-006.jpg"
            alt="Space by PASO 내부"
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
              <strong className="text-white">Space by PASO</strong>는 성북동 초입에 위치한 80년 역사의 한옥 종가에 서양의 현대적 건축양식을 적용하여 재건축된 현대화 문화유산입니다.
            </p>
            <p className="text-sm md:text-base text-[#ccc] font-light leading-relaxed">
              브랜드 행사부터 세미나까지, 다양한 행사를 진행할 수 있는 복합 문화 공간으로 활용 가능합니다.
            </p>
            <p className="text-sm md:text-base text-[#ccc] font-light leading-relaxed">
              간접 분리가 가능한 실평수 60평대 홀은 리셉션, 전시 공간, 무대 공간으로 이루어져 있으며,<br />
              가벽으로 공간 분리 및 병합이 가능하고 무대 공간 기준 약 30명의 인원을 수용할 수 있습니다.
            </p>
            <p className="text-sm md:text-base text-[#ccc] font-light leading-relaxed">
              파소는 지난 10여 년간 신진 작가 발굴과 지원의 철학을 담아 다양한 전시를 기획해왔으며,<br />
              현재는 전시와 더불어 브랜드 협업 및 문화 행사를 유연하게 수용하는 기획 공간으로 운영됩니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Space Gallery */}
      <section className="py-16 md:py-24 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "/images/about-space/img-024.jpg", alt: "전시실 내부 — 회화 전시" },
              { src: "/images/about-space/img-008.jpg", alt: "무대 공간 — 세미나 / 포럼" },
              { src: "/images/about-space/img-010.jpg", alt: "공연 — 하프시코드 리사이틀" },
              { src: "/images/about-space/img-028.jpg", alt: "아트 포럼 / 토크" },
              { src: "/images/about-space/img-022.jpg", alt: "리셉션 / VIP 이벤트" },
              { src: "/images/about-space/img-002.jpg", alt: "갤러리 외부 야경" },
            ].map((img, i) => (
              <motion.div key={img.src} {...stagger(i)} className="relative aspect-[4/3] overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plan */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <motion.div {...fadeUp}>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Floor Plan</p>
            <h2 className="text-3xl md:text-4xl text-white font-light mb-12" style={{ fontFamily: "var(--font-dutch)" }}>공간 도면</h2>
            <div className="relative w-full aspect-square max-w-[600px] mx-auto bg-white rounded-sm overflow-hidden">
              <Image
                src="/images/about-space/img-012.jpg"
                alt="Space by PASO 평면도"
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 text-xs text-[#888] font-light">
              <div><span className="text-[#b8960b]">1~5</span> — 조명 ON/OFF</div>
              <div><span className="text-[#b8960b]">6</span> — 전체 조명 ON/OFF</div>
              <div><span className="text-[#b8960b]">7-1~7-5, 8</span> — 유리창 (와이어 설치 가능)</div>
              <div><span className="text-[#b8960b]">9~12</span> — 화장실 구역</div>
              <div><span className="text-[#b8960b]">13~15</span> — 이동식 칸막이</div>
              <div><span className="text-[#b8960b]">16~18</span> — 콘센트 위치</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Space Features */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Facilities</p>
            <h2 className="text-3xl md:text-4xl text-white font-light" style={{ fontFamily: "var(--font-dutch)" }}>공간 시설 안내</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "빔프로젝터 & 오디오", desc: "HDMI 케이블을 통해 개인 노트북 연결 가능. 블루투스 BT-AMP 오디오 및 무선 마이크 2개 구비." },
              { title: "작품 설치", desc: "갤러리 제공 와이어를 사용한 벽걸이형 작품 설치 가능. 이동식 칸막이 및 유리창 와이어 설치 지원." },
              { title: "부대시설", desc: "창고, 청소도구함, 남여 화장실 구비. 창고 내부 용품은 사전 협의 품목에 한해 사용 가능." },
              { title: "공간 구성", desc: "리셉션, 전시 공간, 무대 공간으로 구성. 가벽을 활용한 자유로운 공간 분리 및 병합 가능." },
              { title: "주차 안내", desc: "자체 주차장 미제공. 갤러리 건너편 올림픽 기념회관 유료 주차장 이용 가능." },
              { title: "금연 & 금지사항", desc: "모든 실내 공간 금연. 대관 일정의 양도·재판매 금지. 물품 판매 시 사전 협의 필요." },
            ].map((item, i) => (
              <motion.div key={item.title} {...stagger(i)} className="border border-[#1a1a1a] p-6">
                <h3 className="text-white text-sm font-medium mb-3">{item.title}</h3>
                <p className="text-[#888] text-xs font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <motion.div {...fadeUp}>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Guidelines</p>
            <h2 className="text-3xl md:text-4xl text-white font-light mb-12" style={{ fontFamily: "var(--font-dutch)" }}>이용 안내</h2>
            <div className="space-y-6 text-sm text-[#999] font-light leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>물건 운반 시 현관문 상단 버튼으로 문을 고정. 내부 원목 시설은 반드시 들어서 이동·설치해주세요.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>간단한 음료 외 냄새가 심한 음식은 반입 금지. 꽃다발·화환은 대관 이용 직후 수거 필요.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>전시 벽면 내외부 모든 목재 건축물에 못, 테이프, 압정 등의 사용을 금지합니다.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>전시 중 발생하는 폐기물은 모두 직접 처리. 일반폐기물은 종량제 봉투, 재활용은 분리배출.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>퇴점 시 모든 냉온풍기 전원 종료 및 날개 닫힘 확인, 모든 조명 소등 부탁드립니다.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Inquiry</p>
            <p className="text-sm text-[#aaa] font-light mb-2">대관 문의</p>
            <p className="text-sm text-[#ccc] font-light">TEL. 010-6432-4471 &nbsp;|&nbsp; Email. info@pasogallery.com</p>
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
