import { Indicator, Root } from "@radix-ui/react-checkbox";
import { cva } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

// STYLES ----------------------------------------------------------------------------------------------------------------------------------
const CHECKBOX = {
  base: cva(`peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs outline-none transition-shadow 
    focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 
    disabled:cursor-not-allowed disabled:opacity-50 
    aria-invalid:border-destructive aria-invalid:ring-destructive/20 
    data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground 
    dark:bg-input/30 dark:data-[state=checked]:bg-primary dark:aria-invalid:ring-destructive/40`),
  indicator: cva("grid place-content-center text-current transition-none"),
  icon: cva("icon-[lucide--check] size-3.5"),
};

export function Checkbox({ className, ...props }: React.ComponentProps<typeof Root>) {
  return (
    <Root className={cn(CHECKBOX.base(), className)} data-slot="checkbox" {...props}>
      <Indicator className={CHECKBOX.indicator()}>
        <span className={CHECKBOX.icon()} />
      </Indicator>
    </Root>
  );
}
