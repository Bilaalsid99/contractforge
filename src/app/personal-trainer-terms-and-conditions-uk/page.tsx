export const metadata = {
  title: "Personal Training Terms and Conditions Template UK",
  description:
    "Free personal training terms and conditions template for UK coaches. Set clear rules for bookings, payments, cancellations, and client responsibilities.",
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

const termsTemplate = `PERSONAL TRAINER TERMS AND CONDITIONS (UK)

Trainer / Business: [Trainer name / Business name]
Effective date: [Date]

1. Services
Personal training services are provided by the Trainer to the Client as agreed during booking. Services may be delivered in person, online, or in another agreed format.

2. Booking
Sessions must be booked in advance and are subject to trainer availability. Bookings are confirmed once agreed by both the Trainer and the Client.

3. Payment
Payment must be made in accordance with the Trainer's pricing structure, whether per session, monthly, or in blocks. Sessions or services may be withheld if payment is overdue.

4. Cancellations and Rescheduling
The Client must provide the required notice period to cancel or reschedule a session. Where insufficient notice is given, the Trainer may charge the full session fee.

5. Late Arrival
If the Client arrives late, the session may still finish at the scheduled time. The full fee may still apply.

6. Health and Medical Responsibility
The Client is responsible for disclosing any injury, medical condition, medication, or other issue that may affect participation in exercise.

7. Participation in Exercise
The Client understands that participation in physical exercise is voluntary and involves inherent risks.

8. Trainer Conduct
The Trainer agrees to provide services with reasonable care and skill and to act within the normal scope of a fitness professional.

9. Client Conduct
The Client agrees to behave respectfully, follow reasonable instructions during sessions, and stop exercise if pain, dizziness, or unusual symptoms occur.

10. Liability
Nothing in these terms excludes liability where it cannot lawfully be excluded. Any additional limitation of liability should be stated clearly in the Trainer's full onboarding documents.

11. Changes to Services
The Trainer may make reasonable changes to session times, delivery arrangements, or business policies where necessary.

12. General
These terms should be read alongside any related client contract, PAR-Q form, liability waiver, and cancellation policy used by the Trainer.
`;

export default function PersonalTrainerTermsAndConditionsUKPage() {
  return (
    <div className="bg-white">
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>UK template</Badge>
          <Badge>Terms and conditions</Badge>
          <Badge>Free to review</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          Personal Trainer Terms and Conditions Template (UK)
        </h1>

        <p className="mt-3 max-w-3xl text-zinc-600">
          Use this terms and conditions template as a starting point to set out
          your business rules around bookings, payments, cancellations, client
          responsibilities, and participation in training.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-zinc-900">
                What these terms cover
              </h2>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Terms and conditions help personal trainers explain the general
                business rules that apply when working with clients. They often
                cover bookings, payments, lateness, cancellations, conduct, and
                general participation terms.
              </p>

              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-sm font-semibold text-zinc-900">
                    Common purpose
                  </p>
                  <p className="mt-1 text-sm text-zinc-600">
                    To give clients a clearer view of how your services operate
                    and what rules apply before training begins.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-sm font-semibold text-zinc-900">
                    What they usually include
                  </p>
                  <p className="mt-1 text-sm text-zinc-600">
                    Services, bookings, payment terms, cancellations, lateness,
                    client responsibilities, and general business conditions.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-sm font-semibold text-zinc-900">
                    Important
                  </p>
                  <p className="mt-1 text-sm text-zinc-600">
                    Terms and conditions are usually used alongside a contract,
                    PAR-Q, liability waiver, and cancellation policy.
                  </p>
                </div>
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
            <TemplateBlock text={termsTemplate} />
          </div>
        </div>

        <section className="mx-auto mt-12 max-w-4xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-zinc-900">
            Where these terms fit in a trainer’s onboarding process
          </h2>

          <p className="mt-3 text-sm leading-7 text-zinc-600">
            Terms and conditions can be used on their own, but many trainers
            include them within a broader training agreement so the service
            rules, payment expectations, and cancellation policies are clearly
            documented in one place.
          </p>

          <p className="mt-3 text-sm leading-7 text-zinc-600">
            This agreement is usually supported by health screening before
            training begins and liability wording confirming that the client
            understands the risks associated with exercise.
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
                so service terms, health screening, and liability wording all
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
            Explore other documents commonly used during personal trainer
            onboarding.
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