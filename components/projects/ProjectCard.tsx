import { TrackedCTA } from "@/components/analytics/TrackedCTA";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { CTA } from "@/components/ui/CTA";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/cn";

export function ProjectCard({
  project,
  layout = "standard",
  priority = false,
}: {
  project: Project;
  layout?: "feature" | "standard";
  priority?: boolean;
}) {
  const feature = layout === "feature";

  return (
    <article
      className={cn(
        "border border-line bg-card transition-colors duration-200 hover:border-foreground/30",
        feature && "overflow-hidden",
      )}
    >
      <ProjectVisual
        name={project.name}
        imageSrc={project.imageSrc}
        imageAlt={project.imageAlt}
        priority={priority}
      />
      <div className={cn("p-6 sm:p-8", feature && "sm:p-10")}>
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
        <h3
          className={cn(
            "mt-5 font-serif tracking-tight",
            feature ? "text-4xl sm:text-5xl" : "text-3xl",
          )}
        >
          {project.name}
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {project.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.caseStudy ? (
            <CTA href={`/work/${project.slug}`}>View Case Study</CTA>
          ) : null}
          {project.productUrl ? (
            project.productVisitedEvent ? (
              <TrackedCTA
                href={project.productUrl}
                event={project.productVisitedEvent}
                external
                variant="secondary"
              >
                Visit Product
              </TrackedCTA>
            ) : (
              <CTA href={project.productUrl} external variant="secondary">
                Visit Product
              </CTA>
            )
          ) : null}
        </div>
      </div>
    </article>
  );
}
