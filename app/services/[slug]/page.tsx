import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { ServiceDescription } from "@/components/services/ServiceDescription";
import { FeatureChecklist } from "@/components/sections/FeatureChecklist";
import { OurProcess } from "@/components/sections/OurProcess";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  buildMetadata,
  buildWebPageSchema,
  buildBreadcrumbSchema,
  buildServiceSchema,
} from "@/lib/seo";
import { getAllServiceSlugs, getServiceBySlug } from "@/data/services";
import { siteConfig, routes } from "@/config/site";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return buildMetadata({
      title: `Service Not Found | ${siteConfig.name}`,
      description: "The service you're looking for could not be found.",
    });
  }

  return buildMetadata(service.seo);
}

export default async function ServiceDetailPage({
  params,
}: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const serviceUrl =
    service.seo.canonical ??
    `${siteConfig.url}${routes.services}/${service.slug}`;

  const webPageSchema = buildWebPageSchema({
    name: service.seo.title,
    description: service.seo.description,
    url: serviceUrl,
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}${routes.services}` },
    { name: service.title, url: serviceUrl },
  ]);

  const serviceSchema = buildServiceSchema({
    name: service.title,
    description: service.shortDescription,
    url: serviceUrl,
    image: service.heroImage.src,
  });

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <PageHeader
        eyebrow="Z Home Interiors · Nandyal"
        title={service.title}
        description={service.shortDescription}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Services", href: routes.services },
          { label: service.title },
        ]}
        backgroundImage={service.heroImage}
        actions={
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={routes.contact}>Book Consultation</Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href={`${routes.services}/${service.slug}/gallery`}>
                View Designs
              </Link>
            </Button>
          </div>
        }
      />

      <ServiceDescription
        lede={service.shortDescription}
        paragraphs={service.fullDescription}
      />

      <FeatureChecklist
        headingId="key-features-heading"
        eyebrow="What's Included"
        title="Key Features"
        items={service.features}
        variant="cards"
      />

      <FeatureChecklist
        headingId="benefits-heading"
        eyebrow="The Payoff"
        title="Benefits"
        items={service.benefits}
        variant="grid"
        surfaceClassName="section-surface"
      />

      <OurProcess
        eyebrow="How We Work"
        title={`Our ${service.title} Process`}
        description="A clear, considered path from first conversation to final handover."
        entries={service.process}
      />

      <Testimonials
        eyebrow="Client Stories"
        title="What Our Clients Say"
        limit={3}
        showViewAllLink
      />

      <FAQSection
        eyebrow={`${service.title} Questions`}
        title={`${service.title} FAQ`}
        items={service.faq}
      />

      <FinalCTA
        heading={service.cta.heading}
        description={service.cta.description}
        showWhatsApp
      />
    </>
  );
}
