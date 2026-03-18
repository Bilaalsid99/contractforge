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
  medicalClearanceApproach: string;
  emergencyContactRequirement: string;
  liabilityWording: string;
  onlineCoaching: string;
  groupTraining: string;
};

type DocKey = "agreement" | "parq" | "waiver";

const STORAGE_KEY = "contractforge:generator:v1";

const SUPPORTING_LINKS = {
  intake:
    "https://docs.google.com/document/d/1EPyDfkQibmTjuWJxcQupMZgpSmyDr1Lhyc_kncUIEos/copy",
  guide:
    "https://docs.google.com/document/u/6/d/1iit8DSCG9uDKrQLW-m2PEQa3nswzx6eeSFShY7YxvhY/copy",
  emergency:
    "https://docs.google.com/document/u/6/d/1AHtCwbRAN39V9mGEeHwuLEJytRnl4VMTOOZKBrzaaVk/copy",
  incident:
    "https://docs.google.com/document/u/6/d/1_NwmIbY12KAQ_WdzQQmESZOrQnWY2urVxSJc3i6QLb4/copy",
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
        {desc && <p className="mt-1 text-sm text-zinc-600">{desc}</p>}
      </div>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

function buildAgreement(form: FormState) {
  return `PERSONAL TRAINING AGREEMENT

Trainer: ${form.trainerName || "[Trainer name]"}
Business: ${form.businessName || "[Business name]"}

1. Services
The Trainer agrees to provide personal training services in a ${form.trainingLocation || "[training location]"} setting. Sessions are scheduled at ${form.sessionDuration || "[session duration]"} per session.

2. Payment Terms
The Client agrees to pay according to the selected structure: ${form.paymentStructure || "[payment structure]"}.
Payment timing: ${form.paymentTiming || "[payment timing]"}.

3. Cancellation Policy
The Client must give at least ${form.cancellationNotice || "[cancellation notice]"} notice for cancellations.
Late cancellation rule: ${form.lateCancellationRule || "[late cancellation rule]"}.
Late arrival rule: ${form.lateArrivalRule || "[late arrival rule]"}.

4. Health and Participation
The Client confirms that relevant health information will be disclosed before training begins.
Medical clearance approach: ${form.medicalClearanceApproach || "[medical clearance approach]"}.
Emergency contact requirement: ${form.emergencyContactRequirement || "[emergency contact requirement]"}.

5. Service Format
Online coaching: ${form.onlineCoaching || "[online coaching]"}.
Group training: ${form.groupTraining || "[group training]"}.

6. Liability and Responsibilities
Liability wording: ${form.liabilityWording || "[liability wording]"}.
The Client understands that participation in exercise involves inherent risk and agrees to follow the Trainer’s reasonable instructions.

Signed:

Trainer: ${form.trainerName || "[Trainer name]"}
Client: [Client full name]
Date: [Date]`;
}

function buildParq(form: FormState) {
  return `PAR-Q HEALTH QUESTIONNAIRE

Trainer: ${form.trainerName || "[Trainer name]"}
Trainer / Business: ${form.businessName || "[Business name]"}

Client name: [Client full name]
Date of birth: [Date of birth]
Emergency contact: [Emergency contact details]

Please answer YES or NO to the following:

1. Has your doctor ever said you have a heart condition?
2. Do you feel pain in your chest during physical activity?
3. Have you experienced dizziness, fainting, or loss of balance?
4. Do you have a bone or joint problem that could worsen with exercise?
5. Are you currently taking medication for blood pressure or a heart condition?
6. Are there any other health reasons why you should not do physical activity?

Medical clearance approach:
${form.medicalClearanceApproach || "[medical clearance approach]"}

Emergency contact requirement:
${form.emergencyContactRequirement || "[emergency contact requirement]"}

Client declaration:
I confirm that the information I have provided is accurate to the best of my knowledge.

Client signature: [Client signature]
Date: [Date]`;
}

function buildWaiver(form: FormState) {
  return `LIABILITY WAIVER

Trainer: ${form.trainerName || "[Trainer name]"}
Business: ${form.businessName || "[Business name]"}

I understand that participation in personal training, exercise, and related physical activity involves inherent risks, including the risk of injury, illness, or other complications.

I confirm that:
- I am voluntarily participating in training activities.
- I understand the risks involved.
- I will inform the Trainer of any relevant health issues.
- I take responsibility for following guidance and working within my limits.

Liability wording:
${form.liabilityWording || "[liability wording]"}

Training location:
${form.trainingLocation || "[training location]"}

Online coaching:
${form.onlineCoaching || "[online coaching]"}

Group training:
${form.groupTraining || "[group training]"}

Client signature: [Client signature]
Date: [Date]`;
}

function getPreviewText(fullText: string, maxChars = 650) {
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
      <h2 className="text-lg font-bold text-zinc-900">{title}</h2>

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
                  You can review the structure and wording style first. Unlock
                  the full pack to access complete documents, export, and the
                  supporting onboarding files.
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
  const [activeDoc, setActiveDoc] = useState<DocKey>("agreement");
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
    medicalClearanceApproach:
      "Medical clearance may be requested where appropriate",
    emergencyContactRequirement:
      "Emergency contact details required before training begins",
    liabilityWording:
      "The trainer is not responsible for injuries arising from undisclosed health conditions or failure to follow guidance",
    onlineCoaching: "No",
    groupTraining: "No",
  });

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

  const documents = useMemo(
    () => ({
      agreement: buildAgreement(form),
      parq: buildParq(form),
      waiver: buildWaiver(form),
    }),
    [form]
  );

  const activeTitle =
    activeDoc === "agreement"
      ? "Personal Training Agreement"
      : activeDoc === "parq"
        ? "PAR-Q Health Questionnaire"
        : "Liability Waiver";

  const activeContent = documents[activeDoc];

  async function copyCurrentDocument() {
    if (!isUnlocked) return;
    await navigator.clipboard.writeText(activeContent);
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
          title="Build your onboarding pack"
          desc="Answer these once and preview the structure before purchase."
        >
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-sm font-semibold text-zinc-900">
              Includes 3 generated documents plus 4 supporting onboarding files
            </p>
            <p className="mt-2 text-sm text-zinc-600">
              Fill in your setup once, review the previews, then unlock the full
              pack when you are ready.
            </p>
          </div>
        </SectionCard>

        <SectionCard
          title="Trainer details"
          desc="Basic identity details used across the pack."
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
            placeholder="e.g. Alex's Fitness Coaching"
          />
        </SectionCard>

        <SectionCard
          title="Training setup"
          desc="How the service is delivered."
        >
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

        <SectionCard
          title="Payments and cancellations"
          desc="Core commercial terms carried into the agreement."
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
            options={["Pay in advance", "Pay on booking", "Monthly in advance"]}
          />

          <SelectField
            label="Cancellation notice"
            value={form.cancellationNotice}
            onChange={(value) =>
              setForm((s) => ({ ...s, cancellationNotice: value }))
            }
            options={["12 hours", "24 hours", "48 hours"]}
          />

          <Field
            label="Late cancellation rule"
            value={form.lateCancellationRule}
            onChange={(value) =>
              setForm((s) => ({ ...s, lateCancellationRule: value }))
            }
          />

          <Field
            label="Late arrival rule"
            value={form.lateArrivalRule}
            onChange={(value) =>
              setForm((s) => ({ ...s, lateArrivalRule: value }))
            }
          />
        </SectionCard>

        <SectionCard
          title="Health, screening and liability"
          desc="These details shape the screening and risk wording."
        >
          <SelectField
            label="Medical clearance approach"
            value={form.medicalClearanceApproach}
            onChange={(value) =>
              setForm((s) => ({ ...s, medicalClearanceApproach: value }))
            }
            options={[
              "Medical clearance may be requested where appropriate",
              "Medical clearance required where relevant conditions are disclosed",
              "Client responsible for confirming suitability before training",
            ]}
          />

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
            label="Liability wording"
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
      </section>

      <section className="space-y-4">
        {isUnlocked && (
          <div className="rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">
              Your onboarding pack is unlocked
            </p>
            <p className="mt-1 text-sm text-zinc-600">
              You can now copy your generated documents and access the supporting
              templates included in your pack.
            </p>

            <div className="mt-5">
              <p className="text-sm font-semibold text-zinc-900">
                Supporting onboarding templates
              </p>
              <p className="mt-1 text-sm text-zinc-600">
                These open as editable Google Docs so you can make your own copy
                and use them during onboarding.
              </p>

              <div className="mt-3 flex flex-col gap-2 text-sm">
                <a
                  href={SUPPORTING_LINKS.intake}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700"
                >
                  Client Intake / Consultation Form
                </a>

                <a
                  href={SUPPORTING_LINKS.emergency}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700"
                >
                  Emergency &amp; Health Information Form
                </a>

                <a
                  href={SUPPORTING_LINKS.incident}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700"
                >
                  Incident / Injury Report Form
                </a>

                <a
                  href={SUPPORTING_LINKS.guide}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700"
                >
                  Quick-start onboarding guide
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-zinc-900">
                Preview your onboarding pack
              </p>
              <p className="mt-1 text-sm text-zinc-600">
                Review the structure first. Full documents and supporting
                templates unlock after payment.
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={copyCurrentDocument}
                disabled={!isUnlocked}
                className="rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 disabled:cursor-not-allowed disabled:text-zinc-400"
              >
                Copy current document
              </button>
              <button
                type="button"
                onClick={handleCheckout}
                disabled={loading || isUnlocked}
                className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-zinc-400"
              >
                {isUnlocked
                  ? "Export unlocked"
                  : loading
                    ? "Redirecting..."
                    : "Unlock export (£29.95)"}
              </button>
            </div>
          </div>

          {checkoutError && (
            <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {checkoutError}
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              ["agreement", "Agreement"],
              ["parq", "PAR-Q"],
              ["waiver", "Waiver"],
            ].map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveDoc(key as DocKey)}
                className={classNames(
                  "rounded-2xl px-4 py-2 text-sm font-semibold transition",
                  activeDoc === key
                    ? "bg-zinc-900 text-white"
                    : "border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <PreviewPanel
          title={activeTitle}
          fullText={activeContent}
          isUnlocked={isUnlocked}
        />
      </section>
    </div>
  );
}