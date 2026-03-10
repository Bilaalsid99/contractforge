import { NextResponse } from "next/server";
import { createAccessToken } from "@/lib/stripe/access";
import { verifyRestoreToken } from "@/lib/stripe/restore";

export async function GET(req: Request) {
  const { searchParams, origin } = new URL(req.url);

  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/generate", origin));
  }

  const restore = verifyRestoreToken(token);

  if (!restore) {
    return NextResponse.redirect(new URL("/generate", origin));
  }

  const newToken = createAccessToken({
    product: "pt-client-onboarding-pack",
    sessionId: restore.sessionId,
  });

  const res = NextResponse.redirect(new URL("/generate", origin));

  res.cookies.set("contractforge_access", newToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return res;
}