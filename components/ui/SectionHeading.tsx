import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Applied to the h2 so a parent <section aria-labelledby> can reference it. */
  headingId?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  headingId,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
          <span className="h-px w-8 bg-gold/50" aria-hidden="true" />
          <span className="text-gold font-body text-xs font-medium uppercase tracking-[0.3em]">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-gold/50" aria-hidden="true" />
        </div>
      )}
      <h2
        id={headingId}
        className="mt-3 font-display text-3xl text-foreground md:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
