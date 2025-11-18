import { Button } from "@heroui/button";

export default function GoogleAuthButton() {
  return (
    <Button
      isLoading={false}
      type="button"
      fullWidth
      variant="flat"
      color="default"
    >
      Continue with Google
    </Button>
  );
}
