/**
 * Homepage copy. Components render these strings; they do not author them.
 */
export const home = {
  hero: {
    title: "Product Manager building AI-powered consumer products.",
    lede: "I work on personalization and recommendations at Expedia Group, after product roles at ServiceNow and Microsoft and software engineering at Apple.",
    workLabel: "View My Work",
    downloadLabel: "Download Resume",
  },
  work: {
    eyebrow: "Work",
    title: "Selected work",
    description:
      "Products where search, recommendations, and taste are the experience.",
    action: "All work",
  },
  experience: {
    eyebrow: "Experience",
    title: "Where the work has been",
    description:
      "Expedia Group is current. ServiceNow, Microsoft, and Apple are the roles before it.",
    action: "View experience",
  },
  contact: {
    title: "Working on AI, search, or the products people choose with?",
    lede: "I am glad to talk about recommendations, consumer products, and product management.",
    action: "Contact",
  },
} as const;
