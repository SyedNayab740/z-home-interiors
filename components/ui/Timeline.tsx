
import { TimelineEntry } from "@/types";

interface TimelineProps {
  entries: TimelineEntry[];
}

/** Vertical timeline — appropriate only for genuinely sequential content (company history, a process). */
export function Timeline({ entries }: TimelineProps) {
  return (
    <ol
      className="relative border-l border-gold/20 pl-8"
    >
      {entries.map((entry) => (
        <li key={entry.id} className="relative pb-12 last:pb-0">
          <span
            className="absolute -left-[calc(2rem+5px)] top-1 h-[10px] w-[10px] rounded-full bg-gold"
            aria-hidden="true"
          />
          <span className="text-gold font-body text-sm font-medium uppercase tracking-[0.2em]">
            {entry.label}
          </span>
          <h3 className="mt-2 font-display text-xl text-foreground md:text-2xl">
            {entry.title}
          </h3>
          <p className="mt-2 max-w-xl text-muted">{entry.description}</p>
        </li>
      ))}
    </ol>
  );
}
