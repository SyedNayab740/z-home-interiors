
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { aboutWhyChooseUsFeatures } from "@/data/about";

export function AboutWhyChooseUs() {
  return (
    <section className="section-padding" aria-labelledby="about-why-choose-us-heading">
      <Container>
        <SectionHeading
          headingId="about-why-choose-us-heading"
          eyebrow="Why Z Home Interiors"
          title="What Sets Us Apart"
          description="Six commitments behind every project we take on, regardless of size or scope."
          align="center"
          className="mx-auto"
        />

        <div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {aboutWhyChooseUsFeatures.map((feature) => (
            <div key={feature.id}>
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
