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
