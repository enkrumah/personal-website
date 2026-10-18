import { Container } from "@/components/layout/Container";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { CTA } from "@/components/ui/CTA";
import { home } from "@/content/home";
import { projects } from "@/content/projects";

export function Hero() {
  const project = projects.find((item) => item.featured) ?? projects[0];

  return (
    <section>
      <Container className="pt-12 sm:pt-16">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
          Ebenezer Nkrumah
        </p>
        <h1 className="mt-3 max-w-4xl font-serif text-[2.35rem] leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {home.hero.title}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-muted">
          {home.hero.lede}
        </p>
        {project ? (
          <div className="mt-8">
            <CTA href={`/work/${project.slug}`}>{home.hero.caseStudyLabel}</CTA>
          </div>
        ) : null}
        {project ? (
          <div className="mt-8 sm:mt-10">
            <ProjectVisual
              name={project.name}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              priority
            />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
