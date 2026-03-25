import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900 text-sm font-bold text-white shadow-sm">
            CF
          </div>

          <div className="min-w-0 leading-tight">
            <div className="text-lg font-semibold tracking-tight text-zinc-900">
              ContractForge
            </div>
            <div className="text-xs text-zinc-500">
              Personal Trainer Onboarding (UK)
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#templates"
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
          >
            Templates
          </Link>

          <Link
            href="/client-onboarding-pack"
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
          >
            Onboarding Pack
          </Link>
        </nav>

        <Link
          href="/client-onboarding-pack"
          className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
        >
          View full pack
        </Link>
      </div>
    </header>
  );
}