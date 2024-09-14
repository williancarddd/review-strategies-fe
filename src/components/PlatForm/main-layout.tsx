'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Menu/header'; // Use o Header que já criamos

// Componente de layout principal
export default function MainLayout() {
  const [selectedMenu, setSelectedMenu] = useState('dashboard');

  // Menu lateral
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'calendars', label: 'Calendars' },
    { id: 'files', label: 'Files' },
    { id: 'settings', label: 'Settings' },
  ];

  const renderContent = () => {
    switch (selectedMenu) {
      case 'dashboard':
        return <Dashboard />;
      case 'calendars':
        return <Calendars />;
      case 'files':
        return <Files />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Menu Lateral */}
        <aside className="w-64 bg-gray-100 p-4 border-r border-gray-200 flex flex-col">
          {/* Informações de Perfil */}
          <div className="flex items-center space-x-4 mb-6">
            <Image src="/profile.png" alt="Profile" width={60} height={60} className="rounded-full" />
            <div>
              <p className="font-bold text-gray-700">Hello Rosalie</p>
              <p className="text-sm text-gray-500">rosalie.rice@gmail.com</p>
            </div>
          </div>

          {/* Menu */}
          <nav className="space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`text-left w-full py-2 px-3 rounded-lg text-gray-600 hover:bg-blue-100 hover:text-blue-600 ${
                  selectedMenu === item.id ? 'bg-blue-100 text-blue-600' : ''
                }`}
                onClick={() => setSelectedMenu(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Conteúdo Principal */}
        <main className="flex-1 bg-white p-4">
          {renderContent()}
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
