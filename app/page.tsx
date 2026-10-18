import { ContactBand } from "@/components/home/ContactBand";
import { Hero } from "@/components/home/Hero";
import { Container } from "@/components/layout/Container";
import { ExperiencePreview } from "@/components/experience/ExperiencePreview";
import { ProjectList } from "@/components/projects/ProjectList";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTA } from "@/components/ui/CTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experience } from "@/content/experience";
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
      <section id="work" className="py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Work"
            title="Selected work"
            description="Products where search, recommendations, and taste are the experience."
            action={
              <CTA href="/work" variant="text">
                All work
              </CTA>
            }
          />
          <div className="mt-10">
            <ProjectList projects={selected} />
          </div>
        </Container>
      </section>
      <section id="experience" className="border-t border-line py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Experience"
            title="Where the work has been"
            description="Expedia Group is current. ServiceNow, Microsoft, and Apple are the roles before it."
            action={
              <CTA href="/experience" variant="text">
                View experience
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
