
import { Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export function BusinessHours() {
  return (
    <section className="section-padding section-surface" aria-labelledby="business-hours-heading">
      <Container narrow>
        <SectionHeading
          headingId="business-hours-heading"
          eyebrow="When We're Available"
          title="Business Hours"
          align="center"
          className="mx-auto"
        />

        <dl
          className="card-surface mx-auto mt-14 max-w-lg divide-y divide-gold/10 p-8"
        >
          {company.hours.map((entry) => (
            <div key={entry.day} className="flex items-center justify-between gap-6 py-3 first:pt-0 last:pb-0">
              <dt className="flex items-center gap-3 text-sm text-foreground">
                <Clock className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {entry.day}
              </dt>
              <dd className="text-sm text-muted">{entry.time}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
