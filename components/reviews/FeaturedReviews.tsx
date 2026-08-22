
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { getFeaturedReviews } from "@/data/reviews";

export function FeaturedReviews() {
  const featuredReviews = getFeaturedReviews();

  if (featuredReviews.length === 0) return null;

  return (
    <section className="section-padding" aria-labelledby="featured-reviews-heading">
      <Container>
        <SectionHeading
          headingId="featured-reviews-heading"
          eyebrow="Standout Stories"
          title="Featured Reviews"
          align="center"
          className="mx-auto"
        />

        <div
          className="mt-14 grid gap-8 md:grid-cols-3"
        >
          {featuredReviews.map((review) => (
            <div key={review.id}>
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
