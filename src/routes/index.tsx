import { createFileRoute } from "@tanstack/react-router";
import { cva } from "class-variance-authority";
import { SurveyForm } from "./index/-form";

// ROUTE -----------------------------------------------------------------------------------------------------------------------------------
export const Route = createFileRoute("/")({
  component: IndexPage,
});

// MAIN ------------------------------------------------------------------------------------------------------------------------------------
function IndexPage() {
  return (
    <>
      <Header />
      <SurveyForm />
    </>
  );
}

// HEADER ----------------------------------------------------------------------------------------------------------------------------------
const HEADER = {
  container: cva("container-wrapper"),
  description: cva("max-w-3xl text-balance text-base text-foreground sm:text-lg md:text-xl lg:text-2xl"),
  root: cva("border-grid"),
  title: cva("max-w-4xl text-balance font-black font-heading text-4xl leading-tighter lg:leading-[1.1] xl:text-5xl"),
};

function Header() {
  const { description, title } = {
    description: `Nous sommes trois thérapeutes et informaticiens, motivé·es par une idée simple : Vous libérer du temps pour votre cœur de métier en
        prenant en charge votre stratégie, votre communication et vos réseaux sociaux.`,
    title: (
      <>
        QU'EST-CE QUE KREA<span className="text-primary">THERA</span> ?
      </>
    ),
  };

  return (
    <section className={HEADER.root()}>
      <div className={HEADER.container()}>
        <div className="container flex flex-col items-center gap-2 py-8 text-center md:py-16 lg:gap-4 lg:py-20">
          <h1 className={HEADER.title()}>{title}</h1>
          <p className={HEADER.description()}>{description}</p>
        </div>
      </div>
    </section>
  );
}
