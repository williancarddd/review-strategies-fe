'use client';

import Image from 'next/image';

export default function ForgettingCurveSection() {
  return (
    <section className="py-16 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        
        {/* Título */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Você Esquece depois que estuda algo? 🤔
          </h1>
        </div>

        {/* GIF e Texto */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          
          {/* Área do GIF */}
          <div className="w-full lg:w-1/2 flex justify-center">
            {/* Substitua pelo seu GIF ou imagem */}
            <Image
              src="/idontkwno.gif" 
              alt="GIF de Curva de Esquecimento"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>

          {/* Texto explicativo */}
          <div className="w-full lg:w-1/2 space-y-4 text-lg text-gray-700">
            <p>
              Que atire a primeira pedra quem nunca esqueceu um conteúdo que tinha estudado na semana anterior!
            </p>
            <p>
              Você já ouviu falar na <strong>Curva de esquecimento de Ebbinghaus</strong>? Não? (ou já esqueceu? <i>kkk</i>)
            </p>
            <p>
              Antes de se assustar com esse nome, saiba que ela atinge todo mundo! Isso significa que enquanto você está lendo esse post, está esquecendo de alguma informação que você estudou.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
