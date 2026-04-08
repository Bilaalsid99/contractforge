export const metadata = {
  title: "Personal Trainer Photo & Video Release Form (UK)",
  description:
    "Free photo and video release form template for UK personal trainers. Review simple consent wording for client images and videos during onboarding.",
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

export default function PersonalTrainerPhotoVideoReleaseFormUkPage() {
  return (
    <main className="bg-zinc-50">
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3">
          <Badge>UK template</Badge>
          <Badge>Consent form</Badge>
          <Badge>Free to review</Badge>
        </div>

        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          Personal Trainer Photo &amp; Video Release Form (UK)
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
          A photo and video release form gives a trainer written consent to use
          client images or recordings. It helps make expectations clearer before
          any content is captured or shared.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.05fr]">
          <div className="space-y-5">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-zinc-900">
                Template overview
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-700">
                This template is for UK personal trainers who may take photos or
                videos of clients for progress records, testimonials, or social
                media content. It sets out what the client agrees to and leaves
                space to limit or refuse certain uses.
              </p>
            </div>

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
              title="Who uses this template"
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

            <div className="flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/generate">
                Build your onboarding pack
              </PrimaryLink>
              <SecondaryLink href="/">Back to home</SecondaryLink>
            </div>
          </div>

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

        <section className="mt-14 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Where this fits in onboarding
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-700">
            A photo and video release form is usually separate from the main
            contract, PAR-Q, and waiver, but it often sits beside them when a
            trainer wants written consent from the start. It is especially
            useful where progress photos, testimonials, or session content may
            be used later.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <h3 className="text-sm font-semibold text-zinc-900">
                Often used alongside
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                <li>- Personal trainer contract</li>
                <li>- Liability waiver</li>
                <li>- Privacy notice</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <h3 className="text-sm font-semibold text-zinc-900">
                Why some trainers include it early
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-700">
                It avoids informal assumptions later and makes content consent
                clearer before images or videos are taken during sessions.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Related personal trainer templates
          </h2>
          <p className="mt-3 text-sm leading-7 text-zinc-700">
            Review other UK onboarding documents commonly used around client
            consent and first-session paperwork.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link
              href="/personal-trainer-contract-template-uk"
              className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
            >
              Personal Trainer Contract Template →
            </Link>
            <Link
              href="/liability-waiver-uk"
              className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
            >
              Liability Waiver Template →
            </Link>
            <Link
              href="/personal-trainer-gdpr-privacy-notice-uk"
              className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
            >
              GDPR Privacy Notice →
            </Link>
            <Link
              href="/personal-trainer-par-q-form-uk"
              className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
            >
              PAR-Q Form Template →
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