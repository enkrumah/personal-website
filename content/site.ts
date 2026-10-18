import { writingPosts } from "@/content/writing";

export const site = {
  name: "Ebenezer Nkrumah",
  role: "Product Manager",
  title: "Ebenezer Nkrumah | Product Manager",
  description:
    "Product manager building AI-powered consumer products across search, recommendations, personalization, product discovery, and consumer technology.",
  /**
   * PLACEHOLDER: Set NEXT_PUBLIC_SITE_URL to the production custom domain
   * before launch. Canonical URLs, Open Graph, the sitemap, and structured
   * data all use this value.
   */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
    /\/$/,
    "",
  ),
} as const;

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

export type NavItem = {
  href: string;
  label: string;
  variant?: "resume" | "contact";
};

export function getNavItems(): NavItem[] {
  const items: NavItem[] = [
    { href: "/work", label: "Work" },
    { href: "/experience", label: "Experience" },
    { href: "/about", label: "About" },
  ];

  if (writingPosts.length > 0) {
    items.push({ href: "/writing", label: "Writing" });
  }

  items.push(
    { href: "/resume", label: "Resume", variant: "resume" },
    { href: "/contact", label: "Contact", variant: "contact" },
  );

  return items;
}

export function emailIsPlaceholder() {
  return contactEmail.endsWith("@example.com");
}

export function linkedInIsPlaceholder() {
  return linkedInUrl.includes("placeholder");
}
