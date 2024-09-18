'use client';

import Header from '@/components/Menu/header';
import ImpactSection from '@/components/Sections/impact-section';
import Footer from '@/components/Sections/footer';
import HowToWork from '@/components/Sections/how-to-work';
import HowStart from '@/components/Sections/how-start';
import Payment from '@/components/Sections/payment';
import ForgettingCurveSection from '@/components/Sections/forggeting-section';
import ForgettingCurveExplanation from '@/components/Sections/forggeting-curve-explanation';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <ImpactSection
          title={t('ImpactSection.title')}
          subtitle={t('ImpactSection.subtitle')}
          description={t('ImpactSection.description')}
          buttonText={t('ImpactSection.buttonText')}
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
