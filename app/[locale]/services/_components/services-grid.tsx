import { Container } from "@/components/shared/container";
import { ServiceItem } from "./service-item";

export const ServicesGrid = () => {
  return (
    <Container>
      <div className="my-32 space-y-32">
        <div className="bg-secondary rounded-lg w-full pt-16 pb-16 lg:pb-32 px-4">
          <div className="max-w-6xl mx-auto">
            <ServiceItem
              firstImageUrl="/home-hero.jpg"
              secondImageUrl="/home-hero.jpg"
              title="Executive"
              subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              firstDescriptionTitle="Nesciunt pariatur"
              firstDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum, quae corporis tenetur delectus in exercitationem fugit accusamus quisquam dolores, pariatur vitae magnam ratione itaque! Enim asperiores modi praesentium in."
              secondDescriptionTitle="Nesciunt pariatur"
              secondDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum, quae corporis tenetur delectus in exercitationem fugit accusamus quisquam dolores, pariatur vitae magnam ratione itaque! Enim asperiores modi praesentium in."
              id="executive"
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <ServiceItem
            firstImageUrl="/home-hero.jpg"
            secondImageUrl="/home-hero.jpg"
            title="Weddings"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            firstDescriptionTitle="Nesciunt pariatur"
            firstDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum, quae corporis tenetur delectus in exercitationem fugit accusamus quisquam dolores, pariatur vitae magnam ratione itaque! Enim asperiores modi praesentium in."
            secondDescriptionTitle="Nesciunt pariatur"
            secondDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum, quae corporis tenetur delectus in exercitationem fugit accusamus quisquam dolores, pariatur vitae magnam ratione itaque! Enim asperiores modi praesentium in."
            id="weddings"
            isReversed
          />
        </div>
        <div className="bg-secondary rounded-lg w-full pt-16 pb-32 px-4">
          <div className="max-w-6xl mx-auto">
            <ServiceItem
              firstImageUrl="/home-hero.jpg"
              secondImageUrl="/home-hero.jpg"
              title="Tours"
              subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              firstDescriptionTitle="Nesciunt pariatur"
              firstDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum, quae corporis tenetur delectus in exercitationem fugit accusamus quisquam dolores, pariatur vitae magnam ratione itaque! Enim asperiores modi praesentium in."
              secondDescriptionTitle="Nesciunt pariatur"
              secondDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum, quae corporis tenetur delectus in exercitationem fugit accusamus quisquam dolores, pariatur vitae magnam ratione itaque! Enim asperiores modi praesentium in."
              id="tours"
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <ServiceItem
            firstImageUrl="/home-hero.jpg"
            secondImageUrl="/home-hero.jpg"
            title="Night Life"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            firstDescriptionTitle="Nesciunt pariatur"
            firstDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum, quae corporis tenetur delectus in exercitationem fugit accusamus quisquam dolores, pariatur vitae magnam ratione itaque! Enim asperiores modi praesentium in."
            secondDescriptionTitle="Nesciunt pariatur"
            secondDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum, quae corporis tenetur delectus in exercitationem fugit accusamus quisquam dolores, pariatur vitae magnam ratione itaque! Enim asperiores modi praesentium in."
            id="night-life"
            isReversed
          />
        </div>
      </div>
    </Container>
  );
};
