"use client";

import { motion } from "framer-motion";

const stops = [
  { x: 40, y: 210, label: "Start — Glavice" },
  { x: 160, y: 120, label: "River crossing" },
  { x: 290, y: 160, label: "Viewpoint" },
  { x: 400, y: 60, label: "Rest stop" },
];

export function TrailMap() {
  return (
    <svg
      viewBox="0 0 440 260"
      className="h-auto w-full max-w-2xl"
      aria-hidden
    >
      <motion.path
        d="M40 210 C 90 210, 100 130, 160 120 S 250 210, 290 160 S 360 60, 400 60"
        fill="none"
        stroke="var(--color-river-teal)"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
      {stops.map((stop, i) => (
        <motion.g
          key={stop.label}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.35 }}
        >
          <circle
            cx={stop.x}
            cy={stop.y}
            r="7"
            fill="var(--color-leather)"
            stroke="var(--color-cream)"
            strokeWidth="2"
          />
          <text
            x={stop.x}
            y={stop.y - 16}
            textAnchor="middle"
            className="font-body text-[11px] fill-ink"
          >
            {stop.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}
