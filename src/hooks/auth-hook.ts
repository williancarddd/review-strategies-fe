import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '@/stores/auth-store';
import { useNotification } from '@/components/Notification/notification-provider';
import { LoginDto } from '@/schemas/login-schema';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const { login } = useAuthStore(); 
  const { notify } = useNotification(); 
  const router = useRouter(); 

  // Mutação de login com react-query
  const loginMutation = useMutation({
    mutationFn: async ({ email, password }: LoginDto) => {
      return await login(email, password);
    },
    onSuccess: () => {
      notify("default", "Sucesso", "Login realizado com sucesso!"); 
      router.push("/pages/calendar"); 
    },
    onError: () => {
      notify("destructive", "Erro", "Credenciais inválidas"); 
    },
  });

  return loginMutation; // Retorna a mutação para uso no formulário
}


export function useGetUser() {
  const { getUser } = useAuthStore(); 
  getUser();
}