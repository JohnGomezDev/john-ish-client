import type { Metadata } from 'next';
import { Saira_Condensed, Ubuntu_Sans } from 'next/font/google';

import { Providers } from '@/lib/providers/Providers';
import { BlogFooter } from '@/modules/layout/components/BlogFooter';
import { BlogHeader } from '@/modules/layout/components/BlogHeader';
import { RagWidget } from '@/modules/rag/components/RagWidget';

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'John-ish Blog · Desarrollo de Software',
    template: '%s · John-ish Blog',
  },
  description:
    'Artículos sobre desarrollo de software, arquitectura, backend, frontend, TypeScript, React, NestJS y tecnología. Experiencias y aprendizajes sin humo ni recetas mágicas.',
  authors: [{ name: 'John Gomez' }],
  creator: 'John Gomez',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'John-ish Blog',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="es">
      <body className={`${ubuntuSans.variable} ${sairaCondensed.variable} antialiased`}>
        <Providers>
          <div className="flex min-h-dvh flex-col">
            <BlogHeader />
            <main className="flex-1">{children}</main>
            <BlogFooter />
          </div>
          <RagWidget />
        </Providers>
      </body>
    </html>
  );
}
