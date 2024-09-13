import apiClient from '@/lib/axios';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface User {
  email: string;
  sub: string;
  access_token: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        try {
          const response = await apiClient.post('/login', { email, password });
          const user = response.data.user;

          set({ user, isAuthenticated: true });
        } catch (error) {
          throw error;
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
        delete apiClient.defaults.headers.common['Authorization'];
      },
    }),
    {
      name: 'auth-storage', // unique name for the storage item
      storage: createJSONStorage(() => localStorage), // using localStorage here
    }
  )
);
