import { analyticsEvents, type AnalyticsEventName } from "@/lib/analytics";

export type Project = {
  slug: string;
  name: string;
  summary: string;
  tags: string[];
  featured: boolean;
  caseStudy: boolean;
  productUrl?: string;
  /** Label for the live-product link. */
  visitLabel?: string;
  /** Public path, such as /images/name.jpeg. Omit it to use the designed frame. */
  imageSrc?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt: string;
  /** Shown beside the product link at the end of a case study. */
  visitNote?: string;
  productVisitedEvent?: AnalyticsEventName;
  caseStudyOpenedEvent?: AnalyticsEventName;
};

export const projects: Project[] = [
  {
    slug: "vybemoves",
    name: "Vybemovies",
    summary:
      "An AI-powered movie discovery application, live at vybemoves.com. Search in natural language, then refine what to watch through taste, lists, and where to watch.",
    tags: ["AI", "Search", "Recommendations"],
    featured: true,
    caseStudy: true,
    productUrl: "https://vybemoves.com",
    visitLabel: "Try Vybemovies",
    imageSrc: "/images/vybemovies-results-hero.jpg",
    imageWidth: 971,
    imageHeight: 572,
    imageAlt:
      "Vybemovies results for a heartwarming animated movie for the family, in Best Match, with an explanation and matching films.",
    visitNote:
      "Live at vybemoves.com. Search, recommendations, and the feel of discovery are easier to judge in the interface than in a write-up.",
    productVisitedEvent: analyticsEvents.vybemovesProductVisited,
    caseStudyOpenedEvent: analyticsEvents.vybemovesCaseStudyOpened,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
