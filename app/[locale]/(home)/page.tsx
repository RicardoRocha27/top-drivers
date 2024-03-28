import { Banner } from "./_components/banner/banner";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services/services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Banner />
      <div>about</div>
      <div>fleet</div>
      <div>contacts</div>
    </div>
  );
}
