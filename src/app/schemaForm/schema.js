import { Description } from "@radix-ui/react-dialog";
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
  phone_number: z
    .string()
    .regex(phoneNumberRegex, { message: "Invalid phone number format" }),
  first_name: z.string().min(1, { message: "Name is Required" }),
  last_name: z.string().min(1, { message: "Surname is Required" }),
  email_address: z
    .string()
    .min(1, { message: "Email is Required" })
    .email("This is not a valid email."),
  address: z.string().min(2, { message: "Address is required" }),
  postal_code: z.string(),
});

//Form for addProduct
const categories = [
  { 1: "remeras" },
  { 2: "jeans" },
  { 3: "camperas" },
  { 4: "camisas" },
  { 5: "accesorios" },
];

export const schemaAddProduct = z.object({
  name_product: z.string().min(1, { message: "NameProduct is Required" }),
  price: z.number().min(3, { message: "Price is Required" }),
  description: z.string().min(5, { message: "Description is Required" }),
  category_id: z.string().min(1, { message: "Category is Required" }),
  image_url: z.string().min(1, { message: "Image is Required" }),
});
