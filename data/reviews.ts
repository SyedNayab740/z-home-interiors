import { Review, StatItem } from "@/types";

/**
 * No reviews are published yet — showing fabricated testimonials would be
 * dishonest, so this list starts empty. Add real reviews here (from Google,
 * Houzz, WhatsApp, etc.) as they come in; every component below already
 * handles an empty list gracefully, so the Reviews page won't show broken
 * or empty-looking sections until real reviews are added.
 *
 * Example of the shape to add:
 * {
 *   id: "rev-01",
 *   customerName: "Client Name",
 *   role: "Homeowner",
 *   rating: 5,
 *   review: "Their real review text.",
 *   location: "City",
 *   date: "2026-01-15",
 *   featured: true,
 * }
 */
export const reviews: Review[] = [];

export const getFeaturedReviews = () => reviews.filter((review) => review.featured);

export const getAverageRating = () =>
  reviews.length
    ? Number((reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1))
    : 0;

/** Count of reviews at each star rating (5 down to 1) — powers the rating distribution bars. */
export const getRatingDistribution = () => {
  const distribution = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: reviews.filter((review) => review.rating === stars).length,
  }));
  const total = reviews.length;
  return distribution.map((entry) => ({
    ...entry,
    percentage: total > 0 ? Math.round((entry.count / total) * 100) : 0,
  }));
};

/** All reviews that include customer-submitted photos — powers the project gallery section. */
export const getReviewsWithImages = () => reviews.filter((review) => (review.images?.length ?? 0) > 0);

/** Real, computed statistics (no fabricated figures) for the Review Statistics section. */
export const getReviewStats = (): StatItem[] => {
  const totalReviews = reviews.length;
  const fiveStarCount = reviews.filter((review) => review.rating === 5).length;
  const recommendCount = reviews.filter((review) => review.rating >= 4).length;
  const recommendRate = totalReviews > 0 ? Math.round((recommendCount / totalReviews) * 100) : 0;

  return [
    { id: "review-stat-total", label: "Total Reviews", value: totalReviews },
    { id: "review-stat-five-star", label: "5-Star Reviews", value: fiveStarCount },
    { id: "review-stat-recommend", label: "Would Recommend", value: recommendRate, suffix: "%" },
  ];
};
