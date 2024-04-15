import { Header } from "@/components/shared/header";
import { StatisticCard } from "../_components/statistic-card";
import { Container } from "@/components/shared/container";

export const Statistics = () => {
  return (
    <Container>
      <div className="mt-32">
        <Header translationKeyword="about.statistics" />
        <div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 align-bottom"
          style={{ alignItems: "end" }}
        >
          <StatisticCard
            number="250k"
            label="Users on the platform"
            description="Vel labore deleniti veniam consequuntur sunt nobis."
            bgColor="bg-foreground"
            textColor="text-background"
            height="200px"
          />
          <StatisticCard
            number="$8.9 billion"
            label="We're proud that our customers have made over $8 billion in total revenue."
            description="Eu duis porta aliquam ornare. Elementum eget magna egestas."
            bgColor="bg-secondary"
            textColor="text-foreground"
            height="300px"
          />
          <StatisticCard
            number="401,093"
            label="Transactions this year"
            description="Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu duis porta aliquam ornare."
            bgColor="bg-accent"
            textColor="text-background"
            height="250px"
          />
        </div>
      </div>
    </Container>
  );
};
