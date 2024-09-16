import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthStore } from '@/stores/authStore';

export const useAuth = () => {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && router.pathname !== '/public/login') {
      router.push('/public/login'); // Redireciona para login se não autenticado
    }
  }, [isAuthenticated, router]);

  return { isAuthenticated };
};
