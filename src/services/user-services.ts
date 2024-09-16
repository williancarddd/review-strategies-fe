import { CreateUserDto, User } from '@/schemas/user-schema';
import apiClient from '@/lib/axios';

export async function createUser(data: CreateUserDto): Promise<User> {
  const response = await apiClient.post<User>('/users', data);
  return response.data; 
}
