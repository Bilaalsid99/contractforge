import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personal Trainer Client Onboarding Pack (UK)",
  description:
    "Preview the Personal Trainer Client Onboarding Pack (UK), including the agreement, PAR-Q, liability waiver, and supporting trainer forms.",
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm">
      {children}
    </span>
  );
}

function SectionTitle({
  kicker,
  title,
  desc,
}: {
  kicker?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker && (
        <p className="text-sm font-semibold tracking-wide text-zinc-500">
          {kicker}
        </p>
      )}
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
        {title}
      </h1>
      {desc && <p className="mt-4 text-base text-zinc-600">{desc}</p>}
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="text-base font-semibold text-zinc-900">{title}</p>
      <div className="mt-3 text-sm leading-7 text-zinc-600">{children}</div>
    </div>
  );
}

function PrimaryLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 ${className}`}
    >
      {children}
    </Link>
  );
}

function SecondaryLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 ${className}`}
    >
      {children}
    </Link>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-[10px] font-bold text-white">
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ClientOnboardingPackPage() {
  const agreementCoverage = [
    "Services and coaching scope",
    "Payment terms",
    "Cancellation policy",
    "Late arrivals and missed sessions",
    "Client responsibilities",
    "General training expectations",
  ];

  const generatorQuestions = [
    "Trainer and business details",
    "Training location and session structure",
    "Payment setup and timing",
    "Cancellation and attendance rules",
    "Medical clearance approach",
    "Emergency contact requirement",
    "Liability wording",
    "Online coaching and group training options",
  ];

  const bonusForms = [
    "Client Intake / Consultation Form",
    "Emergency & Health Information Form",
    "Incident / Injury Report Form",
    "Quick-start onboarding guide",
  ];

  const workflowSteps = [
    "Start with the Client Intake / Consultation Form to gather the client's goals, background, and basic onboarding information.",
    "Send the PAR-Q Health Questionnaire before training begins.",
    "Ask the client to review and sign the Personal Training Agreement, which includes payment terms, cancellation rules, and training expectations.",
    "Have the client sign the Liability Waiver before participating in training sessions.",
    "Keep the Emergency & Health Information Form on file for client safety.",
    "Use the Incident / Injury Report Form if something happens during a session.",
  ];

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
          <Badge>£29.95 one-time purchase</Badge>
          <Badge>Preview before paying</Badge>
          <Badge>Reusable for future clients</Badge>
          <Badge>UK-focused wording</Badge>
        </div>

        <SectionTitle
          kicker="Personal Trainer Client Onboarding Pack"
          title="A simpler way to set up your client onboarding"
          desc="Preview a structured onboarding pack for personal trainers, built to help you handle agreements, health screening, liability, and key supporting forms with less friction."
        />

        <div className="mx-auto mt-8 grid max-w-5xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">
              What the pack includes
            </p>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              Instead of piecing together disconnected templates, this pack
              gives you the core documents many trainers need to onboard clients
              with clearer expectations, safer screening, and more organised
              paperwork.
            </p>

            <div className="mt-5 grid gap-4">
              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-lg">
                    📄
                  </span>
                  <div className="min-w-0">
                    <p className="text-base font-semibold text-zinc-900">
                      Personal Training Agreement
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-zinc-500">
                      Core document
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-sm text-zinc-600">
                  Covers the areas many trainers normally split across separate
                  contracts, terms, and cancellation documents.
                </p>

                <p className="mt-4 text-sm font-semibold text-zinc-900">
                  Includes:
                </p>
                <CheckList items={agreementCoverage} />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-lg">
                      📋
                    </span>
                    <div>
                      <p className="text-base font-semibold text-zinc-900">
                        PAR-Q Health Questionnaire
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-zinc-600">
                    Health screening completed before training begins.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-lg">
                      ⚖️
                    </span>
                    <div>
                      <p className="text-base font-semibold text-zinc-900">
                        Liability Waiver
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-zinc-600">
                    Risk acknowledgement and injury disclaimer signed before
                    participation.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-sm font-semibold text-zinc-900">
                Supporting trainer forms included
              </p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                You also receive a small set of practical forms to help you
                gather early client information, keep onboarding organised, and
                respond properly if an issue happens during training.
              </p>
              <CheckList items={bonusForms} />
            </div>

            <p className="mt-5 text-xs text-zinc-500">
              The agreement already includes payment terms and cancellation
              rules, so your setup stays simpler and more consistent.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/generate" className="sm:flex-1">
                Start building my onboarding pack
              </PrimaryLink>
              <SecondaryLink href="/personal-trainer-contract-template-uk">
                View a free template first
              </SecondaryLink>
            </div>

            <p className="mt-3 text-xs text-zinc-500">
              No subscription. Preview before purchase.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-zinc-500">One-time price</p>
            <p className="mt-2 text-4xl font-bold tracking-tight text-zinc-900">
              £29.95
            </p>
            <p className="mt-2 text-sm text-zinc-600">
              Start with the guided setup, preview the structure, then pay once
              to unlock export.
            </p>

            <div className="mt-6 space-y-3 text-sm text-zinc-700">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                No subscription
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                Preview before purchase
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                Reuse the structure for future clients
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm font-semibold text-zinc-900">
                Included in the pack:
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
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Client Intake / Consultation Form</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Emergency &amp; Health Information Form</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Incident / Injury Report Form</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Quick-start onboarding guide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            kicker="Why this feels simpler"
            title="The goal is clearer onboarding, not more paperwork"
            desc="This pack is designed to help personal trainers move from first enquiry to first session with less friction, clearer expectations, and more organised documentation."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card title="1. Answer a guided setup">
              Fill in your trainer details, service setup, cancellation rules,
              and onboarding preferences once.
            </Card>

            <Card title="2. Preview the structure">
              Review how the agreement, PAR-Q, and waiver fit together before
              you pay.
            </Card>

            <Card title="3. Unlock export">
              Pay once to unlock the full pack and reuse the structure for
              future clients.
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            kicker="How trainers typically use it"
            title="A simple onboarding workflow"
            desc="Most personal trainers use these documents in roughly the same order so clients understand the process clearly from the start."
          />

          <div className="mx-auto mt-8 max-w-4xl space-y-4">
            {workflowSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm"
              >
                <p className="text-sm font-semibold text-zinc-900">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            kicker="What the guided setup covers"
            title="Answer these once, then preview the pack"
            desc="Your answers shape the wording across the agreement, PAR-Q, and waiver."
          />

          <div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="grid gap-2 sm:grid-cols-2">
              {generatorQuestions.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-800"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <PrimaryLink href="/generate">Start guided setup</PrimaryLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
          <p className="text-sm font-semibold tracking-wide text-zinc-500">
            Ready to build?
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Start building your onboarding pack now
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600">
            Complete the guided setup, preview the structure, and unlock export
            for a one-time £29.95 payment.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryLink href="/generate">
              Start building my onboarding pack
            </PrimaryLink>
            <SecondaryLink href="/personal-trainer-contract-template-uk">
              View a free template first
            </SecondaryLink>
          </div>
        </div>
      </section>
    </main>
  );
}