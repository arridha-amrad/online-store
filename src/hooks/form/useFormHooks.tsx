import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import * as Field from "./field.components";
import { SubmitButton } from "./form.components";

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    ...Field,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
