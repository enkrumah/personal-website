import VybemovesCaseStudy from "@/content/projects/vybemoves.mdx";

/**
 * Add a case here when a new MDX study ships.
 * Keep the slug in sync with `caseStudy: true` on the project.
 */
const caseStudySlugs = new Set(["vybemoves"]);

export function hasCaseStudy(slug: string) {
  return caseStudySlugs.has(slug);
}

export function CaseStudyBody({ slug }: { slug: string }) {
  switch (slug) {
    case "vybemoves":
      return <VybemovesCaseStudy />;
    default:
      return null;
  }
}
