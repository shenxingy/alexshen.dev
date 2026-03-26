# alexshen.dev

My personal website — built with Next.js 16, Tailwind CSS v4, and MDX.

**[alexshen.dev](https://alexshen.dev)**

## Stack

- Next.js 16 (App Router, Server Components)
- Tailwind CSS v4 (semantic CSS tokens, dark mode)
- MDX blog with `next-mdx-remote` + `gray-matter`
- `next-intl` for EN/ZH internationalization (prefix routing)
- Framer Motion for subtle animations
- Deployed on Vercel

## Development

```bash
npm install
npm run dev    # localhost:3000
npm run build  # production build
npm run lint   # ESLint
```

## Adding a Blog Post

Create a `.mdx` file in `src/content/blog/` using the locale suffix convention:

```mdx
---
title: "Post Title"
date: "2025-02-16"
excerpt: "A short summary."
---

Your content here.
```

Files follow the naming pattern `<slug>.<locale>.mdx` (e.g. `my-post.en.mdx`, `my-post.zh.mdx`). Posts without a translation fall back to the English version.

## Adding a Project

Edit `src/lib/constants.ts` — add an entry to the `projects` array. Fields: `name`, `shortDescription`, `description`, `tech`, and optionally `url`, `github`, `blogSlug`, `year`, `category`.

## License

MIT
