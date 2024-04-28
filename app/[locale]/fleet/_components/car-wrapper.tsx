import { Header } from "@/components/shared/header";
import { CarGrid } from "./car-grid";
import { Filter } from "./filter";

export const CarWrapper = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex items-end justify-between">
        <Header translationKeyword="fleet.cars.header" />
        <Filter />
      </div>
      <CarGrid />
    </div>
  );
};
