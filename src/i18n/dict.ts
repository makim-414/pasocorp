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

  // BrandHub
  "brandhub.tag": { en: "Our Brands", ko: "Our Brands" },
  "brandhub.title": { en: "Five Brands, One Vision", ko: "Five Brands, One Vision" },
  "brandhub.paso_gallery.target": { en: "For Collectors & Art Lovers", ko: "컬렉터와 예술 애호가를 위해" },
  "brandhub.paso_gallery.desc": {
    en: "Curating emerging and rising artists from Korea and abroad, with private programmes guiding young collectors through their first acquisitions.",
    ko: "국내외 신진·라이징 작가를 엄선하여 소개하며, 영 컬렉터를 위한 프라이빗 프로그램을 통해 컬렉팅의 첫 걸음을 함께합니다.",
  },
  "brandhub.art_center.target": { en: "For Exhibitions & Community", ko: "전시와 커뮤니티를 위해" },
  "brandhub.art_center.desc": {
    en: "A standing exhibition of 70+ blue-chip and top-auction works alongside emerging-artist IP expansion projects.",
    ko: "블루칩·옥션 상위권 작품 70여 점 상설전과 이머징 작가 IP 확장 프로젝트를 전개합니다.",
  },
  "brandhub.art_center.activity": { en: "Opens 2025 (with Mass C&G)", ko: "2025 오픈 (with Mass C&G)" },
  "brandhub.artrader.target": { en: "For Data-Driven Decisions", ko: "데이터 기반 의사결정을 위해" },
  "brandhub.artrader.desc": {
    en: "An art trading platform and corporate-collection database that calculates fair-market acquisition prices from 15M+ global auction records.",
    ko: "1,500만 건 글로벌 옥션 데이터로 적정 매입가를 산출하는 미술품 거래 플랫폼이자 법인 컬렉션 데이터베이스.",
  },
  "brandhub.artrader.activity": { en: "Real-time analysis on 15M+ transactions", ko: "1,500만+ 거래 데이터 실시간 분석" },
  "brandhub.agency.target": { en: "For Brands & IP Partners", ko: "브랜드와 IP 파트너를 위해" },
  "brandhub.agency.desc": {
    en: "We design sustainable IP structures that protect both brand and artist value.",
    ko: "브랜드와 작가 양측의 IP 가치를 지속 가능한 구조로 설계합니다.",
  },
  "brandhub.artledger.target": { en: "For Tax & Asset Advisory", ko: "세무 및 자산 자문을 위해" },
  "brandhub.artledger.desc": {
    en: "Expert advisory across art tax planning, corporate collection management, and the full transaction lifecycle.",
    ko: "미술품 절세, 법인 컬렉션 운용, 거래 전 과정을 전문적으로 자문합니다.",
  },

  // Services
  "services.tag": { en: "Services", ko: "Services" },
  "services.title": { en: "How We Work", ko: "How We Work" },
  "services.artrader.desc": {
    en: "Market analysis and quantitative reports built on 15M+ auction records.",
    ko: "1,500만 건 경매 데이터 기반 시세 분석과 정량 리포트.",
  },
  "services.artledger.desc": {
    en: "Art tax advisory, corporate asset management, and collection rebalancing.",
    ko: "미술품 절세, 법인 자산 관리, 컬렉션 리밸런싱 자문.",
  },
  "services.gallery.desc": {
    en: "Emerging-artist exhibitions, blue-chip standing shows, and art salon programmes.",
    ko: "신진 작가 전시, 블루칩 상설전, 아트 살롱 프로그램.",
  },
  "services.agency.desc": {
    en: "Brand art projects, IP licensing, and spatial collaborations.",
    ko: "브랜드 아트 프로젝트, IP 라이선싱, 공간 콜라보레이션.",
  },

  // PersonaSelector
  "persona.tag": { en: "For You", ko: "For You" },
  "persona.title": { en: "What kind of help do you need?", ko: "어떤 도움이 필요하신가요?" },
  "persona.corporate.title": { en: "Looking for corporate art assets?", ko: "법인 미술 자산이 필요하신가요?" },
  "persona.corporate.desc": { en: "Gifting & inheritance, corporate tax savings, portfolio building.", ko: "증여·상속, 법인세 절감, 포트폴리오 구축" },
  "persona.brand.title": { en: "Planning a brand × art collaboration?", ko: "브랜드 × 아트 콜라보를 계획 중이신가요?" },
  "persona.brand.desc": { en: "Character IP, pop-up exhibitions, brand event spaces.", ko: "캐릭터 IP, 팝업 전시, 브랜드 행사 공간" },
  "persona.collector.title": { en: "Entering the art market?", ko: "미술 시장에 진입하고 싶으신가요?" },
  "persona.collector.desc": { en: "15M+ transaction records, emerging-artist collections.", ko: "1,500만 건 거래 데이터, 신진작가 컬렉션" },

  // Ecosystem
  "ecosystem.title": { en: "PASO Integrated Ecosystem", ko: "PASO Integrated Ecosystem" },
  "ecosystem.lead": {
    en: "Anchored by the gallery — data, advisory, exhibitions, and IP all connect through one ecosystem.",
    ko: "갤러리를 중심으로, 데이터·자문·전시·IP가 하나로 연결됩니다.",
  },
  "ecosystem.note": {
    en: "Paso Gallery is the core brand of the PASO ecosystem, responsible for everything from emerging-artist discovery to market connection.",
    ko: "Paso Gallery는 PASO 생태계의 핵심 브랜드로, 신진작가 발굴부터 시장 연결까지를 담당합니다.",
  },

  // Flywheel brand short labels
  "flywheel.artrader.short": { en: "Data · Analytics", ko: "데이터 · 분석" },
  "flywheel.artledger.short": { en: "Advisory · Tax", ko: "자문 · 절세" },
  "flywheel.artcenter.short": { en: "Exhibition · Community", ko: "전시 · 커뮤니티" },
  "flywheel.gallery.short": { en: "Emerging · MD", ko: "신진작가 · MD" },
  "flywheel.agency.short": { en: "IP · Brand", ko: "IP · 브랜드" },
  "flywheel.synergy": { en: "Synergy", ko: "시너지" },
  "flywheel.conn.market_data": { en: "Market data provision", ko: "시장 데이터 제공" },
  "flywheel.conn.value_analysis": { en: "Valuation support", ko: "가치 분석 보완" },
  "flywheel.conn.ip_supply": { en: "IP artist exhibition supply", ko: "IP 작가 전시 공급" },
  "flywheel.conn.art_toy": { en: "Art toy collaboration", ko: "아트토이 콜라보" },
  "flywheel.conn.advisory": { en: "Client asset advisory", ko: "고객 자산 자문" },
  "flywheel.conn.collector_support": { en: "Collector acquisition support", ko: "컬렉터 인수 지원" },
  "flywheel.conn.primary_data": { en: "Primary-market transaction data", ko: "1차 시장 거래 데이터" },
  "flywheel.conn.secondary_market": { en: "Secondary-market sourcing", ko: "2차 시장 매물 연결" },

  // HoverPreviewProcess
  "hpp.gallery.subtitle": { en: "Emerging artists · Exhibitions · Art MD", ko: "신진작가 발굴 · 전시 · 아트 MD" },
  "hpp.artcenter.subtitle": { en: "Standing exhibitions · Art salons · Community", ko: "상설전시 · 아트 살롱 · 커뮤니티" },
  "hpp.artrader.subtitle": { en: "Market analysis on 15M+ transactions", ko: "1,500만+ 거래 데이터 기반 시세 분석" },
  "hpp.artledger.subtitle": { en: "Art tax · Corporate advisory · Private Sale", ko: "미술품 절세 · 법인 자문 · Private Sale" },
  "hpp.agency.subtitle": { en: "Character IP · B2B art projects", ko: "캐릭터 IP · B2B 아트 프로젝트" },
  "hpp.line1": {
    en: "We discover emerging artists at {gallery} and present 70+ blue-chip works at {artcenter}.",
    ko: "{gallery}에서 신진 작가를 발굴하고, {artcenter}에서 블루칩 작품 70여 점을 상시 전시합니다.",
  },
  "hpp.line2": {
    en: "{artrader} calculates fair prices from 15M auction records, and {artledger} advises on tax and corporate-collection strategy. {agency} designs sustainable IP value for both brands and artists.",
    ko: "{artrader}의 1,500만 건 옥션 데이터로 적정가를 산출하고, {artledger}이 절세와 법인 컬렉션 운용을 자문합니다. {agency}는 브랜드와 작가 양측의 IP 가치를 설계합니다.",
  },

  // DynamicSections (Top + Bottom)
  "dynamic.about_paso": { en: "About PASO", ko: "About PASO" },
  "dynamic.about_lead": {
    en: "From data-driven trading advisory and gallery/museum operations to corporate-collection consulting and art project management — we connect everything across the art ecosystem.",
    ko: "데이터 기반 거래 자문, 갤러리·미술관 운영, 기업 컬렉션 자문, 미술 프로젝트 운용까지—미술 생태계의 모든 것을 연결합니다.",
  },
  "dynamic.now_upcoming": { en: "Now & Upcoming", ko: "Now & Upcoming" },
  "dynamic.whats_happening": { en: "What's Happening", ko: "What's Happening" },
  "dynamic.card.paso_private_sales.title": { en: "Paso Private Sales", ko: "Paso Private Sales" },
  "dynamic.card.paso_private_sales.desc": { en: "Private sales by Paso Gallery", ko: "Paso Gallery의 프라이빗 세일" },
  "dynamic.card.preopening.title": { en: "Pre-Opening Standing Show", ko: "프리오프닝 상설전" },
  "dynamic.card.preopening.desc": { en: "PASO Art Center's debut exhibition", ko: "PASO Art Center의 첫 전시" },
  "dynamic.card.magok_salon.title": { en: "Magok Art Salon", ko: "마곡 아트 살롱" },
  "dynamic.card.magok_salon.desc": { en: "Monthly community art talks", ko: "월간 커뮤니티 아트 토크" },

  // Solutions page
  "solutions.hero.title": { en: "Integrated Art Solutions", ko: "Integrated Art Solutions" },
  "solutions.hero.lead": {
    en: "From data analytics to advisory, exhibitions, and IP licensing — every link in the art value chain, unified.",
    ko: "데이터 분석부터 자문, 전시, IP 라이선싱까지. 미술 생태계의 모든 가치 사슬을 하나로.",
  },
  "solutions.learn_more": { en: "Learn More", ko: "Learn More" },
  "solutions.artrader.title": { en: "Data & Market Intelligence", ko: "Data & Market Intelligence" },
  "solutions.artrader.desc": {
    en: "Market analysis platform built on 15M+ global auction and private-sale transactions.",
    ko: "글로벌 경매·Private Sales 1,500만+ 거래 데이터 기반 시장 분석 플랫폼",
  },
  "solutions.artrader.f1": { en: "Artist Index quantitative reports", ko: "Artist Index 정량 리포트" },
  "solutions.artrader.f2": { en: "Real-time auction data", ko: "실시간 경매 데이터" },
  "solutions.artrader.f3": { en: "Portfolio valuation monitoring", ko: "포트폴리오 가치 모니터링" },
  "solutions.artrader.f4": { en: "Trend prediction signals", ko: "트렌드 예측 시그널" },
  "solutions.artledger.title": { en: "Advisory & Tax Strategy", ko: "Advisory & Tax Strategy" },
  "solutions.artledger.desc": {
    en: "Art gift & inheritance tax planning, corporate expense handling, valuation, and systematic collection advisory.",
    ko: "미술품 증여·상속 절세, 법인 비용처리, 자산 가치 평가, 체계적 컬렉팅 자문",
  },
  "solutions.artledger.f1": { en: "Tax strategy planning", ko: "절세 전략 수립" },
  "solutions.artledger.f2": { en: "Art valuation", ko: "미술품 가치 평가" },
  "solutions.artledger.f3": { en: "Collection portfolio building", ko: "컬렉션 포트폴리오 구축" },
  "solutions.artledger.f4": { en: "Seminar & lecture programmes", ko: "세미나·강연 프로그램" },
  "solutions.artcenter.title": { en: "Exhibition & Community", ko: "Exhibition & Community" },
  "solutions.artcenter.desc": {
    en: "Top-30 fair-priced secondary-market exhibitions, global emerging-artist shows, and community programmes.",
    ko: "적정가 2차 시장 Top 30 전시, 글로벌 이머징 작가 전시, 커뮤니티 프로그램",
  },
  "solutions.artcenter.f1": { en: "Curated & standing exhibitions", ko: "기획전 · 상설전" },
  "solutions.artcenter.f2": { en: "Art salon · talks", ko: "아트 살롱 · 토크" },
  "solutions.artcenter.f3": { en: "Residency programmes", ko: "레지던시 프로그램" },
  "solutions.gallery.title": { en: "Emerging Artists & MD", ko: "Emerging Artists & MD" },
  "solutions.gallery.desc": {
    en: "Korean emerging-artist competitions and awarded-work exhibitions, plus an art-based MD brand.",
    ko: "국내 신진작가 공모전·수상작 전시, 아트 기반 MD 브랜드 운영",
  },
  "solutions.gallery.f1": { en: "Emerging-artist competition", ko: "신진작가 공모전" },
  "solutions.gallery.f2": { en: "Award-winning exhibitions", ko: "수상작 전시" },
  "solutions.gallery.f3": { en: "Art MD collection", ko: "아트 MD 컬렉션" },
  "solutions.gallery.f4": { en: "Artist residency", ko: "작가 레지던시" },
  "solutions.agency.title": { en: "IP & Brand Collaboration", ko: "IP & Brand Collaboration" },
  "solutions.agency.desc": {
    en: "Character IP licensing, franchise art collaborations, art toys and street-art.",
    ko: "캐릭터 IP 라이선싱, 프랜차이즈 아트 콜라보, 아트토이·스트릿 아트",
  },
  "solutions.agency.f1": { en: "Character IP development", ko: "캐릭터 IP 개발" },
  "solutions.agency.f2": { en: "Brand collaborations", ko: "브랜드 콜라보레이션" },
  "solutions.agency.f3": { en: "Art toy production", ko: "아트토이 제작" },
  "solutions.agency.f4": { en: "Spatial art curation", ko: "공간 아트 큐레이션" },

  // Spaces page
  "spaces.hero.title": { en: "Space Introduction", ko: "Space Introduction" },
  "spaces.hero.lead": {
    en: "A hanok gallery in Jongno-gu, Seoul. An independent exhibition space where contemporary art unfolds within the spatial character of traditional Korean architecture.",
    ko: "서울 종로구에 위치한 한옥 갤러리. 전통 건축의 고유한 공간미 위에 동시대 미술이 펼쳐지는 독립 전시 공간입니다.",
  },
  "spaces.event_partner.tagline": { en: "Your Event Partner for Exhibition", ko: "Your Event Partner for Exhibition" },
  "spaces.event_partner.p1": {
    en: "Paso Gallery Heritage is PASO's exhibition space, a modernised 70-year-old head-family house at the entrance of Seongbuk-dong.",
    ko: "파소 갤러리 헤리티지는 성북동 초입에 위치한 70년 전통의 종가를 모던하게 개조하여 운영하는 파소의 전시 공간입니다.",
  },
  "spaces.event_partner.p2": {
    en: "Combining unique history with contemporary sensibility, it is an ideal venue for private and refined events — weddings, VIP gatherings, corporate B2B events, and more.",
    ko: "고유한 역사와 현대적 감각이 조화된 이 공간은 프라이빗하고 세련된 행사를 위한 최적의 장소로, 웨딩, VIP 이벤트, 기업 B2B 행사 등 다양한 형태의 행사에 활용 가능합니다.",
  },
  "spaces.event_partner.p3": {
    en: "Over the past decade Paso Gallery has built deep exhibition expertise through emerging-artist competitions and collaborations with artists and brands. Through PASO Agency, which supplies artists' work as IP, and through the art-VIP community, we have extensive experience working with corporate clients.",
    ko: "파소 갤러리는 지난 10년간 신진 작가 공모전과 여러 아티스트 및 브랜드와의 협업을 통해 깊이 있는 전시 노하우를 구축해 왔습니다. 또한 작가들의 작업을 IP 형태로 제공하는 파소 에이전시와 미술 VIP 커뮤니티 운영을 통해 기업 고객과의 다양한 협력 경험을 갖추고 있습니다.",
  },
  "spaces.role.gallery.l1": { en: "Exhibition curation & art sales", ko: "전시 기획 및 미술품 판매" },
  "spaces.role.gallery.l2": { en: "Artwork-based products (editions, print curation)", ko: "작품 기반 제품 제작 (에디션, 판화 큐레이션)" },
  "spaces.role.agency.l1": { en: "B2B IP projects (commissioned work)", ko: "B2B IP 프로젝트 (미가 커미션 작업)" },
  "spaces.role.agency.l2": { en: "External exhibition curation", ko: "외부 전시 기획" },
  "spaces.role.artrader.l1": { en: "Art data analytics platform", ko: "미술품 데이터 분석 플랫폼" },
  "spaces.role.artrader.l2": { en: "Auction data · Artist Index", ko: "옥션 데이터 · Artist Index" },
  "spaces.private.title": { en: "Private Programs", ko: "Private Programs" },
  "spaces.private.p1.line1": { en: "Space by PASO is our first exhibition space,", ko: "Space by PASO는 파소의 첫 번째 전시 공간으로," },
  "spaces.private.p1.line2": { en: "a modern reconstruction of a Sungkyunkwan scholar's house at the entrance of Seongbuk-dong.", ko: "성북동 초입의 성균관 유생 종가를 현대적으로 재건축한 전시 공간입니다." },
  "spaces.private.p2.line1": { en: "Carrying PASO's decade-long commitment to discovering and supporting emerging artists,", ko: "파소는 지난 10여 년간 꾸준히 이어온 신진 작가 발굴과 지원의 철학을 담아," },
  "spaces.private.p2.line2": { en: "we offer artists opportunities to experiment with commercial viability and meet the market.", ko: "작가들에게 상업적 가능성을 실험하고 시장과 만날 수 있는 기회를 제공하였습니다." },
  "spaces.private.p3": {
    en: "Today Space by PASO operates as a flexible venue for exhibitions, brand collaborations, and diverse cultural events.",
    ko: "현재 Space by PASO는 전시와 더불어 브랜드 협업 및 다양한 문화 행사를 유연하게 수용하는 기획 공간으로 운영됩니다.",
  },
  "spaces.private.p4.line1": { en: "PASO operates across many areas of the art market,", ko: "파소는 미술 시장 전반의 다양한 영역에서 비즈니스를 전개하며," },
  "spaces.private.p4.line2": { en: "exploring new possibilities for art.", ko: "예술의 새로운 가능성을 모색하고 있습니다." },
  "spaces.private.p5.line1": { en: "Find more at PASO's official website.", ko: "더 많은 정보는 파소의 공식 웹사이트에서 확인하실 수 있습니다." },
  "spaces.location.label": { en: "Location", ko: "Location" },
  "spaces.hours.label": { en: "Hours", ko: "Hours" },
  "spaces.contact.label": { en: "Contact", ko: "Contact" },
  "spaces.instagram.label": { en: "Instagram", ko: "Instagram" },

  // OfferCarousel
  "offer.tag": { en: "What We Offer", ko: "What We Offer" },
  "offer.heading": { en: "Explore Our Ecosystem", ko: "Explore Our Ecosystem" },
  "offer.1.tag": { en: "Exhibitions · Gallery", ko: "전시 · 갤러리" },
  "offer.1.title": { en: "2025 Emerging Artist Open Call", ko: "2025 신진작가 공모전" },
  "offer.1.desc": { en: "Discover verified emerging artists. Selected winning works on view every year.", ko: "검증된 신진작가의 작품을 직접 만나보세요. 매년 엄선된 수상작을 전시합니다." },
  "offer.2.tag": { en: "Art Center · Community", ko: "아트센터 · 커뮤니티" },
  "offer.2.title": { en: "Magok Pre-Opening Standing Show", ko: "마곡 프리오프닝 상설전" },
  "offer.2.desc": { en: "Trace the work of emerging artists worldwide. Art salons and insight talks.", ko: "국내외 이머징 작가들의 작품 흐름을 한눈에. 아트 살롱과 인사이트 토크." },
  "offer.3.tag": { en: "Data · Trading", ko: "데이터 · 거래" },
  "offer.3.title": { en: "Analysis of 15M+ Live Transactions", ko: "1,500만 건 실거래가 분석" },
  "offer.3.desc": { en: "Check fair-market acquisition prices and live values built on global auction data.", ko: "글로벌 옥션 데이터 기반, 적정 매입가와 시세를 실시간으로 확인하세요." },
  "offer.4.tag": { en: "Advisory · Tax", ko: "자문 · 절세" },
  "offer.4.title": { en: "Corporate Art Tax Package", ko: "법인 미술품 절세 패키지" },
  "offer.4.desc": { en: "From acquisition to tax filing and Private Sale — we design your full art-asset strategy.", ko: "매입부터 세금 처리, Private Sale까지. 미술 자산 전략을 설계합니다." },
  "offer.5.tag": { en: "IP · Brand", ko: "IP · 브랜드" },
  "offer.5.title": { en: "Art Collaboration Projects", ko: "아트 콜라보 프로젝트" },
  "offer.5.desc": { en: "Elevate brand value through character IP licensing and B2B art projects.", ko: "캐릭터 IP 라이센싱과 B2B 아트 프로젝트로 브랜드 가치를 높입니다." },

  // BrandTabs
  "brandtabs.artrader.subtitle": { en: "Data-Driven Art Trading", ko: "Data-Driven Art Trading" },
  "brandtabs.artrader.content": {
    en: "A global art-trading database with 15.8M+ records. Artist Index and quantitative reports.",
    ko: "글로벌 미술 거래 데이터베이스 1,580만+ 건. Artist Index, 종목분석서 스타일 정량 리포트.",
  },
  "brandtabs.artledger.subtitle": { en: "Advisory & Tax Strategy", ko: "Advisory & Tax Strategy" },
  "brandtabs.artledger.content": {
    en: "Gift & inheritance, corporate expense & depreciation, collection management — across the full life cycle of art assets.",
    ko: "증여·상속, 법인 비용·감가, 컬렉션 관리. 미술 자산의 전 생애를 함께합니다.",
  },
  "brandtabs.gallery.subtitle": { en: "Primary Art Market", ko: "Primary Art Market" },
  "brandtabs.gallery.content": {
    en: "Korean emerging-artist competitions and global emerging-artist exhibitions. The frontier of art.",
    ko: "국내 신진작가 공모전, 글로벌 이머징 작가 전시. 예술의 최전선.",
  },
  "brandtabs.agency.subtitle": { en: "IP & Brand Collaboration", ko: "IP & Brand Collaboration" },
  "brandtabs.agency.content": {
    en: "Brand art projects, character IP licensing, and art toys.",
    ko: "브랜드 아트 프로젝트, 캐릭터 IP 라이선싱, 아트토이.",
  },
  "brandtabs.artcenter.subtitle": { en: "Cultural Hub, Magok", ko: "Cultural Hub, Magok" },
  "brandtabs.artcenter.content": {
    en: "A new cultural anchor in Magok. Exhibitions, seminars, community.",
    ko: "마곡의 새로운 문화 거점. 전시, 세미나, 커뮤니티.",
  },

  // BrandLanding (selected high-visibility strings)
  "brandlanding.contact.artrader.desc": {
    en: "Reach out about collection analysis, data inquiries, or artwork review.",
    ko: "컬렉션 분석, 데이터 문의, 작품 검토 요청 등 편하게 연락주세요",
  },
  "brandlanding.contact.artrader.main": { en: "Inquire", ko: "문의하기" },
  "brandlanding.contact.artledger.desc": {
    en: "Reach out about art tax planning, corporate collection advisory, or asset management.",
    ko: "미술품 절세, 법인 컬렉션 자문, 자산 관리 등 편하게 연락주세요",
  },
  "brandlanding.contact.artledger.main": { en: "Inquire about advisory", ko: "자문 문의하기" },
  "brandlanding.contact.generic.desc": {
    en: "Reach out about project inquiries, collaborations, and partnerships.",
    ko: "프로젝트 문의, 협업 제안 등 편하게 연락주세요",
  },
  "brandlanding.contact.generic.main": { en: "Inquire", ko: "문의하기" },
  "brandlanding.artrader.cta": { en: "Visit Artrader", ko: "아트레이더 바로가기" },
  "brandlanding.stats.benchmark": { en: "Price-benchmark coverage", ko: "시세 판단의 기준" },
  "brandlanding.stats.artist_coverage": { en: "Artists analysable", ko: "작가별 분석 가능" },
  "brandlanding.stats.auction_houses": { en: "Global auction houses", ko: "글로벌 경매사 커버" },
  "brandlanding.metric.avg_bid_up": { en: "Avg. asking price growth", ko: "평균 호가 상승률" },
  "brandlanding.metric.avg_bid_prev": { en: "Prev. asking price ₩3,840,000", ko: "직전 호가 3,840,000원" },
  "brandlanding.metric.size20_avg": { en: "Avg. price per ho (size 20)", ko: "20호 평균 호당가" },
  "brandlanding.metric.size20_prev": { en: "Prev. avg. ₩4,180,000", ko: "직전 평균가 4,180,000원" },
  "brandlanding.metric.top_work": { en: "Top-priced work", ko: "최고가 작품" },
  "brandlanding.metric.top_work_prev": { en: "1999, Surface series ₩134,760,000", ko: "직전 1999, 평면 시리즈 134,760,000원" },
  "brandlanding.section.judge.title": {
    en: "Judge by data, trade with trust",
    ko: "데이터로 판단하고, 신뢰로 거래합니다",
  },
  "brandlanding.section.judge.desc": {
    en: "We refine fragmented market data to surface fair prices and a verified trading environment.",
    ko: "미술 시장의 흩어진 데이터를 정제하여 시세를 산출하고, 검증된 거래 환경을 제공합니다.",
  },
  "brandlanding.section.judge.item1": { en: "Buyer's purchase history", ko: "구매자의 구매이력" },
  "brandlanding.section.judge.item2": { en: "Comparable auction records", ko: "유사 경매기록 데이터" },
  "brandlanding.section.judge.item3": { en: "Work invoice", ko: "작품 인보이스" },
  "brandlanding.section.judge.item4": { en: "Certificate of authenticity", ko: "진품 보증서" },
  "brandlanding.section.judge.item5": { en: "Condition report", ko: "작품 상태 보고서" },
  "brandlanding.section.judge.item6": { en: "Provenance history", ko: "소장 이력 (프로비넌스)" },
  "brandlanding.section.search.title": {
    en: "From discovery to trade — all in Artrader",
    ko: "작품 검색부터 거래까지 아트레이더 하나로",
  },
  "brandlanding.section.search.desc": {
    en: "Real-time collection, refinement, and tagging of 15M+ transactions across global auctions and private sales — searchable by work.",
    ko: "국내·외 경매·Private Sales 등 1,500만 건 이상의 거래 데이터를 실시간 수집·정제·태깅하여 작품별로 해당 정보들을 조회 가능",
  },
  "brandlanding.section.search.db": { en: "Global art trading database", ko: "글로벌 미술 거래 데이터베이스" },
  "brandlanding.section.search.research": { en: "Market & valuation research", ko: "미술품 시장·가치 분석 리서치" },
  "brandlanding.section.price.title": {
    en: "Verified data, fair prices",
    ko: "검증된 데이터로 적정 가격 제시",
  },
  "brandlanding.section.price.desc1": {
    en: "Custom artist / collection quantitative reports — corporate and individual.",
    ko: "기업·개인 맞춤 종목분석서 형식의 작가 / 컬렉션 정량평가서",
  },
  "brandlanding.section.price.desc2": { en: "Price, liquidity, and peer-artist index comparison.", ko: "가격·유동성·경쟁작가 지수 비교" },
  "brandlanding.section.price.ho_label": { en: "Per-ho price trend", ko: "호당가 추이" },
  "brandlanding.section.price.dashboard": {
    en: "Dashboard visualisation of per-ho price by iconography, growth rate, and turnover.",
    ko: "호당가·도상별 판매 추이 등 보조지표 상승률·회전율 대시보드 시각화",
  },
  "brandlanding.section.trust.title": {
    en: "A trade-trust structure",
    ko: "거래 신뢰를 보장하는 구조",
  },
  "brandlanding.section.trust.desc": {
    en: "Every work is reviewed against source data — uncertified listings are restricted.",
    ko: "모든 작품은 자료 기반으로 검수되며, 검증되지 않은 매물은 등록이 제한됩니다.",
  },
  "brandlanding.section.trust.t1": { en: "Provenance", ko: "프로비넌스" },
  "brandlanding.section.trust.d1": { en: "Only records with clear ownership and exhibition history are collected.", ko: "소유·전시 이력이 명확한 기록만 수집합니다" },
  "brandlanding.section.trust.t2": { en: "Condition check", ko: "손상 여부 확인" },
  "brandlanding.section.trust.d2": { en: "Only physical photo evidence of the work's condition is accepted.", ko: "작품 상태를 보여주는 실물 사진 자료만 등록됩니다" },
  "brandlanding.section.trust.t3": { en: "Forgery risk diagnostics", ko: "가품 리스크 진단" },
  "brandlanding.section.trust.d3": { en: "If risk signals appear, expert third-party verification is available.", ko: "위험 신호가 있으면 전문 기관에 위탁 검증이 가능합니다" },
  "brandlanding.section.trust.t4": { en: "Additional trade information", ko: "추가 거래 정보" },
  "brandlanding.section.trust.d4": { en: "Key terms including payment methods can be confirmed in advance.", ko: "결제 방식 등 주요 거래 정보도 사전 확인할 수 있습니다" },
  "brandlanding.artcenter.exhibition_space.title": { en: "Exhibition Space", ko: "Exhibition Space" },
  "brandlanding.artcenter.exhibition_space.desc": {
    en: "A flexible space for large-scale exhibitions, balancing natural and ambient light.",
    ko: "대형 전시를 위한 유연한 공간 구성. 자연광과 인공조명의 조화",
  },
};

export function t(key: string, locale: Locale): string {
  const entry = dict[key];
  if (!entry) return key;
  return entry[locale] ?? entry.en ?? key;
}
