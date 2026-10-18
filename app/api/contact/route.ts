import { processContactSubmission } from "@/lib/contact";
import {
  parseContactSubmission,
  type ContactResult,
} from "@/lib/contact-validation";

/**
 * HTTP seam for the contact form.
 * The form itself calls the server action in app/contact/actions.ts.
 * Both paths use processContactSubmission, so an email provider only needs
 * CONTACT_WEBHOOK_URL.
 */
function statusCode(result: ContactResult) {
  switch (result.status) {
    case "sent":
      return 200;
    case "unconfigured":
      return 503;
    case "invalid":
      return 422;
    case "error":
      return 502;
  }
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      {
        status: "invalid",
        errors: { message: "Enter a message." },
      } satisfies ContactResult,
      { status: 400 },
    );
  }

  const submission = parseContactSubmission(body);

  if (!submission) {
    return Response.json(
      {
        status: "invalid",
        errors: { message: "Enter a message." },
      } satisfies ContactResult,
      { status: 400 },
    );
  }

  const result = await processContactSubmission(submission);

  return Response.json(result, { status: statusCode(result) });
}
