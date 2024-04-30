'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';

type LanguagesTogglerProps = {
  languagesNames: {
    pt: string;
    en: string;
  };
};

const LanguageToggle = ({ languagesNames }: LanguagesTogglerProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const onLanguageChange = (localeProps: LocaleProps) => {
    router.replace(`/${localeProps}/${pathname.slice(3)}`);
  };

  return (
    <div className={cn('flex  space-x-2 w-fit')}>
      <Switch
        id="switch-language"
        checked={locale === 'en'}
        onCheckedChange={() =>
          locale === 'pt' ? onLanguageChange('en') : onLanguageChange('pt')
        }
        className="mx-auto"
      />
      <Label
        htmlFor="switch-language"
        className={cn('mx-auto font-medium text-sm')}
      >
        {locale === 'pt' ? 'Português' : 'English'}
      </Label>
    </div>
  );
};

export default LanguageToggle;
