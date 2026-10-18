import {
  hasFieldErrors,
  parseContactSubmission,
  validateContactFields,
  type ContactResult,
} from "@/lib/contact-validation";

/**
 * Contact delivery.
 *
 * Set CONTACT_WEBHOOK_URL to an endpoint that accepts
 * JSON { name, email, message, source }. Until it is set, submissions
 * are validated and not delivered.
 *
 * Spam prevention today:
 * - Honeypot field (`website`). Filled submissions are acknowledged and dropped.
 * - Minimum time on the form, so instant bot posts are rejected.
 */

const MIN_ELAPSED_MS = 750;

export async function processContactSubmission(input: unknown): Promise<ContactResult> {
  const submission = parseContactSubmission(input);

  if (!submission) {
    return {
      status: "invalid",
      errors: { message: "Enter a message." },
    };
  }

  const website = submission.website?.trim() ?? "";

  if (website) {
    return { status: "sent" };
  }

  const errors = validateContactFields(submission);

  if (hasFieldErrors(errors)) {
    return { status: "invalid", errors };
  }

  if ((submission.elapsedMs ?? 0) < MIN_ELAPSED_MS) {
    return {
      status: "error",
      message: "Please wait a moment and try again.",
    };
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (!webhook) {
    return { status: "unconfigured" };
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: submission.name.trim(),
        email: submission.email.trim(),
        message: submission.message.trim(),
        source: "portfolio",
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      return {
        status: "error",
        message: "The message could not be sent. Please email me directly.",
      };
    }

    return { status: "sent" };
  } catch {
    return {
      status: "error",
      message: "The message could not be sent. Please email me directly.",
    };
  }
}
