import { TrackedCTA } from "@/components/analytics/TrackedCTA";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/ui/ContactForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { contactEmail, githubUrl, linkedInUrl } from "@/content/site";
import { analyticsEvents } from "@/lib/analytics";
import { contactDeliveryConfigured } from "@/lib/contact";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Ebenezer Nkrumah about AI, search, recommendations, consumer products, and product management.",
  path: "/contact",
});

export default function ContactPage() {
  const formReady = contactDeliveryConfigured();

  return (
    <Container className="pb-24">
      <PageHeader
        eyebrow="Contact"
        title="Tell me what you are working on."
        description="I want to talk about search, recommendations, and other consumer products."
      />
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
        <TrackedCTA
          href={`mailto:${contactEmail}`}
          event={analyticsEvents.contactInitiated}
          properties={{ channel: "email" }}
        >
          {contactEmail}
        </TrackedCTA>
        <div className="flex gap-6 text-sm">
          <TrackedCTA
            href={linkedInUrl}
            event={analyticsEvents.linkedInVisited}
            external
            variant="text"
          >
            LinkedIn
          </TrackedCTA>
          <TrackedCTA
            href={githubUrl}
            event={analyticsEvents.githubVisited}
            external
            variant="text"
          >
            GitHub
          </TrackedCTA>
        </div>
      </div>
      <div className="mt-16 max-w-xl border-t border-line pt-16">
        <h2 className="font-serif text-3xl tracking-tight">Send a note</h2>
        <div className="mt-6">
          <ContactForm deliveryReady={formReady} />
        </div>
      </div>
    </Container>
  );
}
