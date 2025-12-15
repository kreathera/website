import { z } from "zod/mini";
import { zEditableItem, zHasAtLeastOneEditable, zHasNoEmptyEditable, zIsNotEmpty } from "./utils";

// CONSTS ----------------------------------------------------------------------------------------------------------------------------------
export const q1Ids = ["instagram", "facebook", "linkedIn", "tiktok", "youtube"] as const;
export const zQ1Ids = z.enum(q1Ids);
export const q2Ids = ["yes", "aLittle", "no"] as const;
export const zQ2Ids = z.enum(q2Ids);
export const q3Ids = ["wordOfMouth", "socialMedia", "website", "bookingPlatforms", "advertising"] as const;
export const zQ3Ids = z.enum(q3Ids);
export const q4Ids = [
  "lackingTime",
  "lackingInspiration",
  "lackingTechnicalSkills",
  "fearingNotToBeLegitimate",
  "fearingEthicalIssues",
  "notKnowingSocialCodes",
  "preferringToFocusOnMyPractice",
  "dislikingBeingVisible",
  "notSeeingUtility",
] as const;
export const zQ4Ids = z.enum(q4Ids);
export const q5Ids = [
  "lossOfAuthenticity",
  "inexactInformation",
  "deshumanisation",
  "ethicalIssues",
  "lossOfControl",
  "aiDisclosure",
  "complexity",
  "cost",
  "security",
] as const;
export const zQ5Ids = z.enum(q5Ids);
export const q6Ids = ["veryUncomfortable", "somewhatUncomfortable", "neutral", "somewhatComfortable", "veryComfortable"] as const;
export const zQ6Ids = z.enum(q6Ids);

// FIELDS ----------------------------------------------------------------------------------------------------------------------------------
export const zSurveyFields = z.object({
  q1: z.array(z.string()),
  q2: zQ2Ids,
  q3: z.array(z.string()),
  q4: z.array(z.string()),
  q5: z.array(z.string()),
  q6: zQ6Ids,
  q7: z.string(),
  q8: z.string(),
  q9: z.string(),
  email: z.email(),
  phone: z.optional(z.string()),
});

// VALUES ----------------------------------------------------------------------------------------------------------------------------------
export const zSurveyCreateValues = z.object({
  consent: z.boolean().check(z.refine((value) => !!value, { message: "Vous devez accepter les conditions d'utilisation." })),
  q1: z.array(zEditableItem).check(zHasNoEmptyEditable),
  q2: z.union([zQ2Ids, z.literal("")]).check(zIsNotEmpty),
  q3: z.array(zEditableItem).check(zHasNoEmptyEditable),
  q4: z.array(zEditableItem).check(zHasNoEmptyEditable),
  q5: z.array(zEditableItem).check(zHasAtLeastOneEditable),
  q6: z.union([zQ6Ids, z.literal("")]).check(zIsNotEmpty),
  q7: z.string().check(zIsNotEmpty),
  q8: z.string().check(zIsNotEmpty),
  q9: z.string().check(zIsNotEmpty),
  email: z.email("L'email indiqué n'est pas valide."),
  phone: z.optional(z.string()),
});

// CRUD ------------------------------------------------------------------------------------------------------------------------------------
export const zSurveyCreate = zSurveyFields;

// TYPES -----------------------------------------------------------------------------------------------------------------------------------
export type Surveys = {
  Create: z.infer<typeof zSurveyCreate>;
  CreateValues: z.infer<typeof zSurveyCreateValues>;
  Fields: z.infer<typeof zSurveyFields>;
};
