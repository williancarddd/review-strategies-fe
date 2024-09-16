// stores/userStore.ts
import { CreateUserDto, User } from '@/schemas/user-schema';
import { createUser } from '@/services/user-services';
import { create } from 'zustand';

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
  createUser: (data: CreateUserDto) => Promise<unknown>;
}

export const useUserStore = create<UserState>()(
 
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
          return error;
        }
      },
    }),
);
