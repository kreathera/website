import { Indicator, Item, Root } from "@radix-ui/react-radio-group";
import { cva } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

// STYLES ----------------------------------------------------------------------------------------------------------------------------------
export const RADIO = {
  group: cva("grid gap-3"),
  icon: cva("-translate-x-1/2 -translate-y-1/2 icon-[tabler--circle-filled] absolute top-1/2 left-1/2 size-2 text-white"),
  indicator: cva("relative flex items-center justify-center"),
  item: cva(`aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs outline-none transition-[color,box-shadow] 
    focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 
    disabled:cursor-not-allowed disabled:opacity-50 
    aria-invalid:border-destructive aria-invalid:ring-destructive/20 
    dark:bg-input/30 dark:aria-invalid:ring-destructive/40`),
};

// MAIN ------------------------------------------------------------------------------------------------------------------------------------
export function RadioGroup({ className, ...props }: React.ComponentProps<typeof Root>) {
  return <Root className={cn(RADIO.group(), className)} data-slot="radio-group" {...props} />;
}

// ITEM ------------------------------------------------------------------------------------------------------------------------------------
export function RadioGroupItem({ className, ...props }: React.ComponentProps<typeof Item>) {
  return (
    <Item className={cn(RADIO.item(), className)} data-slot="radio-group-item" {...props}>
      <Indicator className={RADIO.indicator()} data-slot="radio-group-indicator">
        <span className={RADIO.icon()} />
      </Indicator>
    </Item>
  );
}
