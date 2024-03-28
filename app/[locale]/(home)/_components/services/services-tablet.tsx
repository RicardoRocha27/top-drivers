import { Header } from "@/components/shared/header";
import { ServiceCard } from "./service-card";

export const ServicesTablet = () => {
  return (
    <div className="h-[450px] my-32 gap-8 hidden md:grid lg:hidden grid-rows-3">
      <div className="flex gap-8 size-full row-span-2">
        <div className="size-full flex flex-col justify-between">
          <Header translationKeyword="services" />
          <div className="h-1/2 relative">
            <ServiceCard
              buttonKeyword="executive"
              href="/"
              alt="executive service"
              imageUrl="/home-executive.jpg"
            />
          </div>
        </div>
        <div className="size-full relative">
          <ServiceCard
            buttonKeyword="weddings"
            href="/"
            alt="weddings service"
            imageUrl="/home-weddings.jpg"
          />
        </div>
      </div>
      <div className="flex gap-8 size-full">
        <div className="size-full relative">
          <ServiceCard
            buttonKeyword="tours"
            href="/"
            alt="tours service"
            imageUrl="/home-tours.jpg"
          />
        </div>
        <div className="size-full relative">
          <ServiceCard
            buttonKeyword="nightLife"
            href="/"
            alt="night life service"
            imageUrl="/home-night-life.jpg"
          />
        </div>
      </div>
    </div>
  );
};
