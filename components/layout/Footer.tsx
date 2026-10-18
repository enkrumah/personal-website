import { TrackedCTA } from "@/components/analytics/TrackedCTA";
import {
  analyticsEvents,
} from "@/lib/analytics";
import {
  contactEmail,
  getNavItems,
  githubUrl,
  linkedInUrl,
  site,
} from "@/content/site";
import Link from "next/link";

export function Footer() {
  const items = getNavItems();

  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 sm:flex-row sm:justify-between">
        <div>
          <p className="font-medium">{site.name}</p>
          <p className="mt-1 text-sm text-muted">
            {site.role} at {site.employer}
          </p>
          <div className="mt-5 flex flex-col items-start gap-2 text-sm">
            <TrackedCTA
              href={`mailto:${contactEmail}`}
              event={analyticsEvents.contactInitiated}
              properties={{ channel: "email" }}
              variant="text"
            >
              {contactEmail}
            </TrackedCTA>
            <TrackedCTA
              href={linkedInUrl}
              event={analyticsEvents.linkedInVisited}
              external
              variant="text"
            >
              LinkedIn
            </TrackedCTA>
            <TrackedCTA
              href={githubUrl}
              event={analyticsEvents.githubVisited}
              external
              variant="text"
            >
              GitHub
            </TrackedCTA>
          </div>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mx-auto w-full max-w-6xl px-6 pb-8">
        <p className="text-xs text-subtle">© 2026 {site.name}</p>
      </div>
    </footer>
  );
}
