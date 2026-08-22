
import { Container } from "@/components/ui/Container";
import { ImageWrapper } from "@/components/ui/ImageWrapper";
import { companyStory } from "@/data/about";
import { company } from "@/data/company";

export function CompanyStory() {
  return (
    <section className="section-padding" aria-labelledby="company-story-heading">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div
          className="relative aspect-[4/5] overflow-hidden rounded-lg"
        >
          <ImageWrapper
            image={{ src: "/images/about-image.jpg", alt: `${company.name} design studio` }}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div
        >
          <span className="text-gold font-body text-xs font-medium uppercase tracking-[0.3em]">
            Our Story
          </span>
          <h2
            id="company-story-heading"
            className="mt-4 font-display text-3xl text-foreground md:text-4xl lg:text-5xl"
          >
            Built on a Simple Idea: Design for How You Live
          </h2>
          <div className="mt-6 space-y-5 text-muted">
            {companyStory.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
