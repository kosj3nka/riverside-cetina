import Link from "next/link";
import { allGalleryItems } from "@/lib/gallery";
import { Lightbox } from "@/components/Lightbox";

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <Link
        href="/#gallery"
        className="font-body text-sm font-semibold text-cetina-green transition-colors hover:text-cetina-green/80"
      >
        ← Back
      </Link>

      <h1 className="mt-4 font-heading text-3xl font-semibold text-cetina-green sm:text-4xl">
        All Photos
      </h1>

      <Lightbox items={allGalleryItems} />
    </main>
  );
}
