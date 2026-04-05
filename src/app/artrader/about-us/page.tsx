"use client";
import GlowingLogo from "@/components/artrader/GlowingLogo";

const sellerItems = ["구매자의 구매이력", "유사 경매기록 데이터", "작품 인보이스"];
const buyerItems = ["진품 보증서", "작품 상태 보고서", "소장 이력 (프로비넌스)"];

export default function AboutUsPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      {/* Hero */}
      <section className="py-20 md:py-28 text-center">
        <p className="text-[#4ade80] text-sm tracking-[0.15em] mb-6">
          Art Validation System
        </p>
        <h1
          className="text-3xl md:text-5xl font-extralight text-white/90 leading-tight mb-6"
          style={{ fontFamily: "var(--font-noto-serif)" }}
        >
          투명하게 거래하는<br />생태계를 만들어요
        </h1>
        <p className="text-[#777] text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
          아트레이더는 미술 시장의 흩어진 데이터를 정제해,<br />
          시세 예측과 안전한 거래를 돕는 새로운 미술품 거래 환경을 만들어가고 있어요.
        </p>
      </section>

      {/* Ecosystem Diagram */}
      <section className="pb-20 md:pb-28">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="flex flex-col gap-4 items-center md:items-end">
            <p className="text-[#4ade80] font-normal text-lg mb-2" style={{ fontFamily: "var(--font-dutch)" }}>Seller</p>
            {sellerItems.map((item) => (
              <div
                key={item}
                className="px-6 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl text-sm text-[#ccc] w-56 text-center"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3 my-4 md:my-0">
            <p className="text-sm text-[#888] font-medium tracking-wider" style={{ fontFamily: "var(--font-dutch)" }}>
              <span className="text-[#4ade80] font-semibold">Art</span>rader
            </p>
            <GlowingLogo />
          </div>

          <div className="flex flex-col gap-4 items-center md:items-start">
            <p className="text-[#4ade80] font-normal text-lg mb-2" style={{ fontFamily: "var(--font-dutch)" }}>Buyer</p>
            {buyerItems.map((item) => (
              <div
                key={item}
                className="px-6 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl text-sm text-[#ccc] w-56 text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex justify-center mt-[-200px] mb-[200px] pointer-events-none">
          <svg width="800" height="20" viewBox="0 0 800 20" className="opacity-20">
            <line x1="200" y1="10" x2="340" y2="10" stroke="#4ade80" strokeWidth="1" strokeDasharray="6 4" />
            <line x1="460" y1="10" x2="600" y2="10" stroke="#4ade80" strokeWidth="1" strokeDasharray="6 4" />
          </svg>
        </div>
      </section>

      {/* Trust Features */}
      <section className="pb-20 md:pb-28">
        <h2 className="text-2xl md:text-3xl font-extralight text-white/90 text-center mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
          안전한 거래를 보장해요
        </h2>
        <p className="text-[#777] text-sm font-light text-center mb-12 max-w-xl mx-auto">
          모든 작품은 자료 기반으로 검수되고, 신뢰할 수 없는 매물은 등록이 제한됩니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "프로비넌스", desc: "소유·전시 이력이 명확한 기록만 수집합니다." },
            { title: "손상 여부 확인", desc: "작품 상태를 보여주는 실물 사진 자료만 등록됩니다." },
            { title: "가품 리스크 진단", desc: "위험 신호가 있으면 전문 기관에 위탁 검증이 가능합니다." },
            { title: "추가 거래 정보", desc: "결제 방식 등 주요 거래 정보도 사전 확인할 수 있습니다." },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-8 hover:border-[#4ade80]/30 transition-colors"
            >
              <h4 className="text-lg font-normal text-white/90 mb-2">{card.title}</h4>
              <p className="text-sm text-[#777] font-light leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
