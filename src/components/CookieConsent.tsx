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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
      <div className="mx-auto max-w-[600px] rounded-xl border border-[#222] bg-[#111]/95 backdrop-blur-md p-5 shadow-2xl pointer-events-auto">
        <p className="text-sm text-[#aaa] leading-relaxed">
          {t("cookie.text")}{" "}
          <Link
            href="/privacy#cookie"
            className="text-white underline underline-offset-2 hover:text-[#b8960b] duration-150"
          >
            {t("cookie.privacy")}
          </Link>
        </p>
        <div className="mt-4 flex gap-3">
          <button
            onClick={accept}
            className="rounded-lg bg-white px-5 py-2 text-sm font-medium text-black hover:bg-[#ddd] duration-150"
          >
            {t("cookie.accept")}
          </button>
          <button
            onClick={decline}
            className="rounded-lg border border-[#333] px-5 py-2 text-sm font-medium text-[#888] hover:text-white hover:border-[#555] duration-150"
          >
            {t("cookie.decline")}
          </button>
        </div>
      </div>
    </div>
  );
}
