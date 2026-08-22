import Link from "next/link";
import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ImageWrapper } from "@/components/ui/ImageWrapper";
import { ImageAsset } from "@/types";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  backgroundImage?: ImageAsset;
  /** Optional CTA buttons rendered below the description (e.g. individual service pages). */
  actions?: ReactNode;
}

/** Shared hero header for every interior page (About, Services, Projects, etc.). */
export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  backgroundImage,
  actions,
}: PageHeaderProps) {
  return (
    <header className="relative flex min-h-[62vh] items-end overflow-hidden border-b border-gold/10 pb-14 pt-40">
      {/* Subtle warm gold glow behind the title/breadcrumb content — same
          treatment as Hero, so every inner page reads as a premium section
          rather than relying only on the ambient body-level gradient. */}
      <div
        className="pointer-events-none absolute left-[14%] top-[55%] h-[620px] w-[620px] -translate-y-1/2 rounded-full bg-gold/10 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[10%] top-[45%] h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-surfaceElevated/18 blur-[160px]"
        aria-hidden="true"
      />

      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <ImageWrapper
  image={backgroundImage}
  fill
  priority
  className="object-cover object-center"
/>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>
      )}

      <Container className="relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition-colors hover:text-gold">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gold" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <span className="text-gold font-body text-xs font-medium uppercase tracking-[0.3em]">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 max-w-3xl font-display text-4xl text-foreground md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-muted md:text-lg">{description}</p>
        )}
        {actions && <div className="mt-8 flex flex-wrap gap-4">{actions}</div>}
      </Container>
    </header>
  );
}


