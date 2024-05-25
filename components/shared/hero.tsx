import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  keyword: "services" | "fleet" | "about" | "contacts";
  imagesUrl: string[];
};

export const Hero = ({ keyword, imagesUrl }: HeroProps) => {
  const t = useTranslations(keyword);
  const locale = useLocale();

  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between mx-auto max-w-6xl py-12 items-center gap-8 overflow-hidden">
        <div className="space-y-8 text-center md:text-start">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-md"
            style={{ fontFamily: "Times New Roman" }}
          >
            {t("hero.title")}
          </h1>
          <p className="text-sm text-foreground/80 max-w-md">
            {t("hero.description")}
          </p>
          {t("hero.button") !== "" && (
            <Button className="w-fit" variant="accent" asChild>
              <Link href={`/${locale}/contacts`}>{t("hero.button")}</Link>
            </Button>
          )}
        </div>
        <div className="flex gap-4 mt-16">
          <div className="relative w-[150px] h-[250px] my-auto">
            <Image
              src={imagesUrl[0]}
              fill
              alt={t("hero.title")}
              className="object-cover object-center rounded-lg"
            />
          </div>
          <div className="relative w-[150px] h-[500px] space-y-4">
            <div className="relative h-1/2 w-full">
              <Image
                src={imagesUrl[1]}
                fill
                alt={t("hero.title")}
                className="object-cover object-center rounded-lg"
              />
            </div>
            <div className="relative h-1/2 w-full">
              <Image
                src={imagesUrl[2]}
                fill
                alt={t("hero.title")}
                className="object-cover object-center rounded-lg"
              />
            </div>
          </div>
          <div className="relative w-[150px] h-[500px] space-y-4 -mt-16">
            <div className="relative h-1/2 w-full">
              <Image
                src={imagesUrl[3]}
                fill
                alt={t("hero.title")}
                className="object-cover object-center rounded-lg"
              />
            </div>
            <div className="relative h-1/2 w-full">
              <Image
                src={imagesUrl[4]}
                fill
                alt={t("hero.title")}
                className="object-cover object-center rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
