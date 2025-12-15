import { cva } from "class-variance-authority";
import { type Dispatch, type SetStateAction, useState } from "react";
import { Checkbox } from "@/components/adapted/checkbox";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { useFieldContext } from "@/hooks/form-context";
import type { EditableItem } from "@/lib/utils";
import { SurveyFieldSet } from "./survey";
import type { SurveyEditableItem } from "./utils";

// STYLES ----------------------------------------------------------------------------------------------------------------------------------
const CHECKBOX = {
  checkbox: cva("cursor-pointer"),
  field: cva(`cursor-pointer rounded-md border border-transparent border-dashed px-2 
  hover:border-foreground 
  has-[>[data-slot=field-content]]:items-center has-[>[data-state=checked]]:bg-muted`),
  group: cva("data-[slot=checkbox-group]:gap-2"),
  label: cva("w-full cursor-pointer flex-col items-start gap-1 py-1"),
};

// MAIN ------------------------------------------------------------------------------------------------------------------------------------
export default function CheckboxesField({ items: initialItems, ...props }: CheckboxesFieldProps) {
  const { handleChange, state } = useFieldContext<EditableItem[]>();

  const [items, setItems] = useState([...initialItems]);

  const addEditableItem = () => {
    const newItem = { editable: true, id: `extra${items.length}`, label: "" };
    setItems([...items, newItem]);
    handleChange([...state.value, newItem]);
  };

  return (
    <SurveyFieldSet {...props}>
      {() => (
        <FieldGroup className={CHECKBOX.group()} data-slot="checkbox-group">
          {items.map((item) => (
            <CheckboxField item={item} items={items} key={item.id} setItems={setItems} />
          ))}
          <Button className="cursor-pointer" onClick={addEditableItem} size="sm" type="button" variant="secondary">
            <span className="icon-[lucide--plus-circle]" /> Ajouter une réponse
          </Button>
        </FieldGroup>
      )}
    </SurveyFieldSet>
  );
}
export type CheckboxesFieldProps = {
  description?: string;
  index: number;
  items: readonly SurveyEditableItem[];
  legend: string;
};

// ITEM ------------------------------------------------------------------------------------------------------------------------------------
export function CheckboxField({ item, items, setItems }: CheckboxFieldProps) {
  const { name, pushValue, removeValue, replaceValue, state } = useFieldContext<EditableItem[]>();

  const changeChecked = (checked: boolean) => {
    if (checked) return pushValue(item);
    const index = state.value.indexOf(item);
    if (index !== -1) removeValue(index);
  };

  const changeEditable = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newItem = { ...item, label: e.target.value };
    setItems(items.map((it) => (it.id === item.id ? newItem : it)));
    const index = state.value.indexOf(item);
    if (index !== -1) replaceValue(index, newItem);
  };

  const remove = () => {
    setItems(items.filter(({ id }) => item.id !== id));
    const index = state.value.indexOf(item);
    if (index !== -1) removeValue(index);
  };

  return (
    <Field className={CHECKBOX.field()} orientation="horizontal">
      <Checkbox
        checked={state.value.some(({ id }: SurveyEditableItem) => id === item.id)}
        className={CHECKBOX.checkbox()}
        id={`${name}_${item.id}`}
        name={name}
        onCheckedChange={changeChecked}
      />
      <FieldLabel className={CHECKBOX.label()} htmlFor={`${name}_${item.id}`}>
        {item.editable ? (
          <InputGroup className="max-w-2xs bg-background dark:bg-input">
            <InputGroupInput
              className="bg-transparent dark:bg-transparent"
              onChange={changeEditable}
              placeholder="Veuillez préciser"
              value={item.label}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton aria-label="Retirer" className="cursor-pointer" onClick={remove} size="icon-xs" title="Retirer">
                {<span className="icon-[lucide--trash-2]" />}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        ) : (
          item.label
        )}
      </FieldLabel>
    </Field>
  );
}
export type CheckboxFieldProps = {
  item: SurveyEditableItem;
  items: SurveyEditableItem[];
  setItems: Dispatch<SetStateAction<SurveyEditableItem[]>>;
};
