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
    subject: "Your ContractForge onboarding pack",
    html: `
      <p>Thanks for your purchase.</p>
      <p>Your personal trainer onboarding pack is ready.</p>
      <p>
        <a href="${params.restoreUrl}" style="display:inline-block;padding:12px 18px;background:#111;color:#fff;border-radius:8px;text-decoration:none;">
          Open my onboarding pack
        </a>
      </p>
      <p>Keep this email so you can restore access later on any device.</p>
      <p>Your pack includes:</p>
      <ul>
        <li>Personal Training Agreement</li>
        <li>PAR-Q Health Questionnaire</li>
        <li>Liability Waiver</li>
      </ul>
      <p>If the button does not work, copy this link into your browser:</p>
      <p>${params.restoreUrl}</p>
    `,
    text: `Thanks for your purchase.

Your personal trainer onboarding pack is ready.

Open your onboarding pack:
${params.restoreUrl}

Keep this email so you can restore access later on any device.`,
  });
}