import { stripe } from "./client";

function getOrigin(req: Request) {
  const h = req.headers;
  const proto = h.get("x-forwarded-proto") ?? "https";
  const host = h.get("x-forwarded-host") ?? h.get("host");

  if (!host) {
    throw new Error("Missing host header");
  }

  return `${proto}://${host}`;
}

export async function createCheckoutSession(opts: { req: Request }) {
  const origin = getOrigin(opts.req);

  const successUrl = `${origin}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${origin}/generate?cancelled=1`;

  return await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "gbp",
          product_data: {
            name: "Personal Trainer Client Onboarding Pack",
          },
          unit_amount: 3900,
        },
        quantity: 1,
      },
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata: {
      product: "pt-client-onboarding-pack",
    },
  });
}