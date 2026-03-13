import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

type TemplateId = "contract" | "parq" | "waiver" | "terms" | "client-agreement";

const TEMPLATE_MAP: Record<
  TemplateId,
  { envKey: string; name: string; subject: string }
> = {
  contract: {
    envKey: "TEMPLATE_FORCE_COPY_URL_CONTRACT",
    name: "Personal Trainer Contract Template (UK)",
    subject: "Your Personal Trainer Contract Template (UK)",
  },
  parq: {
    envKey: "TEMPLATE_FORCE_COPY_URL_PARQ",
    name: "Personal Trainer PAR-Q Form (UK)",
    subject: "Your Personal Trainer PAR-Q Form (UK)",
  },
  waiver: {
    envKey: "TEMPLATE_FORCE_COPY_URL_WAIVER",
    name: "Personal Trainer Liability Waiver (UK)",
    subject: "Your Personal Trainer Liability Waiver (UK)",
  },
  terms: {
    envKey: "TEMPLATE_FORCE_COPY_URL_TERMS",
    name: "Personal Trainer Terms & Conditions (UK)",
    subject: "Your Personal Trainer Terms & Conditions (UK)",
  },
  "client-agreement": {
    envKey: "TEMPLATE_FORCE_COPY_URL_CLIENT_AGREEMENT",
    name: "Personal Trainer Client Agreement (UK)",
    subject: "Your Personal Trainer Client Agreement (UK)",
  },
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      email?: unknown;
      templateId?: unknown;
    };

    const cleanEmail =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!isValidEmail(cleanEmail)) {
      return NextResponse.json(
        { success: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    const id =
      typeof body.templateId === "string" ? body.templateId.trim() : "";

    if (!id || !(id in TEMPLATE_MAP)) {
      return NextResponse.json(
        { success: false, error: "Invalid templateId" },
        { status: 400 }
      );
    }

    const templateId = id as TemplateId;
    const cfg = TEMPLATE_MAP[templateId];

    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) {
      console.error("SUBMIT_ERROR", { error: "Missing RESEND_API_KEY" });
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    const templateUrl = process.env[cfg.envKey]?.trim();
    if (!templateUrl) {
      console.error("SUBMIT_ERROR", { error: `Missing ${cfg.envKey}` });
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    const from = (
      process.env.LEADS_FROM_EMAIL || "PT Templates <owner@siddiqholdings.com>"
    ).trim();

    const notifyTo = (
      process.env.LEADS_NOTIFY_EMAIL || "owner@siddiqholdings.com"
    ).trim();

    const ownerResult = await resend.emails.send({
      from,
      to: notifyTo,
      subject: `New lead: ${cfg.name}`,
      html: `
<div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 520px; margin: 0 auto;">
  <h2 style="margin-bottom: 16px;">New template lead</h2>
  <p><strong>Email:</strong> ${cleanEmail}</p>
  <p><strong>Template:</strong> ${cfg.name}</p>
  <p><strong>Template link:</strong> <a href="${templateUrl}">${templateUrl}</a></p>
</div>`,
      text: `New template lead

Email: ${cleanEmail}
Template: ${cfg.name}
Template link: ${templateUrl}`,
    });

    if ((ownerResult as { error?: unknown })?.error) {
      console.error("OWNER_EMAIL_ERROR", ownerResult);
      return NextResponse.json(
        { success: false, error: "Failed to send owner notification" },
        { status: 500 }
      );
    }

    const userResult = await resend.emails.send({
      from,
      to: cleanEmail,
      replyTo: notifyTo,
      subject: cfg.subject,
      text: `Hi,

Your ${cfg.name} is ready.

Create your private copy below:

${templateUrl}

This will generate an editable version in your own Google Drive.

Looking for a more complete onboarding system? The full client onboarding pack is also available.

If you have any questions, simply reply to this email.

— PT Templates UK`,
      html: `
<div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 520px; margin: 0 auto;">
  <h2 style="margin-bottom: 16px;">Your template is ready</h2>

  <p>Your ${cfg.name} is ready to use.</p>

  <p style="margin: 24px 0;">
    <a href="${templateUrl}"
       style="background: #111; color: #fff; padding: 12px 18px; text-decoration: none; border-radius: 6px; display: inline-block;">
      Create My Copy
    </a>
  </p>

  <p style="font-size: 14px; color: #555;">
    The link will generate your own private copy in Google Drive.
  </p>

  <hr style="margin: 28px 0; border: none; border-top: 1px solid #eee;" />

  <p style="font-size: 14px;">
    Looking for a more complete onboarding system? The full client onboarding pack is also available.
  </p>

  <p style="margin-top: 20px; font-size: 14px;">
    If you have questions, simply reply to this email.
  </p>

  <p style="margin-top: 24px; font-size: 14px; color: #777;">
    — PT Templates UK
  </p>
</div>`,
    });

    if ((userResult as { error?: unknown })?.error) {
      console.error("USER_EMAIL_ERROR", userResult);
      return NextResponse.json(
        { success: false, error: "Failed to send template email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("SUBMIT_ERROR:", err);

    const message = err instanceof Error ? err.message : "Server error";

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}