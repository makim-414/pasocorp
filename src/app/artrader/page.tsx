"use client";
import { useRouter } from "next/navigation";
import { artists } from "@/lib/artists";
import SearchInput from "@/components/artrader/SearchInput";
import GlowingLogo from "@/components/artrader/GlowingLogo";

export default function ArtraderHome() {
  const router = useRouter();

  return (
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
        <div className="flex justify-center mb-6">
          <GlowingLogo />
        </div>
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
  );
}
