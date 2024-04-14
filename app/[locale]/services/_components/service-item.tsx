import { cn } from "@/lib/utils";
import Image from "next/image";

type ServiceItemProps = {
  imageUrl: string;
  title: string;
  description: string;
  isImageFirst?: boolean;
};

export const ServiceItem = ({
  imageUrl,
  title,
  description,
  isImageFirst,
}: ServiceItemProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-8 items-center w-full",
        isImageFirst ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      <div className="relative w-full h-[350px] md:w-[350px] md:aspect-square ">
        <Image
          src={imageUrl}
          fill
          alt={title}
          className="object-cover object-center rounded-lg"
        />
      </div>
      <div className="space-y-4 w-full">
        <h3 className="text-accent font-semibold uppercase">{title}</h3>
        <p className="text-foreground/80 text-sm">{description}</p>
      </div>
    </div>
  );
};
