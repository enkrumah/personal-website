"use client";

import { useEffect } from "react";
import { track, type AnalyticsEventName } from "@/lib/analytics";

export function AnalyticsEvent({ event }: { event: AnalyticsEventName }) {
  useEffect(() => {
    const key = `portfolio:${event}`;

    try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, "1");
    } catch {
      // Storage can be blocked. Still record the view.
    }

    track(event);
  }, [event]);

  return null;
}
