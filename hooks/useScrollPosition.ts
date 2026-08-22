"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks continuous vertical scroll position, batched to one state update
 * per animation frame. Use this when a component needs the actual scroll
 * value (e.g. a future parallax effect). If a component only needs to know
 * whether the user has scrolled past a point, use `useIsScrolled` instead —
 * it avoids re-rendering on every frame.
 */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const measure = () => {
      setScrollY(window.scrollY);
      frame.current = null;
    };

    const handleScroll = () => {
      if (frame.current !== null) return;
      frame.current = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  return scrollY;
}
