import { Container } from '@/components/shared/container';
import { Hero } from '@/components/shared/hero';
import { Banner } from './_components/banner';
import { CarWrapper } from './_components/car-wrapper';
import Hero1 from '@/public/fleet-hero-1.jpg';
import Hero2 from '@/public/fleet-hero-2.jpg';
import Hero3 from '@/public/fleet-hero-3.jpg';
import Hero4 from '@/public/fleet-hero-4.jpg';
import Hero5 from '@/public/fleet-hero-5.jpg';

export default function ServicesPage() {
  return (
    <div>
      <Hero keyword="fleet" imagesUrl={[Hero1, Hero2, Hero3, Hero4, Hero5]} />
      <Container>
        <Banner />
        <CarWrapper />
      </Container>
    </div>
  );
}
