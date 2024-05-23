import { Hero } from "@/components/shared/hero";
import { Map } from "./_components/map";
import { Contacts } from "./_components/contacts";
import { Faqs } from "./_components/faqs";
import { Container } from "@/components/shared/container";

export default function ServicesPage() {
  return (
    <>
      <Hero
        keyword="contacts"
        imagesUrl={[
          "/home-hero.jpg",
          "/home-hero.jpg",
          "/home-hero.jpg",
          "/home-hero.jpg",
          "/home-hero.jpg",
        ]}
      />
      <Container>
        <div className="my-32">
          <Map />
        </div>
        <Contacts />
        <Faqs />
      </Container>
    </>
  );
}
