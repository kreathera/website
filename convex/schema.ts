import { defineSchema, defineTable } from "convex/server";
import { zodOutputToConvex } from "convex-helpers/server/zod4";
import { zSurveyFields } from "@/lib/domain";

export default defineSchema({
  surveys: defineTable(zodOutputToConvex(zSurveyFields)),
});
