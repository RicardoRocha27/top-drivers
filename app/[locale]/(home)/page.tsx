import { About } from "./_components/about/about";
import { Banner } from "./_components/banner/banner";
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
      <div>contacts</div>
    </div>
  );
}
