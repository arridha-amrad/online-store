import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { PasswordField, TextField } from "./field.components";
import { SubmitButton } from "./form.components";

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    PasswordField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
