
import Link from "next/link";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { reviews, getAverageRating } from "@/data/reviews";
import { routes } from "@/config/site";

interface TestimonialsProps {
  eyebrow?: string;
  title?: string;
  /** Cap the number of reviews shown — omit to show every review. */
  limit?: number;
  /** Show a "Read All Reviews" link beneath the average-rating line. */
  showViewAllLink?: boolean;
}

export function Testimonials({
  eyebrow = "Client Stories",
  title = "What Our Clients Say",
  limit,
  showViewAllLink = false,
}: TestimonialsProps) {
  const averageRating = getAverageRating();
  const displayReviews = limit ? reviews.slice(0, limit) : reviews;

  if (displayReviews.length === 0) return null;

  return (
    <section className="section-padding" aria-labelledby="testimonials-heading">
      <Container>
        <SectionHeading
          headingId="testimonials-heading"
          eyebrow={eyebrow}
          title={title}
          align="center"
          className="mx-auto"
        />

        <div className="mt-4 flex flex-col items-center justify-center gap-2 text-sm text-muted sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={
                    index < Math.round(averageRating)
                      ? "h-4 w-4 fill-gold text-gold"
                      : "h-4 w-4 text-muted/30"
                  }
                />
              ))}
            </div>
            <span>
              {averageRating} average from {reviews.length}+ Google Reviews
            </span>
          </div>
          {showViewAllLink && (
            <Link
              href={routes.reviews}
              className="text-gold underline underline-offset-4 transition-colors hover:text-gold-light"
            >
              Read All Reviews
            </Link>
          )}
        </div>

        <div
          className="mt-14 grid gap-8 md:grid-cols-3"
        >
          {displayReviews.map((review) => (
            <div key={review.id}>
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {showViewAllLink && (
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href={routes.reviews}>View All Reviews</Link>
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
