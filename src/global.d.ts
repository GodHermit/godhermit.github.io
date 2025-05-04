import { LOCALES } from './constants/i18n';
import messages from './messages/en.json';

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof LOCALES)[number];
    Messages: typeof messages;
  }
}
