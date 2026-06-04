export const metadata = {
  title: "Personal Trainer Liability Waiver Template UK | ContractForge",
  description:
    "Free personal trainer liability waiver template for UK coaches. Preview a supporting risk acknowledgement form that can sit alongside your agreement and onboarding documents.",
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

const waiverTemplate = `PERSONAL TRAINER LIABILITY WAIVER (UK)

Trainer / Business: [Trainer name / Business name]
Client: [Client name]

1. Participation in Exercise
The Client understands that participation in physical training involves physical exertion and carries inherent risks, including the risk of injury.

2. Health Responsibility
The Client confirms that they are responsible for disclosing any medical condition, injury, illness, medication, or limitation that may affect their ability to participate safely in exercise.

3. Voluntary Participation
The Client agrees that participation in training sessions is voluntary and that they may stop exercise at any time if they feel pain, discomfort, dizziness, chest discomfort, unusual breathlessness, or any concerning symptoms.

4. Acknowledgement of Risk
The Client acknowledges that physical activity carries risks which cannot be completely eliminated, even when reasonable care is taken by the Trainer.

5. Client Responsibility
The Client agrees to follow reasonable instructions given by the Trainer, work within their personal limits, and raise any relevant health or safety concerns before or during training.

6. Liability
Nothing in this waiver excludes liability where it cannot legally be excluded. Subject to that, the Client understands that the Trainer is not responsible for issues arising from undisclosed health information, failure to follow reasonable instructions, or participation outside agreed guidance.

7. General
This waiver should be read alongside any related personal training agreement, client intake form, PAR-Q / health and emergency details, and terms used by the Trainer.

Client Signature: ______________________

Date: _________________________________`;

export default function PersonalTrainerWaiverFormUKPage() {
  return (
    <div className="bg-white">
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>UK template</Badge>
          <Badge>Liability waiver</Badge>
          <Badge>Free preview</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          Personal Trainer Liability Waiver Template (UK)
        </h1>

        <p className="mt-3 max-w-3xl text-zinc-600">
          Use this liability waiver template to explain exercise risk, voluntary
          participation, health disclosure, and client responsibility when taking
          part in personal training.
        </p>

        <div className="mt-5 max-w-3xl rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <p className="text-sm font-semibold text-zinc-900">
            This free template is a supporting risk acknowledgement form.
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-600">
            A waiver can sit alongside the main agreement, client intake, and
            PAR-Q / health and emergency details. For a cleaner setup, build
            your agreement first so the main risk/liability wording stays
            connected to your wider service terms.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-zinc-900">
                Template overview
              </h2>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Liability waivers help trainers explain that physical exercise
                involves inherent risks and that clients participate voluntarily.
                They can also reinforce the client’s responsibility to disclose
                relevant health information and follow reasonable instructions.
              </p>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                This waiver should support the wider onboarding process rather
                than replace the main agreement. The agreement sets the wider
                service terms, while the waiver focuses on risk acknowledgement
                and voluntary participation.
              </p>

              <div className="mt-5 grid gap-3">
                <BulletCard
                  title="What this waiver covers"
                  items={[
                    "Acknowledgement of exercise risks",
                    "Client responsibility for health disclosure",
                    "Voluntary participation wording",
                    "Client responsibility during sessions",
                    "Liability limitation wording",
                  ]}
                />

                <BulletCard
                  title="Who typically uses this"
                  items={[
                    "Independent personal trainers",
                    "Online coaching businesses",
                    "Fitness studios",
                    "Freelance PTs",
                  ]}
                />

                <BulletCard
                  title="Important context"
                  items={[
                    "Waivers are usually part of a wider onboarding process",
                    "Trainers often pair them with an agreement and PAR-Q / health details",
                    "Consistent wording across documents can reduce confusion",
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
            <TemplateBlock text={waiverTemplate} />
          </div>
        </div>

        <section className="mx-auto mt-12 max-w-4xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-zinc-900">
            Where this waiver fits in a trainer’s onboarding process
          </h2>

          <p className="mt-3 text-sm leading-7 text-zinc-600">
            A liability waiver is usually used to confirm that the client
            understands the inherent risks of physical exercise and chooses to
            participate voluntarily.
          </p>

          <p className="mt-3 text-sm leading-7 text-zinc-600">
            In practice, many trainers use this alongside a training agreement
            that sets out services and policies, a client intake form that
            records goals and context, and PAR-Q / health and emergency details
            before training begins.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm font-semibold text-zinc-900">
                Often used alongside
              </p>

              <ul className="mt-2 space-y-2 text-sm text-zinc-600">
                <li>• Personal Training Agreement</li>
                <li>• Client Intake / Consultation Form</li>
                <li>• PAR-Q / Health &amp; Emergency Details</li>
                <li>• Clear onboarding policies for sessions and participation</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm font-semibold text-zinc-900">
                Why some trainers start with the connected pack
              </p>

              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Many trainers prefer starting with a structured onboarding pack
                so their agreement, intake details, PAR-Q / health details, and
                risk acknowledgement wording all follow the same setup.
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
            Explore other documents commonly used when onboarding personal
            training clients. Each free template is a preview of one part of the
            wider onboarding setup.
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
              PAR-Q / Health Details Template →
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