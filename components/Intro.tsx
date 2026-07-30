import Image from "next/image";
import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section id="intro" className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
      <Reveal className="flex flex-col items-center text-center">
        <Image
          src="/images/line-rider.jpg"
          alt=""
          aria-hidden
          width={96}
          height={64}
          className="mb-8 h-16 w-auto opacity-70 mix-blend-multiply"
        />
        <p className="font-heading text-2xl leading-relaxed text-cetina-green sm:text-3xl">
          Beginner-friendly horseback riding along the Cetina river in Sinj —
          starting from Glavice, just 35 km from Split.
        </p>
        <p className="mt-6 max-w-2xl font-body text-lg text-ink/80">
          No experience needed. Just you, a gentle horse, and the sound of
          the current beside you.
        </p>
      </Reveal>
    </section>
  );
}
