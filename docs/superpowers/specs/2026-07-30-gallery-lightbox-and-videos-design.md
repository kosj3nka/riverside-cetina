# Full gallery page: interspersed videos + fullscreen lightbox

Date: 2026-07-30

## Problem

The `/gallery` page (`app/gallery/page.tsx`) currently renders all 16 photos
in a static masonry grid with no interaction — no click-to-enlarge, and no
videos. This supersedes the "explicitly out of scope: lightbox" note in
[2026-07-30-gallery-carousel-and-full-page-design.md](2026-07-30-gallery-carousel-and-full-page-design.md).

Two additions:

1. Mix the site's two existing videos (`hero.mp4`, `foal.mp4`, already used
   as background loops in `Hero.tsx` / `Horses.tsx`) into the photo grid.
2. Clicking any tile (photo or video) opens a fullscreen viewer with
   left/right arrow navigation through every item on the page, in grid order.

## Data layer (`lib/gallery.ts`)

Add a discriminated union and a combined list:

```ts
export type GalleryItem =
  | ({ kind: "photo" } & GalleryPhoto)
  | { kind: "video"; src: string; alt: string; width: number; height: number };

export const allGalleryItems: GalleryItem[];
```

`allGalleryItems` is built from `allGalleryPhotos` (the existing 16, in
existing order) with two videos spliced in:

- `{ kind: "video", src: "/videos/hero.mp4", alt: "Horseback riding along the Cetina river", width: 1920, height: 1080 }`
  inserted right after the first photo.
- `{ kind: "video", src: "/videos/foal.mp4", alt: "The herd's newest, curious foal", width: 1920, height: 1080 }`
  inserted right before the last photo.

Video `width`/`height` are a 16:9 placeholder (matching the `aspect-video`
treatment already used for `foal.mp4` in `Horses.tsx`) — used only to size
the masonry tile, not real intrinsic dimensions (videos have no equivalent
of `next/image`'s required intrinsic size).

Resulting order: `photo[0], video(hero), photo[1..14], video(foal), photo[15]`
— 18 items total.

## Icons (`components/icons.tsx`)

Add three icons in the existing hand-drawn style (`viewBox="0 0 48 48"`,
`stroke="currentColor"`, `strokeWidth="2.5"`, `strokeLinecap="round"`):

- `ChevronLeftIcon`, `ChevronRightIcon` — lightbox prev/next controls.
- `CloseIcon` — lightbox close (X).

## `components/Lightbox.tsx` (new, `"use client"`)

The only client-side code this route needs. Props: `items: GalleryItem[]`.
Renders both the grid and the fullscreen overlay, so click handlers and
lightbox state live in one place.

**Grid** (replaces the `<div className="mt-10 columns-1 ...">` block
currently inline in `app/gallery/page.tsx`):

- Same masonry classes as today (`columns-1 gap-4 sm:columns-2`,
  `break-inside-avoid overflow-hidden rounded-xl` per tile).
- Photo tiles: unchanged `next/image` rendering.
- Video tiles: `<video autoPlay muted loop playsInline>`, sized to fill the
  tile like the photos. Each video tile uses an `IntersectionObserver` (via
  a ref, set up in `useEffect`) to `.pause()` when scrolled out of the
  viewport and `.play()` when back in view — same visual loop, no wasted
  decode while off-screen.
- Every tile has `onClick={() => setOpenIndex(i)}`.

**Fullscreen overlay** (rendered when `openIndex !== null`):

- `fixed inset-0 z-50` backdrop (`bg-ink/95` or similar), click on the
  backdrop itself closes (`onClick` on the backdrop only; the media wrapper
  calls `stopPropagation`).
- Close button (`CloseIcon`) top-right.
- `ChevronLeftIcon` / `ChevronRightIcon` buttons, wrapping around at the
  ends (index `0` → left arrow goes to last item, and vice versa).
- Current item rendered large:
  - Photo: `next/image` with its real `width`/`height` (same non-`fill`
    pattern used everywhere else in this codebase), styled
    `h-auto w-auto max-h-[85vh] max-w-[90vw] object-contain` so it scales
    down to fit the viewport at its native aspect ratio, no cropping.
  - Video: plain `<video controls muted autoPlay loop playsInline>` (per
    design discussion: muted like everywhere else on the site, but with
    controls since this is the "closer look" view).
- Keyboard: `Escape` closes, `ArrowLeft`/`ArrowRight` navigate — a single
  `keydown` listener added in `useEffect` only while the overlay is open,
  removed on close/unmount.
- Body scroll lock (`document.body.style.overflow = "hidden"`) while open,
  restored on close.
- Transitions are plain CSS (Tailwind `transition-opacity`/`duration-200`
  style fade), not framer-motion — this route currently ships zero client
  JS, and framer-motion would be a new dependency for anyone landing on
  `/gallery` directly rather than via the homepage.

## `app/gallery/page.tsx`

Stays a server component. Heading and back-link stay as they are, inline in
the page. The masonry grid block is replaced with:

```tsx
<Lightbox items={allGalleryItems} />
```

## Explicitly out of scope

- Swipe/touch-drag gestures in the lightbox (click/tap on the arrow buttons
  and keyboard arrows only).
- Video scrubbing thumbnails, captions, or subtitles.
- Any change to how `hero.mp4` / `foal.mp4` behave in `Hero.tsx` / `Horses.tsx`.
- Deep-linkable/shareable URLs per photo (no routing changes).

## Testing

- Visual check in dev server: grid shows 18 tiles (16 photos + 2 videos) in
  the specified order, video tiles autoplay muted and loop.
- Scroll a video tile off-screen and confirm (via devtools) it pauses;
  scroll back and confirm it resumes.
- Click a photo tile → lightbox opens on that photo; arrows step through
  all 18 items in order, wrapping at both ends; clicking a video tile opens
  it with controls.
- Esc, X button, and backdrop click all close the lightbox; clicking the
  media itself does not close it.
- `next build` succeeds (route compiles, no type errors).
