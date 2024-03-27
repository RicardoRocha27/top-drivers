import { Header } from "@/components/shared/header";
import { ServiceCard } from "./service-card";

export const ServicesMobile = () => {
  return (
    <div className="h-[750px] my-32 flex flex-col md:hidden">
      <Header translationKeyword="services" />
      <div className="flex flex-col h-full gap-4 mt-8">
        <div className="relative h-full">
          <ServiceCard
            buttonKeyword="executive"
            imageUrl="/home-executive.jpg"
            href="/"
            alt="executive service"
          />
        </div>
        <div className="relative h-full">
          <ServiceCard
            buttonKeyword="weddings"
            imageUrl="/home-weddings.jpg"
            href="/"
            alt="weddings service"
          />
        </div>
        <div className="relative h-full">
          <ServiceCard
            buttonKeyword="tours"
            imageUrl="/home-tours.jpg"
            href="/"
            alt="tours service"
          />
        </div>
        <div className="relative h-full">
          <ServiceCard
            buttonKeyword="nightLife"
            imageUrl="/home-night-life.jpg"
            href="/"
            alt="night life service"
          />
        </div>
      </div>
    </div>
  );
};
