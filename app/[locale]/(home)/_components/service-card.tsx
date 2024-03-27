import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  buttonKeyword: string;
  imageUrl: string;
  href: string;
  alt: string;
};

export const ServiceCard = ({
  buttonKeyword,
  imageUrl,
  href,
  alt,
}: ServiceCardProps) => {
  const services = useTranslations("services");

  return (
    <div>
      <Button
        className="absolute bottom-4 left-4 z-20"
        variant="background"
        asChild
      >
        <Link href={href}>{services(buttonKeyword)}</Link>
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
