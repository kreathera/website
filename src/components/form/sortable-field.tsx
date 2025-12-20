import { RestrictToVerticalAxis } from "@dnd-kit/abstract/modifiers";
import { arrayMove, move } from "@dnd-kit/helpers";
import { DragDropProvider } from "@dnd-kit/react";
import { useSortable } from "@dnd-kit/react/sortable";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Item, ItemActions, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { useFieldContext } from "@/hooks/form-context";
import type { EditableItem } from "@/lib/utils";
import { SurveyFieldSet } from "./survey";
import type { SurveyEditableItem } from "./utils";

// MAIN ------------------------------------------------------------------------------------------------------------------------------------
export function SortableField(props: SortableFieldProps) {
  const { handleChange, state } = useFieldContext<EditableItem[]>();
  const [initialValue] = useState(state.value);
  const isMax = useMemo(() => state.value.length - initialValue.length > 4, [initialValue, state.value]);

  const addEditableItem = () => {
    if (!isMax) handleChange([...state.value, { editable: true, id: `extra${crypto.randomUUID()}`, label: "" }]);
  };

  return (
    <SurveyFieldSet description="(Déplacez les réponses du plus important au moins important)" {...props}>
      {() => (
        <Field orientation="horizontal">
          <div className="flex flex-col gap-2">
            <DragDropProvider
              //@ts-expect-error
              modifiers={[RestrictToVerticalAxis]}
              onDragEnd={(event) => handleChange(move(state.value, event))}
            >
              <div className="inline-flex flex-col gap-2">
                {state.value.map((item, index) => (
                  <SortableItem index={index} {...item} key={item.id} />
                ))}
              </div>
            </DragDropProvider>
            <Button className="cursor-pointer" disabled={isMax} onClick={addEditableItem} size="sm" variant="secondary">
              <span className="icon-[lucide--plus-circle]" /> Ajouter une réponse
            </Button>
          </div>
        </Field>
      )}
    </SurveyFieldSet>
  );
}
export type SortableFieldProps = { index: number; legend: string };

// ITEM ------------------------------------------------------------------------------------------------------------------------------------
function SortableItem({ editable, id, index, label }: SortableItemProps) {
  const { handleChange, state } = useFieldContext<EditableItem[]>();
  const { ref } = useSortable({ id, index });

  const handleClickUp = () => {
    if (index > 0) handleChange(arrayMove(state.value, index, index - 1));
  };

  const handleClickDown = () => {
    if (index < state.value.length - 1) handleChange(arrayMove(state.value, index, index + 1));
  };

  const handleClickRemove = () => {
    handleChange(state.value.filter((_, i) => i !== index));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange([...state.value.slice(0, index), { editable: true, id, label: e.target.value }, ...state.value.slice(index + 1)]);
  };

  return (
    <Item ref={ref} variant="muted">
      <ItemMedia>
        <Badge className="size-5 rounded-full px-1 font-mono tabular-nums" variant="secondary">
          {index + 1}
        </Badge>
      </ItemMedia>
      <ItemContent>
        <ItemTitle className="w-full">
          {editable ? (
            <Input className="flex-1 bg-white dark:bg-input" onChange={handleInputChange} placeholder="Veuillez préciser" value={label} />
          ) : (
            label
          )}
        </ItemTitle>
      </ItemContent>
      <ItemActions>
        <ButtonGroup>
          <Button
            aria-label="Plus important"
            className="cursor-pointer"
            disabled={index === 0}
            onClick={handleClickUp}
            size="icon-sm"
            type="button"
            variant="outline"
          >
            <span className="icon-[lucide--arrow-up]" />
          </Button>
          <Button
            aria-label="Moins Important"
            className="cursor-pointer"
            disabled={index === state.value.length - 1}
            onClick={handleClickDown}
            size="icon-sm"
            type="button"
            variant="outline"
          >
            <span className="icon-[lucide--arrow-down]" />
          </Button>
          {editable ? (
            <Button
              aria-label="Retirer"
              className="cursor-pointer"
              onClick={handleClickRemove}
              size="icon-sm"
              type="button"
              variant="outline"
            >
              <span className="icon-[lucide--trash-2]" />
            </Button>
          ) : null}
        </ButtonGroup>
      </ItemActions>
    </Item>
  );
}
type SortableItemProps = SurveyEditableItem & { index: number };
