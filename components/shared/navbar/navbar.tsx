import { Logo } from "../logo";
import { LanguageSwitcher } from "./language-switcher";

import { MenuItems } from "./menu-items";
import { useTranslations } from "next-intl";

export const Navbar = () => {
  const navbar = useTranslations("navbar");
  const language = useTranslations("language");

  const itemsNames = {
    home: navbar("home"),
    services: navbar("services"),
    fleet: navbar("fleet"),
    about: navbar("about"),
    contacts: navbar("contacts"),
  };

  const languagesNames = {
    en: language("en"),
    pt: language("pt"),
  };

  return (
    <div className="container py-2 w-full flex items-center justify-between">
      <Logo size={70} />
      <MenuItems itemsNames={itemsNames} />
      <LanguageSwitcher languagesNames={languagesNames} />
    </div>
  );
};
