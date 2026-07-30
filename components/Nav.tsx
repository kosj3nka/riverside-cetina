"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-cream/90 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#top" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={76}
            height={76}
            className="rounded-full"
            priority
          />
          <span
            className={`font-heading text-lg font-semibold tracking-tight ${
              scrolled ? "text-cetina-green" : "text-cream"
            }`}
          >
            {site.name}
          </span>
        </Link>

        <ul
          className={`hidden items-center gap-8 font-body text-sm font-medium md:flex ${
            scrolled ? "text-ink" : "text-cream"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-opacity hover:opacity-70">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={site.contacts[0].whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            scrolled
              ? "bg-leather text-cream hover:bg-leather/90"
              : "border border-cream/50 bg-cream/10 text-cream backdrop-blur-sm hover:bg-cream/20"
          }`}
        >
          Book
        </a>
      </nav>
    </header>
  );
}
