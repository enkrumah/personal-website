import { Container } from "@/components/layout/Container";
import { CTA } from "@/components/ui/CTA";

export function ContactBand() {
  return (
    <section className="border-t border-line">
      <Container className="py-20 sm:py-28">
        <h2 className="max-w-2xl font-serif text-4xl tracking-tight text-balance sm:text-5xl">
          Working on AI, search, or the products people choose with?
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          I am glad to talk about recommendations, consumer products, and product
          management.
        </p>
        <div className="mt-8">
          <CTA href="/contact">Contact</CTA>
        </div>
      </Container>
    </section>
  );
}
