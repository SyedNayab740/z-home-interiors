import { Container } from "@/components/ui/Container";
import { LegalSection } from "@/types";

interface LegalContentProps {
  sections: LegalSection[];
  lastUpdated: string;
  intro?: string;
}

/** Shared prose renderer for the Privacy Policy and Terms & Conditions pages. */
export function LegalContent({ sections, lastUpdated, intro }: LegalContentProps) {
  return (
    <section className="section-padding">
      <Container narrow>
        <p className="text-sm text-muted">Last updated: {lastUpdated}</p>
        {intro && <p className="mt-6 text-muted">{intro}</p>}

        <div className="mt-10 space-y-12">
          {sections.map((section) => (
            <div key={section.id} id={section.id}>
              <h2 className="font-display text-2xl text-foreground md:text-3xl">
                {section.title}
              </h2>
              {section.paragraphs?.map((paragraph, index) => (
                <p key={index} className="mt-4 leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
                  {section.list.map((item, index) => (
                    <li key={index} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
