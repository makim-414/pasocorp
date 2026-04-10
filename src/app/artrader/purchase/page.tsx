import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "작품 탐색",
    desc: "작가별 시세 트래커와 작품 카탈로그에서 원하는 작품을 찾아보세요.",
  },
  {
    num: "02",
    title: "상세 검증 확인",
    desc: "프로비넌스, 작가 서명, 프레임, 손상 여부 등 작품 검수 정보를 확인합니다.",
  },
  {
    num: "03",
    title: "구매 요청",
    desc: "작품 상세 페이지에서 구매 요청을 남기면 담당자가 검토 후 연락드립니다.",
  },
  {
    num: "04",
    title: "계약 & 인도",
    desc: "에스크로 기반 안전 결제와 전문 운송·설치까지 원스톱으로 지원합니다.",
  },
];

const guarantees = [
  {
    title: "진위 보증",
    desc: "AI 기반 1차 스크리닝 + 공인 감정기관 검증을 거친 작품만 취급합니다.",
  },
  {
    title: "가격 투명성",
    desc: "프라이머리·세컨더리·경매 낙찰가 데이터로 적정가를 검증할 수 있습니다.",
  },
  {
    title: "상태 리포트",
    desc: "실물 사진 기반 손상 여부 확인 리포트를 구매 전에 제공합니다.",
  },
  {
    title: "안전 결제",
    desc: "에스크로를 통한 안전 결제로 위험 없이 거래할 수 있습니다.",
  },
];

export default function PurchasePage() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
      {/* Hero */}
      <section className="text-center mb-20">
        <p className="text-[#4ade80] text-xs tracking-[0.2em] uppercase mb-4">How to Buy</p>
        <h1
          className="text-3xl md:text-5xl font-extralight text-white/90 leading-tight mb-6"
          style={{ fontFamily: "var(--font-noto-serif)" }}
        >
          안전하고 투명한<br />작품 구매 프로세스
        </h1>
        <p className="text-[#888] text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto">
          아트레이더는 작품 검수부터 안전 결제, 운송까지 구매 전 과정을 책임져요.
        </p>
      </section>

      {/* Steps */}
      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-7 hover:border-[#4ade80]/30 transition-colors"
            >
              <p
                className="text-[#4ade80] text-2xl font-light mb-4"
                style={{ fontFamily: "var(--font-dutch)" }}
              >
                {s.num}
              </p>
              <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-[#888] font-light leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantees */}
      <section className="mb-20">
        <h2
          className="text-2xl md:text-3xl font-extralight text-white/90 text-center mb-4"
          style={{ fontFamily: "var(--font-noto-serif)" }}
        >
          아트레이더가 보장하는 것
        </h2>
        <p className="text-[#777] text-sm font-light text-center mb-12 max-w-xl mx-auto">
          모든 거래는 검수와 보증을 기반으로 진행됩니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {guarantees.map((g) => (
            <div
              key={g.title}
              className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-8"
            >
              <h4 className="text-lg font-normal text-white/90 mb-2">{g.title}</h4>
              <p className="text-sm text-[#777] font-light leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Link
          href="/artrader/art-market"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#4ade80] text-black font-semibold rounded-full hover:bg-[#22c55e] transition-colors"
        >
          작품 보러 가기
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </section>
    </div>
  );
}
