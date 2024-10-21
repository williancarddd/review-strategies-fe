import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UserProfile from './user-profile';
import { AiOutlineClose } from 'react-icons/ai';
import router, { useRouter } from 'next/router'; // Corrigido para useRouter
import { useAuthStore } from '@/stores/auth-store';
import { Button } from '../ui/button';
import { FaClipboardList, FaCalendarAlt, FaBell, FaCog } from 'react-icons/fa'; // Exemplo de ícones
import Image from 'next/image';
import { RiUserSettingsFill } from "react-icons/ri";

interface MenuItem {
  id: string;
  label: string;
  href: string;
  icon?: JSX.Element;
}

interface SidebarProps {
  menuItems: MenuItem[];
  onClose: () => void;
  menuOpen: boolean;
  userProfileData: { name: string; email: string };
}

export default function Sidebar({ menuItems, onClose, menuOpen, userProfileData }: SidebarProps) {
  const pathname = usePathname();
  const { isAuthenticated, logout } = useAuthStore();

  const handleScreenLogin = () => {
    logout();
    router.push('/login');
  };

  return (
    <aside
      className={`fixed lg:static top-0 left-0 w-64 h-screen bg-customPrimary-deluge text-white
        flex flex-col items-center py-8 transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 z-50 font-roboto`}
      aria-hidden={!menuOpen}
      aria-label="Menu lateral de navegação"
    >
      

      {/* Informações de Perfil com Logo */}
      <div className="flex items-center space-x-4 ml-4">
        <Link href="/">
          <Image src="/Logo.png" alt="logo" width={60} height={60} className="rounded-full" />
        </Link>
        <p className="font-medium text-2xl">Herman.ai</p>
      </div>

      <nav className="flex flex-col mt-8 w-full text-center h-full justify-between">
        <div className="flex flex-col gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              title={item.label}
              className={`relative py-3 px-6 w-full flex items-center justify-start space-x-4 font-bold text-sm
                transition-all duration-300 ease-in-out 
                ${pathname.includes(item.href) ? 'bg-white text-black ' : ''}`} // Aplicando arredondamento à direita
              onClick={onClose} // Fechar o menu ao clicar em um item
            >
              {item.icon && item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Configurações com borda arredondada inferior */}
        <Link
          href="/pages/settings"
          title="Configurações"
          className={`py-3 px-6 w-full flex items-center justify-start space-x-4 font-bold text-sm
            transition-all duration-300 ease-in-out  
            ${pathname.includes('settings') ? 'bg-white text-black ' : ''}`} // Arredondamento também no item "Configurações"
          onClick={onClose}
        >
          <RiUserSettingsFill size={32} />
          <span>Configurações</span>
        </Link>

        {/* Botão de Login/Logout */}
        {/* <Button className="mt-4" onClick={handleScreenLogin}>
          {isAuthenticated ? 'Logout' : 'Login'}
        </Button> */}
      </nav>
    </aside>
  );
}
