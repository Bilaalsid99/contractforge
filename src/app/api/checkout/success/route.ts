import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe/client";
import { createAccessToken } from "@/lib/stripe/access";
import { createRestoreToken } from "@/lib/stripe/restore";
import { sendRestoreAccessEmail } from "@/lib/email/sendRestoreAccessEmail";

export async function GET(req: Request) {
  const { searchParams, origin } = new URL(req.url);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.redirect(new URL("/generate", origin));
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId);

  const isPaid =
    session.payment_status === "paid" &&
    session.metadata?.product === "pt-client-onboarding-pack";

  if (!isPaid) {
    return NextResponse.redirect(new URL("/generate", origin));
  }

  const token = createAccessToken({
    product: "pt-client-onboarding-pack",
    sessionId: session.id,
  });

  const res = NextResponse.redirect(new URL("/generate", origin));

  res.cookies.set("contractforge_access", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  const customerEmail = session.customer_details?.email?.trim();

  if (customerEmail) {
    try {
      const restoreToken = createRestoreToken({
        product: "pt-client-onboarding-pack",
        sessionId: session.id,
        email: customerEmail,
      });

      const restoreUrl = `${origin}/restore?token=${encodeURIComponent(restoreToken)}`;

      await sendRestoreAccessEmail({
        to: customerEmail,
        restoreUrl,
      });
    } catch (error) {
      console.error("Failed to send restore email:", error);
    }
  }

  return res;
}