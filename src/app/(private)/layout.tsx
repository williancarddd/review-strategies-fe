'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Menu/header';
import { useAuthStore } from '@/stores/auth-store';
import { cn } from '@/lib/utils';
import { vibur, montserrat, poppins } from '@/lib/fonts'; 
import MenuClient from '@/components/MenuClient/menu-client';

interface PrivateLayoutProps {
  children: ReactNode;
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();
  const [loading, setLoading] = useState(true);

  const isTestEnvironment = false;

  useEffect(() => {
    if (!isTestEnvironment) {
      const unsubscribe = useAuthStore.persist.onFinishHydration(() => {
        setLoading(false);
      });

      if (useAuthStore.persist.hasHydrated()) {
        setLoading(false);
      }

      return () => unsubscribe();
    } else {
      setLoading(false);
    }
  }, [isTestEnvironment]);

  useEffect(() => {
    if (!loading && !isAuthenticated && !isTestEnvironment) {
      router.push('/login');
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
    <div className={cn('min-h-screen bg-background font-sans antialiased', vibur.variable, montserrat.variable, poppins.variable)}>
      <div className="h-screen flex flex-col">
  
        <div className="flex flex-1 lg:justify-center  lg:items-center md:justify-start md:items-start">
          <MenuClient />
          <main className="flex-1 bg-white">{children}</main>
        </div>
      </div>
    </div>
  );
}
