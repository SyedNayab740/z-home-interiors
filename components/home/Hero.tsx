import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageWrapper } from "@/components/ui/ImageWrapper";
import { company } from "@/data/company";
import { routes } from "@/config/site";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        <ImageWrapper
          image={{
            src: "/images/hero.jpg",
            alt: `${company.name} luxury interior design`,
          }}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-background/88 via-background/48 to-background/8" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/10" />

      <div
        className="pointer-events-none absolute left-[4%] top-[26%] h-[680px] w-[680px] -translate-y-1/2 rounded-full bg-surfaceElevated/16 blur-[160px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[6%] top-[58%] h-[440px] w-[440px] -translate-y-1/2 rounded-full bg-surface/14 blur-[140px]"
        aria-hidden="true"
      />

      <Container className="relative z-10 pb-28 pt-40">
        <div className="max-w-3xl">
          <span className="text-gold font-body text-xs font-medium uppercase tracking-[0.35em]">
            Luxury Interior Design Studio
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.1] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Crafting Timeless Luxury Interiors
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted md:text-lg">
            Premium interior design for homes, villas &amp; commercial spaces.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={routes.contact}>Get Free Consultation</Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href={routes.projects}>View Our Projects</Link>
            </Button>
          </div>
        </div>
      </Container>

      <div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
          Scroll
        </span>

        <span className="relative h-10 w-px overflow-hidden bg-gold/20">
          <span className="absolute inset-x-0 top-0 h-1/2 bg-gold" />
        </span>
      </div>
    </section>
  );
}
