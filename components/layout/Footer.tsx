"use client";

import { track, analyticsEvents } from "@/lib/analytics";
import {
  contactEmail,
  getNavItems,
  githubUrl,
  linkedInUrl,
  site,
} from "@/content/site";
import Link from "next/link";

const linkClass =
  "text-sm leading-5 text-muted transition-colors hover:text-foreground";

export function Footer() {
  const items = getNavItems();

  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 gap-x-12 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline">
          <div>
            <p className="text-sm font-medium leading-5">{site.name}</p>
            <p className="mt-1 text-sm leading-5 text-muted">
              {site.role} at {site.employer}
            </p>
            <ul className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className={linkClass}
                  onClick={() =>
                    track(analyticsEvents.contactInitiated, { channel: "email" })
                  }
                >
                  {contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={linkedInUrl}
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track(analyticsEvents.linkedInVisited)}
                >
                  LinkedIn
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href={githubUrl}
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track(analyticsEvents.githubVisited)}
                >
                  GitHub
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
          <nav aria-label="Footer" className="mt-8 sm:mt-0">
            <ul className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
              {items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 border-t border-line pt-5 text-xs text-subtle">
          © 2026 {site.name}
        </p>
      </div>
    </footer>
  );
}
