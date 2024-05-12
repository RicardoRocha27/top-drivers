import { ContactsForm } from "@/components/shared/contacts-form";
import { ContactInfoGrid } from "./contacts-info-grid";
import { Header } from "@/components/shared/header";
import { useTranslations } from "next-intl";

export const Contacts = () => {
  const t = useTranslations("home.contacts.form");
  return (
    <div className="max-w-6xl mx-auto my-32 space-y-8">
      <Header translationKeyword="contacts.contacts" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactInfoGrid />
        <ContactsForm
          nameLabel={t("name")}
          emailLabel={t("email")}
          bodyLabel={t("body")}
          buttonLabel={t("button")}
        />
      </div>
    </div>
  );
};
