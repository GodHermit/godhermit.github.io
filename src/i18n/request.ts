import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { LOCALES } from '@/constants/i18n';

// Can be imported from a shared config

export default getRequestConfig(async ({ locale }) => {
  if (!locale || !LOCALES.includes(locale as (typeof LOCALES)[number])) {
    locale = LOCALES[0];
  }

  return {
    locale: locale as (typeof LOCALES)[number],
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
