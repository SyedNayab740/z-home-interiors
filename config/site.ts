export const siteConfig = {
  name: "Z Home Interiors",
  shortName: "Z Home",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    "https://www.zhomeinteriors.com",
  description:
    "Z Home Interiors is an interior design studio in Nandyal, Andhra Pradesh, creating residential and commercial interiors including modular kitchens, bedrooms, living rooms, wardrobes, offices and full-home renovations.",
  locale: "en_IN",
  themeColor: "#0B0B0B",
} as const;

export const routes = {
  home: "/",
  about: "/about",
  services: "/services",
  projects: "/projects",
  reviews: "/reviews",
  contact: "/contact",
  nandyal: "/interior-designers-nandyal",
  privacy: "/privacy",
  terms: "/terms",
} as const;

