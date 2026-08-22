"use client";

import { useId, useState } from "react";
import { ImageWrapper } from "@/components/ui/ImageWrapper";
import { ImageAsset } from "@/types";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  before: ImageAsset;
  after: ImageAsset;
  className?: string;
}

/**
 * Interactive before/after comparison slider.
 * Built on a native <input type="range"> for guaranteed keyboard, screen
 * reader, and touch-drag support — the visible handle is purely decorative
 * and mirrors the input's value.
 */
export function BeforeAfterSlider({ before, after, className }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const sliderId = useId();

  return (
    <div className={cn("relative aspect-[16/10] w-full select-none overflow-hidden rounded-lg", className)}>
      {/* After image — full frame, base layer */}
      <ImageWrapper
        image={after}
        fill
        sizes="(max-width: 768px) 100vw, 80vw"
        className="object-cover"
      />

      {/* Before image — clipped to the current slider position */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <ImageWrapper
          image={before}
          fill
          sizes="(max-width: 768px) 100vw, 80vw"
          className="object-cover"
        />
      </div>

      {/* Divider line + handle, purely visual */}
      <div
        className="pointer-events-none absolute inset-y-0 flex w-0 -translate-x-1/2 items-center justify-center"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      >
        <span className="h-full w-[2px] bg-gold" />
        <span className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-gold text-background shadow-gold">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-4 top-4 rounded-pill bg-background/70 px-3 py-1 text-xs uppercase tracking-wide text-foreground backdrop-blur-glass">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-pill bg-background/70 px-3 py-1 text-xs uppercase tracking-wide text-foreground backdrop-blur-glass">
        After
      </span>

      <label htmlFor={sliderId} className="sr-only">
        Drag to compare before and after
      </label>
      <input
        id={sliderId}
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
        aria-label="Comparison slider position"
        aria-valuetext={`${position}% before, ${100 - position}% after`}
      />
    </div>
  );
}
