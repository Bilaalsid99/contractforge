import { cookies } from "next/headers";
import { verifyAccessToken } from "@/lib/stripe/access";
import GenerateClient from "./generate-client";

export default async function GeneratePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("contractforge_access")?.value;
  const access = verifyAccessToken(token);

  const isUnlocked = access?.product === "pt-client-onboarding-pack";

  return <GenerateClient isUnlocked={isUnlocked} />;
}