# KO Media — [mediabyko.com](https://mediabyko.com)

Public website for **KO Media**, a New Jersey media company focused on video production and social content for small businesses and brands.

After years of media and marketing work across different organizations, this site was built as the company web presence — portfolio, contact, and booking in one place.

**Live site:** [https://mediabyko.com](https://mediabyko.com)

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Sanity](https://www.sanity.io/) CMS for project content
- [Cloudflare](https://developers.cloudflare.com/) (OpenNext / Workers) for deployment
- Tailwind CSS, TypeScript

## Local development

```bash
npm install
cp .env.local.example .env.local
# fill in Sanity project id, dataset, and site config
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Environment variables are documented in [`.env.local.example`](.env.local.example):

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (usually `production`) |
| `SANITY_API_READ_TOKEN` | Optional — draft/preview reads |
| `NEXT_PUBLIC_BOOKING_URL` | Hero / nav booking CTA |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email |
| `NEXT_PUBLIC_INSTAGRAM_URL` / `TIKTOK` / `YOUTUBE` | Footer social links |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local Next.js dev server |
| `npm run build` / `npm start` | Production build & serve |
| `npm run pages:build` | OpenNext Cloudflare build |
| `npm run preview` / `npm run deploy` | Wrangler preview / deploy |

## Related

- Personal resume: [https://kholaif.github.io/](https://kholaif.github.io/)
- GitHub: [@kholaif](https://github.com/kholaif)
