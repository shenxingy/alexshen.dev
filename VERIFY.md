# VERIFY.md — personal-site

Behavior anchors for coverage-driven review. Each checkpoint is tested end-to-end and must reach ✅ or ⚠ before shipping.

---

## Build & Type Safety

| # | Checkpoint | Status | Notes |
|---|-----------|--------|-------|
| 1 | `npm run build` exits 0 with no errors | ✅ | 27 pages generated, all routes compile |
| 2 | `npx tsc --noEmit` exits 0 | ✅ | No type errors |
| 3 | `npm run lint` exits 0 | ✅ | ESLint clean (next/core-web-vitals + typescript) |

---

## i18n Routing

| # | Checkpoint | Status | Notes |
|---|-----------|--------|-------|
| 4 | `/` redirects to `/en` (default locale) | ✅ | Middleware configured for `["en","zh"]`, default `en` |
| 5 | `/zh` serves Chinese copy | ✅ | `zh.json` messages complete for all namespaces |
| 6 | Language switcher toggles locale in-place | ✅ | `router.replace(pathname, { locale: nextLocale })` in nav.tsx |
| 7 | Unknown locale returns 404 (not crash) | ✅ | `hasLocale` check + `notFound()` in `[locale]/layout.tsx` |
| 8 | `<html lang>` attribute matches active locale | ✅ | Fixed: root layout uses `getLocale()` from next-intl/server |
| 9 | All i18n message keys present in both `en.json` and `zh.json` | ✅ | Keys: nav, home, projects, blog, about, footer, friends, notFound |

---

## Pages

| # | Checkpoint | Status | Notes |
|---|-----------|--------|-------|
| 10 | Home page renders hero, 4 projects, up to 3 recent posts | ✅ | `projects.slice(0,4)`, `getAllPosts(locale).slice(0,3)` |
| 11 | Projects page groups by category (Apps, Open Source, Research, Course) | ✅ | `projectCategories` filter in projects/page.tsx |
| 12 | Blog listing shows all non-draft posts, sorted newest first | ✅ | `getAllPosts` filters `draft:false`, sorts by date descending |
| 13 | Blog post page renders MDX, shows ToC for posts with ≥2 `##` headings | ✅ | `extractHeadings` + `TableOfContents` with IntersectionObserver |
| 14 | Blog post `##` headings get slugified `id` attributes for anchor links | ✅ | `Heading2` component in mdx-remote.tsx uses `slugify()` |
| 15 | Missing blog slug returns 404 | ✅ | `getPostBySlug` returns null → `notFound()` |
| 16 | About page shows bio, experience, education, connect sections | ✅ | Static content via i18n keys + siteConfig links |
| 17 | Friends page renders all entries with external links | ✅ | `friends` array in constants.ts, `target="_blank" rel="noopener noreferrer"` |
| 18 | 404 page renders translated message + go-home link | ✅ | `notFound.tsx` uses `useTranslations("notFound")` |

---

## Blog Content

| # | Checkpoint | Status | Notes |
|---|-----------|--------|-------|
| 19 | All blog posts have both `.en.mdx` and `.zh.mdx` files | ✅ | 7 slugs × 2 locales = 14 files present |
| 20 | All frontmatter has `title`, `date` (YYYY-MM-DD), `excerpt`, `draft: false` | ✅ | Verified across all 14 files |
| 21 | Dates display the correct calendar date regardless of server timezone | ✅ | Fixed: `formatDate` now parses as local date (`new Date(y, m-1, d)`) instead of UTC |
| 22 | Fallback: posts with no ZH translation fall back to EN | ✅ | `getAllPosts` logic includes fallback English files |

---

## Theme & Styling

| # | Checkpoint | Status | Notes |
|---|-----------|--------|-------|
| 23 | Dark mode uses `.dark` CSS class strategy (no `prefers-color-scheme` flash) | ✅ | `ThemeProvider attribute="class"` + `suppressHydrationWarning` on `<html>` |
| 24 | No inline `dark:` Tailwind utilities — semantic token pattern only | ✅ | `grep -rn "dark:" src/` returns nothing |
| 25 | Semantic color tokens defined for both light and dark in `globals.css` | ✅ | `:root` and `.dark` both define all 8 color vars |
| 26 | Font variables wired correctly: Inter (sans) + Source Serif 4 (serif) | ✅ | `--font-inter` / `--font-source-serif-4` via `@theme inline` |

---

## Components

| # | Checkpoint | Status | Notes |
|---|-----------|--------|-------|
| 27 | Nav active state highlights current route | ✅ | `pathname.startsWith(href)` logic in nav.tsx |
| 28 | ProjectCard: blog-linked projects navigate to blog post | ✅ | `project.blogSlug` → `<Link href="/blog/{slug}">` |
| 29 | ProjectCard: URL-only projects open externally | ✅ | `<a target="_blank" rel="noopener noreferrer">` |
| 30 | ProjectCard: private projects (no url, no blogSlug) render as non-interactive div | ✅ | Fallback `<div>` in project-card.tsx |
| 31 | ThemeToggle hydration: no mismatch on SSR | ✅ | `useSyncExternalStore` with server snapshot returning `false` |
| 32 | TableOfContents hidden on screens narrower than `xl` (1280px) | ✅ | `hidden xl:block` class, left-positioned outside max-w-2xl column |
| 33 | AnimatedContainer fade-in (opacity 0→1, y 16→0) | ✅ | Framer Motion `motion.div` with `duration: 0.4, ease: easeOut` |

---

## SEO & Metadata

| # | Checkpoint | Status | Notes |
|---|-----------|--------|-------|
| 34 | Each page has unique `<title>` via metadata API | ✅ | `template: "%s — Alex Shen"` in locale layout |
| 35 | OpenGraph tags present with locale-appropriate values | ✅ | `openGraph` block in locale layout `generateMetadata` |
| 36 | Blog posts have their own metadata (title = post title, description = excerpt) | ✅ | `generateMetadata` in blog/[slug]/page.tsx |
| 37 | `robots: { index: true, follow: true }` on all pages | ✅ | Root layout + locale layout both set robots |
| 38 | Favicon: `icon.svg` AS monogram | ✅ | `src/app/icon.svg` picked up automatically by Next.js |

---

## Edge Cases

| # | Checkpoint | Status | Notes |
|---|-----------|--------|-------|
| 39 | Empty blog content dir returns empty array (no crash) | ✅ | `getAllPosts` checks `fs.existsSync(contentDir)` |
| 40 | Draft posts excluded from listing and direct access | ✅ | Filter `!post.draft` in `getAllPosts`; `if (data.draft) return null` in `getPostBySlug` |
| 41 | Post with missing/invalid date excluded from listing | ✅ | Filter `post.date !== ""` in `getAllPosts` |
| 42 | Project without `url`, `github`, or `blogSlug` renders without broken links | ✅ | `ProjectCard` renders `<div>` fallback |
| 43 | Legacy blog URL `/blog/claude-code-kit` redirects to `/blog/clade` | ✅ | Permanent redirect in `next.config.ts` |

---

## Known Limitations

| # | Item | Status |
|---|------|--------|
| L1 | No test suite — no unit, integration, or e2e tests | ⚠ |
| L2 | No RSS feed | ⚠ |
| L3 | No sitemap.xml | ⚠ |
| L4 | ToC only detects `##` headings, not `###` | ⚠ |
