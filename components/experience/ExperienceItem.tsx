import { Tag } from "@/components/ui/Tag";
import type { Experience } from "@/content/experience";
import { cn } from "@/lib/cn";

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <article
      className={cn(
        "border-t border-line",
        experience.current
          ? "-mx-6 bg-highlight px-6 py-14 sm:py-16"
          : "py-12",
      )}
    >
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <h2
            className={cn(
              "font-serif tracking-tight",
              experience.current ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl",
            )}
          >
            {experience.company}
          </h2>
          <p className="mt-3 text-sm text-muted">{experience.role}</p>
          <p className="mt-2 text-sm text-subtle">
            {experience.dates}
            <span aria-hidden> · </span>
            {experience.location}
          </p>
          {experience.current ? (
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-subtle">
              Current
            </p>
          ) : null}
        </div>
        <div className="lg:col-span-8">
          <p className="text-lg leading-relaxed text-pretty text-muted">
            {experience.summary}
          </p>
          {experience.focus ? (
            <ul className="mt-6 flex flex-wrap gap-2">
              {experience.focus.map((item) => (
                <li key={item}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </article>
  );
}
