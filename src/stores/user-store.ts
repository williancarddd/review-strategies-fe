// stores/userStore.ts
import { CreateUserDto, User } from '@/schemas/user-schema';
import { createUser, getUserById } from '@/services/user-services';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
  getUserById: (id: string) => Promise<User | null>;
  createUser: (data: CreateUserDto) => Promise<unknown>;
}

export const useUserStore = create<UserState>()(
 
    persist(
      (set) => ({
        user: null,
        loading: false,
        error: null,
        createUser: async (data: CreateUserDto) => {
          set({ loading: true, error: null });
          try {
            const createdUser = await createUser(data);
            set({ user: createdUser, loading: false });
            return createdUser;
          } catch (error) {
            set({ error: (error as Error).message, loading: false });
            throw error;
          }
        },
        getUserById: async (id: string) => {
          set({ loading: true, error: null });
          try {
            const user = await getUserById(id);
            console.log(user);
            set({ user, loading: false });
            return user;
          }
          catch (error) {
            set({ error: (error as Error).message, loading: false });
            throw error;
          }
        }
      }),
      {
        name: 'user-store',
        storage: createJSONStorage(() => localStorage),
      }
    )
);
