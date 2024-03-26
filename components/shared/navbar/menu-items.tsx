"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const MenuItems = () => {
  const pathname = usePathname();

  const items = [
    { name: "Home", href: "/", isActive: pathname === "/" },
    { name: "Services", href: "/services", isActive: pathname === "/services" },
    { name: "Fleet", href: "/fleet", isActive: pathname === "/fleet" },
    { name: "About", href: "/about", isActive: pathname === "/about" },
    { name: "Contact", href: "/contact", isActive: pathname === "/contact" },
  ];

  return (
    <div className="space-x-8">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn("", !item.isActive && "text-foreground/80")}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};
