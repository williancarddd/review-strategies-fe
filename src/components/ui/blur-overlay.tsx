import { useGetHasActiveSubscription } from "@/hooks/use-payment";
import { useAuthStore } from "@/stores/auth-store";
import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

interface BlurOverlayProps {
  children: ReactNode;
  message: string;
}

export default function BlurOverlay({ children, message }: BlurOverlayProps) {
  const getHasSub = useGetHasActiveSubscription();
  const router = useRouter();
  const [hasSubscription, setHasSubscription] = useState(false);
  const { user } = useAuthStore();

  useEffect(() => {
    if (user?.sub) {
      getHasSub.mutateAsync({ userId: user.sub }).then(() => {
        setHasSubscription(getHasSub.data?.hasActiveSubscription || false);
      });
    }
  }, [router, user]);

  return (
    <div className="w-full relative">
      {/* Renderizar o conteúdo normalmente */}
      {children}

      {/* Adicionar a sobreposição de blur se não houver assinatura */}
      {!hasSubscription && (
        <div className="absolute inset-0 bg-white bg-opacity-60 backdrop-blur-md flex flex-col items-center justify-center z-10">
          <p className="text-lg text-gray-800 font-semibold mb-4">{message}</p>
          <button
            onClick={() => window.location.href = '/billing/checkout'}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Adquirir Plano
          </button>
        </div>
      )}
    </div>
  );
}
