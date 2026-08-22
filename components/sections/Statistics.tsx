
import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { StatItem } from "@/types";

interface StatisticsProps {
  items: StatItem[];
  ariaLabel?: string;
}

/** Renders a row of real, computed statistics. Pass an empty array to render nothing. */
export function Statistics({ items, ariaLabel = "Our track record in numbers" }: StatisticsProps) {
  if (items.length === 0) return null;

  return (
    <section
      className="section-padding border-y border-gold/10 section-surface"
      aria-label={ariaLabel}
    >
      <Container>
        <dl
          className="grid grid-cols-2 gap-10 text-center lg:grid-cols-4"
        >
          {items.map((stat) => (
            <div key={stat.id}>
              <dd className="font-display text-4xl text-gold md:text-5xl">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </dd>
              <dt className="mt-3 text-sm uppercase tracking-wide text-muted">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
