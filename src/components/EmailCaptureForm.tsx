"use client";

import { useState } from "react";

export type TemplateId =
  | "contract"
  | "parq"
  | "waiver"
  | "terms"
  | "client-agreement";

type Props = {
  templateId: TemplateId;
  buttonText?: string;
};

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return "Something went wrong. Please try again.";
}

function getApiErrorMessage(data: unknown) {
  if (
    typeof data === "object" &&
    data !== null &&
    "error" in data &&
    typeof data.error === "string"
  ) {
    return data.error;
  }

  return "Something went wrong. Please try again.";
}

export function EmailCaptureForm({ templateId, buttonText }: Props) {
  const [loading, setLoading] = useState(false);

  return (
    <form
      className="mt-5 flex flex-col gap-3 sm:flex-row"
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
          const form = e.currentTarget;
          const formData = new FormData(form);
          const email = String(formData.get("email") ?? "").trim();

          const res = await fetch("/api/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, templateId }),
          });

          let data: unknown = null;

          try {
            data = await res.json();
          } catch {
            // API did not return JSON
          }

          if (!res.ok) {
            throw new Error(getApiErrorMessage(data));
          }

          alert("Thanks. We'll email you shortly.");
          form.reset();
        } catch (error: unknown) {
          alert(getErrorMessage(error));
        } finally {
          setLoading(false);
        }
      }}
    >
      <input
        name="email"
        type="email"
        required
        placeholder="you@example.com"
        className="w-full border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
      >
        {loading ? "Sending..." : buttonText ?? "Email me the template"}
      </button>
    </form>
  );
}