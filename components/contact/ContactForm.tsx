"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Loader } from "@/components/ui/Loader";
import { FormField, formControlClassName } from "@/components/ui/FormField";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

interface ContactFormState {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  message: string;
}

type FormErrors = Partial<Record<keyof ContactFormState, string>>;
type SubmitStatus = "idle" | "loading" | "success" | "error";

const initialState: ContactFormState = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  location: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: ContactFormState): FormErrors {
  const errors: FormErrors = {};

  if (!form.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  }

  if (!form.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (form.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!form.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.service) {
    errors.service = "Please select a service.";
  }

  if (!form.location.trim()) {
    errors.location = "Please enter your project location.";
  }

  if (!form.message.trim()) {
    errors.message = "Please tell us a bit about your project.";
  }

  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (
    field: keyof ContactFormState,
    value: string,
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate(form);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const message = `New Website Enquiry

Name: ${form.fullName}
Phone: ${form.phone}
Email: ${form.email}
Service: ${form.service}
Project Location: ${form.location}

Message:
${form.message}`;

    const encodedMessage = encodeURIComponent(message);

    try {
      window.open(
        `https://wa.me/919182593313?text=${encodedMessage}`,
        "_blank",
        "noopener,noreferrer",
      );

      setStatus("success");
      setForm(initialState);
    } catch {
      setErrorMessage(
        "Unable to open WhatsApp. Please contact us directly using the WhatsApp button.",
      );
      setStatus("error");
    }
  };

  const isLoading = status === "loading";

  return (
    <section
      className="section-padding section-surface"
      aria-labelledby="contact-form-heading"
    >
      <Container narrow>
        <SectionHeading
          headingId="contact-form-heading"
          eyebrow="Send a Message"
          title="Tell Us About Your Project"
          description="Share a few details and our team will follow up with you on WhatsApp."
          align="center"
          className="mx-auto"
        />

        <div
          className="card-surface mt-14 p-8 md:p-10"
        >
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                id="contact-fullName"
                label="Full Name"
                error={errors.fullName}
              >
                <input
                  id="contact-fullName"
                  type="text"
                  autoComplete="name"
                  value={form.fullName}
                  onChange={(event) =>
                    updateField("fullName", event.target.value)
                  }
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={
                    errors.fullName
                      ? "contact-fullName-error"
                      : undefined
                  }
                  className={formControlClassName}
                  placeholder="Your full name"
                />
              </FormField>

              <FormField
                id="contact-phone"
                label="Phone Number"
                error={errors.phone}
              >
                <input
                  id="contact-phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(event) =>
                    updateField("phone", event.target.value)
                  }
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={
                    errors.phone
                      ? "contact-phone-error"
                      : undefined
                  }
                  className={formControlClassName}
                  placeholder="+91 98765 43210"
                />
              </FormField>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                id="contact-email"
                label="Email"
                error={errors.email}
              >
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) =>
                    updateField("email", event.target.value)
                  }
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email
                      ? "contact-email-error"
                      : undefined
                  }
                  className={formControlClassName}
                  placeholder="you@example.com"
                />
              </FormField>

              <FormField
                id="contact-service"
                label="Service Required"
                error={errors.service}
              >
                <select
                  id="contact-service"
                  value={form.service}
                  onChange={(event) =>
                    updateField("service", event.target.value)
                  }
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={
                    errors.service
                      ? "contact-service-error"
                      : undefined
                  }
                  className={cn(
                    formControlClassName,
                    "appearance-none",
                  )}
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option
                      key={service.id}
                      value={service.title}
                    >
                      {service.title}
                    </option>
                  ))}

                  <option value="Other">
                    Other / Not Sure Yet
                  </option>
                </select>
              </FormField>
            </div>

            <FormField
              id="contact-location"
              label="Project Location"
              error={errors.location}
            >
              <input
                id="contact-location"
                type="text"
                autoComplete="address-level2"
                value={form.location}
                onChange={(event) =>
                  updateField("location", event.target.value)
                }
                aria-invalid={Boolean(errors.location)}
                aria-describedby={
                  errors.location
                    ? "contact-location-error"
                    : undefined
                }
                className={formControlClassName}
                placeholder="City, State"
              />
            </FormField>

            <FormField
              id="contact-message"
              label="Message"
              error={errors.message}
            >
              <textarea
                id="contact-message"
                rows={5}
                value={form.message}
                onChange={(event) =>
                  updateField("message", event.target.value)
                }
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message
                    ? "contact-message-error"
                    : undefined
                }
                className={cn(
                  formControlClassName,
                  "resize-none",
                )}
                placeholder="Tell us about your space, timeline, and goals"
              />
            </FormField>

            {status === "success" && (
              <p
                role="status"
                className="text-sm text-gold"
              >
                Your enquiry is ready in WhatsApp. Please send the
                message to our team to complete your enquiry.
              </p>
            )}

            {status === "error" && (
              <p
                role="alert"
                className="text-sm text-red-400"
              >
                {errorMessage}
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader
                    size="sm"
                    label="Opening WhatsApp"
                  />
                  Opening WhatsApp...
                </>
              ) : (
                <>
                  <Send
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                  Send on WhatsApp
                </>
              )}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}




