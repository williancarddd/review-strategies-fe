'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircledIcon } from "@radix-ui/react-icons";

export default function Payment() {
  return (
    <section className="py-16 flex justify-center items-center bg-gray-100" id="fourth-section">
      <Card className="max-w-sm bg-gray-900 text-white rounded-lg p-6 relative">
        {/* Badge de popularidade */}
        <span className="absolute top-4 right-4 bg-green-500 text-white text-sm px-3 py-1 rounded-full">
          Vitálicio
        </span>
        <CardHeader>
          <CardTitle className="text-white text-xl font-bold">Pioneiro</CardTitle>
          <CardDescription className="text-gray-400 text-5xl font-bold">
            R$ 39.90
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400 mb-6">
            Mude sua rotina, mude sua vida, tenha melhores resultados.
            Aproveite o melhor da nossa plataforma.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
              Todas as funcionalidades
            </li>
            <li className="flex items-center">
              <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
              Inclusão de temas de estudos
            </li>
            <li className="flex items-center">
              <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
              Subtópicos de estudo
            </li>
            <li className="flex items-center">
              <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
              Notificações por preferência.
            </li>
            <li className="flex items-center">
              <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
              Calendário inteligente.
            </li>
            <li className="flex items-center">
              <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
              Personalização dos modos de estudo.
            </li>
            <li className="flex items-center">
              <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
              24x7x30 & 24x3x7 & 24x3x15
   
            </li>
          </ul>
        </CardContent>
        <CardFooter className="pt-6">
          <button className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-500 transition-colors">
            QUERO AGORA
          </button>
        </CardFooter>
      </Card>
    </section>
  );
};
