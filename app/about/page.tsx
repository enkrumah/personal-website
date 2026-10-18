import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { about } from "@/content/about";
import { education } from "@/content/resume";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description:
    "About Ebenezer Nkrumah, a product manager focused on AI-powered consumer products, search, recommendations, and personalization.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Container className="pb-24">
      <PageHeader eyebrow="About" title="Close to the decision, and the system." description={about.intro} />
      <SectionHeader className="mt-4" eyebrow="Journey" title="How the work connects" />
      <p className="mt-5 max-w-2xl text-[1.0625rem] leading-7 text-pretty text-muted">
        {about.journey}
      </p>
      <SectionHeader className="mt-20" eyebrow="Approach" title="How I practice product management" />
      <ol className="mt-8 max-w-2xl list-decimal space-y-4 pl-5 text-[1.0625rem] leading-7 text-muted">
        {about.approach.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
      <SectionHeader className="mt-20" eyebrow="Focus" title="Why search and recommendations" />
      <p className="mt-5 max-w-2xl text-[1.0625rem] leading-7 text-pretty text-muted">
        {about.focus}
      </p>
      <SectionHeader className="mt-20" eyebrow="Education" title="Education" />
      <ol className="mt-8 max-w-2xl divide-y divide-line border-y border-line">
        {education.map((item) => (
          <li key={item.school} className="py-5">
            <p className="font-medium">{item.school}</p>
            <p className="mt-1 text-sm text-muted">
              {item.credential}
              <span aria-hidden> · </span>
              {item.dates}
              <span aria-hidden> · </span>
              {item.location}
            </p>
            {item.notes.length > 0 ? (
              <ul className="mt-3 space-y-1 text-sm leading-6 text-muted">
                {item.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </Container>
  );
}
