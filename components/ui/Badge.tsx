import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill border border-gold/30 bg-gold/5",
        "px-3 py-1 text-xs font-medium uppercase tracking-wide text-gold",
        className,
      )}
      {...props}
    />
  );
}
