export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Contact
        </h1>

        <p className="mt-4 text-sm leading-6 text-zinc-600">
          If you have a question about the Client Onboarding Pack, payment,
          access to the generator, or using your documents, get in touch.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-zinc-900">Support</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            For product questions, purchase issues, restore-access requests, or
            general support, contact:
          </p>
          <p className="mt-4 text-sm font-semibold text-zinc-900">
            support@contractforge.co.uk
          </p>
          <p className="mt-2 text-xs leading-5 text-zinc-500">
            Please contact us from, or mention, the email address used at
            checkout where possible.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-zinc-900">
            What to include
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            To help resolve your issue faster, include a short description of
            the problem, what happened, and the email address used during
            checkout.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
        <h2 className="text-base font-semibold text-zinc-900">
          Common reasons to contact us
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-600">
          <li>Questions about what is included in the Client Onboarding Pack</li>
          <li>Checkout or payment confirmation issues</li>
          <li>Problems accessing the generator after purchase</li>
          <li>Restore-access requests after losing access on a device</li>
          <li>General support about using the generated documents</li>
        </ul>
      </div>
    </div>
  );
}