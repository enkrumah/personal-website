import {
  contactEmail,
  emailIsPlaceholder,
  githubUrl,
  linkedInIsPlaceholder,
  linkedInUrl,
  site,
  topics,
} from "@/content/site";
import type { Project } from "@/content/projects";

export function personJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.description,
    ...(site.url ? { url: site.url } : {}),
    worksFor: {
      "@type": "Organization",
      name: site.employer,
    },
    knowsAbout: [...topics],
  };

  if (!emailIsPlaceholder()) {
    data.email = contactEmail;
  }

  const sameAs = [githubUrl];
  if (!linkedInIsPlaceholder()) {
    sameAs.unshift(linkedInUrl);
  }
  data.sameAs = sameAs;

  return data;
}

export function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: project.name,
    description: project.summary,
    url: project.productUrl,
    applicationCategory: "EntertainmentApplication",
    author: {
      "@type": "Person",
      name: site.name,
      ...(site.url ? { url: site.url } : {}),
    },
  };
}
