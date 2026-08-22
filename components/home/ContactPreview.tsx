"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { LazyGoogleMap } from "@/components/contact/LazyGoogleMap";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company, contactConfigured } from "@/data/company";
import { toTelHref, toWhatsAppHref } from "@/lib/utils";

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

const initialState: ContactFormState = { name: "", email: "", message: "" };

export function ContactPreview() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in every field so we can get back to you.");
      return;
    }

    if (!contactConfigured.whatsapp) {
      setError("WhatsApp isn't connected yet — please email us instead using the details alongside this form.");
      return;
    }

    setError(null);

    const whatsappMessage = [
      `Hi ${company.name}, my name is ${form.name}.`,
      form.message,
      `You can reach me at ${form.email}.`,
    ].join(" ");

    window.open(toWhatsAppHref(company.whatsapp, whatsappMessage), "_blank", "noopener,noreferrer");
    setSent(true);
    setForm(initialState);
  };

  return (
    <section className="section-padding" aria-labelledby="contact-preview-heading">
      <Container>
        <SectionHeading
          headingId="contact-preview-heading"
          eyebrow="Get In Touch"
          title="Start Your Design Journey"
          description="Send us a note or reach out directly — we typically respond within one business day."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div
            className="card-surface p-8"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="text-sm text-muted">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                  className="mt-2 w-full rounded border border-gold/20 bg-gradient-to-b from-background to-surfaceHover px-4 py-3 text-foreground placeholder:text-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="text-sm text-muted">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                  className="mt-2 w-full rounded border border-gold/20 bg-gradient-to-b from-background to-surfaceHover px-4 py-3 text-foreground placeholder:text-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="text-sm text-muted">
                  Tell us about your project
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={form.message}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, message: event.target.value }))
                  }
                  className="mt-2 w-full resize-none rounded border border-gold/20 bg-gradient-to-b from-background to-surfaceHover px-4 py-3 text-foreground placeholder:text-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  placeholder="A few words about your space and timeline"
                />
              </div>

              {error && (
                <p role="alert" className="text-sm text-red-400">
                  {error}
                </p>
              )}
              {sent && (
                <p role="status" className="text-sm text-gold">
                  Thanks — WhatsApp should have opened with your message ready to send.
                </p>
              )}

              <Button type="submit" size="lg" className="w-full">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Send via WhatsApp
              </Button>
            </form>
          </div>

          <div
            className="flex flex-col gap-6"
          >
            <div className="overflow-hidden rounded-lg border border-gold/10">
              {contactConfigured.address ? (
                <LazyGoogleMap
                  address={`${company.address.street}, ${company.address.city}, ${company.address.state} ${company.address.zip}`}
                  title={`Map showing ${company.name} location`}
                  className="h-64 md:h-80"
                />
              ) : (
                <div className="flex h-64 flex-col items-center justify-center gap-3 text-center md:h-80">
                  <MapPin className="h-6 w-6 text-gold" aria-hidden="true" />
                  <p className="text-sm text-muted">Studio location coming soon</p>
                </div>
              )}
            </div>

            <dl
              className="card-surface grid gap-5 p-8 sm:grid-cols-2"
            >
              {contactConfigured.address && (
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-muted">Office</dt>
                    <dd className="mt-1 text-sm text-foreground">
                      {company.address.street}, {company.address.city}, {company.address.state}{" "}
                      {company.address.zip}
                    </dd>
                  </div>
                </div>
              )}
              {contactConfigured.email && (
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-muted">Email</dt>
                    <dd className="mt-1 text-sm text-foreground">
                      <a href={`mailto:${company.email}`} className="hover:text-gold">
                        {company.email}
                      </a>
                    </dd>
                  </div>
                </div>
              )}
              {contactConfigured.phone && (
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-muted">Phone / WhatsApp</dt>
                    <dd className="mt-1 text-sm text-foreground">
                      <a href={toTelHref(company.phone)} className="hover:text-gold">
                        {company.phone}
                      </a>
                    </dd>
                  </div>
                </div>
              )}
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted">Business Hours</dt>
                  <dd className="mt-1 space-y-0.5 text-sm text-foreground">
                    {company.hours.map((entry) => (
                      <p key={entry.day}>
                        {entry.day}: {entry.time}
                      </p>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
