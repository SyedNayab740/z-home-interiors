import type { MetadataRoute } from "next";
import { siteConfig, routes } from "@/config/site";
import { services } from "@/data/services";

const liveStaticRoutes: string[] = [
  routes.home,
  routes.about,
  routes.services,
  routes.projects,
  routes.reviews,
  routes.contact,
  routes.nandyal,
  routes.privacy,
  routes.terms,
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = liveStaticRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === routes.home ? "weekly" : "monthly",
    priority:
      path === routes.home
        ? 1
        : path === routes.nandyal
          ? 0.9
          : 0.7,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}${routes.services}/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
