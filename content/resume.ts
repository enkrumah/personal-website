export const resumeSummary =
  "Product manager at Expedia Group, working on recommendations for trips that are already booked. Before that, technical product management at Microsoft, where connectors and APIs reached 150 enterprise customers and usage grew 30% in eight months, and software engineering at Apple. A product internship at ServiceNow during business school.";

export const skillGroups = [
  {
    label: "Product",
    items: [
      "Product Strategy",
      "Roadmap Development",
      "0-to-1 Product Development",
      "Rapid Prototyping",
      "Customer Discovery",
      "A/B Testing & Experimentation",
      "AI/ML Product Development",
      "Search & Recommendation",
      "AI Evaluation",
      "KPI & Metrics Design",
      "Data Analytics",
      "APIs & Platform Products",
      "Go-to-Market Strategy",
      "Cross-Functional Leadership",
    ],
  },
  {
    label: "Technical tools",
    items: [
      "Python",
      "SQL",
      "PostgreSQL",
      "pgvector",
      "OpenAI API",
      "FastAPI",
      "React",
      "Git",
      "Figma",
      "Cursor",
      "Claude Code",
    ],
  },
] as const;

export const education = [
  {
    school: "Emory University, Goizueta Business School",
    location: "Atlanta, GA",
    credential: "M.B.A., Strategy, Finance",
    dates: "May 2026",
    notes: [] as string[],
  },
  {
    school: "Fisk University",
    location: "Nashville, TN",
    credential: "B.A., Mathematics and Computer Science",
    dates: "May 2017",
    notes: [
      "Erastus Milo Cravath Full-Ride Presidential Scholarship",
      "Phi Beta Kappa Honor Society, Mortar Board Honor Society, and the Talented Tenth Leadership Program",
    ],
  },
] as const;

export const certifications = [
  {
    name: "Leadership and Management Certificate Program",
    issuer: "Wharton Online",
    dates: "September 2019",
  },
  {
    name: "Certificate in Project Management",
    issuer: "Cornell University",
    dates: "July 2019",
  },
  {
    name: "HBX CORe: Business Analytics, Economics for Managers, and Financial Accounting",
    issuer: "Harvard Business School Online",
    dates: "May 2019",
  },
] as const;

export const resumeProject = {
  name: "Vybemoves",
  detail: "AI movie search and recommendation app",
  links: [
    { label: "vybemoves.com", href: "https://vybemoves.com" },
    { label: "GitHub", href: "https://github.com/enkrumah/movie-recs-v2" },
  ],
  highlights: [
    "Conceived, built, and launched Vybemoves, an AI-powered movie discovery platform enabling natural-language search across a catalog of 900K+ movies.",
    "Built a multi-stage AI-native search and recommendation pipeline using OpenAI embeddings, pgvector semantic search, hybrid retrieval, personalization signals, and GPT-4o mini reranking on a FastAPI, React, and PostgreSQL stack.",
    "Designed search quality evaluation frameworks and A/B tests across Fast, Smart, and Hybrid search modes, using NDCG, Precision, Recall, MRR, ground-truth evaluation, and LLM-as-a-Judge scoring to measure retrieval and ranking.",
  ],
} as const;
