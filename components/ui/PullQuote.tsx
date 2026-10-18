import type { ReactNode } from "react";

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="mt-8 max-w-2xl border-l border-foreground pl-5 font-serif text-2xl leading-snug text-foreground sm:text-3xl">
      {children}
    </blockquote>
  );
}
