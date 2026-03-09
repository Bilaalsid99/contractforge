import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Payment successful
        </h1>

        <p className="mt-4 text-sm leading-6 text-zinc-600">
          Your purchase was completed successfully. You can now return to the
          generator and access your full onboarding documents.
        </p>

        <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <p className="text-sm font-semibold text-zinc-900">
            What you now have access to
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600">
            <li>Personal Training Agreement</li>
            <li>PAR-Q Health Questionnaire</li>
            <li>Liability Waiver</li>
            <li>Matching trainer and business details across documents</li>
          </ul>
        </div>

        <p className="mt-6 text-sm text-zinc-600">
          Your generator answers remain stored in your browser so you can return
          to the generator and continue working with your documents.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/generate"
            className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
          >
            Open my onboarding pack
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}