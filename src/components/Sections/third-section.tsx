'use client';

import Image from 'next/image';

interface StepItemProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const StepItem = ({ imageUrl, imageAlt, title, description, reverse = false }: StepItemProps) => (
  <div className={`flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''} items-center lg:items-start lg:space-x-8 space-y-6 lg:space-y-0`}>
    {/* Imagem */}
    <div className="flex-shrink-0">
      <Image src={imageUrl} alt={imageAlt} width={400} height={400} />
    </div>

    {/* Texto */}
    <div className={`lg:text-left ${reverse ? 'lg:text-right' : 'text-center'} max-w-lg`}>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  </div>
);

const ThirdSection = () => {
  return (
    <section className="py-40">
      <div className="max-w-6xl mx-auto text-center space-y-32">
        <h2 className="text-3xl font-bold">Em 3 passos </ h2>

        <div className="space-y-12">
          {/* Imagem à esquerda no desktop, texto abaixo da imagem no mobile */}
          <StepItem
            imageUrl="/Miroodles1.svg" 
            imageAlt="Create icon"
            title="Você cria sua conta"
            description="Crie uma conta, se você for estudante do Enem, Concursos ou Vestibulares, ou se você for professor.
             Os preços são acessíveis, é como você estivesse comprando um lanche no ifood para sua tarde de estudos, também  a plataforma é vitalícia."
          />
          
          {/* Imagem à direita no desktop, texto abaixo da imagem no mobile */}
          <StepItem
            imageUrl="/Miroodles2.svg"
            imageAlt="Host icon"
            title="Cadastre seus temas"
            description="Seus temas de estudos são os conteúdos que você deseja estudar, você pode cadastrar quantos temas quiser,
            o sistema ficará responspável por organizar seus estudos, e você poderá estudar de forma mais eficiente, incluindo as
            revisões espaçadas."
            reverse={true} // Inversão para a segunda imagem e texto
          />

          {/* Imagem à esquerda no desktop, texto abaixo da imagem no mobile */}
          <StepItem
            imageUrl="/Miroodles3.svg"
            imageAlt="Play icon"
            title="Você estuda com a plataforma"
            description="Queremos o melhor desempenho e que você tenha sucesso em seus estudos, por isso, a plataforma foi criada para
            está o tempo todo ao seu lado com os métodos padrões de 24x7x30 & 24x3x7 & 24x3x15, você sempre sabe quando estudar, porque iremos te avisar por e-mail, whatsapp, telegram, ou qualquer outro meio de comunicação que
            você preferir, para que você não perca nenhuma revisão."
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
