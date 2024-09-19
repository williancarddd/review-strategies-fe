'use client';

import { FC } from 'react';
import Link from 'next/link';
import { FaBook, FaChalkboardTeacher, FaChartLine, FaLaptopCode } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

interface FeatureItemProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const FeatureItem: FC<FeatureItemProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center space-y-4" id="feature-item">
    <div className="text-blue-500 text-6xl">{icon}</div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);

const HowToWork = () => {
  const t = useTranslations('HomePage.HowToWork'); // Using the 'HomePage.HowToWork' key

  return (
    <section className="py-32 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold">{t('title')}</h2>
        {/* Line blue below title */}
        <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        
        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureItem
            icon={<FaBook color="black" />}
            title={t('feature1.title')}
            description={t('feature1.description')}
          />
          <FeatureItem
            icon={<FaChalkboardTeacher color="green" />}
            title={t('feature2.title')}
            description={t('feature2.description')}
          />
          <FeatureItem
            icon={<FaChartLine />}
            title={t('feature3.title')}
            description={t('feature3.description')}
          />
          <FeatureItem
            icon={<FaLaptopCode color="brown" />}
            title={t('feature4.title')}
            description={t('feature4.description')}
          />
        </div>

        <div className="mt-8">
          <Link href="#payment-section" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors bg-primary text-primary-foreground hover:translate-y-1 active:translate-y-0 shadow-[0px_8px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-[0px_6px_0px_0px_rgba(0,0,0,0.15)]">
            {t('buttonText')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowToWork;
