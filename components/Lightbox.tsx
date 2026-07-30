"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { GalleryItem } from "@/lib/gallery";
import { CloseIcon } from "./icons";

function GridVideo({ item }: { item: Extract<GalleryItem, { kind: "video" }> }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      style={{ aspectRatio: `${item.width} / ${item.height}` }}
      className="h-auto w-full object-cover"
    >
      <source src={item.src} type="video/mp4" />
    </video>
  );
}

export function Lightbox({ items }: { items: GalleryItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const close = useCallback(() => setOpenIndex(null), []);

  useEffect(() => {
    if (openIndex === null) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, close]);

  const current = openIndex === null ? null : items[openIndex];

  return (
    <>
      <div className="mt-10 columns-1 gap-4 sm:columns-2">
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="mb-4 block w-full appearance-none break-inside-avoid overflow-hidden rounded-xl border-0 bg-transparent p-0 text-left"
          >
            {item.kind === "photo" ? (
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(min-width: 640px) 50vw, 100vw"
                className="h-auto w-full"
              />
            ) : (
              <GridVideo item={item} />
            )}
          </button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-6 transition-opacity duration-200"
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Close"
            className="absolute right-6 top-6 text-cream transition-colors hover:text-cream/70"
          >
            <CloseIcon className="h-8 w-8" />
          </button>

          <div onClick={(e) => e.stopPropagation()}>
            {current.kind === "photo" ? (
              <Image
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="90vw"
                className="max-h-[85vh] w-auto max-w-[90vw] object-contain"
              />
            ) : (
              <video
                key={current.src}
                controls
                muted
                autoPlay
                loop
                playsInline
                style={{ aspectRatio: `${current.width} / ${current.height}` }}
                className="max-h-[85vh] max-w-[90vw] object-contain"
              >
                <source src={current.src} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </>
  );
}
