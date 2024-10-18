import { ReactNode } from "react";
import { AuthLayout } from "@/components/Login/auth-layout";  // Reutilizando o AuthLayout já criado
import { cn } from '@/lib/utils';
import { Fonts } from '@/lib/fonts';  // Importar fontes centralizadas

interface AuthLayoutProps {
  children: ReactNode;
}

export default function LoginLayout({ children }: AuthLayoutProps) {
  return (
    <div className={cn('min-h-screen bg-background font-sans antialiased', ...Fonts)}>
      <AuthLayout>{children}</AuthLayout>
    </div>
  );
}
