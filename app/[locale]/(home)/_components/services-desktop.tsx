import { Header } from "@/components/shared/header";
import { ServiceCard } from "./service-card";

export const ServicesDesktop = () => {
  return (
    <div className="h-[450px] my-32 gap-8 hidden lg:grid grid-cols-3">
      <div className="h-full flex flex-col justify-between">
        <Header
          title="Our Services"
          subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <div className="h-1/2 relative">
          <ServiceCard
            buttonLabel="Executive"
            alt="executive service"
            imageUrl="/home-executive.jpg"
          />
        </div>
      </div>
      <div className="h-full relative">
        <ServiceCard
          buttonLabel="Weddings"
          alt="weddings service"
          imageUrl="/home-weddings.jpg"
        />
      </div>
      <div className="h-full flex flex-col gap-4">
        <div className="relative h-full">
          <ServiceCard
            buttonLabel="Tours"
            alt="tours service"
            imageUrl="/home-tours.jpg"
          />
        </div>
        <div className="relative h-full">
          <ServiceCard
            buttonLabel="Night Life"
            alt="night life service"
            imageUrl="/home-night-life.jpg"
          />
        </div>
      </div>
    </div>
  );
};
