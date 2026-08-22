import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { footerNav, legalNav } from "@/data/navigation";
import { services } from "@/data/services";
import { socialLinks } from "@/data/social";
import { company, contactConfigured } from "@/data/company";
import { toTelHref } from "@/lib/utils";
import { routes } from "@/config/site";

const iconMap = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/10 bg-gradient-to-b from-surface via-surfaceHover to-background">
      <Container className="section-padding grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Image
            src="/images/z-home-interiors-logo.png"
            alt={company.name}
            width={220}
            height={46}
            className="h-auto w-[190px]"
          />
          <p className="mt-4 max-w-sm text-sm text-muted">{company.description}</p>
          <ul className="mt-6 flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              if (!Icon) return null;
              return (
                <li key={link.id}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit us on ${link.platform}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/20 text-muted transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="font-body text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Explore
          </h3>
          <ul className="mt-5 space-y-3">
            {footerNav.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href={routes.nandyal}
                className="text-sm text-muted transition-colors hover:text-gold"
              >
                Interior Designers in Nandyal
              </Link>
            </li>


          </ul>
        </nav>

        <nav aria-label="Services navigation">
          <h3 className="font-body text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {services.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link
                  href={`${routes.services}/${service.slug}`}
                  className="text-sm text-muted transition-colors hover:text-gold"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-body text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-muted">
            {contactConfigured.address && (
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  {company.address.street}, {company.address.city}, {company.address.state}{" "}
                  {company.address.zip}
                </span>
              </li>
            )}
           {contactConfigured.phone && (
  <li className="flex items-start gap-3">
    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
    <div className="flex flex-col gap-1">
      <a
        href={toTelHref(company.phone)}
        className="transition-colors hover:text-gold"
      >
        {company.phone}
      </a>

      {company.phoneSecondary && (
        <a
          href={toTelHref(company.phoneSecondary)}
          className="transition-colors hover:text-gold"
        >
          {company.phoneSecondary}
        </a>
      )}
    </div>
  </li>
)}
            {contactConfigured.email && (
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-gold">
                  {company.email}
                </a>
              </li>
            )}
          </ul>
        </div>
      </Container>

      <div className="border-t border-gold/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-muted md:flex-row">
          <p>
            &copy; {year} {company.legalName ?? company.name}. All rights reserved.
          </p>
          {legalNav.length > 0 && (
            <ul className="flex items-center gap-6">
              {legalNav.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </div>
    </footer>
  );
}
