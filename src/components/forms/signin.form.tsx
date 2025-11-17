"use client";

import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { FormEvent, useRef, useState } from "react";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function SignInForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    console.log({ email, password });
    formRef.current?.reset();
  };

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible((val) => !val);
  };

  return (
    <fieldset
      disabled={false}
      className="w-full max-w-sm border bg-foreground/5 border-foreground/10 rounded-xl p-8"
    >
      <div className="mb-4 text-center">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <h2 className="leading-loose text-sm">Start using your account</h2>
      </div>
      <Form ref={formRef} className="space-y-2" onSubmit={handleSubmit}>
        <Input
          errorMessage="Invalid email"
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="mail@mail.com"
          type="email"
        />
        <Input
          errorMessage="Invalid Password"
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="*********"
          type={isVisible ? "text" : "password"}
          endContent={
            <button
              aria-label="toggle password visibility"
              className="focus:outline-solid outline-transparent"
              onClick={toggleVisibility}
              type="button"
            >
              {isVisible ? <EyeOff /> : <Eye />}
            </button>
          }
        />
        <div className="flex items-center justify-center w-full">
          <Link className="text-sm" href="/forgot-password" as={NextLink}>
            forgot password
          </Link>
        </div>

        <div className="mb-4 w-full space-y-2">
          <Button
            isLoading={false}
            type="submit"
            fullWidth
            variant="solid"
            color="primary"
          >
            Sign in
          </Button>
          <Button
            isLoading={false}
            type="button"
            fullWidth
            variant="flat"
            color="warning"
          >
            Continue with google
          </Button>
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
