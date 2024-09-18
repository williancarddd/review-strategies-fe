'use client';

import { useTranslations } from 'next-intl';
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

const HowStart = () => {
  const t = useTranslations('HomePage.HowStart');

  return (
    <section className="py-40">
      <div className="max-w-6xl mx-auto text-center space-y-32">
        <h2 className="text-3xl font-bold">{t('title')}</h2>

        <div className="space-y-12">
          {/* Step 1 */}
          <StepItem
            imageUrl="/Miroodles1.svg"
            imageAlt={t('step1.title')}
            title={t('step1.title')}
            description={t('step1.description')}
          />

          {/* Step 2 */}
          <StepItem
            imageUrl="/Miroodles2.svg"
            imageAlt={t('step2.title')}
            title={t('step2.title')}
            description={t('step2.description')}
            reverse={true}
          />

          {/* Step 3 */}
          <StepItem
            imageUrl="/Miroodles3.svg"
            imageAlt={t('step3.title')}
            title={t('step3.title')}
            description={t('step3.description')}
          />
        </div>
      </div>
    </section>
  );
};

export default HowStart;
