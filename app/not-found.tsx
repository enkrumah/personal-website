import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { CTA } from "@/components/ui/CTA";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: `Page not found | ${site.name}` },
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">404</p>
      <h1 className="mt-3 font-serif text-5xl tracking-tight">This page is not here.</h1>
      <p className="mt-4 max-w-md text-muted">The link may be out of date.</p>
      <div className="mt-8">
        <CTA href="/">Back home</CTA>
      </div>
    </Container>
  );
}
