import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { OurProcess } from "@/components/sections/OurProcess";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata, buildWebPageSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { pageSEO } from "@/data/seo";
import { getProjectImages } from "@/lib/project-images";
import { routes, siteConfig } from "@/config/site";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata(pageSEO.services);

export default function ServicesPage() {
  const projects = getProjectImages();
  const pageUrl = pageSEO.services.canonical ?? `${siteConfig.url}${routes.services}`;

  const webPageSchema = buildWebPageSchema({
    name: pageSEO.services.title,
    description: pageSEO.services.description,
    url: pageUrl,
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: pageUrl },
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
        eyebrow="What We Offer"
        title="Our Interior Design Services"
        description={`From a single custom kitchen to a full architectural renovation, ${company.name} brings the same considered, detail-first approach to every project.`}
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Services" }]}
    backgroundImage={{
      src: "/images/services-hero.jpg",
      alt: "Warm modern Indian home interior"
    }}
      />

      <ServicesGrid
        eyebrow="What We Do"
        title="Nine Ways We Bring Your Space to Life"
        description="Explore our interior design services and find the right solution for your space."
      />

      <WhyChooseUs
        eyebrow="Why Choose Our Services"
        title="Design Expertise You Can Trust"
      />

      <OurProcess />

      <BeforeAfterSection />

      <FeaturedProjects projects={projects} />

      <Testimonials eyebrow="Client Stories" title="What Our Clients Say" limit={3} showViewAllLink />

      <FAQSection />

      <FinalCTA
        heading="Ready to Start Your Project?"
        description="Book a complimentary consultation and let's find the right service for your space."
        showWhatsApp
      />
    </>
  );
}


