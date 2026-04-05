"use client";
import { useRouter } from "next/navigation";
import { artists } from "@/lib/artists";
import SearchInput from "@/components/artrader/SearchInput";

const painPoints = [
  {
    num: 1,
    rating: 5,
    title: "실시간 경매·시세 정보",
    pain: "작품 가격을 알기 어려움. '프라이머리 얼마예요?', '세컨더리 시세가 어떻게 되나요?' 같은 질문 반복",
    conversations: [
      "정영주 100호 프라이머리 가격이 얼마예요?",
      "이배 작가님 작품가격이 어느정도일까요",
      "하태임 작가님 작품은 얼마 정도 하려나요?",
    ],
    solution: "작가별 시세 트래커 — 프라이머리/세컨더리/경매 낙찰가 비교 대시보드",
  },
  {
    num: 2,
    rating: 5,
    title: "작품 진위감정 & 출처 확인",
    pain: "이베이·해외 경매에서 김환기, 이중섭 등 위작 유통 우려. 재단 감정 절차 복잡",
    conversations: [
      "가짜이지 않을까요",
      "재단에 문의해보셔요",
      "뒷면 태그에 갤러리도 확인해보면",
    ],
    solution: "AI 기반 1차 진위 스크리닝 + 공인 감정기관 연결 서비스",
  },
  {
    num: 3,
    rating: 4,
    title: "전시·아트페어 통합 캘린더",
    pain: "전시 정보가 인스타/블로그/카톡에 파편화. 예약제 놓치는 일 빈번",
    conversations: [
      "늑장부리다가 제임스터렐 예약 다 매진",
      "허스트 전 얼리버드 예약창 떴다는데 못찾았어요",
      "가볼곳이 넘많네요",
    ],
    solution: "전시/아트페어/프리뷰 통합 캘린더 + 얼리버드/예약 알림",
  },
  {
    num: 4,
    rating: 4,
    title: "컬렉팅 실전 가이드",
    pain: "입문자의 '어떻게 시작하죠?' 질문과 액자·조명·보관·설치·이사 등 실전 노하우 수요 높음",
    conversations: [
      "무반사아크릴 제작하면 가격 대략?",
      "그림 걸 때 조명은 어떻게?",
      "천장레일도 좋아요",
      "벽지 못자국 보수 방법",
    ],
    solution: "컬렉팅 백과사전 — 구매→운송→설치→보관→재판매 전 과정 가이드",
  },
];

export default function ArtraderHome() {
  const router = useRouter();

  return (
    <>
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Colorful ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(74,222,128,0.35) 0%, rgba(74,222,128,0.08) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-light text-white mb-4" style={{ fontFamily: "var(--font-dutch)" }}>
          <span className="text-[#4ade80] font-semibold">Art</span>rader
        </h1>
        <p className="text-[#777] text-sm md:text-base font-light mb-12">
          글로벌 미술 거래 데이터베이스 &middot; 작가 검색 &middot; 시장 분석
        </p>

        <SearchInput variant="hero" />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "거래 데이터", value: "15M+" },
            { label: "분석 작가", value: "120K+" },
            { label: "커버 경매사", value: "2,800+" },
            { label: "리포트 발행", value: "5,000+" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl md:text-3xl font-light text-[#4ade80]" style={{ fontFamily: "var(--font-dutch)" }}>{s.value}</p>
              <p className="mt-1 text-[10px] tracking-[0.15em] uppercase text-[#555]">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-xs text-[#555] uppercase tracking-widest mb-6">인기 작가</p>
          <div className="flex flex-wrap justify-center gap-3">
            {artists.slice(0, 6).map((artist) => (
              <button
                key={artist.slug}
                onClick={() => router.push(`/artrader/artist/${artist.slug}`)}
                className="px-4 py-2 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg text-sm text-[#888] hover:text-[#4ade80] hover:border-[#4ade80]/30 transition-all"
              >
                {artist.nameKo}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Pain Points & Solutions */}
    <section className="relative py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#b8960b] text-xs tracking-[0.2em] uppercase mb-4">What we solve</p>
          <h2
            className="text-3xl md:text-4xl font-extralight text-white/90 leading-tight"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            컬렉터가 매일 겪는 문제,<br />아트레이더가 해결해요
          </h2>
        </div>

        <div className="space-y-6">
          {painPoints.map((p) => (
            <div
              key={p.num}
              className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-6 md:p-8 hover:border-[#b8960b]/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {p.num}. {p.title}
                </h3>
                <div className="text-[#b8960b] text-sm tracking-widest shrink-0">
                  {"★".repeat(p.rating)}
                  <span className="text-[#333]">{"☆".repeat(5 - p.rating)}</span>
                </div>
              </div>

              <div className="mb-5">
                <p className="text-[#b8960b] text-[11px] tracking-[0.15em] uppercase font-medium mb-2">Pain Point</p>
                <p className="text-sm md:text-base text-[#ccc] leading-relaxed">{p.pain}</p>
              </div>

              <div className="mb-5">
                <p className="text-[#4ade80] text-[11px] tracking-[0.1em] uppercase font-medium mb-3">실제 대화</p>
                <div className="space-y-2">
                  {p.conversations.map((c, i) => (
                    <p key={i} className="text-sm text-[#888] italic pl-4 border-l-2 border-[#222]">
                      &ldquo;{c}&rdquo;
                    </p>
                  ))}
                </div>
              </div>

              <div className="bg-[#0f0d07] border border-[#b8960b]/20 rounded-xl p-5">
                <p className="text-[#b8960b] text-[11px] tracking-[0.15em] uppercase font-medium mb-2 flex items-center gap-1.5">
                  <span>💡</span> Solution
                </p>
                <p className="text-sm md:text-base text-[#e8e8e8]">{p.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
