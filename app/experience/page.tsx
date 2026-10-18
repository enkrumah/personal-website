import { ExperienceItem } from "@/components/experience/ExperienceItem";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { experience } from "@/content/experience";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Experience",
  description:
    "Product and engineering roles at Expedia Group, ServiceNow, Microsoft, and Apple, from the résumé.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <Container className="pb-24">
      <PageHeader
        eyebrow="Experience"
        title="Product narratives"
        description="Most recent first. Titles, dates, and scope are taken from the résumé."
      />
      <div className="border-b border-line">
        {experience.map((item) => (
          <ExperienceItem key={item.id} experience={item} />
        ))}
      </div>
    </Container>
  );
}
