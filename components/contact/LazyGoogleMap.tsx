"use client";

import { useMemo, useState } from "react";
import { ExternalLink, MapPin } from "lucide-react";
import { company } from "@/data/company";

interface LazyGoogleMapProps {
  address: string;
  title?: string;
  className?: string;
}

/**
 * Keeps Google Maps completely out of the initial page request.
 * The iframe is created only after the visitor explicitly asks for it.
 */
export function LazyGoogleMap({ address, title = "Studio location", className = "" }: LazyGoogleMapProps) {
  const [loaded, setLoaded] = useState(false);
  const mapSrc = useMemo(
    () => `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`,
    [address],
  );

  if (loaded) {
    return (
      <iframe
        title={title}
        src={mapSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={`h-full min-h-64 w-full border-0 grayscale invert-[0.92] contrast-[0.9] ${className}`}
      />
    );
  }

  return (
    <div className={`flex min-h-64 flex-col items-center justify-center gap-4 bg-surface/60 p-8 text-center ${className}`}>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
        <MapPin className="h-7 w-7" aria-hidden="true" />
      </span>
      <div>
        <p className="font-display text-lg text-foreground">{company.name}</p>
        <p className="mt-1 max-w-md text-sm text-muted">{address}</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="rounded border border-gold bg-gold px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-gold-light"
        >
          Load Interactive Map
        </button>
        <a
          href={company.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded border border-gold/20 px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-gold hover:text-gold"
        >
          Open in Google Maps
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
