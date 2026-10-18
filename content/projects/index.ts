import { analyticsEvents, type AnalyticsEventName } from "@/lib/analytics";

export type Project = {
  slug: string;
  name: string;
  summary: string;
  tags: string[];
  featured: boolean;
  caseStudy: boolean;
  productUrl?: string;
  /**
   * PLACEHOLDER: Point imageSrc at a file in /public/images when a screenshot exists.
   * Leave it unset to keep the designed placeholder frame.
   */
  imageSrc?: string;
  imageAlt: string;
  productVisitedEvent?: AnalyticsEventName;
  caseStudyOpenedEvent?: AnalyticsEventName;
};

export const projects: Project[] = [
  {
    slug: "vybemoves",
    name: "Vybemoves",
    summary:
      "An AI-powered movie discovery and recommendation application. Search in natural language, then refine what to watch through taste, lists, and where to watch.",
    tags: ["AI", "Search", "Recommendations"],
    featured: true,
    caseStudy: true,
    productUrl: "https://vybemoves.com",
    imageAlt: "Placeholder frame for a Vybemoves product screenshot.",
    productVisitedEvent: analyticsEvents.vybemovesProductVisited,
    caseStudyOpenedEvent: analyticsEvents.vybemovesCaseStudyOpened,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
