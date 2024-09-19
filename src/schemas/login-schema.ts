import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
  checkoutSession: z.boolean().optional(),
});

export type LoginDto = z.infer<typeof LoginSchema>;
