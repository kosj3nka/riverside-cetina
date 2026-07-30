# Riverside Cetina

Marketing site for Riverside Cetina — beginner-friendly horseback riding
along the Cetina river in Sinj, Croatia.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer
Motion, following the build order in [`riverside-cetina.md`](./riverside-cetina.md).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `app/` — root layout, global styles, page
- `components/` — one component per section (`Hero`, `Intro`, `Experience`,
  `Horses`, `Trail`, `Gallery`, `Book`, `Footer`, `Nav`)
- `lib/site.ts` — shared content: contacts, location, nav links
- `public/videos`, `public/images` — served media, organized by section
- `assets/` — original source media (not committed; see `.gitignore`)

## Deploying

Push to GitHub and import the repo in Vercel — every push auto-deploys.
See `riverside-cetina.md` for the domain and reservations roadmap.
