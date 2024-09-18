'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function ForgettingCurveExplanation() {
  const t = useTranslations('HomePage.ForgettingCurveExplanation');

  return (
    <section className="py-16 px-6 lg:px-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">

        {/* Título */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-blue-600 border-2 border-blue-400 p-4 rounded-lg inline-block shadow-md">
            {t('title')}
          </h1>
        </div>

        {/* Texto Explicativo */}
        <div className="space-y-6 text-lg text-gray-800">
          <p>
            {t('paragraph1.txt1')} <span className="font-bold text-blue-600">{t('paragraph1.txt2')}</span> {t('paragraph1.txt3')}
          </p>
          <p>
            {t('paragraph2.txt1')} <strong className="text-blue-600">{t('paragraph2.txt2')}</strong> {t('paragraph2.txt3')} <strong className="text-blue-600">{t('paragraph2.txt4')}</strong> {t('paragraph2.txt5')}
          </p>
        </div>

        {/* Gráfico */}
        <div className="mt-8 mb-6 flex justify-center">
          <div className="border-2 border-blue-400 rounded-lg p-4 shadow-md">
            <Image src="/curve.png" alt={t('graphAlt')} width={800} height={600} />
          </div>
        </div>

        {/* Texto Final */}
        <div className="space-y-6 text-lg text-gray-800">
          <p>
            {t('paragraph3.txt1')} <span className="font-bold text-blue-600">{t('paragraph3.txt2')}</span>{t('paragraph3.txt3')} <span className="font-bold text-blue-600">{t('paragraph3.txt4')}</span>{t('paragraph3.txt5')}
          </p>
          <p>
            {t('paragraph4.txt1')} <strong className="text-blue-600">{t('paragraph4.txt2')}</strong>{t('paragraph4.txt3')} <span className="font-bold text-blue-600">{t('paragraph4.txt4')}</span>{t('paragraph4.txt5')}
          </p>
        </div>
      </div>
    </section>
  );
}
