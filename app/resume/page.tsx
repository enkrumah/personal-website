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
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

const companySites: Record<string, string> = {
  "Expedia Group": "https://www.expediagroup.com",
  ServiceNow: "https://www.servicenow.com",
  Microsoft: "https://www.microsoft.com",
  Apple: "https://www.apple.com",
};

function ContactRow({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <li className="grid grid-cols-[0.875rem_minmax(0,1fr)] items-center gap-x-2.5">
      <span className="text-foreground" aria-hidden>
        {icon}
      </span>
      {children}
    </li>
  );
}

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
              <ContactRow icon={<Phone className="h-3.5 w-3.5" />}>
                <a href={contactPhoneHref} className="hover:underline">
                  {contactPhone}
                </a>
              </ContactRow>
              <ContactRow icon={<Mail className="h-3.5 w-3.5" />}>
                <TrackedCTA
                  href={`mailto:${contactEmail}`}
                  event={analyticsEvents.contactInitiated}
                  properties={{ channel: "resume" }}
                  variant="text"
                  className="h-5 px-0! py-0! text-sm font-normal"
                >
                  {contactEmail}
                </TrackedCTA>
              </ContactRow>
              <ContactRow
                icon={
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
                    <path
                      fill="currentColor"
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                }
              >
                <TrackedCTA
                  href={linkedInUrl}
                  event={analyticsEvents.linkedInVisited}
                  external
                  showExternalIcon={false}
                  variant="text"
                  className="h-5 px-0! py-0! text-sm font-normal"
                >
                  linkedin.com/in/ebenezernkrumaha
                </TrackedCTA>
              </ContactRow>
              <ContactRow
                icon={
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
                    <path
                      fill="currentColor"
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    />
                  </svg>
                }
              >
                <TrackedCTA
                  href={githubUrl}
                  event={analyticsEvents.githubVisited}
                  external
                  showExternalIcon={false}
                  variant="text"
                  className="h-5 px-0! py-0! text-sm font-normal"
                >
                  github.com/enkrumah
                </TrackedCTA>
              </ContactRow>
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
                    {companySites[item.company] ? (
                      <a
                        href={companySites[item.company]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-line underline-offset-4 hover:decoration-foreground"
                      >
                        {item.company}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      item.company
                    )}
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
