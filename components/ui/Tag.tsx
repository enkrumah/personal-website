import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center border border-line px-2 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
      {children}
    </span>
  );
}
