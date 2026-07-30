"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { GalleryItem } from "@/lib/gallery";

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
  return (
    <div className="mt-10 columns-1 gap-4 sm:columns-2">
      {items.map((item) => (
        <div key={item.src} className="mb-4 break-inside-avoid overflow-hidden rounded-xl">
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
        </div>
      ))}
    </div>
  );
}
