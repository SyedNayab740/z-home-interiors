
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { Transformation } from "@/types";
import { transformations } from "@/data/transformations";

interface BeforeAfterSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Defaults to the global showcase transformations; pass a service's own `beforeAfter` to override. */
  items?: Transformation[];
}

export function BeforeAfterSection({
  eyebrow = "The Difference",
  title = "See the Transformation",
  description = "Drag the slider to reveal the impact of a full design and renovation process.",
  items = transformations,
}: BeforeAfterSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="section-padding section-surface" aria-labelledby="before-after-heading">
      <Container narrow>
        <SectionHeading
          headingId="before-after-heading"
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 space-y-16">
          {items.map((transformation) => (
            <div
              key={transformation.id}
            >
              <BeforeAfterSlider before={transformation.before} after={transformation.after} />
              <div className="mt-4 text-center">
                <h3 className="font-display text-xl text-foreground">{transformation.title}</h3>
                {transformation.location && (
                  <p className="mt-1 text-sm text-muted">{transformation.location}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
