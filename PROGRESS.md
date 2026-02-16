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
