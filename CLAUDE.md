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

No CMS, no analytics, no comments, no search, no RSS, no i18n, no complex page transitions.
