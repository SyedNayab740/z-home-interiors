import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { CompanyStory } from "@/components/about/CompanyStory";
import { MissionVisionValues } from "@/components/about/MissionVisionValues";
import { AboutWhyChooseUs } from "@/components/about/AboutWhyChooseUs";
import { MeetOurExpertise } from "@/components/about/MeetOurExpertise";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata, buildWebPageSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { pageSEO } from "@/data/seo";
import { routes, siteConfig } from "@/config/site";
import { company } from "@/data/company";
export const metadata: Metadata = buildMetadata(pageSEO.about);

export default function AboutPage() {
  const pageUrl = pageSEO.about.canonical ?? `${siteConfig.url}${routes.about}`;

  const webPageSchema = buildWebPageSchema({
    name: pageSEO.about.title,
    description: pageSEO.about.description,
    url: pageUrl,
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "About", url: pageUrl },
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
    
    backgroundImage={{ src: "/images/about-hero.jpg", alt: "Warm modern Indian home interior" }}
    eyebrow="Our Studio"
        title={`About ${company.name}`}
        description="Designing timeless, livable interiors for homes and commercial spaces, with a considered, detail-first approach to every project."
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "About" }]}
      />

      <CompanyStory />
      <MissionVisionValues />
      <AboutWhyChooseUs />
      <MeetOurExpertise />
      <Testimonials
        eyebrow="Client Stories"
        title="What Our Clients Say"
        limit={3}
        showViewAllLink
      />
      <FinalCTA
        heading="Let's Design Your Dream Space"
        description="Book a complimentary consultation and let's discuss what's possible for your home or business."
      />
    </>
  );
}




