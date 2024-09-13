'use client';

import { useState } from 'react';
import { FaCalendarAlt, FaFileAlt, FaCog, FaChartPie } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Header from '@/components/Menu/header';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';

interface MenuItem {
  id: string;
  label: string;
  icon?: JSX.Element;
}

export default function MainLayout() {
  const [selectedMenu, setSelectedMenu] = useState('dashboard');
  const [menuOpen, setMenuOpen] = useState(false); // Estado para abrir/fechar menu no mobile

  const menuItems: MenuItem[] = [
    { id: 'big-calendar', label: 'Meus Estudos', icon: <FaCalendarAlt /> },
    { id: 'profile', label: 'Meu Perfil', icon: <FiUser /> },
    { id: 'statistics', label: 'Estatísticas', icon: <FaChartPie /> },
    { id: 'support', label: 'Suporte', icon: <FaFileAlt /> },
    { id: 'settings', label: 'Configurações', icon: <FaCog /> },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case 'dashboard':
        return <Dashboard />;
      case 'big-calendar':
        return <Calendars />;
      case 'files':
        return <Files />;
      case 'settings':
        return <Settings />;
      case 'invoices':
        return <Invoices />;
      case 'teams':
        return <Teams />;
      case 'messages':
        return <Messages />;
      case 'notifications':
        return <Notifications />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <Header />

      <div className="flex flex-1 relative">
        {/* Menu Lateral Fixo no modo desktop e Off-canvas no mobile */}
        <aside
          className={`  fixed lg:static top-0 left-0 w-64 h-screen lg:h-4/5 
            lg:mx-4 lg:rounded-md  bg-gradient-to-b from-purple-700
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
              <button
                key={item.id}
                className={`relative text-center py-2 px-3 rounded-lg 
                  flex flex-col items-center justify-center transition-all 
                  duration-300 ease-in-out text-white hover:scale-105 
                  hover:rotate-3 hover:shadow-lg hover:shadow-blue-300 ${
                  selectedMenu === item.id
                    ? 'bg-blue-600 text-white border-2 border-white shadow-md'
                    : ''
                }`}
                onClick={() => {
                  setSelectedMenu(item.id);
                  setMenuOpen(false); // Fechar menu no mobile ao selecionar um item
                }}
              >
                {/* Ícone opcional */}
                {item.icon && <span className="text-xl mb-1">{item.icon}</span>}
                {item.label}
              </button>
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
        <main className="flex-1 bg-white p-8 lg:p-16 flex justify-center items-center">
          <div className="max-w-4xl w-full">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
}

// Componentes simulando as telas renderizadas ao clicar nos itens do menu
function Dashboard() {
  return <div>Welcome to the Dashboard!</div>;
}

function Calendars() {
  return <div>This is your calendar view!</div>;
}

function Files() {
  return <div>Access your files here!</div>;
}

function Settings() {
  return <div>Adjust your settings here!</div>;
}

function Invoices() {
  return <div>Manage your invoices here!</div>;
}

function Teams() {
  return <div>Manage your teams here!</div>;
}

function Messages() {
  return <div>Check your messages here!</div>;
}

function Notifications() {
  return <div>View your notifications here!</div>;
}
