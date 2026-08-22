"use client";

import { useState } from "react";
import { Maximize2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { ImageWrapper } from "@/components/ui/ImageWrapper";
import dynamic from "next/dynamic";

// Lazy-loaded: never needed during initial render (activeIndex starts null),
// only once the user actually opens an image.
const Lightbox = dynamic(() => import("@/components/ui/Lightbox").then((mod) => mod.Lightbox), {
  ssr: false,
});
import { getReviewsWithImages } from "@/data/reviews";
import { ImageAsset } from "@/types";

/** Only renders when at least one review includes customer-submitted photos. */
export function CustomerProjectGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reviewsWithImages = getReviewsWithImages();

  const images: ImageAsset[] = reviewsWithImages.flatMap((review) => review.images ?? []);

  if (images.length === 0) return null;

  return (
    <section className="section-padding" aria-labelledby="customer-gallery-heading">
      <Container>
        <SectionHeading
          headingId="customer-gallery-heading"
          eyebrow="From Our Clients"
          title="Customer Project Gallery"
          description="Real photos shared by clients from their completed projects."
          align="center"
          className="mx-auto"
        />

        <div
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View full-size image: ${image.alt}`}
              className="group relative block aspect-square w-full overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <ImageWrapper
                image={image}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-slow group-hover:scale-105"
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/40"
              >
                <Maximize2 className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
            </button>
          ))}
        </div>
      </Container>

      <Lightbox
        images={images}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
