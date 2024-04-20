import { Hero } from "@/components/shared/hero";

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
    </div>
  );
}
