import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod/mini";
import type { Surveys } from "./domain";

// STYLES ----------------------------------------------------------------------------------------------------------------------------------
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// SURVEY ----------------------------------------------------------------------------------------------------------------------------------
export const hasAtLeastOneEditable = (items: EditableItem[]) => items.filter(({ label }) => label !== "").length > 0;
export const hasNoEmptyEditable = (items: EditableItem[]) => items.filter(({ editable }) => editable).every(({ label }) => label !== "");
export const fromEditable = ({ editable, id, label }: EditableItem) => (editable ? label : id);

export const valuesToCreate = (values: Surveys["CreateValues"]): Surveys["Create"] => {
  const { q1, q2, q3, q4, q5, q6, ...r } = values;
  if (q2 === "" || q6 === "") throw new Error("Cette question nécessite une réponse.");
  return { ...r, q1: q1.map(fromEditable), q2, q3: q3.map(fromEditable), q4: q4.map(fromEditable), q5: q5.map(fromEditable), q6 };
};

// SCHEMAS ---------------------------------------------------------------------------------------------------------------------------------
export const zEditableItem = z.object({ editable: z.optional(z.boolean()), id: z.string(), label: z.string() });

export const zHasAtLeastOneEditable = z.refine<EditableItem[]>(hasAtLeastOneEditable, "Cette question nécessite au moins une réponse.");
export const zHasNoEmptyEditable = z.refine<EditableItem[]>(hasNoEmptyEditable, "Certaines réponses sont vides.");
export const zIsNotEmpty = z.minLength(1, "Cette question nécessite une réponse.");

// TYPES -----------------------------------------------------------------------------------------------------------------------------------
export type EditableItem = z.infer<typeof zEditableItem>;
