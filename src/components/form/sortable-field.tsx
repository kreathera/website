import { Field } from "@/components/ui/field";
import { useFieldContext } from "@/hooks/form-context";
import type { EditableItem } from "@/lib/utils";
import { SortableList } from "./sortable-list";
import { SurveyFieldSet } from "./survey";

// MAIN ------------------------------------------------------------------------------------------------------------------------------------
export function SortableField(props: SortableFieldProps) {
  const { handleChange, state } = useFieldContext<EditableItem[]>();

  return (
    <SurveyFieldSet description="(Déplacez les réponses du plus important au moins important)" {...props}>
      {() => (
        <Field orientation="horizontal">
          <SortableList onValueChange={handleChange} value={state.value} />
        </Field>
      )}
    </SurveyFieldSet>
  );
}
export type SortableFieldProps = { index: number; legend: string };
