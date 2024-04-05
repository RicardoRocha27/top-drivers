import React from "react";
import { useTranslations } from "next-intl";
import { FooterLink } from "./footer-link";

export const FooterLinks = () => {
  const t = useTranslations("footer");

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <FooterLink
        title={t("socialMedia.title")}
        links={t.raw("socialMedia.links")}
      />
      <FooterLink title={t("links.title")} links={t.raw("links.links")} />
      <FooterLink title={t("contacts.title")} links={t.raw("contacts.links")} />
    </div>
  );
};
