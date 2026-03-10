import { NextResponse } from "next/server";
import { createCheckoutSession } from "@/lib/stripe/checkout";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { product?: string };

    if (body.product !== "pt-client-onboarding-pack") {
      return NextResponse.json({ error: "Invalid product." }, { status: 400 });
    }

    const session = await createCheckoutSession({ req });

    if (!session.url) {
      return NextResponse.json(
        { error: "No checkout URL returned." },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (err: unknown) {
    const e = err as { message?: string; status?: number };
    return NextResponse.json(
      { error: e?.message ?? "Server error" },
      { status: e?.status ?? 500 }
    );
  }
}