// hooks/useFormValidation.ts
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define individual field schemas
const fieldSchemas = {
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "Name should only contain letters and spaces"),

  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must not exceed 50 characters")
    .regex(
      /^[a-zA-Z\s]*$/,
      "First name should only contain letters and spaces"
    ),

  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must not exceed 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "Last name should only contain letters and spaces"),

  mobileNumber: z
    .string()
    .length(10, "Mobile number must be exactly 10 digits")
    .regex(/^[0-9]+$/, "Mobile number should only contain numbers"),

  panNumber: z
    .string()
    .length(10, "PAN number must be exactly 10 characters")
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN number format"),

  dob: z
    .date()
    .max(new Date(), "Date of birth cannot be in the future")
    .min(new Date(1900, 0, 1), "Invalid date of birth")
    .transform((date) => new Date(date)),

  pincode: z
    .string()
    .length(6, "Pincode must be exactly 6 digits")
    .regex(/^[0-9]+$/, "Pincode should only contain numbers"),

  state: z
    .string()
    .min(2, "State name is required")
    .max(30, "State name is too long"),

  city: z
    .string()
    .min(2, "City name is required")
    .max(30, "City name is too long"),

  email: z.string().email("Invalid email address").min(5, "Email is required"),

  otp: z
    .string()
    .length(6, "OTP must be 6 digits")
    .regex(/^[0-9]+$/, "OTP should only contain numbers"),

  upiId: z
    .string()
    .min(5, "UPI ID must be at least 5 characters long")
    .regex(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+$/, "Invalid UPI ID format"),

  accountNumber: z
    .string()
    .length(16, "Account number must be exactly 16 digits") // Assumes account number is 16 digits
    .regex(/^[0-9]+$/, "Account number should only contain numbers"),

  ifscNumber: z
    .string()
    .length(11, "IFSC code must be exactly 11 characters") // IFSC codes are typically 11 characters long
    .regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC code format"),

  // Terms & Conditions
  terms: z.literal(true, {
    errorMap: () => ({
      message: "You must accept the terms and conditions",
    }),
  }),

  // Dropdown Fields
  gender: z.string().min(1, "Please select a gender"),

  tenure: z.string().min(1, "Please select a tenure option"),

  marritalSatus: z.string().min(1, "Please select a marrital status option"),
};

// Create dynamic schema based on required fields
export const createSchema = (fields: (keyof typeof fieldSchemas)[]) => {
  const schemaObject: { [key: string]: any } = {};

  // Only add fields to the schema if they are used in the form
  fields.forEach((field) => {
    if (fieldSchemas[field]) {
      schemaObject[field] = fieldSchemas[field];
    }
  });

  return z.object(schemaObject);
};

export type FieldName = keyof typeof fieldSchemas;

export const useFormValidation = <T extends FieldName[]>(fields: T) => {
  type FormData = z.infer<ReturnType<typeof createSchema>>;

  const schema = createSchema(fields);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  return form;
};
