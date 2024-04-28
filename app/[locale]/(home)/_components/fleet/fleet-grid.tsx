import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FleetCard } from "./fleet-card";
import { CarouselArrows } from "./carousel-arrows";

export const fleetList: Fleet[] = [
  {
    imageUrl: "/car-e-class.jpeg",
    carName: "Mercedes E-Class",
    availablePlaces: 4,
    availableBags: 2,
  },
  {
    imageUrl: "/car-s-class.jpeg",
    carName: "Mercedes S-Class",
    availablePlaces: 4,
    availableBags: 2,
  },
  {
    imageUrl: "/car-eqe.jpeg",
    carName: "Mercedes EQE",
    availablePlaces: 4,
    availableBags: 2,
  },
  {
    imageUrl: "/car-eqs.jpeg",
    carName: "Mercedes EQS",
    availablePlaces: 4,
    availableBags: 2,
  },
  {
    imageUrl: "/car-eqs-suv.jpeg",
    carName: "Mercedes EQS Suv",
    availablePlaces: 4,
    availableBags: 2,
  },
  {
    imageUrl: "/car-v-class.jpeg",
    carName: "Mercedes V-Class",
    availablePlaces: 4,
    availableBags: 2,
  },
  {
    imageUrl: "/car-sprinter.jpeg",
    carName: "Mercedes Sprinter",
    availablePlaces: 4,
    availableBags: 2,
  },
];

export const FleetGrid = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
    >
      <CarouselArrows />
      <CarouselContent>
        {fleetList.map((fleet, index) => (
          <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
            <FleetCard
              imageUrl={fleet.imageUrl}
              carName={fleet.carName}
              availablePlaces={fleet.availablePlaces}
              availableBags={fleet.availableBags}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
