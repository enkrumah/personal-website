"use server";

import { processContactSubmission } from "@/lib/contact";
import type { ContactSubmission } from "@/lib/contact-validation";

export async function submitContact(input: ContactSubmission) {
  return processContactSubmission(input);
}
