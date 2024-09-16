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
  email: z.string({
    required_error: 'Email is required',
  }).email().describe('The email of the user'),
  createdAt: z.date().describe('The date when the user was created'),
  updatedAt: z.date().describe('The date when the user was updated'),
});

export type User = z.infer<typeof UserSchema>;

export const CreateUserSchema = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  username: true,
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
