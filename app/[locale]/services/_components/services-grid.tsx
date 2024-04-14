import { Container } from "@/components/shared/container";
import { ServiceItem } from "./service-item";
import { Header } from "@/components/shared/header";

export const ServicesGrid = () => {
  return (
    <Container>
      <div className="max-w-5xl mx-auto my-32 space-y-16">
        <ServiceItem
          urlKey="executive"
          imageUrl="/home-executive.jpg"
          title="Executive"
          description="TopDrivers is constantly in pursuit for a delighted and confident Client! For this reason, we assist you with anything you may need, from ground transportation with reliable chauffeurs to arranging private jets, restaurant, theater or event bookings, private tours and much more...From everything to anything you may need, TopDrivers will be there for you, available 24/7 to take you anywhere, anytime!"
          isImageFirst
        />
        <ServiceItem
          urlKey="weddings"
          imageUrl="/home-weddings.jpg"
          title="Weedings"
          description="TopDrivers is constantly in pursuit for a delighted and confident Client! For this reason, we assist you with anything you may need, from ground transportation with reliable chauffeurs to arranging private jets, restaurant, theater or event bookings, private tours and much more...From everything to anything you may need, TopDrivers will be there for you, available 24/7 to take you anywhere, anytime!"
        />
        <ServiceItem
          urlKey="tours"
          imageUrl="/home-tours.jpg"
          title="Tours"
          description="TopDrivers is constantly in pursuit for a delighted and confident Client! For this reason, we assist you with anything you may need, from ground transportation with reliable chauffeurs to arranging private jets, restaurant, theater or event bookings, private tours and much more...From everything to anything you may need, TopDrivers will be there for you, available 24/7 to take you anywhere, anytime!"
          isImageFirst
        />
        <ServiceItem
          urlKey="night-life"
          imageUrl="/home-night-life.jpg"
          title="Night Life"
          description="TopDrivers is constantly in pursuit for a delighted and confident Client! For this reason, we assist you with anything you may need, from ground transportation with reliable chauffeurs to arranging private jets, restaurant, theater or event bookings, private tours and much more...From everything to anything you may need, TopDrivers will be there for you, available 24/7 to take you anywhere, anytime!"
        />
      </div>
    </Container>
  );
};
