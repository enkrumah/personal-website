import { Container } from "@/components/layout/Container";
import { ResumeActions } from "@/components/ui/ResumeActions";
import { CTA } from "@/components/ui/CTA";

export function Hero() {
  return (
    <section className="border-b border-line">
      <Container className="pt-16 pb-20 sm:pt-24 sm:pb-28">
        <p className="text-sm font-medium tracking-tight">Ebenezer Nkrumah</p>
        <h1 className="mt-6 max-w-4xl font-serif text-[2.6rem] leading-[1.08] tracking-tight text-balance sm:text-6xl lg:text-[4.25rem]">
          Product Manager building AI-powered consumer products.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
          I work on personalization and recommendations at Expedia Group,
          after product roles at ServiceNow and Microsoft and software
          engineering at Apple.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <CTA href="/work">View My Work</CTA>
          <ResumeActions
            includeView={false}
            downloadLabel="Download Resume"
            downloadVariant="secondary"
          />
        </div>
      </Container>
    </section>
  );
}
