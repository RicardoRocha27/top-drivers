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
// TODO: Uncomment and change the images paths
// import Eclass1Image from '@/public/...';
// import Eclass2Image from '@/public/...';
// import Eclass3Image from '@/public/...';
// import Eclass4Image from '@/public/...';
// import Eclass5Image from '@/public/...';

import Sclass0Image from '@/public/car-s-class.jpeg';
// TODO: Uncomment and change the images paths
// import Sclass1Image from '@/public/...';
// import Sclass2Image from '@/public/...';
// import Sclass3Image from '@/public/...';
// import Sclass4Image from '@/public/...';
// import Sclass5Image from '@/public/...';

import Eqs0Image from '@/public/car-eqs.jpeg';
// TODO: Uncomment and change the images paths
// import Eqs1Image from '@/public/...';
// import Eqs2Image from '@/public/...';
// import Eqs3Image from '@/public/...';
// import Eqs4Image from '@/public/...';
// import Eqs5Image from '@/public/...';

import Vclass0Image from '@/public/car-v-class.jpeg';
// TODO: Uncomment and change the images paths
// import Vclass1Image from '@/public/...';
// import Vclass2Image from '@/public/...';
// import Vclass3Image from '@/public/...';
// import Vclass4Image from '@/public/...';
// import Vclass5Image from '@/public/...';

import Sprinter80Image from '@/public/car-sprinter-8.jpeg';
// TODO: Uncomment and change the images paths
// import Sprinter81Image from '@/public/...';
// import Sprinter82Image from '@/public/...';
// import Sprinter83Image from '@/public/...';
// import Sprinter84Image from '@/public/...';
// import Sprinter85Image from '@/public/...';

import Sprinter160Image from '@/public/car-sprinter-16.jpg';
// TODO: Uncomment and change the images paths
// import Sprinter161Image from '@/public/...';
// import Sprinter162Image from '@/public/...';
// import Sprinter163Image from '@/public/...';
// import Sprinter164Image from '@/public/...';
// import Sprinter165Image from '@/public/...';

import EqsSuv0Image from '@/public/car-eqs-suv.jpeg';
// TODO: Uncomment and change the images paths
// import EqsSuv1Image from '@/public/...';
// import EqsSuv2Image from '@/public/...';
// import EqsSuv3Image from '@/public/...';
// import EqsSuv4Image from '@/public/...';
// import EqsSuv5Image from '@/public/...';

import Eqe0Image from '@/public/car-eqe.jpeg';
// TODO: Uncomment and change the images paths
// import Eqe1Image from '@/public/...';
// import Eqe2Image from '@/public/...';
// import Eqe3Image from '@/public/...';
// import Eqe4Image from '@/public/...';
// import Eqe5Image from '@/public/...';

export const fleetList: Fleet[] = [
  {
    imageUrl: Eclass0Image,
    carName: 'Mercedes E-Class',
    carDescriptionLabel: 'eClass.description',
    availablePlaces: 3,
    availableBags: 4,
    images: [
      // Eclass1Image,
      // Eclass2Image,
      // Eclass3Image,
      // Eclass4Image,
      // Eclass5Image,
    ],
  },
  {
    imageUrl: Sclass0Image,
    carName: 'Mercedes S-Class',
    carDescriptionLabel: 'sClass.description',
    availablePlaces: 3,
    availableBags: 4,
    images: [
      // Sclass1Image,
      // Sclass2Image,
      // Sclass3Image,
      // Sclass4Image,
      // Sclass5Image,
    ],
  },
  {
    imageUrl: Eqe0Image,
    carName: 'Mercedes EQE',
    carDescriptionLabel: 'eqe.description',
    availablePlaces: 3,
    availableBags: 4,
    images: [
      // Eqe1Image,
      // Eqe2Image,
      // Eqe2Image,
      // Eqe3Image,
      // Eqe5Image
    ],
  },
  {
    imageUrl: Eqs0Image,
    carName: 'Mercedes EQS',
    carDescriptionLabel: 'eqs.description',
    availablePlaces: 3,
    availableBags: 5,
    images: [
      // Eqs1Image,
      // Eqs2Image,
      // Eqs3Image,
      // Eqs4Image,
      // Eqs5Image
    ],
  },
  {
    imageUrl: EqsSuv0Image,
    carName: 'Mercedes EQS Suv',
    carDescriptionLabel: 'eqsSuv.description',
    availablePlaces: 4,
    availableBags: 6,
    images: [
      // EqsSuv1Image,
      // EqsSuv2Image,
      // EqsSuv3Image,
      // EqsSuv4Image,
      // EqsSuv5Image,
    ],
  },
  {
    imageUrl: Vclass0Image,
    carName: 'Mercedes V-Class',
    carDescriptionLabel: 'vClass.description',
    availablePlaces: 7,
    availableBags: 16,
    images: [
      // Vclass1Image,
      // Vclass2Image,
      // Vclass3Image,
      // Vclass4Image,
      // Vclass5Image,
    ],
  },
  {
    imageUrl: Sprinter80Image,
    carName: 'Mercedes Sprinter 8Pax',
    carDescriptionLabel: 'sprinter8.description',
    availablePlaces: 8,
    availableBags: 18,
    images: [
      // Sprinter81Image,
      // Sprinter82Image,
      // Sprinter83Image,
      // Sprinter84Image,
      // Sprinter85Image,
    ],
  },
  {
    imageUrl: Sprinter160Image,
    carName: 'Mercedes Sprinter 16Pax',
    carDescriptionLabel: 'sprinter16.description',
    availablePlaces: 16,
    availableBags: 32,
    images: [
      // Sprinter161Image,
      // Sprinter162Image,
      // Sprinter163Image,
      // Sprinter164Image,
      // Sprinter165Image,
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
