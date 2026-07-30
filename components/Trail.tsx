import Image from "next/image";
import { Reveal } from "./Reveal";
import { TrailMap } from "./TrailMap";

export function Trail() {
  return (
    <section id="trail" className="bg-cetina-green px-6 py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
            The river trail
          </h2>
          <p className="mt-4 font-body text-lg text-cream/85">
            This is the whole pitch: riding <em>along</em> the Cetina. The
            water is always beside you — crossings, quiet viewpoints, and the
            sound of the current under the horses&apos; steps.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 flex justify-center">
          <TrailMap />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal>
            <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/trail/horsesInRiver.webp"
                alt="Riders crossing the Cetina river on horseback"
                fill
                sizes="(min-width: 640px) 45vw, 90vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/trail/ridingInForest.webp"
                alt="Riding the trail along the riverbank"
                fill
                sizes="(min-width: 640px) 45vw, 90vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
