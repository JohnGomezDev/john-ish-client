import type { Metadata } from 'next';
import { Saira_Condensed, Ubuntu_Sans } from 'next/font/google';

import { Providers } from '@/lib/providers/Providers';

import '@/styles/globals.css';

const ubuntuSans = Ubuntu_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-ubuntu-sans',
  display: 'swap',
});

const sairaCondensed = Saira_Condensed({
  weight: ['400', '500'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-saira-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'John-ish - Dashboard de administración',
  robots: { index: false, follow: false },
};

interface IRootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps): React.JSX.Element {
  return (
    <html lang="es">
      <body className={`${ubuntuSans.variable} ${sairaCondensed.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
