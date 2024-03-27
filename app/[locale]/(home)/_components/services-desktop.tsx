import { Header } from "@/components/shared/header";
import { ServiceCard } from "./service-card";

export const ServicesDesktop = () => {
  return (
    <div className="h-[450px] my-32 gap-8 hidden lg:grid grid-cols-3">
      <div className="h-full flex flex-col justify-between">
        <Header translationKeyword="services" />
        <div className="h-1/2 relative">
          <ServiceCard
            buttonKeyword="executive"
            alt="executive service"
            href="/"
            imageUrl="/home-executive.jpg"
          />
        </div>
      </div>
      <div className="h-full relative">
        <ServiceCard
          buttonKeyword="weddings"
          href="/"
          alt="weddings service"
          imageUrl="/home-weddings.jpg"
        />
      </div>
      <div className="h-full flex flex-col gap-4">
        <div className="relative h-full">
          <ServiceCard
            buttonKeyword="tours"
            href="/"
            alt="tours service"
            imageUrl="/home-tours.jpg"
          />
        </div>
        <div className="relative h-full">
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
