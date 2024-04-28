import { Header } from "@/components/shared/header";
import { fleetList } from "../../(home)/_components/fleet/fleet-grid";
import { Car } from "./car";
import { Filter } from "./filter";

export const CarGrid = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex items-end justify-between">
        <Header translationKeyword="fleet.cars.header" />
        <Filter />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
        {fleetList.map((car) => (
          <Car
            key={car.carName}
            imageUrl={car.imageUrl}
            name={car.carName}
            availablePlaces={car.availablePlaces}
            availableBags={car.availableBags}
          />
        ))}
      </div>
    </div>
  );
};
