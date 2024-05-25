'use client';

import { fleetList } from '../../(home)/_components/fleet/fleet-grid';
import { Car } from './car';
import { useSearchParams } from 'next/navigation';

export const CarGrid = () => {
  const searchParams = useSearchParams();

  const availablePlaces = searchParams.get('availablePlaces') || '1';
  const availableBags = searchParams.get('availableBags') || '1';

  const filteredFleet = fleetList.filter(
    (car) =>
      car.availablePlaces >= parseInt(availablePlaces as string) &&
      car.availableBags >= parseInt(availableBags as string)
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
        {filteredFleet.map((car) => (
          <Car
            key={car.carName}
            imageUrl={car.imageUrl}
            carName={car.carName}
            carDescriptionLabel={car.carDescriptionLabel}
            availablePlaces={car.availablePlaces}
            availableBags={car.availableBags}
            images={car.images}
          />
        ))}
      </div>
      {filteredFleet.length === 0 && (
        <div>
          There are no cars available with the selected filters. Please try
          again.
        </div>
      )}
    </>
  );
};
