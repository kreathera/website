import { cva } from "class-variance-authority";
import { RadioGroup, RadioGroupItem } from "@/components/adapted/radio-group";
import { Field, FieldLabel } from "@/components/ui/field";
import { useFieldContext } from "@/hooks/form-context";
import { SurveyFieldSet } from "./survey";
import type { SurveyItem } from "./utils";

// STYLES ----------------------------------------------------------------------------------------------------------------------------------
const RADIO = {
  field: cva(`cursor-pointer rounded-md border border-transparent border-dashed px-2 
  hover:border-foreground 
  has-[>[data-slot=field-content]]:items-center has-[>[data-state=checked]]:bg-muted`),
  group: cva("gap-1"),
  label: cva("w-full cursor-pointer py-1 font-normal"),
  radio: cva("cursor-pointer has-[>[data-state=checked]]:bg-primary dark:has-[>[data-state=checked]]:bg-primary"),
};

// MAIN ------------------------------------------------------------------------------------------------------------------------------------
export default function RadioField({ items, ...props }: RadioFieldProps) {
  const { handleChange, name, state } = useFieldContext<string>();

  return (
    <SurveyFieldSet {...props}>
      {(isInvalid) => (
        <RadioGroup aria-invalid={isInvalid} className={RADIO.group()} name={name} onValueChange={handleChange} value={state.value}>
          {items.map(({ id, label }) => (
            <Field className={RADIO.field()} key={`${name}_${id}`} orientation="horizontal">
              <RadioGroupItem className={RADIO.radio()} id={`${name}_${id}`} value={id} />
              <FieldLabel className={RADIO.label()} htmlFor={`${name}_${id}`}>
                {label}
              </FieldLabel>
            </Field>
          ))}
        </RadioGroup>
      )}
    </SurveyFieldSet>
  );
}
export type RadioFieldProps = {
  description?: string;
  index: number;
  legend: string;
  items: readonly SurveyItem[];
};
