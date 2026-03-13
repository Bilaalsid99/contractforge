import { NextResponse } from "next/server";
import { createAccessToken } from "@/lib/stripe/access";
import { verifyRestoreToken } from "@/lib/stripe/restore";

const ACCESS_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

function getBaseUrl(req: Request) {
  const envBaseUrl = process.env.BASE_URL?.trim();
  if (envBaseUrl) {
    return envBaseUrl.replace(/\/+$/, "");
  }

  const { origin } = new URL(req.url);
  return origin;
}

export async function GET(req: Request) {
  const baseUrl = getBaseUrl(req);
  const url = new URL(req.url);
  const token = url.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/generate", baseUrl));
  }

  const restore = verifyRestoreToken(token);

  if (!restore) {
    return NextResponse.redirect(new URL("/generate", baseUrl));
  }

  const newToken = createAccessToken({
    product: "pt-client-onboarding-pack",
    sessionId: restore.sessionId,
  });

  const res = NextResponse.redirect(new URL("/generate", baseUrl));

  res.cookies.set("contractforge_access", newToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ACCESS_COOKIE_MAX_AGE,
  });

  return res;
}