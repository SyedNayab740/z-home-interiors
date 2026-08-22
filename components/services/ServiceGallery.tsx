"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "@/components/ui/Lightbox";
import type { ImageAsset } from "@/types";

interface ServiceGalleryProps {
  images: ImageAsset[];
  title: string;
}

export function ServiceGallery({
  images,
  title,
}: ServiceGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return (
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Our Work</p>
            <h1 className="font-display text-4xl text-foreground">
              {title} Designs
            </h1>
            <p className="mt-4 text-muted">
              Our latest designs will appear here soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section-padding" aria-labelledby="service-gallery-heading">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="eyebrow">Our Work</p>
            <h1
              id="service-gallery-heading"
              className="font-display text-4xl text-foreground md:text-5xl"
            >
              {title} Designs
            </h1>
            <p className="mt-4 text-muted">
              Explore our {title.toLowerCase()} design collection.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/10 text-left"
                aria-label={`View ${title} design ${index + 1}`}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={images}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
