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

const rowClass =
  "flex min-h-10 items-center text-sm leading-5 text-muted transition-colors hover:text-foreground";

export function Footer() {
  const items = getNavItems();

  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-8 py-10 lg:grid-cols-12 lg:items-start lg:gap-x-8 lg:gap-y-0 lg:py-12">
          <div className="lg:col-span-4">
            <p className="flex min-h-10 items-center font-medium leading-5">
              {site.name}
            </p>
            <p className="flex min-h-10 items-center text-sm leading-5 text-muted">
              {site.role} at {site.employer}
            </p>
            <ul>
            <li>
              <a
                href={`mailto:${contactEmail}`}
                className={rowClass}
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
                className={rowClass}
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
                className={rowClass}
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
          <nav aria-label="Footer" className="lg:col-span-4 lg:col-start-5">
            <ul>
              {items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={rowClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="border-t border-line">
          <p className="py-5 text-xs text-subtle">© 2026 {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
