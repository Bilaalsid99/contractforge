export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm leading-6 text-zinc-600">
          This privacy policy explains how ContractForge collects, uses, and
          handles limited information when you use this website, purchase the
          Client Onboarding Pack, or access the document generator.
        </p>
      </div>

      <section className="mt-10 space-y-8 text-sm leading-6 text-zinc-700">
        <div>
          <h2 className="text-base font-semibold text-zinc-900">
            Information we collect
          </h2>
          <p className="mt-2">
            ContractForge may collect limited information when you interact with
            the website, including:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Contact details you provide, such as your email address</li>
            <li>Basic website usage information, such as page visits</li>
            <li>
              Checkout and purchase-related information needed to verify access
              after payment
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold text-zinc-900">
            Generator data
          </h2>
          <p className="mt-2">
            Information entered into the generator, such as trainer name,
            business name, session details, and policy terms, is intended to be
            used to create your documents.
          </p>
          <p className="mt-2">
            Draft generator data may be stored locally in your browser on your
            device to support your use of the generator.
          </p>
          <p className="mt-2">
            ContractForge does not intend to store your generator draft content
            on its own servers as part of the normal document creation flow.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-zinc-900">
            Payments and checkout
          </h2>
          <p className="mt-2">
            Payments are processed by Stripe. ContractForge does not store your
            full card details.
          </p>
          <p className="mt-2">
            We may use limited checkout-related information, such as purchase
            status and the email address used during checkout, to confirm access
            to the purchased product and help with support or restore-access
            requests.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-zinc-900">
            Cookies and access control
          </h2>
          <p className="mt-2">
            ContractForge may use cookies or similar browser-based mechanisms to
            remember whether access has been granted after a verified purchase
            and to support access to protected areas of the site.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-zinc-900">
            Email communications
          </h2>
          <p className="mt-2">
            We may use your email address to respond to support requests, help
            with access issues, or send restore-access links or related service
            emails connected to your purchase.
          </p>
          <p className="mt-2">
            If free resources or template requests are offered on the site, your
            email address may also be used to deliver that requested content.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-zinc-900">
            How we use information
          </h2>
          <p className="mt-2">
            Information collected through the website is used only to operate
            the service, process purchases, verify access, provide support, and
            deliver requested content.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-zinc-900">
            Contact
          </h2>
          <p className="mt-2">
            If you have questions about this privacy policy, please use the
            contact page.
          </p>
        </div>
      </section>
    </div>
  );
}