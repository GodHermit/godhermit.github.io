import { Providers } from './providers';
import variables from '@/theme/variables.module.scss';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
  title: 'Oleh Proidakov',
  description: 'Hi! My name is Oleh.',
  themeColor: variables.light,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <GoogleAnalytics gaId="G-3K2LVX6MD1" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
