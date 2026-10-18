import { Container } from "@/components/layout/Container";
import { CTA } from "@/components/ui/CTA";
import { home } from "@/content/home";

export function ContactBand() {
  return (
    <section>
      <Container>
        <div className="border-t border-line py-16 sm:py-20">
          <h2 className="max-w-2xl font-serif text-4xl tracking-tight text-balance sm:text-5xl">
            {home.contact.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {home.contact.lede}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <CTA href="/contact">{home.contact.action}</CTA>
            <CTA href="/resume" variant="text">
              {home.contact.resumeLabel}
            </CTA>
          </div>
        </div>
      </Container>
    </section>
  );
}
