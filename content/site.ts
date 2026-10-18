import { writingPosts } from "@/content/writing";

export const site = {
  name: "Ebenezer Nkrumah",
  role: "Product Manager",
  employer: "Expedia Group",
  title: "Ebenezer Nkrumah | Product Manager",
  description:
    "Product manager building AI-powered consumer products across search, recommendations, personalization, product discovery, and consumer technology.",
  /**
   * Canonical origin. Set NEXT_PUBLIC_SITE_URL to the production origin,
   * with no trailing slash. Development uses localhost. Production does not:
   * a missing value omits absolute canonical, Open Graph, sitemap, and JSON-LD
   * URLs instead of advertising localhost.
   */
  url: resolveSiteUrl(),
} as const;

/**
 * NEXT_PUBLIC_SITE_URL wins when it is set. Otherwise localhost is only for
 * development. Production, including a Vercel or Railway production signal,
 * returns undefined so metadata cannot fall back to localhost.
 */
function resolveSiteUrl(): string | undefined {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (configured) return configured;

  const production =
    process.env.NODE_ENV === "production" ||
    process.env.VERCEL_ENV === "production" ||
    process.env.RAILWAY_ENVIRONMENT === "production" ||
    process.env.RAILWAY_ENVIRONMENT_NAME === "production";

  if (production) return undefined;
  return "http://localhost:3000";
}

export type NavItem = {
  href: string;
  label: string;
  variant?: "resume" | "contact";
};

const primaryPages: NavItem[] = [
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
];

const utilityPages: NavItem[] = [
  { href: "/resume", label: "Resume", variant: "resume" },
  { href: "/contact", label: "Contact", variant: "contact" },
];

/** From the résumé. */
export const contactEmail = "ebenezernka@gmail.com";

/** From the résumé. https, matching the public profile. */
export const linkedInUrl = "https://www.linkedin.com/in/ebenezernkrumaha/";

/** From the résumé PDF link annotation. */
export const githubUrl = "https://github.com/enkrumah";

/** Printed on the résumé. */
export const contactPhone = "669-321-8693";
export const contactPhoneHref = "tel:+16693218693";

export const resumeFile = {
  href: "/resume/ebenezer-nkrumah-resume.pdf",
  downloadName: "ebenezer-nkrumah-resume.pdf",
} as const;

export const topics = [
  "AI products",
  "Search",
  "Recommendations",
  "Personalization",
  "Product discovery",
  "Consumer technology",
  "Product management",
] as const;

export function getNavItems(): NavItem[] {
  const items: NavItem[] = [...primaryPages];

  if (writingPosts.length > 0) {
    items.push({ href: "/writing", label: "Writing" });
  }

  items.push(...utilityPages);

  return items;
}

/** Routes that exist today. Writing stays out until its pages exist. */
export function indexablePaths() {
  return [
    "/",
    ...primaryPages.map((page) => page.href),
    ...utilityPages.map((page) => page.href),
  ];
}

export function emailIsPlaceholder() {
  return contactEmail.endsWith("@example.com");
}

export function linkedInIsPlaceholder() {
  return linkedInUrl.includes("placeholder");
}
