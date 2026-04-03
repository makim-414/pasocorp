import StandaloneNav from "@/components/StandaloneNav";
import StandaloneFooter from "@/components/StandaloneFooter";
import SpacesContent from "./SpacesContent";

export const metadata = {
  title: "Spaces — Paso Gallery",
  description: "서울 종로구 한옥 갤러리. Light Room과 Dark Room, 두 개의 전시실이 서로 다른 분위기를 연출합니다.",
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
        siteName="Paso Gallery"
        homeHref="/"
        links={navLinks}
        accentColor="#b8960b"
      />
      <SpacesContent />
      <StandaloneFooter
        siteName="Paso Gallery"
        address="92, Seonggyungwan-ro, Jongno-gu"
        addressDetail="Seoul, Hanok Building"
        instagram="https://www.instagram.com/pasogallery"
      />
    </div>
  );
}
