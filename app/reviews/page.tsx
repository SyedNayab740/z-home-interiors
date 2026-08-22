import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { RatingSummary } from "@/components/reviews/RatingSummary";
import { FeaturedReviews } from "@/components/reviews/FeaturedReviews";
import { AllReviewsGrid } from "@/components/reviews/AllReviewsGrid";
import { RatingDistribution } from "@/components/reviews/RatingDistribution";
import { CustomerProjectGallery } from "@/components/reviews/CustomerProjectGallery";
import { Statistics } from "@/components/sections/Statistics";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pageSEO } from "@/data/seo";
import { buildMetadata, buildWebPageSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { siteConfig, routes } from "@/config/site";
import { company } from "@/data/company";
import { reviews, getReviewStats } from "@/data/reviews";

export const metadata: Metadata = buildMetadata(pageSEO.reviews);

export default function ReviewsPage() {
  const pageUrl = pageSEO.reviews.canonical ?? `${siteConfig.url}${routes.reviews}`;

  const webPageSchema = buildWebPageSchema({
    name: pageSEO.reviews.title,
    description: pageSEO.reviews.description,
    url: pageUrl,
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Reviews", url: pageUrl },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHeader
        eyebrow="Client Reviews"
        title="What Our Clients Say"
        description={
          reviews.length > 0
            ? `Feedback from ${company.name} clients.`
            : "Client reviews will appear here soon."
        }
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Reviews" }]}
        backgroundImage={{
          src: "/images/reviews-hero.jpg",
          alt: "Interior designer shaking hands with a client in a completed Indian home",
        }}
      />

      <RatingSummary />

      <FeaturedReviews />

      <AllReviewsGrid />

      <RatingDistribution />

      <CustomerProjectGallery />

      {reviews.length > 0 && <Statistics items={getReviewStats()} ariaLabel="Review statistics" />}

      <FAQSection />

      <FinalCTA
        heading="Ready to Join Our Happy Clients?"
        description="Book a complimentary consultation and let's start designing your space."
        showWhatsApp
      />
    </>
  );
}

