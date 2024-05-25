import { Hero } from '@/components/shared/hero';
import { Map } from './_components/map';
import { Contacts } from './_components/contacts';
import { Faqs } from './_components/faqs';
import { Container } from '@/components/shared/container';
import Hero1 from '@/public/contacts-hero-1.jpg';
import Hero2 from '@/public/contacts-hero-2.jpg';
import Hero3 from '@/public/contacts-hero-3.jpg';
import Hero4 from '@/public/contacts-hero-4.jpg';
import Hero5 from '@/public/contacts-hero-5.jpg';

export default function ServicesPage() {
  return (
    <>
      <Hero
        keyword="contacts"
        imagesUrl={[Hero1, Hero2, Hero3, Hero4, Hero5]}
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
