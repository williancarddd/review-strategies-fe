'use client';

import Header from '@/components/Menu/header';
import ImpactSection from '@/components/Sections/impact-section';
import Footer from '@/components/Sections/footer';
import HowToWork from '@/components/Sections/how-to-work';
import HowStart from '@/components/Sections/how-start';
import Payment from '@/components/Sections/payment';
import ForgettingCurveSection from '@/components/Sections/forggeting-section';
import ForgettingCurveExplanation from '@/components/Sections/forggeting-curve-explanation';

export default function Home() {
  return (
    <div>
      <Header />

      <main className="p-6">
        <ImpactSection
          title="Construa no Review Strategies"
          subtitle="A melhor maneira de otimizar seus estudos"
          description="Nossa plataforma ajuda você a melhorar seus estudos com técnicas comprovadas de revisão. Você terá mais confiança e segurança para realizar suas provas e avaliações, além de melhorar sua capacidade de memorização e aprendizado."
          buttonText="QUERO APROVEITAR MEU TEMPO"
          buttonLink="/get-access"
          imageUrl="/principal.svg"
          imageAlt="Imagem de um computador com um olho"
        />
        <ForgettingCurveSection />
        <ForgettingCurveExplanation />
        <HowToWork />
        <HowStart />
        <Payment />
        <Footer />
      </main>
    </div>
  );
}
