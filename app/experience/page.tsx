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
        title="From systems to the product decision"
        description="Mathematics and computer science at Fisk, then engineering and reliability at Apple, technical product work on developer and cloud products at Microsoft, an MBA at Emory, product management at ServiceNow, and now consumer recommendations and personalization at Expedia Group."
      />
      <div className="border-b border-line">
        {experience.map((item) => (
          <ExperienceItem key={item.id} experience={item} />
        ))}
      </div>
    </Container>
  );
}
