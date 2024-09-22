import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

interface HamburgerButtonProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

export default function HamburgerButton({ menuOpen, toggleMenu }: HamburgerButtonProps) {
  return (
    <button
      className="lg:hidden fixed top-4 right-16 z-50 p-2 bg-gray-800 rounded-md shadow-md text-white"
      onClick={toggleMenu}
      aria-label="Abrir menu"
    >
      {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
    </button>
  );
}
