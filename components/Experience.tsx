import { site } from "@/lib/site";
import { Reveal } from "./Reveal";
import { HorseshoeIcon, MapPinIcon, SunIcon, WaveIcon } from "./icons";

const details = [
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
    <section id="experience" className="bg-sand px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-cetina-green sm:text-4xl">
            The experience
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-cetina-green px-8 py-10 text-cream sm:px-12 sm:py-12">
              <div className="flex items-center gap-3">
                <WaveIcon className="h-8 w-8 text-cream/80" />
                <HorseshoeIcon className="h-8 w-8 text-cream/80" />
              </div>
              <div className="mt-8">
                <p className="font-heading text-5xl font-semibold sm:text-6xl">
                  {site.ride.duration}
                </p>
                <p className="mt-3 font-body text-lg text-cream/85">
                  along the water · {site.ride.price} per ride
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col divide-y divide-ink/10 rounded-3xl bg-cream px-8 py-2 sm:px-10">
            {details.map((detail) => (
              <div key={detail.title} className="flex items-start gap-4 py-6">
                <detail.icon className="mt-1 h-7 w-7 shrink-0 text-river-teal" />
                <div>
                  <p className="font-body text-sm font-semibold uppercase tracking-wide text-leather">
                    {detail.title}
                  </p>
                  <p className="mt-1 font-heading text-xl font-semibold text-ink">
                    {detail.value}
                  </p>
                  <p className="mt-1 font-body text-sm text-ink/70">
                    {detail.hint}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
