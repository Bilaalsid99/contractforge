"use client";

import React from "react";
import Link from "next/link";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm">
      {children}
    </span>
  );
}

function PrimaryLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
    >
      {children}
    </Link>
  );
}

function SecondaryLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50"
    >
      {children}
    </Link>
  );
}

function TemplateBlock({ text }: { text: string }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-4 shadow-sm sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-zinc-900">Free template</p>
          <p className="mt-1 text-xs text-zinc-500">
            Copy and adapt this structure for your coaching business.
          </p>
        </div>
        <Badge>Copy-ready</Badge>
      </div>

      <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
        <pre className="whitespace-pre-wrap text-sm leading-7 text-zinc-800">
          {text}
        </pre>
      </div>
    </div>
  );
}

function BulletCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
      <p className="text-sm font-semibold text-zinc-900">{title}</p>
      <ul className="mt-3 space-y-2 text-sm text-zinc-600">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

const waiverTemplate = `PERSONAL TRAINER LIABILITY WAIVER (UK)

Trainer: [Trainer name]
Business: [Business / trading name]
Client: [Client name]
Date: [Date]

1. Acknowledgement of Risk
The Client understands that physical exercise and personal training involve inherent risks, including but not limited to muscle strain, falls, dizziness, illness, or other injury.

2. Voluntary Participation
The Client confirms that participation in personal training sessions is voluntary and that they choose to take part at their own discretion.

3. Health Responsibility
The Client confirms that they have disclosed any relevant medical condition, injury, medication, or physical limitation that may affect safe participation in exercise.

4. Medical Advice
Where appropriate, the Client understands that they may need to seek advice from a qualified medical professional before beginning or continuing a training programme.

5. Following Instructions
The Client agrees to follow reasonable instructions given by the Trainer and to stop exercise immediately if pain, dizziness, or unusual symptoms occur.

6. Personal Responsibility
The Client understands that it is their responsibility to inform the Trainer of any change in health, injury status, or relevant symptoms before or during training.

7. Limitation of Liability
Nothing in this waiver excludes liability where it cannot lawfully be excluded. Subject to that, the Client acknowledges the general risks of exercise participation.

8. General
This waiver should be read alongside any related client contract, PAR-Q form, and terms and conditions used by the Trainer.

Client Signature: ______________________

Date: _________________________________`;

export default function PersonalTrainerWaiverFormUKPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="text-sm font-bold text-zinc-900">
            ContractForge
          </Link>
          <PrimaryLink href="/client-onboarding-pack">
            View full pack
          </PrimaryLink>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>UK template</Badge>
          <Badge>Liability waiver</Badge>
          <Badge>Free to review</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          Personal Trainer Liability Waiver Template (UK)
        </h1>

        <p className="mt-3 max-w-3xl text-zinc-600">
          Use this liability waiver template as a starting point for explaining
          the general risks of physical training and recording that a client is
          choosing to participate voluntarily.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-zinc-900">
                Template overview
              </h2>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                A liability waiver helps trainers explain the general risks
                involved in exercise and confirm that a client understands those
                risks before taking part.
              </p>

              <div className="mt-5 grid gap-3">
                <BulletCard
                  title="What this template covers"
                  items={[
                    "General exercise risk acknowledgement",
                    "Voluntary participation wording",
                    "Client responsibility for health disclosure",
                    "Following trainer instructions",
                    "Basic liability-related wording",
                  ]}
                />

                <BulletCard
                  title="Who typically uses this template"
                  items={[
                    "Independent personal trainers",
                    "Online fitness coaches",
                    "Mobile and home-visit trainers",
                    "Small studios and PT businesses",
                  ]}
                />

                <BulletCard
                  title="Important context"
                  items={[
                    "A waiver is usually one part of the onboarding process",
                    "It often sits alongside a contract and PAR-Q form",
                    "Many trainers prefer using it within a complete onboarding pack",
                  ]}
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <PrimaryLink href="/client-onboarding-pack">
                  View full onboarding pack
                </PrimaryLink>
                <SecondaryLink href="/">Back to home</SecondaryLink>
              </div>
            </div>
          </div>

          <div>
            <TemplateBlock text={waiverTemplate} />
          </div>
        </div>

        <section className="mx-auto mt-12 max-w-4xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
  <h2 className="text-xl font-semibold text-zinc-900">
    Where this template fits in a trainer’s onboarding process
  </h2>

  <p className="mt-3 text-sm leading-7 text-zinc-600">
    A liability waiver can be useful on its own, but many trainers do not rely
    on it alone. It is often used alongside health screening before training
    begins and a training agreement that sets out the service, expectations,
    and policies more clearly.
  </p>

  <p className="mt-3 text-sm leading-7 text-zinc-600">
    Used together, these documents help confirm that the client has disclosed
    relevant health information, understands the risks of exercise, and has
    agreed to the basic structure of the training relationship.
  </p>

  <div className="mt-6 grid gap-3 sm:grid-cols-2">
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
      <p className="text-sm font-semibold text-zinc-900">
        Often used alongside
      </p>
      <ul className="mt-2 space-y-2 text-sm text-zinc-600">
        <li>• Personal Training Agreement</li>
        <li>• PAR-Q Health Questionnaire</li>
        <li>• Clear onboarding policies for sessions and participation</li>
      </ul>
    </div>

    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
      <p className="text-sm font-semibold text-zinc-900">
        Why some trainers start with the full pack
      </p>
      <p className="mt-2 text-sm text-zinc-600">
        Many trainers prefer starting with a structured onboarding pack so
        service terms, health screening, and liability wording all work
        together from the beginning.
      </p>
    </div>
  </div>

  <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
    <h3 className="text-base font-semibold text-zinc-900">
      Complete Personal Trainer Client Onboarding Pack
    </h3>
    <p className="mt-2 text-sm text-zinc-600">
      If you want your waiver, agreement, and PAR-Q to work together as a
      clean onboarding system, you can start with the full onboarding pack.
    </p>

    <div className="mt-4">
      <PrimaryLink href="/client-onboarding-pack">
        Start building your onboarding pack
      </PrimaryLink>
    </div>
  </div>
</section>

        <section className="mx-auto mt-12 max-w-4xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">
            Related personal trainer templates
          </h2>

          <p className="mt-2 text-sm text-zinc-600">
            Explore the other documents commonly used alongside a liability
            waiver.
          </p>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            <Link
              href="/personal-trainer-contract-template-uk"
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-100"
            >
              Personal Trainer Contract Template →
            </Link>

            <Link
              href="/personal-trainer-par-q-form-uk"
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-100"
            >
              PAR-Q Form Template →
            </Link>

            <Link
              href="/personal-trainer-terms-and-conditions-uk"
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-100"
            >
              Terms &amp; Conditions Template →
            </Link>

            <Link
              href="/personal-trainer-cancellation-policy-template"
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-100"
            >
              Cancellation Policy Template →
            </Link>

            <Link
              href="/client-onboarding-pack"
              className="rounded-xl border border-zinc-900 bg-zinc-900 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-zinc-800 sm:col-span-2"
            >
              View Complete Client Onboarding Pack →
            </Link>
          </div>
        </section>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs text-zinc-500">
          Not legal advice. This template is provided for general information
          and drafting support. For unusual or high-risk situations, consult a
          solicitor.
        </p>
      </main>
    </div>
  );
}