import { Hero } from '@/components/shared/hero';
import { ContactsForm } from '../(home)/_components/contacts/contacts-form';
import Faq from '@/app/[locale]/contacts/_components/faq';
import Map from '@/app/[locale]/contacts/_components/map';
import ContactsInfo from '@/app/[locale]/contacts/_components/contacts-info';
import { Container } from '@/components/shared/container';
export default function ServicesPage() {
  return (
    <>
      <Hero keyword="contacts" imagesUrl={['/home-hero.jpg']} />
      <Container>
        <div className="flex flex-col space-y-16">
          <Map />
          <div className="flex space-x-10">
            <div className="flex flex-col space-y-8">
              <ContactsInfo />
            </div>
            <ContactsForm />
          </div>
          <Faq />
        </div>
      </Container>
    </>
  );
}
