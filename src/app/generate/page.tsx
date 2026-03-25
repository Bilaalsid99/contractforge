import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Build Your Personal Trainer Onboarding Pack",
  description:
    "Use the guided builder to create your personal trainer agreement and preview the connected onboarding pack.",
};

import { cookies } from "next/headers";
import { verifyAccessToken } from "@/lib/stripe/access";
import ClientOnboardingBuilder from "@/components/client-onboarding-builder";

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
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
        {title}
      </h1>
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
          <Badge>Preview before paying</Badge>
          <Badge>One-time purchase</Badge>
          <Badge>UK-focused wording</Badge>
        </div>

        <SectionTitle
          kicker="Personal Trainer Agreement Builder"
          title="Build your personal trainer agreement"
          desc="Complete the guided setup below to generate your agreement and preview the connected onboarding pack. Unlock export and the full pack after purchase."
        />

        <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-zinc-200 bg-zinc-50 p-6 text-center shadow-sm">
          <p className="text-sm leading-7 text-zinc-600">
            This builder is designed for speed and clarity. Start with the core
            agreement, review the structure, and unlock the full connected pack
            when you are ready.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryLink href="#builder">Start building</PrimaryLink>
            <SecondaryLink href="/client-onboarding-pack">
              See everything included
            </SecondaryLink>
          </div>
        </div>
      </section>

      <section id="builder" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <SectionTitle
            kicker="Build and preview"
            title="Start your guided setup"
            desc="Fill in your details, preview your agreement, and unlock export when you are ready."
          />

          <div className="mt-8">
            <ClientOnboardingBuilder isUnlocked={isUnlocked} />
          </div>

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-sm text-zinc-500">
              Need the full product breakdown first? View the{" "}
              <Link
                href="/client-onboarding-pack"
                className="font-semibold text-zinc-900 underline underline-offset-4"
              >
                Personal Trainer Client Onboarding Pack
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}