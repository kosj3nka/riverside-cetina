import Image from "next/image";
import Link from "next/link";
import { galleryCarouselRows, type GalleryPhoto } from "@/lib/gallery";
import { Reveal } from "./Reveal";

function CarouselRow({
  photos,
  direction,
}: {
  photos: GalleryPhoto[];
  direction: "left" | "right";
}) {
  const track = Array.from({ length: 5 }, () => photos).flat();

  return (
    <div className="group overflow-hidden">
      <div
        className={`flex w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
      >
        {track.map((photo, i) => (
          <div
            key={`${photo.src}-${i}`}
            className="mr-3 h-48 shrink-0 overflow-hidden rounded-xl sm:mr-4 sm:h-56 lg:h-64"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="400px"
              className="h-full w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Gallery() {
  const [rowLeft, rowRight] = galleryCarouselRows;

  return (
    <section id="gallery" className="py-24 sm:py-32">
      <Reveal className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-heading text-3xl font-semibold text-cetina-green sm:text-4xl">
          Gallery
        </h2>
      </Reveal>

      <Reveal className="mt-14 space-y-3 sm:space-y-4">
        <CarouselRow photos={rowLeft} direction="left" />
        <CarouselRow photos={rowRight} direction="right" />
      </Reveal>

      <div className="mt-10 flex justify-center px-6">
        <Link
          href="/gallery"
          className="rounded-full border border-ink/15 px-6 py-3 font-body font-semibold text-ink transition-colors hover:bg-sand"
        >
          See all photos
        </Link>
      </div>
    </section>
  );
}
