"use client";

import React from "react";
import Link from "next/link";

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
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2"
    >
      {children}
    </Link>
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

export function HomePreviewBuilder() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Badge>UK-focused wording</Badge>
          <Badge>Preview before purchase</Badge>
          <Badge>Built for personal trainers</Badge>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
          Build your Personal Trainer Client Onboarding Pack (UK)
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base text-zinc-600 sm:text-lg">
          Generate a cleaner onboarding setup with connected agreements,
          health screening, and supporting forms built for UK personal
          trainers.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryButton href="/generate">
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
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-zinc-900">
            What’s included
          </p>
          <p className="mt-2 text-sm text-zinc-600">
            Personal Training Agreement, PAR-Q Health Questionnaire,
            Liability Waiver, and supporting onboarding forms designed to
            work together.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-zinc-900">
            Made for busy trainers
          </p>
          <p className="mt-2 text-sm text-zinc-600">
            A simpler way to organise onboarding without stitching together
            separate documents by hand.
          </p>
        </div>
      </div>
    </section>
  );
}