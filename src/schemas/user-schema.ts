import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string().cuid().describe('The id of the user'),
  username: z.string().min(3).optional().describe('The username of the user'),
  name: z.string({
    required_error: 'Name is required',
  }).min(3).describe('The name of the user'),
  objective: z.string({
    required_error: 'Objective is required',
  }).min(3).describe('The objective of the user'),
  password: z.string({
    required_error: 'Password is required',
  }).min(6).describe('The password of the user'),
  language: z.string({
    required_error: 'Language is required',
  }).describe('The language of the user'),
  phone: z.string({
    required_error: 'Phone is required',
  }).min(10).describe('The phone number of the user'),
  email: z.string().email().describe('The email of the user'),
  createdAt: z.date().describe('The date when the user was created').optional(),
  updatedAt: z.date().describe('The date when the user was updated').optional(),
});

export type User = z.infer<typeof UserSchema>;

export const CreateUserSchema = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  username: true,
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;


export const UpdateUserSchema = UserSchema.omit({
  id: true,
  password: true,
})
.extend({
  password: z.preprocess(
    (val) => (val === '' ? undefined : val), // Se o valor for uma string vazia, transforma para `undefined`
    z.string().min(6, 'A senha deve conter pelo menos 6 caracteres').optional()
  ),
  confirmPassword: z.preprocess(
    (val) => (val === '' ? undefined : val),
    z.string().optional()
  ),
})
.refine((data) => {
  // Valida apenas se a senha for fornecida
  if (data.password || data.confirmPassword) {
    return data.password === data.confirmPassword;
  }
  return true;
}, {
  message: 'As senhas não correspondem',
  path: ['confirmPassword'],
});





export type ProfileUpdateDto = z.infer<typeof UpdateUserSchema>;