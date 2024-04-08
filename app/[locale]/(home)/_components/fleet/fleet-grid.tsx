import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FleetCard } from "./fleet-card";
import { CarouselArrows } from "./carousel-arrows";

export const FleetGrid = () => {
  // TODO: UPDATE FLEET INFORMATION
  const fleetList: Fleet[] = [
    {
      imageUrl: "/car1.jpg",
      carName: "Mercedes E-Class",
      availablePlaces: 4,
      availableBags: 2,
    },
    {
      imageUrl: "/car1.jpg",
      carName: "Mercedes E-Class",
      availablePlaces: 4,
      availableBags: 2,
    },
    {
      imageUrl: "/car1.jpg",
      carName: "Mercedes E-Class",
      availablePlaces: 4,
      availableBags: 2,
    },
    {
      imageUrl: "/car1.jpg",
      carName: "Mercedes E-Class",
      availablePlaces: 4,
      availableBags: 2,
    },
  ];

  return (
    <Carousel>
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
