import { createFormHook } from "@tanstack/react-form";
import CheckboxesField from "@/components/form/checkboxes-field";
import ConsentField from "@/components/form/consent-field";
import InputField from "@/components/form/input-field";
import RadioField from "@/components/form/radio-field";
import { SortableField } from "@/components/form/sortable-field";
import Submit from "@/components/form/submit";
import TextareaField from "@/components/form/textarea-field";
import { fieldContext, formContext } from "./form-context";

export const { useAppForm, withForm, withFieldGroup } = createFormHook({
  fieldComponents: {
    CheckboxesField,
    ConsentField,
    InputField,
    RadioField,
    SortableField,
    TextareaField,
  },
  formComponents: {
    Submit,
  },
  fieldContext,
  formContext,
});
