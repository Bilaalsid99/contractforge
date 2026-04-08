import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personal Trainer Client Onboarding Pack (UK)",
  description:
    "Preview the Personal Trainer Client Onboarding Pack (UK), built around one core agreement, a standard PAR-Q, and practical supporting forms.",
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
      className={`inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 ${className}`}
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
    "Payment terms and structure",
    "Cancellation and attendance rules",
    "Communication boundaries",
    "Client responsibilities",
    "Health and risk acknowledgement",
    "General training expectations",
  ];

  const generatorQuestions = [
    "Trainer and business details",
    "Training location",
    "Session duration",
    "Coaching scope",
    "Payment structure and timing",
    "Cancellation and attendance rules",
    "Communication boundaries",
    "Emergency contact requirement",
    "Risk acknowledgement wording",
    "Online coaching and group training options",
  ];

  const optionalRefinements = [
    "Session expiry",
    "Minimum commitment",
    "Rescheduling rules",
    "Trainer cancellation rule",
    "Training environment responsibility",
  ];

  const packItems = [
    "PAR-Q Health Questionnaire",
    "Client Intake / Consultation Form",
    "Emergency & Health Information Form",
    "Incident / Injury Report Form",
  ];

  const workflowSteps = ["Send intake", "Send agreement", "Complete screening"];

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
          desc="Built around one strong agreement, with a standard PAR-Q and supporting forms included in the pack."
        />

        <div className="mx-auto mt-8 grid max-w-5xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">
              What this gives you
            </p>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              Set up your agreement properly once, then use the included forms
              when onboarding a new client.
            </p>

            <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-base font-semibold text-zinc-900">
                Personal Training Agreement
              </p>
              <p className="mt-3 text-sm text-zinc-600">
                Your core document. This is what sets expectations and supports
                your coaching setup.
              </p>

              <CheckList items={agreementCoverage} />
            </div>

            <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-sm font-semibold text-zinc-900">
                Included in the pack
              </p>

              <CheckList items={packItems} />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/generate" className="sm:flex-1">
                Start building my agreement
              </PrimaryLink>
              <SecondaryLink href="/personal-trainer-contract-template-uk">
                View a free template first
              </SecondaryLink>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-zinc-500">One-time price</p>
            <p className="mt-2 text-4xl font-bold text-zinc-900">£29.95</p>

            <p className="mt-2 text-sm text-zinc-600">
              Build, preview, then unlock.
            </p>

            <div className="mt-6 space-y-3 text-sm text-zinc-700">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                No subscription
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                Reusable for future clients
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                Agreement-first setup
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            kicker="How it works"
            title="Simple onboarding flow"
            desc="Keep the setup light and move forward quickly."
          />

          <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
            {workflowSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-zinc-200 bg-white p-5 text-center"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-sm font-semibold text-zinc-900">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            kicker="What you set up"
            title="Answer once, reuse for future clients"
            desc="The builder stays focused on the agreement itself."
          />

          <div className="mt-8 grid gap-2 sm:grid-cols-2">
            {generatorQuestions.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-800"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-sm font-semibold text-zinc-900">
              Optional refinements
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {optionalRefinements.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <PrimaryLink href="/generate">Start guided setup</PrimaryLink>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-zinc-900">
            Start building your agreement
          </h2>

          <p className="mt-4 text-zinc-600">
            Set it up once. Reuse it for future clients.
          </p>

          <div className="mt-8">
            <PrimaryLink href="/generate">Start building now</PrimaryLink>
          </div>
        </div>
      </section>
    </main>
  );
}