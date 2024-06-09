import { Header } from '@/components/shared/header';
import { ServiceCard } from './service-card';
import { ServicesProps } from './services';

import ExecutiveImage from '@/public/home-executive.jpg';
import ToursImage from '@/public/home-tours1.jpg';
import NightLifeImage from '@/public/home-night-life.jpg';
import WeddingsImage from '@/public/home-weddings.jpg';

export const ServicesDesktop = ({ locale }: ServicesProps) => {
  return (
    <div className="h-[450px] max-w-6xl mx-auto my-32 gap-8 hidden lg:grid grid-cols-3">
      <div className="h-full flex flex-col justify-between">
        <Header translationKeyword="home.services" />
        <div className="h-1/2 relative">
          <ServiceCard
            buttonKeyword="executive"
            alt="executive service"
            href={`/${locale}/services#executive`}
            imageUrl={ExecutiveImage}
          />
        </div>
      </div>
      <div className="h-full relative">
        <ServiceCard
          buttonKeyword="tours"
          href={`/${locale}/services#tours`}
          alt="tours service"
          imageUrl={ToursImage}
        />
      </div>
      <div className="h-full flex flex-col gap-4">
        <div className="relative h-full">
          <ServiceCard
            buttonKeyword="nightLife"
            href={`/${locale}/services#night-life`}
            alt="night life service"
            imageUrl={NightLifeImage}
          />
        </div>
        <div className="relative h-full">
          <ServiceCard
            buttonKeyword="weddings"
            href={`/${locale}/services#weddings`}
            alt="weddings service"
            imageUrl={WeddingsImage}
          />
        </div>
      </div>
    </div>
  );
};
