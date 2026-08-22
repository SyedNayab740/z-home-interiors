
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImageWrapper } from "@/components/ui/ImageWrapper";
import { company } from "@/data/company";
import { routes } from "@/config/site";

export function AboutPreview() {
  return (
    <section className="section-padding" aria-labelledby="about-preview-heading">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <ImageWrapper
              image={{ src: "/images/about-image.jpg", alt: `${company.name} design studio` }}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden items-center gap-4 rounded-lg border border-gold/20 surface-gradient p-6 shadow-soft sm:flex">
            <Sparkles className="h-8 w-8 shrink-0 text-gold" aria-hidden="true" />
            <div>
              <p className="font-display text-lg text-foreground">Considered Craftsmanship</p>
              <p className="text-xs uppercase tracking-wide text-muted">In Every Detail</p>
            </div>
          </div>
        </div>

        <div
          className="order-1 lg:order-2"
        >
          <span className="text-gold font-body text-xs font-medium uppercase tracking-[0.3em]">
            About {company.name}
          </span>
          <h2
            id="about-preview-heading"
            className="mt-4 font-display text-3xl text-foreground md:text-4xl lg:text-5xl"
          >
            A Design Studio Built Around How You Live
          </h2>
          <p className="mt-6 text-muted">{company.description}</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-lg text-gold">Our Mission</h3>
              <p className="mt-2 text-sm text-muted">
                To craft interiors that feel effortless — spaces where every material,
                proportion, and detail has been considered with intention.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg text-gold">Our Vision</h3>
              <p className="mt-2 text-sm text-muted">
                To be the studio discerning homeowners trust first, known as much for our
                craftsmanship as our care.
              </p>
            </div>
          </div>

          <Button asChild variant="outline" size="lg" className="mt-10">
            <Link href={routes.about}>Read More About Us</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
