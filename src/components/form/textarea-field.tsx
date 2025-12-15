import { Textarea } from "@/components/adapted/textarea";
import { Field, FieldLabel } from "@/components/ui/field";
import { useFieldContext } from "@/hooks/form-context";
import { SurveyFieldSet } from "./survey";

// MAIN ------------------------------------------------------------------------------------------------------------------------------------
export default function TextareaField({ index, legend }: TextareaFieldProps) {
  const { handleBlur, handleChange, name, state } = useFieldContext<string>();

  return (
    <SurveyFieldSet className="gap-2" index={index} legend={legend}>
      {(isInvalid) => (
        <Field data-invalid={isInvalid} orientation="horizontal">
          <FieldLabel className="sr-only" htmlFor={name}>
            {legend}
          </FieldLabel>
          <Textarea
            aria-invalid={isInvalid}
            id={name}
            name={name}
            onBlur={handleBlur}
            onChange={(e) => handleChange(e.target.value)}
            value={state.value}
          />
        </Field>
      )}
    </SurveyFieldSet>
  );
}
export type TextareaFieldProps = { index: number; legend: string };
