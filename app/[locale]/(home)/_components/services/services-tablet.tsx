import { Header } from '@/components/shared/header';
import { ServiceCard } from './service-card';
import { ServicesProps } from './services';

export const ServicesTablet = ({ locale }: ServicesProps) => {
  return (
    <div className="h-[450px] my-32 gap-8 hidden md:grid lg:hidden grid-rows-3">
      <div className="flex gap-8 size-full row-span-2">
        <div className="size-full flex flex-col justify-between">
          <Header translationKeyword="home.services" />
          <div className="h-1/2 relative">
            <ServiceCard
              buttonKeyword="executive"
              href={`/${locale}/services#executive`}
              alt="executive service"
              imageUrl="/home-executive.jpg"
            />
          </div>
        </div>
        <div className="size-full relative">
          <ServiceCard
            buttonKeyword="tours"
            href={`/${locale}/services#tours`}
            alt="tours service"
            imageUrl="/home-tours.jpg"
          />
        </div>
      </div>
      <div className="flex gap-8 size-full">
        <div className="size-full relative">
          <ServiceCard
            buttonKeyword="nightLife"
            href={`/${locale}/services#night-life`}
            alt="night life service"
            imageUrl="/home-night-life.jpg"
          />
        </div>
        <div className="size-full relative">
          <ServiceCard
            buttonKeyword="weddings"
            href={`/${locale}/services#weddings`}
            alt="weddings service"
            imageUrl="/home-weddings.jpg"
          />
        </div>
      </div>
    </div>
  );
};
