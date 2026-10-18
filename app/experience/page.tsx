import { ExperienceItem } from "@/components/experience/ExperienceItem";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { experience } from "@/content/experience";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Experience",
  description:
    "Product and engineering roles at Expedia Group, ServiceNow, Microsoft, and Apple.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <Container className="pb-24">
      <PageHeader
        eyebrow="Experience"
        title="From how systems work to what they should do"
        description="Math and computer science at Fisk, engineering at Apple, technical product work at Microsoft, an MBA at Emory, an internship at ServiceNow, and now recommendations at Expedia Group."
      />
      <div className="border-b border-line">
        {experience.map((item) => (
          <ExperienceItem key={item.id} experience={item} />
        ))}
      </div>
    </Container>
  );
}
