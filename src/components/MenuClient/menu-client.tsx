"use client";

import {  useState } from 'react';
import { FaCalendarAlt, FaFileAlt } from 'react-icons/fa';
import Sidebar from './side-bar';
import HamburgerButton from './hamburguer';
import { MdNotificationsActive } from "react-icons/md";
import { useUserStore } from '@/stores/user-store';

export default function MenuClient() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { user } = useUserStore();

  // Alterna a visibilidade do menu
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const menuItems = [
    { id: 'dashboard', label: 'Meus Estudos', href: '/pages/dashboard', icon: <FaCalendarAlt size={32} /> },
    { id: 'support', label: 'Suporte', href: '/pages/support', icon: <FaFileAlt size={32} /> },
  ];

  return (
    <>
      <HamburgerButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <Sidebar
        menuItems={menuItems}
        onClose={toggleMenu}
        menuOpen={menuOpen}
        userProfileData={{ name: user?.name || 'Usuário', email: user?.email || 'email@example.com' }}
      />
    </>
  );
}
