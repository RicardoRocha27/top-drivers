import { useTranslations } from "next-intl";

type HeaderProps = {
  translationKeyword: string;
};

export const Header = ({ translationKeyword }: HeaderProps) => {
  const t = useTranslations(translationKeyword);
  return (
    <div>
      <h1
        className="text-4xl md:text-6xl mb-2"
        style={{ fontFamily: "Times New Roman" }}
      >
        {t("title")}
      </h1>
      <p className="text-sm md:text-base text-foreground/80">{t("subtitle")}</p>
    </div>
  );
};
