
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/data/services";

interface ServicesGridProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function ServicesGrid({
  eyebrow = "What We Do",
  title = "Design Services Tailored to You",
  description = "From a single room refresh to a full architectural renovation, every engagement is shaped around your space and your goals.",
}: ServicesGridProps) {
  return (
    <section className="section-padding" aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          headingId="services-heading"
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
          className="mx-auto"
        />

        <div
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <div key={service.id}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
