"use client";

import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { FormEvent, useRef, useState } from "react";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function SignUpForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    console.log({ name, email, password });
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
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <h2 className="leading-loose text-sm">Create your new account</h2>
      </div>
      <Form ref={formRef} className="space-y-2" onSubmit={handleSubmit}>
        <Input
          errorMessage="Invalid Name"
          label="Name"
          labelPlacement="outside"
          name="name"
          placeholder="John Doe"
          type="text"
        />
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
        <div className="mb-4 w-full space-y-2">
          <Button
            isLoading={false}
            type="submit"
            fullWidth
            variant="solid"
            color="primary"
          >
            Sign up
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
