import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Fonts } from '@/lib/fonts';  // Importar fontes centralizadas

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className={cn('min-h-screen bg-background font-sans antialiased', ...Fonts)}>
      {children}
    </div>
  );
}
