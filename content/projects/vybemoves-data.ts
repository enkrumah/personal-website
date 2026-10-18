import type {
  ArchitectureStep,
  DetailItem,
  SearchMode,
} from "@/content/types";

/**
 * Structured Vybemoves case-study content.
 * Narrative prose lives in vybemoves.mdx.
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
    body: "Speak the request. OpenAI Whisper transcribes it, in every search mode.",
  },
  {
    title: "Mood browse",
    body: "Precomputed rows for a feeling, including eighteen moods, so browsing one does not call the model.",
  },
  {
    title: "Why this result",
    body: "A signed-in pick can say why it appeared, such as because you liked a title.",
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
    method: "Fast. One query against 571 indexed films.",
    body: "Semantic search only, about 100 milliseconds. No language-model pass.",
  },
  {
    name: "Best Match",
    method: "Smart. Multi-query retrieval, then GPT-4o-mini.",
    body: "About one to two seconds. The model reorders the survivors and is not folded into the ranking weights.",
  },
  {
    name: "Explore All",
    method: "Hybrid. Local search plus live TMDB. Sign-in required.",
    body: "About half a second across 900,000+ films. Local similarity counts more than the live catalog search.",
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
    body: "OpenAI text-embedding-3-large turns the query into a vector.",
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
    body: "GPT-4o-mini returns a best-to-worst order of the survivors. That score is not mixed into the weights. Quick Match and Explore All skip this pass.",
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

export const evaluationLoop: ArchitectureStep[] = [
  {
    title: "Query set",
    body: "A fixed collection of intents, including ones that are hard to phrase as a title or a genre.",
  },
  {
    title: "System results",
    body: "The films the current retrieval and ranking actually return.",
  },
  {
    title: "Relevance evaluation",
    body: "A judgment of whether each result fits the intent. A person can make it, and so can a language model used as a judge.",
  },
  {
    title: "Ranking metrics",
    body: "NDCG, precision, recall, and MRR describe the ordering. Scores are not published here.",
  },
  {
    title: "Failure analysis",
    body: "Where a result missed the mood, a constraint, an exclusion, or the person's taste.",
  },
  {
    title: "Product and model changes",
    body: "Retrieval, ranking, reranking, metadata, or the experience changes because of what failed.",
  },
  {
    title: "Re-evaluation",
    body: "The same query set is run again. Evaluation stays inside product development.",
  },
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
    body: "Intent detection extracts year ranges and quality filters before the query is embedded. Explore All requires sign-in and mixes the 571-film index with live TMDB search across 900,000+ films.",
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
    body: "Best Match is four stages: retrieve, rank, LLM, then personalize. The rank stage weights similarity 45%, genre 18%, quality 15%, recency 12%, and keywords 10%.",
  },
  {
    title: "Recommendation quality",
    body: "Surprise Me only picks from well-rated films that match the taste profile. Mood rows are precomputed so a feeling can be browsed without a fresh model call.",
  },
];

/**
 * No usage, retention, or experiment readout is published on the product.
 * This section stays qualitative on purpose.
 *
 * TODO(screenshots): public/images only has vybemoves-search-results.jpeg,
 * used at the top of the case study. Still missing: voice search, a
 * search-mode comparison, movie detail with trailer and where-to-watch,
 * likes and the taste profile, Surprise Me, and watchlists or collections.
 * Do not add a stand-in image.
 */
export const building: DetailItem[] = [
  {
    title: "What the build forced",
    body: "Once a query had to come back as films someone might watch, I had to choose what was good enough, how fast it had to be, what it cost, and what to leave out.",
  },
  {
    title: "What is public",
    body: "Vybemoves is live at vybemoves.com. Usage, retention, and experiment scores are not published here.",
  },
  {
    title: "Where it started",
    body: "An earlier version retrieved with FAISS over MovieLens, ranked with several signals, and explained results in a Streamlit app. The current product is the React, FastAPI, and PostgreSQL system above.",
  },
];
