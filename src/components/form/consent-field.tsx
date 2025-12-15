import { useMemo } from "react";
import { Switch } from "@/components/ui/switch";
import { useFieldContext } from "@/hooks/form-context";
import { Field, FieldContent, FieldDescription, FieldLabel } from "../ui/field";
import { SurveyFieldError } from "./survey";

// MAIN ------------------------------------------------------------------------------------------------------------------------------------
export default function ConsentField() {
  const { form, handleChange, name, state } = useFieldContext<boolean>();
  const isInvalid = useMemo(
    () => (form.state.submissionAttempts > 0 || state.meta.isBlurred) && !state.meta.isValid,
    [form.state.submissionAttempts, state.meta.isBlurred, state.meta.isValid]
  );

  return (
    <Field data-invalid={isInvalid} orientation="horizontal">
      <FieldContent>
        <FieldLabel htmlFor={name}>J’accepte que mes données soient utilisées dans le cadre de ce sondage</FieldLabel>
        <FieldDescription className="italic">
          Ce sondage est réalisé par Samia Mekkas, Grégory Bouteiller et Sébastien Dunand dans le cadre de la conception d’un outil
          numérique pour les thérapeutes. Vos données (prénom, email, profession, etc.) seront utilisées uniquement pour cette étude et
          conservées 12 mois, puis supprimées. Vous pouvez exercer vos droits (accès, rectification, effacement) en écrivant à
          kreathera@gmail.com
        </FieldDescription>
        <SurveyFieldError errors={state.meta.errors} isInvalid={isInvalid} />
      </FieldContent>
      <Switch aria-invalid={isInvalid} checked={state.value} id={name} name={name} onCheckedChange={handleChange} />
    </Field>
  );
}
