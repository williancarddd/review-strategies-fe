import { Vibur, Montserrat, Poppins } from 'next/font/google';
import '../globals.css';
import { cn } from '@/lib/utils'; 
import { Analytics } from "@vercel/analytics/react";

const vibur = Vibur({ weight: ['400'], subsets: ['latin'], variable: '--font-vibur' });
const montserrat = Montserrat({ weight: ['400', '700', '500'], subsets: ['latin'], variable: '--font-montserrat' });
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-poppins' });

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
      </head>
      <body className={cn('min-h-screen bg-background font-sans antialiased', vibur.variable, montserrat.variable, poppins.variable)}>
        <div>{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
