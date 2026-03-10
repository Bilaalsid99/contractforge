"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";

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

function classNames(...xs: Array<string | false | undefined | null>) {
  return xs.filter(Boolean).join(" ");
}

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
        className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-400"
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
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-400"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
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
  onUnlock,
  loading,
}: {
  title: string;
  fullText: string;
  isUnlocked: boolean;
  onUnlock: () => void;
  loading: boolean;
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
                  the full pack to view complete documents and export.
                </p>
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={onUnlock}
                    disabled={loading}
                    className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-zinc-400"
                  >
                    {loading ? "Redirecting..." : "Unlock export (£39)"}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function GenerateClient({
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
    <main className="bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="mb-6 flex flex-col gap-3 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-zinc-900">
              ContractForge Generator
            </p>
            <p className="mt-1 text-sm text-zinc-600">
              Build your onboarding pack, preview the documents, then unlock
              export.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/client-onboarding-pack"
              className="text-sm font-semibold text-zinc-700 hover:text-zinc-900"
            >
              Back to product page
            </Link>
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
                  : "Unlock export (£39)"}
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[420px_minmax(0,1fr)]">
          <section className="space-y-5">
            <SectionCard
              title="Build your onboarding pack"
              desc="Answer these once and preview the structure before purchase."
            >
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-sm font-semibold text-zinc-900">
                  Your pack includes
                </p>
                <div className="mt-3 space-y-2 text-sm text-zinc-700">
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Personal Training Agreement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>PAR-Q Health Questionnaire</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Liability Waiver</span>
                  </div>
                </div>
              </div>
            </SectionCard>

            <SectionCard
              title="Trainer details"
              desc="Basic identity details used across the pack."
            >
              <Field
                label="Trainer name"
                value={form.trainerName}
                onChange={(value) => setForm((s) => ({ ...s, trainerName: value }))}
                placeholder="e.g. Alex Smith"
              />

              <Field
                label="Business / trading name"
                value={form.businessName}
                onChange={(value) => setForm((s) => ({ ...s, businessName: value }))}
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
              title="Health and liability"
              desc="These details shape the screening and risk wording."
            >
              <Field
                label="Medical clearance approach"
                value={form.medicalClearanceApproach}
                onChange={(value) =>
                  setForm((s) => ({ ...s, medicalClearanceApproach: value }))
                }
              />

              <Field
                label="Emergency contact requirement"
                value={form.emergencyContactRequirement}
                onChange={(value) =>
                  setForm((s) => ({ ...s, emergencyContactRequirement: value }))
                }
              />

              <Field
                label="Liability wording"
                value={form.liabilityWording}
                onChange={(value) =>
                  setForm((s) => ({ ...s, liabilityWording: value }))
                }
              />
            </SectionCard>
          </section>

          <section className="space-y-4">
            <div className="rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    Preview your onboarding pack
                  </p>
                  <p className="mt-1 text-sm text-zinc-600">
                    Review the structure first. Full documents and export unlock
                    after payment.
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
                        : "Unlock export (£39)"}
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
              onUnlock={handleCheckout}
              loading={loading}
            />
          </section>
        </div>
      </div>
    </main>
  );
}