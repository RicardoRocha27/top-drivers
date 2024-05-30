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
import Eclass1Image from '@/public/car-e-class-1.webp';
import Eclass2Image from '@/public/car-e-class-2.webp';
import Eclass3Image from '@/public/car-e-class-3.webp';
import Eclass4Image from '@/public/car-e-class-4.webp';
import Eclass5Image from '@/public/car-e-class-5.webp';

import Sclass0Image from '@/public/car-s-class.jpeg';
import Sclass1Image from '@/public/car-s-class-1.webp';
import Sclass2Image from '@/public/car-s-class-2.webp';
import Sclass3Image from '@/public/car-s-class-3.webp';
import Sclass4Image from '@/public/car-s-class-4.webp';
import Sclass5Image from '@/public/car-s-class-5.webp';

import Eqe0Image from '@/public/car-eqe.jpeg';
import Eqe1Image from '@/public/car-eqe-1.webp';
import Eqe2Image from '@/public/car-eqe-2.webp';
import Eqe3Image from '@/public/car-eqe-3.webp';
import Eqe4Image from '@/public/car-eqe-4.webp';
import Eqe5Image from '@/public/car-eqe-5.webp';

import Eqs0Image from '@/public/car-eqs.jpeg';
import Eqs1Image from '@/public/car-eqs-1.webp';
import Eqs2Image from '@/public/car-eqs-2.webp';
import Eqs3Image from '@/public/car-eqs-3.webp';
import Eqs4Image from '@/public/car-eqs-4.webp';
import Eqs5Image from '@/public/car-eqs-5.webp';

import EqsSuv0Image from '@/public/car-eqs-suv.jpeg';
import EqsSuv1Image from '@/public/car-eqs-suv-1.webp';
import EqsSuv2Image from '@/public/car-eqs-suv-2.webp';
import EqsSuv3Image from '@/public/car-eqs-suv-3.webp';
import EqsSuv4Image from '@/public/car-eqs-suv-4.webp';
import EqsSuv5Image from '@/public/car-eqs-suv-5.webp';

import Vclass0Image from '@/public/car-v-class.jpeg';
import Vclass1Image from '@/public/car-v-class-1.jpg';
import Vclass2Image from '@/public/car-v-class-2.jpg';
import Vclass3Image from '@/public/car-v-class-3.jpg';
import Vclass4Image from '@/public/car-v-class-4.jpg';
import Vclass5Image from '@/public/car-v-class-5.jpg';

import Sprinter80Image from '@/public/car-sprinter-8.jpeg';
import Sprinter160Image from '@/public/car-sprinter-16.jpg';
import Sprinter1Image from '@/public/car-sprinter-1.jpg';
import Sprinter2Image from '@/public/car-sprinter-2.jpg';
import Sprinter3Image from '@/public/car-sprinter-3.jpg';
import Sprinter4Image from '@/public/car-sprinter-4.jpg';
import Sprinter5Image from '@/public/car-sprinter-5.jpg';

export const fleetList: Fleet[] = [
  {
    imageUrl: Eclass0Image,
    carName: 'Mercedes E-Class',
    carDescriptionLabel: 'eClass.description',
    availablePlaces: 3,
    availableBags: 4,
    images: [
      Eclass1Image,
      Eclass2Image,
      Eclass4Image,
      Eclass3Image,
      Eclass5Image,
    ],
  },
  {
    imageUrl: Sclass0Image,
    carName: 'Mercedes S-Class',
    carDescriptionLabel: 'sClass.description',
    availablePlaces: 3,
    availableBags: 4,
    images: [
      Sclass5Image,
      Sclass4Image,
      Sclass2Image,
      Sclass3Image,
      Sclass1Image,
    ],
  },
  {
    imageUrl: Eqe0Image,
    carName: 'Mercedes EQE',
    carDescriptionLabel: 'eqe.description',
    availablePlaces: 3,
    availableBags: 4,
    images: [Eqe5Image, Eqe1Image, Eqe3Image, Eqe2Image, Eqe4Image],
  },
  {
    imageUrl: Eqs0Image,
    carName: 'Mercedes EQS',
    carDescriptionLabel: 'eqs.description',
    availablePlaces: 3,
    availableBags: 5,
    images: [Eqs5Image, Eqs4Image, Eqs2Image, Eqs3Image, Eqs1Image],
  },
  {
    imageUrl: EqsSuv0Image,
    carName: 'Mercedes EQS Suv',
    carDescriptionLabel: 'eqsSuv.description',
    availablePlaces: 4,
    availableBags: 6,
    images: [
      EqsSuv5Image,
      EqsSuv4Image,
      EqsSuv2Image,
      EqsSuv3Image,
      EqsSuv1Image,
    ],
  },
  {
    imageUrl: Vclass0Image,
    carName: 'Mercedes V-Class',
    carDescriptionLabel: 'vClass.description',
    availablePlaces: 7,
    availableBags: 16,
    images: [
      Vclass1Image,
      Vclass5Image,
      Vclass4Image,
      Vclass2Image,
      Vclass3Image,
    ],
  },
  {
    imageUrl: Sprinter80Image,
    carName: 'Mercedes Sprinter 8Pax',
    carDescriptionLabel: 'sprinter8.description',
    availablePlaces: 8,
    availableBags: 18,
    images: [
      Sprinter1Image,
      Sprinter3Image,
      Sprinter5Image,
      Sprinter4Image,
      Sprinter2Image,
    ],
  },
  {
    imageUrl: Sprinter160Image,
    carName: 'Mercedes Sprinter 16Pax',
    carDescriptionLabel: 'sprinter16.description',
    availablePlaces: 16,
    availableBags: 32,
    images: [
      Sprinter1Image,
      Sprinter3Image,
      Sprinter5Image,
      Sprinter4Image,
      Sprinter2Image,
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
