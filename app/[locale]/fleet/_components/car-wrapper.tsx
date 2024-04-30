import { Header } from "@/components/shared/header";
import { CarGrid } from "./car-grid";
import { Filter } from "./filter";

export const CarWrapper = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <Header translationKeyword="fleet.cars.header" />
        <Filter />
      </div>
      <CarGrid />
    </div>
  );
};
