import { GoogleAnalytics } from '@next/third-parties/google';
import './global.css';
import { Providers } from './providers';
import { Inter } from 'next/font/google';
import { clsx } from '@nextui-org/shared-utils';

export const metadata = {
  title: 'Oleh Proidakov',
  description: 'Hi! My name is Oleh.',
  themeColor: '#000000',
  icons: {
    icon: [
      {
        url: '/assets/favicon.ico',
      },
      {
        url: '/assets/favicon-32x32.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/assets/favicon-16x16.png',
        type: 'image/png',
        sizes: '16x16',
      },
    ],
    apple: 'assets/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Oleh Proidakov',
    description: 'Hi! My name is Oleh.',
    url: 'https://godhermit.github.io/',
    siteName: 'Oleh Proidakov',
    locale: 'en_US',
    type: 'website',
  },
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={clsx('dark text-foreground bg-background', inter.className)}>
        <GoogleAnalytics gaId="G-3K2LVX6MD1" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
