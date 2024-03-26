"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

type MenuItemsProps = {
  itemsNames: {
    home: string;
    services: string;
    fleet: string;
    about: string;
    contacts: string;
  };
};

export const MenuItems = ({ itemsNames }: MenuItemsProps) => {
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
    <div className="space-x-8">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          // TODO: STYLE THIS BETTER
          className={cn("", !item.isActive && "text-foreground/80")}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};
