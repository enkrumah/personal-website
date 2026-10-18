import type {
  ArchitectureStep,
  DetailItem,
  SearchMode,
} from "@/content/types";

/**
 * Structured Vybemoves case-study content.
 * Narrative prose lives in vybemoves.mdx.
 * Search this file for PLACEHOLDER before launch.
 */

export const features: DetailItem[] = [
  {
    title: "Natural-language movie search",
    body: "Ask in a sentence, the way you would ask a person.",
  },
  {
    title: "Semantic search",
    body: "Matches meaning and intent, not only titles and keywords.",
  },
  {
    title: "Voice search",
    body: "Speak the request instead of typing it.",
  },
  {
    title: "Surprise Me",
    body: "A signed-in pick from well-rated films that match the taste profile, excluding titles already seen, liked, or disliked.",
  },
  {
    title: "Likes and dislikes",
    body: "Direct signals for what to show more of, and what to leave out.",
  },
  {
    title: "Personalized recommendations",
    body: "Results that can change as a taste profile takes shape.",
  },
  {
    title: "Taste profiles",
    body: "A picture of preference built from the signals you give.",
  },
  {
    title: "Watchlists",
    body: "Saved is the watch-later list. Watched titles stay out of recommendations unless they are also rated or liked.",
  },
  {
    title: "Custom collections",
    body: "Groupings you define, beyond a single watchlist.",
  },
  {
    title: "Movie metadata",
    body: "People, genres, and release context alongside the title.",
  },
  {
    title: "Trailers",
    body: "A way to check tone before committing to a film.",
  },
  {
    title: "Where to watch",
    body: "Availability information next to the recommendation.",
  },
];

export const searchModes: SearchMode[] = [
  {
    name: "Quick Match",
    method: "Fast mode. One embedded query, then enrichment.",
    body: "A single semantic query against the smaller indexed set. No multi-query expansion and no language-model pass. This is the speed path.",
  },
  {
    name: "Best Match",
    method: "Smart mode. Multi-query retrieval, expansion, and LLM reranking.",
    body: "Several query variations are fused, then GPT-4o-mini reorders the top candidates. This is the path that spends time on nuance, including what to avoid.",
  },
  {
    name: "Explore All",
    method: "Hybrid mode. Intent-specific retrieval across the wider catalog.",
    body: "Uses the detected intent, such as a similar title, a person, a genre, or a mood, to search beyond the smaller index, across a catalog of 900,000+ films.",
  },
];

export const architectureSteps: ArchitectureStep[] = [
  {
    title: "User Query",
    body: "A typed or spoken request, including open-ended intent.",
  },
  {
    title: "Query Processing",
    body: "A rule-based pass labels the intent as similarity, person, genre, mood, or general, and pulls out titles, people, genres, years, and quality filters. It does not call a language model.",
  },
  {
    title: "Embeddings",
    body: "OpenAI embeddings turn the query into a vector.",
  },
  {
    title: "PostgreSQL / pgvector semantic retrieval",
    body: "Similar titles are retrieved from the vector index.",
  },
  {
    title: "Candidate Generation",
    body: "Retrieval returns a set large enough to rank and small enough to judge.",
  },
  {
    title: "Metadata / Filtering",
    body: "Catalog facts, including data from TMDB and OMDB, constrain the set.",
  },
  {
    title: "LLM Reranking",
    body: "Best Match asks GPT-4o-mini to reorder the top candidates against the nuance of the query. Quick Match and Explore All skip this pass.",
  },
  {
    title: "Personalization",
    body: "For a signed-in person, likes and ratings update a taste vector, with more recent likes weighted more. Dislikes are hidden. Smart mode applies this after reranking.",
  },
  {
    title: "Ranked Results",
    body: "The list a person actually sees, ready for trailers, metadata, and where to watch.",
  },
];

export const technologies = [
  "React",
  "FastAPI",
  "PostgreSQL",
  "pgvector",
  "OpenAI embeddings",
  "LLM reranking",
  "TMDB",
  "OMDB",
  "Railway",
];

export const evaluation: DetailItem[] = [
  {
    title: "Offline evaluation",
    body: "Changes to retrieval and ranking can be checked against a fixed set of queries before anything ships.",
  },
  {
    title: "NDCG, Precision, Recall, and MRR",
    body: "Ranking and retrieval metrics used with ground-truth evaluation. Scores are not published here.",
  },
  {
    title: "LLM-as-judge",
    body: "A language model scores how well a result set fits the intent of the query, alongside the offline metrics.",
  },
  {
    title: "Search quality analysis",
    body: "Review of where semantic retrieval, metadata, and reranking helped, and where they missed the intent.",
  },
  {
    title: "Online experimentation",
    body: "A/B testing on the live product when a change is ready to meet real use.",
  },
];

export const decisions: DetailItem[] = [
  {
    title: "Relevance vs latency",
    body: "Three modes ship together. Quick Match stays on one query. Best Match adds multi-query expansion and GPT-4o-mini reranking. Explore All searches the wider catalog with intent-specific retrieval. The person chooses how long the answer may take.",
  },
  {
    title: "Quick Match vs Best Match",
    body: "Quick Match trusts the vector index and does not call the chat model. Best Match spends a language-model pass on distinctions an embedding can miss, including a request not to be depressing. Both are available; neither is hidden.",
  },
  {
    title: "Semantic retrieval vs metadata constraints",
    body: "Intent detection extracts year ranges and quality filters before the query is embedded. TMDB and OMDB supply catalog facts and ratings. Explore All is the path that leaves the smaller index for the 900,000+ catalog.",
  },
  {
    title: "Personalization",
    body: "Likes and star ratings update a taste vector, with more recent likes counted more heavily. Dislikes are removed from results. Watched titles stay out of recommendations unless they are also rated or liked. In Best Match this pass runs after reranking.",
  },
  {
    title: "Cold start",
    body: "Search, mood browse, and the public rows work without an account. Surprise Me and the Recommended for You row wait until someone is signed in and has a taste vector.",
  },
  {
    title: "Ranking",
    body: "Best Match is four stages: retrieve, rank, LLM, then personalize. The rank stage combines similarity, quality, genre, recency, and popularity.",
  },
  {
    title: "Recommendation quality",
    body: "Surprise Me only picks from well-rated films that match the taste profile. Mood rows are precomputed so a feeling can be browsed without a fresh model call.",
  },
];

/**
 * No usage, retention, or experiment readout is published in the résumé or the
 * product repository. This section stays qualitative on purpose.
 */
export const results: DetailItem[] = [
  {
    title: "What is public",
    body: "Vybemoves is live at vybemoves.com. The product repository describes the three search modes, personalization, and an evaluation setup that reports NDCG. Usage, retention, and experiment scores are not published here.",
  },
  {
    title: "Where it started",
    body: "An earlier version retrieved with FAISS over MovieLens, ranked with several signals, and explained results in a Streamlit app. The current product is the React, FastAPI, and PostgreSQL system above.",
  },
];
