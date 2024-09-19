import apiClient from '@/lib/axios';
import { User } from '@/schemas/user-schema';

export async function loginUser(email: string, password: string) {
  const response = await apiClient.post('/auth/login', { email, password });
  return response.data;
}
