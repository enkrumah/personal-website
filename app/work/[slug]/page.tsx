import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyBody, hasCaseStudy } from "@/components/projects/CaseStudyBody";
import { CaseStudyLayout } from "@/components/projects/CaseStudyLayout";
import { getProject, projects } from "@/content/projects";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects
    .filter((project) => project.caseStudy)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return createMetadata({
    title: project.name,
    description: project.summary,
    path: `/work/${project.slug}`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || !project.caseStudy || !hasCaseStudy(slug)) {
    notFound();
  }

  return (
    <CaseStudyLayout project={project}>
      <CaseStudyBody slug={slug} />
    </CaseStudyLayout>
  );
}
