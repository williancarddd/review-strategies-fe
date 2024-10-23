'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';


export default function ImpactSection() {
  const t = useTranslations('HomePage');

  return (
    <section className="py-16 px-6 lg:px-8 bg-Deluge">
        {/* Texto à esquerda */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold p-4 font-Roboto text-white">
            {t('ImpactSection.title')}
          </h1>
          <h2 className=" font-semirobot text-white">{t('ImpactSection.subtitle')}</h2>
        </div>

        {/* Imagem à direita */}
        <div className="bg-wh w-full flex justify-center items-center rounded-lg ">
          <Image className='shadow-2xl rounded-md' src={"/herm.png"} alt={""} width={900} height={500} />
        </div>
    </section>
  );
}
