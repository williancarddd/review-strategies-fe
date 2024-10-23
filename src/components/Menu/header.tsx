'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useAuthStore } from '@/stores/auth-store';
import { useRouter } from 'next/navigation';
import LocaleSwitcher from '../i18n/LocaleSwitcher'; // Componente para trocar de idioma
import { useTranslations } from 'next-intl'; // Hook para pegar as traduções
import { motion } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuthStore();
  const router = useRouter();
  const t = useTranslations('HomePage.Header'); // Pegando as traduções para 'Header'

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScreenLogin = () => {
    logout();
    router.push('/login');
  };

  return (
    <header className="flex items-center font-semibold justify-between py-2 px-4 bg-bossanova shadow-lg relative z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image src="/Herman.png" alt="logo" width={64} height={64} />
        </Link>
      </div>

      {/* Links e seletor de idioma na versão desktop */}
      <div className="hidden lg:flex items-center space-x-10">
        <Link href="/" className="text-white hover:text-gray-300 text-lg ">
          {t('home')}
        </Link>
        <Link href="#how-to-work" className="text-white hover:text-gray-300 text-lg ">
          {t('features')}
        </Link>
        <Link href="#payment-section" className="text-white hover:text-gray-300 text-lg ">
          {t('pricing')}
        </Link>
        <Link href="/blog" className="text-white hover:text-gray-300 text-lg ">
          {t('blog')}
        </Link>

        {/* Locale Switcher (para desktop) */}
        <div className="text-white">
          <LocaleSwitcher />
        </div>
      </div>

      {/* Botão Assinar Agora (Desktop) */}
      <div className="hidden lg:flex">
        <Button className="border-2 bg-white text-black font-bold px-6 py-6 rounded-full hover:bg-gray-100">
          {t('subscribe')}
        </Button>
      </div>

      {/* Mobile Menu button */}
      <div className="lg:hidden">
        <Button onClick={toggleMenu} variant={'default'}>
          {menuOpen ? (
            <AiOutlineClose className="w-6 h-6 text-white" />
          ) : (
            <AiOutlineMenu className="w-6 h-6 text-white" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          {/* Overlay escurecido */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu} />

          {/* Menu Mobile */}
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-3/4 h-full bg-white z-50 shadow-lg p-6 lg:hidden"
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link href="/" className="w-full text-center py-2 hover:bg-gray-200" onClick={toggleMenu}>
                {t('home')}
              </Link>
              <Link href="#how-to-work" className="w-full text-center py-2 hover:bg-gray-200" onClick={toggleMenu}>
                {t('features')}
              </Link>
              <Link href="#payment-section" className="w-full text-center py-2 hover:bg-gray-200" onClick={toggleMenu}>
                {t('pricing')}
              </Link>
              <Link href="/blog" className="w-full text-center py-2 hover:bg-gray-200" onClick={toggleMenu}>
                {t('blog')}
              </Link>

              {/* Locale Switcher (para mobile) */}
              <div className="w-full text-center">
                <LocaleSwitcher />
              </div>

              <Button
                className="bg-black text-white px-4 py-6 rounded-lg text-lg font-semibold"
                onClick={() => {
                  handleScreenLogin();
                  toggleMenu();
                }}
              >
                {isAuthenticated ? t('logout') : t('login')}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </header>
  );
}
