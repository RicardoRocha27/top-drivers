import { BriefcaseBusiness, Users } from "lucide-react";
import Image from "next/image";

type FleetCardProps = {
  imageUrl: string;
  carName: string;
  availablePlaces: number;
  availableBags: number;
};

export const FleetCard = ({
  imageUrl,
  carName,
  availablePlaces,
  availableBags,
}: FleetCardProps) => {
  return (
    <div className="h-full space-y-2 w-full">
      <div className="relative">
        <div className="absolute size-full z-10 bg-accent/5 rounded-lg top-0 left-0" />
        <Image
          alt={carName}
          src={imageUrl}
          height={400}
          width={400}
          className="object-center w-full object-cover rounded-lg"
        />
      </div>
      <div className="h-full space-y-1">
        <h1>{carName}</h1>
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
  );
};
