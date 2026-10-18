import type { Experience } from "@/content/experience";

export function ExperiencePreview({ items }: { items: Experience[] }) {
  return (
    <ol className="mt-10 border-l border-line">
      {items.map((item) => (
        <li key={item.id} className="relative py-6 pl-6">
          <span
            className="absolute top-8 -left-[5px] h-2 w-2 bg-foreground"
            aria-hidden
          />
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p className="font-medium">{item.company}</p>
            <p className="text-sm text-muted">{item.role}</p>
            <p className="text-sm text-subtle">{item.dates}</p>
            {item.current ? (
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-subtle">
                Current
              </p>
            ) : null}
          </div>
          {item.preview ? (
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{item.preview}</p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
