"use client";

import React, { useEffect, useMemo, useState } from "react";

type FormState = {
  trainerName: string;
  businessName: string;
  trainingLocation: string;
  sessionDuration: string;
  paymentStructure: string;
  paymentTiming: string;
  cancellationNotice: string;
  lateCancellationRule: string;
  lateArrivalRule: string;
  communicationChannel: string;
  responseBoundary: string;
  coachingScope: string;
  emergencyContactRequirement: string;
  liabilityWording: string;
  onlineCoaching: string;
  groupTraining: string;
  sessionExpiry: string;
  minimumCommitment: string;
  reschedulingRule: string;
  trainerCancellationRule: string;
  environmentResponsibility: string;
  contentUsage: string;
  refundRule: string;
};

type StepKey =
  | "identity"
  | "service"
  | "pricing"
  | "communication"
  | "protection";

const STORAGE_KEY = "contractforge:generator:final-v2";

const SUPPORTING_LINKS = {
  parq: "https://docs.google.com/document/d/REPLACE_WITH_REAL_PARQ_LINK/copy",
  intake:
    "https://docs.google.com/document/d/1EPyDfkQibmTjuWJxcQupMZgpSmyDr1Lhyc_kncUIEos/copy",
  emergency:
    "https://docs.google.com/document/u/6/d/1AHtCwbRAN39V9mGEeHwuLEJytRnl4VMTOOZKBrzaaVk/copy",
  incident:
    "https://docs.google.com/document/u/6/d/1_NwmIbY12KAQ_WdzQQmESZOrQnWY2urVxSJc3i6QLb4/copy",
  photoRelease: "/personal-trainer-photo-video-release-form-uk",
};

function classNames(...xs: Array<string | false | undefined | null>) {
  return xs.filter(Boolean).join(" ");
}

const inputClassName =
  "w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100";

const selectClassName =
  "w-full min-h-[48px] appearance-none rounded-2xl border border-zinc-200 bg-white px-4 py-3 pr-10 text-[15px] text-zinc-900 outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100";

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-zinc-900">
        {label}
      </span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputClassName}
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-zinc-900">
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={selectClassName}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-zinc-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.512a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </label>
  );
}

function SectionCard({
  title,
  desc,
  children,
}: {
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <p className="text-base font-semibold text-zinc-900">{title}</p>
        {desc ? <p className="mt-1 text-sm text-zinc-600">{desc}</p> : null}
      </div>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

function PackIncludes({
  isUnlocked,
  contentUsage,
}: {
  isUnlocked: boolean;
  contentUsage: string;
}) {
  const items = [
    {
      label: "Intake form",
      href: SUPPORTING_LINKS.intake,
    },
    {
      label: "Agreement",
      href: null,
    },
    {
      label: "PAR-Q",
      href: SUPPORTING_LINKS.parq,
    },
    {
      label: "Emergency form",
      href: SUPPORTING_LINKS.emergency,
    },
    {
      label: "Incident form",
      href: SUPPORTING_LINKS.incident,
    },
  ];

  if (contentUsage === "Yes, with separate consent") {
    items.push({
      label: "Photo / video release form",
      href: SUPPORTING_LINKS.photoRelease,
    });
  }

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-zinc-900">
        Included in your onboarding pack
      </p>

      <div className="mt-4 space-y-2">
        {items.map((item) => {
          if (isUnlocked && item.href) {
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
              >
                <span>{item.label}</span>
                <span className="text-zinc-400">↗</span>
              </a>
            );
          }

          const isCurrent = item.label === "Agreement";

return (
  <div
    key={item.label}
    className={classNames(
      "rounded-2xl border px-4 py-3 text-sm font-medium",
      isCurrent
        ? "border-zinc-900 bg-zinc-900 text-white"
        : "border-zinc-200 bg-zinc-50 text-zinc-800"
    )}
  >
    {item.label}
  </div>
);
        })}
      </div>
    </div>
  );
}

function buildAgreement(form: FormState) {
  const onlineClause =
    form.onlineCoaching === "Yes"
      ? `Online coaching may be used where agreed. The client understands that delivery may depend on internet connection, device access, and platform reliability.`
      : "";

  const groupClause =
    form.groupTraining === "Yes"
      ? `The trainer may deliver coaching in a group format where agreed. The client understands that attention may be shared across participants in that setting.`
      : "";

  const homeClause =
    form.trainingLocation === "Client home"
      ? `Where sessions take place at the client's home, the client is expected to provide a reasonably suitable training space in line with the agreed environment responsibilities.`
      : "";

  const parqClause = `A PAR-Q Health Questionnaire is required and must be completed before training begins.`;

  const contentClause =
    form.contentUsage === "Yes, with separate consent"
      ? `Any recording, photography, or content use will only take place with separate consent where required.`
      : `No recording or client content use is included as part of this coaching setup unless separately agreed.`;

  return `PERSONAL TRAINING AGREEMENT

Trainer: ${form.trainerName || "[Trainer name]"}
Business: ${form.businessName || "[Business name]"}

1. SERVICES
The Trainer agrees to provide personal training services in a ${form.trainingLocation || "[training location]"} setting.
Sessions are scheduled at ${form.sessionDuration || "[session duration]"} per session.
Coaching scope: ${form.coachingScope || "[coaching scope]"}.

2. PAYMENT TERMS
The Client agrees to pay according to the selected structure: ${form.paymentStructure || "[payment structure]"}.
Payment timing: ${form.paymentTiming || "[payment timing]"}.
Refund rule: ${form.refundRule || "[refund rule]"}.

3. CANCELLATION AND ATTENDANCE
The Client must give at least ${form.cancellationNotice || "[cancellation notice]"} notice for cancellations.
Late cancellation rule: ${form.lateCancellationRule || "[late cancellation rule]"}.
Late arrival rule: ${form.lateArrivalRule || "[late arrival rule]"}.
Rescheduling: ${form.reschedulingRule || "[rescheduling rule]"}.
If the Trainer cancels: ${form.trainerCancellationRule || "[trainer cancellation rule]"}.

4. COMMUNICATION
Communication channel: ${form.communicationChannel || "[communication channel]"}.
Response boundary: ${form.responseBoundary || "[response boundary]"}.

5. HEALTH AND READINESS
${parqClause}
Emergency contact requirement: ${form.emergencyContactRequirement || "[emergency contact requirement]"}.

6. SERVICE FORMAT
Online coaching: ${form.onlineCoaching || "[online coaching]"}.
Group training: ${form.groupTraining || "[group training]"}.
${onlineClause}
${groupClause}
${homeClause}

7. ADDITIONAL BOOKING RULES
Session expiry: ${form.sessionExpiry || "[session expiry]"}.
Minimum commitment: ${form.minimumCommitment || "[minimum commitment]"}.
Training environment responsibility: ${form.environmentResponsibility || "[environment responsibility]"}.
Content usage: ${form.contentUsage || "[content usage]"}.
${contentClause}

8. RISK ACKNOWLEDGEMENT AND RESPONSIBILITIES
${form.liabilityWording || "[risk acknowledgement wording]"}.
The Client understands that participation in personal training, exercise, and related physical activity involves inherent risk, including the possibility of injury or other complications.
The Client agrees to follow the Trainer’s reasonable instructions, work within their limits, and raise any relevant health or safety concerns before or during training.

Signed:

Trainer: ${form.trainerName || "[Trainer name]"}
Client: [Client full name]
Date: [Date]`;
}

function withPreviewDefaults(form: FormState): FormState {
  return {
    ...form,
    trainerName: form.trainerName || "Alex Smith",
    businessName: form.businessName || "Alex Smith Coaching",
  };
}

function getPreviewText(fullText: string, maxChars = 950) {
  if (fullText.length <= maxChars) return fullText;
  return fullText.slice(0, maxChars).trimEnd();
}

function PreviewPanel({
  title,
  fullText,
  isUnlocked,
}: {
  title: string;
  fullText: string;
  isUnlocked: boolean;
}) {
  const previewText = useMemo(() => getPreviewText(fullText), [fullText]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="text-lg font-bold text-zinc-900">{title}</h2>
        <span className="rounded-full bg-zinc-900 px-2.5 py-1 text-[11px] font-semibold text-white">
          Core document
        </span>
      </div>

      <div className="relative mt-4">
        <pre
          className={classNames(
            "whitespace-pre-wrap font-sans text-sm leading-7 text-zinc-700",
            !isUnlocked && "select-none"
          )}
        >
          {isUnlocked ? fullText : previewText}
        </pre>

        {!isUnlocked && (
          <>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/95 to-white/0" />
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
              <div className="rounded-3xl border border-zinc-200 bg-white/95 p-5 shadow-lg backdrop-blur">
                <p className="text-sm font-semibold text-zinc-900">
                  Preview limited before purchase
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  Review the agreement structure first. Unlock the full pack to
                  access the complete agreement, copy, and the separate forms.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function ClientOnboardingBuilder({
  isUnlocked,
}: {
  isUnlocked: boolean;
}) {
  const [activeStep, setActiveStep] = useState<StepKey>("identity");
  const [loading, setLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  const [form, setForm] = useState<FormState>({
    trainerName: "",
    businessName: "",
    trainingLocation: "Gym",
    sessionDuration: "60 minutes",
    paymentStructure: "Single sessions",
    paymentTiming: "Pay in advance",
    cancellationNotice: "24 hours",
    lateCancellationRule: "Late cancellations may be charged in full",
    lateArrivalRule: "Sessions still end at the scheduled time",
    communicationChannel: "WhatsApp or text",
    responseBoundary: "Responses during business hours only",
    coachingScope: "Sessions only",
    emergencyContactRequirement:
      "Emergency contact details required before training begins",
    liabilityWording:
      "The trainer is not responsible for injuries arising from undisclosed health conditions or failure to follow guidance",
    onlineCoaching: "No",
    groupTraining: "No",
    sessionExpiry: "No expiry",
    minimumCommitment: "No minimum commitment",
    reschedulingRule: "Rescheduling is allowed within the notice period",
    trainerCancellationRule: "Cancelled sessions will be rescheduled",
    environmentResponsibility: "Not applicable to this coaching setup",
    contentUsage: "No",
    refundRule: "Payments are non-refundable once booked",
  });

  const steps: Array<{ key: StepKey; title: string; desc: string }> = [
    {
      key: "identity",
      title: "Identity",
      desc: "Basic details used across the agreement.",
    },
    {
      key: "service",
      title: "Service",
      desc: "How the coaching is delivered.",
    },
    {
      key: "pricing",
      title: "Pricing",
      desc: "Payment, cancellation, and attendance terms.",
    },
    {
      key: "communication",
      title: "Boundaries",
      desc: "Contact and support expectations.",
    },
    {
      key: "protection",
      title: "Protection",
      desc: "Emergency and risk wording.",
    },
  ];

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Partial<FormState>;
      setForm((current) => ({ ...current, ...parsed }));
    } catch {
      // ignore local storage parse issues
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    } catch {
      // ignore storage write issues
    }
  }, [form]);

  const previewForm = useMemo(() => withPreviewDefaults(form), [form]);

  const fullAgreement = useMemo(() => buildAgreement(form), [form]);
  const previewAgreement = useMemo(
    () => buildAgreement(previewForm),
    [previewForm]
  );

  const activeContent = isUnlocked ? fullAgreement : previewAgreement;

  async function copyCurrentDocument() {
    if (!isUnlocked) return;
    await navigator.clipboard.writeText(fullAgreement);
  }

  async function handleCheckout() {
    try {
      setCheckoutError(null);
      setLoading(true);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product: "pt-client-onboarding-pack" }),
      });

      const data = (await res.json()) as { url?: string; error?: string };

      if (!res.ok) {
        throw new Error(data.error || "Checkout failed");
      }

      if (!data.url) {
        throw new Error("No checkout URL returned.");
      }

      window.location.href = data.url;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setCheckoutError(message);
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[420px_minmax(0,1fr)]">
      <section className="space-y-5">
        <SectionCard
          title="Build your agreement"
          desc="Set how you run your coaching, then preview the agreement before unlocking."
        >
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
            <p className="text-sm font-medium text-zinc-800">
              One agreement builder. Separate onboarding forms are included
              after purchase.
            </p>
          </div>
        </SectionCard>

        <div className="rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-semibold text-zinc-900">Guided setup</p>
          <p className="mt-1 text-sm text-zinc-600">
            Only the decisions that shape the agreement.
          </p>

          <div className="mt-4 grid gap-2">
            {steps.map((step, index) => (
              <button
                key={step.key}
                type="button"
                onClick={() => setActiveStep(step.key)}
                className={classNames(
                  "rounded-2xl border px-4 py-3 text-left transition",
                  activeStep === step.key
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50"
                )}
              >
                <p className="text-xs font-semibold uppercase tracking-wide opacity-70">
                  Step {index + 1}
                </p>
                <p className="mt-1 text-sm font-semibold">{step.title}</p>
                <p
                  className={classNames(
                    "mt-1 text-xs",
                    activeStep === step.key ? "text-zinc-200" : "text-zinc-500"
                  )}
                >
                  {step.desc}
                </p>
              </button>
            ))}
          </div>
        </div>

        {activeStep === "identity" && (
          <SectionCard
            title="Identity"
            desc="Basic details used across the agreement."
          >
            <Field
              label="Trainer name"
              value={form.trainerName}
              onChange={(value) =>
                setForm((s) => ({ ...s, trainerName: value }))
              }
              placeholder="e.g. Alex Smith"
            />

            <Field
              label="Business / trading name"
              value={form.businessName}
              onChange={(value) =>
                setForm((s) => ({ ...s, businessName: value }))
              }
              placeholder="e.g. Alex Smith Coaching"
            />
          </SectionCard>
        )}

        {activeStep === "service" && (
          <SectionCard title="Service" desc="How the coaching is delivered.">
            <SelectField
              label="Training location"
              value={form.trainingLocation}
              onChange={(value) =>
                setForm((s) => ({ ...s, trainingLocation: value }))
              }
              options={["Gym", "Client home", "Outdoors", "Online", "Mixed"]}
            />

            <SelectField
              label="Session duration"
              value={form.sessionDuration}
              onChange={(value) =>
                setForm((s) => ({ ...s, sessionDuration: value }))
              }
              options={["45 minutes", "60 minutes", "90 minutes"]}
            />

            <SelectField
              label="Coaching scope"
              value={form.coachingScope}
              onChange={(value) =>
                setForm((s) => ({ ...s, coachingScope: value }))
              }
              options={[
                "Sessions only",
                "Sessions plus basic guidance",
                "Ongoing coaching support",
              ]}
            />

            <SelectField
              label="Online coaching"
              value={form.onlineCoaching}
              onChange={(value) =>
                setForm((s) => ({ ...s, onlineCoaching: value }))
              }
              options={["No", "Yes"]}
            />

            <SelectField
              label="Group training"
              value={form.groupTraining}
              onChange={(value) =>
                setForm((s) => ({ ...s, groupTraining: value }))
              }
              options={["No", "Yes"]}
            />
          </SectionCard>
        )}

        {activeStep === "pricing" && (
          <SectionCard
            title="Pricing"
            desc="Core payment, cancellation, and attendance terms."
          >
            <SelectField
              label="Payment structure"
              value={form.paymentStructure}
              onChange={(value) =>
                setForm((s) => ({ ...s, paymentStructure: value }))
              }
              options={["Single sessions", "Block packages", "Monthly coaching"]}
            />

            <SelectField
              label="Payment timing"
              value={form.paymentTiming}
              onChange={(value) =>
                setForm((s) => ({ ...s, paymentTiming: value }))
              }
              options={[
                "Pay in advance",
                "Pay on booking",
                "Monthly in advance",
              ]}
            />

            <SelectField
              label="Cancellation notice"
              value={form.cancellationNotice}
              onChange={(value) =>
                setForm((s) => ({ ...s, cancellationNotice: value }))
              }
              options={["12 hours", "24 hours", "48 hours"]}
            />

            <SelectField
              label="Late cancellation rule"
              value={form.lateCancellationRule}
              onChange={(value) =>
                setForm((s) => ({ ...s, lateCancellationRule: value }))
              }
              options={[
                "Late cancellations may be charged in full",
                "Late cancellations may result in the session being lost",
                "Late cancellations may be rescheduled at the trainer’s discretion",
                "Late cancellations may be charged unless exceptional circumstances apply",
              ]}
            />

            <SelectField
              label="Late arrival rule"
              value={form.lateArrivalRule}
              onChange={(value) =>
                setForm((s) => ({ ...s, lateArrivalRule: value }))
              }
              options={[
                "Sessions still end at the scheduled time",
                "The remaining session time will be honoured",
                "The session may be shortened to fit the remaining time",
                "Late arrival may be treated as a missed session at the trainer’s discretion",
              ]}
            />
          </SectionCard>
        )}

        {activeStep === "communication" && (
          <SectionCard
            title="Boundaries"
            desc="How contact and support are handled."
          >
            <SelectField
              label="Communication channel"
              value={form.communicationChannel}
              onChange={(value) =>
                setForm((s) => ({ ...s, communicationChannel: value }))
              }
              options={[
                "WhatsApp or text",
                "Email only",
                "Email and WhatsApp",
              ]}
            />

            <SelectField
              label="Response boundary"
              value={form.responseBoundary}
              onChange={(value) =>
                setForm((s) => ({ ...s, responseBoundary: value }))
              }
              options={[
                "Responses during business hours only",
                "Responses within 24 hours",
                "Reasonable responses when available",
              ]}
            />
          </SectionCard>
        )}

        {activeStep === "protection" && (
          <SectionCard
            title="Protection"
            desc="Emergency and risk wording used inside the agreement."
          >
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
              <p className="text-sm font-medium text-zinc-900">
                PAR-Q is included as standard before training begins.
              </p>
            </div>

            <SelectField
              label="Emergency contact requirement"
              value={form.emergencyContactRequirement}
              onChange={(value) =>
                setForm((s) => ({ ...s, emergencyContactRequirement: value }))
              }
              options={[
                "Emergency contact details required before training begins",
                "Emergency contact details requested but optional",
              ]}
            />

            <SelectField
              label="Risk acknowledgement wording"
              value={form.liabilityWording}
              onChange={(value) =>
                setForm((s) => ({ ...s, liabilityWording: value }))
              }
              options={[
                "The trainer is not responsible for injuries arising from undisclosed health conditions or failure to follow guidance",
                "Training involves inherent risk and the client agrees to follow instructions and disclose relevant information",
              ]}
            />
          </SectionCard>
        )}

        <details className="group rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-zinc-900 hover:text-zinc-700">
    <span>Refine agreement (optional)</span>

    <span className="relative ml-4 h-5 w-5 text-zinc-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="absolute inset-0 h-5 w-5 group-open:hidden"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.512a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="absolute inset-0 hidden h-5 w-5 group-open:block"
        aria-hidden="true"
      >
        <path d="M5.75 9.25a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z" />
      </svg>
    </span>
  </summary>

  <p className="mt-2 text-sm text-zinc-600">
    Add a few tighter rules if needed.
  </p>

  <div className="mt-5 space-y-5">
    <SelectField
      label="Session expiry"
      value={form.sessionExpiry}
      onChange={(value) =>
        setForm((s) => ({ ...s, sessionExpiry: value }))
      }
      options={[
        "No expiry",
        "Sessions expire after 4 weeks",
        "Sessions expire after 6 weeks",
        "Sessions expire after 8 weeks",
      ]}
    />

    <SelectField
      label="Minimum commitment"
      value={form.minimumCommitment}
      onChange={(value) =>
        setForm((s) => ({ ...s, minimumCommitment: value }))
      }
      options={[
        "No minimum commitment",
        "Minimum 4 sessions",
        "Minimum 8 sessions",
        "Minimum 12 weeks",
      ]}
    />

    <SelectField
      label="Rescheduling"
      value={form.reschedulingRule}
      onChange={(value) =>
        setForm((s) => ({ ...s, reschedulingRule: value }))
      }
      options={[
        "Rescheduling is allowed within the notice period",
        "Rescheduling is not allowed within the notice period",
        "Rescheduling is at the trainer’s discretion",
      ]}
    />

    <SelectField
      label="If the trainer cancels"
      value={form.trainerCancellationRule}
      onChange={(value) =>
        setForm((s) => ({ ...s, trainerCancellationRule: value }))
      }
      options={[
        "Cancelled sessions will be rescheduled",
        "Cancelled sessions will be refunded",
        "Cancelled sessions will be credited toward a future booking",
        "The full remaining session time will be honoured at the next available opportunity",
      ]}
    />

    <SelectField
      label="Training environment responsibility"
      value={form.environmentResponsibility}
      onChange={(value) =>
        setForm((s) => ({ ...s, environmentResponsibility: value }))
      }
      options={[
        "The client is responsible for providing a suitable training space",
        "Responsibility for the training environment is shared",
        "Not applicable to this coaching setup",
      ]}
    />

    <SelectField
      label="Content usage"
      value={form.contentUsage}
      onChange={(value) =>
        setForm((s) => ({ ...s, contentUsage: value }))
      }
      options={["No", "Yes, with separate consent"]}
    />

    <SelectField
      label="Refund rule"
      value={form.refundRule}
      onChange={(value) =>
        setForm((s) => ({ ...s, refundRule: value }))
      }
      options={[
        "Payments are non-refundable once booked",
        "Unused sessions are non-refundable",
        "Refunds may be offered at the trainer’s discretion",
      ]}
    />
  </div>
</details>
</section>

      <section className="space-y-4">
        <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-zinc-900">
                Preview your agreement
              </p>
              <p className="mt-1 text-sm text-zinc-600">
                Review the structure first. Unlock the full pack when ready.
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={copyCurrentDocument}
                disabled={!isUnlocked}
                className="rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition disabled:cursor-not-allowed disabled:text-zinc-400"
              >
                Copy agreement
              </button>
              <button
                type="button"
                onClick={handleCheckout}
                disabled={loading || isUnlocked}
                className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-400"
              >
                {isUnlocked
                  ? "Unlocked"
                  : loading
                    ? "Redirecting..."
                    : "Unlock export (£29.95)"}
              </button>
            </div>
          </div>

          {checkoutError ? (
            <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {checkoutError}
            </div>
          ) : null}

          
        </div>

        <PackIncludes
          isUnlocked={isUnlocked}
          contentUsage={form.contentUsage}
        />

        <PreviewPanel
          title="Personal Training Agreement"
          fullText={activeContent}
          isUnlocked={isUnlocked}
        />
      </section>
    </div>
  );
}