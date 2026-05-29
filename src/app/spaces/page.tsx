import StandaloneNav from "@/components/StandaloneNav";
import StandaloneFooter from "@/components/StandaloneFooter";
import SpacesContent from "./SpacesContent";
import SiteModeCookieSync from "@/components/SiteModeCookieSync";
import { headers } from "next/headers";

export const metadata = {
  title: "Spaces — Paso Gallery",
  description: "A hanok gallery in Jongno-gu, Seoul. Two exhibition rooms — Light Room and Dark Room — each with its own atmosphere.",
};

export default async function SpacesPage() {
  // True only when the middleware (real pasogallery.com domain) set the header.
  // We deliberately do NOT use getSiteMode() here because the cookie fallback
  // would also flip this to true on localhost and break the home link.
  const onStandaloneDomain = (await headers()).get("x-site-mode") === "pasogallery";
  // On the actual pasogallery domain "/" goes home; on localhost,
  // route home back into the brand site so users don't leak out to corp pages
  const homeHref = onStandaloneDomain ? "/" : "/brands/paso-gallery";
  const contactHref = onStandaloneDomain ? "/contact" : "/gallery-contact";
  const navLinks = [
    { label: "Exhibitions", href: onStandaloneDomain ? "/#exhibitions" : "/brands/paso-gallery#exhibitions" },
    { label: "Spaces", href: "/spaces" },
    { label: "About", href: "/about" },
    { label: "Request", href: contactHref, isButton: true },
  ];

  return (
    <div className="bg-black min-h-screen">
      {!onStandaloneDomain && <SiteModeCookieSync siteMode="pasogallery" />}
      <StandaloneNav
        siteName="Pasogallery"
        homeHref={homeHref}
        links={navLinks}
        accentColor="#e5e5e5"
      />
      <SpacesContent />
      <StandaloneFooter
        siteName="Pasogallery"
        address="92, Seonggyungwan-ro, Jongno-gu"
        addressDetail="Seoul, Hanok Building"
        instagram="https://www.instagram.com/pasogallery"
          email="info@pasogallery.com"
      />
    </div>
  );
}
