
import { CheckCircle2, Sparkles, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface FeatureChecklistProps {
  headingId: string;
  eyebrow: string;
  title: string;
  items: string[];
  /** "cards" (Key Features — bordered luxury cards) or "grid" (Benefits — lighter list grid). */
  variant?: "cards" | "grid";
  icon?: LucideIcon;
  surfaceClassName?: string;
}

/** Shared renderer for any short data-driven list of strings (features, benefits). */
export function FeatureChecklist({
  headingId,
  eyebrow,
  title,
  items,
  variant = "cards",
  icon: Icon = variant === "cards" ? CheckCircle2 : Sparkles,
  surfaceClassName,
}: FeatureChecklistProps) {
  if (items.length === 0) return null;

  return (
    <section className={cn("section-padding", surfaceClassName)} aria-labelledby={headingId}>
      <Container>
        <SectionHeading
          headingId={headingId}
          eyebrow={eyebrow}
          title={title}
          align="center"
          className="mx-auto"
        />

        <div
          className={cn(
            "mt-14 grid gap-4 sm:grid-cols-2",
            variant === "cards" ? "lg:grid-cols-3" : "lg:grid-cols-2",
          )}
        >
          {items.map((item) =>
            variant === "cards" ? (
              <div key={item}>
                <Card className="flex h-full items-start gap-3 p-5">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <p className="text-sm text-foreground">{item}</p>
                </Card>
              </div>
            ) : (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg border border-gold/10 px-5 py-4"
              >
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <p className="text-sm text-foreground">{item}</p>
              </div>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
