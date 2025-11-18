"use client";

import { useAppForm } from "@/hooks/form/useFormHooks";
import { Form } from "@heroui/form";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import GoogleAuthButton from "../buttons/google-auth.button";
import { signinSchema } from "./schemas";

export default function SignInForm() {
  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: signinSchema,
    },
    onSubmit: async ({ value, formApi }) => {
      console.log({ value });
      await new Promise((res) => setTimeout(res, 3000));
      formApi.reset();
    },
  });

  return (
    <fieldset
      disabled={false}
      className="w-full max-w-sm border bg-foreground/5 border-foreground/10 rounded-xl p-8"
    >
      <div className="mb-4 text-center">
        <h1 className="text-3xl font-bold ">Sign In</h1>
        <h2 className="leading-loose text-sm">Start using your account</h2>
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
        <form.AppField
          name="password"
          children={(field) => <field.PasswordField />}
        />

        <div className="flex items-center justify-center w-full">
          <Link className="text-sm" href="/forgot-password" as={NextLink}>
            forgot password
          </Link>
        </div>

        <div className="mb-4 w-full space-y-2">
          <form.AppForm>
            <form.SubmitButton label="Signin" />
          </form.AppForm>

          <GoogleAuthButton />
        </div>

        <div className="flex items-center justify-center w-full">
          <p className="text-sm">
            <span className="pr-1">Don't have an account?</span>
            <Link className="text-sm" href="/signup" as={NextLink}>
              Signup
            </Link>
          </p>
        </div>
      </Form>
    </fieldset>
  );
}
