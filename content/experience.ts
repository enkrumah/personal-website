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
    role: "Product Manager III, Personalization & Recommendations",
    location: "Seattle, WA",
    dates: "August 2026 to Present",
    current: true,
    preview:
      "Recommendations after lodging is booked: what to do next, and what else the trip needs.",
    summary:
      "Since August 2026 I have owned Trip Completion recommendations. Lodging is already booked. The product suggests things to do, and other parts of the trip. I work with engineering, design, data science, and analytics on what to show, how to rank it, and whether to keep it. I have also been asked to look past a single module at the rest of the trip.",
    highlights: [
      "Own Trip Completion recommendations, since August 2026, for travelers who have already booked lodging: things to do, and other parts of the trip.",
      "Work with engineering, design, data science, and analytics on what to show, how to rank it, and how to judge whether it helped.",
      "Asked to look past a single recommendation module at the rest of the trip.",
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
      "I defined how Developer Sandboxes should be positioned, and built one place for sales to find pricing, demos, FAQs, and the technical documentation.",
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
      "I took developer-facing connectors and APIs for Kafka, PostgreSQL, and Azure Data Explorer from the requirements through release, and worked on go-to-market for Azure Stream Analytics. Adoption of the connectors and APIs reached 150 enterprise customers, with 30% usage growth in eight months.",
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
      "I built test automation, scripts, and data dashboards for MacBook QA, and ran bug tracking and release operations across MacBook Air, Pro, and Mini during the Apple Silicon transition.",
    highlights: [
      "Built test automation frameworks, scripts, and data dashboards for MacBook QA, scaling device coverage from 1 to 5 configurations and improving defect resolution visibility during the Apple Silicon transition.",
      "Ran bug tracking and release operations across MacBook Air, Pro, and Mini during the Apple Silicon transition, and worked with Engineering Program Managers on fixes and release readiness.",
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
      "I built automated reliability tests for macOS and iOS. That work contributed to moving from Core Data to CloudKit. I also built ad-hoc and regression tests with Apple engineers.",
    highlights: [
      "Developed automated reliability testing for macOS and iOS, contributing to the adoption of CloudKit over Core Data and a 20% performance improvement.",
      "Worked with Apple engineers on ad-hoc and regression testing, improving data integrity and bug isolation.",
    ],
    focus: ["macOS", "iOS", "CloudKit", "Reliability testing"],
  },
];
