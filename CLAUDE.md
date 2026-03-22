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
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout: fonts, ThemeProvider, nav, footer
│   ├── page.tsx            # Home: avatar, tagline, projects, recent writing
│   ├── globals.css         # Tailwind v4 theme tokens + dark mode + prose styles
│   ├── icon.svg            # Favicon (AS monogram)
│   ├── not-found.tsx       # Custom 404
│   ├── projects/page.tsx   # Expanded project cards
│   ├── blog/page.tsx       # Blog listing
│   ├── blog/[slug]/page.tsx # Individual blog post
│   └── about/page.tsx      # Bio, experience, education
├── components/
│   ├── nav.tsx             # Top nav with active state
│   ├── footer.tsx          # Footer with social links
│   ├── theme-provider.tsx  # next-themes "use client" wrapper
│   ├── theme-toggle.tsx    # Sun/Moon toggle
│   ├── project-card.tsx    # Card with hover animation + tech pills
│   ├── animated-container.tsx  # Framer Motion fade-in wrapper
│   ├── mdx-remote.tsx      # MDX string renderer for blog posts
│   └── external-link-icon.tsx  # Reusable external link arrow icon
├── lib/
│   ├── constants.ts        # Site config + project data (6 projects)
│   └── blog.ts             # Read/parse MDX files from content/blog/
└── content/blog/
    └── *.mdx               # Blog posts with frontmatter (title, date, excerpt)
```

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
