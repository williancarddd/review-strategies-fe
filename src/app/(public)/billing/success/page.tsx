"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-green-900">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-wrap">Pagamento Bem-sucedido!</h1>
        <p className="text-lg mb-6">Obrigado por sua compra. Seu pagamento foi processado com sucesso.</p>
        
        <div className="space-y-4">
          <Button 
            onClick={() => router.push("/pages/calendar")}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
           Começe a criar suas revisões
          </Button>

          <Button 
            onClick={() => router.push("/")} 
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700"
          >
            Voltar para a Página Inicial
          </Button>
        </div>
      </div>
    </div>
  );
}
