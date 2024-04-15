import { Hero } from '../../../components/shared/hero';
import { Banner } from './_components/banner';
import { Mission } from './_components/mission';
import { Timeline } from './_components/timeline';
import { Statistics } from './_components/statistics';

export default function ServicesPage() {
  return (
    <div>
      <Hero keyword="about" imageUrl="/about-hero.png" />
      <Mission />
      <Banner />
      <Timeline />
      <Statistics />
      {/* TODO: Create chronogram (With timeline and stats - https://tailwindui.com/components/marketing/page-examples/about-pages) */}
    </div>
  );
}
