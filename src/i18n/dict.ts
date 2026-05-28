export type Locale = "ko" | "en";

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALES: Locale[] = ["en", "ko"];

type Dict = Record<string, { en: string; ko: string }>;

export const dict: Dict = {
  // Navbar
  "nav.about": { en: "About", ko: "About" },
  "nav.solutions": { en: "Solutions", ko: "Solutions" },
  "nav.brands": { en: "Brands", ko: "Brands" },
  "nav.contact": { en: "Contact", ko: "Contact" },
  "nav.menu_open": { en: "Open menu", ko: "메뉴 열기" },
  "nav.menu_close": { en: "Close menu", ko: "메뉴 닫기" },
  "nav.aria": { en: "Main navigation", ko: "메인 내비게이션" },

  // Hero / homepage
  "hero.tag": { en: "Strategic Art Advisory", ko: "데이터 기반 미술 자산 전략" },
  "hero.subtitle": {
    en: "Data-driven art investment, gallery operations, and IP licensing — powered by 15.8M auction records.",
    ko: "1,580만 건 데이터로 미술품 투자 자문, 갤러리 운영, IP 라이선싱을 연결합니다.",
  },
  "hero.cta_get_in_touch": { en: "Get in Touch", ko: "문의하기" },
  "hero.scroll": { en: "Scroll", ko: "Scroll" },
  "hero.brands_label": { en: "Our Brands", ko: "브랜드" },

  // Footer
  "footer.brands": { en: "Brands", ko: "Brands" },
  "footer.services": { en: "Services", ko: "Services" },
  "footer.company": { en: "Company", ko: "Company" },
  "footer.locations": { en: "Locations", ko: "Locations" },
  "footer.social": { en: "Social", ko: "Social" },
  "footer.office": { en: "OFFICE", ko: "OFFICE" },
  "footer.gallery_label": { en: "GALLERY", ko: "GALLERY" },
  "footer.office_addr": { en: "72 Samseongyo-ro 23ga-gil, Seongbuk-gu, Seoul", ko: "서울 성북구 삼선교로23가길 72" },
  "footer.gallery_addr": { en: "92 Sungkyunkwan-ro, Jongno-gu, Seoul", ko: "서울 종로구 성균관로 92" },
  "footer.about": { en: "About", ko: "About" },
  "footer.contact": { en: "Contact", ko: "Contact" },
  "footer.careers": { en: "Careers", ko: "Careers" },
  "footer.terms": { en: "Terms", ko: "이용약관" },
  "footer.privacy": { en: "Privacy", ko: "개인정보처리방침" },
  "footer.copyright": { en: "© PASO 2026", ko: "© PASO 2026" },
  "footer.ceo": { en: "CEO Min Sung Kim", ko: "CEO 김민성" },
  "footer.biz_no": { en: "Business No. 877-25-00849", ko: "사업자등록번호: 877-25-00849" },
  "footer.phone": { en: "+82 2-925-3631", ko: "02-925-3631" },

  // About
  "about.tag": { en: "About PASO", ko: "About" },
  "about.title": { en: "Art as an Asset Class", ko: "Art as an Asset Class" },
  "about.lead": {
    en: "PASO is a Seoul-based art group connecting investment advisory, gallery operations, IP licensing, and proprietary auction data. Founded in 2020 by Min Sung Kim — Forbes 30 Under 30.",
    ko: "파소는 데이터 기반 미술 자산 전략을 제공하는 서울 기반의 아트 그룹입니다. 투자 자문, 갤러리 운영, IP 라이선싱, 옥션 데이터를 하나로 연결합니다. 2020년 설립, 창업자 김민성(Forbes 30 Under 30).",
  },

  // Contact
  "contact.tag": { en: "Contact", ko: "Contact" },
  "contact.title": { en: "Get in Touch", ko: "Get in Touch" },
  "contact.lead": {
    en: "For exhibitions, advisory, brand partnerships, and data inquiries — reach out to PASO.",
    ko: "프로젝트 문의, 협업 제안, 전시 자문. 파소(PASO)에 연락하세요.",
  },
  "contact.email": { en: "Email", ko: "Email" },
  "contact.phone": { en: "Phone", ko: "Phone" },
  "contact.location": { en: "Location", ko: "Location" },
  "contact.find_us": { en: "Find Us", ko: "Find Us" },
  "contact.inquiries": { en: "Inquiries", ko: "Inquiries" },
  "contact.how_help": { en: "How Can We Help?", ko: "How Can We Help?" },
  "contact.inq.exhibition": { en: "Exhibitions", ko: "전시 문의" },
  "contact.inq.exhibition_desc": { en: "Gallery exhibitions, pop-ups, and events", ko: "갤러리 전시, 팝업, 이벤트 문의" },
  "contact.inq.advisory": { en: "Advisory", ko: "자문 서비스" },
  "contact.inq.advisory_desc": { en: "Art tax planning, asset management, collection advisory", ko: "미술품 절세, 자산관리, 컬렉팅 자문" },
  "contact.inq.brand": { en: "Brand Partnerships", ko: "브랜드 협업" },
  "contact.inq.brand_desc": { en: "Character IP, art project collaborations", ko: "캐릭터 IP, 아트 프로젝트 콜라보레이션" },
  "contact.inq.data": { en: "Data & Reports", ko: "데이터 & 리포트" },
  "contact.inq.data_desc": { en: "Artrader platform, Artist Index subscription", ko: "Artrader 플랫폼, Artist Index 구독" },

  // Locale toggle
  "locale.switch_to_en": { en: "한국어", ko: "한국어" },
  "locale.switch_to_ko": { en: "English", ko: "English" },
  "locale.aria": { en: "Switch language", ko: "언어 변경" },
};

export function t(key: string, locale: Locale): string {
  const entry = dict[key];
  if (!entry) return key;
  return entry[locale] ?? entry.en ?? key;
}
