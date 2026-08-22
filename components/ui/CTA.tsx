import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface CTAProps {
  title: string;
  description?: string;
  actionLabel: string;
  actionHref: string;
}

export function CTA({ title, description, actionLabel, actionHref }: CTAProps) {
  return (
    <section className="section-padding border-t border-gold/10">
      <Container narrow className="text-center">
        <h2 className="font-display text-3xl text-foreground md:text-4xl">{title}</h2>
        {description && <p className="mt-4 text-muted">{description}</p>}
        <Button asChild size="lg" className="mt-8">
          <Link href={actionHref}>{actionLabel}</Link>
        </Button>
      </Container>
    </section>
  );
}
