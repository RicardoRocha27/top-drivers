import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FleetCard } from "./fleet-card";
import { CarouselArrows } from "./carousel-arrows";

export const FleetGrid = () => {
  // TODO: UPDATE FLEET INFORMATION
  const carsInfo = [
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
        {carsInfo.map((carInfo, index) => (
          <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
            <FleetCard
              imageUrl={carInfo.imageUrl}
              carName={carInfo.carName}
              availablePlaces={carInfo.availablePlaces}
              availableBags={carInfo.availableBags}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
