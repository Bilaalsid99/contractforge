// src/app/page.tsx
export const metadata = {
  title: "ContractForge | Personal Trainer Client Onboarding Pack UK",
  description:
    "Build your UK personal trainer agreement first, then unlock the connected PAR-Q and supporting forms needed to onboard clients before the first session.",
};

import Link from "next/link";
import { HomePreviewBuilder } from "@/components/home-preview-builder";

function SectionTitle({
  kicker,
  title,
  desc,
}: {
  kicker?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker ? (
        <p className="text-sm font-semibold tracking-wide text-zinc-500">
          {kicker}
        </p>
      ) : null}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        {title}
      </h2>
      {desc ? <p className="mt-4 text-base text-zinc-600">{desc}</p> : null}
    </div>
  );
}

function Card({
  title,
  desc,
  href,
  tag,
}: {
  title: string;
  desc: string;
  href: string;
  tag?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-zinc-900 group-hover:text-zinc-950">
          {title}
        </h3>
        {tag ? (
          <span className="rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700">
            {tag}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm text-zinc-600">{desc}</p>
      <div className="mt-4 text-sm font-semibold text-zinc-900">
        View page{" "}
        <span className="ml-1 inline-block transition group-hover:translate-x-0.5">
          →
        </span>
      </div>
    </Link>
  );
}

const corePages = [
  {
    title: "Personal Trainer Contract Template (UK)",
    desc: "A free agreement preview covering coaching scope, bookings, payments, and cancellations.",
    href: "/personal-trainer-contract-template-uk",
    tag: "Free",
  },
  {
    title: "PAR-Q Form (UK)",
    desc: "A free health questionnaire preview to support client readiness screening before training.",
    href: "/personal-trainer-par-q-form-uk",
    tag: "Free",
  },
  {
    title: "Liability Waiver (UK)",
    desc: "A free supporting waiver preview covering risk acknowledgement and participation wording.",
    href: "/personal-trainer-waiver-form-uk",
    tag: "Free",
  },
  {
    title: "Terms & Conditions (UK)",
    desc: "A free supporting template covering payments, session rules, and client responsibilities.",
    href: "/personal-trainer-terms-and-conditions-uk",
    tag: "Free",
  },
  {
    title: "Cancellation Policy Template (UK)",
    desc: "A free supporting policy preview for notice periods, missed sessions, and rescheduling.",
    href: "/personal-trainer-cancellation-policy-template",
    tag: "Free",
  },
];

const supportingPages = [
  {
    title: "GDPR Privacy Notice (UK)",
    desc: "A free privacy notice preview explaining how trainer client data is collected, used, and stored.",
    href: "/personal-trainer-gdpr-privacy-notice-uk",
    tag: "Free",
  },
  {
    title: "Photo & Video Release Form (UK)",
    desc: "A free consent form preview for client images, recordings, and content use.",
    href: "/personal-trainer-photo-video-release-form-uk",
    tag: "Free",
  },
  {
    title: "Home Visit Personal Training Waiver (UK)",
    desc: "A free supporting waiver preview for trainers delivering sessions in a client’s home.",
    href: "/home-visit-personal-training-waiver-uk",
    tag: "Free",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      <HomePreviewBuilder />

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            kicker="Personal Trainer Client Onboarding Pack (UK)"
            title="Build your agreement first, then unlock the connected pack"
            desc="ContractForge is built around one core personal training agreement, with the connected PAR-Q and supporting forms needed to onboard clients before the first session."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">
                1. Start with the agreement
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Build the core document that sets services, payment terms,
                cancellation rules, responsibilities, and expectations.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">
                2. Unlock the connected forms
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Get the client intake form, PAR-Q / health and emergency details, and incident report around the agreement.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">
                3. Reuse for future clients
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Keep your onboarding cleaner instead of piecing together
                separate templates from different places.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/client-onboarding-pack"
              className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
            >
              View the Client Onboarding Pack
            </Link>
            <Link
              href="/generate"
              className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50"
            >
              Start Building Your Agreement
            </Link>
          </div>
        </div>
      </section>

      <section
        id="templates"
        className="scroll-mt-24 border-t border-zinc-200 bg-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            kicker="Free template previews"
            title="Explore individual parts of the onboarding pack"
            desc="These free pages preview documents commonly used around personal trainer onboarding. For the cleaner setup, start with the main pack and build the agreement first."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {corePages.map((p) => (
              <Card
                key={p.href}
                title={p.title}
                desc={p.desc}
                href={p.href}
                tag={p.tag}
              />
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/client-onboarding-pack"
              className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
            >
              View the Client Onboarding Pack
            </Link>
            <Link
              href="/generate"
              className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50"
            >
              Start Building Your Agreement
            </Link>
          </div>

          <div className="mt-14">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold tracking-wide text-zinc-500">
                Additional supporting templates
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                Extra free previews
              </h3>
              <p className="mt-4 text-base text-zinc-600">
                These supporting templates may sit alongside the main agreement
                depending on how you onboard clients.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {supportingPages.map((p) => (
                <Card
                  key={p.href}
                  title={p.title}
                  desc={p.desc}
                  href={p.href}
                  tag={p.tag}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            kicker="How it works"
            title="Agreement first. Supporting forms after."
            desc="Start by building the core agreement. When you are ready, unlock the full connected onboarding pack for £29.95."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">
                1. Enter your setup details
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Add trainer details, session type, payment structure,
                cancellation notice, and communication boundaries.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">
                2. Preview the agreement
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                See how your details can appear inside the agreement before
                unlocking export and the connected pack.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">
                3. Unlock the pack
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Get the agreement, client intake form, PAR-Q / health and emergency details, and incident report together.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/generate"
              className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
            >
              Start Building Your Agreement
            </Link>
            <Link
              href="/client-onboarding-pack"
              className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50"
            >
              View the Client Onboarding Pack
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}