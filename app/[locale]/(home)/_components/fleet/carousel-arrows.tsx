"use client";

import { Button } from "@/components/ui/button";
import { useCarousel } from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export const CarouselArrows = () => {
  const params = useParams();
  const { scrollNext, scrollPrev, canScrollNext, canScrollPrev } =
    useCarousel();

  return (
    <div className="absolute z-10 space-x-4 flex items-center -top-[92px] md:right-0">
      <Button variant="accent" asChild>
        <Link href={`${params.locale}/fleet`}>All Vehicles</Link>
      </Button>
      <Button
        variant="accent"
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        size="icon"
      >
        <ArrowLeft size={16} />
      </Button>
      <Button
        variant="accent"
        disabled={!canScrollNext}
        onClick={scrollNext}
        size="icon"
      >
        <ArrowRight size={16} />
      </Button>
    </div>
  );
};
