import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '@/stores/auth-store';
import { useNotification } from '@/components/Notification/notification-provider';
import { LoginDto } from '@/schemas/login-schema';
import { useRouter } from 'next/navigation';
import { usePayment } from './use-payment';

export function useAuth() {
  const { login } = useAuthStore();
  const { notify } = useNotification();
  const { checkSubscription } = usePayment(); // Usa a mutação de verificação de assinatura
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: async ({ email, password, checkoutSession }: LoginDto) => {
      const loginResult = await login(email, password);
      return { loginResult, checkoutSession };
    },
    onSuccess: async ({ loginResult, checkoutSession }) => {
      notify("default", "Sucesso", "Login efetuado com sucesso");

      if (checkoutSession) {
        // Verifica se o usuário tem uma assinatura ativa
        await checkSubscription.mutateAsync({ userId: loginResult.sub });
      } else {
        router.push("/pages/dashboard");
      }
    },
    onError: () => {
      notify("destructive", "Erro", "Falha ao efetuar login");
    },
  });

  return loginMutation; // Retorna a mutação para uso no formulário
}
