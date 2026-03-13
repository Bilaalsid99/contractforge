import crypto from "crypto";

const restoreSecret = process.env.RESTORE_TOKEN_SECRET || process.env.ACCESS_COOKIE_SECRET;

if (!restoreSecret) {
  throw new Error("Missing RESTORE_TOKEN_SECRET or ACCESS_COOKIE_SECRET");
}

const secret: string = restoreSecret;

const RESTORE_TOKEN_VERSION = 1;
const RESTORE_TOKEN_TTL_SECONDS = 60 * 60 * 24 * 30; // 30 days

type RestorePayload = {
  v: number;
  product: "pt-client-onboarding-pack";
  sessionId: string;
  email: string;
  iat: number;
  exp: number;
};

function sign(body: string) {
  return crypto.createHmac("sha256", secret).update(body).digest("base64url");
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function createRestoreToken(payload: {
  product: "pt-client-onboarding-pack";
  sessionId: string;
  email: string;
}) {
  const now = Math.floor(Date.now() / 1000);

  const fullPayload: RestorePayload = {
    v: RESTORE_TOKEN_VERSION,
    product: payload.product,
    sessionId: payload.sessionId,
    email: normalizeEmail(payload.email),
    iat: now,
    exp: now + RESTORE_TOKEN_TTL_SECONDS,
  };

  const body = Buffer.from(JSON.stringify(fullPayload), "utf8").toString("base64url");
  const sig = sign(body);

  return `${body}.${sig}`;
}

export function verifyRestoreToken(token?: string | null): RestorePayload | null {
  if (!token) return null;

  const parts = token.split(".");
  if (parts.length !== 2) return null;

  const [body, sig] = parts;
  if (!body || !sig) return null;

  const expected = sign(body);

  const sigBuf = Buffer.from(sig, "base64url");
  const expectedBuf = Buffer.from(expected, "base64url");

  if (sigBuf.length !== expectedBuf.length) return null;
  if (!crypto.timingSafeEqual(sigBuf, expectedBuf)) return null;

  try {
    const parsed = JSON.parse(
      Buffer.from(body, "base64url").toString("utf8")
    ) as Partial<RestorePayload>;

    if (parsed.v !== RESTORE_TOKEN_VERSION) return null;
    if (parsed.product !== "pt-client-onboarding-pack") return null;
    if (typeof parsed.sessionId !== "string" || !parsed.sessionId.trim()) return null;
    if (typeof parsed.email !== "string" || !normalizeEmail(parsed.email)) return null;
    if (typeof parsed.iat !== "number") return null;
    if (typeof parsed.exp !== "number") return null;

    const now = Math.floor(Date.now() / 1000);
    if (now >= parsed.exp) return null;
    if (parsed.iat > now + 60) return null;

    return {
      v: parsed.v,
      product: parsed.product,
      sessionId: parsed.sessionId,
      email: normalizeEmail(parsed.email),
      iat: parsed.iat,
      exp: parsed.exp,
    };
  } catch {
    return null;
  }
}