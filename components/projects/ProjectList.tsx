import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/content/projects";

export function ProjectList({ projects }: { projects: Project[] }) {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  if (projects.length === 0) {
    return <p className="text-muted">Projects will appear here.</p>;
  }

  return (
    <div className="flex flex-col gap-8">
      {featured.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          layout="feature"
          priority={index === 0}
        />
      ))}
      {rest.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2">
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
