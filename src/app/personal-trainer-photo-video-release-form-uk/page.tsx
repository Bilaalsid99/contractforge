export const metadata = {
  title: "Personal Trainer Photo & Video Release Form UK | ContractForge",
  description:
    "Free photo and video release form template for UK personal trainers. Preview a supporting consent form that can sit alongside your agreement and onboarding documents.",
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

export default function PersonalTrainerPhotoVideoReleaseFormUkPage() {
  return (
    <div className="bg-white">
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>UK template</Badge>
          <Badge>Consent form</Badge>
          <Badge>Free preview</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          Personal Trainer Photo &amp; Video Release Form (UK)
        </h1>

        <p className="mt-3 max-w-3xl text-zinc-600">
          A photo and video release form gives a trainer written consent to use
          client images or recordings. It helps make expectations clearer before
          any content is captured or shared.
        </p>

        <div className="mt-5 max-w-3xl rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <p className="text-sm font-semibold text-zinc-900">
            This free template is an optional supporting consent form.
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-600">
            It can sit alongside the main agreement and onboarding documents
            when a trainer wants clear written consent for photos, videos,
            testimonials, or social media content.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-zinc-900">
                Template overview
              </h2>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                This template is for UK personal trainers who may take photos or
                videos of clients for progress records, testimonials, website
                content, or social media. It sets out what the client agrees to
                and leaves space to limit or refuse certain uses.
              </p>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                A photo and video release form is usually separate from the main
                agreement, but it works best when it sits clearly within the
                onboarding process instead of being handled informally later.
              </p>

              <div className="mt-5 grid gap-3">
                <BulletCard
                  title="What this template covers"
                  items={[
                    "Consent to capture photos or videos",
                    "How images or recordings may be used",
                    "Whether use is limited to private, marketing, or social media purposes",
                    "Option to withdraw consent for future use",
                  ]}
                />

                <BulletCard
                  title="Who typically uses this template"
                  items={[
                    "Personal trainers sharing transformation or session content",
                    "Coaches collecting progress imagery",
                    "Trainers who want clearer written consent before using client media",
                  ]}
                />

                <BulletCard
                  title="Important to know"
                  items={[
                    "Consent should be specific and easy to understand",
                    "A client should not feel pressured to agree",
                    "If a client declines, that choice should be respected",
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
              {`PERSONAL TRAINER PHOTO & VIDEO RELEASE FORM (UK)

Trainer / business name: [Your business name]
Client name: [Client full name]
Date: [Date]

1. PURPOSE
I understand that during personal training sessions, photographs and/or video recordings may be taken by or on behalf of the trainer.

2. CONSENT
I give permission for photographs and/or video recordings of me to be taken in connection with my personal training sessions.

3. PERMITTED USE
I understand that my images or recordings may be used for one or more of the following purposes:

[ ] Internal progress tracking
[ ] Testimonials
[ ] Website content
[ ] Social media content
[ ] Marketing materials
[ ] Other: ______________________

4. LIMITS OR RESTRICTIONS
Any restrictions on use are set out below:

____________________________________________________
____________________________________________________

5. NO GUARANTEE OF USE
I understand that giving consent does not guarantee that any photo or video of me will be used.

6. WITHDRAWING FUTURE CONSENT
I understand that I may ask the trainer to stop using my image in future materials going forward, although materials already published or distributed may not always be removable immediately.

7. VOLUNTARY AGREEMENT
I confirm that this consent is voluntary and that I have had the opportunity to read and understand this form before signing.

Client name: ______________________

Client signature: ______________________

Date: ______________________

Trainer signature: ______________________

Date: ______________________`}
            </TemplateBlock>
          </div>
        </div>

        <section className="mx-auto mt-12 max-w-4xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-zinc-900">
            Where this form fits in onboarding
          </h2>

          <p className="mt-3 text-sm leading-7 text-zinc-600">
            A photo and video release form is not usually the main onboarding
            document. It is an optional consent form used when a trainer may
            capture or use client images, videos, testimonials, or progress
            content.
          </p>

          <p className="mt-3 text-sm leading-7 text-zinc-600">
            The main agreement should still come first because it sets the wider
            working relationship. The intake form, PAR-Q / health and emergency
            details, and incident report then support the onboarding process
            around that agreement.
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
                <li>• GDPR Privacy Notice</li>
                <li>• Incident / Injury Report Form</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm font-semibold text-zinc-900">
                Why some trainers include it early
              </p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                It avoids informal assumptions later and makes content consent
                clearer before images or videos are taken during sessions.
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
            Explore other free templates commonly used around client consent and
            first-session paperwork. Each free template is a preview of one part
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
              href="/personal-trainer-waiver-form-uk"
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
            >
              Liability Waiver Template →
            </Link>

            <Link
              href="/personal-trainer-gdpr-privacy-notice-uk"
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
            >
              GDPR Privacy Notice →
            </Link>

            <Link
              href="/personal-trainer-par-q-form-uk"
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
            >
              PAR-Q Form Template →
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