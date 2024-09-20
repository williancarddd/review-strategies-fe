import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Analytics } from "@vercel/analytics/react";
import { vibur, montserrat, poppins } from '@/lib/fonts';  // Importar fontes centralizadas
import './globals.css';
import { Provider } from '@/providers/provider';
import { NotificationProvider } from '@/components/Notification/notification-provider';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();


  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes='32x32' />
        <script async src="https://cse.google.com/cse.js?cx=94eaf30ef318544e0">
        </script>
        <div className="gcse-search"></div>
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          vibur.variable,
          montserrat.variable,
          poppins.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Provider>
            <NotificationProvider>
              {children}
            </NotificationProvider>
          </Provider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
