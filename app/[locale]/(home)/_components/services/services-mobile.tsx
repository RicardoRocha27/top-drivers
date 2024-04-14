import { Header } from "@/components/shared/header";
import { ServiceCard } from "./service-card";
import { ServicesProps } from "./services";

export const ServicesMobile = ({ locale }: ServicesProps) => {
  return (
    <div className="h-[750px] my-32 flex flex-col md:hidden">
      <Header translationKeyword="home.services" />
      <div className="flex flex-col h-full gap-4 mt-8">
        <div className="relative h-full">
          <ServiceCard
            buttonKeyword="executive"
            imageUrl="/home-executive.jpg"
            href={`/${locale}/services#executive`}
            alt="executive service"
          />
        </div>
        <div className="relative h-full">
          <ServiceCard
            buttonKeyword="weddings"
            imageUrl="/home-weddings.jpg"
            href={`/${locale}/services#weddings`}
            alt="weddings service"
          />
        </div>
        <div className="relative h-full">
          <ServiceCard
            buttonKeyword="tours"
            imageUrl="/home-tours.jpg"
            href={`/${locale}/services#tours`}
            alt="tours service"
          />
        </div>
        <div className="relative h-full">
          <ServiceCard
            buttonKeyword="nightLife"
            imageUrl="/home-night-life.jpg"
            href={`/${locale}/services#night-life`}
            alt="night life service"
          />
        </div>
      </div>
    </div>
  );
};
