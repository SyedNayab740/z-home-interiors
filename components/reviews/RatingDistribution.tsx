
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { getRatingDistribution } from "@/data/reviews";

export function RatingDistribution() {
  const distribution = getRatingDistribution();
  const hasReviews = distribution.some((entry) => entry.count > 0);

  if (!hasReviews) return null;

  return (
    <section className="section-padding section-surface" aria-labelledby="rating-distribution-heading">
      <Container narrow>
        <SectionHeading
          headingId="rating-distribution-heading"
          eyebrow="The Breakdown"
          title="Rating Distribution"
          align="center"
          className="mx-auto"
        />

        <div
          className="mt-12 space-y-4"
        >
          {distribution.map(({ stars, count, percentage }) => (
            <div key={stars} className="flex items-center gap-4">
              <span className="flex w-16 shrink-0 items-center gap-1 text-sm text-muted">
                {stars} <Star className="h-3.5 w-3.5 fill-gold text-gold" aria-hidden="true" />
              </span>
              <div
                className="h-2.5 flex-1 overflow-hidden rounded-pill bg-gradient-to-b from-background to-surfaceHover"
                role="img"
                aria-label={`${stars} star: ${count} review${count === 1 ? "" : "s"}, ${percentage}%`}
              >
                <div
                  className="h-full rounded-pill bg-gold"
                />
              </div>
              <span className="w-10 shrink-0 text-right text-sm text-muted">{count}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
