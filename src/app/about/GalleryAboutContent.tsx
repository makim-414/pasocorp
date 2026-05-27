"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Projector, Frame, DoorOpen, LayoutGrid, ParkingCircle, Ban } from "lucide-react";

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

      {/* Floor Plan (hidden) */}
      {false && (
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <motion.div {...fadeUp}>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Floor Plan</p>
            <h2 className="text-3xl md:text-4xl text-white font-normal mb-12" style={{ fontFamily: "var(--font-noto-serif)" }}>공간 도면</h2>
            <div className="relative w-full aspect-square max-w-[600px] mx-auto overflow-hidden">
              <Image
                src="/images/about-space/img-012.jpg"
                alt="Space by PASO 평면도"
                fill
                className="object-contain p-4 invert mix-blend-screen"
              />
              {/* Zone labels */}
              <span className="absolute top-[22%] left-1/2 -translate-x-1/2 text-[10px] md:text-xs text-[#f87171] font-medium tracking-wider">Exhibition space</span>
              <span className="absolute top-[42%] left-[40%] -translate-x-1/2 text-[10px] md:text-xs text-[#fbbf24] font-medium tracking-wider">Stage</span>
              <span className="absolute top-[75%] left-[25%] -translate-x-1/2 text-[10px] md:text-xs text-[#67e8f9] font-medium tracking-wider">Reception</span>
            </div>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-4 text-xs text-[#888] font-light">
              <div><span className="text-[#b8960b]">1~5</span> — 조명 ON/OFF</div>
              <div><span className="text-[#b8960b]">6</span> — 전체 조명 ON/OFF</div>
              <div><span className="text-[#b8960b]">7-1~7-5, 8</span> — 유리창 (와이어 설치 가능)</div>
              <div><span className="text-[#b8960b]">9~12</span> — 화장실 구역</div>
              <div><span className="text-[#b8960b]">13~15</span> — 이동식 칸막이</div>
              <div><span className="text-[#b8960b]">16~18</span> — 콘센트 위치</div>
            </div>
            <div className="mt-20 space-y-8">
              <div>
                <h3 className="text-white text-sm font-medium mb-4">이동식 칸막이 규격 (가로×세로 cm)</h3>
                <div className="grid grid-cols-3 gap-3 text-xs text-[#888] font-light">
                  <div className="border border-[#1a1a1a] p-3"><span className="text-[#b8960b]">A</span> — 230×210</div>
                  <div className="border border-[#1a1a1a] p-3"><span className="text-[#b8960b]">B</span> — 250×200</div>
                  <div className="border border-[#1a1a1a] p-3"><span className="text-[#b8960b]">C</span> — 244×180</div>
                </div>
              </div>
              <div>
                <h3 className="text-white text-sm font-medium mb-4">유리창 규격 (가로×세로 cm) — M 제외, 와이어 이용 작품 설치 가능</h3>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3 text-xs text-[#888] font-light">
                  <div className="border border-[#1a1a1a] p-3"><span className="text-[#b8960b]">D</span> — 173×155</div>
                  <div className="border border-[#1a1a1a] p-3"><span className="text-[#b8960b]">E</span> — 140×155</div>
                  <div className="border border-[#1a1a1a] p-3"><span className="text-[#b8960b]">F</span> — 140×155</div>
                  <div className="border border-[#1a1a1a] p-3"><span className="text-[#b8960b]">G</span> — 72×130</div>
                  <div className="border border-[#1a1a1a] p-3"><span className="text-[#b8960b]">H</span> — 170×150</div>
                  <div className="border border-[#1a1a1a] p-3"><span className="text-[#b8960b]">I</span> — 160×150</div>
                  <div className="border border-[#1a1a1a] p-3"><span className="text-[#b8960b]">J</span> — 70×150</div>
                  <div className="border border-[#1a1a1a] p-3"><span className="text-[#b8960b]">K, L</span> — 110×-</div>
                </div>
              </div>
              <div>
                <h3 className="text-white text-sm font-medium mb-4">벽면별 설치 방법</h3>
                <div className="space-y-2 text-xs text-[#888] font-light">
                  <p><span className="text-[#b8960b]">—</span> 와이어 이용 벽 (특수한 경우 실못 이용)</p>
                  <p><span className="text-[#b8960b]">—</span> 실못 이용 작품 설치 가능 벽</p>
                  <p className="text-[#666] mt-2">* 벽에 따라 가능한 설치 방법이 상이합니다. 상세 사항은 도면을 참고해주세요.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      )}

      {/* Usage Guidelines (hidden) */}
      {false && (
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <motion.div {...fadeUp}>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Guidelines</p>
            <h2 className="text-3xl md:text-4xl text-white font-normal mb-12" style={{ fontFamily: "var(--font-noto-serif)" }}>이용 안내</h2>
            <div className="space-y-6 text-sm text-[#999] font-light leading-relaxed">
              <p className="text-white text-xs tracking-[0.1em] uppercase mb-2">작품 설치</p>
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>벽걸이형 작품 설치 시 갤러리에서 제공하는 와이어를 사용하며, 부족 시 개인이 지참해야 합니다.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>부득이하게 타공을 진행해야 하는 경우 갤러리에서 제공하는 도구만 이용 가능하며 원상복구가 필요합니다.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>전시 벽면 내외부 모든 목재 건축물에 못, 테이프, 압정 등의 사용을 금지합니다.</p>
              </div>

              <p className="text-white text-xs tracking-[0.1em] uppercase mt-8 mb-2">운반</p>
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>물건 운반 시 현관문 상단 버튼을 눌러 문을 고정해주세요. 잦은 사용 시 고장날 수 있으니 입퇴점 시 1회씩만 사용 부탁드립니다.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>내부 원목 시설(바닥 등)은 훼손 시 복구가 불가하므로 반드시 물건을 들어서 이동·설치해주세요.</p>
              </div>

              <p className="text-white text-xs tracking-[0.1em] uppercase mt-8 mb-2">반입금지 품목 및 청결</p>
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>간단한 음료 외 국물이 있는 음식 등 냄새가 심한 음식은 반입을 금지합니다.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>꽃다발, 화환 등 반입 가능하나 이용 직후 수거되어야 합니다.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>모든 시설에 대해 훼손 시 반드시 복구해야 하며 전시 중 발생하는 폐기물은 모두 처리해주셔야 합니다.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>일반폐기물: 청소함에 비치된 종량제 봉투 이용 / 재활용폐기물: 분리 후 갤러리 건너편 88회관 지하주차장 입구 오른쪽에 배출</p>
              </div>

              <p className="text-white text-xs tracking-[0.1em] uppercase mt-8 mb-2">빔프로젝터 및 오디오</p>
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>빔프로젝터는 개인 노트북에 HDMI 케이블을 통해 연결할 수 있습니다.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>오디오는 블루투스 BT-AMP로 연결 가능하며 갤러리 내 스피커로 송출됩니다. 무선 마이크 2개 구비되어 있습니다.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>이외 소품(스크린 등)이 필요한 경우 별도 문의 바라며, 전력을 소모하는 조명이나 소품 사용 시 추가요금이 발생합니다.</p>
              </div>

              <p className="text-white text-xs tracking-[0.1em] uppercase mt-8 mb-2">제한 사항</p>
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>모든 실내 공간은 금연구역입니다.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>이용 일정의 양도나 재판매를 금지합니다.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>이용 기간 중 물품 판매 시 갤러리측과 사전에 협의하여야 합니다.</p>
              </div>

              <p className="text-white text-xs tracking-[0.1em] uppercase mt-8 mb-2">퇴점 시 유의사항</p>
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>5개의 모든 냉온풍기의 전원을 꺼주세요. 리모컨 1개로 모두 제어 가능합니다.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>냉온풍기 전원 종료 후 모든 날개가 닫혔는지 확인 부탁드립니다.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b8960b] mt-0.5">—</span>
                <p>모든 조명을 꺼주세요 (화장실 별도).</p>
              </div>

              <div className="mt-8 text-xs text-[#666]">
                <p>문의사항이 있을 경우 담당자에게 연락해주시기 바랍니다.</p>
                <p className="mt-1">담당자 연락처: 010-6432-4471</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      )}

      {/* Space Features (hidden) */}
      {false && (
      <section className="py-24 md:py-32 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Facilities</p>
            <h2 className="text-3xl md:text-4xl text-white font-normal" style={{ fontFamily: "var(--font-noto-serif)" }}>공간 시설 안내</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "빔프로젝터 & 오디오", icon: Projector, desc: "HDMI 케이블을 통해 개인 노트북 연결 가능. 블루투스 BT-AMP 오디오 및 무선 마이크 2개 구비. 스크린 등 추가 소품 필요 시 별도 문의. 전력 소모 조명·소품 사용 시 추가요금 발생." },
              { title: "작품 설치", icon: Frame, desc: "벽걸이형 작품은 갤러리 제공 와이어 사용 (부족 시 개인 지참). 부득이한 타공 시 갤러리 도구만 사용 가능하며 원상복구 필요. 벽면 내외부 목재 건축물에 못·테이프·압정 사용 금지." },
              { title: "부대시설", icon: DoorOpen, desc: "창고, 청소도구함, 남여 화장실 구비. 창고 내부 용품은 사전 협의 품목에 한해 사용 가능." },
              { title: "공간 구성", icon: LayoutGrid, desc: "리셉션, 전시 공간, 무대 공간으로 구성. 가벽을 활용한 자유로운 공간 분리 및 병합 가능. 냉온풍기 5개 설치 (리모컨 1개로 전체 제어)." },
              { title: "주차 안내", icon: ParkingCircle, desc: "자체 주차장 미제공. 갤러리 건너편 올림픽 기념회관 유료 주차장 이용 가능." },
              { title: "반입 & 금지사항", icon: Ban, desc: "모든 실내 공간 금연. 간단한 음료 외 냄새 심한 음식 반입 금지. 이용 일정 양도·재판매 금지. 이용 기간 중 물품 판매 시 갤러리측 사전 협의 필요." },
            ].map((item, i) => (
              <motion.div key={item.title} {...stagger(i)} className="border border-[#1a1a1a] p-6">
                <item.icon size={24} className="text-[#b8960b] mb-4" strokeWidth={1.5} />
                <h3 className="text-white text-sm font-medium mb-3">{item.title}</h3>
                <p className="text-[#888] text-xs font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Inquiry</p>
            <p className="text-sm text-[#aaa] font-light mb-2">문의</p>
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
