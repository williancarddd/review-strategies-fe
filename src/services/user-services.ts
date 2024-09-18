import { CreateUserDto, User } from '@/schemas/user-schema';
import apiClient from '@/lib/axios';
import { CreateStudyDayDto, StudyDay, UpdateStudyDayDto } from '@/schemas/study-schema';

export async function createUser(data: CreateUserDto): Promise<User> {
  const response = await apiClient.post<User>('/users', data);
  return response.data;
}

export async function getUserById(id: string): Promise<User> {
  const response = await apiClient.get<User>(`/users/${id}`);
  return response.data;
}

export async function updateUser(id: string, data: Partial<User>): Promise<User> {
  const response = await apiClient.patch<User>(`/users/${id}`, data);
  return response.data;
}

export async function fetchStudyDaysByMonth(userId: string, date: Date): Promise<StudyDay[]> {
  const response = await apiClient.get(`/study-days/month`, {
    params: { userId, date: date.toISOString() },
  });
  return response.data;
}

// Buscar StudyDays para um usuário em um determinado dia
export async function fetchStudyDaysByDay(userId: string, date: Date): Promise<StudyDay[]> {
  const response = await apiClient.get(`/study-days/day`, {
    params: { userId, date: date.toISOString() },
  });
  return response.data;
}

// Criar StudyDays com base no DTO de criação
export async function createStudyDay(data: CreateStudyDayDto): Promise<void> {
  await apiClient.post('/study-days', data);
}

// Atualizar um StudyDay por ID
export async function updateStudyDay(id: string, data: UpdateStudyDayDto): Promise<StudyDay> {
  return await apiClient.patch(`/study-days/${id}`, data);
}

// Deletar um StudyDay por ID
export async function deleteStudyDay(id: string): Promise<void> {
  await apiClient.delete(`/study-days/${id}`);
}

// Buscar StudyDay por ID
export async function fetchStudyDayById(id: string): Promise<StudyDay> {
  const response = await apiClient.get(`/study-days/${id}`);
  return response.data;
}