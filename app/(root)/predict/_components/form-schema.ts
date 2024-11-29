import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  pendapatan: z
    .string()
    .transform((val) => parseFloat(val)) // Convert string to a number
    .refine((val) => !isNaN(val) && val > 0, { message: "Pendapatan must be a positive number." }), // Validate number
  usia: z
    .string()
    .transform((val) => parseInt(val, 10)) // Convert string to an integer
    .refine((val) => !isNaN(val) && val >= 0, { message: "Usia must be a valid number." }),
  tanggungan: z
    .string()
    .transform((val) => parseInt(val, 10)) // Convert string to an integer
    .refine((val) => !isNaN(val) && val >= 0, { message: "Tanggungan must be a valid number." }),
  pengeluaran: z
    .string()
    .transform((val) => parseFloat(val)) // Convert string to a number
    .refine((val) => !isNaN(val) && val >= 0, { message: "Pengeluaran must be a positive number." }),
  aset: z
    .string()
    .transform((val) => parseFloat(val)) // Convert string to a number
    .refine((val) => !isNaN(val) && val >= 0, { message: "Aset must be a positive number." }),
});

export const backupSchema = z.object({
  name: z.string().min(2),
  pendapatan: z.union([z.number(), z.number().int()]),
  usia: z.string(),
  tanggungan: z.string(),
  pengeluaran: z.string(),
  aset: z.string(),
});
