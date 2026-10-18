"use client";

import { CTA, type CtaVariant } from "@/components/ui/CTA";
import {
  track,
  type AnalyticsEventName,
  type AnalyticsProperties,
} from "@/lib/analytics";
import type { ReactNode } from "react";

export function TrackedCTA({
  event,
  properties,
  children,
  ...props
}: {
  event?: AnalyticsEventName;
  properties?: AnalyticsProperties;
  href: string;
  children: ReactNode;
  variant?: CtaVariant;
  external?: boolean;
  download?: string;
  className?: string;
}) {
  return (
    <CTA
      {...props}
      onClick={() => {
        if (event) track(event, properties);
      }}
    >
      {children}
    </CTA>
  );
}
