"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Book() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [message, setMessage] = useState("");

  const requestText = encodeURIComponent(
    [
      "Hi! I'd like to book a ride at Riverside Cetina.",
      name && `Name: ${name}`,
      date && `Preferred date: ${date}`,
      groupSize && `Group size: ${groupSize}`,
      message && `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n")
  );

  return (
    <section id="book" className="bg-sand px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-heading text-3xl font-semibold text-cetina-green sm:text-4xl">
            Book your ride
          </h2>

          <dl className="mt-8 space-y-3 font-body text-ink/90">
            <div className="flex flex-col gap-1 border-b border-ink/10 pb-3 sm:flex-row sm:justify-between sm:gap-4">
              <dt className="font-medium">Start</dt>
              <dd>{site.location.start}</dd>
            </div>
            <div className="flex flex-col gap-1 border-b border-ink/10 pb-3 sm:flex-row sm:justify-between sm:gap-4">
              <dt className="font-medium">Distance from Split</dt>
              <dd>{site.location.distanceFromSplit}</dd>
            </div>
            <div className="flex flex-col gap-1 border-b border-ink/10 pb-3 sm:flex-row sm:justify-between sm:gap-4">
              <dt className="font-medium">Ride</dt>
              <dd>
                {site.ride.duration} · {site.ride.price}
              </dd>
            </div>
            <div className="flex flex-col gap-1 border-b border-ink/10 pb-3 sm:flex-row sm:justify-between sm:gap-4">
              <dt className="font-medium">Level</dt>
              <dd>{site.ride.level}</dd>
            </div>
          </dl>

          <div className="mt-8 space-y-3">
            {site.contacts.map((contact) => (
              <a
                key={contact.name}
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full flex-col gap-1 rounded-2xl bg-cetina-green px-6 py-4 font-body font-semibold text-cream transition-colors hover:bg-cetina-green/90 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:rounded-full"
              >
                <span>Book with {contact.name} on WhatsApp</span>
                <span className="text-cream/80">{contact.phone}</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            className="rounded-2xl bg-cream p-8 shadow-sm ring-1 ring-ink/5"
            onSubmit={(e) => e.preventDefault()}
          >
            <p className="font-heading text-xl font-semibold text-ink">
              Or send a request
            </p>
            <p className="mt-1 font-body text-sm text-ink/70">
              We&apos;ll open WhatsApp with your details filled in.
            </p>

            <div className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-ink/15 bg-white px-4 py-3 font-body text-sm outline-none focus:border-river-teal"
              />
              <input
                type="text"
                placeholder="Preferred date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-lg border border-ink/15 bg-white px-4 py-3 font-body text-sm outline-none focus:border-river-teal"
              />
              <input
                type="text"
                placeholder="Group size"
                value={groupSize}
                onChange={(e) => setGroupSize(e.target.value)}
                className="w-full rounded-lg border border-ink/15 bg-white px-4 py-3 font-body text-sm outline-none focus:border-river-teal"
              />
              <textarea
                placeholder="Message (optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-ink/15 bg-white px-4 py-3 font-body text-sm outline-none focus:border-river-teal"
              />
            </div>

            <a
              href={`${site.contacts[0].whatsapp}?text=${requestText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center rounded-full bg-leather px-6 py-4 font-body font-semibold text-cream transition-colors hover:bg-leather/90"
            >
              Send request on WhatsApp
            </a>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
