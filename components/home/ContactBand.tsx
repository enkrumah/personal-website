import { Container } from "@/components/layout/Container";
import { CTA } from "@/components/ui/CTA";
import { home } from "@/content/home";

export function ContactBand() {
  return (
    <section className="border-t border-line">
      <Container className="py-20 sm:py-28">
        <h2 className="max-w-2xl font-serif text-4xl tracking-tight text-balance sm:text-5xl">
          {home.contact.title}
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          {home.contact.lede}
        </p>
        <div className="mt-8">
          <CTA href="/contact">{home.contact.action}</CTA>
        </div>
      </Container>
    </section>
  );
}
