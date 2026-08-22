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

function ProjectCardComponent({ project, aspectClassName = "aspect-[4/3]" }: ProjectCardProps) {
  const categoryLabel =
    projectCategories.find((category) => category.slug === project.category)?.label ?? project.category;

  return (
    <article
      className="overflow-hidden rounded-lg border border-gold/10 surface-gradient transition-all duration-base hover:border-gold/25 hover:shadow-card"
    >
      <div className={cn("relative overflow-hidden", aspectClassName)}>
        <ImageWrapper
          image={project.image}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-slow group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" aria-hidden="true" />
        <div className="absolute left-4 top-4">
          <Badge>{categoryLabel}</Badge>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl text-foreground">{project.title}</h3>
      </div>
    </article>
  );
}

export const ProjectCard = memo(ProjectCardComponent);
