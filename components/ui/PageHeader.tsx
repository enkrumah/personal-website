import { cn } from "@/lib/cn";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="pt-16 pb-16 sm:pt-20 sm:pb-20">
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
          {eyebrow}
        </p>
      ) : null}
      <h1
        className={cn(
          "max-w-4xl font-serif text-4xl tracking-tight text-balance sm:text-6xl",
          eyebrow && "mt-3",
        )}
      >
        {title}
      </h1>
      {description ? (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted">
          {description}
        </p>
      ) : null}
    </header>
  );
}
