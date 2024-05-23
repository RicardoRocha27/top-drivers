import { Container } from "@/components/shared/container";
import { ContactsForm } from "../../../../../components/shared/contacts-form";
import { Header } from "@/components/shared/header";
import { useTranslations } from "next-intl";
import { Map } from "@/app/[locale]/contacts/_components/map";

export const Contacts = () => {
  const t = useTranslations("home.contacts.form");

  return (
    <Container>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="flex flex-col gap-4 w-full lg:w-3/5">
          <Header translationKeyword="home.contacts" />
          <ContactsForm
            nameLabel={t("name")}
            emailLabel={t("email")}
            bodyLabel={t("body")}
            buttonLabel={t("button")}
          />
        </div>
        <div className="w-full lg:w-2/5">
          <Map />
        </div>
      </div>
    </Container>
  );
};
