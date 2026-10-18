import { ContactBand } from "@/components/home/ContactBand";
import { Hero } from "@/components/home/Hero";
import { Container } from "@/components/layout/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTA } from "@/components/ui/CTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experience } from "@/content/experience";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { personJsonLd } from "@/lib/jsonld";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  description: site.description,
  path: "/",
});

export default function HomePage() {
  const current = experience.find((item) => item.current);

  return (
    <>
      <Hero />
      {current ? (
        <section id="experience" className="pb-16 sm:pb-20">
          <Container>
            <SectionHeader
              className="mt-16 sm:mt-20"
              eyebrow={home.experience.eyebrow}
              title={current.company}
              description={`${current.role}. ${current.dates}. ${current.preview}`}
              action={
                <CTA href="/experience" variant="text">
                  {home.experience.action}
                </CTA>
              }
            />
          </Container>
        </section>
      ) : null}
      <ContactBand />
      <JsonLd data={personJsonLd()} />
    </>
  );
}
