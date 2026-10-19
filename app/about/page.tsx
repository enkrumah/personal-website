import { TrackedCTA } from "@/components/analytics/TrackedCTA";
import { Container } from "@/components/layout/Container";
import { CTA } from "@/components/ui/CTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { about } from "@/content/about";
import { education } from "@/content/resume";
import { analyticsEvents } from "@/lib/analytics";
import { createMetadata } from "@/lib/seo";
import Image from "next/image";

export const metadata = createMetadata({
  title: "About",
  description:
    "About Ebenezer Nkrumah, a product manager whose path runs through engineering, business, and consumer products — from Apple and Microsoft to Expedia Group, and the products he builds.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Container className="pb-24">
      <header className="grid items-start gap-8 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:grid-cols-12 lg:gap-8">
        <figure className="lg:col-span-4">
          <div className="relative aspect-[4/5] overflow-hidden bg-highlight">
            <Image
              src="/images/ebenezer-nkrumah.jpg"
              alt="Ebenezer Nkrumah"
              fill
              preload
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="object-cover object-[center_22%]"
            />
          </div>
        </figure>
        <div className="lg:col-span-8">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
            About
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight text-balance sm:text-6xl">
            I like understanding how things work — and why people choose what
            they choose.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted">
            {about.intro}
          </p>
        </div>
      </header>

      <section aria-labelledby="about-path">
        <SectionHeader
          id="about-path"
          eyebrow="My path"
          title="Engineering taught me how things work. Product taught me to ask what should exist."
        />
        <div className="mt-8 max-w-2xl space-y-6">
          {about.path.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[1.0625rem] leading-7 text-pretty text-muted"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section aria-labelledby="about-product">
        <SectionHeader
          id="about-product"
          className="mt-16 sm:mt-20"
          eyebrow="Product"
          title="I want to be close to the user and close to the system."
          description={about.productIntro}
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {about.principles.map((principle) => (
            <li key={principle.title} className="border border-line bg-card p-6 sm:p-8">
              <h3 className="font-serif text-2xl tracking-tight text-balance">
                {principle.title}
              </h3>
              <p className="mt-3 text-[1.0625rem] leading-7 text-pretty text-muted">
                {principle.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="about-building">
        <SectionHeader
          id="about-building"
          className="mt-16 sm:mt-20"
          eyebrow="Building"
          title="Sometimes the best way to understand a product problem is to build it."
        />
        <div className="mt-8 lg:grid lg:grid-cols-12 lg:gap-12">
          <p className="max-w-2xl text-[1.0625rem] leading-7 text-pretty text-muted lg:col-span-7">
            {about.building.lead}
          </p>
          <blockquote className="mt-8 border border-line bg-highlight px-6 py-8 sm:px-8 sm:py-10 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 lg:mt-0">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
              {about.building.promptLabel}
            </p>
            <p className="mt-4 font-serif text-2xl leading-snug tracking-tight text-balance italic sm:text-3xl">
              {about.building.prompt}
            </p>
          </blockquote>
          <div className="mt-8 max-w-2xl lg:col-span-7">
            <p className="text-[1.0625rem] leading-7 text-pretty text-muted">
              {about.building.detail}
            </p>
            <div className="mt-8">
              <TrackedCTA
                href="/work/vybemoves"
                event={analyticsEvents.vybemovesCaseStudyOpened}
                properties={{ source: "about" }}
                variant="text"
              >
                Explore Vybemovies <span aria-hidden="true">→</span>
              </TrackedCTA>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="about-curiosity">
        <SectionHeader
          id="about-curiosity"
          className="mt-16 sm:mt-20"
          eyebrow="Curiosity"
          title="I'm drawn to products that have to understand people."
        />
        <div className="mt-8 max-w-2xl space-y-6">
          {about.curiosity.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[1.0625rem] leading-7 text-pretty text-muted"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section aria-labelledby="about-outside">
        <SectionHeader
          id="about-outside"
          className="mt-16 sm:mt-20"
          eyebrow="Outside work"
          title="Curiosity doesn't stop at software."
          description={about.outsideIntro}
        />
        <dl className="mt-10 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {about.outside.map((item) => (
            <div key={item.title} className="max-w-md">
              <dt className="font-serif text-2xl tracking-tight">{item.title}</dt>
              <dd className="mt-3 text-[1.0625rem] leading-7 text-pretty text-muted">
                {item.body}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="about-education">
        <SectionHeader
          id="about-education"
          className="mt-16 sm:mt-20"
          eyebrow="Education"
          title="Education"
        />
        <ol className="mt-8 divide-y divide-line border-t border-line">
          {education.map((item) => (
            <li key={item.school} className="py-5">
              <p className="font-medium">{item.school}</p>
              <p className="mt-1 text-sm text-muted">
                {item.credential}
                <span aria-hidden> · </span>
                {item.dates}
                <span aria-hidden> · </span>
                {item.location}
              </p>
              {item.notes.length > 0 ? (
                <ul className="mt-3 space-y-1 text-sm leading-6 text-muted">
                  {item.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="about-toward" className="mt-16 border-t border-line pt-16 sm:mt-20 sm:pt-20">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
          What I&apos;m working toward
        </p>
        <h2
          id="about-toward"
          className="mt-4 max-w-2xl font-serif text-2xl leading-snug tracking-tight text-balance sm:text-3xl"
        >
          {about.closing}
        </h2>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
          <CTA href="/work" variant="text">
            See my work <span aria-hidden="true">→</span>
          </CTA>
          <TrackedCTA
            href="/contact"
            event={analyticsEvents.contactInitiated}
            properties={{ channel: "about" }}
            variant="text"
          >
            Get in touch <span aria-hidden="true">→</span>
          </TrackedCTA>
        </div>
      </section>
    </Container>
  );
}
