import {
  hasFieldErrors,
  validateContactFields,
  type ContactResult,
  type ContactSubmission,
} from "@/lib/contact-validation";

/**
 * Contact delivery.
 *
 * PLACEHOLDER: Set CONTACT_WEBHOOK_URL to an endpoint that accepts
 * JSON { name, email, message, source }. That can be an email provider,
 * a form service, or a future API you own. Until it is set, submissions
 * are validated and not delivered.
 *
 * Spam prevention today:
 * - Honeypot field (`website`). Filled submissions are acknowledged and dropped.
 * - Minimum time on the form, so instant bot posts are rejected.
 *
 * Add rate limiting or a captcha beside this function when a provider is connected.
 * Do not add a database for that unless you need one.
 */

const MIN_ELAPSED_MS = 750;

export async function processContactSubmission(
  input: ContactSubmission,
): Promise<ContactResult> {
  const website = input.website?.trim() ?? "";

  if (website) {
    return { status: "sent" };
  }

  const errors = validateContactFields(input);

  if (hasFieldErrors(errors)) {
    return { status: "invalid", errors };
  }

  if ((input.elapsedMs ?? 0) < MIN_ELAPSED_MS) {
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
        name: input.name.trim(),
        email: input.email.trim(),
        message: input.message.trim(),
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
