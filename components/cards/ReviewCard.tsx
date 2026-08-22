import { memo } from "react";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { ImageWrapper } from "@/components/ui/ImageWrapper";
import { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
}

function ReviewCardComponent({ review }: ReviewCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between">
      <div>
        <div className="flex gap-1" aria-label={`Rated ${review.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={
                index < review.rating
                  ? "h-4 w-4 fill-gold text-gold"
                  : "h-4 w-4 text-muted/30"
              }
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="mt-4 text-foreground/90">&ldquo;{review.review}&rdquo;</p>
      </div>

      <div className="mt-6 flex items-center gap-3">
        {review.avatar ? (
          <ImageWrapper
            image={review.avatar}
            width={44}
            height={44}
            containerClassName="h-11 w-11 shrink-0 rounded-full"
            className="rounded-full object-cover"
          />
        ) : (
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/10 font-display text-gold"
            aria-hidden="true"
          >
            {review.customerName.charAt(0)}
          </span>
        )}
        <div>
          <p className="font-medium text-foreground">{review.customerName}</p>
          <p className="text-sm text-muted">
            {review.role}
            {review.location ? ` · ${review.location}` : ""}
          </p>
        </div>
      </div>
    </Card>
  );
}

export const ReviewCard = memo(ReviewCardComponent);
