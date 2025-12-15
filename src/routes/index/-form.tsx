import confetti from "canvas-confetti";
import { useRef } from "react";
import { Fragment } from "react/jsx-runtime";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FieldGroup, FieldSeparator } from "@/components/ui/field";
import { Item, ItemContent, ItemGroup, ItemTitle } from "@/components/ui/item";
import { createSurvey } from "@/functions";
import { useAppForm } from "@/hooks/form";
import { zSurveyCreateValues } from "@/lib/domain";
import { cn, valuesToCreate } from "@/lib/utils";
import { defaultSurveyCreateValues, survey } from "./-utils";

// MAIN ------------------------------------------------------------------------------------------------------------------------------------
export function SurveyForm() {
  const form = useAppForm({
    defaultValues: defaultSurveyCreateValues,
    onSubmit: async ({ value }) => {
      if (!submitRef.current) return;
      const rect = submitRef.current.getBoundingClientRect();

      await createSurvey({ data: valuesToCreate(value) });

      confetti({
        particleCount: 100,
        spread: 70,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        },
      });
      toast.success("Merci ! Nous avons bien reçu vos réponses.");
    },
  });

  const submitRef = useRef<HTMLButtonElement | null>(null);

  const sentences = [
    { id: 1, title: "Notre objectif numéro 1", description: "Créer une agence pensée pour vous simplifier la vie." },
    {
      id: 2,
      title: "Avec les outils d’aujourd’hui",
      description: " Notre ambition est de vous aider à vous concentrer sur l’essentiel: votre métier.",
    },
    {
      id: 3,
      title: "On s'occupe du reste!",
      description: "Votre communication, vos réseaux sociaux et la création de contenu qui vous ressemble.",
    },
  ];

  return (
    <form
      className="flex flex-col gap-7"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <h2 className="text-center font-heading font-light text-2xl">
        Pour cela, on aimerait en savoir plus sur vos besoins à l'aide de ce sondage.
      </h2>
      <form.AppForm>
        <Card className="relative z-10 gap-10">
          {/* <CardHeader>
            <CardTitle className="text-center font-heading font-light text-2xl">
              Pour cela, on aimerait en savoir plus sur vos besoins à l'aide de ce sondage.
            </CardTitle>
          </CardHeader> */}
          <CardContent>
            <FieldGroup>
              {survey.map((props, index) => (
                <Fragment key={props.name}>
                  {props.type === "checkbox" && (
                    <form.AppField mode="array" name={props.name} validators={{ onChange: zSurveyCreateValues.shape[props.name] }}>
                      {({ CheckboxesField }) => <CheckboxesField index={index + 1} {...props} />}
                    </form.AppField>
                  )}
                  {props.type === "radio" && (
                    <form.AppField name={props.name} validators={{ onChange: zSurveyCreateValues.shape[props.name] }}>
                      {({ RadioField }) => <RadioField index={index + 1} {...props} />}
                    </form.AppField>
                  )}
                  {props.type === "sortable" && (
                    <form.AppField name={props.name} validators={{ onChange: zSurveyCreateValues.shape[props.name] }}>
                      {({ SortableField }) => <SortableField index={index + 1} {...props} />}
                    </form.AppField>
                  )}
                  {props.type === "textarea" && (
                    <form.AppField name={props.name} validators={{ onChange: zSurveyCreateValues.shape[props.name] }}>
                      {({ TextareaField }) => <TextareaField index={index + 1} {...props} />}
                    </form.AppField>
                  )}
                  <FieldSeparator className="border-grid" />
                </Fragment>
              ))}
              <form.AppField name="consent" validators={{ onChange: zSurveyCreateValues.shape.consent }}>
                {({ ConsentField }) => <ConsentField />}
              </form.AppField>
            </FieldGroup>
            {/* <CardFooter className="mt-10 flex-col items-start gap-4 p-0">
              <ItemGroup className="grid grid-cols-1 gap-4 text-center md:grid-cols-3">
                {sentences.map(({ description, id, title }, i) => (
                  <Item className="items-start" key={id} variant="muted">
                    <ItemContent className="items-center text-base">
                      <ItemTitle
                        className={cn("font-heading font-light text-lg uppercase", i % 2 === 0 && "text-pink-400 dark:text-pink-400")}
                      >
                        {title}
                      </ItemTitle>
                      {description}
                    </ItemContent>
                  </Item>
                ))}
              </ItemGroup>
            </CardFooter> */}
          </CardContent>
        </Card>
        <ItemGroup className="grid grid-cols-1 gap-4 text-center md:grid-cols-3">
          {sentences.map(({ description, id, title }, i) => (
            <Item className="items-start bg-white dark:bg-input/30" key={id} role="listitem" variant="outline">
              <ItemContent className="items-center text-base">
                <ItemTitle className={cn("font-heading font-light text-lg uppercase", i % 2 === 0 && "text-pink-400 dark:text-pink-400")}>
                  {title}
                </ItemTitle>
                {description}
              </ItemContent>
            </Item>
          ))}
        </ItemGroup>
        <section className="relative">
          <Card className="relative z-10 py-14 lg:flex-row">
            <CardHeader className="flex-1">
              <CardTitle className="font-heading font-light text-3xl leading-none lg:text-balance">
                Prêt·e à rejoindre l'aventure ? Alors, partagez vos coordonnées et embarquez, vous aussi, dans la communauté !
              </CardTitle>
              <CardDescription className="font-normal text-xl lg:text-balance">
                Merci à vous de nous avoir consacré ce temps qu'on sait précieux. N’hésitez pas à partager ce sondage avec votre réseau de
                thérapeutes.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <FieldGroup className="flex-1 gap-4">
                <form.AppField name="email" validators={{ onChange: zSurveyCreateValues.shape.email }}>
                  {({ InputField }) => <InputField icon="icon-[lucide--mail]" label="E-mail" type="email" />}
                </form.AppField>
                <form.AppField name="phone" validators={{ onChange: zSurveyCreateValues.shape.phone }}>
                  {({ InputField }) => <InputField icon="icon-[lucide--phone]" label="Téléphone (optionnel)" type="tel" />}
                </form.AppField>
                <form.Submit ref={submitRef} />
              </FieldGroup>
            </CardContent>
          </Card>
        </section>
      </form.AppForm>
    </form>
  );
}
