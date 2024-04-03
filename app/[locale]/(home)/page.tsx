import { About } from './_components/about/about';
import { Banner } from './_components/banner/banner';
import { Hero } from './_components/hero';
import { Services } from './_components/services/services';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Banner />
      <About />
      <div>fleet</div>
      <div>contacts</div>
    </div>
  );
}
