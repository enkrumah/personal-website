import { processContactSubmission } from "@/lib/contact";
import type { ContactResult, ContactSubmission } from "@/lib/contact-validation";

/**
 * Future HTTP seam for the contact form.
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

  if (!body || typeof body !== "object") {
    return Response.json(
      {
        status: "invalid",
        errors: { message: "Enter a message." },
      } satisfies ContactResult,
      { status: 400 },
    );
  }

  const record = body as Record<string, unknown>;
  const submission: ContactSubmission = {
    name: typeof record.name === "string" ? record.name : "",
    email: typeof record.email === "string" ? record.email : "",
    message: typeof record.message === "string" ? record.message : "",
    website: typeof record.website === "string" ? record.website : "",
    elapsedMs: typeof record.elapsedMs === "number" ? record.elapsedMs : 0,
  };

  const result = await processContactSubmission(submission);

  return Response.json(result, { status: statusCode(result) });
}
