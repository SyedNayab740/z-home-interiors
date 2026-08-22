import { CompanyInfo } from "@/types";

/**
 * SINGLE SOURCE OF TRUTH for all business contact details.
 *
 * TODO (client action required before launch): every value below is a
 * clearly-marked placeholder. Replace each one with the real, confirmed
 * business detail before going live. Because every component on the site
 * reads from this one file, updating it here is the only change needed
 * anywhere in the codebase.
 */
export const company: CompanyInfo = {
  name: "Z Home Interiors",
  legalName: "Z Home Interiors",
  tagline: "Timeless Interiors, Crafted for Life",
  description:
    "Z Home Interiors is an interior design studio in Nandyal, Andhra Pradesh, creating beautiful and practical spaces for homes, villas and commercial properties. From concept to final handover, we bring thoughtful design and careful execution together under one roof.",
  founded: undefined,
  // TODO: replace with the real business phone number, e.g. "+91 98765 43210"
  phone: "+91 7013040343",
  phoneSecondary: "+91 9182593313",
  // TODO: replace with the WhatsApp number in international format, digits only, e.g. "919876543210"
  whatsapp: "+91 9182593313",
  // TODO: replace with the real business email address
  email: "zhomeinteriors.ndl@gmail.com",
  address: {
    // TODO: replace with the real studio address
    street: "Srinivasa Centre, Khaleel Theatre,",
    city: "Nandyal",
    state: "Andhra Pradesh",
    zip: "518501",
    country: "India",
  },
  hours: [
    { day: "Monday – Saturday", time: "10:00 AM – 7:00 PM" },
    { day: "Sunday", time: "By Appointment" },
  ],
  // TODO: replace with a real Google Maps link once the studio address is confirmed
  mapUrl: "https://maps.app.goo.gl/4wJBPrAR3qktQuXCA?g_st=ic"
};

/**
 * Whether each contact field above has been replaced with a real value yet.
 * Components read these flags rather than guessing from the placeholder
 * text, so that once real details are filled in above, every card,
 * button, and floating action across the site updates automatically —
 * and until then, nothing presents an obviously-fake placeholder (like
 * "+91 00000 00000") as if it were real, working contact information.
 */
export const contactConfigured = {
  phone: true,
  whatsapp: true,
  address: true,
  email: true,
};
