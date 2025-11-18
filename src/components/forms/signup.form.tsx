"use client";

import { useAppForm } from "@/hooks/form/useFormHooks";
import { Form } from "@heroui/form";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/react";
import NextLink from "next/link";
import GoogleAuthButton from "../buttons/google-auth.button";
import { signupScheme } from "./schemas";

export default function SignUpForm() {
  const form = useAppForm({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
    validators: {
      onSubmit: signupScheme,
    },
    onSubmit: async ({ value, formApi }) => {
      console.log("submitting...");
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
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <h2 className="leading-loose text-sm">Create your new account</h2>
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
          name="name"
          children={(field) => <field.TextField label="Name" />}
        />

        <form.AppField
          name="email"
          children={(field) => <field.TextField label="Email" />}
        />

        <form.AppField
          name="password"
          children={(field) => <field.PasswordField />}
        />

        <div className="mb-4 w-full space-y-2">
          <form.AppForm>
            <form.SubmitButton label="Signup" />
          </form.AppForm>
          <Divider className="mt-2 mb-4" orientation="horizontal" />

          <GoogleAuthButton />
        </div>

        <div className="flex items-center justify-center w-full">
          <p className="text-sm">
            <span className="pr-1">Already have an account?</span>
            <Link className="text-sm" href="/signin" as={NextLink}>
              Signin
            </Link>
          </p>
        </div>
      </Form>
    </fieldset>
  );
}
