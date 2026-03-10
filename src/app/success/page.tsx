import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe/client";
import { createAccessToken } from "@/lib/stripe/access";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id) {
    redirect("/generate");
  }

  const session = await stripe.checkout.sessions.retrieve(session_id);

  const isPaid =
    session.payment_status === "paid" &&
    session.metadata?.product === "pt-client-onboarding-pack";

  if (!isPaid) {
    redirect("/generate");
  }

  const token = createAccessToken({
    product: "pt-client-onboarding-pack",
    sessionId: session.id,
  });

  const cookieStore = await cookies();
  cookieStore.set("contractforge_access", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect("/generate");
}