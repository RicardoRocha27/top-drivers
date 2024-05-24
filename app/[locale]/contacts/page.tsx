import { Hero } from '@/components/shared/hero';
import { Map } from './_components/map';
import { Contacts } from './_components/contacts';
import { Faqs } from './_components/faqs';
import { Container } from '@/components/shared/container';

export default function ServicesPage() {
  return (
    <>
      <Hero
        keyword="contacts"
        imagesUrl={[
          '/contacts-hero-1.jpg',
          '/contacts-hero-2.jpg',
          '/contacts-hero-3.jpg',
          '/contacts-hero-4.jpg',
          '/contacts-hero-5.jpg',
        ]}
      />
      <Container>
        <div className="my-32 max-w-6xl mx-auto">
          <Map />
        </div>
        <Contacts />
        <Faqs />
      </Container>
    </>
  );
}
