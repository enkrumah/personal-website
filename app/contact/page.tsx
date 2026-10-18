import { TrackedCTA } from "@/components/analytics/TrackedCTA";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/ui/ContactForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { contactEmail, githubUrl, linkedInUrl } from "@/content/site";
import { analyticsEvents } from "@/lib/analytics";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Ebenezer Nkrumah about AI, search, recommendations, consumer products, and product management.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Container className="pb-24">
      <PageHeader
        title="Let's Connect"
        description="Conversations about AI, search, recommendations, consumer products, and product management are welcome."
      />
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <dl className="space-y-6">
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.14em] text-subtle">
                Email
              </dt>
              <dd className="mt-2">
                <TrackedCTA
                  href={`mailto:${contactEmail}`}
                  event={analyticsEvents.contactInitiated}
                  properties={{ channel: "email" }}
                  variant="text"
                >
                  {contactEmail}
                </TrackedCTA>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.14em] text-subtle">
                LinkedIn
              </dt>
              <dd className="mt-2">
                <TrackedCTA
                  href={linkedInUrl}
                  event={analyticsEvents.linkedInVisited}
                  external
                  variant="text"
                >
                  LinkedIn
                </TrackedCTA>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.14em] text-subtle">
                GitHub
              </dt>
              <dd className="mt-2">
                <TrackedCTA href={githubUrl} external variant="text">
                  GitHub
                </TrackedCTA>
              </dd>
            </div>
          </dl>
        </div>
        <div className="lg:col-span-8">
          <h2 className="font-serif text-3xl tracking-tight">Send a note</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  );
}
