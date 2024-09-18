import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateStudyDayDto, UpdateStudyDayDto } from '@/schemas/study-schema'; 
import { useStudyDayStore } from '@/stores/study-store';

// Hook to fetch study days by month
export function useFetchStudyMonth(){
  const queryClient = useQueryClient();
  const { fetchStudyDaysByMonth } = useStudyDayStore();
  return useMutation({
    mutationFn: ({ userId, date }: { userId: string; date: Date }) => fetchStudyDaysByMonth(userId, date),
    mutationKey: ['studyDays', 'month'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['studyDays', 'month'] });
    },
  });
}

// Hook to fetch study days by day
export function useFetchStudyDay(userId: string, date: Date) {
  const { fetchStudyDaysByDay } = useStudyDayStore();
  return useQuery({
    queryKey: ['studyDays', 'day', userId, date],
    queryFn: () => fetchStudyDaysByDay(userId, date),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!userId && !!date,
  });
}

// Hook to create a study day
export function useCreateStudyDay() {
  const queryClient = useQueryClient();
  const { createStudyDay } = useStudyDayStore();
  return useMutation({
    mutationFn: (data: CreateStudyDayDto) => createStudyDay(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['studyDays', 'month'] });
    },
  });
}

// Hook to update a study day
export function useUpdateStudyDay() {
  const queryClient = useQueryClient();
  const { updateStudyDay } = useStudyDayStore();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateStudyDayDto }) => updateStudyDay(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['studyDays', 'month'] });
    },
  });
}

// Hook to find a study day by ID
export function useFindStudyDay() {
  const queryClient = useQueryClient();
  const { findStudyDay } = useStudyDayStore();
  return useMutation({
    mutationFn: (id: string) => findStudyDay(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['studyDays', 'day'] });
    }
  });
}

// Hook to delete a study day
export function useDeleteStudyDay() {
  const queryClient = useQueryClient();
  const { deleteStudyDay } = useStudyDayStore();
  return useMutation({
    mutationFn: (id: string) => deleteStudyDay(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['studyDays', 'month'] });
    },
  });
}
