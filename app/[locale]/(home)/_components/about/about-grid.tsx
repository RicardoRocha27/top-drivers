import Image from 'next/image';

import AboutLisbonImage from '@/public/about-lisbon.jpg';
import AboutPortoImage from '@/public/about-porto.jpg';

type AboutGridProps = {
  card1Text: string;
};

export const AboutGrid = ({ card1Text }: AboutGridProps) => {
  return (
    <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-8">
      <div className="col-span-1">
        <div className="text-center bg-secondary p-12 rounded-lg">
          <h1 className="font-bold text-2xl">+100k</h1>
          <p className="text-foreground/80 text-sm">{card1Text}</p>
        </div>
      </div>
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
  );
};
