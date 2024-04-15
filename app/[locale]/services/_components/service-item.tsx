import { cn } from "@/lib/utils";
import Image from "next/image";

type ServiceItemProps = {
  firstImageUrl: string;
  secondImageUrl: string;
  title: string;
  subtitle: string;
  firstDescriptionTitle: string;
  firstDescription: string;
  secondDescriptionTitle: string;
  secondDescription: string;
  id: string;
  isReversed?: boolean;
};

export const ServiceItem = ({
  firstImageUrl,
  secondImageUrl,
  title,
  subtitle,
  firstDescriptionTitle,
  firstDescription,
  secondDescriptionTitle,
  secondDescription,
  id,
  isReversed,
}: ServiceItemProps) => {
  return (
    <div className={cn("flex gap-8", isReversed && "flex-row-reverse")} id={id}>
      <div className="h-full flex">
        <div className="relative w-[250px] h-[350px]">
          <Image
            src={firstImageUrl}
            alt={firstDescriptionTitle}
            fill
            className="object-cover object-center rounded-lg"
          />
        </div>
        <div className="relative w-[250px] h-[350px]">
          <Image
            src={secondImageUrl}
            alt={secondDescriptionTitle}
            fill
            className="object-cover object-center rounded-lg mt-16 -ml-16 shadow-md"
          />
        </div>
      </div>
      <div>
        <h3 className="text-accent font-semibold uppercase tracking-wide mb-2">
          {title}
        </h3>
        <h1 className="font-bold text-2xl mb-6">{subtitle}</h1>
        <div>
          <h5 className="font-semibold mb-2">{firstDescriptionTitle}</h5>
          <p className="text-foreground/80 text-sm">{firstDescription}</p>
        </div>
        <br />
        <div>
          <h5 className="font-semibold mb-2">{secondDescriptionTitle}</h5>
          <p className="text-foreground/80 text-sm">{secondDescription}</p>
        </div>
      </div>
    </div>
  );
};
