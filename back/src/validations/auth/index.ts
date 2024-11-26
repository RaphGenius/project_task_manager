import { z } from "zod";

const emailSchema = z.string().email();
const passwordSchema = z.string().trim().min(1);
const lastnameSchema = z.string().min(1);
const firstnameSchema = z.string().min(1);

const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

const signupSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  lastname: lastnameSchema,
  firstname: firstnameSchema,
});

export { loginSchema, signupSchema };
