import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

interface HamburgerButtonProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

export default function HamburgerButton({ menuOpen, toggleMenu }: HamburgerButtonProps) {
  return (
    <button
      className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md text-gray-800"
      onClick={toggleMenu}
      aria-label="Abrir menu"
    >
      {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
    </button>
  );
}
