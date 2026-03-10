import crypto from "crypto";

const accessCookieSecret = process.env.ACCESS_COOKIE_SECRET;

if (!accessCookieSecret) {
  throw new Error("Missing ACCESS_COOKIE_SECRET");
}

const secret: string = accessCookieSecret;

type AccessPayload = {
  product: "pt-client-onboarding-pack";
  sessionId: string;
};

export function createAccessToken(payload: AccessPayload) {
  const body = Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
  const sig = crypto.createHmac("sha256", secret).update(body).digest("base64url");
  return `${body}.${sig}`;
}

export function verifyAccessToken(token?: string | null): AccessPayload | null {
  if (!token) return null;

  const [body, sig] = token.split(".");
  if (!body || !sig) return null;

  const expected = crypto.createHmac("sha256", secret).update(body).digest("base64url");

  const sigBuf = Buffer.from(sig);
  const expectedBuf = Buffer.from(expected);

  if (sigBuf.length !== expectedBuf.length) return null;
  if (!crypto.timingSafeEqual(sigBuf, expectedBuf)) return null;

  try {
    const parsed = JSON.parse(
      Buffer.from(body, "base64url").toString("utf8")
    ) as AccessPayload;

    if (parsed.product !== "pt-client-onboarding-pack" || !parsed.sessionId) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}