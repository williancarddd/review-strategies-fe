'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useAuthStore } from '@/stores/auth-store'; // Importando o estado de autenticação
import { useRouter } from 'next/navigation';
import LocaleSwitcher from '../i18n/LocaleSwitcher';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuthStore(); 
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScreenLogin = () => {
    logout();
    router.push('/login'); 
  };

  return (
    <header className="flex items-center justify-between py-4 px-6 bg-background shadow-lg relative z-50">
      {/* Logo and Title */}
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image src="/Logo.png" alt="logo" width={40} height={40} />
        </Link>
        <p className="font-medium font-vibur text-3xl">Review Strategies</p>
      </div>

      {/* Links visíveis na versão desktop */}
      <div className="hidden lg:flex items-center space-x-6">
        <Link href="/" className="hover:text-gray-300">
          Sobre Nós
        </Link>
        <LocaleSwitcher />
        <Button className="ml-4" onClick={handleScreenLogin}>
          {isAuthenticated ? 'Logout' : 'Login'}
        </Button>
      </div>

      {/* Mobile Menu button */}
      <div className="lg:hidden">
        <Button onClick={toggleMenu} variant={'default'}>
          {menuOpen ? (
            <AiOutlineClose className="w-6 h-6 text-foreground" />
          ) : (
            <AiOutlineMenu className="w-6 h-6 text-foreground" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-background shadow-lg lg:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">

            <Link href="/" className="w-full text-center py-2 hover:bg-gray-200">
              Sobre Nós
            </Link>
            <LocaleSwitcher />
            <Button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-lg font-semibold hover:bg-primary/90" onClick={handleScreenLogin}>
              {isAuthenticated ? 'Logout' : 'Login'}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
