import { Header } from "@/components/shared/header";
import { ServiceCard } from "./service-card";

export const ServicesMobile = () => {
  return (
    <div className="h-[750px] my-32 flex flex-col md:hidden">
      <Header
        title="Our Services"
        subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <div className="flex flex-col h-full gap-4 mt-8">
        <div className="relative h-full">
          <ServiceCard
            buttonLabel="Executive"
            alt="executive service"
            imageUrl="/home-executive.jpg"
          />
        </div>
        <div className="relative h-full">
          <ServiceCard
            buttonLabel="Weddings"
            alt="weddings service"
            imageUrl="/home-weddings.jpg"
          />
        </div>
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
