'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';
import { SheetPrimitive } from '@/components/ui/sheet';
type MenuItemMobileProps = {
  itemsNames: {
    home: string;
    services: string;
    fleet: string;
    about: string;
    contacts: string;
  };
};

export const MenuItemMobile = ({ itemsNames }: MenuItemMobileProps) => {
  const pathname = usePathname();
  const locale = useLocale();

  const items = [
    {
      name: itemsNames.home,
      href: `/${locale}`,
      isActive: pathname === `/${locale}`,
    },
    {
      name: itemsNames.services,
      href: `/${locale}/services`,
      isActive: pathname === `/${locale}/services`,
    },
    {
      name: itemsNames.fleet,
      href: `/${locale}/fleet`,
      isActive: pathname === `/${locale}/fleet`,
    },
    {
      name: itemsNames.about,
      href: `/${locale}/about`,
      isActive: pathname === `/${locale}/about`,
    },
    {
      name: itemsNames.contacts,
      href: `/${locale}/contacts`,
      isActive: pathname === `/${locale}/contacts`,
    },
  ];

  return (
    <div className="mt-8 flex flex-col space-y-3 md:hidden">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            'text-foreground/80 hover:text-foreground transition-colors focus:outline-none text-sm',
            item.isActive && 'text-accent hover:text-[#ffc266]'
          )}
        >
          <SheetPrimitive.Close key={index} className="flex flex-col">
            {item.name}
          </SheetPrimitive.Close>
        </Link>
      ))}
    </div>
  );
};
