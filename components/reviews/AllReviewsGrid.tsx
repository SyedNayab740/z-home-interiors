
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { reviews } from "@/data/reviews";

export function AllReviewsGrid() {
  if (reviews.length === 0) return null;

  return (
    <section className="section-padding section-surface" aria-labelledby="all-reviews-heading">
      <Container>
        <SectionHeading
          headingId="all-reviews-heading"
          eyebrow="Every Review"
          title="What Every Client Has Said"
          align="center"
          className="mx-auto"
        />

        <div
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reviews.map((review) => (
            <div key={review.id}>
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
