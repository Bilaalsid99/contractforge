import Link from "next/link";

const templateLinks = [
  {
    href: "/personal-trainer-contract-template-uk",
    label: "Personal Trainer Contract Template",
  },
  {
    href: "/personal-trainer-par-q-form-uk",
    label: "Personal Trainer PAR-Q Form",
  },
  {
    href: "/personal-trainer-waiver-form-uk",
    label: "Personal Trainer Waiver Form",
  },
  {
    href: "/personal-trainer-terms-and-conditions-uk",
    label: "Personal Trainer Terms and Conditions",
  },
  {
    href: "/personal-trainer-cancellation-policy-template",
    label: "Cancellation Policy Template",
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-zinc-900"
            >
              ContractForge
            </Link>

            <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-600">
              UK personal trainer templates and onboarding documents designed to
              help you set expectations clearly before coaching starts.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-zinc-900">Templates</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600">
              {templateLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-zinc-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-zinc-900">Pages</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600">
              <li>
                <Link href="/" className="transition hover:text-zinc-900">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/generate"
                  className="transition hover:text-zinc-900"
                >
                  Client Onboarding Pack
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition hover:text-zinc-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition hover:text-zinc-900">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-zinc-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-zinc-200 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ContractForge. All rights reserved.</p>
          <p>Not legal advice. For high-risk edge cases, consult a solicitor.</p>
        </div>
      </div>
    </footer>
  );
}