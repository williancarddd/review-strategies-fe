import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UserProfile from './user-profile';

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
  const pathname = usePathname(); // Para verificar a rota atual

  return (
    <aside
      className={`fixed lg:static top-0 left-0 w-64 h-screen lg:h-4/5 
        lg:mx-4 lg:rounded-md bg-gradient-to-b from-purple-700
        via-pink-500 to-red-500 text-white p-4 border-r
        border-gray-200 flex flex-col items-center rounded-lg 
        lg:shadow-none shadow-lg transition-transform duration-300 ease-in-out ${
        menuOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 z-50`}
      aria-hidden={!menuOpen}
      aria-label="Menu lateral de navegação"
    >
      {/* Informações de Perfil */}
      <UserProfile name={userProfileData.name} email={userProfileData.email} />

      <nav className="grid grid-cols-2 gap-4 w-full mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            title={item.label}
            className={`relative text-center py-2 px-3 rounded-lg 
              flex flex-col items-center justify-center transition-all 
              duration-300 ease-in-out text-white hover:scale-105 
              hover:rotate-3 hover:shadow-lg hover:shadow-blue-300 ${
              pathname.includes(item.href)
                ? 'bg-blue-600 text-white border-2 border-white shadow-md'
                : ''
            }`}
            onClick={onClose} // Fechar menu no mobile ao selecionar um item
          >
            {item.icon && <span className="text-xl mb-1">{item.icon}</span>}
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
