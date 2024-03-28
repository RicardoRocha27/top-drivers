type BannerIconProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const BannerIcon = ({ icon, title, description }: BannerIconProps) => {
  return (
    <div className="flex flex-col justify-between gap-4">
      <div className="flex items-center gap-4 h-full">
        <span>{icon}</span>
        <h1 className="font-bold">{title}</h1>
      </div>
      <p className="text-foreground/80 text-sm">{description}</p>
    </div>
  );
};
