'use client';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBook, FaChalkboardTeacher, FaChartLine, FaLaptopCode } from 'react-icons/fa';
import { Button } from "../ui/button";
import { useTranslations } from 'next-intl';
import { AnimatedListDemo } from '../Animateds/notifications';

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
    <section className="py-32 px-6 lg:px-8 bg-Romantic" id="how-to-work">
      <div className="max-w-4xl mx-auto">


        {/* Imagem e Texto */}
        <div className="flex flex-col lg:flex-row items-center gap-8">

          {/* Área da Imagem */}
          <div className="w-full lg:w-1/2 flex justify-center">
            {/* Substitua pelo seu GIF ou imagem */}
            <Image
              src="/herm.png"
              alt={t('ImageHerma')}
              width={632}
              height={708.06}
              className="rounded-lg"
            />
          </div>
          

          {/* Texto explicativo e Botão*/}
          <div className="w-full lg:w-1/2 space-y-4 text-lg  font-semiroboto text-Bossanova">
            {/* Título */}
            <h1 className="text-3xl font-roboto font-bold text-Bossanova">
              {t('title')}
            </h1>
            <p>{t('paragraph1')}</p>
            <AnimatedListDemo  className='h-32'  />
            <div className="mt-8">
              <Link href="#payment-section">
                <Button className="bg-Deluge text-white p-6 rounded-full text-lg hover:bg-Bossanova transition-colors">
                  {t('buttonText')}
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowToWork;
