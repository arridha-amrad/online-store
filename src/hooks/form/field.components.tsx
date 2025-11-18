import { Input } from "@heroui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useFieldContext } from "./useFormHooks";

export const TextField = ({ label }: { label: string }) => {
  const field = useFieldContext<string>();
  return (
    <Input
      errorMessage={field.state.meta.errors[0]?.message}
      isInvalid={!!field.state.meta.errors[0]?.message}
      label={label}
      type="text"
      labelPlacement="inside"
      value={field.state.value}
      onChange={(e) => field.handleChange(e.target.value)}
    />
  );
};

export const PasswordField = () => {
  const field = useFieldContext<string>();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Input
      errorMessage={field.state.meta.errors[0]?.message}
      isInvalid={!!field.state.meta.errors[0]?.message}
      label="Password"
      labelPlacement="inside"
      type={isVisible ? "text" : "password"}
      value={field.state.value}
      onChange={(e) => field.handleChange(e.target.value)}
      endContent={
        <button
          aria-label="toggle password visibility"
          className="focus:outline-solid outline-transparent"
          onClick={() => setIsVisible((val) => !val)}
          type="button"
        >
          {isVisible ? <EyeOff /> : <Eye />}
        </button>
      }
    />
  );
};
