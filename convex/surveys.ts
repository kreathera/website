import { NoOp } from "convex-helpers/server/customFunctions";
import { zCustomMutation } from "convex-helpers/server/zod4";
import { zSurveyCreate } from "@/lib/domain";
import { mutation } from "./_generated/server";

const zMutation = zCustomMutation(mutation, NoOp);

export const create = zMutation({
  args: zSurveyCreate,
  handler: ({ db }, args) => db.insert("surveys", args),
});
