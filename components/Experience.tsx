import { site } from "@/lib/site";
import { Reveal } from "./Reveal";
import { HorseshoeIcon, MapPinIcon, SunIcon, WaveIcon } from "./icons";

const cards = [
  {
    icon: WaveIcon,
    title: "Duration",
    value: site.ride.duration,
    hint: "along the water",
  },
  {
    icon: HorseshoeIcon,
    title: "Price",
    value: site.ride.price,
    hint: "per ride",
  },
  {
    icon: SunIcon,
    title: "Level",
    value: "Beginner-friendly",
    hint: "no experience needed",
  },
  {
    icon: MapPinIcon,
    title: "Start",
    value: site.location.start,
    hint: site.location.distanceFromSplit,
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="bg-sand px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-cetina-green sm:text-4xl">
            The experience
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1}>
              <div className="flex h-full flex-col items-center rounded-2xl bg-cream px-6 py-10 text-center shadow-sm ring-1 ring-ink/5">
                <card.icon className="h-10 w-10 text-river-teal" />
                <p className="mt-5 font-body text-sm font-semibold uppercase tracking-wide text-leather">
                  {card.title}
                </p>
                <p className="mt-2 font-heading text-2xl font-semibold text-ink">
                  {card.value}
                </p>
                <p className="mt-2 font-body text-sm text-ink/70">
                  {card.hint}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
