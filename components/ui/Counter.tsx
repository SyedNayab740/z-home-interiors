"use client";

import { useEffect, useRef } from "react";

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

/** Lightweight number counter using IntersectionObserver + requestAnimationFrame. */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  duration = 1.6,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const update = (latest: number) => {
      element.textContent = `${prefix}${Math.round(latest).toLocaleString("en-US")}${suffix}`;
    };

    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const durationMs = Math.max(200, duration * 1000);

      const frame = (now: number) => {
        const progress = Math.min(1, (now - start) / durationMs);
        const eased = 1 - Math.pow(1 - progress, 3);
        update(value * eased);
        if (progress < 1) requestAnimationFrame(frame);
      };

      requestAnimationFrame(frame);
    };

    if (!("IntersectionObserver" in window)) {
      run();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          run();
          observer.disconnect();
        }
      },
      { rootMargin: "-80px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [duration, prefix, suffix, value]);

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}0{suffix}
    </span>
  );
}
