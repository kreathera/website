import { cva } from "class-variance-authority";
import { useMemo } from "react";
import { Field, FieldDescription, FieldError, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { useFieldContext } from "@/hooks/form-context";
import { Badge } from "../ui/badge";

// STYLES ----------------------------------------------------------------------------------------------------------------------------------
const SURVEY = {
  badge: cva("mt-0.5 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"),
  error: cva("flex items-center gap-2 rounded-md bg-destructive/10 p-2 dark:bg-destructive/20"),
  errorIcon: cva("icon-[lucide--circle-alert] size-4"),
  field: cva("gap-2"),
  legend: cva("flex items-start gap-2"),
};

// FIELD -----------------------------------------------------------------------------------------------------------------------------------
export function SurveyField({ children, label }: SurveyFieldProps) {
  const { form, name, state } = useFieldContext<string>();
  const isInvalid = useMemo(
    () => (form.state.submissionAttempts > 0 || state.meta.isBlurred) && !state.meta.isValid,
    [form.state.submissionAttempts, state.meta.isBlurred, state.meta.isValid]
  );

  return (
    <Field className={SURVEY.field()} data-invalid={isInvalid}>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      {children(isInvalid)}
      <SurveyFieldError errors={state.meta.errors} isInvalid={isInvalid} />
    </Field>
  );
}
export type SurveyFieldProps = { children: (isInvalid: boolean) => React.ReactNode; label: string };

// FIELDSET --------------------------------------------------------------------------------------------------------------------------------
export function SurveyFieldSet({ children, className, description, index, legend }: SurveyFieldSetProps) {
  const { form, state } = useFieldContext<string>();
  const isInvalid = useMemo(
    () => (form.state.submissionAttempts > 0 || state.meta.isBlurred) && !state.meta.isValid,
    [form.state.submissionAttempts, state.meta.isBlurred, state.meta.isValid]
  );

  return (
    <FieldSet className={className}>
      <FieldLegend className={SURVEY.legend()}>
        <Badge className={SURVEY.badge()}>{index}</Badge>
        {legend}
      </FieldLegend>
      {description ? <FieldDescription>{description}</FieldDescription> : null}
      {children(isInvalid)}
      <SurveyFieldError errors={state.meta.errors} isInvalid={isInvalid} />
    </FieldSet>
  );
}
export type SurveyFieldSetProps = {
  children: (isInvalid: boolean) => React.ReactNode;
  className?: string;
  description?: string;
  index: number;
  legend: string;
};

// ERROR -----------------------------------------------------------------------------------------------------------------------------------
export function SurveyFieldError({ errors, isInvalid }: SurveyFieldErrorProps) {
  if (!isInvalid) return null;
  return (
    <FieldError className={SURVEY.error()} errors={errors}>
      <span className={SURVEY.errorIcon()} />
      {errors[0]?.message}
    </FieldError>
  );
}
export type SurveyFieldErrorProps = {
  errors: { message?: string }[];
  isInvalid: boolean;
};
