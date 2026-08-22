"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Timeline } from "@/components/ui/Timeline";
import { TimelineEntry } from "@/types";
import { processSteps } from "@/data/process";

interface OurProcessProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Defaults to the global company-wide process; pass a service's own `process` to override. */
  entries?: TimelineEntry[];
}

export function OurProcess({
  eyebrow = "How We Work",
  title = "Our Design Process",
  description = "A clear, considered path from first conversation to final handover.",
  entries = processSteps,
}: OurProcessProps) {
  return (
    <section className="section-padding section-surface" aria-labelledby="our-process-heading">
      <Container narrow>
        <SectionHeading
          headingId="our-process-heading"
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 flex justify-center">
          <Timeline entries={entries} />
        </div>
      </Container>
    </section>
  );
}
