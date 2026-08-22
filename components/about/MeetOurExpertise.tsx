
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { expertisePillars } from "@/data/about";

/**
 * Introduces the team's design philosophy and craft rather than individual
 * profiles — no team-member data exists yet. Once headshots/bios are ready,
 * add a data/team.ts file and swap the pillar grid below for real profiles.
 */
export function MeetOurExpertise() {
  return (
    <section className="section-padding" aria-labelledby="expertise-heading">
      <Container>
        <SectionHeading
          headingId="expertise-heading"
          eyebrow="Our Expertise"
          title="Designers Who Sweat the Details"
          description="A team shaped by craftsmanship, not shortcuts — every project reflects the same standard we hold for our own homes."
          align="center"
          className="mx-auto"
        />

        <div
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {expertisePillars.map((pillar) => (
            <div key={pillar.id}>
              <FeatureCard feature={pillar} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
