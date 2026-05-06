"use client";

import * as React from "react";
import { CheckCircle2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select-native";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const SUBJECTS = [
  "General Inquiry",
  "Driver License",
  "Vehicle Registration",
  "Vehicle Inspection",
  "License Plates",
  "Other",
] as const;

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [errors, setErrors] = React.useState<Errors>({});
  const [submitted, setSubmitted] = React.useState(false);

  function reset() {
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
    setErrors({});
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(email.trim()))
      next.email = "Enter a valid email address.";
    if (!subject) next.subject = "Please choose a subject.";
    if (!message.trim()) next.message = "Please enter a message.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // TODO: wire up to email service (e.g., Formspree, Netlify Forms, or similar)
    setSubmitted(true);
    reset();
  }

  return (
    <div className="rounded-lg border border-ltm-border bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-semibold text-ltm-navy">
        Send us a message
      </h2>
      <p className="mt-1 text-sm text-ltm-muted">
        We&rsquo;ll respond during working hours.
      </p>

      {submitted && (
        <div
          role="status"
          className="mt-6 flex items-start gap-3 rounded-lg border border-ltm-success/30 bg-ltm-success/10 p-4 text-sm text-ltm-slate"
        >
          <CheckCircle2
            className="mt-0.5 h-5 w-5 shrink-0 text-ltm-success"
            aria-hidden="true"
          />
          <p>
            Thanks — we&rsquo;ll be in touch soon.
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="ml-2 font-medium text-ltm-navy underline-offset-4 hover:underline"
            >
              Send another
            </button>
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="contact-name">
              Name <span className="text-ltm-red">*</span>
            </Label>
            <Input
              id="contact-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              className={cn("mt-1.5", errors.name && "border-ltm-red")}
            />
            {errors.name && (
              <p
                id="contact-name-error"
                role="alert"
                className="mt-1 text-xs text-ltm-red"
              >
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="contact-email">
              Email <span className="text-ltm-red">*</span>
            </Label>
            <Input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? "contact-email-error" : undefined
              }
              className={cn("mt-1.5", errors.email && "border-ltm-red")}
            />
            {errors.email && (
              <p
                id="contact-email-error"
                role="alert"
                className="mt-1 text-xs text-ltm-red"
              >
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="contact-phone">
              Phone <span className="text-ltm-muted">(optional)</span>
            </Label>
            <Input
              id="contact-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
              className="mt-1.5"
            />
          </div>

          <div>
            <Label htmlFor="contact-subject">
              Subject <span className="text-ltm-red">*</span>
            </Label>
            <Select
              id="contact-subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={
                errors.subject ? "contact-subject-error" : undefined
              }
              className={cn("mt-1.5", errors.subject && "border-ltm-red")}
            >
              <option value="" disabled>
                Choose a subject…
              </option>
              {SUBJECTS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Select>
            {errors.subject && (
              <p
                id="contact-subject-error"
                role="alert"
                className="mt-1 text-xs text-ltm-red"
              >
                {errors.subject}
              </p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="contact-message">
            Message <span className="text-ltm-red">*</span>
          </Label>
          <Textarea
            id="contact-message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            className={cn("mt-1.5", errors.message && "border-ltm-red")}
          />
          {errors.message && (
            <p
              id="contact-message-error"
              role="alert"
              className="mt-1 text-xs text-ltm-red"
            >
              {errors.message}
            </p>
          )}
        </div>

        <Button type="submit" size="lg" className="w-full sm:w-auto">
          <Send className="h-4 w-4" aria-hidden="true" />
          Send Message
        </Button>
      </form>
    </div>
  );
}
