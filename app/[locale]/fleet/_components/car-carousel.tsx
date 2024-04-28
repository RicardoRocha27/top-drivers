import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type CarCarouselProps = {
  images: string[];
};

export const CarCarousel = ({ images }: CarCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
    >
      <CarouselContent>
        {images.map((imageUrl, index) => (
          <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3 ">
            <Image
              src={imageUrl}
              alt="car"
              width={800}
              height={800}
              className="object-center object-cover w-full rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
