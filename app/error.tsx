"use client";

import { Container } from "@/components/layout/Container";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container className="py-24">
      <h1 className="font-serif text-4xl tracking-tight">Something went wrong.</h1>
      <p className="mt-4 max-w-md text-muted">Reload the page, or try again.</p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-highlight hover:text-foreground"
      >
        Try again
      </button>
    </Container>
  );
}
