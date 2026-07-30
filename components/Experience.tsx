import { site } from "@/lib/site";
import { Reveal } from "./Reveal";
import { MapPinIcon, SunIcon } from "./icons";

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
    <section id="experience" className="flow-root bg-sand">
      <Reveal className="relative z-10 -mt-44 -mb-2 sm:-mt-[10vw] sm:-mb-10">
        <h2 className="sr-only">The experience</h2>

        {/* Mobile: cropped/zoomed toward the left so the full-width graphic isn't shrunk illegibly small */}
        <div className="relative h-72 w-full sm:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/experience-title.png"
            alt=""
            aria-hidden
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[0%_70%]"
          />
        </div>

        {/* Desktop: full, uncropped image at its native ratio */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/experience-title.png"
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="hidden h-auto w-full sm:block"
        />
      </Reveal>

      <div className="mx-auto max-w-6xl px-6 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
          <Reveal>
            <div className="flex h-full flex-col justify-center rounded-3xl bg-cetina-green px-8 py-10 text-cream sm:px-12 sm:py-12">
              <p className="font-heading text-5xl font-semibold sm:text-6xl">
                {site.ride.duration}
              </p>
              <p className="mt-3 font-body text-lg text-cream/85">
                along the water · {site.ride.price} per ride
              </p>
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
