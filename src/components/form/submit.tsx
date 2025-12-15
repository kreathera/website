import { useFormContext } from "@/hooks/form-context";
import { Button } from "../ui/button";
import { LoadingSwap } from "../ui/loading-swap";

export default function Submit({ ref }: { ref?: React.Ref<HTMLButtonElement> }) {
  const form = useFormContext();
  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button ref={ref} size="lg">
          <LoadingSwap className="inline-flex cursor-pointer items-center gap-2 font-heading text-2xl" isLoading={isSubmitting}>
            <span className="icon-[roentgen--survey-point]" />
            ENVOYER
          </LoadingSwap>
        </Button>
      )}
    </form.Subscribe>
  );
}
