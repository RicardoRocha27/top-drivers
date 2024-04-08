import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <Container>
      <div className="max-w-5xl mx-auto my-16">
        <div className="flex justify-between items-center flex-col md:flex-row gap-8">
          <div className="flex items-center text-center md:text-start md:items-start flex-col w-full gap-8">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-md"
              style={{ fontFamily: "Times New Roman" }}
            >
              We are changing the way people travel.
            </h1>
            <p className="text-sm text-foreground/80 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem maxime nam aperiam voluptas delectus fugit!
            </p>
            <Button className="w-fit" variant="accent">
              Contact us
            </Button>
          </div>
          <div className="relative w-full h-[600px]">
            <Image
              alt="Hero image"
              src="/about-hero.png"
              fill
              className="object-center object-contain"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
