import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CreateUserDto, User } from '@/schemas/user-schema';
import { useUserStore } from '@/stores/user-store';
import { useNotification } from '@/components/Notification/notification-provider'; 

export function useCreateUser() {
  const { createUser } = useUserStore();
  const { notify } = useNotification(); // Acessando o contexto de notificação

  const createUserMutation = useMutation({
    mutationFn: (data: CreateUserDto) => createUser(data),
    onSuccess: () => {
      notify("default", "Sucesso", "Usuário criado com sucesso!");
    },
    onError: () => {
      notify("destructive", "Erro", "Erro ao criar usuário email já cadastrado");
    },
  });

  return createUserMutation;
}


export function useGetUserById(id: string) {
  const { getUserById } = useUserStore();

 const getUserByIdUseQuery = useQuery({
    queryKey: ['user', id],
    queryFn: () => getUserById(id),
  });
  return getUserByIdUseQuery;
}


export function useUpdateUser() {
  const { updateUser } = useUserStore();
  const { notify } = useNotification();
  const queryClient = useQueryClient();

  const updateUserMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<User> }) =>
      updateUser(id, data),
    onSuccess: () => {
      notify("default", "Sucesso", "Perfil atualizado com sucesso!");
    },
    onError: () => {
      notify("destructive", "Erro", "Erro ao atualizar perfil.");
    },
  });

  return updateUserMutation;
}
