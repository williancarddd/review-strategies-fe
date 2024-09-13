import { Vibur, Montserrat, Poppins } from 'next/font/google';
import './globals.css'; 
import { cn } from '@/lib/utils'; 
import { ReactNode } from 'react';
import RouteGuard from '@/components/RouteGuard/route-guard';
import { Provider } from '@/providers/provider';
import { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/react"

// Configurar as fontes usando o pacote next/font/google
const vibur = Vibur({
  weight: ['400'], 
  subsets: ['latin'],
  variable: '--font-vibur', 
});

const montserrat = Montserrat({
  weight: ['400', '700', '500'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins', 
});

export const metadata:Metadata = {
  title: 'Review Strategies - Melhor prática para seus estudos',
  description:
    'Review Stretegis é uma plataforma para ajudar você a estudar melhor, de forma eficiente e eficaz, baseada em técnicas de revisão espaçada comprovadas pela ciência.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes='32x32' />
        <meta property="twitter:image" content="Twitter link preview image URL"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:title" content="Twitter link preview title"></meta>
        <meta property="twitter:description" content="Twitter link preview description"></meta>
        <meta property="og:image" content="Link preview image URL"></meta>
        <meta property="og:site_name" content="Link preview site name"></meta>
        <meta property="og:title" content="Link preview title"></meta>
        <meta property="og:description" content="Link preview description" />
        <meta property="og:url" content="Canonical link preview URL"></meta>
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
          <RouteGuard>{children}</RouteGuard>
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}
