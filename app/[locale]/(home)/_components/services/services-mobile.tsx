import { Header } from '@/components/shared/header';
import { ServiceCard } from './service-card';
import { ServicesProps } from './services';

import ExecutiveImage from '@/public/home-executive.jpg';
import ToursImage from '@/public/home-tours1.jpg';
import NightLifeImage from '@/public/home-night-life.jpg';
import WeddingsImage from '@/public/home-weddings.jpg';

export const ServicesMobile = ({ locale }: ServicesProps) => {
  return (
    <div className="h-[750px] my-32 flex flex-col md:hidden">
      <Header translationKeyword="home.services" />
      <div className="flex flex-col h-full gap-4 mt-8">
        <div className="relative h-full">
          <ServiceCard
            buttonKeyword="executive"
            imageUrl={ExecutiveImage}
            href={`/${locale}/services#executive`}
            alt="executive service"
          />
        </div>
        <div className="relative h-full">
          <ServiceCard
            buttonKeyword="tours"
            imageUrl={ToursImage}
            href={`/${locale}/services#tours`}
            alt="tours service"
          />
        </div>
        <div className="relative h-full">
          <ServiceCard
            buttonKeyword="nightLife"
            imageUrl={NightLifeImage}
            href={`/${locale}/services#night-life`}
            alt="night life service"
          />
        </div>
        <div className="relative h-full">
          <ServiceCard
            buttonKeyword="weddings"
            imageUrl={WeddingsImage}
            href={`/${locale}/services#weddings`}
            alt="weddings service"
          />
        </div>
      </div>
    </div>
  );
};
