import {
  contactEmail,
  contactPhone,
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
    url: site.url,
    worksFor: {
      "@type": "Organization",
      name: "Expedia Group",
    },
    knowsAbout: [...topics],
  };

  if (!emailIsPlaceholder()) {
    data.email = contactEmail;
    data.telephone = contactPhone;
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
      url: site.url,
    },
  };
}
