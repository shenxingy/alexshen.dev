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
