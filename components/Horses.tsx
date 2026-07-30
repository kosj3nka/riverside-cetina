import Image from "next/image";
import { Reveal } from "./Reveal";

const photos = [
  { src: "/images/horses/familyWithHorse.webp", caption: "Steady enough for the whole family" },
  { src: "/images/horses/skyHorse.webp", caption: "At ease on open ground" },
  { src: "/images/horses/peopleRiding.webp", caption: "Calm company for first-time riders" },
  { src: "/images/horses/wavingWhileRiding2.jpg", caption: "Happy to have visitors" },
];

export function Horses() {
  return (
    <section id="horses" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-semibold text-cetina-green sm:text-4xl">
          Meet the horses
        </h2>
        <p className="mt-4 font-body text-lg text-ink/80">
          Gentle, well-trained, friendly and used to riders of every experience level.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-6">
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 0.1}>
              <figure className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  sizes="(min-width: 1024px) 24vw, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 font-body text-sm text-cream">
                  {photo.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="lg:h-full">
          <figure className="relative mx-auto aspect-[4/3] max-w-2xl overflow-hidden rounded-2xl lg:mx-0 lg:h-full lg:aspect-auto lg:max-w-none">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/videos/foal.mp4" type="video/mp4" />
            </video>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 font-body text-sm text-cream">
              The herd&apos;s newest, curious foal
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
