import { Container } from "@/components/shared/container";
import Image from "next/image";

export const Banner = () => {
  return (
    <Container>
      <div className="w-full my-32 h-[300px] relative">
        <Image
          src="/about-banner.png"
          alt="banner"
          fill
          className="object-center object-cover rounded-lg"
        />
      </div>
    </Container>
  );
};
