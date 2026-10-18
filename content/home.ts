/**
 * Homepage copy. Components render these strings; they do not author them.
 * Microsoft figures are the résumé's, scoped to the connector and API work.
 */
export const home = {
  hero: {
    title: "I work on the moment someone has to choose.",
    lede: "Right now that is a trip with a place to stay already booked: what to do next, and what else it needs.",
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
    title: "Where I've worked",
    action: "Full experience",
    roles: [
      {
        company: "Expedia Group",
        role: "Product Manager III, Personalization & Recommendations",
        dates: "August 2026 to Present",
        body: "Since August 2026 I have worked on Trip Completion. Lodging is already booked. The product suggests things to do, and the other parts of the trip.",
      },
      {
        company: "ServiceNow",
        role: "Senior Product Manager Intern",
        dates: "May 2025 to August 2025",
        body: "An internship during business school. I worked on how we described Developer Sandboxes, and on what sales needed in order to explain it.",
      },
      {
        company: "Microsoft",
        role: "Technical Product Manager",
        dates: "April 2020 to February 2024",
        body: "I took developer connectors and APIs for Kafka, PostgreSQL, and Azure Data Explorer from the requirements through release. This was product work, and it came before business school.",
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
        body: "I worked on test automation and release operations for MacBook through the Apple Silicon transition.",
      },
    ],
  },
  vybemoves: {
    eyebrow: "Vybemoves",
    title: "A movie product I built on my own",
    description:
      "You can describe a feeling instead of a title. The case study is how the search decides what to show, and how I tell whether it worked.",
    action: "View the case study",
    href: "/work/vybemoves",
  },
  interests: {
    eyebrow: "Interests",
    title: "The problems I want to keep working on",
    body: "Search, recommendations, and personalization all ask the product to understand what someone meant. A plausible result is not enough. Someone has to be able to tell whether it got better.",
  },
  contact: {
    title: "If you work on how people choose, I would like to hear about it.",
    lede: "That includes search, recommendations, and the rest of consumer product work.",
    action: "Get in touch",
    resumeLabel: "Resume",
  },
} as const;
