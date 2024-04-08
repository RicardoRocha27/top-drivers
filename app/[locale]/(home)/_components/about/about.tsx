import { Container } from "@/components/shared/container";
import { Header } from "@/components/shared/header";
import { AboutGrid } from "./about-grid";
import { useTranslations } from "next-intl";

export const About = () => {
  const t = useTranslations("home.about");

  return (
    <Container>
      <div className="max-w-6xl mx-auto space-y-12 my-32">
        <div className="gap-4 flex flex-col lg:flex-row justify-between">
          <div className="lg:max-w-md">
            <Header translationKeyword="home.about" />
          </div>
          <p className="text-sm md:text-base text-foreground/80 lg:max-w-md">
            {t("description")}
          </p>
        </div>
        <AboutGrid card1Text={t("card1Text")} />
      </div>
    </Container>
  );
};
