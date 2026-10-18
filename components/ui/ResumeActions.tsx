"use client";

import { Download } from "lucide-react";
import { ctaClassName, type CtaVariant } from "@/components/ui/CTA";
import { resumeFile } from "@/content/site";
import { analyticsEvents, track } from "@/lib/analytics";

export function ResumeActions({
  includeView = true,
  downloadLabel = "Download PDF",
  downloadVariant = "secondary",
  viewVariant = "primary",
}: {
  includeView?: boolean;
  downloadLabel?: string;
  downloadVariant?: CtaVariant;
  viewVariant?: CtaVariant;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {includeView ? (
        <a
          href={resumeFile.href}
          target="_blank"
          rel="noopener noreferrer"
          className={ctaClassName(viewVariant)}
          onClick={() => track(analyticsEvents.resumeViewed)}
        >
          View Resume
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ) : null}
      <a
        href={resumeFile.href}
        download={resumeFile.downloadName}
        className={ctaClassName(downloadVariant)}
        onClick={() => track(analyticsEvents.resumeDownloaded)}
      >
        <Download className="h-4 w-4" aria-hidden />
        {downloadLabel}
      </a>
    </div>
  );
}
