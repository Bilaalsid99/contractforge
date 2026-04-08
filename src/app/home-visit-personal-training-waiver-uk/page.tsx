export const metadata = {
  title: "Home Visit Personal Training Waiver (UK)",
  description:
    "Free home visit personal training waiver template for UK trainers. Review a simple client acknowledgement form for sessions delivered at home.",
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

function BulletCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
      <h2 className="text-sm font-semibold text-zinc-900">{title}</h2>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </div>
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
      className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-50"
    >
      {children}
    </Link>
  );
}

function TemplateBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="rounded-2xl bg-zinc-50 p-5 text-sm leading-7 text-zinc-800">
        <pre className="whitespace-pre-wrap font-sans">{children}</pre>
      </div>
    </div>
  );
}

export default function HomeVisitPersonalTrainingWaiverUkPage() {
  return (
    <main className="bg-zinc-50">
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3">
          <Badge>UK template</Badge>
          <Badge>Waiver form</Badge>
          <Badge>Free to review</Badge>
        </div>

        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          Home Visit Personal Training Waiver (UK)
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
          A home visit training waiver records a client’s acknowledgement that
          sessions are taking place at their home or chosen location. It helps
          set expectations around space, safety, and personal responsibility.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.05fr]">
          <div className="space-y-5">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-zinc-900">
                Template overview
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-700">
                This template is for personal trainers delivering sessions in a
                client’s home or another private setting. It adds a clear layer
                of written acknowledgement around the training environment and
                works alongside a wider onboarding pack.
              </p>
            </div>

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
              title="Who uses this template"
              items={[
                "Mobile personal trainers",
                "Coaches offering in-home sessions",
                "Trainers who want extra written protection for home visit work",
              ]}
            />

            <BulletCard
              title="Important to know"
              items={[
                "This should support, not replace, your main agreement and waiver",
                "Clients should still complete health screening before training",
                "The wording should reflect the way you actually deliver sessions",
              ]}
            />

            <div className="flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/generate">
                Build your onboarding pack
              </PrimaryLink>
              <SecondaryLink href="/">Back to home</SecondaryLink>
            </div>
          </div>

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

        <section className="mt-14 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Where this fits in onboarding
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-700">
            This document is a supporting waiver for trainers who deliver
            sessions at a client’s home. It works best alongside the main
            contract, PAR-Q, and standard liability waiver rather than replacing
            them, because it adds location-specific wording to the wider
            onboarding process.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <h3 className="text-sm font-semibold text-zinc-900">
                Often used alongside
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                <li>- Personal trainer contract</li>
                <li>- PAR-Q health questionnaire</li>
                <li>- Standard liability waiver</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <h3 className="text-sm font-semibold text-zinc-900">
                Why some trainers include it
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-700">
                It adds a simple written acknowledgement for home-based sessions
                where the training environment is different from a gym or studio
                setting.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Related personal trainer templates
          </h2>
          <p className="mt-3 text-sm leading-7 text-zinc-700">
            Review other UK onboarding documents commonly used around in-person
            or home-based training.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link
              href="/personal-trainer-contract-template-uk"
              className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
            >
              Personal Trainer Contract Template →
            </Link>
            <Link
              href="/personal-trainer-par-q-form-uk"
              className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
            >
              PAR-Q Form Template →
            </Link>
            <Link
              href="/liability-waiver-uk"
              className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
            >
              Liability Waiver Template →
            </Link>
            <Link
              href="/personal-trainer-cancellation-policy-template"
              className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
            >
              Cancellation Policy Template →
            </Link>
          </div>

          <div className="mt-5">
            <Link
              href="/generate"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-zinc-900 px-5 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
            >
              View Complete Client Onboarding Pack →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}