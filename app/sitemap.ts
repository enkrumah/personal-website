import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/work", "/experience", "/about", "/resume", "/contact"];

  const staticEntries = routes.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));

  const projectEntries = projects
    .filter((project) => project.caseStudy)
    .map((project) => ({
      url: absoluteUrl(`/work/${project.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [...staticEntries, ...projectEntries];
}
