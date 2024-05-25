import { Hero } from '@/components/shared/hero';
import { ServicesGrid } from './_components/services-grid';

import Hero1 from '@/public/services-hero-1.jpg';
import Hero2 from '@/public/services-hero-2.jpg';
import Hero3 from '@/public/services-hero-3.jpg';
import Hero4 from '@/public/services-hero-4.jpg';
import Hero5 from '@/public/services-hero-5.jpg';

export default function ServicesPage() {
  return (
    <div>
      <Hero
        keyword="services"
        imagesUrl={[Hero1, Hero2, Hero3, Hero4, Hero5]}
      />
      <ServicesGrid />
    </div>
  );
}
