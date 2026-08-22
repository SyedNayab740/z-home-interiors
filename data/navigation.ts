import { NavLink } from "@/types";
import { routes } from "@/config/site";

export const primaryNav: NavLink[] = [
  { id: "home", label: "Home", href: routes.home },
  { id: "about", label: "About", href: routes.about },
  { id: "services", label: "Services", href: routes.services },
  { id: "projects", label: "Our Projects", href: routes.projects },
  { id: "reviews", label: "Reviews", href: routes.reviews },
  { id: "contact", label: "Contact", href: routes.contact },
];

export const footerNav: NavLink[] = primaryNav;

export const legalNav: NavLink[] = [
  { id: "privacy", label: "Privacy Policy", href: routes.privacy },
  { id: "terms", label: "Terms & Conditions", href: routes.terms },
];
