import { memo } from "react";
import { ImageWrapper } from "@/components/ui/ImageWrapper";
import { Badge } from "@/components/ui/Badge";
import { Project } from "@/types";
import { projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  aspectClassName?: string;
}

function ProjectCardComponent({
  project,
  aspectClassName,
}: ProjectCardProps) {
  const categoryLabel =
    projectCategories.find(
      (category) => category.slug === project.category,
    )?.label ?? project.category;

  const width = project.image.width ?? 1;
  const height = project.image.height ?? 1;

  return (
    <article className="overflow-hidden rounded-lg border border-gold/10 surface-gradient transition-all duration-base hover:border-gold/25 hover:shadow-card">
      <div
        className={cn("relative w-full overflow-hidden", aspectClassName)}
        style={
          !aspectClassName
            ? { aspectRatio: `${width} / ${height}` }
            : undefined
        }
      >
        <ImageWrapper
          image={project.image}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          containerClassName="absolute inset-0"
          className="object-cover transition-transform duration-slow"
        />

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent"
          aria-hidden="true"
        />

        <div className="absolute left-4 top-4">
          <Badge>{categoryLabel}</Badge>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-xl text-foreground">
          {project.title}
        </h3>
      </div>
    </article>
  );
}

export const ProjectCard = memo(ProjectCardComponent);
