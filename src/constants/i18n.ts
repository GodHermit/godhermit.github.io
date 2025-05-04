export const LOCALE_COOKIE_NAME = 'NEXT_LOCALE' as const;

export const LOCALES = ['en', 'uk', 'ro', 'it'] as const;

export const languages: Record<(typeof LOCALES)[number], string> = {
  en: 'English',
  uk: 'Українська',
  ro: 'Română',
  it: 'Italiano',
}
