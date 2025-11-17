"use client";

import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { FormEvent, useRef } from "react";

export default function ResetPasswordForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    console.log({ confirmPassword, password });
    formRef.current?.reset();
  };

  return (
    <fieldset
      disabled={false}
      className="w-full max-w-sm border bg-foreground/5 border-foreground/10 rounded-xl p-8"
    >
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Reset Password</h1>
      </div>
      <Form ref={formRef} className="space-y-2" onSubmit={handleSubmit}>
        <Input
          errorMessage="Invalid Password"
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="*********"
          type="password"
        />
        <Input
          errorMessage="Invalid Password"
          label="Confirm Password"
          labelPlacement="outside"
          name="confirmPassword"
          placeholder="*********"
          type="password"
        />
        <div className="mb-4 w-full space-y-2">
          <Button
            isLoading={false}
            type="submit"
            fullWidth
            variant="solid"
            color="primary"
          >
            Reset Password
          </Button>
        </div>
        <div className="flex items-center justify-center w-full">
          <p className="text-sm">
            <span className="pr-1">Back to</span>
            <Link className="text-sm" href="/signin" as={NextLink}>
              signin
            </Link>
          </p>
        </div>
      </Form>
    </fieldset>
  );
}
