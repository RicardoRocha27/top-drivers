import { Container } from "@/components/shared/container";
import { ServicesDesktop } from "./services-desktop";
import { ServicesTablet } from "./services-tablet";
import { ServicesMobile } from "./services-mobile";

export const Services = () => {
  return (
    <Container>
      <ServicesDesktop />
      <ServicesTablet />
      <ServicesMobile />
    </Container>
  );
};
