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
      <section id="experience" className="pb-16 sm:pb-20">
        <Container>
          <SectionHeader
            eyebrow={home.experience.eyebrow}
            title={home.experience.title}
            action={
              <CTA href="/experience" variant="text">
                {home.experience.action}
              </CTA>
            }
          />
          <CareerProof />
        </Container>
      </section>
      {project ? (
        <section id="vybemoves" className="pb-16 sm:pb-20">
          <Container>
            <SectionHeader
              eyebrow={home.vybemoves.eyebrow}
              title={home.vybemoves.title}
              description={home.vybemoves.description}
              action={
                <CTA href={home.vybemoves.href} variant="text">
                  {home.vybemoves.action}
                </CTA>
              }
            />
            <div className="mt-10">
              <ProjectVisual
                name={project.name}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
              />
            </div>
          </Container>
        </section>
      ) : null}
      <section id="interests" className="pb-16 sm:pb-20">
        <Container>
          <SectionHeader
            eyebrow={home.interests.eyebrow}
            title={home.interests.title}
            description={home.interests.body}
          />
        </Container>
      </section>
      <ContactBand />
      <JsonLd data={personJsonLd()} />
    </>
  );
}
