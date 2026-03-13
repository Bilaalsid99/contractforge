import Stripe from "stripe";

if (typeof window !== "undefined") {
  throw new Error("Stripe client must not be imported in client-side code.");
}

const key = process.env.STRIPE_SECRET_KEY?.trim();

if (!key) {
  throw new Error("Missing STRIPE_SECRET_KEY");
}

export const stripe = new Stripe(key);