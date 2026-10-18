import { TrackedCTA } from "@/components/analytics/TrackedCTA";
import { Container } from "@/components/layout/Container";
import { CTA } from "@/components/ui/CTA";
import { home } from "@/content/home";
import { analyticsEvents } from "@/lib/analytics";

export function Hero() {
  return (
    <section>
      <Container className="pt-16 pb-16 sm:pt-24 sm:pb-20">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
          Ebenezer Nkrumah
        </p>
        <h1 className="mt-3 max-w-4xl font-serif text-[2.35rem] leading-[1.08] tracking-tight text-balance sm:text-6xl lg:text-[4.25rem]">
          {home.hero.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
          {home.hero.lede}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <CTA href="/work">{home.hero.workLabel}</CTA>
          <CTA href="/work/vybemoves" variant="secondary">
            {home.hero.productLabel}
          </CTA>
          <CTA href="/resume" variant="secondary">
            {home.hero.resumeLabel}
          </CTA>
          <TrackedCTA
            href="/contact"
            event={analyticsEvents.contactInitiated}
            properties={{ channel: "hero" }}
            variant="secondary"
          >
            {home.hero.contactLabel}
          </TrackedCTA>
        </div>
      </Container>
    </section>
  );
}
