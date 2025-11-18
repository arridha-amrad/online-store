import z from "zod";

export const passwordSchema = z
  .string()
  .min(1, "password is required")
  .min(5, { message: "requires minimal 5 characters" })
  .regex(/[A-Z]/, { message: "requires uppercase" })
  .regex(/[a-z]/, { message: "requires lowercase" })
  .regex(/[0-9]/, { message: "requires number" });

export const signupScheme = z.object({
  name: z.string().min(1, "name is required"),
  email: z.email("invalid email"),
  password: passwordSchema,
});

export const signinSchema = z.object({
  email: z.string().min(1, "email is required"),
  password: z.string().min(1, "password is required"),
});

export const resetPasswordSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string().min(1, "this field is required"),
  })
  .refine(({ confirmPassword, password }) => password === confirmPassword, {
    error: "password not match",
    path: ["confirmPassword"],
  });

export const forgotPasswordSchema = z.object({
  email: z.email(),
});
