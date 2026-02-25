"use client";

const brandLinks = [
  { name: "Paso Gallery", href: "/brands/paso-gallery" },
  { name: "Paso Agency", href: "/brands/paso-agency" },
  { name: "Artrader", href: "/brands/artrader" },
  { name: "Artledger Consulting", href: "/brands/artledger-consulting" },
  { name: "PASO Art Center", href: "/brands/paso-art-center" },
];

const locations = [
  { name: "Office", address: "서울 성북구 삼선교로23가길 72", detail: "인터블루 1층" },
  { name: "Gallery", address: "92, Seonggyungwan-ro, Jongno-gu, Seoul", detail: "Hanok Building" },
  { name: "Art Center", address: "Opening 2025", detail: "with Mass C&G" },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#1a1a1a] bg-[#0a0a0a]">
      {/* Brand nav */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8 flex flex-wrap gap-x-2 gap-y-2 text-[10px] tracking-[0.15em] uppercase text-[#555]">
        {brandLinks.map((b, i) => (
          <span key={b.name} className="flex items-center gap-2">
            <a href={b.href} className="hover:text-[#888] transition-colors">{b.name}</a>
            {i < brandLinks.length - 1 && <span className="text-[#2a2a2a]">|</span>}
          </span>
        ))}
      </div>

      <div className="border-t border-[#1a1a1a]" />

      {/* Locations */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {locations.map((loc) => (
          <div key={loc.name}>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#555] mb-3">{loc.name}</p>
            <p className="text-sm text-[#888] font-light">{loc.address}</p>
            <p className="text-sm text-[#555] font-light">{loc.detail}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-[#1a1a1a]" />

      {/* Contact + copyright */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-xs text-[#555] font-light">
          <a href="mailto:makim@ironact.net" className="hover:text-[#888] transition-colors">makim@ironact.net</a>
          <span>CEO Min Sung Kim</span>
          <span>+82 10-6432-4471</span>
        </div>
        <p className="text-xs text-[#555] font-light">© PASO Inc. 2026</p>
      </div>
    </footer>
  );
}
