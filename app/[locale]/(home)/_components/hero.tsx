import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <Container>
      {/* TODO: MAYBE CHANGE HEIGHT TO BE RESPONSIVE */}
      <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] relative">
        <div className="absolute size-full z-10 bg-gradient-to-br from-background/80 md:from-background/70 to-background/0" />
        <Image
          alt="mercedes benz car"
          src="/home-hero.jpg"
          fill
          className="object-cover object-center rounded-xl"
        />
        <div className="absolute z-20 space-y-8 p-6 sm:p-8 md:p-12 w-full">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-md"
            style={{ fontFamily: "Times New Roman" }}
          >
            Portugal <span className="text-accent">Transfer Services</span>
          </h1>
          <p className="text-sm text-foreground/80 max-w-md">
            Experience excellence through our services, offering exquisite
            quality and comfort tailored to meet your unique needs.
          </p>
          <Button variant="accent">Contact us</Button>
        </div>
      </div>
    </Container>
  );
};
