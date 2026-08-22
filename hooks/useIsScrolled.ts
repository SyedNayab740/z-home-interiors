"use client";

import { useEffect, useState } from "react";

/**
 * Returns whether the page has been scrolled past `threshold`, re-rendering
 * only when that boolean actually flips — not on every scroll pixel.
 * Preferred over `useScrollPosition` for UI like Navbar/BackToTop that only
 * needs the crossing point, not the continuous value.
 */
export function useIsScrolled(threshold = 40): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const evaluate = () => {
      setIsScrolled((prev) => {
        const next = window.scrollY > threshold;
        return next === prev ? prev : next;
      });
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(evaluate);
    };

    evaluate();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}
