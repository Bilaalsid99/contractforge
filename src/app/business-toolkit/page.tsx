import React from "react";
import Link from "next/link";

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

export default function BusinessToolkitPage() {
  const onboardingItems = [
    "Personal Training Agreement",
    "PAR-Q Health Questionnaire",
    "Liability Waiver",
    "Emergency & Health Information Form",
    "Incident / Injury Report Form",
    "Client Onboarding Guide for Personal Trainers",
  ];

  const intakeItems = [
    "Client consultation form",
    "Goal discovery worksheet",
    "Trial session checklist",
    "Lead qualification questions",
  ];

  const deliveryItems = [
    "Training program template",
    "Session notes template",
    "Workout log sheet",
    "Weekly progress tracker",
  ];

  const managementItems = [
    "Monthly check-in form",
    "Goal review worksheet",
    "Client progress report template",
    "Referral request template",
  ];

  const protectionItems = [
    "Risk assessment template",
    "Equipment safety checklist",
    "Injury follow-up form",
    "Incident investigation log",
  ];

  const workflowAreas = [
    "Lead intake and consultation",
    "Client onboarding",
    "Training delivery",
    "Progress tracking",
    "Client management",
    "Risk and protection",
  ];

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
          <Badge>Coming soon</Badge>
          <Badge>One-time purchase model</Badge>
          <Badge>No subscription</Badge>
          <Badge>Built for UK personal trainers</Badge>
        </div>

        <SectionTitle
          kicker="Personal Trainer Business Toolkit"
          title="A fuller system for running your personal training business"
          desc="The Client Onboarding Pack solves the first step. The full Business Toolkit is planned as a broader set of templates for lead intake, onboarding, delivery, tracking, and client management."
        />

        <div className="mx-auto mt-8 grid max-w-5xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">
              What the full toolkit is designed to cover
            </p>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              This page previews the broader direction of ContractForge. Instead
              of stopping at onboarding, the full toolkit is intended to help
              personal trainers handle the key parts of running a professional,
              organised client workflow.
            </p>

            <div className="mt-5 grid gap-4">
              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-lg">
                    🧾
                  </span>
                  <div className="min-w-0">
                    <p className="text-base font-semibold text-zinc-900">
                      Client onboarding system
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-zinc-500">
                      Available now as a separate pack
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-sm text-zinc-600">
                  Covers the core documents most trainers need to start working
                  with clients safely and professionally.
                </p>

                <CheckList items={onboardingItems} />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-lg">
                      🗂️
                    </span>
                    <div>
                      <p className="text-base font-semibold text-zinc-900">
                        Lead intake & consultation
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-zinc-600">
                    Templates designed to help organise new enquiries before a
                    client officially starts.
                  </p>

                  <CheckList items={intakeItems} />
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-lg">
                      🏋️
                    </span>
                    <div>
                      <p className="text-base font-semibold text-zinc-900">
                        Training delivery
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-zinc-600">
                    Tools to help trainers organise sessions, programming, and
                    progress more consistently.
                  </p>

                  <CheckList items={deliveryItems} />
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-lg">
                    📈
                  </span>
                  <div>
                    <p className="text-base font-semibold text-zinc-900">
                      Client management
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-sm text-zinc-600">
                  Review progress, manage follow-up, and keep client
                  communication clearer over time.
                </p>

                <CheckList items={managementItems} />
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-lg">
                    🛡️
                  </span>
                  <div>
                    <p className="text-base font-semibold text-zinc-900">
                      Risk & protection
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-sm text-zinc-600">
                  Additional documents intended to support safer practice and
                  more consistent documentation if something goes wrong.
                </p>

                <CheckList items={protectionItems} />
              </div>
            </div>

            <p className="mt-5 text-xs text-zinc-500">
              This toolkit is planned as a broader operating system for
              personal trainers, not a subscription product and not a dashboard
              SaaS.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/client-onboarding-pack" className="sm:flex-1">
                View the Client Onboarding Pack
              </PrimaryLink>
              <SecondaryLink href="/generate">
                Start with the current pack
              </SecondaryLink>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-zinc-500">Status</p>
            <p className="mt-2 text-4xl font-bold tracking-tight text-zinc-900">
              Coming soon
            </p>
            <p className="mt-2 text-sm text-zinc-600">
              The Business Toolkit is not available yet. The Client Onboarding
              Pack is the live product currently available on ContractForge.
            </p>

            <div className="mt-6 space-y-3 text-sm text-zinc-700">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                No subscription planned
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                Built around editable templates
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                Designed as a wider PT business system
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm font-semibold text-zinc-900">
                Current best place to start
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
                  <span>Supporting onboarding templates</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <PrimaryLink href="/client-onboarding-pack" className="w-full">
                View current product
              </PrimaryLink>
            </div>

            <p className="mt-3 text-xs text-zinc-500">
              The live product today is the Personal Trainer Client Onboarding
              Pack.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            kicker="How this differs"
            title="The onboarding pack solves one stage. The full toolkit is intended to cover the wider workflow."
            desc="The difference is not just more templates. The difference is scope. The onboarding pack helps trainers start safely. The full toolkit is intended to support how the business runs more broadly."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card title="1. Narrower current product">
              The Client Onboarding Pack focuses on agreements, health
              screening, liability, and supporting safety forms.
            </Card>

            <Card title="2. Wider future toolkit">
              The Business Toolkit is intended to expand into lead intake,
              programming, progress tracking, and client management.
            </Card>

            <Card title="3. Same simple delivery style">
              The plan is still a one-time purchase model built around practical
              templates, not a recurring subscription platform.
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            kicker="What the toolkit would organise"
            title="A broader personal trainer workflow"
            desc="This is the kind of operating structure the toolkit is intended to support."
          />

          <div className="mx-auto mt-8 max-w-4xl space-y-4">
            {workflowAreas.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm"
              >
                <p className="text-sm font-semibold text-zinc-900">
                  Stage {index + 1}
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
            kicker="What would be included"
            title="Planned toolkit areas"
            desc="The full toolkit is intended to expand beyond onboarding and cover the wider practical systems many trainers end up creating for themselves."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Card title="Lead intake and consultation">
              <CheckList items={intakeItems} />
            </Card>

            <Card title="Training delivery and tracking">
              <CheckList items={deliveryItems} />
            </Card>

            <Card title="Client management">
              <CheckList items={managementItems} />
            </Card>

            <Card title="Risk and protection">
              <CheckList items={protectionItems} />
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <SectionTitle
            kicker="Start with the current product"
            title="The Client Onboarding Pack is the live first step"
            desc="If you want something available now, the Client Onboarding Pack is the current product. It already covers the core documents many trainers need before they start training clients."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Card title="Available now">
              <CheckList items={onboardingItems} />
            </Card>

            <Card title="Planned wider system">
              <CheckList
                items={[
                  "Lead intake tools",
                  "Consultation templates",
                  "Training delivery templates",
                  "Progress tracking tools",
                  "Client management templates",
                  "Risk and protection documents",
                ]}
              />
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
          <p className="text-sm font-semibold tracking-wide text-zinc-500">
            Available now
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Start with the Client Onboarding Pack
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600">
            Generate your agreement, PAR-Q, and waiver in minutes, then use the
            supporting onboarding templates to run a cleaner first-step process
            with new clients.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryLink href="/client-onboarding-pack">
              View Client Onboarding Pack
            </PrimaryLink>
            <SecondaryLink href="/generate">
              Start building now
            </SecondaryLink>
          </div>
        </div>
      </section>
    </main>
  );
}