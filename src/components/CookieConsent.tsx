"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 p-4 md:p-6 pointer-events-none">
      <div className="max-w-[340px] border border-[#222] bg-[#0c0c0c]/95 backdrop-blur-md p-4 shadow-2xl pointer-events-auto">
        <p className="text-xs text-[#aaa] leading-relaxed">
          이 웹사이트는 서비스 개선 및 이용 통계 분석을 위해 쿠키를 사용합니다.{" "}
          <Link
            href="/privacy#cookie"
            className="text-[#d4d4d4] underline underline-offset-2 hover:text-white duration-150"
          >
            개인정보처리방침
          </Link>
        </p>
        <div className="mt-3 flex items-center gap-4">
          <button
            onClick={accept}
            className="bg-white px-4 py-1.5 text-xs font-medium text-black hover:bg-[#ddd] duration-150"
          >
            동의
          </button>
          <button
            onClick={decline}
            className="text-xs text-[#8a8a8a] underline underline-offset-2 hover:text-white duration-150"
          >
            거부
          </button>
        </div>
      </div>
    </div>
  );
}
