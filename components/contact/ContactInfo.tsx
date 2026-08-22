
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { company, contactConfigured } from "@/data/company";
import { toTelHref, toWhatsAppHref } from "@/lib/utils";

export function ContactInfo() {
  const cards = [
    {
      id: "phone",
      icon: Phone,
      label: "Call Us",
      value: company.phone,
      href: toTelHref(company.phone),
      configured: contactConfigured.phone,
    },
    {
      id: "whatsapp",
      icon: MessageCircle,
      label: "WhatsApp",
      value: company.whatsapp,
      href: toWhatsAppHref(
        company.whatsapp,
        `Hi ${company.name}, I'd like to get in touch.`
      ),
      external: true,
      configured: contactConfigured.whatsapp,
    },
    {
      id: "email",
      icon: Mail,
      label: "Email Us",
      value: company.email,
      href: `mailto:${company.email}`,
      configured: contactConfigured.email,
    },
    {
      id: "address",
      icon: MapPin,
      label: "Visit Our Studio",
      value: `${company.address.street}, ${company.address.city}, ${company.address.state} ${company.address.zip}`,
      href: company.mapUrl,
      external: true,
      configured: contactConfigured.address,
    },
  ];

  return (
    <section className="section-padding" aria-labelledby="contact-info-heading">
      <Container>
        <SectionHeading
          headingId="contact-info-heading"
          eyebrow="Contact Information"
          title="Reach Us Directly"
          description="Whatever's easiest for you — call, message, email, or stop by the studio."
          align="center"
          className="mx-auto"
        />

        <div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map(
            ({ id, icon: Icon, label, value, href, external }) => (
              <div key={id}>
                <Card className="h-full text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>

                  <p className="mt-5 text-xs uppercase tracking-wide text-muted">
                    {label}
                  </p>

                  <a
                    href={href}
                    {...(external
                      ? {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {})}
                    className="mt-2 block text-sm font-medium text-foreground transition-colors hover:text-gold"
                  >
                    {value}
                  </a>
                </Card>
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
}
