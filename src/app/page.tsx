"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

type MiniState = {
  trainerName: string;
  businessName: string;
  sessionType: "In-person" | "Online";
  cancellationHours: string;
};

function classNames(...xs: Array<string | false | undefined | null>) {
  return xs.filter(Boolean).join(" ");
}

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

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm">
      {children}
    </span>
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

function PrimaryButton({
  children,
  href,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm transition";
  const enabled =
    "bg-zinc-900 text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2";
  const disabledCls = "cursor-not-allowed bg-zinc-300 text-zinc-600";
  const cls = classNames(base, disabled ? disabledCls : enabled);

  if (href) {
    return (
      <Link href={href} className={cls} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

function SecondaryButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
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

function buildPreview(s: MiniState) {
  const trainer = s.trainerName.trim() || "Alex Smith";
  const business = s.businessName.trim() || "Smith Coaching";
  const delivery = s.sessionType;
  const cancellation = Number(s.cancellationHours || "24");
  const hours = Number.isFinite(cancellation) && cancellation > 0 ? cancellation : 24;

  return `PERSONAL TRAINING AGREEMENT — PREVIEW

Trainer: ${trainer}
Business: ${business}
Session type: ${delivery}
Cancellation notice: ${hours} hours

1. Services
The Trainer agrees to provide personal training services to the Client on an ${delivery.toLowerCase()} basis, as agreed during booking.

2. Health and Participation
The Client confirms that they are responsible for disclosing any injury, medical condition, or other issue relevant to participation in exercise and training.

3. Payment and Cancellations
Sessions must be booked in advance. The Client must provide at least ${hours} hours' notice to cancel or reschedule a session. Late cancellations may be charged.

4. General Training Risk
The Client understands that physical training carries inherent risks and agrees to participate voluntarily.

5. Preview Note
This is a limited preview only. The full onboarding system also includes:
• PAR-Q Health Questionnaire
• Liability Waiver
• Matching details across the full onboarding pack`;
}

function DocumentPreview({ text }: { text: string }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-4 shadow-sm sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-zinc-900">Live preview</p>
          <p className="mt-1 text-xs text-zinc-500">
            See how your details can look inside the agreement.
          </p>
        </div>
        <Badge>Preview first</Badge>
      </div>

      <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
        <div className="border-b border-zinc-200 pb-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
            ContractForge Preview
          </p>
        </div>
        <pre className="mt-4 whitespace-pre-wrap text-sm leading-7 text-zinc-800">
          {text}
        </pre>
      </div>

      <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
        <p className="text-sm font-semibold text-zinc-900">
          What the full onboarding pack includes
        </p>
        <p className="mt-1 text-sm text-zinc-600">
          Personal Training Agreement, PAR-Q Health Questionnaire, and Liability
          Waiver designed to work together as one onboarding system.
        </p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [mini, setMini] = useState<MiniState>({
    trainerName: "",
    businessName: "",
    sessionType: "In-person",
    cancellationHours: "24",
  });

  const preview = useMemo(() => buildPreview(mini), [mini]);

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

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-zinc-900 text-white shadow-sm">
              <span className="text-sm font-black">CF</span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-zinc-900">ContractForge</p>
              <p className="text-xs text-zinc-500">
                Personal Trainer Onboarding (UK)
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 sm:flex">
            <Link
              href="#preview"
              className="text-sm font-semibold text-zinc-700 hover:text-zinc-900"
            >
              Preview
            </Link>
            <Link
              href="#templates"
              className="text-sm font-semibold text-zinc-700 hover:text-zinc-900"
            >
              Free templates
            </Link>
            <Link
              href="#how"
              className="text-sm font-semibold text-zinc-700 hover:text-zinc-900"
            >
              How it works
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <PrimaryButton href="/client-onboarding-pack">
              Start building
            </PrimaryButton>
          </div>
        </div>
      </header>

      <section
        id="preview"
        className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14"
      >
        <div className="grid items-start gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>UK-focused wording</Badge>
              <Badge>Preview before purchase</Badge>
              <Badge>Built for personal trainers</Badge>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
              Build your Personal Trainer Client Onboarding Pack (UK)
            </h1>

            <p className="mt-5 max-w-2xl text-base text-zinc-600 sm:text-lg">
              Preview your onboarding structure first, then move forward when
              you want the full system in one place.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/client-onboarding-pack">
                Start building my onboarding pack
              </PrimaryButton>
              <SecondaryButton href="#templates">
                Browse free templates
              </SecondaryButton>
            </div>

            <p className="mt-3 text-sm text-zinc-500">
              Preview before purchase. No subscription. One-time £39.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-zinc-900">
                  What’s included
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  Personal Training Agreement, PAR-Q Health Questionnaire, and
                  Liability Waiver with matching details across the set.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-zinc-900">
                  Made for busy trainers
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  A cleaner way to organise onboarding without piecing separate
                  templates together.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    Quick preview
                  </p>
                  <p className="mt-1 text-sm text-zinc-600">
                    Add a few details to see how the agreement can look.
                  </p>
                </div>
                <Badge>About 30 seconds</Badge>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1">
                  <span className="text-xs font-semibold text-zinc-700">
                    Your name
                  </span>
                  <input
                    value={mini.trainerName}
                    onChange={(e) =>
                      setMini((p) => ({ ...p, trainerName: e.target.value }))
                    }
                    placeholder="e.g. Alex Smith"
                    className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none focus:ring-2 focus:ring-zinc-400"
                  />
                </label>

                <label className="grid gap-1">
                  <span className="text-xs font-semibold text-zinc-700">
                    Business / trading name
                  </span>
                  <input
                    value={mini.businessName}
                    onChange={(e) =>
                      setMini((p) => ({ ...p, businessName: e.target.value }))
                    }
                    placeholder="e.g. Smith Coaching"
                    className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none focus:ring-2 focus:ring-zinc-400"
                  />
                </label>

                <label className="grid gap-1">
                  <span className="text-xs font-semibold text-zinc-700">
                    Session type
                  </span>
                  <select
                    value={mini.sessionType}
                    onChange={(e) =>
                      setMini((p) => ({
                        ...p,
                        sessionType: e.target.value as MiniState["sessionType"],
                      }))
                    }
                    className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none focus:ring-2 focus:ring-zinc-400"
                  >
                    <option>In-person</option>
                    <option>Online</option>
                  </select>
                </label>

                <label className="grid gap-1">
                  <span className="text-xs font-semibold text-zinc-700">
                    Cancellation notice (hours)
                  </span>
                  <input
                    value={mini.cancellationHours}
                    onChange={(e) =>
                      setMini((p) => ({
                        ...p,
                        cancellationHours: e.target.value,
                      }))
                    }
                    inputMode="numeric"
                    placeholder="24"
                    className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none focus:ring-2 focus:ring-zinc-400"
                  />
                </label>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/client-onboarding-pack">
                  Continue to onboarding pack
                </PrimaryButton>
                <SecondaryButton href="/personal-trainer-contract-template-uk">
                  View free contract template
                </SecondaryButton>
              </div>
            </div>
          </div>

          <div>
            <DocumentPreview text={preview} />
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            kicker="Why trainers use it"
            title="A simpler way to get your onboarding in place"
            desc="Preview the structure, explore the free templates, or move straight to the full onboarding pack when you want everything working together."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">
                See how it looks
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Add your details and preview part of the agreement instantly.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">
                Use the free templates
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Review the individual template pages first if you want to
                compare wording and structure.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">
                Start with the full pack
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Build the full onboarding system with matching details across
                the documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="templates" className="border-t border-zinc-200 bg-white">
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
            title="Preview first, then build your pack"
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
                2. View your preview
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                See how your details can appear inside a professional training
                agreement.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">
                3. Continue when ready
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Move forward when you want the full onboarding pack in one
                place.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton href="/client-onboarding-pack">
              Go to the onboarding pack
            </PrimaryButton>
            <SecondaryButton href="/personal-trainer-contract-template-uk">
              Start with a free template
            </SecondaryButton>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs text-zinc-500">
            Not legal advice. This tool provides structured template wording for
            personal trainer onboarding documents. For unusual or high-risk
            situations, consult a solicitor.
          </p>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} ContractForge</p>
          <div className="flex flex-wrap gap-4">
            <Link
              className="font-semibold text-zinc-700 hover:text-zinc-900"
              href="/client-onboarding-pack"
            >
              Onboarding Pack
            </Link>
            <Link
              className="font-semibold text-zinc-700 hover:text-zinc-900"
              href="/personal-trainer-contract-template-uk"
            >
              Free Templates
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}