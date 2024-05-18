import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FleetCard } from "./fleet-card";
import { CarouselArrows } from "./carousel-arrows";
import { useTranslations } from "next-intl";

export const fleetList: Fleet[] = [
  {
    imageUrl: "/car-e-class.jpeg",
    carName: "Mercedes E-Class",
    carDescriptionLabel: "eClass.description",
    availablePlaces: 3,
    availableBags: 4,
    images: [
      "/car-e-class.jpeg",
      "/car-e-class.jpeg",
      "/car-e-class.jpeg",
      "/car-e-class.jpeg",
      "/car-e-class.jpeg",
    ],
  },
  {
    imageUrl: "/car-s-class.jpeg",
    carName: "Mercedes S-Class",
    carDescriptionLabel: "sClass.description",
    availablePlaces: 3,
    availableBags: 4,
    images: [
      "/car-s-class.jpeg",
      "/car-s-class.jpeg",
      "/car-s-class.jpeg",
      "/car-s-class.jpeg",
      "/car-s-class.jpeg",
    ],
  },
  {
    imageUrl: "/car-eqe.jpeg",
    carName: "Mercedes EQE",
    carDescriptionLabel: "eqe.description",
    availablePlaces: 3,
    availableBags: 4,
    images: [
      "/car-eqe.jpeg",
      "/car-eqe.jpeg",
      "/car-eqe.jpeg",
      "/car-eqe.jpeg",
      "/car-eqe.jpeg",
    ],
  },
  {
    imageUrl: "/car-eqs.jpeg",
    carName: "Mercedes EQS",
    carDescriptionLabel: "eqs.description",
    availablePlaces: 3,
    availableBags: 5,
    images: [
      "/car-eqs.jpeg",
      "/car-eqs.jpeg",
      "/car-eqs.jpeg",
      "/car-eqs.jpeg",
      "/car-eqs.jpeg",
    ],
  },
  {
    imageUrl: "/car-eqs-suv.jpeg",
    carName: "Mercedes EQS Suv",
    carDescriptionLabel: "eqsSuv.description",
    availablePlaces: 4,
    availableBags: 6,
    images: [
      "/car-eqs-suv.jpeg",
      "/car-eqs-suv.jpeg",
      "/car-eqs-suv.jpeg",
      "/car-eqs-suv.jpeg",
      "/car-eqs-suv.jpeg",
    ],
  },
  {
    imageUrl: "/car-v-class.jpeg",
    carName: "Mercedes V-Class",
    carDescriptionLabel: "vClass.description",
    availablePlaces: 7,
    availableBags: 16,
    images: [
      "/car-v-class.jpeg",
      "/car-v-class.jpeg",
      "/car-v-class.jpeg",
      "/car-v-class.jpeg",
      "/car-v-class.jpeg",
    ],
  },
  {
    imageUrl: "/car-sprinter.jpeg",
    carName: "Mercedes Sprinter 8Pax",
    carDescriptionLabel: "sprinter8.description",
    availablePlaces: 8,
    availableBags: 18,
    images: [
      "/car-sprinter.jpeg",
      "/car-sprinter.jpeg",
      "/car-sprinter.jpeg",
      "/car-sprinter.jpeg",
      "/car-sprinter.jpeg",
    ],
  },
  {
    imageUrl: "/car-sprinter.jpeg",
    carName: "Mercedes Sprinter 16Pax",
    carDescriptionLabel: "sprinter16.description",
    availablePlaces: 16,
    availableBags: 32,
    images: [
      "/car-sprinter.jpeg",
      "/car-sprinter.jpeg",
      "/car-sprinter.jpeg",
      "/car-sprinter.jpeg",
      "/car-sprinter.jpeg",
    ],
  },
];

export const FleetGrid = () => {
  const t = useTranslations("home.fleet");

  return (
    <Carousel
      opts={{
        align: "start",
      }}
    >
      <CarouselArrows buttonLabel={t("button")} />
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
