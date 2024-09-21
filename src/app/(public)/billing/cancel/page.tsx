"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function CancelPage() {
  const router = useRouter();

  function comeBackPage() {
    router.back();
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-900">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Pagamento Cancelado</h1>
        <p className="text-lg mb-6">Parece que você cancelou o pagamento. Se precisar de ajuda, entre em contato com o suporte.</p>
        
        <div className="space-y-4">
          <Button 
            onClick={comeBackPage}
            className="w-full bg-red-600 hover:bg-red-700 text-white"
          >
            Tentar Novamente
          </Button>

          <Button 
            onClick={() => router.push("/policys/privacy")} 
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700"
          >
            Contatar Suporte
          </Button>
        </div>
      </div>
    </div>
  );
}
