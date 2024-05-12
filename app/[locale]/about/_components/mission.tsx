import { Container } from "@/components/shared/container";
import { Header } from "@/components/shared/header";
import { MissionItem } from "./mission-item";
import {
  GraduationCap,
  Hand,
  Handshake,
  Lock,
  PersonStanding,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { TbCertificate } from "react-icons/tb";

export const Mission = () => {
  const t = useTranslations("about.mission.standards");

  return (
    <Container>
      <div className="my-32 mx-auto max-w-6xl space-y-12">
        <Header translationKeyword="about.mission" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <MissionItem
            title={t("trust.title")}
            description={t("trust.description")}
            icon={<Handshake size={19.5} />}
          />
          <MissionItem
            title={t("privacy.title")}
            description={t("privacy.description")}
            icon={<Lock size={19.5} />}
          />
          <MissionItem
            title={t("comfort.title")}
            description={t("comfort.description")}
            icon={<Star size={19.5} />}
          />
          <MissionItem
            title={t("quality.title")}
            description={t("quality.description")}
            icon={<TbCertificate size={19.5} />}
          />
          <MissionItem
            title={t("convenience.title")}
            description={t("convenience.description")}
            icon={<PersonStanding size={19.5} />}
          />
          <MissionItem
            title={t("safety.title")}
            description={t("safety.description")}
            icon={<ShieldCheck size={19.5} />}
          />
        </div>
      </div>
    </Container>
  );
};
