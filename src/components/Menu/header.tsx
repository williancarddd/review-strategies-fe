'use client';
import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import LanguageSelect from './language-select';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex items-center justify-between py-4 px-6 bg-background">
      {/* Logo and Title */}
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image src="/Logo.png" alt="logo" width={40} height={40} />
        </Link>
        <p className="font-medium font-vibur text-3xl">Review Strategies</p>
      </div>

      {/* Menu button for mobile */}
      <div className="lg:hidden">
        <Button onClick={toggleMenu} variant={'default'} >
          {menuOpen ? (
            <AiOutlineClose className="w-6 h-6 text-foreground" />
          ) : (
            <AiOutlineMenu className="w-6 h-6 text-foreground" />
          )}
        </Button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-6">

        {/* Language Selector */}
        <LanguageSelect />

        {/* Login Button */}
        <Button variant="default">
          Entrar
        </Button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-background shadow-lg lg:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">

            {/* Language Selector in Mobile */}
            <LanguageSelect />

            {/* Login Button in Mobile */}
            <Button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-lg font-semibold hover:bg-primary/90">
              Entrar
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
