export const metadata = {
  title: "Home Visit Personal Training Waiver UK | ContractForge",
  description:
    "Free home visit personal training waiver template for UK trainers. Preview a supporting form that can sit alongside your client agreement and onboarding documents.",
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

function TemplateBlock({ children }: { children: React.ReactNode }) {
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
        <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-zinc-800">
          {children}
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

export default function HomeVisitPersonalTrainingWaiverUkPage() {
  return (
    <div className="bg-white">
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>UK template</Badge>
          <Badge>Home visit waiver</Badge>
          <Badge>Free preview</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          Home Visit Personal Training Waiver Template UK
        </h1>

        <p className="mt-3 max-w-3xl text-zinc-600">
          This free home visit waiver helps record a client’s acknowledgement
          when personal training sessions take place at their home or another
          agreed private location.
        </p>

        <div className="mt-5 max-w-3xl rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <p className="text-sm font-semibold text-zinc-900">
            This free template is a supporting part of the Personal Trainer
            Client Onboarding Pack.
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-600">
            It should sit around the main agreement rather than replace it. For
            a cleaner setup, build your agreement first, then use the connected
            PAR-Q and supporting forms needed before the first session.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-zinc-900">
                Template overview
              </h2>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                This template is for personal trainers delivering sessions in a
                client’s home or another private setting. It adds written
                acknowledgement around the training environment, available
                space, basic safety, and client responsibility.
              </p>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                A home visit waiver is usually a supporting form. The main
                personal training agreement should still set the wider terms,
                payment rules, cancellation policy, responsibilities, and
                general training expectations.
              </p>

              <div className="mt-5 grid gap-3">
                <BulletCard
                  title="What this template covers"
                  items={[
                    "Acknowledgement that training takes place at the client’s location",
                    "Client responsibility for basic space and environment safety",
                    "Confirmation that participation remains voluntary",
                    "Additional location-specific risk wording",
                  ]}
                />

                <BulletCard
                  title="Who typically uses this template"
                  items={[
                    "Mobile personal trainers",
                    "Coaches offering in-home sessions",
                    "Trainers who want extra written acknowledgement for home visit work",
                  ]}
                />

                <BulletCard
                  title="Important to know"
                  items={[
                    "This should support, not replace, your main agreement",
                    "Clients should still complete health screening before training",
                    "The wording should reflect the way you actually deliver sessions",
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
            <TemplateBlock>
              {`HOME VISIT PERSONAL TRAINING WAIVER (UK)

Trainer / business name: [Your business name]
Client name: [Client full name]
Session address / location: [Address]
Date: [Date]

1. HOME VISIT TRAINING
I understand that my personal training sessions will take place at my home or at another private location agreed with the trainer.

2. TRAINING ENVIRONMENT
I understand that I am responsible for providing a suitable space for training, including a reasonably clear area free from obvious hazards, obstacles, or unsafe conditions so far as reasonably possible.

3. PARTICIPATION
I confirm that I am choosing to take part in personal training voluntarily and that I will inform the trainer of any relevant health issue, injury, discomfort, or concern before or during a session.

4. LOCATION-SPECIFIC RISK
I understand that training in a home or private environment may involve risks connected to available space, flooring, equipment, pets, household activity, or other conditions present at the location.

5. FOLLOWING INSTRUCTIONS
I agree to follow reasonable safety instructions given by the trainer during the session and to raise any concern if I feel unable to continue safely.

6. NO GUARANTEE OF RISK-FREE ACTIVITY
I understand that physical exercise carries inherent risk and that no training environment can remove all possibility of discomfort, strain, or injury.

7. USE WITH OTHER DOCUMENTS
I understand that this waiver is intended to sit alongside the trainer’s main agreement, health screening process, and general liability wording.

Client acknowledgement:

I have read and understood this home visit training waiver and agree to the above.

Client name: ______________________

Signature: ______________________

Date: ______________________`}
            </TemplateBlock>
          </div>
        </div>

        <section className="mx-auto mt-12 max-w-4xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-zinc-900">
            Where this template fits in a trainer’s onboarding process
          </h2>

          <p className="mt-3 text-sm leading-7 text-zinc-600">
            This document is a supporting waiver for trainers who deliver
            sessions at a client’s home. It works best alongside the main
            personal training agreement, PAR-Q, client intake, and standard
            liability wording rather than replacing them.
          </p>

          <p className="mt-3 text-sm leading-7 text-zinc-600">
            In practice, the agreement should come first because it sets the
            wider working relationship. This waiver only adds extra
            location-specific acknowledgement for home visit sessions.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm font-semibold text-zinc-900">
                Often used alongside
              </p>
              <ul className="mt-2 space-y-2 text-sm text-zinc-600">
                <li>• Personal Training Agreement</li>
                <li>• PAR-Q / Health & Emergency Details</li>
                <li>• Client Intake / Consultation Form</li>
                <li>• Incident / Injury Report Form</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm font-semibold text-zinc-900">
                Why the agreement still comes first
              </p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                The agreement sets the overall terms, payment rules,
                cancellation policy, responsibilities, and training
                expectations. This waiver only adds location-specific wording
                for home or private-location sessions.
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
            Explore the other documents commonly used alongside a personal
            trainer agreement. Each free template is a preview of one part of
            the wider onboarding setup.
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
              href="/liability-waiver-uk"
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
            >
              Liability Waiver Template →
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