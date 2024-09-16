import { ReactNode } from 'react';
import { cn } from '@/lib/utils'; 
import { Analytics } from "@vercel/analytics/react";
import { vibur, montserrat, poppins } from '@/lib/fonts';  // Importar fontes centralizadas
import './globals.css';
import { Provider } from '@/providers/provider';
import { NotificationProvider } from '@/components/Notification/notification-provider';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes='32x32' />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          vibur.variable, 
          montserrat.variable, 
          poppins.variable
        )}
      >
        <Provider>
          <NotificationProvider>
            {children}
          </NotificationProvider>
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}
