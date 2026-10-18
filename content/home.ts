/**
 * Homepage copy. Components render these strings; they do not author them.
 * Microsoft figures are the résumé's, scoped to the connector and API work.
 */
export const home = {
  hero: {
    title:
      "Product Manager building recommendation and personalization experiences at Expedia Group.",
    lede: "The work is consumer discovery, search, recommendations, experimentation, and AI-powered products.",
    caseStudyLabel: "View the case study",
    caseStudyHref: "/work/vybemoves",
  },
  proof: [
    {
      label: "Current",
      title: "Expedia Group",
      detail: "Product Manager, recommendations and personalization",
    },
    {
      label: "Previously",
      title: "Microsoft",
      detail: "Technical Product Manager",
    },
    {
      label: "Foundation",
      title: "Apple",
      detail: "Software Engineer",
    },
    {
      label: "Education",
      title: "M.B.A., Strategy, Finance",
      detail: "Emory University, Goizueta Business School",
      note: "B.A., Mathematics and Computer Science, Fisk University",
    },
  ],
  experience: {
    eyebrow: "Experience",
    title: "The roles, briefly",
    action: "Full experience",
    roles: [
      {
        company: "Expedia Group",
        role: "Product Manager III, Personalization & Recommendations",
        dates: "August 2026 to Present",
        body: "Trip Completion recommendations after lodging is already booked: things to do, and other parts of the trip. The scope, since August 2026, is discovery, ranking, and experimentation.",
      },
      {
        company: "ServiceNow",
        role: "Senior Product Manager Intern",
        dates: "May 2025 to August 2025",
        body: "A product management internship during business school. Positioning and go-to-market for Developer Sandboxes.",
      },
      {
        company: "Microsoft",
        role: "Technical Product Manager",
        dates: "April 2020 to February 2024",
        body: "Developer-facing connectors and APIs for Kafka, PostgreSQL, and Azure Data Explorer, from the requirements through release. This was technical product management before business school.",
        metrics: [
          {
            value: "150 enterprise customers",
            label: "Adoption of those connectors and APIs.",
          },
          {
            value: "30% usage growth in eight months",
            label: "Usage growth for that same connector and API work.",
          },
        ],
      },
      {
        company: "Apple",
        role: "Software Engineer",
        dates: "August 2017 to April 2020",
        body: "Test automation and release operations for MacBook through the Apple Silicon transition.",
      },
    ],
  },
  vybemoves: {
    eyebrow: "Vybemoves",
    title: "An independent search and recommendation product",
    description:
      "A movie discovery product I designed and built, for the moment someone knows the feeling and not the title. The case study is the system: retrieval, ranking, evaluation, and what to ship first.",
    action: "View the case study",
    href: "/work/vybemoves",
  },
  interests: {
    eyebrow: "Interests",
    title: "The problems I want to keep working on",
    body: "I'm particularly drawn to consumer products where understanding intent matters: search, recommendations, personalization, discovery, and AI-powered experiences where quality has to be measured rather than assumed.",
  },
  contact: {
    title: "If you are working on search, recommendations, or how people choose, I would like to hear about it.",
    lede: "I am glad to talk about recommendations, consumer products, and product management.",
    action: "Get in touch",
    resumeLabel: "Resume",
  },
} as const;
