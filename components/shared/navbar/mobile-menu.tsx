import Link from 'next/link';
import { Menu } from 'lucide-react';
import { FaFacebook } from 'react-icons/fa6';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { MenuItemMobile } from './menu-item-mobile';
import LanguageToggle from './language-toggle';

import { Logo } from '../logo';

export const MobileMenu = () => {
  const navbar = useTranslations('navbar');
  const language = useTranslations('language');

  const itemsNames = {
    home: navbar('home'),
    services: navbar('services'),
    fleet: navbar('fleet'),
    about: navbar('about'),
    contacts: navbar('contacts'),
  };

  const languagesNames = {
    en: language('en'),
    pt: language('pt'),
  };
  return (
    <div
      className={cn('flex md:hidden items-center justify-between px-4 py-2')}
    >
      <div className="my-2">
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="text-foreground cursor-pointer" aria-hidden />
          </SheetTrigger>
          <SheetContent className="md:hidden">
            <div className="relative h-full">
              <SheetHeader>
                <div className="flex">
                  <Logo size={70} />
                </div>
                <Separator className="bg-secondary min-w-[100px] h-[1px] rounded-full my-2" />
              </SheetHeader>
              <MenuItemMobile itemsNames={itemsNames} />
              <SheetFooter>
                <div className="flex gap-x-4 items-center mt-8 w-full">
                  <Link
                    href={'https://linkedin.com/company/superwebbuilders'}
                    target="_blank"
                  >
                    <FaFacebook size={20} />
                  </Link>
                  <LanguageToggle languagesNames={languagesNames} />
                </div>
              </SheetFooter>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
