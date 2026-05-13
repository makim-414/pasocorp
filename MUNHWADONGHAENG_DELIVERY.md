# munhwadonghaeng 소스 전달 (편집본)

이 브랜치에 `munhwadonghaeng-source.tar.gz` (24MB, 57 파일) 가 커밋되어 있습니다.
Vercel 배포 `dpl_8fNB4Jqt7pXXnDnktcqR1KjBwHAn` 의 소스를 API로 받아온 뒤,
"청년" 관련 카피를 정리한 편집본입니다.

## 적용된 편집

| 파일 | 변경 |
| --- | --- |
| `src/components/logo.tsx` | alt 텍스트 "문화동행 · 청년 함께하는 울림" → "문화동행 · 함께 걷는 문화의 길" |
| `src/app/page.tsx` | 히어로 헤드라인 "청년이 함께하는 울림" → "함께 걷는 문화의 길". 서브카피 진영 중립 문구로 교체. |
| `src/app/about/page.tsx` | 페이지 description 및 선언문 본문에서 "청년이 함께하는 울림" → "함께 걷는 문화의 길" |
| `README.md` | 태그라인 동일 변경 |

### 보존된 "청년" 6건 (어젠다·정책·회원 카테고리 컨텍스트)
- `src/app/activities/page.tsx:10` — "청년 예술인 지원" (어젠다 토픽)
- `src/app/activities/policy/page.tsx:7` — "청년 예술인의 접근권 확대" (정책)
- `src/app/activities/policy/page.tsx:9` — "청년 예술인 지원" (정책)
- `src/app/join/page.tsx:31` — "청년회원: 만 39세 이하" (회원 카테고리)
- `src/app/join/page.tsx:95` — "문화예술에 관심 있는 청년이라면 누구나 환영합니다." (자원봉사 청년 우대 맥락)
- `src/app/join/page.tsx:100` — "청년 우대" (자원봉사 혜택)

### TODO — 본인 확인 필요
- **`public/logo-horizontal.png` 이미지에 "청년 함께하는 울림" 글자가 박혀 있다면 이미지를 새로 만들어야 합니다.** 텍스트가 코드가 아닌 PNG에 baked-in 되어 있을 가능성이 높습니다. 확인 후 알려주세요.
- spec [5] (3대 가치 vs PDF 5대 핵심가치 통일) 은 별도 PR로 분리 — 이 작업에서는 손대지 않았습니다.

## 받아서 새 repo 만드는 법

```bash
# 1) 이 브랜치 받기
git clone -b claude/find-something-kiye6 --single-branch \
  https://github.com/makim-414/pasocorp.git tmp-delivery
cd tmp-delivery

# 2) 적당한 위치에 압축 풀기
mkdir -p ~/Projects/munhwadonghaeng
tar xzf munhwadonghaeng-source.tar.gz -C ~/Projects/munhwadonghaeng

# 3) 새 git repo로 만들고 GitHub에 push
cd ~/Projects/munhwadonghaeng
git init
git add .
git commit -m "initial: source recovered from Vercel deployment"
# GitHub 웹에서 munhwadonghaeng 빈 repo 미리 만들어두기
git remote add origin https://github.com/makim-414/munhwadonghaeng.git
git branch -M main
git push -u origin main

# 4) Vercel Connect Git 화면에서 새 repo 선택 → Connect
```

## 폴더 구조
- `.claude/launch.json` — Claude Code 설정
- `public/` — 로고 png 2개, chair-sohn.jpg, event/ 이미지 27장
- `src/app/` — Next.js app router (about, activities, contact, insights, join, ...)
- `src/components/` — hero-carousel, logo, page-hero, site-footer, site-header
- `src/lib/utils.ts`
- 루트 설정: package.json, tsconfig.json, next.config.ts, postcss.config.mjs, README.md

## 주의
- `out/` 폴더 (Next.js 빌드 결과물) 는 제외했습니다. `npm run build` 로 재생성됩니다.
- 작업 끝나면 Vercel API 토큰 즉시 revoke: https://vercel.com/account/tokens
- 새 repo가 안정되면 이 브랜치는 삭제해도 됩니다.
