import { useState } from 'react';
import { FaCalendarAlt, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import Sidebar from './side-bar';
import { useAuthStore } from '@/stores/auth-store';
import { useGetUserById } from '@/hooks/user-hook';
import HamburgerButton from './hamburguer';
import { MdNotificationsActive } from "react-icons/md";

export default function MenuClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuthStore();
  const { data, isLoading } = useGetUserById(user?.sub || '');

  // Alterna a visibilidade do menu
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const menuItems = [
    { id: 'dashboard', label: 'Meus Estudos', href: '/pages/dashboard', icon: <FaCalendarAlt size={32}/> },
    { id: 'notifications', label: 'Notificações', href: '/pages/notification', icon: <MdNotificationsActive size={32}/> },
    { id: 'support', label: 'Suporte', href: '/pages/support', icon: <FaFileAlt size={32}/> },
  ];

  return (
    <>
      <HamburgerButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <Sidebar 
        menuItems={menuItems} 
        onClose={toggleMenu} 
        menuOpen={menuOpen} 
        userProfileData={{ name: data?.name || 'Usuário', email: data?.email || 'email@example.com' }}
      />
    </>
  );
}
