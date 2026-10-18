/**
 * About-page narrative.
 * Education is still read from content/resume.ts so schools, degrees,
 * dates, and honors stay in one place.
 */
export const about = {
  intro:
    "I'm a product manager with a background in mathematics, computer science, engineering, and business. My career has taken me from building and testing technology at Apple, to developer and cloud products at Microsoft, to business school, and now to consumer recommendations and personalization at Expedia Group.",
  path: [
    "I studied mathematics and computer science at Fisk University. The two still sit together in how I work. I want to be precise about what a system is doing, and precise about the question it is supposed to answer.",
    "Apple was the first job. I interned in reliability testing across macOS and iOS, then worked on MacBook through the Apple Silicon transition, close to how a product is built, tested, and shipped. Microsoft moved me toward technical product management and the products developers use: APIs, connectors, and Azure Stream Analytics.",
    "What I wanted next was the decision itself: who it is for, what should be built, and whether it worked once engineering, design, and data had a hand in it. I went to Emory's Goizueta Business School for an MBA in strategy and finance, and during school I was a senior product manager intern at ServiceNow.",
    "Those were not unrelated jobs. The line runs from understanding systems, to building them, to deciding what they should do. I am now a product manager at Expedia Group on Trip Completion, working on personalization and recommendations that help travelers complete and enhance their trips.",
  ],
  productIntro:
    "The products I care about are the ones where a person's behavior, a product decision, and the system underneath all have to be held at once.",
  principles: [
    {
      title: "Start with the decision.",
      body: "Understand what the person is actually trying to accomplish before deciding what technology belongs in the solution.",
    },
    {
      title: "Understand the system.",
      body: "A product manager does not need to be the engineer implementing every component. Enough technical understanding to reason about architecture, constraints, failure modes, and tradeoffs is what makes the judgment better.",
    },
    {
      title: "Measure what actually happened.",
      body: "A plausible product idea is not the same as a useful product. Experimentation, evaluation, and what people actually do should determine whether the product is working.",
    },
    {
      title: "Build when possible.",
      body: "Building products makes me better at product management. It forces decisions around scope, quality, latency, cost, the experience, evaluation, and what to do first, rather than leaving those ideas abstract.",
    },
  ],
  building: {
    lead: "I built Vybemoves because movie discovery is an interesting search and recommendation problem. A traditional catalog search works when someone knows what they want. It is much worse when the intent is harder to name.",
    detail:
      "Building it meant thinking through semantic retrieval, embeddings, vector search, and LLM reranking, then personalization and how to judge a result. That includes evaluation, NDCG, using an LLM as a judge, experimentation, and the tradeoff between relevance and latency. The case study is where the system is written down.",
    promptLabel: "The request",
    prompt: "Something dark and cerebral, but not depressing.",
  },
  curiosity: [
    "Search, recommendations, personalization, and the models behind them are interesting for a plain reason. A person may type only a few words, or take a few actions, and the product still has to infer the intent, find what might fit, rank it, and decide what to show.",
    "That is where human behavior, product design, machine learning, information retrieval, experimentation, and judgment meet. I want to understand both the decision a person is making and the system that produced the answer.",
  ],
  outside: [
    {
      title: "Cycling",
      body: "I ride both a road bike and a commuter bike. It is a way to explore a city while doing something physical.",
    },
    {
      title: "Art",
      body: "I am increasingly interested in art, especially the history and the ideas behind important works, rather than only looking at them.",
    },
    {
      title: "Watches",
      body: "Mechanical watches, for the design, the engineering, the history, and the way an object can become attached to a particular chapter of a person's life.",
    },
    {
      title: "Cooking",
      body: "I enjoy cooking and experimenting with food, including Ghanaian food and other cuisines.",
    },
  ],
  closing:
    "I want to keep building products where knowing how the system works makes the product decision better. Search, recommendations, and personalization are where I know how to do that.",
} as const;
