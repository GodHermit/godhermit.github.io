'use client';

import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';
import { GoogleAnalytics } from 'nextjs-google-analytics';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
}
