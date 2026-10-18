import type { ReactNode } from "react";

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-14 border-y border-line py-10 font-serif text-4xl leading-[1.12] tracking-tight text-balance sm:my-20 sm:py-14 sm:text-5xl">
      {children}
    </blockquote>
  );
}
