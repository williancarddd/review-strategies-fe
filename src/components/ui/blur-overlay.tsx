import { useAuthStore } from "@/stores/auth-store";
import React, { ReactNode } from "react";

interface BlurOverlayProps {
  children: ReactNode;
  message: string;
}

export default function BlurOverlay({ children, message }: BlurOverlayProps) {
  const { user } = useAuthStore();

  // Verificar se o usuário tem uma assinatura ativa diretamente no estado global

  console.log(user);
  const hasSubscription = user?.hasActiveSubscription || false;

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
