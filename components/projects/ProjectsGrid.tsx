"use client";

import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { cn } from "@/lib/utils";
import { projectCategories } from "@/data/projects";
import { Project } from "@/types";

type Orientation = "vertical" | "horizontal" | "square";

const ORIENTATION_ORDER: Orientation[] = [
  "vertical",
  "horizontal",
  "square",
];

const SQUARE_TOLERANCE = 0.01;

function getOrientation(project: Project): Orientation {
  const width = project.image.width;
  const height = project.image.height;

  if (!width || !height) {
    return "square";
  }

  const ratio = width / height;

  if (Math.abs(ratio - 1) <= SQUARE_TOLERANCE) {
    return "square";
  }

  return ratio > 1 ? "horizontal" : "vertical";
}

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          activeCategory === "all" ||
          project.category === activeCategory,
      ),
    [projects, activeCategory],
  );

  const groups = useMemo(() => {
    const buckets: Record<Orientation, Project[]> = {
      vertical: [],
      horizontal: [],
      square: [],
    };

    for (const project of filteredProjects) {
      buckets[getOrientation(project)].push(project);
    }

    return ORIENTATION_ORDER.map((orientation) => ({
      orientation,
      items: buckets[orientation],
    })).filter((group) => group.items.length > 0);
  }, [filteredProjects]);

  return (
    <section
      className="section-padding"
      aria-labelledby="projects-grid-heading"
    >
      <Container>
        <SectionHeading
          headingId="projects-grid-heading"
          eyebrow="Our Work"
          title="Our Projects"
          description="A selection of our interior design work. New project images can be added without changing the website layout."
          align="center"
          className="mx-auto"
        />

        {projects.length > 0 && (
          <div
            role="group"
            aria-label="Filter projects by category"
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              aria-pressed={activeCategory === "all"}
              className={cn(
                "rounded-pill border px-5 py-2 text-sm font-medium uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
                activeCategory === "all"
                  ? "border-gold bg-gold text-background"
                  : "border-gold/20 text-muted hover:border-gold hover:text-gold",
              )}
            >
              All
            </button>

            {projectCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.slug)}
                aria-pressed={activeCategory === category.slug}
                className={cn(
                  "rounded-pill border px-5 py-2 text-sm font-medium uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
                  activeCategory === category.slug
                    ? "border-gold bg-gold text-background"
                    : "border-gold/20 text-muted hover:border-gold hover:text-gold",
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}

        {filteredProjects.length > 0 ? (
          <div key={activeCategory} className="mt-12">
            {groups.map((group) => (
              <div
                key={group.orientation}
                data-orientation={group.orientation}
                className="mb-10 last:mb-0"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-lg border border-dashed border-gold/20 p-10 text-center">
            <p className="font-display text-xl text-foreground">
              Your project images will appear here.
            </p>
            <p className="mt-2 text-sm text-muted">
              Add project images directly to <code>public/images/</code> and
              rebuild the site.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
