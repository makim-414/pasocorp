"use client";

import Link from "next/link";
import { ExternalLink, Instagram, Mail } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";

const brandItems = [
  { title: "Artrader", href: "/brands/artrader" },
  { title: "Paso Agency", href: "/brands/paso-agency" },
  { title: "Paso Gallery", href: "https://pasogallery.com" },
];

const serviceItems = [
  { title: "Data & Market Intelligence", href: "/solutions#artrader" },
  { title: "Art Asset Advisory", href: "/solutions#artrader" },
  { title: "Exhibition & Spaces", href: "/solutions#paso-gallery" },
  { title: "IP & Brand Collaboration", href: "/solutions#paso-agency" },
];

export default function Footer() {
  const { t } = useLocale();

  const companyItems = [
    { title: t("footer.about"), href: "/about" },
    { title: t("footer.spaces"), href: "/spaces" },
    { title: t("footer.contact"), href: "/contact" },
    { title: t("footer.terms"), href: "/terms" },
    { title: t("footer.privacy"), href: "/privacy" },
  ];

  const locations = [
    { name: t("footer.office"), address: t("footer.office_addr") },
    { name: t("footer.gallery_label"), address: t("footer.gallery_addr") },
  ];

  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0a0a0a] py-16">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Links Grid */}
        <div className="grid gap-14 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Brands */}
          <div className="space-y-3 text-sm">
            <span className="block font-medium text-white">{t("footer.brands")}</span>
            {brandItems.map((item, i) => (
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
            <span className="block font-medium text-white">{t("footer.services")}</span>
            {serviceItems.map((item, i) => (
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
            <span className="block font-medium text-white">{t("footer.company")}</span>
            {companyItems.map((item, i) => (
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
            <span className="block font-medium text-white">{t("footer.locations")}</span>
            {locations.map((loc, i) => (
              <div key={i} className="space-y-0.5">
                <span className="text-[#666] block text-xs uppercase tracking-wider">{loc.name}</span>
                <span className="text-[#555] block text-xs">{loc.address}</span>
              </div>
            ))}
          </div>

          {/* Social + Logo */}
          <div className="space-y-3 text-sm">
            <span className="block font-medium text-white">{t("footer.social")}</span>
            <Link
              href="https://www.instagram.com/pasoartcenter"
              target="_blank"
              className="text-[#666] hover:text-[#999] flex gap-2 items-center duration-150"
            >
              <Instagram size={14} />
              Instagram
            </Link>
            <Link
              href="mailto:info@pasogallery.com"
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
            <span>{t("footer.ceo")}</span>
            <span>{t("footer.biz_no")}</span>
            <span>{t("footer.phone")}</span>
            <span>© PASO {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
