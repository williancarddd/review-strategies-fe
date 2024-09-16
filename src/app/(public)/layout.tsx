import { ReactNode } from 'react';
import { cn } from '@/lib/utils'; 
import { vibur, montserrat, poppins } from '@/lib/fonts';  // Importar fontes centralizadas

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className={cn('min-h-screen bg-background font-sans antialiased', vibur.variable, montserrat.variable, poppins.variable)}>
      {children}
    </div>
  );
}
