'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('HomePage.Footer');

  return (
    <footer className="bg-blue-600 text-white py-10 lg:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 px-6 text-center lg:text-left">

        {/* Logo e Links de App Store */}
        <div className="space-y-6 flex flex-col items-center lg:items-start">
          <div>
            <Link href="/">
              <Image src="/logoblack.png" alt="Review Strategies" width={50} height={50} />
            </Link>
          </div>
          <div className="space-y-4">
            <p className="font-semibold">{t('seeMore')}</p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <FaLinkedin className="w-6 h-6 hover:text-gray-300 cursor-pointer" aria-label={t('socialLinks.linkedin')} />
              <FaInstagram className="w-6 h-6 hover:text-gray-300 cursor-pointer" aria-label={t('socialLinks.instagram')} />
              <FaTiktok className="w-6 h-6 hover:text-gray-300 cursor-pointer" aria-label={t('socialLinks.tiktok')} />
            </div>
          </div>
        </div>

        {/* Links "Sobre" */}
        <div className="space-y-4">
          <h4 className="font-bold">{t('about.title')}</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">{t('about.whoWeAre')}</Link></li>
            <li><Link href="#payment-section" className="hover:underline">{t('about.prices')}</Link></li>
          </ul>
        </div>

        {/* Links "Solutions" */}
        <div className="space-y-4">
          <h4 className="font-bold">{t('solutions.title')}</h4>
          <ul className="space-y-2">
            <li><Link href="#feature-item" className="hover:underline">{t('solutions.performance')}</Link></li>
            <li><Link href="#feature-item" className="hover:underline">{t('solutions.precision')}</Link></li>
            <li><Link href="#feature-item" className="hover:underline">{t('solutions.progress')}</Link></li>
            <li><Link href="#feature-item" className="hover:underline">{t('solutions.immediateResults')}</Link></li>
          </ul>
        </div>

        {/* Links "Termos e Condições" */}
        <div className="space-y-4">
          <h4 className="font-bold">{t('terms.title')}</h4>
          <ul className="space-y-2">
            <li><Link href="/policys/privacy" className="hover:underline">{t('terms.privacyPolicy')}</Link></li>
            <li><Link href="/policys/payment" className="hover:underline">{t('terms.paymentPolicy')}</Link></li>
          </ul>
        </div>

      </div>

      {/* Parceiros */}
      <div className="max-w-7xl mx-auto mt-10 px-6 lg:px-0 flex justify-center lg:justify-between items-center space-y-4 lg:space-y-0">
        <Image src="/Powered by Stripe - black.svg" alt={t('poweredBy')} width={150} height={50} />
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto text-center mt-10 text-sm text-gray-300">
        <p>{t('copyright')}</p>
      </div>
    </footer>
  );
}
