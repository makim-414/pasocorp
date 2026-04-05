"use client";
import { useEffect, useState } from "react";

let cachedRate: number | null = null;

export function useExchangeRate() {
  const [rate, setRate] = useState<number | null>(cachedRate);

  useEffect(() => {
    if (cachedRate) { setRate(cachedRate); return; }
    fetch("/api/exchange-rate")
      .then((r) => r.json())
      .then((data) => { cachedRate = data.rate; setRate(data.rate); })
      .catch(() => { cachedRate = 1380; setRate(1380); });
  }, []);

  return rate;
}

export function convertToKRW(hammer: string, rate: number): string | null {
  const usdMatch = hammer.match(/USD\s*([\d,]+)/i);
  const eurMatch = hammer.match(/EUR\s*([\d,]+)/i);
  const gbpMatch = hammer.match(/GBP\s*([\d,]+)/i);
  const hkdMatch = hammer.match(/HKD\s*([\d,]+)/i);

  let amount = 0;
  let multiplier = rate;

  if (usdMatch) {
    amount = parseInt(usdMatch[1].replace(/,/g, ""), 10);
  } else if (eurMatch) {
    amount = parseInt(eurMatch[1].replace(/,/g, ""), 10);
    multiplier = rate * 1.08; // EUR → USD → KRW approximate
  } else if (gbpMatch) {
    amount = parseInt(gbpMatch[1].replace(/,/g, ""), 10);
    multiplier = rate * 1.27; // GBP → USD → KRW approximate
  } else if (hkdMatch) {
    amount = parseInt(hkdMatch[1].replace(/,/g, ""), 10);
    multiplier = rate * 0.128; // HKD → USD → KRW approximate
  } else {
    return null; // Already KRW (₩) or unknown
  }

  const krw = Math.round(amount * multiplier);
  if (krw >= 100000000) {
    const eok = krw / 100000000;
    return `약 ${eok.toFixed(1)}억원`;
  }
  if (krw >= 10000) {
    const man = Math.round(krw / 10000);
    return `약 ${man.toLocaleString()}만원`;
  }
  return `약 ₩${krw.toLocaleString()}`;
}
