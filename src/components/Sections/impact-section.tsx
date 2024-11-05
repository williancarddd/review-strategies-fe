'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';


export default function ImpactSection() {
  const t = useTranslations('HomePage');

  return (
    <section className="py-20 px-6 lg:px-8 bg-Deluge">
        {/* Texto à esquerda */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold p-4 font-Roboto text-white">
            {t('ImpactSection.title')}
          </h1>
          <h2 className=" font-semirobot text-white">{t('ImpactSection.subtitle')}</h2>
        </div>

        {/* Imagem à direita */}
        <div className="bg-wh w-full flex justify-center items-center rounded-lg ">
          <Image className='=rounded-md' src={"/dashboard-example.svg"} alt={""} width={1200} height={600} />
        </div>
    </section>
  );
}
