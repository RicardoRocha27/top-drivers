import { Container } from "@/components/shared/container";
import { Hero } from "@/components/shared/hero";
import { Banner } from "./_components/banner";
import { CarWrapper } from "./_components/car-wrapper";

export default function ServicesPage() {
  return (
    <div>
      <Hero
        keyword="fleet"
        imagesUrl={[
          "/home-hero.jpg",
          "/home-hero.jpg",
          "/home-hero.jpg",
          "/home-hero.jpg",
          "/home-hero.jpg",
        ]}
      />
      <Container>
        <Banner />
        <CarWrapper />
      </Container>
    </div>
  );
}
