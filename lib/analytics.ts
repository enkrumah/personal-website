/**
 * Vendor-agnostic analytics.
 *
 * Call sites stay stable. Connect a provider from a client script:
 *
 * window.__portfolioAnalytics = {
 *   track(event, properties) {
 *     // Forward to your vendor.
 *   },
 * };
 *
 * Every event is also dispatched as "portfolio:analytics" on window.
 */

export const analyticsEvents = {
  vybemovesCaseStudyOpened: "vybemoves_case_study_opened",
  vybemovesProductVisited: "vybemoves_product_visited",
  resumeViewed: "resume_viewed",
  resumeDownloaded: "resume_downloaded",
  contactInitiated: "contact_initiated",
  linkedInVisited: "linkedin_visited",
} as const;

export type AnalyticsEventName =
  (typeof analyticsEvents)[keyof typeof analyticsEvents];

export type AnalyticsProperties = Record<string, string | number | boolean>;

export function track(
  event: AnalyticsEventName,
  properties?: AnalyticsProperties,
) {
  if (typeof window === "undefined") return;

  const detail = { event, properties };

  window.dispatchEvent(new CustomEvent("portfolio:analytics", { detail }));

  try {
    window.__portfolioAnalytics?.track(event, properties);
  } catch {
    // Analytics must never break the page.
  }
}
