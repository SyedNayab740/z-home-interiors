
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { whyChooseUsFeatures } from "@/data/whyChooseUs";
import { WhyChooseUsFeature } from "@/types";

interface WhyChooseUsProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Defaults to the global site-wide list; pages can pass their own feature set. */
  features?: WhyChooseUsFeature[];
}

export function WhyChooseUs({
  eyebrow = "Why Choose Us",
  title = "Design Expertise You Can Trust",
  description = "Six commitments that shape every project we take on, from first sketch to final handover.",
  features = whyChooseUsFeatures,
}: WhyChooseUsProps) {
  return (
    <section className="section-padding" aria-labelledby="why-choose-us-heading">
      <Container>
        <SectionHeading
          headingId="why-choose-us-heading"
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
          className="mx-auto"
        />

        <div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <div key={feature.id}>
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
