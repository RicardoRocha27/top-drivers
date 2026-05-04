import Image from 'next/image';

import AboutLisbonImage from '@/public/about-lisbon.jpg';
import AboutPortoImage from '@/public/about-porto.jpg';

type AboutGridProps = {
  card1Text: string;
  card2Text: string;
  card3Text: string;
  card4Title: string;
  card4Text: string;
};

export const AboutGrid = ({
  card1Text,
  card2Text,
  card3Text,
  card4Title,
  card4Text,
}: AboutGridProps) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center bg-secondary p-8 rounded-lg flex flex-col justify-center">
          <h1 className="font-bold text-2xl">+100k</h1>
          <p className="text-foreground/80 text-sm">{card1Text}</p>
        </div>
        <div className="text-center bg-secondary p-8 rounded-lg flex flex-col justify-center">
          <h1 className="font-bold text-2xl">+80k</h1>
          <p className="text-foreground/80 text-sm">{card2Text}</p>
        </div>
        <div className="text-center bg-secondary p-8 rounded-lg flex flex-col justify-center">
          <h1 className="font-bold text-2xl">+30</h1>
          <p className="text-foreground/80 text-sm">{card3Text}</p>
        </div>
        <div className="text-center bg-secondary p-8 rounded-lg flex flex-col justify-center">
          <h1 className="font-bold text-2xl">{card4Title}</h1>
          <p className="text-foreground/80 text-sm">{card4Text}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-64">
        <div className="col-span-1 relative">
          <div className="absolute size-full z-10 bg-accent/15 rounded-lg top-0 left-0" />
          <Image
            fill
            alt="portugal image"
            placeholder="blur"
            src={AboutLisbonImage}
            className="object-center object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1 md:col-span-2 relative">
          <div className="absolute size-full z-10 bg-accent/15 rounded-lg top-0 left-0" />
          <Image
            fill
            alt="car image"
            placeholder="blur"
            src={AboutPortoImage}
            className="object-bottom object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
