export interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

export interface CardItem {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
  href: string;
  featured?: boolean;
}

export const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Art Center",
    href: "#",
    children: [
      { label: "Exhibitions", href: "#" },
      { label: "Events", href: "#" },
      { label: "Open Call", href: "#" },
    ],
  },
  {
    label: "Artrader",
    href: "#",
    children: [
      { label: "Platform", href: "#" },
      { label: "Artists", href: "#" },
    ],
  },
  {
    label: "Advisory",
    href: "#",
    children: [
      { label: "Art Consulting", href: "#" },
      { label: "Space Design", href: "#" },
      { label: "Corporate Art", href: "#" },
    ],
  },
  {
    label: "Spaces",
    href: "#",
    children: [
      { label: "Gallery Rental", href: "#" },
      { label: "Event Space", href: "#" },
      { label: "Coworking", href: "#" },
    ],
  },
  {
    label: "Community",
    href: "#",
    children: [
      { label: "Art Salon", href: "#" },
      { label: "Workshops", href: "#" },
      { label: "Newsletter", href: "#" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Team", href: "/about" },
      { label: "Partners", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const feedCards: CardItem[] = [
  {
    id: "1",
    title: "Paso Private Sales",
    description:
      "Paso Gallery에서 진행하는 프라이빗 세일. 엄선된 작품을 프라이빗하게 만나보세요.",
    date: "Now Available",
    tags: ["Sales", "Gallery"],
    image: "/brands/paso-gallery-heritage.jpg",
    href: "/brands/paso-gallery",
    featured: true,
  },
  {
    id: "2",
    title: "프리오프닝 상설전",
    description:
      "PASO Art Center의 첫 전시. 동시대 미술의 새로운 시선을 마곡에서 만나보세요.",
    date: "Now Showing",
    tags: ["Exhibition"],
    image: "/brands/paso-gallery-reborn.jpg",
    href: "/brands/paso-art-center",
    featured: true,
  },
  {
    id: "3",
    title: "Artrader — Art Trading Platform",
    description:
      "미술품 거래의 새로운 표준. 투명한 가격, 안전한 거래, 전문가 큐레이션.",
    date: "Coming 2026",
    tags: ["Platform", "Artrader"],
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=80",
    href: "#",
  },
  {
    id: "4",
    title: "마곡 아트 살롱",
    description:
      "마곡 주민과 함께하는 월간 아트 토크. 와인 한 잔과 미술 이야기.",
    date: "Monthly",
    tags: ["Community"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80",
    href: "#",
  },
  {
    id: "5",
    title: "Corporate Art Advisory",
    description:
      "기업 공간을 위한 아트 컨설팅. 오피스, 로비, 공용공간에 예술적 가치를.",
    date: "Service",
    tags: ["Advisory"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    href: "#",
  },
  {
    id: "6",
    title: "아트 컬렉팅 워크숍",
    description:
      "처음 미술품을 구매하려는 분들을 위한 실전 워크숍. 감상에서 소장까지.",
    date: "Mar 2026",
    tags: ["Workshop", "Community"],
    image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=900&q=80",
    href: "#",
  },
  {
    id: "7",
    title: "Gallery Space Rental",
    description:
      "전시, 팝업, 프라이빗 이벤트를 위한 갤러리 대관. 마곡의 문화 거점.",
    date: "Available",
    tags: ["Space"],
    image: "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?w=900&q=80",
    href: "#",
  },
  {
    id: "8",
    title: "Young Artists Open Call",
    description:
      "신진 작가 공모. PASO Art Center에서 첫 개인전의 기회를.",
    date: "Applications Open",
    tags: ["Exhibition", "Open Call"],
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=900&q=80",
    href: "#",
  },
  {
    id: "9",
    title: "아트 필름 스크리닝",
    description:
      "동시대 미술 다큐멘터리 상영 시리즈. 매월 셋째 주 토요일.",
    date: "Coming Soon",
    tags: ["Film", "Event"],
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=900&q=80",
    href: "#",
  },
  {
    id: "10",
    title: "PORSCHE × PASO",
    description:
      "포르쉐 프런티어 파트너십. 자동차와 예술이 만나는 특별한 경험.",
    date: "2026",
    tags: ["Partnership"],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80",
    href: "#",
  },
];
