
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { reviews, getAverageRating } from "@/data/reviews";

/**
 * Large average-rating display. Rendered as static text rather than the
 * animated Counter component — Counter rounds to the nearest whole number,
 * which would misrepresent a decimal average like 4.8.
 */
export function RatingSummary() {
  const averageRating = getAverageRating();

  if (reviews.length === 0) {
    return (
      <section className="section-padding" aria-labelledby="rating-summary-heading">
        <Container narrow className="text-center">
          <div
          >
            <span className="text-gold font-body text-xs font-medium uppercase tracking-[0.3em]">
              Client Satisfaction
            </span>
            <h2
              id="rating-summary-heading"
              className="mt-4 font-display text-3xl text-foreground md:text-4xl"
            >
              Client Reviews Coming Soon
            </h2>
            <p className="mt-4 text-muted">
              We&rsquo;re just getting started on this site — real client reviews will appear here
              as projects are completed.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="section-padding" aria-labelledby="rating-summary-heading">
      <Container narrow className="text-center">
        <div
        >
          <span className="text-gold font-body text-xs font-medium uppercase tracking-[0.3em]">
            Client Satisfaction
          </span>
          <h2
            id="rating-summary-heading"
            className="mt-4 font-display text-5xl text-foreground md:text-6xl"
          >
            {averageRating}
            <span className="text-3xl text-muted md:text-4xl"> / 5</span>
          </h2>
          <div className="mt-4 flex justify-center gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={
                  index < Math.round(averageRating)
                    ? "h-6 w-6 fill-gold text-gold"
                    : "h-6 w-6 text-muted/30"
                }
              />
            ))}
          </div>
          <p className="mt-4 text-muted">
            Based on {reviews.length} client review{reviews.length === 1 ? "" : "s"}
          </p>
        </div>
      </Container>
    </section>
  );
}
