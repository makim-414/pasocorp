"use client";

import Link from "next/link";
import { ExternalLink, Instagram, Mail } from "lucide-react";

const linksBrands = [
  {
    group: "Brands",
    items: [
      { title: "Paso Gallery", href: "https://pasogallery.com" },
      { title: "Paso Agency", href: "/brands/paso-agency" },
      { title: "Artrader", href: "/brands/artrader" },
      { title: "Artledger Consulting", href: "/brands/artledger-consulting" },
      { title: "PASO Art Center", href: "/brands/paso-art-center" },
    ],
  },
];

const linksServices = [
  {
    group: "Services",
    items: [
      { title: "Art Advisory", href: "/solutions" },
      { title: "Collection Management", href: "/solutions" },
      { title: "Exhibition Curation", href: "/solutions" },
      { title: "Market Analysis", href: "/solutions" },
      { title: "Art Investment", href: "/solutions" },
      { title: "Space Rental", href: "/contact" },
    ],
  },
];

const linksCompany = [
  {
    group: "Company",
    items: [
      { title: "About", href: "/about" },
      { title: "Contact", href: "/contact" },
      { title: "Careers", href: "/contact" },
      { title: "이용약관", href: "/terms" },
      { title: "개인정보처리방침", href: "/privacy" },
    ],
  },
];

const locations = [
  {
    name: "Office",
    address: "서울 성북구 삼선교로23가길 72",
    detail: "인터블루 1층",
  },
  {
    name: "Gallery",
    address: "서울 종로구 성균관로 92",
    detail: "한옥 빌딩",
  },
  {
    name: "Art Center",
    address: "마곡중앙4로 66, 2층",
    detail: "Seoul, Magok",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0a0a0a] py-16">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Links Grid */}
        <div className="grid gap-14 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Brands */}
          <div className="space-y-3 text-sm">
            <span className="block font-medium text-white">{linksBrands[0].group}</span>
            {linksBrands[0].items.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-[#666] hover:text-[#999] block duration-150"
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="https://artrader.io"
              target="_blank"
              className="text-[#666] hover:text-[#999] flex gap-1 items-center text-sm duration-150"
            >
              Artrader.io
              <ExternalLink size={14} />
            </Link>
          </div>

          {/* Services */}
          <div className="space-y-3 text-sm">
            <span className="block font-medium text-white">{linksServices[0].group}</span>
            {linksServices[0].items.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="text-[#666] hover:text-[#999] block duration-150"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div className="space-y-3 text-sm">
            <span className="block font-medium text-white">{linksCompany[0].group}</span>
            {linksCompany[0].items.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="text-[#666] hover:text-[#999] block duration-150"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Locations */}
          <div className="space-y-3 text-sm">
            <span className="block font-medium text-white">Locations</span>
            {locations.map((loc, i) => (
              <div key={i} className="space-y-0.5">
                <span className="text-[#666] block text-xs uppercase tracking-wider">{loc.name}</span>
                <span className="text-[#555] block text-xs">{loc.address}</span>
              </div>
            ))}
          </div>

          {/* Social + Logo */}
          <div className="space-y-3 text-sm">
            <span className="block font-medium text-white">Social</span>
            <Link
              href="https://www.instagram.com/pasoartcenter"
              target="_blank"
              className="text-[#666] hover:text-[#999] flex gap-2 items-center duration-150"
            >
              <Instagram size={14} />
              Instagram
            </Link>
            <Link
              href="mailto:makim@ironact.net"
              className="text-[#666] hover:text-[#999] flex gap-2 items-center duration-150"
            >
              <Mail size={14} />
              Email
            </Link>
            <div className="pt-4">
              <Link href="https://pasocorp.com" target="_blank" className="text-white font-semibold tracking-tight text-lg hover:text-[#b8960b] transition-colors duration-300">PASO</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-[#1a1a1a] pt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-xs text-[#555]">
            <span>CEO 김민성</span>
            <span>사업자등록번호: 877-25-00849</span>
            <span>+82 10-6432-4471</span>
            <span>© PASO {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
