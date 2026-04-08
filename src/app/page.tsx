// src/app/page.tsx
export const metadata = {
  title: "ContractForge",
  description:
    "Create your personal trainer client onboarding pack in minutes. Preview your agreement, explore the free templates, and unlock the full pack in one simple flow.",
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
    desc: "A free contract template covering coaching scope, bookings, and cancellations.",
    href: "/personal-trainer-contract-template-uk",
    tag: "Free",
  },
  {
    title: "PAR-Q Form (UK)",
    desc: "A free health questionnaire template to screen client readiness before training.",
    href: "/personal-trainer-par-q-form-uk",
    tag: "Free",
  },
  {
    title: "Liability Waiver (UK)",
    desc: "A free waiver template covering risk acknowledgement and participation wording.",
    href: "/personal-trainer-waiver-form-uk",
    tag: "Free",
  },
  {
    title: "Terms & Conditions (UK)",
    desc: "A free template covering payments, session rules, and client responsibilities.",
    href: "/personal-trainer-terms-and-conditions-uk",
    tag: "Free",
  },
  {
    title: "Cancellation Policy Template (UK)",
    desc: "Example wording for notice periods, missed sessions, and cancellation fees.",
    href: "/personal-trainer-cancellation-policy-template",
    tag: "Free",
  },
  {
    title: "Client Onboarding Pack",
    desc: "See the full pack built around one agreement and the supporting forms that go with it.",
    href: "/client-onboarding-pack",
    tag: "Full pack",
  },
];

const supportingPages = [
  {
    title: "GDPR Privacy Notice (UK)",
    desc: "A free privacy notice template explaining how trainer client data is collected, used, and stored.",
    href: "/personal-trainer-gdpr-privacy-notice-uk",
    tag: "Free",
  },
  {
    title: "Photo & Video Release Form (UK)",
    desc: "A free consent form template for client images, recordings, and content use.",
    href: "/personal-trainer-photo-video-release-form-uk",
    tag: "Free",
  },
  {
    title: "Home Visit Personal Training Waiver (UK)",
    desc: "A free supporting waiver template for trainers delivering sessions in a client’s home.",
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
            kicker="Why trainers use it"
            title="A simpler way to get your onboarding in place"
            desc="Preview the agreement structure, explore the free templates, or move straight to the full pack when you want your agreement and supporting forms working together."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">
                Preview the agreement first
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Add a few details and see part of the agreement before you pay.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">
                Explore the free templates
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Review the template pages first if you want to compare wording
                and structure.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">
                Unlock the full pack
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Get the agreement, PAR-Q, and supporting forms together instead
                of piecing everything together manually.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="templates"
        className="scroll-mt-24 border-t border-zinc-200 bg-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            kicker="Free templates"
            title="Explore the documents first"
            desc="Use the free template pages to review key parts of the onboarding process before moving to the full pack."
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

          <div className="mt-14">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold tracking-wide text-zinc-500">
                Additional templates
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                Supporting template pages
              </h3>
              <p className="mt-4 text-base text-zinc-600">
                Extra template pages some trainers may use alongside the main
                onboarding documents.
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
            title="Preview first, then get the pack"
            desc="Keep it simple: review the agreement structure first, then continue when you want the full pack."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">
                1. Enter a few details
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Add your name, business name, session type, and cancellation
                notice.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">
                2. View a limited preview
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                See how your details can appear inside the agreement before
                unlocking the full pack.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">
                3. Unlock the full pack
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Get the agreement, PAR-Q, and supporting forms in one place.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/client-onboarding-pack"
              className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
            >
              Get the Pack
            </Link>
            <Link
              href="/personal-trainer-contract-template-uk"
              className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50"
            >
              Start with a free template
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}