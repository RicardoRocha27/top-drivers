import { Header } from "@/components/shared/header";
import { CarGrid } from "./car-grid";
import { Filter } from "./filter";
import { useTranslations } from "next-intl";

export const CarWrapper = () => {
  const t = useTranslations("fleet.cars.filter");

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <Header translationKeyword="fleet.cars.header" />
        <Filter
          filterLabel={t("label")}
          heading={t("heading")}
          availablePlacesLabel={t("availablePlacesLabel")}
          availableBagsLabel={t("availableBagsLabel")}
        />
      </div>
      <CarGrid />
    </div>
  );
};
