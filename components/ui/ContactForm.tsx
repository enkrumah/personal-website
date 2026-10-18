"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { submitContact } from "@/app/contact/actions";
import { contactEmail } from "@/content/site";
import { analyticsEvents, track } from "@/lib/analytics";
import {
  hasFieldErrors,
  validateContactFields,
  type ContactFieldErrors,
  type ContactFields,
} from "@/lib/contact-validation";
import { cn } from "@/lib/cn";

const emptyFields: ContactFields = {
  name: "",
  email: "",
  message: "",
};

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "sent" }
  | { state: "unconfigured" }
  | { state: "error"; message: string };

export function ContactForm() {
  const [fields, setFields] = useState<ContactFields>(emptyFields);
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const startedAt = useRef(0);
  const statusRef = useRef<HTMLDivElement>(null);
  const formId = useId();

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (status.state === "idle" || status.state === "submitting") return;
    statusRef.current?.focus();
  }, [status]);

  function updateField<Key extends keyof ContactFields>(key: Key, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContactFields(fields);
    setErrors(nextErrors);

    if (hasFieldErrors(nextErrors)) {
      setStatus({ state: "idle" });
      return;
    }

    setStatus({ state: "submitting" });
    track(analyticsEvents.contactInitiated, { channel: "form" });

    const result = await submitContact({
      ...fields,
      website,
      elapsedMs: startedAt.current ? Date.now() - startedAt.current : 0,
    });

    if (result.status === "invalid") {
      setErrors(result.errors);
      setStatus({ state: "idle" });
      return;
    }

    if (result.status === "sent") {
      setFields(emptyFields);
      setWebsite("");
      setStatus({ state: "sent" });
      return;
    }

    if (result.status === "unconfigured") {
      setStatus({ state: "unconfigured" });
      return;
    }

    setStatus({ state: "error", message: result.message });
  }

  if (status.state === "sent") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="border border-line bg-card px-6 py-8"
      >
        <h2 className="font-serif text-3xl tracking-tight">Message sent</h2>
        <p className="mt-3 max-w-md text-muted">
          Thank you. I will read it and reply.
        </p>
        <button
          type="button"
          className="mt-6 text-sm underline decoration-line underline-offset-4"
          onClick={() => setStatus({ state: "idle" })}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-busy={status.state === "submitting"}
      className="relative"
    >
      <noscript>
        <p className="mb-6 text-sm text-muted">
          This form needs JavaScript. Email {contactEmail} instead.
        </p>
      </noscript>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>

      {hasFieldErrors(errors) ? (
        <p role="alert" className="mb-5 border border-danger px-4 py-3 text-sm text-danger">
          Check the highlighted fields and try again.
        </p>
      ) : null}

      {status.state === "unconfigured" ? (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="status"
          className="mb-5 border border-line bg-card px-4 py-4 text-sm leading-6 text-muted"
        >
          <p className="font-medium text-foreground">Email me directly.</p>
          <p className="mt-1">
            The form is not connected to an inbox yet. Email{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="underline decoration-line underline-offset-4"
              onClick={() =>
                track(analyticsEvents.contactInitiated, { channel: "email" })
              }
            >
              {contactEmail}
            </a>{" "}
            and I will reply.
          </p>
        </div>
      ) : null}

      {status.state === "error" ? (
        <p
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          className="mb-5 border border-danger px-4 py-3 text-sm text-danger"
        >
          {status.message}
        </p>
      ) : null}

      <div className="space-y-5">
        <Field
          id={`${formId}-name`}
          label="Name"
          name="name"
          autoComplete="name"
          value={fields.name}
          error={errors.name}
          maxLength={80}
          onChange={(value) => updateField("name", value)}
        />
        <Field
          id={`${formId}-email`}
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={fields.email}
          error={errors.email}
          maxLength={254}
          onChange={(value) => updateField("email", value)}
        />
        <div>
          <label htmlFor={`${formId}-message`} className="text-sm font-medium">
            Message
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            required
            aria-required="true"
            rows={6}
            maxLength={5000}
            value={fields.message}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? `${formId}-message-error` : undefined}
            onChange={(event) => updateField("message", event.target.value)}
            className={cn(
              "mt-2 w-full resize-y border bg-card px-3 py-2.5 text-sm text-foreground",
              errors.message ? "border-danger" : "border-line",
            )}
          />
          {errors.message ? (
            <p id={`${formId}-message-error`} className="mt-2 text-sm text-danger">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        disabled={status.state === "submitting"}
        className="mt-6 inline-flex items-center justify-center bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors duration-200 hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status.state === "submitting" ? "Sending" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  name,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
  maxLength,
}: {
  id: string;
  label: string;
  name: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  maxLength?: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        aria-required="true"
        autoComplete={autoComplete}
        maxLength={maxLength}
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          "mt-2 w-full border bg-card px-3 py-2.5 text-sm text-foreground",
          error ? "border-danger" : "border-line",
        )}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
