import { Hero } from '../../../components/shared/hero';
import { Banner } from './_components/banner';
import { Mission } from './_components/mission';
import { Timeline } from './_components/timeline';

import Hero1 from '@/public/about-hero-1.jpg';
import Hero2 from '@/public/about-hero-2.jpg';
import Hero3 from '@/public/about-hero-3.jpg';
import Hero4 from '@/public/about-hero-4.jpg';
import Hero5 from '@/public/about-hero-5.jpg';

export default function ServicesPage() {
  return (
    <div>
      <Hero keyword="about" imagesUrl={[Hero1, Hero2, Hero3, Hero4, Hero5]} />
      <Mission />
      <Banner />
      <Timeline />
    </div>
  );
}
