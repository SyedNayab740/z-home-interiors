import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { LazyGoogleMap } from "@/components/contact/LazyGoogleMap";
import { company, contactConfigured } from "@/data/company";

export function MapSection() {
  const address = `${company.address.street}, ${company.address.city}, ${company.address.state} ${company.address.zip}`;

  return (
    <section className="section-padding" aria-labelledby="map-section-heading">
      <Container>
        <SectionHeading
          headingId="map-section-heading"
          eyebrow="Find Us"
          title="Visit Our Studio"
          align="center"
          className="mx-auto"
        />

        {contactConfigured.address ? (
          <div className="mt-14 overflow-hidden rounded-lg border border-gold/10">
            <LazyGoogleMap address={address} title={`Map showing ${company.name} location`} className="h-80 md:h-[28rem]" />
          </div>
        ) : (
          <div className="mt-14 flex h-80 flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-gold/20 text-center md:h-[28rem]">
            <MapPin className="h-8 w-8 text-gold" aria-hidden="true" />
            <p className="font-display text-lg text-foreground">Studio Location Coming Soon</p>
            <p className="max-w-sm text-sm text-muted">Reach out by phone, WhatsApp, or email in the meantime.</p>
          </div>
        )}
      </Container>
    </section>
  );
}
