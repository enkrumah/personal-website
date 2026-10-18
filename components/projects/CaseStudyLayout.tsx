import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { AnalyticsEvent } from "@/components/analytics/AnalyticsEvent";
import { TrackedCTA } from "@/components/analytics/TrackedCTA";
import { Container } from "@/components/layout/Container";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTA } from "@/components/ui/CTA";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/content/projects";
import { projectJsonLd } from "@/lib/jsonld";

export function CaseStudyLayout({
  project,
  children,
}: {
  project: Project;
  children: ReactNode;
}) {
  const visit = project.productUrl ? (
    project.productVisitedEvent ? (
      <TrackedCTA
        href={project.productUrl}
        event={project.productVisitedEvent}
        external
      >
        Visit Product
      </TrackedCTA>
    ) : (
      <CTA href={project.productUrl} external>
        Visit Product
      </CTA>
    )
  ) : null;

  return (
    <article>
      <Container>
        <div className="pt-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Work
          </Link>
        </div>
        <header className="pt-8">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
            Case study
          </p>
          <h1 className="mt-3 max-w-4xl font-serif text-5xl tracking-tight text-balance sm:text-6xl">
            {project.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-muted">
            {project.summary}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
          {visit ? <div className="mt-8">{visit}</div> : null}
        </header>
        <div className="mt-10 border border-line">
          <ProjectVisual
            name={project.name}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            priority
          />
        </div>
        <div className="pt-4 pb-4">{children}</div>
        {project.productUrl ? (
          <section className="mt-16 border-t border-line py-16">
            <h2 className="font-serif text-4xl tracking-tight">Visit {project.name}</h2>
            {project.visitNote ? (
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
                {project.visitNote}
              </p>
            ) : null}
            <div className="mt-8">{visit}</div>
          </section>
        ) : null}
      </Container>
      {project.caseStudyOpenedEvent ? (
        <AnalyticsEvent event={project.caseStudyOpenedEvent} />
      ) : null}
      <JsonLd data={projectJsonLd(project)} />
    </article>
  );
}
