"use client";

import { ArrowUp } from "lucide-react";
import { useIsScrolled } from "@/hooks/useIsScrolled";

/** Fixed button that appears after scrolling and returns the user to the top. */
export function BackToTop() {
  const isScrolled = useIsScrolled(600);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!isScrolled}
      tabIndex={isScrolled ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-surface/90 text-gold backdrop-blur-glass transition-all duration-200 hover:bg-gold hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
        isScrolled ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
