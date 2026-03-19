// src/app/page.tsx
export const metadata = {
  title: "Generate Now",
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

const pages = [
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
    desc: "Start with the full onboarding system for personal trainers.",
    href: "/client-onboarding-pack",
    tag: "Full pack",
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
            desc="Review the structure, explore the free templates, or move straight to the full onboarding pack when you want your agreement, screening, and supporting onboarding forms working together."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">
                See the structure first
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Add a few details and preview part of the agreement before you
                buy.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">
                Explore the free templates
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Review the individual pages first if you want to compare wording
                and document structure.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">
                Unlock the full pack
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Get the core onboarding documents and supporting trainer forms in
                one place instead of piecing them together manually.
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
            desc="Use the free template pages to review each part of the onboarding process before moving to the full pack."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pages.map((p) => (
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
      </section>

      <section id="how" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            kicker="How it works"
            title="Preview first, then get the pack"
            desc="Get a feel for the structure, then continue when you want the full onboarding system."
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
                See how your details can appear inside the agreement without
                revealing the full pack.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">
                3. Unlock the full onboarding pack
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Move forward when you want the complete onboarding pack, including
                core documents and supporting trainer forms, in one place.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/generate"
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