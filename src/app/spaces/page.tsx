import StandaloneNav from "@/components/StandaloneNav";
import StandaloneFooter from "@/components/StandaloneFooter";
import SpacesContent from "./SpacesContent";

export const metadata = {
  title: "Spaces — Paso Gallery",
  description: "A hanok gallery in Jongno-gu, Seoul. Two exhibition rooms — Light Room and Dark Room — each with its own atmosphere.",
};

export default async function SpacesPage() {
  const navLinks = [
    { label: "Exhibitions", href: "/#exhibitions" },
    { label: "Spaces", href: "/spaces" },
    { label: "About", href: "/about" },
    { label: "Request", href: "/contact", isButton: true },
  ];

  return (
    <div className="bg-black min-h-screen">
      <StandaloneNav
        siteName="Pasogallery"
        homeHref="https://pasogallery.com"
        links={navLinks}
        accentColor="#b8960b"
      />
      <SpacesContent />
      <StandaloneFooter
        siteName="Pasogallery"
        address="92, Seonggyungwan-ro, Jongno-gu"
        addressDetail="Seoul, Hanok Building"
        instagram="https://www.instagram.com/pasogallery"
      />
    </div>
  );
}
