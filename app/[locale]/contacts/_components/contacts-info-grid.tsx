import React from "react";
import { ContactsInfo } from "./contacts-info";
import { CalendarCheck, Globe, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export const ContactInfoGrid = () => {
  const t = useTranslations("contacts.features");

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
      <ContactsInfo
        icon={<Phone />}
        subtitle={t("mobile.title")}
        text={t("mobile.description")}
      />
      <ContactsInfo
        icon={<Mail />}
        subtitle={t("email.title")}
        text={t("email.description")}
      />
      <ContactsInfo
        icon={<Globe />}
        subtitle={t("social.title")}
        text={t("social.description")}
      />
      <ContactsInfo
        icon={<CalendarCheck />}
        subtitle={t("24/7.title")}
        text={t("24/7.description")}
      />
    </div>
  );
};
