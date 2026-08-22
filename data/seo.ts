import { SEOConfig } from "@/types";
import { siteConfig } from "@/config/site";

export const defaultSEO: SEOConfig = {
  title: `${siteConfig.name} | Interior Designers in Nandyal`,
  description:
    "Z Home Interiors is an interior design studio in Nandyal, Andhra Pradesh, creating beautiful home, villa and commercial interiors with thoughtful design and careful execution.",
  keywords: [
    "interior designers in Nandyal",
    "best interior designers in Nandyal",
    "interior design company in Nandyal",
    "home interiors in Nandyal",
    "home interior designers Nandyal",
    "modular kitchen designers in Nandyal",
    "home interior design Nandyal",
    "residential interior designers Nandyal",
    "commercial interior designers Nandyal",
    "Nandyal interior design studio",
  ],
  ogImage: "/images/hero.jpg",
  canonical: siteConfig.url,
};

export const pageSEO: Record<
  "home" | "about" | "services" | "projects" | "contact" | "reviews" | "privacy" | "terms",
  SEOConfig
> = {
  home: defaultSEO,

  about: {
    title: `About Z Home Interiors | Interior Designers in Nandyal`,
    description:
      "Learn about Z Home Interiors, a Nandyal interior design studio creating thoughtful residential and commercial spaces with practical planning and quality craftsmanship.",
    keywords: [
      "Z Home Interiors",
      "interior designers Nandyal",
      "interior design studio Nandyal",
    ],
    canonical: `${siteConfig.url}/about`,
  },

  services: {
    title: `Interior Design Services in Nandyal | Z Home Interiors`,
    description:
      "Explore interior design services in Nandyal from Z Home Interiors, including modular kitchens, wardrobes, bedrooms, living rooms, offices, false ceilings, TV units, renovation and 3D design.",
    keywords: [
      "interior design services in Nandyal",
      "home interior services Nandyal",
      "interior designers Nandyal",
      "modular kitchen Nandyal",
    ],
    canonical: `${siteConfig.url}/services`,
  },

  projects: {
    title: `Interior Design Projects in Nandyal | Z Home Interiors`,
    description:
      "Explore residential and commercial interior design work by Z Home Interiors, including kitchens, bedrooms, living rooms, wardrobes, TV units and complete interiors.",
    keywords: [
      "interior design projects Nandyal",
      "home interiors Nandyal",
      "interior projects Nandyal",
    ],
    canonical: `${siteConfig.url}/projects`,
  },

  contact: {
    title: `Contact Interior Designers in Nandyal | Z Home Interiors`,
    description:
      "Contact Z Home Interiors in Nandyal for a home or commercial interior design consultation. Call, WhatsApp or send an enquiry to discuss your project.",
    keywords: [
      "contact interior designers Nandyal",
      "interior design consultation Nandyal",
      "Z Home Interiors contact",
    ],
    canonical: `${siteConfig.url}/contact`,
  },

  reviews: {
    title: `Z Home Interiors Reviews | Interior Designers in Nandyal`,
    description:
      "Read client feedback about Z Home Interiors and their residential and commercial interior design projects.",
    keywords: [
      "Z Home Interiors reviews",
      "interior designers Nandyal reviews",
      "interior design reviews Nandyal",
    ],
    canonical: `${siteConfig.url}/reviews`,
  },

  privacy: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description:
      "Read the Z Home Interiors privacy policy covering website enquiries, contact information, analytics and user rights.",
    canonical: `${siteConfig.url}/privacy`,
  },

  terms: {
    title: `Terms & Conditions | ${siteConfig.name}`,
    description:
      "Read the Z Home Interiors terms and conditions covering website usage, enquiries, quotations, services and intellectual property.",
    canonical: `${siteConfig.url}/terms`,
  },
};


