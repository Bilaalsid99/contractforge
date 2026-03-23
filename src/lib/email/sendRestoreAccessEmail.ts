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
    subject: "Your Personal Trainer Client Onboarding Pack is ready",
    html: `
      <p>Thanks for your purchase.</p>

      <p>Your <strong>Personal Trainer Client Onboarding Pack</strong> is ready.</p>

      <p>
        <a href="${params.restoreUrl}" style="display:inline-block;padding:12px 18px;background:#111;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;">
          Open my onboarding pack
        </a>
      </p>

      <p>This link restores access to the generator and your documents for the next 30 days.</p>

      <p><strong>Your pack includes:</strong></p>

      <ul>
        <li>Personal Training Agreement</li>
        <li>PAR-Q Health Questionnaire</li>
        <li>Liability Waiver</li>
      </ul>

      <p><strong>Supporting onboarding templates:</strong></p>

      <p>
      These templates open as editable Google Docs so you can make your own copy
      and customise them for your business.
      </p>

      <ul>
        <li>
          <a href="https://docs.google.com/document/d/1WO-IOBYOXwvUSNy6jGvJ9Zney5pnd-UZlXqvx4YnU-Y/copy">
            Quick-start onboarding guide
          </a>
        </li>

        <li>
          <a href="https://docs.google.com/document/u/6/d/1AHtCwbRAN39V9mGEeHwuLEJytRnl4VMTOOZKBrzaaVk/copy">
            Emergency & Health Information Form
          </a>
        </li>

        <li>
          <a href="https://docs.google.com/document/u/6/d/1_NwmIbY12KAQ_WdzQQmESZOrQnWY2urVxSJc3i6QLb4/copy">
            Incident / Injury Report Form
          </a>
        </li>
      </ul>

      <p>If the button above does not work, copy this link into your browser:</p>

      <p>${params.restoreUrl}</p>
    `,
    text: `Thanks for your purchase.

Your Personal Trainer Client Onboarding Pack is ready.

Open your onboarding pack:
${params.restoreUrl}

This link restores access to the generator and your documents for the next 30 days.

Your pack includes:

• Personal Training Agreement
• PAR-Q Health Questionnaire
• Liability Waiver

Supporting onboarding templates:

These templates open as editable Google Docs so you can make your own copy and customise them for your business.

Client Intake / Consultation Form
https://docs.google.com/document/d/1EPyDfkQibmTjuWJxcQupMZgpSmyDr1Lhyc_kncUIEos/copy

Emergency & Health Information Form
https://docs.google.com/document/u/6/d/1AHtCwbRAN39V9mGEeHwuLEJytRnl4VMTOOZKBrzaaVk/copy

Incident / Injury Report Form
https://docs.google.com/document/u/6/d/1_NwmIbY12KAQ_WdzQQmESZOrQnWY2urVxSJc3i6QLb4/copy

Quick-start onboarding guide
https://docs.google.com/document/u/6/d/1iit8DSCG9uDKrQLW-m2PEQa3nswzx6eeSFShY7YxvhY/copy
`,
  });
}