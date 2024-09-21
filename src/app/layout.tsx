import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Analytics } from "@vercel/analytics/react";
import { vibur, montserrat, poppins } from '@/lib/fonts';  // Importar fontes centralizadas
import './globals.css';
import { Provider } from '@/providers/provider';
import { NotificationProvider } from '@/components/Notification/notification-provider';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Script from 'next/script';
interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const GTM_ID = 'GTM-5FBKTVFM';
  return (
    <html lang={locale} suppressHydrationWarning>
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
        <NextIntlClientProvider messages={messages}>
          <Provider>
            <NotificationProvider>
              {children}
            </NotificationProvider>
          </Provider>
        </NextIntlClientProvider>
        <Analytics />
        {/* Carrega a biblioteca gtag.js de forma assíncrona */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16709252957"
          strategy="afterInteractive"
        />

        {/* Configura o Google Tag */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-16709252957');
        `}
        </Script>
        <Script id="gtag-conversion" strategy="afterInteractive">
          {
            ` gtag('event', 'conversion', {
            'send_to': 'AW-16709252957/AQZVCJuyy9QZEN3uy58-',
          'transaction_id': ''
            });`
          }
        </Script>

        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="GTM"
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
