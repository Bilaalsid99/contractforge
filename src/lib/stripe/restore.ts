import crypto from "crypto";

const restoreSecret = process.env.ACCESS_COOKIE_SECRET;

if (!restoreSecret) {
  throw new Error("Missing ACCESS_COOKIE_SECRET");
}

const secret: string = restoreSecret;

type RestorePayload = {
  product: "pt-client-onboarding-pack";
  sessionId: string;
  email: string;
  exp: number;
};

const RESTORE_TOKEN_TTL_SECONDS = 60 * 60 * 24 * 30;

export function createRestoreToken(payload: {
  product: "pt-client-onboarding-pack";
  sessionId: string;
  email: string;
}) {
  const fullPayload: RestorePayload = {
    ...payload,
    exp: Math.floor(Date.now() / 1000) + RESTORE_TOKEN_TTL_SECONDS,
  };

  const body = Buffer.from(JSON.stringify(fullPayload), "utf8").toString("base64url");
  const sig = crypto.createHmac("sha256", secret).update(body).digest("base64url");
  return `${body}.${sig}`;
}

export function verifyRestoreToken(token?: string | null): RestorePayload | null {
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
    ) as RestorePayload;

    if (
      parsed.product !== "pt-client-onboarding-pack" ||
      !parsed.sessionId ||
      !parsed.email ||
      !parsed.exp
    ) {
      return null;
    }

    const now = Math.floor(Date.now() / 1000);
    if (parsed.exp < now) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}