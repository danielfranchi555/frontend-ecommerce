import * as z from "zod";

//schemas auth
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

//schema checkout
const phoneNumberRegex = /^\+?[1-9]\d{1,14}$/; // Ajusta según tus requisitos

export const schemaCheckout = z.object({
  phone: z
    .string()
    .regex(phoneNumberRegex, { message: "Invalid phone number format" }),
  email: z
    .string()
    .min(1, { message: "Email is Required" })
    .email("This is not a valid email."),
  firstname: z.string().min(1, { message: "Name is Required" }),
  lastname: z.string().min(1, { message: "Surname is Required" }),
  email: z
    .string()
    .min(1, { message: "Email is Required" })
    .email("This is not a valid email."),
  address: z.string().min(2, { message: "Address is required" }),
  postalcode: z.string(),
});
