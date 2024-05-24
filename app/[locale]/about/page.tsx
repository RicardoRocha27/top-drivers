import { Hero } from '../../../components/shared/hero';
import { Banner } from './_components/banner';
import { Mission } from './_components/mission';
import { Timeline } from './_components/timeline';
// import { Statistics } from './_components/statistics';

export default function ServicesPage() {
  return (
    <div>
      <Hero
        keyword="about"
        imagesUrl={[
          '/about-hero-1.jpg',
          '/about-hero-2.jpg',
          '/about-hero-3.jpg',
          '/about-hero-4.jpg',
          '/about-hero-5.jpg',
        ]}
      />
      <Mission />
      <Banner />
      <Timeline />
      {/* <Statistics /> */}
    </div>
  );
}
