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

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm">
      {children}
    </span>
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
          <p className="text-sm font-semibold text-zinc-900">Limited preview</p>
          <p className="mt-1 text-xs text-zinc-500">
            See the structure before unlocking the full onboarding pack.
          </p>
        </div>
        <Badge>Preview only</Badge>
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

export function HomePreviewBuilder() {
  const [mini, setMini] = useState<MiniState>({
    trainerName: "",
    businessName: "",
    sessionType: "In-person",
    cancellationHours: "24",
  });

  const preview = useMemo(() => buildPreview(mini), [mini]);

  return (
    <section
      id="preview"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="grid items-start gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>UK-focused wording</Badge>
            <Badge>Preview before purchase</Badge>
            <Badge>Built for personal trainers</Badge>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            Build your Personal Trainer Client Onboarding Pack (UK)
          </h1>

          <p className="mt-5 max-w-2xl text-base text-zinc-600 sm:text-lg">
            Generate a cleaner onboarding setup with a connected agreement,
            PAR-Q, and waiver built for UK personal trainers.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="/client-onboarding-pack">
              Get the Pack
            </PrimaryButton>
            <SecondaryButton href="/#templates">
              Browse free templates
            </SecondaryButton>
          </div>

          <p className="mt-3 text-sm text-zinc-500">
            One-time £29.95. Instant access after checkout. No subscription.
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            Build your documents in minutes.
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
                A simpler way to organise onboarding without stitching together
                separate documents by hand.
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
                  Add a few details to see how the agreement can look before
                  you unlock the full pack.
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
          </div>
        </div>

        <div>
          <DocumentPreview text={preview} />
        </div>
      </div>
    </section>
  );
}