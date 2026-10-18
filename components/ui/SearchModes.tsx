import type { SearchMode } from "@/content/types";

export function SearchModes({ modes }: { modes: SearchMode[] }) {
  return (
    <div className="mt-8 grid gap-4 lg:grid-cols-3">
      {modes.map((mode) => (
        <article key={mode.name} className="flex flex-col border border-line bg-card p-5">
          <h3 className="font-serif text-2xl tracking-tight">{mode.name}</h3>
          <p className="mt-3 text-sm leading-5 text-subtle">{mode.method}</p>
          <p className="mt-4 text-sm leading-6 text-muted">{mode.body}</p>
        </article>
      ))}
    </div>
  );
}
