import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "card-surface p-6 transition-shadow duration-base hover:shadow-gold",
        className,
      )}
      {...props}
    />
  );
}
