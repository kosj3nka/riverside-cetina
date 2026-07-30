import Image from "next/image";
import giftCard from "@/public/images/gift-card.png";
import { Reveal } from "./Reveal";

export function GiftCard() {
  return (
    <section id="gift-card" className="bg-sand py-14 sm:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="font-heading text-3xl font-semibold text-cetina-green sm:text-4xl lg:text-5xl">
            The perfect gift for birthdays, anniversaries, or simply as an
            unexpected surprise
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <Image
            src={giftCard}
            alt="Riverside Cetina gift card"
            className="h-auto w-full max-w-xl rotate-3 drop-shadow-[8px_10px_12px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:rotate-1 lg:-my-16"
          />
        </Reveal>
      </div>
    </section>
  );
}
