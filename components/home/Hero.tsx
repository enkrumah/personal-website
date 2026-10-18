import { Container } from "@/components/layout/Container";
import { CTA } from "@/components/ui/CTA";
import { home } from "@/content/home";

export function Hero() {
  return (
    <section>
      <Container className="pt-12 sm:pt-16">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
          Ebenezer Nkrumah
        </p>
        <h1 className="mt-3 max-w-4xl font-serif text-[2.35rem] leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {home.hero.title}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-muted">
          {home.hero.lede}
        </p>
        <div className="mt-8">
          <CTA href={home.hero.caseStudyHref}>{home.hero.caseStudyLabel}</CTA>
        </div>
        <dl className="mt-10 grid gap-x-8 gap-y-8 border-t border-line py-8 sm:grid-cols-2 lg:grid-cols-4">
          {home.proof.map((item) => (
            <div key={item.label}>
              <dt className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
                {item.label}
              </dt>
              <dd className="mt-3 font-medium text-foreground">{item.title}</dd>
              <dd className="mt-1 text-sm leading-6 text-muted">{item.detail}</dd>
              {"note" in item && item.note ? (
                <dd className="mt-3 text-sm leading-6 text-subtle">{item.note}</dd>
              ) : null}
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
