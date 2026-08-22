
import { Target, Eye, Heart } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { companyStory, coreValues } from "@/data/about";

export function MissionVisionValues() {
  return (
    <section className="section-padding section-surface" aria-labelledby="mission-vision-heading">
      <Container>
        <SectionHeading
          headingId="mission-vision-heading"
          eyebrow="What Drives Us"
          title="Mission, Vision & Values"
          align="center"
          className="mx-auto"
        />

        <div
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          <div>
            <div>
              <Card className="h-full">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Target className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl text-foreground">Mission</h3>
                <p className="mt-3 text-sm text-muted">{companyStory.mission}</p>
              </Card>
            </div>
          </div>

          <div>
            <div>
              <Card className="h-full">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Eye className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl text-foreground">Vision</h3>
                <p className="mt-3 text-sm text-muted">{companyStory.vision}</p>
              </Card>
            </div>
          </div>

          <div>
            <div>
              <Card className="h-full">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Heart className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl text-foreground">Core Values</h3>
                <ul className="mt-3 space-y-3">
                  {coreValues.map((value) => (
                    <li key={value.id}>
                      <p className="text-sm font-medium text-foreground">{value.title}</p>
                      <p className="text-sm text-muted">{value.description}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
