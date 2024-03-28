import { useTranslations } from "next-intl";

type BannerIconProps = {
  icon: React.ReactNode;
  titleKeyword: string;
  descriptionKeyword: string;
};

export const BannerIcon = ({
  icon,
  titleKeyword,
  descriptionKeyword,
}: BannerIconProps) => {
  const t = useTranslations("banners");

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
