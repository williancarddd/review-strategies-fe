import { useState } from 'react';
import { FaCalendarAlt, FaFileAlt, FaChartPie, FaClock, FaHome } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import Sidebar from './side-bar';
import { useAuthStore } from '@/stores/auth-store';
import { useGetUserById } from '@/hooks/user-hook';
import HamburgerButton from './hamburguer';

export default function MenuClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuthStore();
  const { data, isLoading } = useGetUserById(user?.sub || '');
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { id: 'big-calendar', label: 'Meus Estudos', href: '/pages/calendar', icon: <FaCalendarAlt /> },
    { id: 'pomodoro', label: 'Pomodoro', href: '/pages/pomodoro', icon: <FaClock /> },
    { id: 'profile', label: 'Meu Perfil', href: '/pages/profile', icon: <FiUser /> },
    { id: 'statistics', label: 'Estatísticas', href: '/pages/statistics', icon: <FaChartPie /> },
    { id: 'support', label: 'Suporte', href: '/pages/support', icon: <FaFileAlt /> }
  ];

  return (
    <>
      <HamburgerButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <Sidebar 
        menuItems={menuItems} 
        onClose={toggleMenu} 
        menuOpen={menuOpen} 
        userProfileData={{ name: data?.name || '', email: data?.email || '' }}
      />
    </>
  );
}
