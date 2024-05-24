import { Hero } from "@/components/shared/hero";
import { ServicesGrid } from "./_components/services-grid";

export default function ServicesPage() {
  return (
    <div>
      <Hero
        keyword="services"
        imagesUrl={[
          "/services-hero-1.jpg",
          "/services-hero-2.jpg",
          "/services-hero-3.jpg",
          "/services-hero-4.jpg",
          "/services-hero-5.jpg",
        ]}
      />
      <ServicesGrid />
    </div>
  );
}
