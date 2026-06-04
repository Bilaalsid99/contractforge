export const metadata = {
  title: "Personal Trainer GDPR Privacy Notice UK | ContractForge",
  description:
    "Free GDPR privacy notice template for UK personal trainers. Preview a supporting privacy document that can sit alongside your agreement and onboarding forms.",
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

export default function PersonalTrainerGdprPrivacyNoticeUkPage() {
  return (
    <div className="bg-white">
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>UK template</Badge>
          <Badge>Privacy notice</Badge>
          <Badge>Free preview</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          Personal Trainer GDPR Privacy Notice (UK)
        </h1>

        <p className="mt-3 max-w-3xl text-zinc-600">
          A GDPR privacy notice explains how a personal trainer collects, uses,
          stores, and protects client information during enquiries, onboarding,
          and training.
        </p>

        <div className="mt-5 max-w-3xl rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <p className="text-sm font-semibold text-zinc-900">
            This free template is a supporting privacy document for client
            onboarding.
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-600">
            It should sit alongside your agreement, client intake, PAR-Q /
            health and emergency details, and any consent forms so clients
            understand how their information is handled before training begins.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-zinc-900">
                Template overview
              </h2>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                This template gives UK personal trainers a simple privacy notice
                to share with clients before training begins. It helps explain
                what personal information is collected, why it is needed, and
                how clients can ask questions or request changes.
              </p>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                A privacy notice is usually a supporting onboarding document. It
                does not replace the main agreement, but it helps make the data
                handling side of onboarding clearer.
              </p>

              <div className="mt-5 grid gap-3">
                <BulletCard
                  title="What this template covers"
                  items={[
                    "What client data is collected during onboarding",
                    "Why contact, health, and emergency information may be needed",
                    "How records are stored and kept secure",
                    "How a client can request access, correction, or deletion",
                  ]}
                />

                <BulletCard
                  title="Who typically uses this template"
                  items={[
                    "UK personal trainers taking on new clients",
                    "Coaches collecting contact, health, and onboarding details",
                    "Trainers who want a clearer privacy step before the first session",
                  ]}
                />

                <BulletCard
                  title="Important to know"
                  items={[
                    "This should match how you actually handle client data",
                    "Health information should be treated carefully and only used where relevant",
                    "Clients should be told who to contact with privacy questions",
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
              {`PERSONAL TRAINER GDPR PRIVACY NOTICE (UK)

Business name: [Your business name]
Contact email: [Your email address]
Phone: [Your phone number]
Effective date: [Date]

1. PURPOSE OF THIS NOTICE
This privacy notice explains how I collect, use, store, and protect your personal information when you enquire about or use my personal training services.

2. INFORMATION I MAY COLLECT
I may collect the following information:
- Your name
- Contact details
- Emergency contact details
- Health and medical information relevant to exercise
- Client intake, session, attendance, and onboarding records
- Payment and invoicing information where required
- Consent records where relevant, such as photo or video consent

3. WHY YOUR INFORMATION IS COLLECTED
Your information may be used to:
- respond to your enquiry
- assess whether training is suitable for you
- deliver personal training services safely
- keep basic business and client records
- contact you about sessions, bookings, or service updates
- meet legal, insurance, or professional obligations where required

4. HEALTH AND EMERGENCY INFORMATION
If you provide health, medical, or emergency contact information, it will only be used for purposes connected to your training, safety, service delivery, or record keeping.

5. HOW YOUR INFORMATION IS STORED
Your information is stored using reasonable administrative and technical measures designed to keep it secure. Access is limited to information needed for service delivery and record keeping.

6. HOW LONG INFORMATION IS KEPT
Your information will only be kept for as long as reasonably necessary for client administration, legal, insurance, safety, or business record purposes.

7. SHARING YOUR INFORMATION
Your information will not be sold. It may only be shared where reasonably necessary, such as:
- with payment providers or basic business service providers
- where required by law
- where necessary for insurance, legal, or safety reasons

8. YOUR RIGHTS
You may request to:
- access the personal information held about you
- correct inaccurate information
- ask questions about how your data is used
- request deletion where appropriate and where records do not need to be retained

9. CONTACT
If you have a question about this notice or your personal information, please contact:

Name: [Your name / business name]
Email: [Your email address]
Phone: [Your phone number]

Client acknowledgement:

I confirm that I have read and understood this privacy notice.

Client name: ______________________

Signature: ______________________

Date: ______________________`}
            </TemplateBlock>
          </div>
        </div>

        <section className="mx-auto mt-12 max-w-4xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-zinc-900">
            Where this template fits in onboarding
          </h2>

          <p className="mt-3 text-sm leading-7 text-zinc-600">
            A privacy notice usually sits alongside the first onboarding steps,
            especially where a trainer collects contact details, health
            information, emergency details, intake notes, or consent records.
          </p>

          <p className="mt-3 text-sm leading-7 text-zinc-600">
            It supports the agreement, client intake, PAR-Q / health and
            emergency details, and any consent forms by explaining how client
            information is handled before training begins.
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
                <li>• Photo &amp; Video Release Form</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm font-semibold text-zinc-900">
                Why some trainers include it early
              </p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                It sets a clearer standard for data handling from the beginning
                of the client relationship, especially when health, emergency,
                consent, or intake information forms part of the onboarding
                process.
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
            Explore other free templates commonly used alongside a personal
            trainer privacy notice. Each free template is a preview of one part
            of the wider onboarding setup.
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
              href="/personal-trainer-waiver-form-uk"
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
            >
              Liability Waiver Template →
            </Link>

            <Link
              href="/personal-trainer-photo-video-release-form-uk"
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
            >
              Photo &amp; Video Release Form →
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