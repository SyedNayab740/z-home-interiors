import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { buildMetadata, buildWebPageSchema, buildBreadcrumbSchema } from "@/lib/seo";
import { pageSEO } from "@/data/seo";
import { routes, siteConfig } from "@/config/site";
import { getProjectImages } from "@/lib/project-images";

export const metadata: Metadata = buildMetadata(pageSEO.projects);

export default function ProjectsPage() {
  const projects = getProjectImages();
  const pageUrl = pageSEO.projects.canonical ?? `${siteConfig.url}${routes.projects}`;
  const webPageSchema = buildWebPageSchema({ name: pageSEO.projects.title, description: pageSEO.projects.description, url: pageUrl });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Our Projects", url: pageUrl },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHeader
        eyebrow="Our Work"
        title="Our Projects"
        description="Explore our interior design work across living rooms, bedrooms, kitchens, wardrobes, TV units, and more."
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Our Projects" }]}
        backgroundImage={{
          src: "/images/projects-hero.jpg",
          alt: "Luxury Indian interior design project with elegant living, dining and kitchen spaces",
        }}
      />
      <ProjectsGrid projects={projects} />
    </>
  );
}

