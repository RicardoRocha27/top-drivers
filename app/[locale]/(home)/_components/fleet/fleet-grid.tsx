import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { FleetCard } from './fleet-card';
import { CarouselArrows } from './carousel-arrows';
import { useTranslations } from 'next-intl';
import { Fleet } from '@/types';

import Eclass0Image from '@/public/car-e-class.jpeg';
// TODO: Import the rest of the images

import Sclass0Image from '@/public/car-s-class.jpeg';
// TODO: Import the rest of the images

import Eqs0Image from '@/public/car-eqs.jpeg';
// TODO: Import the rest of the images

import Vclass0Image from '@/public/car-v-class.jpeg';
// TODO: Import the rest of the images

import Sprinter80Image from '@/public/car-sprinter-8.jpeg';
// TODO: Import the rest of the images

import Sprinter160Image from '@/public/car-sprinter-16.jpg';
// TODO: Import the rest of the images

import EqsSuv0Image from '@/public/car-eqs-suv.jpeg';
// TODO: Import the rest of the images

import Eqe0Image from '@/public/car-eqe.jpeg';
// TODO: Import the rest of the images

export const fleetList: Fleet[] = [
  {
    imageUrl: Eclass0Image,
    carName: 'Mercedes E-Class',
    carDescriptionLabel: 'eClass.description',
    availablePlaces: 3,
    availableBags: 4,
    images: [
      Eclass0Image,
      Eclass0Image,
      Eclass0Image,
      Eclass0Image,
      Eclass0Image,
    ],
  },
  {
    imageUrl: Sclass0Image,
    carName: 'Mercedes S-Class',
    carDescriptionLabel: 'sClass.description',
    availablePlaces: 3,
    availableBags: 4,
    images: [
      Sclass0Image,
      Sclass0Image,
      Sclass0Image,
      Sclass0Image,
      Sclass0Image,
    ],
  },
  {
    imageUrl: Eqe0Image,
    carName: 'Mercedes EQE',
    carDescriptionLabel: 'eqe.description',
    availablePlaces: 3,
    availableBags: 4,
    images: [Eqe0Image, Eqe0Image, Eqe0Image, Eqe0Image, Eqe0Image],
  },
  {
    imageUrl: Eqs0Image,
    carName: 'Mercedes EQS',
    carDescriptionLabel: 'eqs.description',
    availablePlaces: 3,
    availableBags: 5,
    images: [Eqs0Image, Eqs0Image, Eqs0Image, Eqs0Image, Eqs0Image],
  },
  {
    imageUrl: EqsSuv0Image,
    carName: 'Mercedes EQS Suv',
    carDescriptionLabel: 'eqsSuv.description',
    availablePlaces: 4,
    availableBags: 6,
    images: [
      EqsSuv0Image,
      EqsSuv0Image,
      EqsSuv0Image,
      EqsSuv0Image,
      EqsSuv0Image,
    ],
  },
  {
    imageUrl: Vclass0Image,
    carName: 'Mercedes V-Class',
    carDescriptionLabel: 'vClass.description',
    availablePlaces: 7,
    availableBags: 16,
    images: [
      Vclass0Image,
      Vclass0Image,
      Vclass0Image,
      Vclass0Image,
      Vclass0Image,
    ],
  },
  {
    imageUrl: Sprinter80Image,
    carName: 'Mercedes Sprinter 8Pax',
    carDescriptionLabel: 'sprinter8.description',
    availablePlaces: 8,
    availableBags: 18,
    images: [
      Sprinter80Image,
      Sprinter80Image,
      Sprinter80Image,
      Sprinter80Image,
      Sprinter80Image,
    ],
  },
  {
    imageUrl: Sprinter160Image,
    carName: 'Mercedes Sprinter 16Pax',
    carDescriptionLabel: 'sprinter16.description',
    availablePlaces: 16,
    availableBags: 32,
    images: [
      Sprinter160Image,
      Sprinter160Image,
      Sprinter160Image,
      Sprinter160Image,
      Sprinter160Image,
    ],
  },
];

export const FleetGrid = () => {
  const t = useTranslations('home.fleet');

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
    >
      <CarouselArrows buttonLabel={t('button')} />
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
