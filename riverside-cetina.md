# Riverside Cetina — Website Build Spec

Horseback riding experience along the Cetina river, Sinj, Croatia.
Instagram: [@riverside_cetina](https://www.instagram.com/riverside_cetina/) · Host: Vercel

> Build order for a first working version. Ship the hero + a booking button, then layer in polish.

---

## 0. Prereqs

- Node 18+ and Git installed
- A Vercel account (free Hobby plan)
- The drone video file (compressed) + a poster still frame
- 6–10 good photos (horses, river, trail, riders)
- Owner's WhatsApp number / Instagram handle for the booking button

**Real details to use as content:**

- 🐴 Beginner-friendly horseback riding
- 📍 Along the Cetina river, Sinj — 35 km from Split
- Starting point: **Glavice, Sinj**
- Duration & price: **1 h 30 min for €50**
- Contacts: **Marko +385 92 365 1110** · **Ivan +385 99 460 3818**

---

## 1. Scaffold

```bash
npx create-next-app@latest riverside-cetina --typescript --tailwind --app --eslint
cd riverside-cetina
npm install framer-motion
npm run dev
```

Then push to GitHub and import the repo in Vercel. Every push auto-deploys.

---

## 2. Free domain

Ship first, prettify later.

1. **Now:** you automatically get `riverside-cetina.vercel.app`. Name the project so it reads well.
2. **Cleaner (optional):** claim a free short name at `domain.hyp.app` → e.g. `riversidecetina.hyp.app`, or a free `*.is-a.dev` subdomain via a GitHub PR.
3. **Attach it:** Vercel → project → **Settings → Domains → Add Domain** → add the `CNAME` (usually `cname.vercel-dns.com`) at whichever service issued the name → wait for verification (SSL is automatic).
4. **Later paid upsell:** a `.hr` domain (a few € / year) → `riversidecetina.hr`.

---

## 3. Design system

Set these once, use everywhere. Put in `tailwind.config` theme + a few CSS vars.

**Palette**

| Token | Hex | Use |
|---|---|---|
| Cetina green | `#2F6B4F` | primary, headings — the river's colour |
| River teal | `#3E7C8C` | secondary accent, links |
| Leather / rust | `#A0522D` | buttons, warm accents |
| Sand | `#E8DCC4` | riverbank section backgrounds |
| Cream | `#FAF6EE` | page background |
| Ink | `#2B2622` | body text |

**Type**

- Headings: a rugged/countryside serif or display font (e.g. a slab serif) — via `next/font/google`
- Body: a clean sans (Inter / system)

**Feel:** the Cetina river is the star — cool greens and flowing water, warmed by leather/rust for the riding side. Earthy, uncluttered, one strong motion idea per section, never five.

---

## 4. Page structure (single page, anchored nav)

Build top to bottom. Each is a component in `components/`.

### 4.1 Hero — `Hero.tsx`
- Full-screen drone `<video>`: `autoPlay muted loop playsInline` + `poster` still
- Dark gradient overlay (`bg-gradient-to-b from-black/40 to-black/20`) so white text stays readable
- Headline + one-line tagline + a **Book** button + a soft scroll-down cue
  - Suggested headline: *Ride the Cetina* — or *Horseback riding along the Cetina river*
  - Tagline: *Beginner-friendly rides from Glavice, Sinj — 35 km from Split*
- **Perf:** compressed short loop; consider hosting the video on a CDN / Vercel Blob rather than committing a large file

### 4.2 Intro — `Intro.tsx`
- Two or three sentences leading with the river: beginner-friendly horseback riding along the Cetina in Sinj, starting from Glavice, just 35 km from Split — no experience needed
- Reveal-on-scroll fade/slide (Framer Motion)

### 4.3 The experience — `Experience.tsx`
- 2–3 cards using the real facts:
  - **Duration:** 1 h 30 min
  - **Price:** €50 per ride
  - **Level:** beginner-friendly, no experience needed
  - **Start:** Glavice, Sinj
- Custom icons (river wave, horseshoe, saddle, sun) — lead with water motifs

### 4.4 Meet the horses — `Horses.tsx`
- Photo cards, each with the horse's name + one-line personality
- Biggest trust/charm builder — worth the effort

### 4.5 The river trail — `Trail.tsx`
- This is the whole pitch: riding *along the Cetina*. Make the water the through-line.
- Simple illustrated map tracing the river route with a few stop markers (river crossing, viewpoint, rest spot)
- Call out the sensory bits — riding beside the water, sound of the current, crossings

### 4.6 Gallery — `Gallery.tsx`
- Natural, slightly irregular photo grid (not perfect squares)
- Use `next/image` for optimization

### 4.7 Book — `Book.tsx`
- **Stage 1:** big "Book on WhatsApp" button (link to `https://wa.me/385923651110` or `385994603818`) and/or a simple request form (name, date, group size, message) that emails the operator
- Practical info to show:
  - Start: **Glavice, Sinj** (35 km from Split, along the Cetina river)
  - Ride: **1 h 30 min · €50**
  - Beginner-friendly, no experience needed
  - **Marko +385 92 365 1110** · **Ivan +385 99 460 3818**

### 4.8 Footer — `Footer.tsx`
- Instagram link, Glavice/Sinj location, both phone contacts, copyright

---

## 5. Nice-to-have motion (add after content works)

- River-bend / flowing-water SVG dividers between sections
- Subtle parallax on background layers (keep the river plane feeling like it drifts)
- Horse silhouette or hoofprint as a scroll-progress marker
- Optional ambient river sound toggle — fits the theme perfectly, but **off by default, never autoplay**

Keep it tasteful. Test on mobile after each addition.

---

## 6. Reservations roadmap

| Stage | What | When |
|---|---|---|
| 1 | WhatsApp/IG button or email form | launch |
| 2 | Embed [Cal.com](https://cal.com) (free) for time slots | when the form gets busy |
| 3 | Custom: Supabase (bookings + availability) + Stripe for deposits | only if they outgrow Stage 2 |

Don't over-build before there's demand.

---

## 7. Tech stack summary

**Now:** Next.js + TypeScript + Tailwind + Framer Motion, hosted on Vercel, free `.vercel.app` (or `.hyp.app`) domain, booking via WhatsApp/email.

**Later:** Cal.com or Supabase for reservations, Stripe if payments are needed.

> You already work in Expo/React Native + TypeScript, so Next.js is the same React model — you'll be at home immediately.

---

## 8. First-session checklist

- [ ] Scaffold + deploy an empty site to Vercel (proves the pipeline)
- [ ] Drop in the drone hero with overlay + working poster fallback
- [ ] Add the WhatsApp/Instagram book button
- [ ] Wire the palette + fonts
- [ ] Add Intro + Experience sections with reveal-on-scroll
- [ ] Then: horses, trail, gallery, motion polish, nicer domain
