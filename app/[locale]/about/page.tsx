import { Hero } from "../../../components/shared/hero";
import { Banner } from "./_components/banner";
import { Mission } from "./_components/mission";

export default function ServicesPage() {
  return (
    <div>
      <Hero keyword="about" imageUrl="/about-hero.png" />
      <Mission />
      <Banner />
      {/* TODO: Create chronogram (With timeline and stats - https://tailwindui.com/components/marketing/page-examples/about-pages) */}
    </div>
  );
}
