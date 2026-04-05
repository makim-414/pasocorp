"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SELLER_KEY = "artrader_seller_approved";

function isApprovedSeller(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(SELLER_KEY) === "true";
}

export default function SellPage() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [codeInput, setCodeInput] = useState("");
  const [codeError, setCodeError] = useState(false);

  useEffect(() => {
    setAuthorized(isApprovedSeller());
  }, []);

  function handleCodeSubmit(e: React.FormEvent) {
    e.preventDefault();
    // 판매자 인증 코드 확인
    if (codeInput === "ARTSELL2024") {
      localStorage.setItem(SELLER_KEY, "true");
      setAuthorized(true);
      setCodeError(false);
    } else {
      setCodeError(true);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  // 로딩 중
  if (authorized === null) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#4ade80] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // 미인증 판매자 → 인증 코드 입력
  if (!authorized) {
    return (
      <div className="max-w-[500px] mx-auto px-6 md:px-12 py-20 text-center">
        <div className="mb-6">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.5" className="mx-auto">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold text-white mb-3">
          판매자 인증이 필요합니다
        </h1>
        <p className="text-[#888] text-sm mb-8">
          작품 판매는 승인된 판매자만 가능합니다.<br />
          발급받은 판매자 인증 코드를 입력해주세요.
        </p>
        <form onSubmit={handleCodeSubmit} className="space-y-4">
          <input
            type="text"
            value={codeInput}
            onChange={(e) => { setCodeInput(e.target.value); setCodeError(false); }}
            placeholder="판매자 인증 코드"
            className={`w-full bg-[#0a0a0a] border rounded-lg px-4 py-3 text-sm text-white text-center placeholder-[#555] focus:outline-none transition-colors ${
              codeError ? "border-[#ef4444] focus:border-[#ef4444]" : "border-[#1a1a1a] focus:border-[#4ade80]/50"
            }`}
          />
          {codeError && (
            <p className="text-xs text-[#ef4444]">인증 코드가 올바르지 않습니다.</p>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-[#4ade80] text-black font-semibold rounded-full hover:bg-[#3bcc70] transition-colors text-sm"
          >
            인증하기
          </button>
        </form>
        <p className="text-[10px] text-[#555] mt-6">
          인증 코드가 없으시면{" "}
          <Link href="/artrader" className="text-[#4ade80] hover:underline">
            고객센터
          </Link>
          에 문의해주세요.
        </p>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="max-w-[700px] mx-auto px-6 md:px-12 py-20 text-center">
        <div className="mb-6">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" className="mx-auto">
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold text-white mb-3">
          판매 등록이 접수되었습니다
        </h1>
        <p className="text-[#888] mb-8">
          검토 후 영업일 기준 1~2일 내에 연락드리겠습니다.
        </p>
        <button
          onClick={() => router.push("/artrader/art-market")}
          className="px-6 py-3 bg-[#4ade80] text-black font-semibold rounded-full hover:bg-[#3bcc70] transition-colors text-sm"
        >
          마켓으로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[700px] mx-auto px-6 md:px-12 py-12">
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-xs text-[#555] hover:text-[#4ade80] transition-colors mb-8"
      >
        &larr; 뒤로가기
      </button>

      <h1 className="text-3xl font-semibold text-white mb-2">작품 판매 등록</h1>
      <p className="text-[#888] text-sm mb-10">
        판매를 원하는 작품의 정보를 입력해주세요. 접수 후 전문가 검토를 거쳐 등록됩니다.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Artist */}
        <div>
          <label className="block text-xs text-[#888] uppercase tracking-wider mb-2">
            작가명 *
          </label>
          <input
            required
            type="text"
            placeholder="예: 이우환"
            className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#4ade80]/50 transition-colors"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-xs text-[#888] uppercase tracking-wider mb-2">
            작품명 *
          </label>
          <input
            required
            type="text"
            placeholder="예: From Line No. 800152"
            className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#4ade80]/50 transition-colors"
          />
        </div>

        {/* Year & Size */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-[#888] uppercase tracking-wider mb-2">
              제작년도
            </label>
            <input
              type="number"
              placeholder="예: 2020"
              className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#4ade80]/50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs text-[#888] uppercase tracking-wider mb-2">
              크기
            </label>
            <input
              type="text"
              placeholder="예: 130×162cm"
              className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#4ade80]/50 transition-colors"
            />
          </div>
        </div>

        {/* Medium */}
        <div>
          <label className="block text-xs text-[#888] uppercase tracking-wider mb-2">
            매체 / 재료
          </label>
          <input
            type="text"
            placeholder="예: Oil on canvas"
            className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#4ade80]/50 transition-colors"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-xs text-[#888] uppercase tracking-wider mb-2">
            희망 판매가 *
          </label>
          <input
            required
            type="text"
            placeholder="예: ₩50,000,000"
            className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#4ade80]/50 transition-colors"
          />
        </div>

        {/* Provenance */}
        <div>
          <label className="block text-xs text-[#888] uppercase tracking-wider mb-2">
            프로비넌스 (소유 이력)
          </label>
          <textarea
            rows={3}
            placeholder="작품의 소유·전시 이력을 기재해주세요"
            className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#4ade80]/50 transition-colors resize-none"
          />
        </div>

        {/* Contact */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-[#888] uppercase tracking-wider mb-2">
              이름 *
            </label>
            <input
              required
              type="text"
              placeholder="홍길동"
              className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#4ade80]/50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs text-[#888] uppercase tracking-wider mb-2">
              연락처 *
            </label>
            <input
              required
              type="tel"
              placeholder="010-0000-0000"
              className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#4ade80]/50 transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs text-[#888] uppercase tracking-wider mb-2">
            이메일
          </label>
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#4ade80]/50 transition-colors"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-4 bg-[#4ade80] text-black font-semibold rounded-full hover:bg-[#3bcc70] transition-colors text-sm mt-4"
        >
          판매 등록 신청
        </button>

        <p className="text-[10px] text-[#555] text-center">
          접수된 정보는 작품 검증 목적으로만 사용되며, 제3자에게 제공되지 않습니다.
        </p>
      </form>
    </div>
  );
}
