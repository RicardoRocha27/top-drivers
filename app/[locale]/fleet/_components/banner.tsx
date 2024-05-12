import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";

export const Banner = () => {
  const t = useTranslations("fleet.banner");

  return (
    <div className="bg-secondary w-full rounded-lg py-16 px-4 my-32 relative flex justify-center">
      <h1 className="text-center text-2xl font-semibold max-w-4xl">
        {t("title")}
      </h1>
      <Quote className="absolute top-8 left-8 size-14 opacity-30" />
    </div>
  );
};
