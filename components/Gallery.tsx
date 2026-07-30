import Image from "next/image";
import { Reveal } from "./Reveal";

const photos = [
  { src: "/images/gallery/aestheticSunHorse.webp", span: "row-span-2" },
  { src: "/images/gallery/groupRifing.webp", span: "col-span-2" },
  { src: "/images/gallery/frontViewRiding.jpg", span: "" },
  { src: "/images/gallery/girlAndDogRiding.webp", span: "" },
  { src: "/images/gallery/backViewRiding.webp", span: "row-span-2" },
  { src: "/images/gallery/holdingUpHeartRiding.jpg", span: "" },
  { src: "/images/gallery/peopleOnHorse.webp", span: "col-span-2" },
  { src: "/images/gallery/littleGirlsRiding.jpg", span: "" },
  { src: "/images/gallery/cowboyFeel.webp", span: "row-span-2" },
  { src: "/images/gallery/peopleRiding2.webp", span: "" },
  { src: "/images/gallery/wavingWhileRiding.jpg", span: "" },
  { src: "/images/gallery/verticalRiding.webp", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-semibold text-cetina-green sm:text-4xl">
          Gallery
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-flow-dense grid-cols-2 auto-rows-[140px] gap-3 sm:grid-cols-3 sm:auto-rows-[180px] sm:gap-4 lg:grid-cols-4">
        {photos.map((photo, i) => (
          <Reveal
            key={photo.src}
            delay={(i % 4) * 0.08}
            className={`relative overflow-hidden rounded-xl ${photo.span}`}
          >
            <Image
              src={photo.src}
              alt="Horseback riding along the Cetina river"
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
