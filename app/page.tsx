import Link from "next/link";
import { CareerProof } from "@/components/home/CareerProof";
import { ContactBand } from "@/components/home/ContactBand";
import { Hero } from "@/components/home/Hero";
import { Container } from "@/components/layout/Container";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTA } from "@/components/ui/CTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { home } from "@/content/home";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { personJsonLd } from "@/lib/jsonld";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  description: site.description,
  path: "/",
});

export default function HomePage() {
  const project = projects.find((item) => item.featured) ?? projects[0];

  return (
    <>
      <Hero />
      {project ? (
        <section id="vybemoves" className="pb-16 sm:pb-20">
          <Container>
            <SectionHeader
              eyebrow={home.vybemoves.eyebrow}
              title={home.vybemoves.title}
              description={home.vybemoves.description}
            />
            <div className="mt-8">
              <CTA href={home.vybemoves.href}>{home.vybemoves.action}</CTA>
            </div>
            <Link
              href={home.vybemoves.href}
              aria-label="View the Vybemovies case study"
              className="mt-8 block"
            >
              <ProjectVisual
                name={project.name}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
              />
            </Link>
          </Container>
        </section>
      ) : null}
      <section id="experience" className="pb-16 sm:pb-20">
        <Container>
          <h2 className="sr-only">{home.experience.eyebrow}</h2>
          <CareerProof />
          <div className="pt-6">
            <CTA href="/experience" variant="text">
              {home.experience.action}
            </CTA>
          </div>
        </Container>
      </section>
      <ContactBand />
      <JsonLd data={personJsonLd()} />
    </>
  );
}
