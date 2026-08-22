import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapSection } from "@/components/contact/MapSection";
import { BusinessHours } from "@/components/contact/BusinessHours";
import { WhyContactUs } from "@/components/contact/WhyContactUs";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata, buildWebPageSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { pageSEO } from "@/data/seo";
import { siteConfig, routes } from "@/config/site";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata(pageSEO.contact);

export default function ContactPage() {
  const pageUrl = pageSEO.contact.canonical ?? `${siteConfig.url}${routes.contact}`;

  const webPageSchema = buildWebPageSchema({
    name: pageSEO.contact.title,
    description: pageSEO.contact.description,
    url: pageUrl,
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Contact", url: pageUrl },
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
        eyebrow="Get In Touch"
        title="Contact Us"
        description={`Ready to start your project? Reach out to ${company.name} and let's talk about your space.`}
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Contact" }]}
    backgroundImage={{
      src: "/images/contact-hero.jpg",
      alt: "Interior designer discussing a home design with a client",
    }}
      />

      <ContactInfo />

      <ContactForm />

      <MapSection />

      <BusinessHours />

      <WhyContactUs />

      <FAQSection />

      <FinalCTA
        heading="Prefer to Talk It Through?"
        description="Call, message us on WhatsApp, or book a consultation directly — whatever's easiest for you."
        showWhatsApp
      />
    </>
  );
}

