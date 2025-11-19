import { Input, Textarea } from "@heroui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useFieldContext } from "./useFormHooks";
import { Select, SelectItem } from "@heroui/select";
import { IdWithName } from "@/types";

export const TextField = ({ label }: { label: string }) => {
  const field = useFieldContext<string>();
  return (
    <Input
      className="w-full"
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
      className="w-full"
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

export const SelectField = ({
  options,
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
  options: IdWithName[];
}) => {
  const field = useFieldContext<string>();
  return (
    <Select
      className="w-full"
      items={options}
      label={label}
      placeholder={placeholder}
      errorMessage={field.state.meta.errors[0]?.message}
      isInvalid={!!field.state.meta.errors[0]?.message}
      selectedKeys={[field.state.value]}
      onChange={(e) => field.handleChange(e.target.value)}
    >
      {(option) => (
        <SelectItem aria-hidden={false} key={option.id}>
          {option.name}
        </SelectItem>
      )}
    </Select>
  );
};

export const TextAreaField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  const field = useFieldContext<string>();
  return (
    <Textarea
      className="w-full"
      value={field.state.value}
      onValueChange={field.handleChange}
      errorMessage={field.state.meta.errors[0]?.message}
      isInvalid={!!field.state.meta.errors[0]?.message}
      label={label}
      placeholder={placeholder}
      description="Enter a concise detail address"
    />
  );
};
