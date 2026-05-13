# munhwadonghaeng 소스 전달

이 브랜치에 `munhwadonghaeng-source.tar.gz` (24MB, 57 파일) 가 커밋되어 있습니다.
Vercel 배포 `dpl_8fNB4Jqt7pXXnDnktcqR1KjBwHAn` 의 소스를 API로 받아온 것입니다.

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
