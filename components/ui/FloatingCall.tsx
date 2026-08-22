import { Phone } from "lucide-react";
import { company, contactConfigured } from "@/data/company";
import { toTelHref } from "@/lib/utils";

export function FloatingCall() {
  if (!contactConfigured.phone) return null;

  return (
    <a
      href={toTelHref(company.phone)}
      aria-label={`Call ${company.name} at ${company.phone}`}
      className="fixed bottom-24 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-background shadow-gold transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}
