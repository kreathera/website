import { createServerFn } from "@tanstack/react-start";
import { api } from "convex/_generated/api";
import { ConvexHttpClient } from "convex/browser";
import { zSurveyCreate } from "@/lib/domain";

// ROOT LAYOUT -----------------------------------------------------------------------------------------------------------------------------
export const readRootLayout = createServerFn().handler(() => ({
  header: {
    socials: [{ key: "instagram", icon: "icon-[line-md--instagram]", text: "Instagram", href: "https://www.instagram.com/kreathera/" }],
  },
}));
export type RootLayoutData = Awaited<ReturnType<typeof readRootLayout>>;

// SURVEY ----------------------------------------------------------------------------------------------------------------------------------
export const createSurvey = createServerFn({ method: "POST" })
  .inputValidator(zSurveyCreate)
  .handler(async ({ data }) => {
    const convex = new ConvexHttpClient(process.env.VITE_CONVEX_URL!);
    await convex.mutation(api.surveys.create, data);
  });
