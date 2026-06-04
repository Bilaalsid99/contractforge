import type { AgreementAnswers } from "@/types/agreement";

type InputRecord = Record<string, unknown>;

class ValidationError extends Error {
  status: number;

  constructor(message: string, status = 400) {
    super(message);
    this.name = "ValidationError";
    this.status = status;
  }
}

function isRecord(input: unknown): input is InputRecord {
  return typeof input === "object" && input !== null;
}

function readString(input: InputRecord, key: string) {
  return String(input[key] ?? "").trim();
}

const trainingTypeAllowed: AgreementAnswers["trainingType"][] = [
  "online",
  "in_person",
  "hybrid",
];

function isTrainingType(value: string): value is AgreementAnswers["trainingType"] {
  return trainingTypeAllowed.includes(value as AgreementAnswers["trainingType"]);
}

export function validateAnswers(input: unknown): AgreementAnswers {
  const errors: string[] = [];
  const data = isRecord(input) ? input : {};

  const trainerName = readString(data, "trainerName");
  const businessName = readString(data, "businessName");
  const trainerEmail = readString(data, "trainerEmail");

  const clientFullName = readString(data, "clientFullName");
  const clientEmail = readString(data, "clientEmail");

  const trainingType = readString(data, "trainingType");
  const sessionLocation = readString(data, "sessionLocation");

  const sessionPrice = readString(data, "sessionPrice");
  const cancellationNoticeHoursRaw = data.cancellationNoticeHours;

  const emailOk = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  if (!trainerName) errors.push("trainerName is required");

  if (!trainerEmail || !emailOk(trainerEmail)) {
    errors.push("trainerEmail is invalid");
  }

  if (!clientFullName) errors.push("clientFullName is required");

  if (!clientEmail || !emailOk(clientEmail)) {
    errors.push("clientEmail is invalid");
  }

  if (!isTrainingType(trainingType)) {
    errors.push("trainingType must be online, in_person, or hybrid");
  }

  if (!sessionPrice) errors.push("sessionPrice is required");

  const cancellationNoticeHours = Number(cancellationNoticeHoursRaw);

  if (!Number.isFinite(cancellationNoticeHours) || cancellationNoticeHours < 0) {
    errors.push("cancellationNoticeHours must be a number >= 0");
  }

  if (
    (trainingType === "in_person" || trainingType === "hybrid") &&
    !sessionLocation
  ) {
    errors.push("sessionLocation is required for in_person or hybrid");
  }

  if (errors.length) {
    throw new ValidationError(errors.join("; "));
  }

  return {
    trainerName,
    businessName: businessName || undefined,
    trainerEmail,
    clientFullName,
    clientEmail,
    trainingType: trainingType as AgreementAnswers["trainingType"],
    sessionLocation: sessionLocation || undefined,
    sessionPrice,
    cancellationNoticeHours,
  };
}