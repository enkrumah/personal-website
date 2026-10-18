import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  action,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <header id={id} className={cn("scroll-mt-24 border-t border-line pt-8", className)}>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          {eyebrow ? (
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight text-balance text-foreground sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              {description}
            </p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </header>
  );
}
