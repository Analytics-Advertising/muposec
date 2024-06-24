import { z } from "zod";

export const trainingApplicationSchema = z.object({
    title: z.enum(["Mr","Mrs", "Ms", "Miss"]),
    firstName: z.string().min(3, {message: "Enter a valid first name"}),
    lastName: z.string().min(3, {message: "Enter a valid last name"}),
    IDPassport: z.string().min(3, {message: "Enter a valid ID or Passport Number"}),
    phone: z.string().min(3, {message: "Enter a phone number"}).max(10, {message: "Enter a valid phone number"}),
    email: z.string().email({message: "A valid email is required"}),
    selectedOptions: z.object({
        psiraGrades: z.array(z.string()),
        firearmTraining: z.array(z.string()),
        comboTraining: z.array(z.string()),
        sassetTraining: z.array(z.string()),
      }),
})