import { Resend } from "resend";

function mustEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing ${name}`);
  return v;
}

const resend = new Resend(mustEnv("RESEND_API_KEY"));

export async function sendRestoreAccessEmail(params: {
  to: string;
  restoreUrl: string;
}) {
  const to = String(params.to || "").trim();
  if (!to.includes("@")) throw new Error("Invalid recipient email");

  const from = mustEnv("FROM_EMAIL");

  await resend.emails.send({
    from,
    to,
    subject: "Your ContractForge UK Personal Trainer Onboarding Pack is ready",
    html: `
      <p>Thanks for your purchase from ContractForge.</p>

      <p>Your <strong>UK Personal Trainer Client Onboarding Pack</strong> is ready.</p>

      <p>
        <a href="${params.restoreUrl}" style="display:inline-block;padding:12px 18px;background:#111;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;">
          Open my onboarding pack
        </a>
      </p>

      <p>This link restores access to your agreement and supporting onboarding documents for the next 30 days.</p>

      <p><strong>Your pack includes:</strong></p>

      <ul>
        <li>Client intake form</li>
        <li>Personal trainer agreement</li>
        <li>PAR-Q health questionnaire</li>
        <li>Incident form</li>
      </ul>

      <p>If the button above does not work, copy this link into your browser:</p>

      <p>${params.restoreUrl}</p>

      <p>ContractForge provides document templates and onboarding resources. It is not legal advice, a CRM, dashboard, or client management system.</p>
    `,
    text: `Thanks for your purchase from ContractForge.

Your UK Personal Trainer Client Onboarding Pack is ready.

Open your onboarding pack:
${params.restoreUrl}

This link restores access to your agreement and supporting onboarding documents for the next 30 days.

Your pack includes:

• Client intake form
• Personal trainer agreement
• PAR-Q / Health & Emergency Details
• Incident form

ContractForge provides document templates and onboarding resources. It is not legal advice, a CRM, dashboard, or client management system.
`,
  });
}