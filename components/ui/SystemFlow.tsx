import type { ArchitectureStep, SearchMode } from "@/content/types";

const rerankTitle = "LLM Reranking";
const personalizationTitle = "Personalization";
const resultsTitle = "Ranked Results";

/**
 * Shared retrieval, then the three search paths.
 * Step copy stays in the project data. This component only places it.
 */
export function SystemFlow({
  steps,
  modes,
  technologies,
  caption = "Three paths",
}: {
  steps: ArchitectureStep[];
  modes: SearchMode[];
  technologies?: string[];
  caption?: string;
}) {
  const shared = steps.filter(
    (step) =>
      step.title !== rerankTitle &&
      step.title !== personalizationTitle &&
      step.title !== resultsTitle,
  );
  const rerank = steps.find((step) => step.title === rerankTitle);
  const personalization = steps.find((step) => step.title === personalizationTitle);
  const results = steps.find((step) => step.title === resultsTitle);

  const branches: { mode: SearchMode; steps: ArchitectureStep[] }[] = [];

  for (const name of ["Quick Match", "Best Match", "Explore All"] as const) {
    const mode = modes.find((item) => item.name === name);
    if (!mode) continue;

    const branchSteps =
      name === "Best Match"
        ? [rerank, personalization, results].filter(
            (step): step is ArchitectureStep => Boolean(step),
          )
        : results
          ? [results]
          : [];

    branches.push({ mode, steps: branchSteps });
  }

  return (
    <figure className="mt-8 border border-line bg-card">
      <figcaption className="border-b border-line px-5 py-4 text-xs font-medium uppercase tracking-[0.16em] text-subtle">
        {caption}
      </figcaption>
      <ol>
        {shared.map((step, index) => (
          <li
            key={step.title}
            className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line px-5 py-4"
          >
            <span className="text-[11px] font-medium tabular-nums text-subtle">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="font-medium text-foreground">{step.title}</p>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="grid lg:grid-cols-3">
        {branches.map((branch) => (
          <div
            key={branch.mode.name}
            className="border-b border-line px-5 py-5 last:border-b-0 lg:border-r lg:border-b-0 lg:last:border-r-0"
          >
            <h3 className="font-serif text-2xl tracking-tight">{branch.mode.name}</h3>
            <p className="mt-2 text-sm leading-5 text-subtle">{branch.mode.method}</p>
            <p className="mt-3 text-sm leading-6 text-muted">{branch.mode.body}</p>
            {branch.steps.length > 0 ? (
              <ol className="mt-5 space-y-4 border-t border-line pt-5">
                {branch.steps.map((step) => (
                  <li key={step.title}>
                    <p className="font-medium text-foreground">{step.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{step.body}</p>
                  </li>
                ))}
              </ol>
            ) : null}
          </div>
        ))}
      </div>
      {technologies && technologies.length > 0 ? (
        <div className="border-t border-line px-5 py-4">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
            Technology
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <li
                key={technology}
                className="border border-line px-2.5 py-1 text-xs text-muted"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </figure>
  );
}
