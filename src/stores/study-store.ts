import { create } from 'zustand';
import { StudyDay, CreateStudyDayDto, UpdateStudyDayDto } from '@/schemas/study-schema';
import {
  fetchStudyDaysByMonth,
  createStudyDay,
  updateStudyDay,
  fetchStudyDayById,
  deleteStudyDay,
  fetchStudyDaysByDay,
} from '@/services/user-services';

interface StudyDayState {
  studyDaysMonth: StudyDay[];
  studyDaysDay: StudyDay[];
  studyDay: StudyDay | null;
  loading: boolean;
  error: string | null;
  fetchStudyDaysByMonth: (userId: string, date: Date) => Promise<StudyDay[] | undefined>;
  fetchStudyDaysByDay: (userId: string, date: Date) => Promise<StudyDay[] | undefined>;
  createStudyDay: (data: CreateStudyDayDto) => Promise<void>;
  updateStudyDay: (id: string, data: UpdateStudyDayDto) => Promise<void>;
  findStudyDay: (id: string) => Promise<StudyDay | null>;
  deleteStudyDay: (id: string, userId: string) => Promise<void>;
}

export const useStudyDayStore = create<StudyDayState>()(
  (set, get) => ({
    studyDaysMonth: [],
    studyDaysDay: [],
    studyDay: null,
    loading: false,
    error: null,

    // Busca StudyDays por mês
    fetchStudyDaysByMonth: async (userId, date) => {
      set({ loading: true, error: null });
      try {
        const days = await fetchStudyDaysByMonth(userId, date);
        set({ studyDaysMonth: days, loading: false });
        return days;
      } catch (erro) {
        const error = erro as Error;
        set({ error: error.message, loading: false });
      }
    },

    // Busca StudyDays por dia
    fetchStudyDaysByDay: async (userId, date) => {
      set({ loading: true, error: null });
      try {
        const days = await fetchStudyDaysByDay(userId, date);
        set({ studyDaysDay: days, loading: false });
        return days;
      } catch (erro) {
        const error = erro as Error;
        set({ error: error.message, loading: false });
      }
    },

    // Criação de StudyDay
    createStudyDay: async (data) => {
      set({ loading: true, error: null });
      try {
        await createStudyDay(data);
        get().fetchStudyDaysByMonth(data.userId, new Date());
      } catch (erro) {
        const error = erro as Error;
        set({ error: error.message, loading: false });
      }
    },

    // Busca StudyDay por ID
    findStudyDay: async (id) => {
      set({ loading: true, error: null });
      try {
        const day = await fetchStudyDayById(id);
        set({ studyDay: day, loading: false });
        return day;
      } catch (erro) {
        const error = erro as Error;
        set({ error: error.message, loading: false });
        return null;
      }
    },

    // Deletar StudyDay
    deleteStudyDay: async (id, userId) => {
      set({ loading: true, error: null });
      try {
        await deleteStudyDay(id);
        get().fetchStudyDaysByMonth(userId, new Date()); // Corrigido para usar userId ao invés de id
      } catch (erro) {
        const error = erro as Error;
        set({ error: error.message, loading: false });
      }
    },

    // Atualizar StudyDay
    updateStudyDay: async (id, data) => {
      set({ loading: true, error: null });
      try {
        const updated = await updateStudyDay(id, data);
        get().fetchStudyDaysByMonth(updated.userId, new Date());
        set({ studyDay: null, loading: false });
      } catch (erro) {
        const error = erro as Error;
        set({ error: error.message, loading: false });
      }
    },
  })
);
