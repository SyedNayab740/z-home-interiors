"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import Image from "next/image";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { ImageAsset } from "@/types";
import { cn } from "@/lib/utils";

interface LightboxProps {
  images: ImageAsset[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}

// A swipe shorter than this is treated as a tap, not a navigation gesture.
const SWIPE_THRESHOLD_PX = 50;

/**
 * Full-screen image viewer: keyboard navigation (Escape/Arrow keys), previous/next
 * buttons, touch swipe on mobile, click-to-zoom, and a visible caption with an
 * image counter for screen reader and sighted users alike.
 */
export function Lightbox({ images, activeIndex, onClose, onNavigate }: LightboxProps) {
  const isOpen = activeIndex !== null;
  const [isZoomed, setIsZoomed] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useLockBodyScroll(isOpen);

  const goTo = useCallback(
    (direction: 1 | -1) => {
      if (activeIndex === null) return;
      const next = (activeIndex + direction + images.length) % images.length;
      onNavigate(next);
    },
    [activeIndex, images.length, onNavigate],
  );

  // Reset zoom whenever the viewer opens or the active image changes.
  useEffect(() => {
    setIsZoomed(false);
  }, [activeIndex]);

  // Move focus into the dialog on open, and restore it to whatever
  // triggered the lightbox (e.g. a gallery thumbnail) on close.
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      closeButtonRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "ArrowRight") goTo(1);
      if (event.key === "ArrowLeft") goTo(-1);

      // Trap Tab focus within the lightbox while it's open.
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>('button, [tabindex]:not([tabindex="-1"])'),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, goTo]);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;

    if (Math.abs(delta) > SWIPE_THRESHOLD_PX) {
      goTo(delta < 0 ? 1 : -1);
    }
    touchStartX.current = null;
  };

  if (typeof window === "undefined") return null;

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  return createPortal(
    <>
      {isOpen && activeImage && (
        <div
          ref={panelRef}
          className="fixed inset-0 z-[110] flex flex-col items-center justify-center bg-black/95 p-4 md:p-10 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="absolute right-5 top-5 z-10 text-white/80 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <X className="h-7 w-7" />
          </button>

          <button
            type="button"
            onClick={() => setIsZoomed((zoomed) => !zoomed)}
            aria-label={isZoomed ? "Zoom out" : "Zoom in"}
            aria-pressed={isZoomed}
            className="absolute left-5 top-5 z-10 text-white/80 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            {isZoomed ? <ZoomOut className="h-6 w-6" /> : <ZoomIn className="h-6 w-6" />}
          </button>

          {images.length > 1 && (
            <button
              type="button"
              onClick={() => goTo(-1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/80 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:left-6"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
          )}

          <div
            key={activeImage.src}
            className={cn(
              "relative h-[70vh] w-full max-w-5xl",
              isZoomed ? "overflow-auto" : "overflow-hidden",
              "animate-lightbox-image",
            )}
          >
            <button
              type="button"
              onClick={() => setIsZoomed((zoomed) => !zoomed)}
              aria-label={isZoomed ? "Zoom out" : "Zoom in on image"}
              className={cn(
                "relative block h-full w-full",
                isZoomed ? "cursor-zoom-out" : "cursor-zoom-in",
              )}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className={cn(
                  "transition-transform duration-slow",
                  isZoomed ? "scale-[1.8] object-cover" : "object-contain",
                )}
                priority
              />
            </button>
          </div>

          {images.length > 1 && (
            <button
              type="button"
              onClick={() => goTo(1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/80 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:right-6"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          )}

          {/* Caption + counter — announced to screen readers via aria-live */}
          <div
            className="mt-4 max-w-xl text-center"
            aria-live="polite"
          >
            <p className="text-sm text-white/90">{activeImage.alt}</p>
            {images.length > 1 && (
              <p className="mt-1 text-xs uppercase tracking-wide text-white/50">
                {(activeIndex ?? 0) + 1} / {images.length}
              </p>
            )}
          </div>
        </div>
      )}
    </>,
    document.body,
  );
}
