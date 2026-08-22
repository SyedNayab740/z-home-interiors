
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { whyContactUsFeatures } from "@/data/contact";

export function WhyContactUs() {
  return (
    <section className="section-padding" aria-labelledby="why-contact-us-heading">
      <Container>
        <SectionHeading
          headingId="why-contact-us-heading"
          eyebrow="Why Reach Out"
          title="What to Expect When You Contact Us"
          align="center"
          className="mx-auto"
        />

        <div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyContactUsFeatures.map((feature) => (
            <div key={feature.id}>
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
