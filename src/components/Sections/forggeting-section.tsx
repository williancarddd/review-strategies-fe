'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from "../ui/button";
import { useTranslations } from 'next-intl';


export default function ForgettingCurveSection() {
  const t = useTranslations('HomePage.ForgettingCurveSection');

  return (
    <section className="py-16 px-6 lg:px-8 bg-Romantic">
      <div className="max-w-4xl mx-auto">

        {/* Título */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-roboto  font-bold text-Deluge">
            {t('title')}
          </h1>
        </div>

        {/* Imagem e Texto */}
        <div className="flex flex-col lg:flex-row items-center gap-8">

          {/* Área da Imagem */}
          <div className="w-full lg:w-1/2 flex justify-center">
            {/* Substitua pelo seu GIF ou imagem */}
            <Image
              src="/Herman.png"
              alt={t('ImageHerma')}
              width={632}
              height={708.06}
              className="rounded-lg"
            />
          </div>

          {/* Texto explicativo e Botão*/}
          <div className="w-full lg:w-1/2 space-y-4 text-lg  text-Deluge">
            <p>{t('paragraph1')}</p>
            <div className="mt-8">

              <Link href="#payment-section"  >
                <Button className="bg-Deluge text-white px-6 py-3 rounded-full text-lg hover:bg-Bossanova transition-colors">
                  {t('buttonText')}
                </Button>
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
