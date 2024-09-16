import { loginUser } from '@/services/auth-service';
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
  setUser: (user: User, token: string) => void;
  login: (email: string, password: string) => Promise<void>;
  getUser: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user: User, token: string) => {
        set({ user, isAuthenticated: true });
        localStorage.setItem('auth-token', token); // Armazena o token no localStorage
      },
      login: async (email: string, password: string) => {
        try {
          const data = await loginUser(email, password); // Chama o serviço de login
          console.log(data);
          set({ user: data, isAuthenticated: true });
          localStorage.setItem('auth-token', data.access_token); // Armazena o token
        } catch (error) {
          throw new Error('Login falhou');
        }
      },
      getUser: () => {
        const token = localStorage.getItem('auth-token');
        if (token) {
          const user = JSON.parse(atob(token.split('.')[1]));
          set({ user, isAuthenticated: true });
        }
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
        localStorage.removeItem('auth-storage'); // Remove do localStorage
        localStorage.removeItem('auth-token');   // Remove o token do localStorage
      },
    }),
    {
      name: 'auth-storage', // nome para o armazenamento persistente
      storage: createJSONStorage(() => localStorage),
    }
  )
);
