'use client';
import { ReactNode } from 'react';
import Image from 'next/image';

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Área do Formulário à Esquerda */}
      <div className="flex-1 bg-slate-950 text-white flex items-center justify-center p-8">
        {children}
      </div>

      {/* Área da Imagem e Título à Direita */}
      <div className="hidden lg:flex flex-1 relative bg-gradient-to-r from-indigo-800 to-indigo-400">
        <div className="absolute top-20 w-full text-center text-white p-12">
          <h1 className="text-5xl font-bold mb-6">A Organização é a Chave para os Seus Estudos</h1>
          <p className="text-lg font-light">Faça parte dessa comunidade e melhore sua retenção de conteúdo</p>
        </div>

        {/* Imagem centralizada */}
        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            src="/boysandlogin.png"
            alt="Login Illustration"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
