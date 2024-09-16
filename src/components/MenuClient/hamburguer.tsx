import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

interface HamburgerButtonProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

export default function HamburgerButton({ menuOpen, toggleMenu }: HamburgerButtonProps) {
  return (
    <button
      className="lg:hidden absolute top-4 left-4 text-2xl text-gray-800"
      onClick={toggleMenu}
      aria-label="Abrir menu"
    >
      {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
    </button>
  );
}
