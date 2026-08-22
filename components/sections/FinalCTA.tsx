
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company, contactConfigured } from "@/data/company";
import { routes } from "@/config/site";
import { toTelHref, toWhatsAppHref } from "@/lib/utils";

interface FinalCTAProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  /** Adds a third "WhatsApp" action button — used by individual service pages. */
  showWhatsApp?: boolean;
}

export function FinalCTA({
  eyebrow = "Let\u2019s Begin",
  heading = "Ready to Transform Your Space?",
  description = "Book a complimentary consultation and let\u2019s discuss what\u2019s possible for your home or business.",
  showWhatsApp = false,
}: FinalCTAProps) {
  return (
    <section
      className="relative overflow-hidden border-y border-gold/10 py-24 md:py-32"
      aria-labelledby="final-cta-heading"
    >
      {/* Subtle radial gold glow — restrained, not a template gradient blast */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]"
        aria-hidden="true"
      />

      <Container narrow className="relative text-center">
        <div
        >
          <span className="text-gold font-body text-xs font-medium uppercase tracking-[0.3em]">
            {eyebrow}
          </span>
          <h2
            id="final-cta-heading"
            className="mt-4 font-display text-3xl text-foreground md:text-5xl"
          >
            {heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted">{description}</p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href={routes.contact}>Book Consultation</Link>
            </Button>
            {contactConfigured.phone && (
              <Button asChild variant="outline" size="lg">
                <a href={toTelHref(company.phone)}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </a>
              </Button>
            )}
            {showWhatsApp && contactConfigured.whatsapp && (
              <Button asChild variant="outline" size="lg">
                <a
                  href={toWhatsAppHref(
                    company.whatsapp,
                    `Hi ${company.name}, I'd like to book a consultation.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
