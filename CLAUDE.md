# alexshen.dev

Personal website for Alex Shen. Live at [alexshen.dev](https://alexshen.dev).

## Tech Stack

- **Framework:** Next.js 16 (App Router, Server Components)
- **Styling:** Tailwind CSS v4 (CSS-first config with semantic tokens)
- **Dark mode:** `next-themes` with `.dark` class strategy
- **Blog:** `next-mdx-remote` + `gray-matter` for MDX posts
- **Animations:** `motion` (Framer Motion v12) for page fade-in
- **Fonts:** Inter (sans, primary) + Source Serif 4 (serif, blog prose) via `next/font/google`
- **Deploy:** Vercel (auto-deploy from `main` branch)
- **Domain:** `alexshen.dev` via Cloudflare DNS → Vercel

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: thin html/body shell, fonts
│   ├── globals.css             # Tailwind v4 theme tokens + dark mode + prose styles
│   ├── icon.svg                # Favicon (AS monogram)
│   └── [locale]/               # i18n prefix routing (en/zh)
│       ├── layout.tsx          # Locale layout: ThemeProvider, nav, footer
│       ├── page.tsx            # Home: avatar, tagline, projects, recent writing
│       ├── not-found.tsx       # Custom 404
│       ├── about/page.tsx      # Bio, experience, education
│       ├── blog/page.tsx       # Blog listing
│       ├── blog/[slug]/page.tsx # Individual blog post
│       └── projects/page.tsx   # Expanded project cards
├── components/
│   ├── nav.tsx                 # Top nav with language switcher + active state
│   ├── footer.tsx              # Footer with social links
│   ├── theme-provider.tsx      # next-themes "use client" wrapper
│   ├── theme-toggle.tsx        # Sun/Moon toggle
│   ├── project-card.tsx        # Card with hover animation + tech pills
│   ├── animated-container.tsx  # Framer Motion fade-in wrapper
│   ├── mdx-remote.tsx          # MDX string renderer for blog posts
│   ├── toc.tsx                 # Table of contents with IntersectionObserver
│   └── external-link-icon.tsx  # Reusable external link arrow icon
├── i18n/
│   ├── routing.ts              # Locale definitions (en, zh)
│   ├── request.ts              # Server-side locale config
│   └── navigation.ts           # i18n navigation utilities
├── lib/
│   ├── constants.ts            # Site config + project data (11 projects)
│   └── blog.ts                 # Read/parse MDX files from content/blog/
└── content/blog/
    └── *.<locale>.mdx          # Blog posts with frontmatter (title, date, excerpt)
```

Root files: `middleware.ts` (i18n locale detection), `mdx-components.tsx` (MDX pass-through), `next.config.ts`

## Key Patterns

- **No inline `dark:`** — colors use semantic CSS tokens (`text-primary`, `bg-secondary`, etc.) that swap via `.dark` class in `globals.css`
- **Layout:** Single column, `max-w-2xl`, centered
- **Blog posts:** Add `.mdx` files to `src/content/blog/` with frontmatter. They auto-appear on the blog page.
- **Projects:** Edit `src/lib/constants.ts` to add/modify projects
- **Icons:** Inline SVGs, no icon library

## What NOT to build (v1)

No CMS, no analytics, no comments, no search, no RSS, no complex page transitions.

---

## Workflow: Adding a New Project + Blog Post

### Step 1 — Add project card (`src/lib/constants.ts`)

```ts
{
  name: "Project Name",
  shortDescription: "One-line EN summary",
  shortDescriptionZh: "一句话中文概括",
  description: "2–3 sentence EN description. Lead with the problem, not the features.",
  descriptionZh: "中文版，同样先说痛点。",
  tech: ["Tech1", "Tech2"],
  url: "https://live-url.com",        // omit if not deployed
  github: "https://github.com/...",   // omit if private repo
}
```

**Field guidance:**
- `shortDescription` — shown on home page card (single line, ~10 words)
- `description` — shown on /projects expanded view (2–3 sentences)
- For private repos: omit `github`, keep `url` if deployed
- Order in array = display order on site (put featured projects first)

### Step 2 — Write the blog post (`src/content/blog/<slug>.mdx`)

```mdx
---
title: "..."
date: "YYYY-MM-DD"
excerpt: "One sentence shown in blog listing."
---
```

**Blog post narrative structure (for project posts):**

1. **Pain point** — what problem existed before you built this? Be specific and relatable.
2. **Why the existing solutions fail** — what does the official tool / existing approach actually give you, and why is it not enough?
3. **The core insight** — the one thing that unlocked the solution ("the data is public, it just needs a UI")
4. **How it works** — describe the tool from the user's perspective, not implementation details
5. **Actually using it** — the most important section. Real outcome: did it help you or anyone make a real decision? This is the story people share.
6. **What you'd add** — honest reflection on tradeoffs and next steps. Shows engineering judgment.
7. **CTA** — live URL + GitHub (if public)

**Research inputs when writing:**
- `git log --oneline` in the project repo — reveals the actual build journey and what problems were hard
- `README.md` — core features and architecture
- Key source files — understand what the tool actually computes (e.g., haversine distance, color thresholds)

**Tone:** Direct, personal, slightly technical. Lead with the human story, not the tech stack. Avoid "I decided to build" openings — start in the middle of the problem.

---

## Auto-Promoted Rules
<!-- Promoted from .claude/corrections/rules.md via /audit. Each rule lists its original recording date. -->

### Content accuracy

- **Verify URLs from source, not memory** `[auto-promoted 2026-04-19 from 2026-03-21 blog-links]`: Before writing an external URL in a blog post, verify it against the actual project's source or README — not from memory. Example: DOL wage search is at `flag.dol.gov/wage-data/wage-search`, not `dol.gov/agencies/eta`. Check the h1b-compass README or scripts for the URL actually used.

- **Project years from git history** `[auto-promoted 2026-04-19 from 2026-03-22 project-dates]`: Verify project years from actual git commits (`gh api repos/.../commits --jq '.[0].commit.committer.date'`), not assumed launch dates. InkWeave was labelled 2025 but first commit is 2026-03-20; Scam AI was labelled 2024 but repo starts 2025-10.

- **Don't invent specific details** `[auto-promoted 2026-04-19 from 2026-03-30 blog-factual-details]`: When expanding user-provided anecdotes, don't invent specific names (books, authors, nicknames) from memory — either keep the reference generic or ask. "Dragon Book" was wrong; user meant Andrew Appel's Tiger Book (虎书).

- **Verify live site matches repo** `[auto-promoted 2026-04-19 from 2026-03-30 live-site-verification]`: After confirming local files are correct, also verify the LIVE site reflects the change — files can be correct on disk while the deployed site is stale (failed/in-progress Vercel build, CDN cache). Check the Vercel deployment status before declaring a rebrand complete.

### Voice & prose

- **Warmth ≠ fluff** `[auto-promoted 2026-04-19 from 2026-03-22 blog-tone]`: When tightening prose, preserve warmth. Emotional honesty ("I hadn't expected that", "What surprised me was...") is not marketing fluff. The blog voice is warm and personal, not surgical. Cut overexplaining, keep the human moments. Distinguish "fluff to cut" from "warmth to keep" BEFORE removing lines wholesale.

- **Integrate collaborator voice verbatim** `[auto-promoted 2026-04-19 from 2026-03-22 blog-collaboration]`: Describe collaboration naturally — don't score-card it ("50/50 in contribution, ownership, and shaping"). When the collaborator or user provides their own wording for a personal story, integrate their words rather than paraphrasing — original voice has texture that rewrites lose.

### UI / interaction

- **Project card primary = blog, not live URL** `[auto-promoted 2026-04-19 from 2026-03-21 project-card-ux]`: Project card's primary click should go to the blog post (the story), with separate icon links for live site + GitHub. Don't make the whole card an external link to the deployed URL — it bypasses the personal narrative.

- **Hover accent only where clickable** `[auto-promoted 2026-04-19 from 2026-03-21 project-card-hover]`: Apply hover/accent color only to cards that have a primary link (`blogSlug`) — not globally to every card. Check card clickability before adding the hover-accent class.

### i18n

- **Grep non-locale strings after i18n** `[auto-promoted 2026-04-19 from 2026-03-21 i18n-completeness]`: When a page uses locale-aware rendering, verify ALL user-visible strings are wired to the locale — not just section headers. `siteConfig.tagline` and `getAllPosts()` without a locale param silently rendered English on the Chinese homepage. After implementing locale routing, grep for non-translated references (`siteConfig.`, function calls missing `locale`).
