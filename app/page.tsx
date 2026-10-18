import { ContactBand } from "@/components/home/ContactBand";
import { Hero } from "@/components/home/Hero";
import { Container } from "@/components/layout/Container";
import { ExperiencePreview } from "@/components/experience/ExperiencePreview";
import { ProjectList } from "@/components/projects/ProjectList";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTA } from "@/components/ui/CTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experience } from "@/content/experience";
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
  const selected = projects.filter((project) => project.featured);

  return (
    <>
      <Hero />
      <section id="work" className="pb-16 sm:pb-20">
        <Container>
          <SectionHeader
            eyebrow={home.work.eyebrow}
            title={home.work.title}
            description={home.work.description}
            action={
              <CTA href="/work" variant="text">
                {home.work.action}
              </CTA>
            }
          />
          <div className="mt-10">
            <ProjectList projects={selected} />
          </div>
        </Container>
      </section>
      <section id="experience" className="pb-16 sm:pb-20">
        <Container>
          <SectionHeader
            eyebrow={home.experience.eyebrow}
            title={home.experience.title}
            description={home.experience.description}
            action={
              <CTA href="/experience" variant="text">
                {home.experience.action}
              </CTA>
            }
          />
          <ExperiencePreview items={experience} />
        </Container>
      </section>
      <ContactBand />
      <JsonLd data={personJsonLd()} />
    </>
  );
}
