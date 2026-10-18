import { Tag } from "@/components/ui/Tag";
import type { Experience } from "@/content/experience";

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <article
      className="border-t border-line py-12"
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
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
