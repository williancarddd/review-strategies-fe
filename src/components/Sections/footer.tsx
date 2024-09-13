'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-10 lg:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 px-6 text-center lg:text-left">
        
        {/* Logo e Links de App Store */}
        <div className="space-y-6 flex flex-col items-center lg:items-start">
          <div>
            <Image src="/logoblack.png" alt="Review Strategies" width={50} height={50} />
          </div>
          <div className="space-y-4">
            <p className="font-semibold">Veja mais</p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <FaLinkedin className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
              <FaInstagram className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
              <FaTiktok className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Links "Sobre" */}
        <div className="space-y-4">
          <h4 className="font-bold">Sobre</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">Quem somos ?</Link></li>
            <li><Link href="#fourth-section" className="hover:underline">Preços</Link></li>
          </ul>
        </div>

        {/* Links "Solutions" */}
        <div className="space-y-4">
          <h4 className="font-bold">Soluções</h4>
          <ul className="space-y-2">
            <li><Link href="#feature-item" className="hover:underline">Você Ganha Desempenho</Link></li>
            <li><Link href="#feature-item" className="hover:underline">Você Ganha Precisão</Link></li>
            <li><Link href="#feature-item" className="hover:underline">Veja seu progresso</Link></li>
            <li><Link href="#feature-item" className="hover:underline">Tenha resultados imediatos</Link></li>
          </ul>
        </div>

        {/* Links "Termos e Condições" */}
        <div className="space-y-4">
          <h4 className="font-bold">Termos e Condições</h4>
          <ul className="space-y-2">
            <li><Link href="/policys/privacy" className="hover:underline">Política de Privacidade</Link></li>
            <li><Link href="/policys/payment" className="hover:underline">Política de Pagamento</Link></li>
          </ul>
        </div>

      </div>

      {/* Parceiros */}
      <div className="max-w-7xl mx-auto mt-10 px-6 lg:px-0 flex justify-center lg:justify-between items-center space-y-4 lg:space-y-0">
        <Image src="/Powered by Stripe - black.svg" alt="Stripe" width={150} height={50} />
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto text-center mt-10 text-sm text-gray-300">
        <p>Copyright © 2020, Review Strategies. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
