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

const waiverTemplate = `PERSONAL TRAINER LIABILITY WAIVER (UK)

Trainer / Business: [Trainer name / Business name]
Client: [Client name]

1. Participation in Exercise
The Client understands that participation in physical training involves physical exertion and carries inherent risks, including the risk of injury.

2. Health Responsibility
The Client confirms that they are responsible for disclosing any medical condition, injury, illness, or limitation that may affect their ability to participate safely in exercise.

3. Voluntary Participation
The Client agrees that participation in training sessions is voluntary and that they may stop exercise at any time if they feel pain, discomfort, dizziness, or any unusual symptoms.

4. Acknowledgement of Risk
The Client acknowledges that physical activity carries risks which cannot be completely eliminated, even when reasonable care is taken by the Trainer.

5. Liability
To the extent permitted by law, the Client agrees that the Trainer is not responsible for injuries that arise from participation in training where reasonable care has been taken.

Nothing in this waiver excludes liability where it cannot legally be excluded.

6. Client Responsibility
The Client agrees to follow reasonable instructions given by the Trainer and to exercise within their personal limits.

7. General
This waiver should be read alongside any related personal training agreement, PAR-Q form, and terms and conditions used by the Trainer.

Client Signature: ______________________

Date: _________________________________`;

export default function PersonalTrainerWaiverFormUKPage() {
  return (
    <div className="bg-white">
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
          Use this liability waiver template to explain the risks associated with
          physical training and confirm that clients understand their
          responsibility when participating in exercise.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-zinc-900">
                Template overview
              </h2>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Liability waivers help trainers explain that physical exercise
                involves inherent risks and that clients participate voluntarily.
              </p>

              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-sm font-semibold text-zinc-900">
                    What this waiver covers
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-zinc-600">
                    <li>• Acknowledgement of exercise risks</li>
                    <li>• Client responsibility for health disclosure</li>
                    <li>• Voluntary participation wording</li>
                    <li>• Liability limitation wording</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-sm font-semibold text-zinc-900">
                    Who typically uses this
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-zinc-600">
                    <li>• Independent personal trainers</li>
                    <li>• Online coaching businesses</li>
                    <li>• Fitness studios</li>
                    <li>• Freelance PTs</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-sm font-semibold text-zinc-900">
                    Important context
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-zinc-600">
                    <li>• Waivers are usually part of a wider onboarding process</li>
                    <li>• Trainers often pair them with a contract and PAR-Q</li>
                    <li>• Consistent wording across documents can reduce confusion</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <PrimaryLink href="/client-onboarding-pack">
                  View full onboarding pack
                </PrimaryLink>

                <SecondaryLink href="/">
                  Back to home
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
            that sets out services and policies, and a PAR-Q form that helps
            identify whether any medical guidance may be needed before training
            begins.
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
                Many trainers prefer starting with a structured onboarding pack
                so their agreement, health screening, and liability wording all
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
            Explore the other documents commonly used when onboarding personal
            training clients.
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
              href="/personal-trainer-terms-and-conditions-uk"
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
            >
              Terms & Conditions Template →
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