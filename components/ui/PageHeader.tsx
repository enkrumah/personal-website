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
    <header className="pb-12 pt-16 sm:pt-20">
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-3 max-w-4xl font-serif text-4xl tracking-tight text-balance sm:text-6xl">
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
