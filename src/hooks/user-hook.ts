import { useMutation,  useQueryClient } from '@tanstack/react-query';
import { CreateUserDto } from '@/schemas/user-schema';
import { useUserStore } from '@/stores/user-store';

// Hook que centraliza as operações com usuários
export function useCreateUser() {
  const queryClient = useQueryClient();
  const { createUser } = useUserStore();

  // Mutation para criar um usuário
  const createUserMutation = useMutation({
    mutationFn: (data: CreateUserDto) => createUser(data),
    onSuccess: (data) => {
      //@ts-ignore
      if (data && data?.name ) {
       throw data;
      }
      console.log('Usuário criado com sucesso', data);
      return data;
    },
  });

  return createUserMutation;
}
