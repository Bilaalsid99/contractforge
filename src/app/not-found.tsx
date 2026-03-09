import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <div className="rounded-3xl border border-zinc-200 bg-white p-10 text-center shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Page not found
        </h1>

        <p className="mt-4 text-sm leading-6 text-zinc-600">
          The page you’re looking for doesn’t exist or may have moved.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
          >
            Go to homepage
          </Link>

          <Link
            href="/client-onboarding-pack"
            className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50"
          >
            View onboarding pack
          </Link>
        </div>
      </div>
    </div>
  );
}