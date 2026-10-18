export type ContactFields = {
  name: string;
  email: string;
  message: string;
};

export type ContactFieldErrors = Partial<Record<keyof ContactFields, string>>;

export type ContactSubmission = ContactFields & {
  /** Honeypot. People never see this field. Bots often fill it. */
  website?: string;
  /** Milliseconds since the form was shown. Used as a lightweight bot check. */
  elapsedMs?: number;
};

export type ContactResult =
  | { status: "sent" }
  | { status: "unconfigured" }
  | { status: "invalid"; errors: ContactFieldErrors }
  | { status: "error"; message: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactFields(fields: ContactFields): ContactFieldErrors {
  const name = fields.name.trim();
  const email = fields.email.trim();
  const message = fields.message.trim();
  const errors: ContactFieldErrors = {};

  if (name.length < 2) {
    errors.name = "Enter your name.";
  } else if (name.length > 80) {
    errors.name = "Use a shorter name.";
  }

  if (!emailPattern.test(email) || email.length > 254) {
    errors.email = "Enter a valid email address.";
  }

  if (message.length < 10) {
    errors.message = "Enter a message of at least a few words.";
  } else if (message.length > 5000) {
    errors.message = "Use a shorter message.";
  }

  return errors;
}

export function hasFieldErrors(errors: ContactFieldErrors) {
  return Object.keys(errors).length > 0;
}

function readString(value: unknown) {
  return typeof value === "string" ? value : "";
}

/** Normalizes an unknown payload into the contact contract. Non-objects are rejected. */
export function parseContactSubmission(input: unknown): ContactSubmission | null {
  if (!input || typeof input !== "object" || Array.isArray(input)) return null;

  const record = input as Record<string, unknown>;
  const elapsedMs = record.elapsedMs;

  return {
    name: readString(record.name),
    email: readString(record.email),
    message: readString(record.message),
    website: readString(record.website),
    elapsedMs: typeof elapsedMs === "number" && Number.isFinite(elapsedMs) ? elapsedMs : 0,
  };
}
