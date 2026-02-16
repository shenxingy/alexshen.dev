# alexshen.dev

My personal website — built with Next.js 15, Tailwind CSS v4, and MDX.

**[alexshen.dev](https://alexshen.dev)**

## Stack

- Next.js 15 (App Router, Server Components)
- Tailwind CSS v4 (semantic CSS tokens, dark mode)
- MDX blog with `next-mdx-remote` + `gray-matter`
- Framer Motion for subtle animations
- Deployed on Vercel

## Development

```bash
npm install
npm run dev
```

## Adding a Blog Post

Create a `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Post Title"
date: "2025-02-16"
excerpt: "A short summary."
---

Your content here.
```

## License

MIT
