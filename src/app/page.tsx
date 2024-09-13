'use client';

import Header from '@/components/Menu/header';
import FirstSection from '@/components/Sections/first-section';
import Footer from '@/components/Sections/footer';
import FourthSection from '@/components/Sections/FourthSection';
import SecondSection from '@/components/Sections/second-section';
import ThirdSection from '@/components/Sections/third-section';

export default function Home() {
  return (
    <div>
      <Header />

      <main className="p-6">
        <FirstSection
          title="Construa no Review Strategies"
          subtitle="A melhor maneira de otimizar seus estudos"
          description="Nossa plataforma ajuda você a melhorar seus estudos com técnicas comprovadas de revisão. Você terá mais confiança e segurança para realizar suas provas e avaliações, além de melhorar sua capacidade de memorização e aprendizado."
          buttonText="QUERO APROVEITAR MEU TEMPO"
          buttonLink="/get-access"
          imageUrl="/principal.svg"
          imageAlt="Imagem de um computador com um olho"
        />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <Footer />
      </main>
    </div>
  );
}
