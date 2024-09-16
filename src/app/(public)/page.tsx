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
      <div>
        <Header />
      </div>
      <main>
        <ImpactSection
          title="Construa no Review Strategies"
          subtitle="A melhor maneira de otimizar seus estudos"
          description="Nossa plataforma ajuda você a melhorar seus estudos com técnicas comprovadas de revisão. "
          buttonText="EU QUERO"
          buttonLink="#payment-section" // Link para a seção de pagamento
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
