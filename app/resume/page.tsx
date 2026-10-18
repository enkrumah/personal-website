import { TrackedCTA } from "@/components/analytics/TrackedCTA";
import { Container } from "@/components/layout/Container";
import { CompanyMark } from "@/components/resume/CompanyMark";
import { ResumeActions } from "@/components/ui/ResumeActions";
import { experience } from "@/content/experience";
import {
  certifications,
  education,
  resumeProject,
  resumeSummary,
  skillGroups,
} from "@/content/resume";
import {
  contactEmail,
  contactPhone,
  contactPhoneHref,
  githubUrl,
  linkedInUrl,
  site,
} from "@/content/site";
import { analyticsEvents } from "@/lib/analytics";
import { createMetadata } from "@/lib/seo";
import Image from "next/image";

export const metadata = createMetadata({
  title: "Resume",
  description:
    "Résumé for Ebenezer Nkrumah, a product manager focused on AI-powered consumer products, search, and recommendations.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <Container className="pb-24">
      <article>
        <header className="grid items-start gap-8 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:grid-cols-12 lg:gap-8">
          <figure className="lg:col-span-4">
            <div className="relative aspect-[5/4] overflow-hidden bg-highlight lg:aspect-[4/5]">
              <Image
                src="/images/ebenezer-nkrumah.jpg"
                alt="Ebenezer Nkrumah"
                fill
                preload
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-[center_22%]"
              />
            </div>
          </figure>
          <div className="lg:col-span-8">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
              Résumé
            </p>
            <h1 className="mt-3 font-serif text-4xl tracking-tight text-balance sm:text-6xl">
              Ebenezer A. Nkrumah
            </h1>
            <p className="mt-3 text-lg text-muted">{site.role}</p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted">
              {resumeSummary}
            </p>
            <ul className="mt-6 space-y-1.5 text-sm">
              <li>
                <a href={contactPhoneHref} className="hover:underline">
                  {contactPhone}
                </a>
              </li>
              <li>
                <TrackedCTA
                  href={`mailto:${contactEmail}`}
                  event={analyticsEvents.contactInitiated}
                  properties={{ channel: "resume" }}
                  variant="text"
                  className="text-sm"
                >
                  {contactEmail}
                </TrackedCTA>
              </li>
              <li>
                <TrackedCTA
                  href={linkedInUrl}
                  event={analyticsEvents.linkedInVisited}
                  external
                  showExternalIcon={false}
                  variant="text"
                  className="text-sm"
                >
                  linkedin.com/in/ebenezernkrumaha
                </TrackedCTA>
              </li>
              <li>
                <TrackedCTA
                  href={githubUrl}
                  event={analyticsEvents.githubVisited}
                  external
                  showExternalIcon={false}
                  variant="text"
                  className="text-sm"
                >
                  github.com/enkrumah
                </TrackedCTA>
              </li>
            </ul>
            <div className="mt-8">
              <ResumeActions />
            </div>
          </div>
        </header>

        <section className="border-t border-line pt-16 sm:pt-20" aria-labelledby="resume-experience">
          <h2
            id="resume-experience"
            className="font-serif text-3xl tracking-tight"
          >
            Experience
          </h2>
          <ol className="mt-6">
            {experience.map((item) => (
              <li
                key={item.id}
                className="grid gap-3 border-t border-line py-8 sm:grid-cols-12 sm:gap-8"
              >
                <div className="sm:col-span-4">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-subtle">
                    {item.dates}
                  </p>
                  <p className="mt-2 flex items-center gap-2 font-medium">
                    <CompanyMark company={item.company} />
                    {item.company}
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.location}</p>
                </div>
                <div className="sm:col-span-8">
                  <h3 className="font-serif text-2xl tracking-tight">
                    {item.role}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-sm leading-6 text-pretty text-muted"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="mt-16 border-t border-line pt-16 sm:mt-20 sm:pt-20"
          aria-labelledby="resume-education"
        >
          <h2
            id="resume-education"
            className="font-serif text-3xl tracking-tight"
          >
            Education
          </h2>
          <ol className="mt-6">
            {education.map((item) => (
              <li
                key={item.school}
                className="grid gap-3 border-t border-line py-8 sm:grid-cols-12 sm:gap-8"
              >
                <div className="sm:col-span-4">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-subtle">
                    {item.dates}
                  </p>
                  <p className="mt-2 text-sm text-muted">{item.location}</p>
                </div>
                <div className="sm:col-span-8">
                  <h3 className="font-serif text-2xl tracking-tight">
                    {item.school}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{item.credential}</p>
                  {item.notes.length > 0 ? (
                    <ul className="mt-4 space-y-2">
                      {item.notes.map((note) => (
                        <li key={note} className="text-sm leading-6 text-muted">
                          {note}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="mt-16 border-t border-line pt-16 sm:mt-20 sm:pt-20"
          aria-labelledby="resume-skills"
        >
          <h2 id="resume-skills" className="font-serif text-3xl tracking-tight">
            Skills
          </h2>
          <div className="mt-6 space-y-8">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-subtle">
                  {group.label}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
                  {group.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="mt-16 border-t border-line pt-16 sm:mt-20 sm:pt-20"
          aria-labelledby="resume-project"
        >
          <h2
            id="resume-project"
            className="font-serif text-3xl tracking-tight"
          >
            Selected project
          </h2>
          <div className="mt-6 border-t border-line py-8">
            <h3 className="font-serif text-2xl tracking-tight">
              {resumeProject.name}
            </h3>
            <p className="mt-2 text-sm text-muted">{resumeProject.detail}</p>
            <p className="mt-3 text-sm">
              {resumeProject.links.map((link, index) => (
                <span key={link.href}>
                  {index > 0 ? <span className="text-subtle"> · </span> : null}
                  <TrackedCTA
                    href={link.href}
                    event={
                      link.href.includes("github.com")
                        ? analyticsEvents.githubVisited
                        : analyticsEvents.vybemovesProductVisited
                    }
                    external
                    showExternalIcon={false}
                    variant="text"
                    className="text-sm"
                  >
                    {link.label}
                  </TrackedCTA>
                </span>
              ))}
            </p>
            <ul className="mt-4 max-w-3xl space-y-3">
              {resumeProject.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="text-sm leading-6 text-pretty text-muted"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="mt-16 border-t border-line pt-16 sm:mt-20 sm:pt-20"
          aria-labelledby="resume-certifications"
        >
          <h2
            id="resume-certifications"
            className="font-serif text-3xl tracking-tight"
          >
            Certifications
          </h2>
          <ul className="mt-6 border-t border-line">
            {certifications.map((item) => (
              <li
                key={item.name}
                className="grid gap-2 border-b border-line py-5 sm:grid-cols-12 sm:gap-8"
              >
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-subtle sm:col-span-4">
                  {item.dates}
                </p>
                <div className="sm:col-span-8">
                  <p className="font-medium">{item.name}</p>
                  <p className="mt-1 text-sm text-muted">{item.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </Container>
  );
}
