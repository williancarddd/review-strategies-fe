'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function ForgettingCurveSection() {
  const t = useTranslations('HomePage.ForgettingCurveSection');

  return (
    <section className="py-16 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        
        {/* Título */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            {t('title')}
          </h1>
        </div>

        {/* GIF e Texto */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          
          {/* Área do GIF */}
          <div className="w-full lg:w-1/2 flex justify-center">
            {/* Substitua pelo seu GIF ou imagem */}
            <Image
              src="/idontkwno.gif" 
              alt={t('gifAlt')}
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>

          {/* Texto explicativo */}
          <div className="w-full lg:w-1/2 space-y-4 text-lg text-gray-700">
            <p>{t('paragraph1')}</p>
            <p>{t('paragraph2.txt1')} <strong>{t('paragraph2.txt2')} </strong> {t('paragraph2.txt3')} </p>

            <p>{t('paragraph3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
