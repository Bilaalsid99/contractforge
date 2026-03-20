export const metadata = {
  title: "Personal Trainer Contract Template UK",
  description:
    "Free personal trainer contract template for UK coaches. Understand what it covers, why it matters, and how to structure your client agreement properly.",
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
The Client confirms that they are responsible for disclosing any injury, medical condition, or physical limitation relevant to exercise participation.

7. Training Risk
The Client understands that physical training involves inherent risks, including the risk of injury, and agrees to participate voluntarily.

8. Trainer Responsibilities
The Trainer agrees to provide services with reasonable care and skill and to act within the scope of their role as a fitness professional.

9. Liability
Nothing in this agreement limits liability where it cannot lawfully be limited. Subject to that, any limit of liability should be clearly stated in the Trainer's full onboarding documents.

10. General Terms
This agreement should be read alongside any related health questionnaire, waiver, and terms and conditions used by the Trainer.

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
          <Badge>Free to review</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          Personal Trainer Contract Template (UK)
        </h1>

        <p className="mt-3 max-w-3xl text-zinc-600">
            A personal trainer contract sets out the agreement between you and your client, including services, payments, bookings, and responsibilities.
        </p>

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
                cancellation rules, and general training risk.
              </p>

              <div className="mt-5 grid gap-3">
                <BulletCard
                  title="What this template covers"
                  items={[
                    "Coaching services and session delivery",
                    "Bookings, payments, and cancellations",
                    "Late arrival and rescheduling expectations",
                    "Health disclosure and training risk",
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
                    "A contract is usually one part of a trainer’s onboarding process",
                    "Many trainers also use a PAR-Q, liability waiver, and terms and conditions",
                    "A complete onboarding pack can make the documents feel more connected",
                  ]}
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <PrimaryLink href="/generate">
                  View full onboarding pack
                </PrimaryLink>
                <SecondaryLink href="/">Back to home</SecondaryLink>
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
            In practice, the contract is often supported by health screening
            before training begins and liability wording that confirms the
            client understands the risks of exercise.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm font-semibold text-zinc-900">
                Often used alongside
              </p>
              <ul className="mt-2 space-y-2 text-sm text-zinc-600">
                <li>• PAR-Q Health Questionnaire</li>
                <li>• Liability Waiver</li>
                <li>• Consistent onboarding policies across the client journey</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm font-semibold text-zinc-900">
                Why some trainers start with the full pack
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Many trainers prefer starting with a structured onboarding pack
                so the agreement, health screening, and liability wording all
                work together from the beginning.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-4xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">
            Related personal trainer templates
          </h2>

          <p className="mt-2 text-sm text-zinc-600">
            Explore the other documents commonly used alongside a personal
            trainer contract.
          </p>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            <Link
              href="/personal-trainer-par-q-form-uk"
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
            >
              PAR-Q Form Template →
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
              href="/generate"
              className="rounded-xl border border-zinc-900 bg-zinc-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-zinc-800 sm:col-span-2"
            >
              View Complete Client Onboarding Pack →
            </Link>
          </div>
        </section>
    
      </main>
    </div>
  );
}