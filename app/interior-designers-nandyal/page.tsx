import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container } from "@/components/ui/Container";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import { getProjectImages } from "@/lib/project-images";
import { faqItems } from "@/data/faq";
import { company } from "@/data/company";
import { routes, siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Interior Designers in Nandyal | Z Home Interiors",
  description:
    "Z Home Interiors is an interior design studio in Nandyal, Andhra Pradesh, offering home, villa, apartment and commercial interiors, from design to execution.",
  keywords: [
    "best interior designers in Nandyal",
    "interior designers in Nandyal",
    "interior design company in Nandyal",
    "home interiors Nandyal",
    "modular kitchen designers Nandyal",
    "bedroom interior designers Nandyal",
    "living room interior designers Nandyal",
    "office interior designers Nandyal",
    "Nandyal interior design studio",
  ],
  ogImage: "/images/hero.jpg",
  canonical: `${siteConfig.url}${routes.nandyal}`,
});

export default function NandyalInteriorDesignPage() {
  const pageUrl = `${siteConfig.url}${routes.nandyal}`;
  const projects = getProjectImages();

  const webPageSchema = buildWebPageSchema({
    name: "Interior Designers in Nandyal | Z Home Interiors",
    description:
      "Interior design services in Nandyal by Z Home Interiors, including home, villa, apartment and commercial interiors, modular kitchens, bedrooms, wardrobes and renovations.",
    url: pageUrl,
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    {
      name: "Interior Designers in Nandyal",
      url: pageUrl,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <PageHeader
        eyebrow="Z Home Interiors - Nandyal"
        title="Interior Designers in Nandyal"
        description="Z Home Interiors is a Nandyal-based interior design studio creating beautiful, practical spaces for homes, villas, apartments and commercial properties from concept to final handover."
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Interior Designers in Nandyal" },
        ]}
        backgroundImage={{
          src: "/images/hero.jpg",
          alt: "Interior design by Z Home Interiors in Nandyal",
        }}
        actions={
          <Button asChild size="lg">
            <Link href={routes.contact}>
              Book a Free Consultation
            </Link>
          </Button>
        }
      />

      <section className="section-padding">
        <Container narrow>
          <div className="mx-auto max-w-3xl">
            <span className="text-gold font-body text-xs font-medium uppercase tracking-[0.3em]">
              Interior Design in Nandyal
            </span>

            <h2 className="mt-4 font-display text-3xl text-foreground md:text-5xl">
              Home &amp; Commercial Interior Design in Nandyal
            </h2>

            <div className="mt-6 space-y-5 text-muted">
              <p>
                {company.name} provides interior design solutions for
                homeowners, apartments, villas, offices and commercial spaces
                in Nandyal, Andhra Pradesh.
              </p>

              <p>
                We combine space planning, design detailing, material
                selection and execution to create interiors that are practical,
                comfortable and visually refined.
              </p>

              <p>
                Our services include modular kitchens, wardrobes, bedrooms,
                living rooms, false ceilings, TV units, office interiors,
                full-home renovation and 3D interior visualization.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ServicesGrid
        eyebrow="Z Home Interiors - Nandyal"
        title="Home & Commercial Interior Services"
        description="From modular kitchens and wardrobes to complete home interiors and commercial spaces, our services are available across Nandyal and nearby areas."
      />

      <FeaturedProjects projects={projects} />

      <Testimonials
        eyebrow="Client Feedback"
        title="What Our Clients Say"
        limit={3}
        showViewAllLink
      />

      <FAQSection
        eyebrow="Nandyal Interior Design FAQs"
        title="Frequently Asked Questions"
        items={faqItems}
      />

      <FinalCTA
        heading="Planning an Interior Project in Nandyal?"
        description="Talk to Z Home Interiors about your home, villa, apartment, office or commercial interior project."
        showWhatsApp
      />
    </>
  );
}

