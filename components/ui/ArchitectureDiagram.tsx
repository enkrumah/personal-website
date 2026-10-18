import type { ArchitectureStep } from "@/content/types";
import { cn } from "@/lib/cn";

export function ArchitectureDiagram({
  steps,
  technologies,
}: {
  steps: ArchitectureStep[];
  technologies: string[];
}) {
  return (
    <figure className="mt-8 border border-line bg-card">
      <figcaption className="border-b border-line px-5 py-4 text-xs font-medium uppercase tracking-[0.16em] text-subtle">
        System flow
      </figcaption>
      <ol className="ml-7 border-l border-line py-3 sm:ml-9">
        {steps.map((step, index) => {
          const last = index === steps.length - 1;

          return (
            <li key={step.title} className="relative py-4 pr-5 pl-8 sm:pl-10">
              <span
                className={cn(
                  "absolute top-4 -left-4 flex h-8 w-8 items-center justify-center border text-[11px] font-medium tabular-nums",
                  last
                    ? "border-foreground bg-foreground text-background"
                    : "border-line bg-card text-muted",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-medium text-foreground">{step.title}</p>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-muted">{step.body}</p>
            </li>
          );
        })}
      </ol>
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
    </figure>
  );
}
