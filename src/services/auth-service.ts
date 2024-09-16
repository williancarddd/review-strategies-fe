import apiClient from '@/lib/axios';

export async function loginUser(email: string, password: string) {
  const response = await apiClient.post('/auth/login', { email, password });
  return response.data;
}
