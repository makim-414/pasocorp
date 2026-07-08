"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const { t } = useLocale();

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
          {t("cookie.text")}{" "}
          <Link
            href="/privacy#cookie"
            className="text-[#d4d4d4] underline underline-offset-2 hover:text-white duration-150"
          >
            {t("cookie.privacy")}
          </Link>
        </p>
        <div className="mt-3 flex items-center gap-4">
          <button
            onClick={accept}
            className="bg-white px-4 py-1.5 text-xs font-medium text-black hover:bg-[#ddd] duration-150"
          >
            {t("cookie.accept")}
          </button>
          <button
            onClick={decline}
            className="text-xs text-[#8a8a8a] underline underline-offset-2 hover:text-white duration-150"
          >
            {t("cookie.decline")}
          </button>
        </div>
      </div>
    </div>
  );
}
