import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

type HeroProps = {
  keyword: "services" | "fleet" | "about" | "contacts";
  imageUrl: string;
};

export const Hero = ({ keyword, imageUrl }: HeroProps) => {
  const t = useTranslations(keyword);

  return (
    <Container>
      <div className="max-w-6xl mx-auto my-16">
        <div className="flex justify-between items-center flex-col md:flex-row gap-8">
          <div className="flex items-center text-center md:text-start md:items-start flex-col w-full gap-8">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-md"
              style={{ fontFamily: "Times New Roman" }}
            >
              {t("hero.title")}
            </h1>
            <p className="text-sm text-foreground/80 max-w-md">
              {t("hero.description")}
            </p>
            <Button className="w-fit" variant="accent">
              {t("hero.button")}
            </Button>
          </div>
          <div className="relative w-full h-[600px]">
            <Image
              alt={t("hero.title")}
              src={imageUrl}
              fill
              className="object-center object-contain"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
