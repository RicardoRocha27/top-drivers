import { Logo } from "../logo";
import { LanguageSwitcher } from "./language-switcher";

import { MenuItems } from "./menu-items";
import { useTranslations } from "next-intl";

export const Navbar = () => {
  const t = useTranslations("navbar");

  const itemsNames = {
    home: t("home"),
    services: t("services"),
    fleet: t("fleet"),
    about: t("about"),
    contacts: t("contacts"),
  };

  return (
    <div className="container py-2 w-full flex items-center justify-between">
      <Logo size={70} />
      <MenuItems itemsNames={itemsNames} />
      <LanguageSwitcher />
    </div>
  );
};
