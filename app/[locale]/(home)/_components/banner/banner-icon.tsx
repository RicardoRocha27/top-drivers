import { useTranslations } from "next-intl";

type BannerIconProps = {
  icon: React.ReactNode;
  titleKeyword:
    | "banner1.title"
    | "banner2.title"
    | "banner3.title"
    | "banner4.title";
  descriptionKeyword:
    | "banner1.description"
    | "banner2.description"
    | "banner3.description"
    | "banner4.description";
};

export const BannerIcon = ({
  icon,
  titleKeyword,
  descriptionKeyword,
}: BannerIconProps) => {
  const t = useTranslations("home.banners");

  return (
    <div className="flex flex-col justify-between gap-4">
      <div className="flex items-center gap-4 h-full">
        <span>{icon}</span>
        <h1 className="font-bold">{t(titleKeyword)}</h1>
      </div>
      <p className="text-foreground/80 text-sm">{t(descriptionKeyword)}</p>
    </div>
  );
};
