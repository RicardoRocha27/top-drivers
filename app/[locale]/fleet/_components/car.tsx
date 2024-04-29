import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { BriefcaseBusiness, Users } from "lucide-react";
import Image from "next/image";
import { CarCarousel } from "./car-carousel";

export const Car = ({
  imageUrl,
  carName,
  availablePlaces,
  availableBags,
  images,
}: Fleet) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="relative w-full  cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out">
          <Image
            width={500}
            height={500}
            src={imageUrl}
            alt="car"
            className="object-center object-cover w-full rounded-lg"
          />
          <div className="flex justify-between mt-4">
            <h1 className="font-semibold text-lg">{carName}</h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center p-2 space-x-2 bg-primary rounded-md">
                <Users size={12} />
                <p className="font-bold text-sm">{availablePlaces}</p>
              </div>
              <div className="flex items-center p-2 space-x-2 bg-primary rounded-md">
                <BriefcaseBusiness size={12} />
                <p className="font-bold text-sm">{availableBags}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div>
          <h1 className="font-semibold text-lg">{carName}</h1>
          <p className="max-w-xl text-foreground/80 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <CarCarousel images={images} />
      </DialogContent>
    </Dialog>
  );
};
