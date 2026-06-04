import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personal Trainer Client Onboarding Pack UK | ContractForge",
  description:
    "Build your UK personal trainer agreement first, then unlock the connected client intake, PAR-Q, health details and incident report.",
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

      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
        {title}
      </h2>

      {desc && <p className="mt-4 text-base text-zinc-600">{desc}</p>}
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
    "Health, risk and liability wording",
    "General training expectations",
  ];

  const packItems = [
    "Personal Training Agreement",
    "Client Intake / Consultation Form",
    "PAR-Q / Health & Emergency Details",
    "Incident / Injury Report Form",
  ];

  const workflowSteps = [
    {
      title: "Build your agreement",
      desc: "Start with the core personal training agreement and answer the key setup questions.",
    },
    {
      title: "Unlock the connected forms",
      desc: "After purchase, access the intake form, PAR-Q / health details and incident report that sit around the agreement.",
    },
    {
      title: "Complete client setup",
      desc: "Use the agreement to set expectations, the intake form to understand client goals, and the PAR-Q / health details before training begins.",
    },
  ];

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
          <Badge>£29.95 one-time purchase</Badge>
          <Badge>Build before paying</Badge>
          <Badge>Agreement-first setup</Badge>
          <Badge>UK-focused wording</Badge>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-wide text-zinc-500">
            Personal Trainer Client Onboarding Pack (UK)
          </p>

          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            Build your agreement first, then unlock the connected onboarding
            pack
          </h1>

          <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">
            Create one core personal training agreement, then get the connected
            intake form, PAR-Q / health details and supporting records needed to
            onboard clients clearly.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryLink href="/generate">
              Start Building Your Agreement
            </PrimaryLink>

            <SecondaryLink href="#included">See What’s Included</SecondaryLink>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div
            id="included"
            className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm"
          >
            <p className="text-sm font-semibold text-zinc-900">
              What this gives you
            </p>

            <p className="mt-2 text-sm leading-7 text-zinc-600">
              Build one core agreement first. After purchase, unlock the
              connected onboarding documents that support your client setup.
            </p>

            <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-base font-semibold text-zinc-900">
                Personal Training Agreement
              </p>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                This is the centre of the pack. Your agreement sets the
                expectations, payment terms, cancellation rules,
                responsibilities, health disclosure and risk/liability wording
                before the client starts training.
              </p>

              <CheckList items={agreementCoverage} />
            </div>

            <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-sm font-semibold text-zinc-900">
                Included in the connected pack
              </p>

              <p className="mt-2 text-sm leading-7 text-zinc-600">
                The supporting documents sit around the agreement. The intake
                form helps you understand client goals, the PAR-Q / health
                details support safer onboarding, and the incident report is
                ready if a record is ever needed.
              </p>

              <CheckList items={packItems} />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/generate" className="sm:flex-1">
                Start Building Your Agreement
              </PrimaryLink>

              <SecondaryLink href="#how-it-works" className="sm:flex-1">
                How It Works
              </SecondaryLink>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-zinc-500">
              One-time price
            </p>

            <p className="mt-2 text-4xl font-bold text-zinc-900">£29.95</p>

            <p className="mt-2 text-sm leading-7 text-zinc-600">
              Build your agreement first. Unlock the connected onboarding pack
              when you’re ready.
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

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                Supporting forms included
              </div>
            </div>

            <div className="mt-6">
              <PrimaryLink href="/generate" className="w-full">
                Start Building Your Agreement
              </PrimaryLink>
            </div>

            <p className="mt-4 text-xs leading-6 text-zinc-500">
              ContractForge provides practical onboarding document wording and a
              guided agreement builder. It is not legal advice, a CRM, a client
              portal, or an ongoing client management system.
            </p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            kicker="How it works"
            title="Agreement first. Supporting forms after."
            desc="Start with the core agreement, then use the connected forms to collect goals, health details and practical onboarding information."
          />

          <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-3">
            {workflowSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 text-center shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Step {index + 1}
                </p>

                <p className="mt-2 text-sm font-semibold text-zinc-900">
                  {step.title}
                </p>

                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <PrimaryLink href="/generate">
              Start Building Your Agreement
            </PrimaryLink>
          </div>
        </div>
      </section>
    </main>
  );
}