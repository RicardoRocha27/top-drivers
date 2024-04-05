import { Container } from "@/components/shared/container";
import { Header } from "@/components/shared/header";
import { FleetGrid } from "./fleet-grid";

export const Fleet = () => {
  return (
    <Container>
      <div className="rounded-lg bg-secondary py-16 px-4 my-32">
        <div className="max-w-6xl mx-auto space-y-28 md:space-y-12">
          <div className="gap-4 flex flex-col lg:flex-row justify-between">
            <div className="md:max-w-md">
              <Header translationKeyword="fleet" />
            </div>
          </div>
          <FleetGrid />
        </div>
      </div>
    </Container>
  );
};
