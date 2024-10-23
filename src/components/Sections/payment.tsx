'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "../ui/button";
import { useTranslations } from 'next-intl';

export default function Payment() {
  const t = useTranslations('HomePage.Payment');

  return (
    <section className="py-10 flex justify-center items-center bg-deluge px-4 lg:px-8" id="payment-section">
      
      {/* Container centralizado com espaçamento adequado para mobile */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-16 w-full max-w-6xl">
        
        {/* Texto da Esquerda */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-4 text-lg text-white mb-8 lg:mb-0">
          <h1 className="text-2xl lg:text-3xl font-bold">
            {t('title2')}
          </h1>
          <p className="text-base lg:text-lg">
            {t('paragraph1')}
          </p>
        </div>

        {/* Cartão de Pagamento estilizado como iPhone com sombreamento */}
        <Card className="relative w-full max-w-xs sm:max-w-sm bg-white text-black rounded-[30px] p-6 shadow-lg shadow-customSecondary-darkgray">
          <CardHeader className="flex flex-col space-y-2">
            <CardTitle className="text-black text-lg font-bold">{t('title')}</CardTitle>
            <div className="text-gray-600 text-md uppercase">{t('badge')}</div>
            <div className="text-gray-900 text-3xl lg:text-4xl mt-4 font-bold">
              {t('price')}
            </div>
            <p className="text-gray-600 mt-2 text-sm lg:text-base">
              {t('description')}
            </p>
          </CardHeader>

          <CardContent className="flex-1 mt-4">
            <ul className="space-y-2">
              <li className="flex items-center text-sm lg:text-base">
                <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
                {t('features.feature1')}
              </li>
              <li className="flex items-center text-sm lg:text-base">
                <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
                {t('features.feature2')}
              </li>
              <li className="flex items-center text-sm lg:text-base">
                <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
                {t('features.feature3')}
              </li>
              <li className="flex items-center text-sm lg:text-base">
                <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
                {t('features.feature4')}
              </li>
              <li className="flex items-center text-sm lg:text-base">
                <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
                {t('features.feature5')}
              </li>
              <li className="flex items-center text-sm lg:text-base">
                <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
                {t('features.feature6')}
              </li>
              <li className="flex items-center text-sm lg:text-base">
                <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
                {t('features.feature7')}
              </li>
              <li className="flex items-center text-sm lg:text-base">
                <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
                {t('features.feature8')}
              </li>
            </ul>
          </CardContent>

          <CardFooter className="flex-1">
            <Link href="/login?checkout=true" className="flex-1">
              <Button className="border-2 bg-deluge text-white w-full py-6 font-extrabold rounded-full hover:bg-bossanova transition-colors">
                {t('buttonText')}
              </Button>
            </Link>
          </CardFooter>
        </Card>

      </div>
    </section>
  );
}
