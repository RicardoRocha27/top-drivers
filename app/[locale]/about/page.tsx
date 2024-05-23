import { Hero } from "../../../components/shared/hero";
import { Banner } from "./_components/banner";
import { Mission } from "./_components/mission";
import { Timeline } from "./_components/timeline";
// import { Statistics } from './_components/statistics';

export default function ServicesPage() {
  return (
    <div>
      <Hero
        keyword="about"
        imagesUrl={[
          "/home-hero.png",
          "/home-hero.png",
          "/home-hero.png",
          "/home-hero.png",
          "/home-hero.png",
        ]}
      />
      <Mission />
      <Banner />
      <Timeline />
      {/* <Statistics /> */}
    </div>
  );
}
