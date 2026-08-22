
import { Container } from "@/components/ui/Container";

interface ServiceDescriptionProps {
  lede: string;
  paragraphs: string[];
}

/** Centered, generously-spaced prose block for a service's full description. */
export function ServiceDescription({ lede, paragraphs }: ServiceDescriptionProps) {
  return (
    <section className="section-padding" aria-labelledby="service-description-heading">
      <Container narrow>
        <div
        >
          <span className="text-gold font-body text-xs font-medium uppercase tracking-[0.3em]">
            Overview
          </span>
          <h2 id="service-description-heading" className="sr-only">
            About This Service
          </h2>
          <p className="mt-4 font-display text-2xl leading-snug text-foreground md:text-3xl">
            {lede}
          </p>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
