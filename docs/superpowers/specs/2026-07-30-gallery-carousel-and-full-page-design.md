# Gallery redesign: homepage carousels + full-photos bento page

Date: 2026-07-30

## Problem

The homepage `Gallery` section currently renders all 12 photos in a static
bento grid (`components/Gallery.tsx`), with `fill`-cropped images. We want a
lighter homepage teaser (two auto-scrolling rows) and a dedicated page that
shows every photo uncropped.

## Data layer

New `lib/gallery.ts`:

```ts
export type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const galleryPhotos: GalleryPhoto[]; // all 12, real intrinsic dimensions
export const galleryCarouselRows: [GalleryPhoto[], GalleryPhoto[]]; // 5 + 5, subset of the 10 featured photos
```

Intrinsic dimensions (measured via `sharp`, already gathered):

| file | w x h | ratio |
|---|---|---|
| aestheticSunHorse.webp | 1440x1920 | 0.75 |
| backViewRiding.webp | 640x800 | 0.80 |
| cowboyFeel.webp | 1440x960 | 1.50 |
| frontViewRiding.jpg | 640x591 | 1.08 |
| girlAndDogRiding.webp | 640x853 | 0.75 |
| groupRifing.webp | 1440x1440 | 1.00 |
| holdingUpHeartRiding.jpg | 640x853 | 0.75 |
| littleGirlsRiding.jpg | 640x428 | 1.50 |
| peopleOnHorse.webp | 1440x1080 | 1.33 |
| peopleRiding2.webp | 1080x1440 | 0.75 |
| verticalRiding.webp | 640x800 | 0.80 |
| wavingWhileRiding.jpg | 640x852 | 0.75 |

Carousel rows (10 of the 12; `littleGirlsRiding` and `verticalRiding` are
left out of the homepage rows but still appear on the full `/gallery` page):

- Row 1 (scrolls left): aestheticSunHorse, groupRifing, frontViewRiding, backViewRiding, peopleOnHorse
- Row 2 (scrolls right): cowboyFeel, girlAndDogRiding, holdingUpHeartRiding, peopleRiding2, wavingWhileRiding

## Homepage `Gallery` section (`components/Gallery.tsx`)

- Renders the existing heading, then two carousel rows, then a "See all
  photos" button linking to `/gallery`.
- Each row is a fixed-height strip (`h-48 sm:h-56 lg:h-64`); each image
  renders at its native aspect ratio (width auto), no cropping.
- Seamless infinite scroll: each row's 5-photo list is rendered twice back
  to back inside a flex container; a CSS `@keyframes` animation translates
  the container by -50% (row 1) or from -50% to 0 (row 2), so the loop point
  is invisible.
- Row 1 animates leftward, row 2 animates rightward, both `linear infinite`.
- `animation-play-state: paused` on `:hover` — pure CSS, no client
  component, no drag support.
- Registered in `app/globals.css` as `@theme` `--animate-*` tokens so
  Tailwind generates `animate-marquee-left` / `animate-marquee-right`
  utilities.
- "See all photos" button styled like the existing outline button in
  `components/Book.tsx` (`rounded-full border border-ink/15 ...`).

## Full gallery page (`app/gallery/page.tsx`)

- New App Router route at `/gallery`.
- All 12 photos from `galleryPhotos`.
- `grid grid-cols-1 sm:grid-cols-2 gap-4 items-start` — caps at 2 photos per
  row on `sm`+ and lets each image keep its own height (no row-stretching),
  which reads as a bento mosaic since tile heights vary.
- Each photo via `next/image` with real `width`/`height` (not `fill`),
  `className="h-auto w-full rounded-xl"`.
- Basic page chrome: heading + back link to `/#gallery`.

## Explicitly out of scope

- Lightbox / click-to-enlarge on either page.
- Manual drag-to-scroll on the marquee rows (auto-play + hover-pause only).
- Any nav link to `/gallery` in `components/Nav.tsx`.

## Testing

- Visual check in dev server: homepage marquee rows loop seamlessly in both
  directions, pause on hover, no layout shift.
- `/gallery` renders all 12 photos, 2-per-row on desktop, 1-per-row on
  mobile, no cropping/distortion.
- `next build` succeeds (route compiles, no type errors).
