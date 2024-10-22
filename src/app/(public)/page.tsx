'use client';

import Header from '@/components/Menu/header';
import ImpactSection from '@/components/Sections/impact-section';
import Footer from '@/components/Sections/footer';
import HowToWork from '@/components/Sections/how-to-work';
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
      
        <ImpactSection />
        <ForgettingCurveSection />
        <ForgettingCurveExplanation />
        <HowToWork />
        <Payment />
        <Footer />
      </main>
    </div>
  );
}
