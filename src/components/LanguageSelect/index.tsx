import { LOCALES, LOCALE_COOKIE_NAME, languages } from '@/constants/i18n';
import { Button } from '@heroui/button';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/dropdown';
import { setCookie } from 'cookies-next/client';
import { LanguagesIcon } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function LanguageSelect() {
  const selectedLocale = useLocale();
  const t = useTranslations('bio');

  return (
    <div className="fixed bottom-0 right-0 m-4 z-[1000]">
      <Dropdown>
        <DropdownTrigger>
          <Button
            size="sm"
            startContent={<LanguagesIcon width={16} height={16} />}
          >
            {languages[selectedLocale]}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Language options"
          selectionMode="single"
          selectedKeys={[selectedLocale]}
        >
          {LOCALES.map(locale => (
            <DropdownItem
              key={locale}
              as={Link}
              href={`/${locale}`}
              aria-label={languages[locale]}
            >
              {languages[locale]}{' '}
              {locale !== selectedLocale && (
                <span className="text-zinc-500">
                  ({t(`languages.${locale}`)})
                </span>
              )}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
