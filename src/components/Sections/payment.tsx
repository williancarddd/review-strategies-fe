'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useTranslations } from 'next-intl';

export default function Payment() {
  const t = useTranslations('HomePage.Payment');

  return (
    <section className="py-8 flex justify-center items-center bg-gray-100" id="payment-section">
      <Card className="max-w-sm bg-gray-900 text-white rounded-lg p-6 relative">
        {/* Badge de popularidade */}
        <span className="absolute top-4 right-4 bg-green-500 text-white text-sm px-3 py-1 rounded-full">
          {t('badge')}
        </span>
        <CardHeader>
          <CardTitle className="text-white text-xl font-bold">{t('title')}</CardTitle>
          <CardDescription className="text-gray-400 text-5xl font-bold">
            {t('price')} <span className="text-2xl">{t('pricePerMonth')}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400 mb-6">
            {t('description')}
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
              {t('features.feature1')}
            </li>
            <li className="flex items-center">
              <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
              {t('features.feature2')}
            </li>
            <li className="flex items-center">
              <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
              {t('features.feature3')}
            </li>
            <li className="flex items-center">
              <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
              {t('features.feature4')}
            </li>
            <li className="flex items-center">
              <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
              {t('features.feature5')}
            </li>
            <li className="flex items-center">
              <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
              {t('features.feature6')}
            </li>
            <li className="flex items-center">
              <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
              {t('features.feature7')}
            </li>
            <li className="flex items-center">
              <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
              {t('features.feature8')}
            </li>
            <li className="flex items-center">
              <CheckCircledIcon className="w-5 h-5 text-green-400 mr-2" />
              {t('features.feature9')}
            </li>
          </ul>
        </CardContent>
        <CardFooter className="pt-6">
          <button className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-500 transition-colors">
            {t('buttonText')}
          </button>
        </CardFooter>
      </Card>
    </section>
  );
}
