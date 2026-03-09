export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
        Privacy Policy
      </h1>

      <p className="mt-4 text-sm text-zinc-600">
        This privacy policy explains how ContractForge collects and uses
        information when you use this website.
      </p>

      <section className="mt-10 space-y-6 text-sm text-zinc-700 leading-6">
        <div>
          <h2 className="text-base font-semibold text-zinc-900">
            Information we collect
          </h2>
          <p className="mt-2">
            ContractForge may collect limited information when you interact
            with the website, including:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Email address when requesting free templates</li>
            <li>Basic usage data such as page visits</li>
            <li>Payment confirmation information from Stripe</li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold text-zinc-900">
            Generator form data
          </h2>
          <p className="mt-2">
            Information entered into the onboarding generator (such as trainer
            name, business name, or cancellation terms) is stored locally in
            your browser using local storage.
          </p>
          <p className="mt-2">
            ContractForge does not store generator draft data on its servers.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-zinc-900">
            Payments
          </h2>
          <p className="mt-2">
            Payments are processed securely by Stripe. ContractForge does not
            store your payment card details.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-zinc-900">
            Email delivery
          </h2>
          <p className="mt-2">
            Free template downloads may be delivered by email. Email delivery
            services may temporarily process your email address to send the
            requested content.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-zinc-900">
            Data use
          </h2>
          <p className="mt-2">
            Information collected through the website is used only to operate
            the service, deliver requested content, and process purchases.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-zinc-900">
            Contact
          </h2>
          <p className="mt-2">
            If you have questions about this privacy policy, you can contact us
            via the contact page.
          </p>
        </div>
      </section>
    </div>
  );
}