
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { routes } from "@/config/site";
import { Project } from "@/types";

const ASPECT_CYCLE = ["aspect-[4/3]", "aspect-[3/4]", "aspect-square"];

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;
  const displayProjects = projects.slice(0, 3);

  return (
    <section className="section-padding" aria-labelledby="featured-projects-heading">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            headingId="featured-projects-heading"
            eyebrow="Our Work"
            title="Our Projects"
            description="A selection of our interior design work."
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href={routes.projects}>View All Projects</Link>
          </Button>
        </div>

        <div
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} aspectClassName={ASPECT_CYCLE[index % ASPECT_CYCLE.length]} />
          ))}
        </div>
      </Container>
    </section>
  );
}
