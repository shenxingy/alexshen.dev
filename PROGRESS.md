# Progress

## 2025-02-16 — Initial Launch

- Scaffolded Next.js 15 with Tailwind v4, TypeScript, App Router
- Built all pages: Home, Projects, Blog, About, 404
- Set up dark/light mode with `next-themes` using semantic CSS tokens (no inline `dark:` classes)
- Implemented MDX blog system with `next-mdx-remote` + `gray-matter`
- Added Framer Motion page entrance animations
- Typography: Inter (sans) + Source Serif 4 (serif for blog prose)
- Created AS monogram favicon, replaced Vercel default
- Deployed to Vercel, connected `alexshen.dev` via Cloudflare DNS
- Domain purchased on Cloudflare ($12.20/yr)

### Lessons Learned

- Cloudflare proxy (orange cloud) conflicts with Vercel SSL — must use DNS only (gray cloud)
- Root domains need A records, subdomains use CNAME
- Vercel is migrating to new IP ranges — check project-specific DNS recommendations in Vercel dashboard
- `next-mdx-remote/rsc` works well for rendering MDX strings in Server Components

## 2026-02-26 — i18n (EN/ZH) + Project List Update

- Added full EN/ZH internationalization with `next-intl` and prefix routing (`/en/`, `/zh/`)
- Middleware auto-detects browser language, defaults to English
- All pages moved to `src/app/[locale]/` — stable shareable Chinese URLs (e.g. `alexshen.dev/zh/about`)
- Language switcher in nav (shows "中" / "EN") uses `router.replace` to keep current path
- Footer and nav labels translated; bio copy fully translated to Chinese
- Date formatting is locale-aware (`zh-CN` format for Chinese)
- Project list refreshed: removed Duke Duber + RTVis, added claude-code-kit + LocalRag, updated MealMates tech stack
- All 6 projects have `descriptionZh` + `shortDescriptionZh` for Chinese display via `useParams()` in ProjectCard

### Lessons Learned

- next-intl App Router setup: `app/layout.tsx` becomes a thin html/body shell; all providers + nav go into `app/[locale]/layout.tsx`
- Root layout needs `suppressHydrationWarning` on `<html>` since ThemeProvider changes the class client-side
- `setRequestLocale(locale)` must be called at the top of every Server Component page for static generation compatibility
- `hasLocale()` from next-intl is the correct way to validate locale params (replaces manual `.includes()` check)
- Stale `.next/dev/types/validator.ts` can show false TS errors after deleting old pages — clearing `.next/dev/` resolves it
- Language switcher: use `router.replace(pathname, { locale: nextLocale })` from next-intl's `createNavigation` — this preserves the current path while swapping locale

## 2026-02-17 — Tech Debt Review & Cleanup

- Ran `/review` skill, found and fixed all issues in one session
- Removed 3 redundant MDX deps (`@next/mdx`, `@mdx-js/loader`, `@mdx-js/react`) — blog only uses `next-mdx-remote`
- Extracted `ExternalLinkIcon` component (was duplicated 4x as inline SVG)
- Added `formatDate()` utility to deduplicate 3 identical `toLocaleDateString` calls
- Added date validation in `blog.ts` — prevents NaN sort and "Invalid Date" for bad frontmatter
- Fixed pre-existing lint error in `theme-toggle.tsx` — replaced `useState`+`useEffect` mounted pattern with `useSyncExternalStore`
- Updated CLAUDE.md: Next.js version 15→16, removed `@next/mdx` from tech stack

### Lessons Learned

- The `/review` skill saves its report to `docs/reviews/` but doesn't clean up after fixes are applied — leads to stale artifacts. Updated the skill to only save when explicitly requested.
- `@next/mdx` and `next-mdx-remote` serve different purposes (import-based vs string-based MDX) — don't install both unless you actually need both
- `useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)` is the modern React pattern for client-only state (replaces the `useState`+`useEffect` mounted hack)
