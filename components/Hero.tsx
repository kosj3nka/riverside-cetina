"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/40" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center text-cream">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="font-heading text-4xl font-semibold leading-tight text-balance drop-shadow-sm sm:text-6xl"
        >
          Horseback riding along Cetina River
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.15 }}
          className="mt-4 mx-4 max-w-xl text-lg text-cream/90 sm:mx-0 sm:text-xl"
        >
          Beginner-friendly horseback tour rides from Sinj - 35 km from
          Split.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
          whileTap={{ scale: 0.98 }}
          href="#book"
          className="mt-8 rounded-full bg-leather px-8 py-4 font-body text-base font-semibold text-cream shadow-lg transition-colors hover:bg-leather/90"
        >
          Book Now
        </motion.a>
      </div>

      <motion.a
        href="#intro"
        aria-label="Scroll down"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.a>
    </section>
  );
}
