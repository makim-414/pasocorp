export type Locale = "ko" | "en";

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALES: Locale[] = ["en", "ko"];

type Dict = Record<string, { en: string; ko: string }>;

export const dict: Dict = {
  // Navbar
  "nav.about": { en: "About", ko: "About" },
  "nav.solutions": { en: "Solutions", ko: "Solutions" },
  "nav.brands": { en: "Brands", ko: "Brands" },
  "nav.spaces": { en: "Spaces", ko: "Spaces" },
  "nav.contact": { en: "Contact", ko: "Contact" },
  "nav.menu_open": { en: "Open menu", ko: "메뉴 열기" },
  "nav.menu_close": { en: "Close menu", ko: "메뉴 닫기" },
  "nav.aria": { en: "Main navigation", ko: "메인 내비게이션" },

  // Hero / homepage
  "hero.tag": { en: "Strategic Art Advisory", ko: "데이터 기반 미술 자산 전략" },
  "hero.subtitle": {
    en: "Data-driven art investment, gallery operations, and IP licensing, powered by 15M+ auction records.",
    ko: "1,500만 건 데이터로 미술품 투자 자문, 갤러리 운영, IP 라이선싱을 연결합니다.",
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
  "footer.spaces": { en: "Spaces", ko: "공간 대관" },
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
    en: "PASO is a Seoul-based art group connecting investment advisory, gallery operations, IP licensing, and proprietary auction data. Began as an emerging-artist open call in 2013, registered as a company in 2020. Founded by Min Sung Kim (Forbes 30 Under 30).",
    ko: "파소는 데이터 기반 미술 자산 전략을 제공하는 서울 기반의 아트 그룹입니다. 투자 자문, 갤러리 운영, IP 라이선싱, 옥션 데이터를 하나로 연결합니다. 2013년 신진작가 공모전으로 시작해 2020년 사업자 등록. 창업자 김민성(Forbes 30 Under 30).",
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
  "contact.inq.exhibition_desc": { en: "Gallery exhibitions and artist collaborations", ko: "갤러리 전시 및 작가 협업 문의" },
  "contact.inq.spaces": { en: "Spaces & Rental", ko: "공간 대관" },
  "contact.inq.spaces_desc": { en: "Hanok gallery rental for private events and exhibitions", ko: "한옥 갤러리 프라이빗 행사·전시 대관" },
  "contact.inq.brand": { en: "Brand Partnerships", ko: "브랜드 협업" },
  "contact.inq.brand_desc": { en: "Character IP, art project collaborations", ko: "캐릭터 IP, 아트 프로젝트 콜라보레이션" },
  "contact.inq.data": { en: "Data & Advisory", ko: "데이터 & 자문" },
  "contact.inq.data_desc": { en: "Artrader platform, valuation reports, art-asset advisory", ko: "Artrader 플랫폼, 정량 리포트, 미술 자산 자문" },

  // Contact form
  "contact.form.title": { en: "Send an Inquiry", ko: "문의 보내기" },
  "contact.form.name": { en: "Name", ko: "이름" },
  "contact.form.email": { en: "Email", ko: "이메일" },
  "contact.form.topic": { en: "Topic", ko: "문의 유형" },
  "contact.form.topic_placeholder": { en: "Select a topic", ko: "유형을 선택해주세요" },
  "contact.form.message": { en: "Message", ko: "문의 내용" },
  "contact.form.message_placeholder": { en: "Tell us about your inquiry", ko: "문의 내용을 입력해주세요" },
  "contact.form.submit": { en: "Send Inquiry", ko: "문의하기" },
  "contact.form.sending": { en: "Sending...", ko: "전송 중..." },
  "contact.form.sent": { en: "Your inquiry has been received.", ko: "문의가 접수되었습니다" },
  "contact.form.error": { en: "Something went wrong. Please try again.", ko: "전송에 실패했습니다. 다시 시도해주세요." },

  // Cookie consent
  "cookie.text": {
    en: "This website uses cookies for service improvement and usage analytics.",
    ko: "이 웹사이트는 서비스 개선 및 이용 통계 분석을 위해 쿠키를 사용합니다.",
  },
  "cookie.privacy": { en: "Privacy Policy", ko: "개인정보처리방침" },
  "cookie.accept": { en: "Accept", ko: "동의" },
  "cookie.decline": { en: "Decline", ko: "거부" },

  // Locale toggle
  "locale.switch_to_en": { en: "한국어", ko: "한국어" },
  "locale.switch_to_ko": { en: "English", ko: "English" },
  "locale.aria": { en: "Switch language", ko: "언어 변경" },

  // BrandHub
  "brandhub.tag": { en: "Our Brands", ko: "Our Brands" },
  "brandhub.title": { en: "Three Brands, One Vision", ko: "Three Brands, One Vision" },
  "brandhub.paso_gallery.target": { en: "For Collectors & Spaces", ko: "컬렉터와 공간을 위해" },
  "brandhub.paso_gallery.desc": {
    en: "Curating emerging and rising artists from a Seoul hanok, with private sales programmes and the space open for events and rentals.",
    ko: "서울 한옥에서 국내외 신진·라이징 작가를 엄선해 소개하고 프라이빗 세일을 운영하며, 공간은 행사·전시 대관으로도 열려 있습니다.",
  },
  "brandhub.artrader.target": { en: "For Data-Driven Decisions", ko: "데이터 기반 의사결정을 위해" },
  "brandhub.artrader.desc": {
    en: "An art trading platform and corporate-collection database that calculates fair-market acquisition prices from 15M+ global auction records, with valuation and art-asset advisory.",
    ko: "1,500만 건 글로벌 옥션 데이터로 적정 매입가를 산출하는 미술품 거래 플랫폼. 정량 평가와 미술 자산 자문까지 제공합니다.",
  },
  "brandhub.artrader.activity": { en: "Real-time analysis on 15M+ transactions", ko: "1,500만+ 거래 데이터 실시간 분석" },
  "brandhub.agency.target": { en: "For Brands & IP Partners", ko: "브랜드와 IP 파트너를 위해" },
  "brandhub.agency.desc": {
    en: "We design sustainable IP structures that protect both brand and artist value, proven in collaborations with major retail brands.",
    ko: "대형 유통 브랜드와의 콜라보로 검증된, 브랜드와 작가 양측의 IP 가치를 지키는 지속 가능한 구조를 설계합니다.",
  },

  // Services
  "services.tag": { en: "Services", ko: "Services" },
  "services.title": { en: "How We Work", ko: "How We Work" },
  "services.artrader.desc": {
    en: "Market analysis, valuation reports, and art-asset advisory built on 15M+ auction records.",
    ko: "1,500만 건 경매 데이터 기반 시세 분석, 정량 리포트, 미술 자산 자문.",
  },
  "services.gallery.desc": {
    en: "Emerging-artist exhibitions, private sales, and hanok space rentals.",
    ko: "신진 작가 전시, 프라이빗 세일, 한옥 공간 대관.",
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
    en: "Anchored by the gallery: data, exhibitions, and IP all connect through one ecosystem.",
    ko: "갤러리를 중심으로, 데이터·전시·IP가 하나로 연결됩니다.",
  },
  "ecosystem.note": {
    en: "Paso Gallery is the core brand of the PASO ecosystem, responsible for everything from emerging-artist discovery to market connection.",
    ko: "Paso Gallery는 PASO 생태계의 핵심 브랜드로, 신진작가 발굴부터 시장 연결까지를 담당합니다.",
  },

  // Flywheel brand short labels
  "flywheel.artrader.short": { en: "Data · Advisory", ko: "데이터 · 자문" },
  "flywheel.gallery.short": { en: "Exhibition · Spaces", ko: "전시 · 공간" },
  "flywheel.agency.short": { en: "IP · Brand", ko: "IP · 브랜드" },
  "flywheel.synergy": { en: "Synergy", ko: "시너지" },
  "flywheel.conn.market_data": { en: "Market data provision", ko: "시장 데이터 제공" },
  "flywheel.conn.value_analysis": { en: "IP valuation support", ko: "IP 가치 분석 지원" },
  "flywheel.conn.ip_supply": { en: "IP artist exhibition supply", ko: "IP 작가 전시 공급" },
  "flywheel.conn.primary_data": { en: "Primary-market transaction data", ko: "1차 시장 거래 데이터" },

  // HoverPreviewProcess
  "hpp.gallery.subtitle": { en: "Emerging artists · Private sales · Spaces", ko: "신진작가 발굴 · 프라이빗 세일 · 공간 대관" },
  "hpp.artrader.subtitle": { en: "Market analysis & advisory on 15M+ transactions", ko: "1,500만+ 거래 데이터 시세 분석 · 자산 자문" },
  "hpp.agency.subtitle": { en: "Character IP · B2B art projects", ko: "캐릭터 IP · B2B 아트 프로젝트" },

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
  "dynamic.card.frieze.title": { en: "Frieze Week at the Hanok", ko: "프리즈 위크 한옥 대관" },
  "dynamic.card.frieze.desc": { en: "Private events and exhibitions this September", ko: "9월 프리즈 서울 주간 프라이빗 행사·전시 대관" },
  "dynamic.card.artrader_launch.title": { en: "Artrader Official Launch", ko: "Artrader 정식 런칭" },
  "dynamic.card.artrader_launch.desc": { en: "The art market data platform goes live", ko: "미술 시장 데이터 플랫폼 정식 오픈" },

  // Solutions page
  "solutions.hero.title": { en: "Integrated Art Solutions", ko: "Integrated Art Solutions" },
  "solutions.hero.lead": {
    en: "From data analytics to advisory, exhibitions, and IP licensing — every link in the art value chain, unified.",
    ko: "데이터 분석부터 자문, 전시, IP 라이선싱까지. 미술 생태계의 모든 가치 사슬을 하나로.",
  },
  "solutions.learn_more": { en: "Learn More", ko: "Learn More" },
  "solutions.artrader.title": { en: "Data & Market Intelligence", ko: "Data & Market Intelligence" },
  "solutions.artrader.desc": {
    en: "Market analysis platform built on 15M+ global auction and private-sale transactions, with valuation reports and art-asset advisory for corporates and collectors.",
    ko: "글로벌 경매·Private Sales 1,500만+ 거래 데이터 기반 시장 분석 플랫폼. 법인·컬렉터를 위한 정량 리포트와 미술 자산 자문까지 제공합니다.",
  },
  "solutions.gallery.title": { en: "Exhibition & Spaces", ko: "Exhibition & Spaces" },
  "solutions.gallery.desc": {
    en: "Emerging-artist competitions and exhibitions in a Seoul hanok gallery, with private sales and the space open for events and rentals.",
    ko: "서울 한옥 갤러리에서의 신진작가 공모전과 전시, 프라이빗 세일. 공간은 행사·전시 대관으로도 운영됩니다.",
  },
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
  "spaces.event_partner.tagline": { en: "Contemporary Art Gallery in a Seoul Hanok", ko: "한옥에 자리한 동시대 미술 갤러리" },
  "spaces.event_partner.p1": {
    en: "Paso Gallery is a contemporary art gallery housed in a modern reinterpretation of a 70-year-old hanok at the entrance of Seongbuk-dong, Seoul. Over the past six-plus years it has driven diverse, expansive art projects centred on emerging-artist discovery and global emerging-artist exhibitions.",
    ko: "파소 갤러리는 서울 성북동 초입에 위치한 70년 전통 종가 한옥을 현대적으로 재해석한 현대미술 갤러리로, 지난 6여 년간 공모전에 의한 신진 작가 발굴과 글로벌 이머징 전시를 중심으로 다양한 확장적인 예술 프로젝트를 전개해왔습니다.",
  },
  "spaces.event_partner.p2": {
    en: "Beyond being a gallery, PASO has built an integrated art business spanning exhibitions, brand collaborations, art IP, and data-driven art advisory.",
    ko: "파소는 단순한 갤러리를 넘어 전시, 브랜드 협업, 아트 IP, 데이터 기반 미술 자문까지 확장된 통합 아트 비즈니스를 구축하고 있습니다.",
  },
  "spaces.event_partner.p3": {
    en: "Through the art-data platform 'Artrader', brand–artist collaboration arm 'Paso Agency', and art-asset advisory, PASO extends art into both cultural content and a strategic asset class — connecting data, curation, space, and community to open new possibilities in the contemporary art market.",
    ko: "또한 파소는 아트 데이터 플랫폼 'Artrader', 브랜드·작가 협업을 위한 'Paso Agency', 미술 자산 자문 서비스 등을 통해 예술을 문화 콘텐츠이자 전략적 자산으로 확장하고 있습니다. 데이터와 큐레이션, 공간과 커뮤니티를 연결하며 더 넓은 시장에서 동시대 미술 시장의 새로운 가능성을 만들어가고 있습니다.",
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
    en: "Today Space by PASO continues to operate as a curated space dedicated to exhibitions and artist collaborations.",
    ko: "현재 Space by PASO는 전시와 작가 협업을 중심으로 운영되는 큐레이션 공간입니다.",
  },
  "spaces.private.p4.line1": { en: "PASO operates across many areas of the art market,", ko: "파소는 미술 시장 전반의 다양한 영역에서 비즈니스를 전개하며," },
  "spaces.private.p4.line2": { en: "exploring new possibilities for art.", ko: "예술의 새로운 가능성을 모색하고 있습니다." },
  "spaces.private.p5.line1": { en: "Find more at PASO's official website.", ko: "더 많은 정보는 파소의 공식 웹사이트에서 확인하실 수 있습니다." },
  "spaces.location.label": { en: "Location", ko: "Location" },
  "spaces.hours.label": { en: "Hours", ko: "Hours" },
  "spaces.contact.label": { en: "Contact", ko: "Contact" },
  "spaces.instagram.label": { en: "Instagram", ko: "Instagram" },

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
