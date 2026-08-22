import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { OurProcess } from "@/components/sections/OurProcess";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ContactPreview } from "@/components/home/ContactPreview";
import { buildMetadata, buildWebPageSchema } from "@/lib/seo";
import { pageSEO } from "@/data/seo";
import { getProjectImages } from "@/lib/project-images";

export const metadata: Metadata = buildMetadata(pageSEO.home);

export default function HomePage() {
  const projects = getProjectImages();
  const webPageSchema = buildWebPageSchema({
    name: pageSEO.home.title,
    description: pageSEO.home.description,
    url: pageSEO.home.canonical ?? "",
  });

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <Hero />
      <AboutPreview />
      <ServicesGrid />
      <FeaturedProjects projects={projects} />
      <BeforeAfterSection />
      <WhyChooseUs />
      <OurProcess />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
      <ContactPreview />
    </>
  );
}
