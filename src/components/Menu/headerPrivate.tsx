'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuthStore } from '@/stores/auth-store'; // Importando o estado de autenticação
import { useRouter } from 'next/navigation';

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
    <header className="flex w-full items-center justify-between py-4 px-6 bg-background shadow-lg relative z-50">
      {/* Logo and Title */}
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image src="/Herman.png" alt="logo" width={40} height={40} />
        </Link>
        <p className="font-medium font-roboto text-3xl">Hermain.ai</p>
      </div>
    </header>
  );
}
