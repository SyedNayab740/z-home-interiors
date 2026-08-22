import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { FAQItem } from "@/types";
import { faqItems } from "@/data/faq";
import { buildFAQSchema } from "@/lib/seo";

interface FAQSectionProps {
  eyebrow?: string;
  title?: string;
  /** Defaults to the global site-wide FAQ; pass a service's own `faq` to override. */
  items?: FAQItem[];
}

export function FAQSection({
  eyebrow = "Questions",
  title = "Frequently Asked Questions",
  items = faqItems,
}: FAQSectionProps) {
  if (items.length === 0) return null;

  const faqSchema = buildFAQSchema(items);

  return (
    <section className="section-padding section-surface" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Container narrow>
        <SectionHeading
          headingId="faq-heading"
          eyebrow={eyebrow}
          title={title}
          align="center"
          className="mx-auto"
        />

        <div className="mt-12">
          <Accordion items={items} />
        </div>
      </Container>
    </section>
  );
}
