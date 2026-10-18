import type { ComponentType } from "react";
import VybemovesCaseStudy from "@/content/projects/vybemoves.mdx";

/**
 * One registry for shipped MDX studies.
 * A project with caseStudy: true still 404s until its component is listed here.
 */
const caseStudies: Record<string, ComponentType> = {
  vybemoves: VybemovesCaseStudy,
};

export function hasCaseStudy(slug: string) {
  return Object.prototype.hasOwnProperty.call(caseStudies, slug);
}

export function CaseStudyBody({ slug }: { slug: string }) {
  const Study = caseStudies[slug];
  if (!Study) return null;
  return <Study />;
}
