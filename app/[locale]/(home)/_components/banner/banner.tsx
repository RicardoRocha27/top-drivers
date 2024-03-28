import { Container } from "@/components/shared/container";
import { BannerIcon } from "./banner-icon";
import { CalendarCheck, Handshake, ShieldCheck, UserCheck } from "lucide-react";

export const Banner = () => {
  return (
    <Container>
      <div className="bg-secondary rounded-lg w-full py-16 px-4 my-32">
        <div className="grid grid-cols-4 gap-20 max-w-6xl mx-auto">
          <BannerIcon
            icon={<ShieldCheck className="size-8" />}
            title="Safety First"
            description="Lorem ipsum dolor sit amet consectetur dui iaculis."
          />
          <BannerIcon
            icon={<Handshake className="size-8" />}
            title="Comprehensive Services"
            description="Lorem ipsum dolor sit amet consectetur dui iaculis."
          />
          <BannerIcon
            icon={<UserCheck className="size-8" />}
            title="Reliable Chauffeurs"
            description="Lorem ipsum dolor sit amet consectetur dui iaculis."
          />
          <BannerIcon
            icon={<CalendarCheck className="size-8" />}
            title="24/7 Availability"
            description="Lorem ipsum dolor sit amet consectetur dui iaculis."
          />
        </div>
      </div>
    </Container>
  );
};
