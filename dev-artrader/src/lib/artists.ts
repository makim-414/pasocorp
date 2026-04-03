export interface ArtistAuctionRecord {
  title: string;
  year: number;
  medium: string;
  size: string;
  hammer: string;
  auctionHouse: string;
  date: string;
  provenance?: string;
  signature?: string;
  frame?: string;
  condition?: {
    status: "양호" | "손상 확인됨";
    details?: string;
  };
  edition?: string;
}

export interface Artist {
  slug: string;
  nameKo: string;
  nameEn: string;
  birthYear: number;
  deathYear?: number;
  nationality: string;
  category: string;
  profileImage?: string;
  bio: string;
  education: string[];
  exhibitions: string[];
  stats: {
    avgPrice: string;
    totalTransactions: number;
    hammerRate: string;
    annualGrowth: string;
    highestPrice: string;
  };
  recentAuctions: ArtistAuctionRecord[];
  tags: string[];
}

export const artists: Artist[] = [
  {
    slug: "lee-ufan",
    nameKo: "이우환",
    nameEn: "Lee Ufan",
    birthYear: 1936,
    nationality: "한국",
    category: "현대미술",
    bio: "이우환은 한국 출신의 현대미술 작가로, 일본 모노하(Mono-ha) 운동의 핵심 인물입니다. 회화와 조각 작업을 통해 동양 철학과 서양 현대미술을 융합한 독자적 예술 세계를 구축했습니다.",
    education: [
      "서울대학교 미술대학 (1956)",
      "니혼대학교 철학과 졸업 (1961)",
    ],
    exhibitions: [
      "구겐하임 미술관 회고전, 뉴욕 (2011)",
      "베르사유 궁전 개인전, 프랑스 (2014)",
      "이우환 미술관 개관, 나오시마 (2010)",
      "국립현대미술관 회고전, 서울 (2014)",
      "퐁피두 센터 개인전, 파리 (2023)",
    ],
    stats: {
      avgPrice: "₩384,000,000",
      totalTransactions: 1247,
      hammerRate: "72.4%",
      annualGrowth: "+18.6%",
      highestPrice: "₩13,476,000,000",
    },
    recentAuctions: [
      { title: "From Line No. 800152", year: 1980, medium: "Oil and mineral pigment on canvas", size: "218×291cm", hammer: "₩4,200,000,000", auctionHouse: "서울옥션", date: "2024.11", provenance: "확인됨", signature: "확인됨", frame: "프레이밍 완료", condition: { status: "양호" }, edition: "유일작" },
      { title: "Dialogue", year: 2018, medium: "Oil and mineral pigment on canvas", size: "162×130cm", hammer: "₩1,850,000,000", auctionHouse: "케이옥션", date: "2024.09", provenance: "확인됨", signature: "확인됨", frame: "프레이밍 완료", condition: { status: "손상 확인됨", details: "캔버스 좌측 하단 2cm 미세 찢김 확인. 전문 복원 완료 상태이며, 작품 감상에는 영향 없음. 복원 보고서 첨부." }, edition: "유일작" },
      { title: "From Point No. 780217", year: 1978, medium: "Oil and mineral pigment on canvas", size: "182×227cm", hammer: "₩3,100,000,000", auctionHouse: "Christie's", date: "2024.05", provenance: "확인됨", signature: "확인됨", frame: "없음", condition: { status: "양호" }, edition: "유일작" },
      { title: "Relatum", year: 2015, medium: "Steel and stone", size: "130×180×45cm", hammer: "₩920,000,000", auctionHouse: "필립스", date: "2024.03", provenance: "확인됨", signature: "해당없음", frame: "해당없음", condition: { status: "손상 확인됨", details: "철판 표면 산화(녹) 일부 진행. 작가 의도에 의한 자연 변화로, 별도 처리 불필요. 석재 양호." }, edition: "유일작" },
      { title: "Correspondence", year: 2006, medium: "Oil and mineral pigment on canvas", size: "130×162cm", hammer: "₩780,000,000", auctionHouse: "서울옥션", date: "2023.12", provenance: "확인됨", signature: "확인됨", frame: "프레이밍 완료", condition: { status: "양호" }, edition: "유일작" },
    ],
    tags: ["모노하", "단색화", "현대미술", "추상"],
  },
  {
    slug: "kim-whanki",
    nameKo: "김환기",
    nameEn: "Kim Whanki",
    birthYear: 1913,
    deathYear: 1974,
    nationality: "한국",
    category: "근현대미술",
    bio: "김환기는 한국 추상미술의 선구자로, 한국적 서정성과 자연의 아름다움을 추상적 형태로 표현한 작가입니다. 전면점화(全面點畫) 시리즈로 한국 미술 경매 최고가 기록을 보유하고 있습니다.",
    education: [
      "니혼대학교 미술학부 졸업 (1936)",
    ],
    exhibitions: [
      "상파울루 비엔날레, 브라질 (1963)",
      "환기미술관 상설 전시, 서울",
      "국립현대미술관 회고전, 서울 (2018)",
      "갤러리현대 개인전, 서울 (2020)",
    ],
    stats: {
      avgPrice: "₩1,250,000,000",
      totalTransactions: 487,
      hammerRate: "85.2%",
      annualGrowth: "+12.3%",
      highestPrice: "₩13,160,000,000",
    },
    recentAuctions: [
      { title: "05-IV-71 #200 (Universe)", year: 1971, medium: "Oil on cotton", size: "254×202cm", hammer: "₩13,160,000,000", auctionHouse: "Christie's", date: "2019.11" },
      { title: "Untitled 12-V-70 #172", year: 1970, medium: "Oil on cotton", size: "236×173cm", hammer: "₩8,500,000,000", auctionHouse: "서울옥션", date: "2024.06" },
      { title: "여인들과 항아리", year: 1950, medium: "Oil on canvas", size: "95×72cm", hammer: "₩4,700,000,000", auctionHouse: "케이옥션", date: "2024.03" },
    ],
    tags: ["추상미술", "전면점화", "한국미술", "서정추상"],
  },
  {
    slug: "park-seo-bo",
    nameKo: "박서보",
    nameEn: "Park Seo-Bo",
    birthYear: 1931,
    deathYear: 2023,
    nationality: "한국",
    category: "현대미술",
    bio: "박서보는 한국 단색화(Dansaekhwa) 운동의 선구자이자 대표 작가입니다. '묘법(Ecriture)' 시리즈를 통해 반복적 행위와 명상적 과정을 결합한 독자적 화풍을 확립했습니다.",
    education: [
      "홍익대학교 미술대학 회화과 졸업 (1954)",
    ],
    exhibitions: [
      "베네치아 비엔날레, 이탈리아 (1988)",
      "국립현대미술관 회고전, 서울 (2019)",
      "Kukje Gallery 개인전, 서울 (2022)",
      "Perrotin 갤러리 개인전, 파리 (2020)",
      "White Cube 개인전, 런던 (2020)",
    ],
    stats: {
      avgPrice: "₩520,000,000",
      totalTransactions: 892,
      hammerRate: "68.7%",
      annualGrowth: "+8.4%",
      highestPrice: "₩5,800,000,000",
    },
    recentAuctions: [
      { title: "Ecriture No. 071220", year: 2007, medium: "Mixed media with Korean hanji paper on canvas", size: "195×130cm", hammer: "₩3,200,000,000", auctionHouse: "Christie's", date: "2024.10" },
      { title: "Ecriture(描法) No. 990505", year: 1999, medium: "Mixed media on canvas", size: "162×130cm", hammer: "₩1,450,000,000", auctionHouse: "서울옥션", date: "2024.06" },
    ],
    tags: ["단색화", "묘법", "현대미술", "추상"],
  },
  {
    slug: "yayoi-kusama",
    nameKo: "쿠사마 야요이",
    nameEn: "Yayoi Kusama",
    birthYear: 1929,
    nationality: "일본",
    category: "현대미술",
    bio: "쿠사마 야요이는 일본 출신의 현대미술 작가로, 물방울 무늬와 무한 반복 패턴을 통해 독자적 예술 세계를 구축했습니다. 회화, 조각, 설치 등 다양한 매체를 활용합니다.",
    education: [
      "교토시립미술공예학교 일본화과 졸업 (1949)",
    ],
    exhibitions: [
      "Infinity Mirror Rooms, Tate Modern, 런던 (2012)",
      "뉴욕 MoMA 회고전 (2013)",
      "Yayoi Kusama Museum 개관, 도쿄 (2017)",
      "베네치아 비엔날레, 이탈리아 (1993)",
      "Hirshhorn Museum 회고전, 워싱턴 D.C. (2017)",
    ],
    stats: {
      avgPrice: "₩2,100,000,000",
      totalTransactions: 3420,
      hammerRate: "78.1%",
      annualGrowth: "+15.2%",
      highestPrice: "₩10,490,000,000",
    },
    recentAuctions: [
      { title: "Infinity Nets (TWOWQ)", year: 2005, medium: "Acrylic on canvas", size: "194×259cm", hammer: "₩7,800,000,000", auctionHouse: "Christie's", date: "2024.11" },
      { title: "Pumpkin", year: 2010, medium: "Acrylic on canvas", size: "130×130cm", hammer: "₩2,300,000,000", auctionHouse: "Sotheby's", date: "2024.08" },
    ],
    tags: ["팝아트", "설치미술", "현대미술", "도트"],
  },
  {
    slug: "chung-sang-hwa",
    nameKo: "정상화",
    nameEn: "Chung Sang-Hwa",
    birthYear: 1932,
    nationality: "한국",
    category: "현대미술",
    bio: "정상화는 한국 단색화의 대표 작가로, 물감을 겹겹이 바르고 뜯어내는 독특한 기법으로 회화의 본질을 탐구해왔습니다.",
    education: [
      "서울대학교 미술대학 회화과 졸업 (1956)",
    ],
    exhibitions: [
      "국립현대미술관 개인전, 서울 (2016)",
      "가나아트센터 개인전, 서울 (2018)",
      "Dominique Lévy 갤러리 개인전, 뉴욕 (2017)",
      "Axel Vervoordt Gallery 개인전, 앤트워프 (2019)",
    ],
    stats: {
      avgPrice: "₩290,000,000",
      totalTransactions: 634,
      hammerRate: "65.3%",
      annualGrowth: "+6.8%",
      highestPrice: "₩3,200,000,000",
    },
    recentAuctions: [
      { title: "Untitled 2015-6-3", year: 2015, medium: "Acrylic on canvas", size: "230×230cm", hammer: "₩1,800,000,000", auctionHouse: "서울옥션", date: "2024.05" },
    ],
    tags: ["단색화", "현대미술", "추상"],
  },
  {
    slug: "nam-june-paik",
    nameKo: "백남준",
    nameEn: "Nam June Paik",
    birthYear: 1932,
    deathYear: 2006,
    nationality: "한국",
    category: "미디어아트",
    bio: "백남준은 '비디오 아트의 아버지'로 불리는 한국 출신의 세계적 미디어 아티스트입니다. TV와 비디오를 예술의 매체로 활용하여 미디어 아트의 새 지평을 열었습니다.",
    education: [
      "도쿄대학교 미학·미술사학과 졸업 (1956)",
      "뮌헨 음악학교 수학 (1957)",
      "프라이부르크 음악학교 수학 (1957–1958)",
    ],
    exhibitions: [
      "구겐하임 미술관 회고전, 뉴욕 (2000)",
      "스미소니언 미국미술관 회고전, 워싱턴 D.C. (2013)",
      "백남준아트센터 상설 전시, 용인",
      "Tate Modern 개인전, 런던 (2019)",
      "국립현대미술관 회고전, 서울 (2022)",
    ],
    stats: {
      avgPrice: "₩890,000,000",
      totalTransactions: 312,
      hammerRate: "71.6%",
      annualGrowth: "+22.1%",
      highestPrice: "₩6,500,000,000",
    },
    recentAuctions: [
      { title: "Wright Brothers", year: 1995, medium: "2 antique TV cabinets, 2 Samsung monitors, 1 laser disc player", size: "153×183×61cm", hammer: "₩2,100,000,000", auctionHouse: "Christie's", date: "2024.09" },
    ],
    tags: ["미디어아트", "비디오아트", "설치미술", "플럭서스"],
  },
  {
    slug: "yun-hyong-keun",
    nameKo: "윤형근",
    nameEn: "Yun Hyong-keun",
    birthYear: 1928,
    deathYear: 2007,
    nationality: "한국",
    category: "현대미술",
    bio: "윤형근은 한국 단색화의 대표 작가로, 엷게 희석된 물감이 캔버스에 스며드는 번짐 기법을 통해 자연과 인간의 본질을 탐구했습니다.",
    education: [
      "서울대학교 미술대학 회화과 졸업 (1957)",
    ],
    exhibitions: [
      "베네치아 비엔날레, 이탈리아 (2019)",
      "국립현대미술관 회고전, 서울 (2018)",
      "PKM Gallery 개인전, 서울 (2020)",
      "Simon Lee Gallery 개인전, 런던 (2019)",
      "David Zwirner 개인전, 뉴욕 (2020)",
    ],
    stats: {
      avgPrice: "₩410,000,000",
      totalTransactions: 445,
      hammerRate: "74.2%",
      annualGrowth: "+14.5%",
      highestPrice: "₩4,100,000,000",
    },
    recentAuctions: [
      { title: "Burnt Umber & Ultramarine", year: 1993, medium: "Oil on linen", size: "227×181cm", hammer: "₩3,400,000,000", auctionHouse: "서울옥션", date: "2024.06" },
    ],
    tags: ["단색화", "현대미술", "추상"],
  },
  {
    slug: "kim-tschang-yeul",
    nameKo: "김창열",
    nameEn: "Kim Tschang-Yeul",
    birthYear: 1929,
    deathYear: 2021,
    nationality: "한국",
    category: "현대미술",
    bio: "김창열은 '물방울 화가'로 불리는 한국의 대표적 현대미술 작가입니다. 극사실적 물방울 표현을 통해 동양적 무(無)의 철학을 시각화했습니다.",
    education: [
      "서울대학교 미술대학 회화과 졸업 (1957)",
      "아카데미 드 라 그랑드 쇼미에르, 파리 (1969)",
    ],
    exhibitions: [
      "국립현대미술관 회고전, 서울 (2016)",
      "제주 김창열미술관 상설 전시, 제주 (2016)",
      "갤러리현대 개인전, 서울 (2019)",
      "상파울루 비엔날레, 브라질 (1975)",
    ],
    stats: {
      avgPrice: "₩180,000,000",
      totalTransactions: 567,
      hammerRate: "62.8%",
      annualGrowth: "+5.3%",
      highestPrice: "₩2,800,000,000",
    },
    recentAuctions: [
      { title: "Waterdrops", year: 1985, medium: "Oil on canvas", size: "162×130cm", hammer: "₩1,200,000,000", auctionHouse: "케이옥션", date: "2024.04" },
    ],
    tags: ["극사실주의", "현대미술", "물방울"],
  },
  {
    slug: "emily-mae-smith",
    nameKo: "에밀리 매 스미스",
    nameEn: "Emily Mae Smith",
    birthYear: 1979,
    nationality: "미국",
    category: "현대미술",
    bio: "에밀리 매 스미스는 미국의 현대미술 작가로, 빗자루 모티프를 중심으로 미술사적 도상과 페미니즘적 시각을 결합한 회화 작업을 선보이고 있습니다. 르네상스부터 팝아트까지 다양한 양식을 차용하며 유머와 비판을 동시에 담아냅니다.",
    education: [
      "컬럼비아 대학교 MFA 졸업 (2006)",
      "텍사스 대학교 오스틴 BFA 졸업 (2001)",
    ],
    exhibitions: [
      "Petzel Gallery 개인전, 뉴욕 (2023)",
      "Perrotin 갤러리 개인전, 파리 (2022)",
      "Le Consortium 개인전, 디종 (2022)",
      "Whitney Museum of American Art, 뉴욕 (2019)",
      "MoMA PS1, 뉴욕 (2018)",
    ],
    stats: {
      avgPrice: "₩450,000,000",
      totalTransactions: 186,
      hammerRate: "82.5%",
      annualGrowth: "+28.3%",
      highestPrice: "₩2,400,000,000",
    },
    recentAuctions: [
      { title: "Broom Life", year: 2019, medium: "Oil on linen", size: "172.7×139.7cm", hammer: "₩1,800,000,000", auctionHouse: "Christie's", date: "2024.11" },
      { title: "A Bit of Fun", year: 2018, medium: "Oil on linen", size: "182.9×152.4cm", hammer: "₩1,200,000,000", auctionHouse: "Sotheby's", date: "2024.05" },
      { title: "Medusa's Muse", year: 2020, medium: "Oil on linen", size: "152.4×121.9cm", hammer: "₩950,000,000", auctionHouse: "Phillips", date: "2024.03" },
    ],
    tags: ["페미니즘", "현대회화", "팝아트", "구상"],
  },
  {
    slug: "lee-bae",
    nameKo: "이배",
    nameEn: "Lee Bae",
    birthYear: 1956,
    nationality: "한국",
    category: "현대미술",
    bio: "이배는 숯을 주요 매체로 사용하는 한국의 대표적 현대미술 작가입니다. 프랑스 파리를 기반으로 활동하며, 숯의 물성과 빛의 반사를 통해 동양 철학적 깊이를 담은 추상 작업을 선보이고 있습니다.",
    education: [
      "홍익대학교 미술대학 회화과 졸업 (1981)",
      "파리 국립고등미술학교 수학 (1990)",
    ],
    exhibitions: [
      "Perrotin 갤러리 개인전, 파리 (2023)",
      "국립현대미술관 개인전, 서울 (2022)",
      "Johyun Gallery 개인전, 부산 (2021)",
      "Leeahn Gallery 개인전, 서울 (2020)",
      "광주비엔날레, 광주 (2018)",
    ],
    stats: {
      avgPrice: "₩320,000,000",
      totalTransactions: 412,
      hammerRate: "74.8%",
      annualGrowth: "+16.2%",
      highestPrice: "₩4,200,000,000",
    },
    recentAuctions: [
      { title: "Issu du feu", year: 2021, medium: "Charcoal on canvas", size: "200×300cm", hammer: "₩2,800,000,000", auctionHouse: "서울옥션", date: "2024.11" },
      { title: "Landscape", year: 2019, medium: "Charcoal on canvas", size: "162×130cm", hammer: "₩1,450,000,000", auctionHouse: "케이옥션", date: "2024.06" },
      { title: "Untitled", year: 2020, medium: "Charcoal on canvas", size: "130×97cm", hammer: "₩680,000,000", auctionHouse: "Christie's", date: "2024.03" },
    ],
    tags: ["숯", "추상", "현대미술", "단색화"],
  },
  {
    slug: "kim-jong-hak",
    nameKo: "김종학",
    nameEn: "Kim Chong Hak",
    birthYear: 1937,
    nationality: "한국",
    category: "현대미술",
    bio: "김종학은 '설악의 화가'로 불리는 한국의 대표적 자연주의 화가입니다. 강렬한 색채로 설악산의 야생화와 자연 풍경을 표현하며, 한국 구상회화의 독자적 영역을 구축했습니다.",
    education: [
      "서울대학교 미술대학 회화과 졸업 (1960)",
      "파리 에콜 데 보자르 수학 (1966)",
    ],
    exhibitions: [
      "국립현대미술관 회고전, 과천 (2014)",
      "갤러리현대 개인전, 서울 (2019)",
      "조선일보미술관 초대전, 서울 (2010)",
    ],
    stats: {
      avgPrice: "₩210,000,000",
      totalTransactions: 389,
      hammerRate: "69.5%",
      annualGrowth: "+7.8%",
      highestPrice: "₩3,500,000,000",
    },
    recentAuctions: [
      { title: "설악산 야생화", year: 2015, medium: "Oil on canvas", size: "162×130cm", hammer: "₩1,800,000,000", auctionHouse: "서울옥션", date: "2024.09" },
      { title: "봄 풍경", year: 2018, medium: "Oil on canvas", size: "130×97cm", hammer: "₩920,000,000", auctionHouse: "케이옥션", date: "2024.05" },
    ],
    tags: ["구상", "자연주의", "설악산", "현대미술"],
  },
  {
    slug: "ha-chong-hyun",
    nameKo: "하종현",
    nameEn: "Ha Chong-Hyun",
    birthYear: 1935,
    nationality: "한국",
    category: "현대미술",
    bio: "하종현은 한국 단색화의 핵심 작가로, 캔버스 뒤에서 물감을 밀어넣는 독창적인 '배압법' 기법의 '접합(Conjunction)' 시리즈로 세계적 명성을 얻었습니다.",
    education: [
      "홍익대학교 미술대학 회화과 졸업 (1959)",
    ],
    exhibitions: [
      "베니스 비엔날레 한국관, 이탈리아 (2015)",
      "블룸앤포 갤러리 개인전, 뉴욕 (2019)",
      "국립현대미술관 회고전, 서울 (2012)",
      "도쿄도현대미술관, 도쿄 (2017)",
    ],
    stats: {
      avgPrice: "₩280,000,000",
      totalTransactions: 523,
      hammerRate: "70.1%",
      annualGrowth: "+11.3%",
      highestPrice: "₩3,800,000,000",
    },
    recentAuctions: [
      { title: "Conjunction 21-35", year: 2021, medium: "Oil on hemp cloth", size: "200×300cm", hammer: "₩2,400,000,000", auctionHouse: "Christie's", date: "2024.10" },
      { title: "Conjunction 19-08", year: 2019, medium: "Oil on hemp cloth", size: "162×130cm", hammer: "₩1,100,000,000", auctionHouse: "서울옥션", date: "2024.04" },
    ],
    tags: ["단색화", "접합", "배압법", "현대미술"],
  },
  {
    slug: "kwon-young-woo",
    nameKo: "권영우",
    nameEn: "Kwon Young-Woo",
    birthYear: 1926,
    deathYear: 2013,
    nationality: "한국",
    category: "현대미술",
    bio: "권영우는 한지(韓紙)를 뜯고, 접고, 구기는 행위를 통해 종이 자체를 회화의 주체로 승격시킨 작가입니다. 단색화 운동의 선구자 중 한 명으로 평가받고 있습니다.",
    education: [
      "서울대학교 미술대학 동양화과 졸업 (1951)",
    ],
    exhibitions: [
      "블룸앤포 갤러리 개인전, 뉴욕 (2020)",
      "국립현대미술관 소장품전, 서울 (2018)",
      "페이스 갤러리 그룹전, 홍콩 (2017)",
    ],
    stats: {
      avgPrice: "₩195,000,000",
      totalTransactions: 298,
      hammerRate: "76.3%",
      annualGrowth: "+19.5%",
      highestPrice: "₩2,600,000,000",
    },
    recentAuctions: [
      { title: "Untitled", year: 1982, medium: "Korean paper", size: "162×130cm", hammer: "₩1,600,000,000", auctionHouse: "Christie's", date: "2024.05" },
      { title: "Untitled", year: 1985, medium: "Korean paper", size: "130×97cm", hammer: "₩780,000,000", auctionHouse: "서울옥션", date: "2024.02" },
    ],
    tags: ["단색화", "한지", "현대미술", "추상"],
  },
  {
    slug: "lee-kun-yong",
    nameKo: "이건용",
    nameEn: "Lee Kun-Yong",
    birthYear: 1942,
    nationality: "한국",
    category: "현대미술",
    bio: "이건용은 한국 실험미술과 행위예술의 선구자입니다. '이벤트-로지컬' 시리즈 등을 통해 신체와 회화의 관계를 탐구하며, 한국 전위미술의 역사를 만들어왔습니다.",
    education: [
      "서울대학교 미술대학 회화과 졸업 (1965)",
      "홍익대학교 대학원 미학 석사 (1972)",
    ],
    exhibitions: [
      "국립현대미술관 회고전, 서울 (2019)",
      "서울시립미술관 개인전, 서울 (2021)",
      "광주비엔날레, 광주 (2018)",
    ],
    stats: {
      avgPrice: "₩150,000,000",
      totalTransactions: 178,
      hammerRate: "68.9%",
      annualGrowth: "+9.2%",
      highestPrice: "₩1,800,000,000",
    },
    recentAuctions: [
      { title: "The Method of Drawing 76-1", year: 1976, medium: "Oil on canvas", size: "162×130cm", hammer: "₩1,200,000,000", auctionHouse: "케이옥션", date: "2024.06" },
    ],
    tags: ["실험미술", "행위예술", "현대미술", "전위"],
  },
  {
    slug: "lee-wal-jong",
    nameKo: "이왈종",
    nameEn: "Lee Wal-Jong",
    birthYear: 1945,
    nationality: "한국",
    category: "현대미술",
    bio: "이왈종은 제주의 자연과 삶을 동양적 감성으로 풀어내는 한국의 대표적 수묵 채색화 작가입니다. '제주 생활의 중도' 시리즈로 익히 알려져 있으며, 전통과 현대의 융합을 시도합니다.",
    education: [
      "서울대학교 미술대학 동양화과 졸업 (1969)",
    ],
    exhibitions: [
      "국립현대미술관 초대 개인전, 과천 (2009)",
      "제주도립미술관 개인전, 제주 (2016)",
      "갤러리현대 개인전, 서울 (2020)",
    ],
    stats: {
      avgPrice: "₩120,000,000",
      totalTransactions: 345,
      hammerRate: "66.2%",
      annualGrowth: "+4.8%",
      highestPrice: "₩1,500,000,000",
    },
    recentAuctions: [
      { title: "제주 생활의 중도", year: 2019, medium: "Ink and color on Korean paper", size: "136×136cm", hammer: "₩850,000,000", auctionHouse: "서울옥션", date: "2024.08" },
      { title: "바람의 섬", year: 2021, medium: "Ink and color on Korean paper", size: "97×130cm", hammer: "₩520,000,000", auctionHouse: "케이옥션", date: "2024.03" },
    ],
    tags: ["수묵채색", "제주", "동양화", "현대미술"],
  },
  {
    slug: "jean-michel-basquiat",
    nameKo: "장미셸 바스키아",
    nameEn: "Jean-Michel Basquiat",
    birthYear: 1960,
    deathYear: 1988,
    nationality: "미국",
    category: "현대미술",
    bio: "장미셸 바스키아는 그래피티에서 출발해 네오 표현주의의 아이콘이 된 미국의 전설적 작가입니다. 인종, 빈부, 권력 구조를 원시적이면서도 강렬한 화풍으로 표현했습니다.",
    education: [
      "독학 (City-as-School 고등학교 중퇴, 1978)",
    ],
    exhibitions: [
      "루이비통 재단 미술관 대규모 회고전, 파리 (2018)",
      "바비칸 센터 회고전, 런던 (2017)",
      "브루클린 미술관 회고전, 뉴욕 (2015)",
      "구겐하임 빌바오, 스페인 (2015)",
    ],
    stats: {
      avgPrice: "₩18,500,000,000",
      totalTransactions: 2840,
      hammerRate: "81.3%",
      annualGrowth: "+8.9%",
      highestPrice: "₩130,000,000,000",
    },
    recentAuctions: [
      { title: "El Gran Espectaculo (The Nile)", year: 1983, medium: "Acrylic on canvas", size: "172.7×358.1cm", hammer: "₩75,000,000,000", auctionHouse: "Christie's", date: "2024.11" },
      { title: "Untitled (Devil)", year: 1982, medium: "Oilstick on paper", size: "57.2×76.2cm", hammer: "₩12,500,000,000", auctionHouse: "Sotheby's", date: "2024.05" },
    ],
    tags: ["네오표현주의", "그래피티", "현대미술", "스트리트아트"],
  },
  {
    slug: "gerhard-richter",
    nameKo: "게르하르트 리히터",
    nameEn: "Gerhard Richter",
    birthYear: 1932,
    nationality: "독일",
    category: "현대미술",
    bio: "게르하르트 리히터는 현존하는 가장 영향력 있는 작가 중 한 명으로, 포토리얼리즘부터 추상까지 다양한 양식을 넘나들며 회화의 본질과 가능성을 끊임없이 탐구해왔습니다.",
    education: [
      "드레스덴 미술 아카데미 졸업 (1956)",
      "뒤셀도르프 쿤스트아카데미 졸업 (1963)",
    ],
    exhibitions: [
      "메트로폴리탄 미술관 회고전, 뉴욕 (2020)",
      "테이트 모던 회고전, 런던 (2011)",
      "MoMA 회고전, 뉴욕 (2002)",
      "퐁피두 센터 회고전, 파리 (2012)",
    ],
    stats: {
      avgPrice: "₩12,800,000,000",
      totalTransactions: 3150,
      hammerRate: "76.8%",
      annualGrowth: "+6.4%",
      highestPrice: "₩53,000,000,000",
    },
    recentAuctions: [
      { title: "Abstraktes Bild (649-2)", year: 1987, medium: "Oil on canvas", size: "200×200cm", hammer: "₩38,000,000,000", auctionHouse: "Sotheby's", date: "2024.10" },
      { title: "Seestück (Seascape)", year: 1975, medium: "Oil on canvas", size: "200×200cm", hammer: "₩18,500,000,000", auctionHouse: "Christie's", date: "2024.05" },
    ],
    tags: ["추상", "포토리얼리즘", "현대미술", "독일미술"],
  },
  {
    slug: "david-hockney",
    nameKo: "데이비드 호크니",
    nameEn: "David Hockney",
    birthYear: 1937,
    nationality: "영국",
    category: "현대미술",
    bio: "데이비드 호크니는 팝아트와 구상회화의 거장으로, 수영장 시리즈와 풍경화로 세계적 명성을 얻었습니다. 회화, 사진, 디지털 아트 등 다양한 매체를 실험하며 현대 미술의 경계를 넓혀왔습니다.",
    education: [
      "브래드퍼드 미술 대학 졸업 (1957)",
      "로열 컬리지 오브 아트 졸업 (1962)",
    ],
    exhibitions: [
      "테이트 브리튼 대규모 회고전, 런던 (2017)",
      "퐁피두 센터 회고전, 파리 (2017)",
      "메트로폴리탄 미술관, 뉴욕 (2017)",
      "반 고흐 미술관, 암스테르담 (2019)",
    ],
    stats: {
      avgPrice: "₩15,200,000,000",
      totalTransactions: 2650,
      hammerRate: "79.5%",
      annualGrowth: "+7.1%",
      highestPrice: "₩107,000,000,000",
    },
    recentAuctions: [
      { title: "Nichols Canyon", year: 1980, medium: "Acrylic on canvas", size: "213.4×152.4cm", hammer: "₩48,000,000,000", auctionHouse: "Phillips", date: "2024.11" },
      { title: "Portrait of an Artist (Pool with Two Figures)", year: 1972, medium: "Acrylic on canvas", size: "214.5×304.8cm", hammer: "₩107,000,000,000", auctionHouse: "Christie's", date: "2024.03" },
    ],
    tags: ["팝아트", "구상", "풍경화", "현대미술"],
  },
];

export function searchArtists(query: string): Artist[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return artists.filter(
    (a) =>
      a.nameKo.toLowerCase().includes(q) ||
      a.nameEn.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
  );
}

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((a) => a.slug === slug);
}
