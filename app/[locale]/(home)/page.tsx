import { About } from "./_components/about/about";
import { Banner } from "./_components/banner/banner";
import { Contacts } from "./_components/contacts/contacts";
import { Fleet } from "./_components/fleet/fleet";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services/services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Banner />
      <About />
      <Fleet />
      <Contacts />
    </div>
  );
}
