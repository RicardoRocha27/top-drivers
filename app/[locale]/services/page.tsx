import { Hero } from "@/components/shared/hero";
import { ServicesGrid } from "./_components/services-grid";

export default function ServicesPage() {
  return (
    <div>
      <Hero keyword="services" imageUrl="/about-hero.png" />
      <ServicesGrid />
    </div>
  );
}
