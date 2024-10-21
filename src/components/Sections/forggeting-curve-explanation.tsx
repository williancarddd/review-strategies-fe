'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from "../ui/button";
import { useTranslations } from 'next-intl';

export default function ForgettingCurveExplanation() {
  const t = useTranslations('HomePage.ForgettingCurveExplanation');

  return (
    <section className="py-32 px-6 lg:px-8 bg-Deluge">
      <div className="max-w-4xl mx-auto">

        {/* Título */}
        <div className="mb-8 text-center">
          <h1 >

          </h1>
        </div>

        {/* Imagem e Texto */}
        <div className="flex flex-col lg:flex-row items-center gap-8">


          {/* Texto explicativo e Botão*/}
          <div className="w-full lg:w-1/2 space-y-4 text-lg  text-white">
            <h1 className="text-3xl font-roboto font-bold text-white"> {t('title')} </h1>
            <p>{t('paragraph1')}</p>
            <div className="mt-8">
              <Link href="#payment-section"  >
                <Button className="border-2 bg-Deluge text-white p-6 rounded-full text-lg hover:bg-Bossanova transition-colors">
                  {t('buttonText')}
                </Button>
              </Link>
            </div>
          </div>

          {/* Área da Imagem */}
          <div className="w-full lg:w-1/2 flex  justify-center">
            {/* Substitua pelo seu GIF ou imagem */}
            <Image
              src="/curva.png"
              alt={t('ImageHerma')}
              width={632}
              height={708.06}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

