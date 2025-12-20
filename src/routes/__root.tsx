import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { cva } from "class-variance-authority";
import { Toaster } from "@/components/adapted/sonner";
import { readRootLayout } from "@/functions";
import { ThemeProvider } from "@/lib/theme";
import appCss from "../styles.css?url";
import { Bg } from "./-bg";
import { Footer } from "./-footer";
import { Header } from "./-header";

// ROUTE -----------------------------------------------------------------------------------------------------------------------------------
export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kreathera – Stratégie, communication & réseaux sociaux pour thérapeutes" },
      {
        name: "description",
        content:
          "Kreathera accompagne les thérapeutes en libérant du temps : stratégie digitale, communication, gestion des réseaux sociaux et création de contenus adaptés à votre pratique.",
      },
      {
        name: "keywords",
        content:
          "thérapeute, communication thérapeute, réseaux sociaux thérapeute, stratégie digitale thérapeute, marketing thérapie, créateur de contenu bien-être, accompagnement thérapeutes, Kreathera",
      },
      { name: "author", content: "KreaThera" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootDocument,
  loader: () => readRootLayout(),
});

// MAIN ------------------------------------------------------------------------------------------------------------------------------------
const ROOT = {
  body: cva("flex min-h-screen flex-col bg-background text-foreground"),
  container: cva("container relative mx-auto flex flex-1 flex-col px-4 pt-28 pb-8 md:px-8"),
  footer: cva("flex w-full flex-none items-center bg-secondary px-8 py-4 text-secondary-foreground"),
};

function RootDocument({ children }: RootDocumentProps) {
  const { header } = Route.useLoaderData();

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <HeadContent />
        {/* biome-ignore lint/nursery/noSyncScripts: <explanation> */}
        {/* <script crossOrigin="anonymous" src="//unpkg.com/react-scan/dist/auto.global.js" /> */}
      </head>
      <body className={ROOT.body()}>
        <ThemeProvider>
          <Bg />
          <div className={ROOT.container()}>
            <Header {...header} />
            {children}
          </div>
          <Footer />
          <Toaster position="bottom-center" />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
type RootDocumentProps = { children: React.ReactNode };
