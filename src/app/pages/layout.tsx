'use client';
import { useState } from 'react';
import { FaCalendarAlt, FaFileAlt, FaCog, FaChartPie } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Header from '@/components/Menu/header';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItem {
  id: string;
  label: string;
  href: string; 
  icon?: JSX.Element;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Para verificar a rota atual

  const menuItems: MenuItem[] = [
    { id: 'big-calendar', label: 'Meus Estudos', href: '/pages/calendar', icon: <FaCalendarAlt /> },
    { id: 'profile', label: 'Meu Perfil', href: '/pages/profile', icon: <FiUser /> },
    { id: 'statistics', label: 'Estatísticas', href: '/pages/statistics', icon: <FaChartPie /> },
    { id: 'support', label: 'Suporte', href: '/pages/support', icon: <FaFileAlt /> }
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <Header />

      <div className="flex flex-1 relative">
        {/* Menu Lateral Fixo no modo desktop e Off-canvas no mobile */}
        <aside
          className={`fixed lg:static top-0 left-0 w-64 h-screen lg:h-4/5 
            lg:mx-4 lg:rounded-md bg-gradient-to-b from-purple-700
          via-pink-500 to-red-500 text-white p-4 border-r
            border-gray-200 flex flex-col items-center rounded-lg 
            lg:shadow-none shadow-lg transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 z-50`}
        >
          {/* Fechar Menu no Mobile */}
          <button className="lg:hidden text-white text-2xl mb-4" onClick={toggleMenu}>
            <AiOutlineClose />
          </button>

          {/* Informações de Perfil */}
          <div className="flex flex-col items-center space-y-4 mb-6">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>RS</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <p className="font-bold text-white">Hello Rosalie</p>
              <p className="text-sm text-white">rosalie.rice@gmail.com</p>
            </div>
          </div>

          {/* Menu em 2 Colunas com Ícones Opcionais */}
          <nav className="grid grid-cols-2 gap-4 w-full">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`relative text-center py-2 px-3 rounded-lg 
                  flex flex-col items-center justify-center transition-all 
                  duration-300 ease-in-out text-white hover:scale-105 
                  hover:rotate-3 hover:shadow-lg hover:shadow-blue-300 ${
                  pathname.includes(item.href)
                    ? 'bg-blue-600 text-white border-2 border-white shadow-md'
                    : ''
                }`}
                onClick={() => setMenuOpen(false)} // Fechar menu no mobile ao selecionar um item
              >
                {/* Ícone opcional */}
                {item.icon && <span className="text-xl mb-1">{item.icon}</span>}
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Botão de Menu Hamburguer (somente em Mobile) */}
        <button
          className="lg:hidden absolute top-4 left-4 text-2xl text-gray-800"
          onClick={toggleMenu}
        >
          <AiOutlineMenu />
        </button>

        {/* Conteúdo Principal */}
        <main className="flex-1 bg-white p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
