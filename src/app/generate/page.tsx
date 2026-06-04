import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";

import { verifyAccessToken } from "@/lib/stripe/access";
import ClientOnboardingBuilder from "@/components/client-onboarding-builder";

export const metadata: Metadata = {
  title: "Build Your Personal Trainer Agreement UK | ContractForge",
  description:
    "Start with your core UK personal trainer agreement, then unlock the full connected client onboarding pack with PAR-Q and supporting forms.",
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm">
      {children}
    </span>
  );
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
      {kicker && (
        <p className="text-sm font-semibold tracking-wide text-zinc-500">
          {kicker}
        </p>
      )}

      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
        {title}
      </h2>

      {desc && <p className="mt-4 text-base text-zinc-600">{desc}</p>}
    </div>
  );
}

function PrimaryLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 ${className}`}
    >
      {children}
    </Link>
  );
}

function SecondaryLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 ${className}`}
    >
      {children}
    </Link>
  );
}

export default async function GeneratePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("contractforge_access")?.value;
  const access = verifyAccessToken(token);
  const isUnlocked = access?.product === "pt-client-onboarding-pack";

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
          <Badge>Step 1 of the pack</Badge>
          <Badge>Build before paying</Badge>
          <Badge>£29.95 one-time purchase</Badge>
          <Badge>UK-focused wording</Badge>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-wide text-zinc-500">
            Personal Trainer Agreement Builder
          </p>

          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            Start by building your personal trainer agreement
          </h1>

          <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">
            This is step 1 of the Personal Trainer Client Onboarding Pack. Build
            your core agreement first, then unlock the connected PAR-Q and
            supporting forms after purchase.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryLink href="#builder">Start Building Your Agreement</PrimaryLink>

            <SecondaryLink href="/client-onboarding-pack">
              View the Client Onboarding Pack
            </SecondaryLink>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-zinc-200 bg-zinc-50 p-6 text-center shadow-sm">
          <p className="text-sm font-semibold text-zinc-900">
            Agreement first. Connected pack after.
          </p>

          <p className="mt-3 text-sm leading-7 text-zinc-600">
            The builder focuses on the agreement because that is the centre of
            the pack. Once your agreement is ready, the full onboarding pack
            gives you the connected client intake form, PAR-Q / health and emergency details, and incident/injury report around the agreement.
          </p>
        </div>
      </section>

      <section id="builder" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <SectionTitle
            kicker="Step 1: Build the agreement"
            title="Answer the key setup questions"
            desc="Fill in your trainer details, payment terms, cancellation rules, communication boundaries and risk acknowledgement wording. Then preview the agreement before unlocking the full connected pack."
          />

          <div className="mt-8">
            <ClientOnboardingBuilder isUnlocked={isUnlocked} />
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">
              What unlocks after purchase?
            </p>

            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Unlock export for your agreement plus the connected onboarding documents: client intake, PAR-Q / health and emergency details, and an incident/injury report for records if needed.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <PrimaryLink href="/client-onboarding-pack">
                View the Client Onboarding Pack
              </PrimaryLink>

              <SecondaryLink href="#builder">
                Continue Building Agreement
              </SecondaryLink>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-sm text-zinc-500">
              ContractForge is not legal advice, a CRM, a dashboard, a client
              portal, or an ongoing client management system. It is a practical
              agreement-first onboarding document pack for UK personal trainers.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}