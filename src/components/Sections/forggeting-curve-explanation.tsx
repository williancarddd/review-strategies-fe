'use client';

import Image from 'next/image';

export default function ForgettingCurveExplanation() {
  return (
    <section className="py-16 px-6 lg:px-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">

        {/* Título */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-blue-600 border-2 border-blue-400 p-4 rounded-lg inline-block shadow-md">
            Como faço para não esquecer? 🤔
          </h1>
        </div>

        {/* Texto Explicativo */}
        <div className="space-y-6 text-lg text-gray-800">
          <p>
            A boa notícia 🎉 é que, se você entender um pouco melhor sobre essa teoria e se organizar, dá pra manter o foco e <span className="font-bold text-blue-600">não esquecer</span> o que é importante!
          </p>
          <p>
            Em 1885, o psicólogo alemão <strong className="text-blue-600">Hermann Ebbinghaus</strong> apresentou ao mundo sua famosa teoria da <strong className="text-blue-600">Curva do Esquecimento</strong> 📉, que demonstra graficamente a quantidade de informações que nosso cérebro é capaz de reter ao longo do tempo.
          </p>
        </div>

        {/* Gráfico */}
        <div className="mt-8 mb-6 flex justify-center">
          <div className="border-2 border-blue-400 rounded-lg p-4 shadow-md">
            <Image src="/curve.png" alt="Gráfico da Curva do Esquecimento" width={800} height={600} />
          </div>
        </div>

        {/* Texto Final */}
        <div className="space-y-6 text-lg text-gray-800">
          <p>
            Nossa plataforma segue a teoria de <span className="font-bold text-blue-600">Ebbinghaus</span>! 🧠 Ela faz o <span className="font-bold text-blue-600">planejamento de estudos</span> baseado nas revisões, e você não vai esquecer mais nada! 🚀
          </p>
          <p>
            Por exemplo, você acabou de estudar <strong className="text-blue-600">MATEMÁTICA</strong>, faça uma <span className="font-bold text-blue-600">revisão</span> logo após estudar o assunto, outra 24 horas mais tarde, mais uma depois de 7 dias, e, finalmente, outra após 30 dias. Nós cuidamos para que você siga esse cronograma! 📅✅
          </p>
        </div>
      </div>
    </section>
  );
}
