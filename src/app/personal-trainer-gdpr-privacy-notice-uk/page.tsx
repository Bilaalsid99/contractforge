export const metadata = {
  title: "Personal Trainer GDPR Privacy Notice (UK)",
  description:
    "Free GDPR privacy notice template for UK personal trainers. Review a simple client privacy notice and see how it fits into a complete onboarding pack.",
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

export default function PersonalTrainerGdprPrivacyNoticeUkPage() {
  return (
    <main className="bg-zinc-50">
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3">
          <Badge>UK template</Badge>
          <Badge>Privacy notice</Badge>
          <Badge>Free to review</Badge>
        </div>

        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          Personal Trainer GDPR Privacy Notice (UK)
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
          A GDPR privacy notice explains how a personal trainer collects, uses,
          stores, and protects client information. It is often shared during
          onboarding so clients understand what happens to their data.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.05fr]">
          <div className="space-y-5">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-zinc-900">
                Template overview
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-700">
                This template gives UK personal trainers a simple privacy notice
                to share with clients before training begins. It helps explain
                what personal information is collected, why it is needed, and
                how clients can request changes or ask questions.
              </p>
            </div>

            <BulletCard
              title="What this template covers"
              items={[
                "What client data is collected during onboarding",
                "Why personal and health information may be needed",
                "How records are stored and kept secure",
                "How a client can request access, correction, or deletion",
              ]}
            />

            <BulletCard
              title="Who uses this template"
              items={[
                "UK personal trainers taking on new clients",
                "Coaches collecting contact, health, and onboarding details",
                "Trainers who want a clearer privacy step before first session",
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

            <div className="flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/generate">
                Build your onboarding pack
              </PrimaryLink>
              <SecondaryLink href="/">Back to home</SecondaryLink>
            </div>
          </div>

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
- Session, attendance, and onboarding records
- Payment and invoicing information where required

3. WHY YOUR INFORMATION IS COLLECTED
Your information may be used to:
- respond to your enquiry
- assess whether training is suitable for you
- deliver personal training services safely
- keep basic business and client records
- contact you about sessions, bookings, or service updates
- meet legal, insurance, or professional obligations where required

4. HEALTH INFORMATION
If you provide health or medical information, it will only be used for purposes connected to your training, safety, and service delivery.

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

        <section className="mt-14 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Where this fits in onboarding
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-700">
            A privacy notice usually sits alongside the first onboarding steps,
            especially where a trainer collects contact details, health
            information, or consultation notes. It supports the contract, PAR-Q,
            and waiver by explaining how client information is handled before
            training begins.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <h3 className="text-sm font-semibold text-zinc-900">
                Often used alongside
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                <li>- Personal trainer contract</li>
                <li>- PAR-Q health questionnaire</li>
                <li>- Liability waiver</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <h3 className="text-sm font-semibold text-zinc-900">
                Why some trainers include it early
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-700">
                It sets a clearer standard for data handling from the beginning
                of the client relationship, especially when health information
                is part of the onboarding process.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Related personal trainer templates
          </h2>
          <p className="mt-3 text-sm leading-7 text-zinc-700">
            Review other UK onboarding documents commonly used alongside a
            trainer privacy notice.
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
              href="/personal-trainer-photo-video-release-form-uk"
              className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
            >
              Photo & Video Release Form →
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