// pages/stats.tsx
import StatisticCard from '@/app/[locale]/about/_components/statistic-card';
import { Container } from '@/components/shared/container';
export const Statistics: React.FC = () => {
  return (
    <Container>
      <div className="mt-32">
        <h2
          className="text-4xl md:text-6xl mb-8"
          style={{ fontFamily: 'Times New Roman' }}
        >
          Our approach
        </h2>
        <p className="mb-10 lg:w-1/2 text-sm text-foreground/80">
          Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod
          lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id.
          Integer vel nibh.
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 align-bottom"
          style={{ alignItems: 'end' }}
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
          {/* You can add more StatisticCard components here */}
        </div>
      </div>
    </Container>
  );
};
