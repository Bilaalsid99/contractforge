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

const cancellationTemplate = `PERSONAL TRAINER CANCELLATION POLICY (UK)

Trainer: [Trainer name]
Business: [Business / trading name]

1. Session Booking
Sessions must be booked in advance at mutually agreed times.

2. Cancellation Notice
Clients must provide at least [24] hours' notice to cancel or reschedule a session.

3. Late Cancellations
If sufficient notice is not given, the Trainer may charge the full session fee.

4. Missed Sessions
If the Client does not attend a booked session without notice, the session may be treated as used and charged in full.

5. Late Arrival
If the Client arrives late, the session may still end at the scheduled time. The full fee may still apply.

6. Trainer Cancellations
If the Trainer needs to cancel a session, reasonable notice will be given and the session will be rearranged where possible.

7. Exceptional Circumstances
The Trainer may use reasonable discretion in cases of illness, emergencies, or other exceptional circumstances.

8. General
This cancellation policy should be read alongside any related client contract and terms and conditions used by the Trainer.`;

export default function PersonalTrainerCancellationPolicyTemplatePage() {
  return (
    <div className="bg-white">
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>UK template</Badge>
          <Badge>Cancellation policy</Badge>
          <Badge>Free to review</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          Personal Trainer Cancellation Policy Template (UK)
        </h1>

        <p className="mt-3 max-w-3xl text-zinc-600">
          Use this cancellation policy template as a starting point for setting
          expectations around notice periods, missed sessions, late arrivals,
          and rescheduling.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-zinc-900">
                Template overview
              </h2>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                A cancellation policy helps trainers explain how session changes
                are handled. Many trainers include cancellation rules directly
                inside their client contract or terms and conditions, while
                others also keep a separate policy for clarity.
              </p>

              <div className="mt-5 grid gap-3">
                <BulletCard
                  title="What this template covers"
                  items={[
                    "Cancellation notice periods",
                    "Late cancellation charges",
                    "Missed sessions and no-shows",
                    "Late arrival wording",
                    "Trainer cancellation wording",
                  ]}
                />

                <BulletCard
                  title="Who typically uses this template"
                  items={[
                    "Independent personal trainers",
                    "Online coaching businesses",
                    "Mobile and home-visit trainers",
                    "Small studios and PT businesses",
                  ]}
                />

                <BulletCard
                  title="Important context"
                  items={[
                    "Cancellation wording often overlaps with contracts and terms",
                    "Many trainers want the same rules reflected across documents",
                    "A complete onboarding pack can make those rules easier to keep consistent",
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
            <TemplateBlock text={cancellationTemplate} />
          </div>
        </div>

        <section className="mx-auto mt-12 max-w-4xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-zinc-900">
            Where this template fits in a trainer’s onboarding process
          </h2>

          <p className="mt-3 text-sm leading-7 text-zinc-600">
            A cancellation policy can be useful on its own, but many trainers
            prefer to keep cancellation rules aligned with the wider onboarding
            process so payment expectations, booking rules, and client
            responsibilities are set out more clearly.
          </p>

          <p className="mt-3 text-sm leading-7 text-zinc-600">
            In practice, cancellation terms often sit within a broader
            agreement, alongside health screening before training begins and
            liability wording that confirms the client understands the risks of
            exercise.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm font-semibold text-zinc-900">
                Often used alongside
              </p>
              <ul className="mt-2 space-y-2 text-sm text-zinc-600">
                <li>• Personal Training Agreement</li>
                <li>• PAR-Q Health Questionnaire</li>
                <li>• Liability Waiver</li>
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
            Explore the other documents commonly used alongside a cancellation
            policy.
          </p>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            <Link
              href="/personal-trainer-contract-template-uk"
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
            >
              Personal Trainer Contract Template →
            </Link>

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
  href="/client-onboarding-pack"
  className="rounded-xl border border-zinc-900 bg-zinc-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-zinc-800 sm:col-span-2"
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