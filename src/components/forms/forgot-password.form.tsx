"use client";

import { useAppForm } from "@/hooks/form/useFormHooks";
import { Form } from "@heroui/form";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { forgotPasswordSchema } from "./schemas";

export default function ForgotPasswordForm() {
  const form = useAppForm({
    defaultValues: {
      email: "",
    },
    validators: {
      onSubmit: forgotPasswordSchema,
    },
    onSubmit: async ({ value, formApi }) => {
      await new Promise((res) => setTimeout(res, 2000));
      console.log({ value });
      formApi.reset();
    },
  });

  return (
    <fieldset
      disabled={false}
      className="w-full max-w-sm border bg-foreground/5 border-foreground/10 rounded-xl p-8"
    >
      <div className="mb-4 text-center">
        <h1 className="text-3xl leading-relaxed font-bold">Forgot Password</h1>
        <h2 className="leading-loose text-sm">Don't worry it's easy</h2>
      </div>
      <Form
        className="space-y-2"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <form.AppField
          name="email"
          children={(field) => <field.TextField label="Email" />}
        />

        <div className="mb-4 w-full space-y-2">
          <form.AppForm>
            <form.SubmitButton label="Submit" />
          </form.AppForm>
        </div>

        <div className="flex items-center justify-center w-full">
          <p className="text-sm">
            <span className="pr-1">Back to </span>
            <Link className="text-sm" href="/signin" as={NextLink}>
              signin
            </Link>
          </p>
        </div>
      </Form>
    </fieldset>
  );
}
