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
          "/home-hero.png",
          "/home-hero.png",
          "/home-hero.png",
          "/home-hero.png",
          "/home-hero.png",
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
