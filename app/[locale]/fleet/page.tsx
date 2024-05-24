import { Container } from '@/components/shared/container';
import { Hero } from '@/components/shared/hero';
import { Banner } from './_components/banner';
import { CarWrapper } from './_components/car-wrapper';

export default function ServicesPage() {
  return (
    <div>
      <Hero
        keyword="fleet"
        imagesUrl={[
          '/fleet-hero-1.jpg',
          '/fleet-hero-2.jpg',
          '/fleet-hero-3.jpg',
          '/fleet-hero-4.jpg',
          '/fleet-hero-5.jpg',
        ]}
      />
      <Container>
        <Banner />
        <CarWrapper />
      </Container>
    </div>
  );
}
