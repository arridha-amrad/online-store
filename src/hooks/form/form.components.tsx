import { Button } from "@heroui/button";
import { useFormContext } from "./useFormHooks";

export const SubmitButton = ({ label }: { label: string }) => {
  const form = useFormContext();
  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button
          disabled={isSubmitting}
          isLoading={isSubmitting}
          type="submit"
          fullWidth
          variant="solid"
          color="primary"
        >
          {label}
        </Button>
      )}
    </form.Subscribe>
  );
};
