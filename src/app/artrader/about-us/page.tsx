export default function AboutUsPage() {
  const cards = [
    {
      title: "프로비넌스",
      desc: "소유·전시 이력이 명확한 기록만 수집합니다.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="23" stroke="#4ade80" strokeWidth="1.5" fill="none" />
          <rect x="14" y="16" width="20" height="16" rx="2" stroke="#4ade80" strokeWidth="1.5" fill="none" />
          <line x1="14" y1="22" x2="34" y2="22" stroke="#4ade80" strokeWidth="1.5" />
          <rect x="17" y="24" width="8" height="5" rx="1" stroke="#4ade80" strokeWidth="1" fill="none" />
        </svg>
      ),
    },
    {
      title: "손상 여부 확인",
      desc: "작품 상태를 보여주는 실물 사진 자료만 등록됩니다.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="23" stroke="#4ade80" strokeWidth="1.5" fill="none" />
          <rect x="14" y="14" width="20" height="20" rx="2" stroke="#4ade80" strokeWidth="1.5" fill="none" />
          <polyline points="14,28 20,22 24,26 30,18 34,22" stroke="#4ade80" strokeWidth="1.5" fill="none" />
        </svg>
      ),
    },
    {
      title: "가품 리스크 진단",
      desc: "위험 신호가 있으면 전문 기관에 위탁 검증이 가능합니다.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="23" stroke="#4ade80" strokeWidth="1.5" fill="none" />
          <rect x="14" y="14" width="20" height="20" rx="2" stroke="#4ade80" strokeWidth="1.5" fill="none" />
          <rect x="18" y="18" width="12" height="12" rx="1" stroke="#4ade80" strokeWidth="1" fill="none" />
        </svg>
      ),
    },
    {
      title: "추가 거래 정보",
      desc: "결제 방식 등 주요 거래 정보도 사전 확인할 수 있습니다.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="23" stroke="#4ade80" strokeWidth="1.5" fill="none" />
          <rect x="16" y="14" width="16" height="20" rx="2" stroke="#4ade80" strokeWidth="1.5" fill="none" />
          <polyline points="20,22 24,18 28,22" stroke="#4ade80" strokeWidth="1.5" fill="none" />
          <line x1="24" y1="18" x2="24" y2="30" stroke="#4ade80" strokeWidth="1.5" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117]">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <p className="text-[#4ade80] text-sm tracking-[0.15em] mb-6">
            Art Validation System
          </p>
          <h1
            className="text-3xl md:text-5xl font-light text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            철저한 자료 검수로
            <br />
            안전한 거래를 보장해요
          </h1>
          <p className="text-[#888] font-light leading-relaxed max-w-xl mx-auto">
            모든 작품은 자료 기반으로 검수되고, 신뢰할 수 없는 매물은 등록이 제한됩니다.
          </p>
        </div>
      </section>

      {/* Trust & Verification Cards - 4 cards, 2x2 grid */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-[#161b22] border border-[#21262d] rounded-xl p-8 hover:border-[#4ade80]/30 transition-colors"
              >
                <div className="mb-5">{card.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {card.title}
                </h4>
                <p className="text-sm text-[#888] font-light leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
