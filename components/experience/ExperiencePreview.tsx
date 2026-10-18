import type { Experience } from "@/content/experience";

export function ExperiencePreview({ items }: { items: Experience[] }) {
  return (
    <ol className="mt-10 border-t border-line">
      {items.map((item) => (
        <li
          key={item.id}
          className="grid gap-2 border-b border-line py-6 sm:grid-cols-12 sm:gap-8"
        >
          <div className="sm:col-span-4">
            <p className="font-medium">{item.company}</p>
            <p className="mt-1 text-sm text-subtle">{item.dates}</p>
          </div>
          <div className="sm:col-span-8">
            <p className="text-sm text-muted">
              {item.role}
              {item.current ? (
                <span className="ml-3 text-xs font-medium uppercase tracking-[0.14em] text-subtle">
                  Current
                </span>
              ) : null}
            </p>
            {item.current && item.preview ? (
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{item.preview}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
