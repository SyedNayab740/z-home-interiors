/** Lightweight scroll progress indicator using CSS scroll-driven animation. */
export function ScrollProgress() {
  return (
    <div
      className="scroll-progress fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gold"
      role="progressbar"
      aria-label="Page scroll progress"
    />
  );
}
