import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UserProfile from './user-profile';
import { AiOutlineClose } from 'react-icons/ai';

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
      {/* Botão de Fechar (aparece apenas no mobile) */}
      <button
        onClick={onClose}
        className="lg:hidden self-end mb-4 p-2 rounded-md bg-white text-gray-800 hover:bg-gray-200"
        aria-label="Fechar menu"
      >
        <AiOutlineClose className="w-6 h-6" />
      </button>

      {/* Informações de Perfil */}
      <UserProfile name={userProfileData.name} email={userProfileData.email} />

      <nav className="grid grid-cols-1 gap-4 w-full mt-4">
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
            onClick={onClose} // Fechar o menu ao clicar em um item
          >
            {item.icon && <span className="text-xl mb-1">{item.icon}</span>}
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
