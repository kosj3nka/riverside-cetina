import Image from "next/image";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink px-6 py-12 text-cream/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={36}
            height={36}
            className="rounded-full"
          />
          <div>
            <p className="font-heading text-base font-semibold text-cream">
              {site.name}
            </p>
            <p className="font-body text-sm">
              {site.location.start} · {site.location.distanceFromSplit}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1 font-body text-sm sm:items-end">
          {site.contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream"
            >
              {contact.name} · {contact.phone}
            </a>
          ))}
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream"
          >
            {site.instagram.handle}
          </a>
        </div>
      </div>

      <p className="mt-8 text-center font-body text-xs text-cream/50">
        © {year} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
