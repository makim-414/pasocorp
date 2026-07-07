"use client";

import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

interface StandaloneFooterProps {
  siteName: string;
  address?: string;
  addressDetail?: string;
  instagram?: string;
  email?: string;
  corpLink?: string;
}

export default function StandaloneFooter({
  siteName,
  address,
  addressDetail,
  instagram,
  email = "makim@ironact.net",
  corpLink = "https://pasocorp.com",
}: StandaloneFooterProps) {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand */}
          <div className="space-y-2">
            <Link href={corpLink} target="_blank" className="text-white font-semibold tracking-tight text-lg hover:text-[#e5e5e5] transition-colors">PASO</Link>
            {address && (
              <div className="text-[#555] text-xs space-y-0.5">
                <p>{address}</p>
                {addressDetail && <p>{addressDetail}</p>}
              </div>
            )}
          </div>

          {/* Social */}
          <div className="flex items-center gap-6 text-sm">
            {instagram && (
              <Link
                href={instagram}
                target="_blank"
                className="text-[#666] hover:text-[#999] flex gap-2 items-center duration-150"
              >
                <Instagram size={14} />
                Instagram
              </Link>
            )}
            <Link
              href={`mailto:${email}`}
              className="text-[#666] hover:text-[#999] flex gap-2 items-center duration-150"
            >
              <Mail size={14} />
              Email
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-border pt-6 flex flex-wrap items-center justify-between gap-4">
          <Link href={corpLink} target="_blank" className="text-xs text-[#444] hover:text-[#666] transition-colors">
            A PASO Corp Brand
          </Link>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-xs text-[#555]">
            <Link href="/privacy" className="hover:text-muted transition-colors">개인정보처리방침</Link>
            <Link href="/terms" className="hover:text-muted transition-colors">이용약관</Link>
            <span>© {siteName} {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
