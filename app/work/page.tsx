import { AnalyticsEvent } from "@/components/analytics/AnalyticsEvent";
import { Container } from "@/components/layout/Container";
import { ProjectList } from "@/components/projects/ProjectList";
import { PageHeader } from "@/components/ui/PageHeader";
import { projects } from "@/content/projects";
import { analyticsEvents } from "@/lib/analytics";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Work",
  description:
    "Selected product work from Ebenezer Nkrumah, including Vybemoves, an AI-powered movie discovery and recommendation application.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <Container className="pb-24">
      <PageHeader
        eyebrow="Work"
        title="Vybemoves"
        description="One product so far. Movie discovery for when you know the feeling and not the title."
      />
      <ProjectList projects={projects} />
      <AnalyticsEvent event={analyticsEvents.workViewed} />
    </Container>
  );
}
