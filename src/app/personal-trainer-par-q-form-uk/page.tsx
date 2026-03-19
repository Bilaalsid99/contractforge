export const metadata = {
  title: "PAR-Q Form Template UK",
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

const parqTemplate = `PHYSICAL ACTIVITY READINESS QUESTIONNAIRE (PAR-Q)

Client Name: __________________________

Date of Birth: ________________________

Emergency Contact: _____________________

Phone Number: _________________________

Please answer the following questions honestly. If you answer YES to any question, consult a medical professional before beginning a training programme.

1. Has your doctor ever said you have a heart condition and that you should only do physical activity recommended by a doctor?

YES / NO

2. Do you feel pain in your chest during physical activity?

YES / NO

3. In the past month, have you had chest pain when not doing physical activity?

YES / NO

4. Do you lose balance because of dizziness or do you ever lose consciousness?

YES / NO

5. Do you have a bone or joint problem that could be made worse by a change in your physical activity?

YES / NO

6. Is your doctor currently prescribing medication for blood pressure or a heart condition?

YES / NO

7. Do you know of any other reason why you should not participate in physical activity?

YES / NO

If you answered YES to any question above, you may need medical clearance before participating in exercise.

Client Declaration

I confirm that the information provided above is accurate to the best of my knowledge. I understand that physical exercise involves inherent risks and that it is my responsibility to inform the trainer of any changes to my health.

Client Signature: ______________________

Date: _________________________________`;

export default function PersonalTrainerParQFormUKPage() {
  return (
    <div className="bg-white">
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>UK template</Badge>
          <Badge>PAR-Q form</Badge>
          <Badge>Free to review</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          Personal Trainer PAR-Q Form (UK)
        </h1>

        <p className="mt-3 max-w-3xl text-zinc-600">
          Use this PAR-Q form template to screen clients for health risks before
          starting a personal training programme.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-zinc-900">
                Template overview
              </h2>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                A PAR-Q (Physical Activity Readiness Questionnaire) helps
                trainers identify whether a client should consult a medical
                professional before starting exercise.
              </p>

              <div className="mt-5 grid gap-3">
                <BulletCard
                  title="What this form covers"
                  items={[
                    "Basic health screening",
                    "Cardiovascular risk questions",
                    "Medical conditions affecting exercise",
                    "Client declaration of health information",
                  ]}
                />

                <BulletCard
                  title="Who typically uses this form"
                  items={[
                    "Independent personal trainers",
                    "Online coaching businesses",
                    "Fitness studios",
                    "Small gyms and PT practices",
                  ]}
                />

                <BulletCard
                  title="Important context"
                  items={[
                    "PAR-Q forms help identify potential health risks",
                    "They are usually completed before training begins",
                    "They are often used alongside contracts and waivers",
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
            <TemplateBlock text={parqTemplate} />
          </div>
        </div>

        <section className="mx-auto mt-12 max-w-4xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-zinc-900">
            Where this form fits in a trainer’s onboarding process
          </h2>

          <p className="mt-3 text-sm leading-7 text-zinc-600">
            A PAR-Q form is usually completed before training begins to
            identify potential health risks and determine whether any medical
            guidance may be needed before exercise.
          </p>

          <p className="mt-3 text-sm leading-7 text-zinc-600">
            Many trainers use this alongside a training agreement that outlines
            the service and policies, and a liability waiver confirming that
            the client understands the risks associated with physical activity.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm font-semibold text-zinc-900">
                Often used alongside
              </p>

              <ul className="mt-2 space-y-2 text-sm text-zinc-600">
                <li>• Personal Training Agreement</li>
                <li>• Liability Waiver</li>
                <li>• Clear onboarding policies for sessions and participation</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm font-semibold text-zinc-900">
                Why some trainers start with the full pack
              </p>

              <p className="mt-2 text-sm text-zinc-600">
                Many trainers prefer starting with a structured onboarding pack
                so health screening, service terms, and liability wording all
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

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs text-zinc-500">
          Not legal advice. This template is provided for general information
          and drafting support. For unusual or high-risk situations, consult a
          solicitor.
        </p>
      </main>
    </div>
  );
}