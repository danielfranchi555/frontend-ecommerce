import * as z from "zod";

export const schema = z.object({
  name: z.string().min(1, { message: "Name is Required" }),
  surname: z.string().min(1, { message: "Surname is Required" }),
  email: z
    .string()
    .min(1, { message: "Email is Required" })
    .email("This is not a valid email."),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const schemaLogin = z.object({
  email: z
    .string()
    .min(1, { message: "Email is Required" })
    .email("This is not a valid email."),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});
