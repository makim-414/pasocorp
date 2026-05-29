"use client";

import { useEffect } from "react";

/**
 * Sets a cookie `site-mode-override` on mount so other pages (e.g. /about, /spaces, /contact)
 * render the brand-specific variant even when accessed without the standalone domain.
 *
 * Used only on slug-based standalone access (e.g. localhost/brands/paso-gallery).
 * On the real standalone domain (pasogallery.com), the middleware sets the header
 * directly and this cookie is a no-op fallback.
 */
export default function SiteModeCookieSync({ siteMode }: { siteMode: string }) {
  useEffect(() => {
    // Session cookie (no Max-Age) so it auto-clears when browser closes
    document.cookie = `site-mode-override=${encodeURIComponent(siteMode)}; path=/; SameSite=Lax`;
  }, [siteMode]);
  return null;
}
