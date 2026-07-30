import Image from "next/image";
import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section id="intro" className="mx-auto max-w-4xl px-6 pt-12 pb-24 sm:pt-16 sm:pb-32">
      <Reveal className="flex flex-col items-center text-center">
        <Image
          src="/images/line-rider.jpg"
          alt=""
          aria-hidden
          width={2000}
          height={2000}
          className="mb-8 h-28 w-auto opacity-70 mix-blend-multiply sm:h-32"
        />
        <p className="font-heading text-2xl font-bold leading-relaxed text-cetina-green sm:text-3xl">
          
Breathe in the fresh air, enjoy the peaceful surroundings, and create memories you’ll never forget.
        </p>
        <p className="mt-6 max-w-2xl font-body text-lg text-ink/80">
          Experience nature in a unique way – a gentle horse and the current beside you!</p>
      </Reveal>
    </section>
  );
}
