"use client";

import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { FormEvent, useRef } from "react";

export default function ForgotPasswordForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    console.log({ email });
    formRef.current?.reset();
  };

  return (
    <fieldset
      disabled={false}
      className="w-full max-w-sm border bg-foreground/5 border-foreground/10 rounded-xl p-8"
    >
      <div className="mb-4 text-center">
        <h1 className="text-3xl leading-relaxed font-bold">Forgot Password</h1>
        <h2 className="leading-loose text-sm">Don't worry it's easy</h2>
      </div>
      <Form ref={formRef} className="space-y-2" onSubmit={handleSubmit}>
        <Input
          errorMessage="Invalid email"
          description="Please enter you registered email"
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="mail@mail.com"
          type="email"
        />
        <div className="mb-4 w-full space-y-2">
          <Button
            isLoading={false}
            type="submit"
            fullWidth
            variant="solid"
            color="primary"
          >
            Submit
          </Button>
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
