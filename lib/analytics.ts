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
 *
 * Names already in use stay as they are:
 * - vybemoves_case_study_viewed → vybemoves_case_study_opened
 * - vybemoves_visited → vybemoves_product_visited
 */

export const analyticsEvents = {
  workViewed: "work_viewed",
  vybemovesCaseStudyOpened: "vybemoves_case_study_opened",
  vybemovesProductVisited: "vybemoves_product_visited",
  resumeViewed: "resume_viewed",
  resumeDownloaded: "resume_downloaded",
  linkedInVisited: "linkedin_visited",
  githubVisited: "github_visited",
  contactInitiated: "contact_initiated",
  contactSubmitted: "contact_submitted",
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
