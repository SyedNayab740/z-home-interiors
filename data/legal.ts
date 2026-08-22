import { LegalSection } from "@/types";
import { company, contactConfigured } from "@/data/company";

/**
 * Builds a "reach us" sentence that only mentions contact methods that are
 * actually configured — falls back to a generic line if neither the email
 * nor phone has been set yet, so the legal pages never point to a fake
 * placeholder address.
 */
function contactReachSentence(lead: string): string {
  const methods = [
    contactConfigured.email ? company.email : null,
    contactConfigured.phone ? company.phone : null,
  ].filter((value): value is string => Boolean(value));

  if (methods.length === 0) {
    return `${lead} can be directed to us using the contact form on this website.`;
  }

  return `${lead} can be directed to us at ${methods.join(" or ")}.`;
}

export const legalLastUpdated = "January 1, 2026";

export const privacyPolicySections: LegalSection[] = [
  {
    id: "information-collected",
    title: "Information We Collect",
    paragraphs: [
      `${company.name} ("we", "us", "our") collects information you provide directly to us, and limited technical information collected automatically when you browse this website.`,
    ],
    list: [
      "Contact details you submit through our contact form (name, phone number, email address, project location, service of interest, and your message)",
      "Information you send us directly via phone, email, or WhatsApp",
      "Standard technical data such as browser type, device type, and pages visited, collected automatically by our hosting provider for security and performance purposes",
    ],
  },
  {
    id: "contact-form-data",
    title: "Contact Form Data",
    paragraphs: [
      "When you submit our contact form, the information you provide (full name, phone number, email, service required, project location, and message) is used solely to respond to your inquiry and, if you become a client, to deliver our design services.",
      "We do not sell, rent, or share your contact form submissions with third parties for their own marketing purposes.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    paragraphs: [
      "This website does not set first-party marketing or advertising cookies. Some pages embed third-party content — specifically a Google Maps location preview — which may set its own cookies in accordance with Google's own cookie policy. We do not control these third-party cookies.",
      "If we implement analytics tools in the future (see below), this policy will be updated to reflect any cookies they set before they go live.",
    ],
  },
  {
    id: "analytics",
    title: "Analytics",
    paragraphs: [
      "At the time of this policy's last update, this website does not run any analytics or tracking software. Should we implement a service such as Google Analytics in the future, this section will be updated to describe what data is collected, how it's used, and how you can opt out, before that tool is activated.",
    ],
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    paragraphs: [
      "We use a small number of third-party services to operate this website and our business:",
    ],
    list: [
      "Google Maps — to display our studio location. Subject to Google's own privacy policy.",
      "WhatsApp — if you choose to contact us via WhatsApp, that conversation is subject to WhatsApp's (Meta's) own privacy policy.",
      "Our website hosting provider, which processes standard technical logs as part of delivering the site to you.",
    ],
  },
  {
    id: "user-rights",
    title: "Your Rights",
    paragraphs: [
      "Depending on your location, you may have rights to access, correct, delete, or restrict how we use your personal information, and to object to or withdraw consent for certain processing.",
      "To exercise any of these rights, contact us using the details below. We will respond within a reasonable timeframe and in accordance with applicable law.",
    ],
  },
  {
    id: "privacy-contact",
    title: "Contact Information",
    paragraphs: [
      contactReachSentence("Questions about this Privacy Policy or how we handle your information"),
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    id: "website-usage",
    title: "Website Usage",
    paragraphs: [
      `By accessing and using this website, you agree to use it only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use and enjoyment of this site by, any third party.`,
      `${company.name} reserves the right to update, modify, or discontinue any part of this website at any time without prior notice.`,
    ],
  },
  {
    id: "quotes-estimates",
    title: "Quotes & Estimates",
    paragraphs: [
      "Any pricing, timelines, or estimates discussed through this website, our contact form, or an initial consultation are preliminary and non-binding. Final scope, pricing, and timelines are confirmed only in a signed design agreement or contract between you and us.",
      "Estimates are based on the information available at the time and may change based on site conditions, material availability, and scope changes discovered during the design or construction process.",
    ],
  },
  {
    id: "services",
    title: "Services",
    paragraphs: [
      "Our interior design and renovation services are provided subject to the terms of a separate, signed client agreement entered into for each project. The content of this website is for informational and marketing purposes and does not itself constitute a contract for services.",
      "Service availability, timelines, and design outcomes described on this website (including on our project pages) reflect past project experience and are not guarantees of results for future projects.",
    ],
  },
  {
    id: "payments",
    title: "Payments",
    paragraphs: [
      "Payment terms, deposit requirements, and payment schedules are defined in your individual client agreement, not on this website. We do not process payments through this website.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    paragraphs: [
      `All content on this website — including text, photographs, project imagery, logos, and design concepts — is the property of ${company.name} or is used with permission, and is protected by applicable copyright and trademark law.`,
      "You may not reproduce, distribute, or create derivative works from this content without our prior written consent, except for personal, non-commercial viewing of the site.",
      "Project photography may be subject to additional rights held by photographers or clients and is not licensed for reuse.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    paragraphs: [
      `To the fullest extent permitted by law, ${company.name} shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website, including reliance on any content, estimate, or information presented here.`,
      "This website and its content are provided \"as is\" without warranties of any kind, express or implied. Nothing in this section limits any liability that cannot be excluded under applicable law, including in connection with our signed client agreements.",
    ],
  },
  {
    id: "terms-contact",
    title: "Contact Information",
    paragraphs: [
      contactReachSentence("Questions about these Terms & Conditions"),
    ],
  },
];
