import { LOCALES } from '@/constants/i18n';
import { clsx } from '@heroui/shared-utils';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { Providers } from '../providers';
import './global.css';

export const metadata = {
  title: 'Oleh Proidakov',
  description: 'Hi! My name is Oleh.',
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
    url: 'https://olehproidakov.pp.ua/',
    siteName: 'Oleh Proidakov',
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif'],
});

export function generateStaticParams() {
  return LOCALES.map(locale => ({ locale })); // Ensure locale is an array
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: (typeof LOCALES)[number] }>;
}) {
  const { locale } = await params;

  // Normalize locale to a string
  const normalizedLocale = (Array.isArray(locale) ? locale[0] : locale) || 'en'; // Default to 'en' if undefined

  if (!LOCALES.includes(normalizedLocale)) {
    return notFound();
  }

  setRequestLocale(normalizedLocale);

  const messages = await getMessages({ locale: normalizedLocale });

  return (
    <html lang={normalizedLocale} suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          'dark text-foreground bg-[rgb(6,6,7)]',
          inter.className
        )}
      >
        <GoogleAnalytics gaId="G-3K2LVX6MD1" />
        <NextIntlClientProvider locale={normalizedLocale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
