import { cva } from "class-variance-authority";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/adapted/input-group";
import { useFieldContext } from "@/hooks/form-context";
import { SurveyField } from "./survey";

// STYLES ----------------------------------------------------------------------------------------------------------------------------------
const INPUT_FIELD = {
  input: cva("bg-transparent dark:bg-transparent"),
};

// MAIN ------------------------------------------------------------------------------------------------------------------------------------
export default function InputField({ icon, label, type }: InputFieldProps) {
  const { handleBlur, handleChange, name, state } = useFieldContext<string>();

  return (
    <SurveyField label={label}>
      {(isInvalid) => (
        <InputGroup>
          <InputGroupInput
            aria-invalid={isInvalid}
            className={INPUT_FIELD.input()}
            id={name}
            onBlur={handleBlur}
            onChange={(e) => handleChange(e.target.value)}
            type={type}
            value={state.value}
          />
          <InputGroupAddon>
            <span className={icon} />
          </InputGroupAddon>
        </InputGroup>
      )}
    </SurveyField>
  );
}
export type InputFieldProps = { icon: string; label: string; type: string };
