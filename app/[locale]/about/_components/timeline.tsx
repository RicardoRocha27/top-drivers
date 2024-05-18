import React from "react";
import { TimelineEvent } from "../_components/timeline-event";
import { Container } from "@/components/shared/container";
import { useTranslations } from "next-intl";

export const Timeline = () => {
  const t = useTranslations("about.mission.timeline");
  return (
    <Container>
      <div className="max-w-6xl mx-auto my-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <TimelineEvent
            date={t("foundation.date")}
            title={t("foundation.title")}
            description={t("foundation.description")}
          />
          <TimelineEvent
            date={t("growth.date")}
            title={t("growth.title")}
            description={t("growth.description")}
          />
          <TimelineEvent
            date={t("green.date")}
            title={t("green.title")}
            description={t("green.description")}
          />
          <TimelineEvent
            date={t("present.date")}
            title={t("present.title")}
            description={t("present.description")}
          />
        </div>
      </div>
    </Container>
  );
};
