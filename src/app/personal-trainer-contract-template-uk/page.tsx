export const metadata = {
  title: "Free Personal Trainer Contract Template UK | ContractForge",
  description:
    "Free personal trainer contract template for UK coaches. Preview the core agreement inside the Personal Trainer Client Onboarding Pack and build your agreement first.",
};

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
            Copy and adapt this structure, or use the builder for a cleaner
            agreement-first setup.
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

const contractTemplate = `PERSONAL TRAINER CLIENT AGREEMENT (UK)

Trainer: [Trainer name]
Business: [Business / trading name]
Client: [Client name]
Start date: [Date]

1. Services
The Trainer agrees to provide personal training services to the Client. Sessions may be delivered in person, online, or in another agreed format.

2. Session Booking
Sessions must be booked in advance at mutually agreed times. Session length, location, and delivery method will be confirmed during booking.

3. Fees and Payment
The Client agrees to pay the fees set by the Trainer for the agreed services. Payment may be required per session, monthly, or in blocks, depending on the Trainer's pricing structure.

4. Cancellations and Rescheduling
The Client must provide at least [24] hours' notice to cancel or reschedule a session. If sufficient notice is not given, the Trainer may charge the full session fee.

5. Late Arrival
If the Client arrives late, the session may still end at the scheduled time. The full fee may still apply.

6. Health and Readiness
The Client confirms that they are responsible for disclosing any injury, medical condition, medication, or physical limitation relevant to exercise participation.

7. Training Risk
The Client understands that physical training involves inherent risks, including the risk of injury, and agrees to participate voluntarily.

8. Client Responsibilities
The Client agrees to follow reasonable instructions, work within their personal limits, and stop exercise if they experience pain, dizziness, chest discomfort, unusual breathlessness, or any concerning symptoms.

9. Trainer Responsibilities
The Trainer agrees to provide services with reasonable care and skill and to act within the scope of their role as a fitness professional.

10. Liability
Nothing in this agreement limits liability where it cannot lawfully be limited. Subject to that, the Client understands that the Trainer is not responsible for issues arising from undisclosed health information, failure to follow reasonable instructions, or participation outside agreed guidance.

11. Related Onboarding Information
This agreement should be read alongside any related client intake form, PAR-Q / health and emergency details, and incident report process used by the Trainer.

Signed:

Trainer: ______________________
Client: ______________________
Date: ________________________`;

export default function PersonalTrainerContractTemplateUKPage() {
  return (
    <div className="bg-white">
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>UK template</Badge>
          <Badge>Personal trainer contract</Badge>
          <Badge>Free preview</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          Personal Trainer Contract Template (UK)
        </h1>

        <p className="mt-3 max-w-3xl text-zinc-600">
          A personal trainer contract sets out the agreement between you and
          your client, including services, payments, bookings, cancellations,
          responsibilities and training risk.
        </p>

        <div className="mt-5 max-w-3xl rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <p className="text-sm font-semibold text-zinc-900">
            This free template previews the core agreement inside the Personal
            Trainer Client Onboarding Pack.
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-600">
            For a cleaner setup, build your agreement first, then unlock the
            connected client intake, PAR-Q / health and emergency details, and
            incident report around the agreement.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-zinc-900">
                Template overview
              </h2>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                A personal trainer contract usually sets out the working
                relationship between trainer and client. This includes the
                coaching service, payment structure, session booking,
                cancellation rules, client responsibilities, and general
                training risk.
              </p>

              <div className="mt-5 grid gap-3">
                <BulletCard
                  title="What this template covers"
                  items={[
                    "Coaching services and session delivery",
                    "Bookings, payments, and cancellations",
                    "Late arrival and rescheduling expectations",
                    "Health disclosure and training risk",
                    "Client and trainer responsibilities",
                    "General agreement terms",
                  ]}
                />

                <BulletCard
                  title="Who typically uses this template"
                  items={[
                    "Independent personal trainers",
                    "Online coaches offering 1:1 sessions",
                    "Mobile or home-visit trainers",
                    "Small studios and freelance PTs",
                  ]}
                />

                <BulletCard
                  title="Important to know"
                  items={[
                    "The agreement is usually the centre of a trainer’s onboarding process",
                    "Many trainers also use a client intake form, PAR-Q / health and emergency details, and an incident report for records if needed",
                    "The connected pack keeps the agreement and supporting documents aligned",
                  ]}
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <PrimaryLink href="/client-onboarding-pack">
                  View the Client Onboarding Pack
                </PrimaryLink>
                <SecondaryLink href="/generate">
                  Start Building Your Agreement
                </SecondaryLink>
              </div>
            </div>
          </div>

          <div>
            <TemplateBlock text={contractTemplate} />
          </div>
        </div>

        <section className="mx-auto mt-12 max-w-4xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-zinc-900">
            Where this template fits in a trainer’s onboarding process
          </h2>

          <p className="mt-3 text-sm leading-7 text-zinc-600">
            This template can be useful on its own, but many trainers organise
            client onboarding as a small set of documents that work together.
          </p>

          <p className="mt-3 text-sm leading-7 text-zinc-600">
            In practice, the agreement is often supported by client intake
            details, PAR-Q / health and emergency details, and an incident
            report for records if needed. The main risk/liability wording should
            sit inside the agreement.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm font-semibold text-zinc-900">
                Often used alongside
              </p>
              <ul className="mt-2 space-y-2 text-sm text-zinc-600">
                <li>• Client Intake / Consultation Form</li>
                <li>• PAR-Q / Health &amp; Emergency Details</li>
                <li>• Incident / Injury Report Form</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm font-semibold text-zinc-900">
                Why some trainers start with the connected pack
              </p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Many trainers prefer starting with a structured onboarding pack
                so the agreement, intake details, PAR-Q / health and emergency
                details, and incident records all follow the same setup.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <PrimaryLink href="/client-onboarding-pack">
              View the Client Onboarding Pack
            </PrimaryLink>
            <SecondaryLink href="/generate">
              Start Building Your Agreement
            </SecondaryLink>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-4xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">
            Related personal trainer templates
          </h2>

          <p className="mt-2 text-sm text-zinc-600">
            Explore other documents commonly used alongside a personal trainer
            contract. Each free template is a preview of one part of the wider
            onboarding setup.
          </p>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            <Link
              href="/personal-trainer-par-q-form-uk"
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
            >
              PAR-Q / Health Details Template →
            </Link>

            <Link
              href="/personal-trainer-waiver-form-uk"
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
            >
              Liability Waiver Template →
            </Link>

            <Link
              href="/personal-trainer-terms-and-conditions-uk"
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
            >
              Terms &amp; Conditions Template →
            </Link>

            <Link
              href="/personal-trainer-cancellation-policy-template"
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
            >
              Cancellation Policy Template →
            </Link>

            <Link
              href="/client-onboarding-pack"
              className="rounded-xl border border-zinc-900 bg-zinc-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-zinc-800 sm:col-span-2"
            >
              View the Client Onboarding Pack →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}