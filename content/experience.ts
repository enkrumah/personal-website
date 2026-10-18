export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  dates: string;
  current?: boolean;
  /** One sentence for the homepage. */
  preview: string;
  summary: string;
  highlights: string[];
  focus?: string[];
};

/**
 * Reverse chronological, matching the résumé.
 * Wording stays inside what that document states.
 */
export const experience: Experience[] = [
  {
    id: "expedia",
    company: "Expedia Group",
    role: "Product Manager, Personalization & Recommendations",
    location: "Seattle, WA",
    dates: "August 2026 to Present",
    current: true,
    preview:
      "Trip Completion personalization and recommendations: discovery, ranking, and experimentation.",
    summary:
      "Owns product strategy and the roadmap for Trip Completion personalization and recommendations, so travelers can discover and add relevant products and services to trips they have already booked. Partners with engineering, data science, and analytics on discovery, ranking, and experimentation.",
    highlights: [
      "Own product strategy and roadmap for Trip Completion personalization and recommendations, helping travelers discover and add relevant products and services to their booked trips.",
      "Partner with engineering, data science, and analytics to develop and evaluate recommendation experiences across discovery, ranking, and experimentation.",
    ],
    focus: [
      "Trip Completion",
      "Personalization",
      "Recommendations",
      "Ranking",
      "Experimentation",
    ],
  },
  {
    id: "servicenow",
    company: "ServiceNow",
    role: "Senior Product Manager Intern",
    location: "Santa Clara, CA",
    dates: "May 2025 to August 2025",
    preview:
      "Positioning, go-to-market, and enablement for Developer Sandboxes.",
    summary:
      "Defined positioning and go-to-market for Developer Sandboxes, AI-ready automated environments for app development, and built an enablement hub that brought pricing, demos, FAQs, and technical documentation into one place for sales.",
    highlights: [
      "Defined positioning and GTM strategy for Developer Sandboxes, AI-ready automated environments for app development, creating discovery and overview assets that reduced onboarding friction and clarified product value in automation and AI provisioning.",
      "Built a globally adopted enablement hub that consolidated pricing, demos, FAQs, and technical documentation for Developer Sandboxes, increasing asset discoverability and giving sales a single source of truth for positioning, objections, and use-case fit.",
    ],
    focus: ["Developer Sandboxes", "Go-to-market", "Enablement"],
  },
  {
    id: "microsoft",
    company: "Microsoft",
    role: "Technical Product Manager",
    location: "San Jose, CA",
    dates: "April 2020 to February 2024",
    preview:
      "Developer connectors and APIs for Kafka, PostgreSQL, and Azure Data Explorer, plus Azure Stream Analytics.",
    summary:
      "Led developer-facing connectors and APIs for Kafka, PostgreSQL, and Azure Data Explorer from PRD through release, and go-to-market for Azure Stream Analytics. Adoption reached 150 enterprise customers, with 30% usage growth in eight months.",
    highlights: [
      "Led end-to-end development and launch of developer-facing connectors and APIs for Kafka, PostgreSQL, and Azure Data Explorer, partnering with engineering from PRD through release.",
      "Grew adoption to 150 enterprise customers and 30% usage growth in eight months by using product telemetry, customer feedback, and growth metrics to prioritize roadmap investments.",
      "Prioritized and scoped capabilities including managed identities, private endpoint connections, and role-based access control (RBAC) to address enterprise security and connectivity requirements.",
      "Drove GTM and post-launch customer success for Azure Stream Analytics, coordinating sales, marketing, and engineering to accelerate adoption, resolve high-severity issues, and improve retention.",
    ],
    focus: [
      "Kafka",
      "PostgreSQL",
      "Azure Data Explorer",
      "Azure Stream Analytics",
      "APIs",
    ],
  },
  {
    id: "apple",
    company: "Apple",
    role: "Software Engineer",
    location: "Cupertino, CA",
    dates: "August 2017 to April 2020",
    preview:
      "Test automation and release operations for MacBook through the Apple Silicon transition.",
    summary:
      "Built test automation, scripts, and data dashboards for MacBook QA, and ran bug tracking and release operations across MacBook Air, Pro, and Mini during the Apple Silicon transition.",
    highlights: [
      "Built test automation frameworks, scripts, and data dashboards for MacBook QA, scaling device coverage from 1 to 5 configurations and improving defect resolution visibility during the Apple Silicon transition.",
      "Managed bug tracking and release operations across MacBook Air, Pro, and Mini and partnered with Engineering Program Managers to prioritize fixes and release readiness for the largest Mac architecture transition in over a decade.",
    ],
    focus: ["MacBook QA", "Test automation", "Apple Silicon"],
  },
  {
    id: "apple-intern",
    company: "Apple",
    role: "Software Engineering Intern",
    location: "Cupertino, CA",
    dates: "May 2016 to August 2016",
    preview: "Automated reliability testing for macOS and iOS.",
    summary:
      "Developed automated reliability testing for macOS and iOS, including work that contributed to adopting CloudKit over Core Data, and built ad-hoc and regression testing with Apple engineers.",
    highlights: [
      "Developed automated reliability testing for macOS and iOS, contributing to the strategic adoption of CloudKit over Core Data, improving performance by 20%.",
      "Collaborated with Apple engineers to implement ad-hoc and regression testing frameworks, enhancing data integrity and bug isolation across Apple’s ecosystem.",
    ],
    focus: ["macOS", "iOS", "CloudKit", "Reliability testing"],
  },
];
