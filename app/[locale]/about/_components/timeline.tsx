import React from "react";
import { TimelineEvent } from "../_components/timeline-event";
import { Container } from "@/components/shared/container";

export const Timeline = () => {
  return (
    <Container>
      <div className="max-w-6xl mx-auto my-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <TimelineEvent
            date="Mar 2023"
            title="Expanded Market Reach"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
          />
          <TimelineEvent
            date="Jun 2023"
            title="Milestone Achieved"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <TimelineEvent
            date="Sep 2023"
            title="Series A Funding"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <TimelineEvent
            date="Dec 2023"
            title="Product Launch"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
        </div>
      </div>
    </Container>
  );
};
