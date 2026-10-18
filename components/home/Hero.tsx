import { Container } from "@/components/layout/Container";
import { ResumeActions } from "@/components/ui/ResumeActions";
import { CTA } from "@/components/ui/CTA";
import { home } from "@/content/home";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="border-b border-line">
      <Container className="pt-16 pb-20 sm:pt-24 sm:pb-28">
        <p className="text-sm font-medium tracking-tight">{site.name}</p>
        <h1 className="mt-6 max-w-4xl font-serif text-[2.6rem] leading-[1.08] tracking-tight text-balance sm:text-6xl lg:text-[4.25rem]">
          {home.hero.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
          {home.hero.lede}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <CTA href="/work">{home.hero.workLabel}</CTA>
          <ResumeActions
            includeView={false}
            downloadLabel={home.hero.downloadLabel}
            downloadVariant="secondary"
          />
        </div>
      </Container>
    </section>
  );
}
