import { Button } from "@/components/ui/button";
import Image from "next/image";

type ServiceCardProps = {
  buttonLabel: string;
  imageUrl: string;
  alt: string;
};

export const ServiceCard = ({
  buttonLabel,
  imageUrl,
  alt,
}: ServiceCardProps) => {
  return (
    <div>
      <Button className="absolute bottom-4 left-4 z-20" variant="background">
        {buttonLabel}
      </Button>
      <div className="absolute size-full z-10 bg-accent/15 rounded-lg top-0 left-0" />
      <Image
        alt={alt}
        src={imageUrl}
        fill
        className="object-cover object-center rounded-lg"
      />
    </div>
  );
};
