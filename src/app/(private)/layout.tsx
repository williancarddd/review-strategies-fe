// app/(private)/layout.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/authStore';
import Header from '@/components/Menu/header';
import MenuClient from './menu-client';

interface PrivateLayoutProps {
  children: React.ReactNode;
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();
  const [loading, setLoading] = useState(true);
  
  // Verificar se estamos em ambiente de teste
  const isTestEnvironment = "true"=== 'true';

  useEffect(() => {
    if (!isTestEnvironment) {
      const unsubscribe = useAuthStore.persist.onFinishHydration(() => {
        setLoading(false);
      });

      // Se a store já foi hidratada, skip o estado de carregamento
      if (useAuthStore.persist.hasHydrated()) {
        setLoading(false);
      }

      return () => unsubscribe();
    } else {
      setLoading(false); // Não carrega nada se estiver em teste
    }
  }, [isTestEnvironment]);

  useEffect(() => {
    if (!loading && !isAuthenticated && !isTestEnvironment) {
      router.push('/login'); // Redireciona para a página de login se não autenticado
    }
  }, [loading, isAuthenticated, isTestEnvironment, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-800">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <MenuClient />
        <main className="flex-1 bg-white p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
